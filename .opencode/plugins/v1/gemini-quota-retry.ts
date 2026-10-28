// V1 ONLY (OpenCode 1.x). Kept for reference; the 2.x port is at ../gemini-quota-retry.ts
// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch: the provider 429 that says the project's quota is used up.
// The exact text we saw from Gemini (free tier):
//   "You exceeded your current quota, please check your plan and billing details.
//    ... * Quota exceeded for metric:
//    generativelanguage.googleapis.com/generate_content_free_tier_input_token_count,
//    limit: 250000, model: gemini-3.5-flash-lite ...
//    Please retry in 23.331327004s."
//
// Unlike a network break, there is nothing broken: the request was fine, the
// project simply spent its window. And unlike every other retry plugin here,
// the provider TELLS US how long to wait, so we honour that number instead of
// using a fixed delay - plus a small margin, because the countdown started
// when Google built the error, not when we read it.
//
// Quota windows can be a minute (RPM/TPM) or a whole day (RPD). Short hints
// are worth honouring; a hard daily cap is not, so the wait is clamped and the
// brake stops the loop rather than spinning all night.
const MATCHES = [
  "you exceeded your current quota", // Gemini's exact sentence
  "quota exceeded for metric", // Gemini's metric bullet
  "resource_exhausted", // the gRPC status name Google puts in its JSON
]

// How long to wait when the error carries no hint at all: 60 seconds, which is
// the rolling TPM/RPM window that this error almost always refers to.
const FALLBACK_WAIT_MS = 60_000

// Grace added to the provider's own hint (round trip + clock skew). Waiting
// exactly 23.33s would retry a fraction of a second too early and burn an
// attempt on a window that has not reopened yet.
const MARGIN_MS = 2_000

// Never sleep longer than this on a single hint. Anything past 10 minutes is a
// daily/billing cap rather than a rolling window - the brake handles those.
const MAX_WAIT_MS = 10 * 60_000

// Emergency brake: stop after this many CONSECUTIVE quota failures in a row.
// "Consecutive" means with no `session.idle` success in between. ~20 attempts
// at real-world hints is roughly 8 minutes of recovery, which covers TPM/RPM
// exhaustion; a daily cap just keeps failing and gets braked instead.
const MAX_CONSECUTIVE = 20

// The tiny message we send. One nudge resumes the task from history, exactly
// like typing "continue" by hand - and it costs almost no input tokens, which
// matters because input tokens are the very thing this quota meters.
const CONTINUE_TEXT = "please continue"

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting several timers for the same session.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
// Once braked, we stay silent until a `session.idle` proves the session works.
const stopped = new Set<string>()

// Event-type breadcrumb (once per type per restart): if this 429 ever arrives
// as something other than `session.error`, the logs say which type it was.
const seenTypes = new Set<string>()

// Parse the provider's own "retry in Ns" hint. Handles both the human sentence
//   Please retry in 23.331327004s.
// and Google's JSON field
//   "retryDelay": "23s"
// Returns the LONGEST hint found (a payload can quote several models), already
// clamped and padded with the margin. `null` when there is no hint at all.
const RETRY_HINT = /retry(?:delay)?(?:\s+in)?["'\s:]*([\d.]+)\s*s(?:ec(?:onds?)?)?\b/gi

function hintedWaitMs(text: string): number | null {
  let bestSeconds = 0
  for (const match of text.matchAll(RETRY_HINT)) {
    const seconds = Number.parseFloat(match[1])
    if (Number.isFinite(seconds) && seconds > bestSeconds) bestSeconds = seconds
  }
  if (bestSeconds <= 0) return null
  return Math.min(Math.ceil(bestSeconds * 1_000) + MARGIN_MS, MAX_WAIT_MS)
}

// Small helper: toasts must never break the retry. If the TUI client is
// missing (headless run, odd version), we log and carry on with the timer.
async function toast(client: any, message: string, variant: string): Promise<void> {
  try {
    await client.tui.showToast({ body: { message, variant } })
  } catch {
    try {
      await client.app.log({
        body: { service: "gemini-quota-retry", level: "warn", message: `toast failed: ${message}` },
      })
    } catch {
      // Last resort: silence. The retry timer below still runs.
    }
  }
}

// Every plugin exports a function. OpenCode calls it once at startup.
export const GeminiQuotaRetry: Plugin = async ({ client }: any) => {
  return {
    event: async ({ event }: any) => {
      if (event?.type && !seenTypes.has(event.type)) {
        seenTypes.add(event.type)
        try {
          await client.app.log({
            body: { service: "gemini-quota-retry", level: "debug", message: `saw event type: ${event.type}` },
          })
        } catch {
          // Logging must never break the plugin.
        }
      }

      // Case 1: session finished fine. One success breaks the failure streak,
      // so we reset everything: unlock the timer, reset the counter, lift the
      // brake.
      if (event.type === "session.idle") {
        const id = (event.properties as any)?.sessionID as string
        if (id) {
          pending.delete(id)
          consecutive.delete(id)
          stopped.delete(id)
        }
        return // do nothing else
      }

      // Case 2: ignore everything that is NOT an error.
      if (event.type !== "session.error") return

      // Turn the whole error event into text so we can search it. The message
      // can hide in `error`, `message`, `error.message`, `detail`, or a
      // provider wrapper.
      const raw = JSON.stringify(event.properties ?? event)
      const text = raw.toLowerCase()

      // If this is some other failure (network, model-turn, bang/lock storms,
      // endpoint-down, ...) it is owned by the other plugins. Ignore it.
      if (!MATCHES.some((fragment) => text.includes(fragment))) return

      // Get the session ID. `properties.sessionID` is the common shape, but a
      // 429 payload may nest it, so try the common alternates first.
      const sessionID = ((event.properties as any)?.sessionID ??
        (event.properties as any)?.session?.id ??
        (event.properties as any)?.sessionId ??
        "") as string

      if (!sessionID) {
        try {
          await client.app.log({
            body: {
              service: "gemini-quota-retry",
              level: "warn",
              message: `matched a quota 429 but no sessionID in payload head=${text.slice(0, 200)}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
        return
      }

      // If we already scheduled a retry for this session, stop.
      if (pending.has(sessionID)) return

      // If the brake already tripped for this session, stay silent.
      if (stopped.has(sessionID)) return

      const used = consecutive.get(sessionID) ?? 0

      // Emergency brake: N quota failures in a row with no success between.
      // Latch the session as stopped so further 429s do NOT spam more toasts.
      if (used >= MAX_CONSECUTIVE) {
        stopped.add(sessionID)
        pending.delete(sessionID)
        await toast(
          client,
          `Quota 429 ${MAX_CONSECUTIVE}x in a row, brake ON. Looks like a hard daily cap or a billing ` +
            `problem - check https://ai.dev/rate-limit or switch model, then start a new session.`,
          "error"
        )
        return
      }

      // The provider usually tells us exactly how long to wait. Fall back to
      // one TPM window when it does not.
      const hinted = hintedWaitMs(raw)
      const waitMs = hinted ?? FALLBACK_WAIT_MS
      const waitSeconds = (waitMs / 1_000).toFixed(1)
      const hintSeconds = hinted === null ? null : (hinted - MARGIN_MS) / 1_000

      try {
        await client.app.log({
          body: {
            service: "gemini-quota-retry",
            level: "info",
            message:
              `quota 429 (${hintSeconds === null ? "no hint, TPM window" : `hint ${hintSeconds}s + ${MARGIN_MS / 1_000}s margin`}) ` +
              `waiting ${waitSeconds}s (${used + 1}/${MAX_CONSECUTIVE}) head=${text.slice(0, 200)}`,
          },
        })
      } catch {
        // Logging must never break the plugin.
      }

      // Mark this session as "retry scheduled" so we don't double-schedule.
      pending.add(sessionID)
      // Bump the consecutive-failure streak (resets to 0 on next success).
      consecutive.set(sessionID, used + 1)

      await toast(
        client,
        `Quota 429, saying "please continue" in ${waitSeconds}s... (${used + 1}/${MAX_CONSECUTIVE})`,
        "warning"
      )

      // Wait the provider's own hint (plus margin), then nudge the session.
      setTimeout(async () => {
        try {
          // Send a FRESH tiny message on the SAME model (no model field = no
          // switch). The agent keeps full history, resumes the broken task,
          // and the next request leaves the exhausted window alone.
          await client.session.prompt({
            path: { id: sessionID },
            body: { parts: [{ type: "text", text: CONTINUE_TEXT }] },
          })
          pending.delete(sessionID)
        } catch {
          // If something crashed (e.g. session deleted), just unlock.
          pending.delete(sessionID)
        }
      }, waitMs)
    },
  }
}
