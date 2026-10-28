// OpenCode 2.x plugin (Desktop 2.x). Self-contained on purpose: it imports
// nothing but `@opencode/plugin`, so it keeps working even if the other retry
// plugins are reorganised.
//
// What we catch: the provider 429 that says the project's quota is used up.
// The exact text we saw from Gemini (free tier):
//   "You exceeded your current quota, please check your plan and billing details.
//    ... * Quota exceeded for metric:
//    generativelanguage.googleapis.com/generate_content_free_tier_input_token_count,
//    limit: 250000, model: gemini-3.5-flash-lite, description: Generate content
//    input tokens per minute limit exceeded on Free Tier ...
//    Please retry in 23.331327004s."
//
// Two things separate this plugin from its siblings:
//   1. The provider TELLS US how long to wait ("Please retry in 23.33s"), so we
//      wait that long instead of a fixed delay - plus a small margin for the
//      round trip, because the countdown started when Google built the error.
//   2. A quota window can be a minute (TPM/RPM) or a whole day (RPD). Short
//      hints are worth honouring; a hard daily cap is not, so the wait is
//      clamped and the brake stops the loop instead of spinning all night.
//
// Recovery is identical to the other retry plugins: wait, then send
// "please continue" so the agent resumes the existing task from history.
//
// V2 notes (why this file looks different from the .opencode/plugins/v1 copy):
//   * `Plugin.define({ id, setup })` replaces the V1 named-export function.
//   * Events arrive from `ctx.event.subscribe()` and carry `data` (V1 used
//     `properties`); both shapes are read below.
//   * `ctx.session.prompt({ sessionID, text })` replaces
//     `client.session.prompt({ path, body })`.
//   * There is no toast surface, so the user-visible line goes to the server
//     console instead.
//   * V2 emits `session.error` and then still lets the session go idle, so a
//     plain idle is NOT proof of a healthy turn - `errorSeen` remembers that a
//     quota failure just happened, otherwise the brake counter would be wiped
//     after every attempt and the brake would never engage.

import { Plugin } from "@opencode/plugin"

// Stable lowercased fragments. ANY of them marks the payload as a quota 429.
// We only ever inspect provider error payloads (never assistant prose), so
// these cannot fire mid-answer.
const MATCHES = [
  "you exceeded your current quota", // Gemini's exact sentence
  "quota exceeded for metric", // Gemini's metric bullet
  "resource_exhausted", // the gRPC status name Google puts in its JSON
]

// Grace added to the provider's own hint, covering our round trip + clock skew.
// Waiting exactly 23.33s would retry a fraction of a second too early and burn
// an attempt on a window that has not reopened yet.
const MARGIN_MS = 2_000

// Never sleep longer than this on a single hint. A hint past 10 minutes is a
// daily/billing cap, not a rolling window - the brake below handles those.
const MAX_WAIT_MS = 10 * 60_000

// Used when the error carries no hint at all. 60s matches the TPM/RPM window,
// which is the overwhelmingly common case for this error.
const FALLBACK_WAIT_MS = 60_000

// Emergency brake: stop after this many CONSECUTIVE quota failures.
// 20 attempts at ~25s of real-world hints is roughly 8 minutes of recovery,
// which covers TPM/RPM exhaustion. A hard daily cap (or a billing problem)
// would just keep failing, so the brake trips and stays silent.
const MAX_CONSECUTIVE = 20

// The tiny message we send. One nudge resumes the task from history, exactly
// like typing "continue" by hand - and it costs almost no input tokens, which
// matters because input tokens are the very thing this quota meters.
const CONTINUE_TEXT = "please continue"

// Quota errors are 429s that surface as an error event, because V2's own
// retry has already given up by the time the user sees one. We never react to
// `session.status` retry events: while the built-in retry is running there is
// nothing for us to do, and nudging on top of it would double-send prompts.

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

// Flatten every string in the payload: the message can hide in `message`,
// `error.message`, `data.message`, `responseBody`, or a provider wrapper.
function collectStrings(value: unknown, out: string[]): void {
  if (typeof value === "string") {
    out.push(value)
  } else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out)
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value as Record<string, unknown>)) collectStrings(item, out)
  }
}

function log(level: "info" | "warn" | "error", message: string): void {
  const line = `[gemini-quota-retry] ${message}`
  if (level === "error") console.error(line)
  else if (level === "warn") console.warn(line)
  else console.log(line)
}

export default Plugin.define({
  id: "modelcomp.gemini-quota-retry",
  setup(ctx: any) {
    const controller = new AbortController()

    // A Map of sessionID -> armed timer, so we can cancel a pending nudge and
    // never start two timers for the same session.
    const timers = new Map<string, ReturnType<typeof setTimeout>>()
    // Sessions with a nudge already scheduled.
    const pending = new Set<string>()
    // Consecutive quota failures per session (no clean turn in between).
    const consecutive = new Map<string, number>()
    // Sessions where the brake tripped; stays latched until a clean turn.
    const stopped = new Set<string>()
    // Sessions whose current turn died on a provider error, so the following
    // `session.idle` must NOT reset the failure streak.
    const errorSeen = new Set<string>()

    const clearTimer = (sessionID: string): void => {
      const timer = timers.get(sessionID)
      if (timer) {
        clearTimeout(timer)
        timers.delete(sessionID)
      }
    }

    // A genuinely clean turn: unlock everything and forget the streak.
    const resetSession = (sessionID: string): void => {
      clearTimer(sessionID)
      pending.delete(sessionID)
      consecutive.delete(sessionID)
      stopped.delete(sessionID)
    }

    const sendContinue = async (sessionID: string): Promise<void> => {
      try {
        await ctx.session.prompt({ sessionID, text: CONTINUE_TEXT })
        log("info", `sent "${CONTINUE_TEXT}" (${sessionID})`)
      } catch (error) {
        // Session deleted, provider still refusing, ... : just unlock so the
        // next quota error can schedule again.
        log("warn", `could not nudge session: ${String(error)}`)
      } finally {
        pending.delete(sessionID)
      }
    }

    const scheduleRetry = (sessionID: string, waitMs: number, hintSeconds: number | null): void => {
      if (pending.has(sessionID) || stopped.has(sessionID)) return

      const used = consecutive.get(sessionID) ?? 0

      if (used >= MAX_CONSECUTIVE) {
        stopped.add(sessionID)
        pending.delete(sessionID)
        log(
          "error",
          `quota 429 ${MAX_CONSECUTIVE}x in a row, brake ON. This looks like a hard daily cap or a billing problem - ` +
            `check https://ai.dev/rate-limit or switch model/provider, then start a new session.`,
        )
        return
      }

      pending.add(sessionID)
      consecutive.set(sessionID, used + 1)

      const waitSeconds = (waitMs / 1_000).toFixed(1)
      const source = hintSeconds === null ? "no hint, TPM window" : `hint ${hintSeconds}s + ${MARGIN_MS / 1_000}s margin`
      log(
        "warn",
        `quota 429 (${source}): sending "${CONTINUE_TEXT}" in ${waitSeconds}s (${used + 1}/${MAX_CONSECUTIVE}) (${sessionID})`,
      )
      if (hintSeconds !== null && hintSeconds * 1_000 + MARGIN_MS > MAX_WAIT_MS) {
        log("warn", `hint was longer than ${MAX_WAIT_MS / 60_000}min; waiting the clamped ${waitSeconds}s instead`)
      }

      const timer = setTimeout(() => {
        timers.delete(sessionID)
        void sendContinue(sessionID)
      }, waitMs)
      timers.set(sessionID, timer)
    }

    const onError = (sessionID: string, data: Record<string, any>): void => {
      const strings: string[] = []
      collectStrings(data, strings)
      const raw = strings.join("\n")
      const text = raw.toLowerCase()

      if (!MATCHES.some((fragment) => text.includes(fragment))) return

      if (!sessionID) {
        log("warn", `matched a quota 429 but the event carried no sessionID head=${text.slice(0, 200)}`)
        return
      }

      // The turn died on a provider error: keep the streak even if an idle follows.
      errorSeen.add(sessionID)

      const hinted = hintedWaitMs(raw)
      scheduleRetry(sessionID, hinted ?? FALLBACK_WAIT_MS, hinted === null ? null : (hinted - MARGIN_MS) / 1_000)
    }

    void (async () => {
      try {
        for await (const event of ctx.event.subscribe({ signal: controller.signal })) {
          try {
            const raw = (event ?? {}) as Record<string, any>
            const data = (raw.data ?? raw.properties ?? {}) as Record<string, any>
            const sessionID = String(data.sessionID ?? data.session?.id ?? data.sessionId ?? "")

            if (raw.type === "session.step.failed" || raw.type === "session.execution.failed") {
              // OpenCode 2.2 names for a provider failure; the text is on
              // `data.error`. 2.0/2.1 used `session.error` (kept below).
              onError(sessionID, (data.error ?? data) as Record<string, any>)
              continue
            }

            if (raw.type === "session.retry.scheduled") {
              // The runtime retries on its own; only remember that this turn
              // died so the idle that follows cannot reset the streak.
              const strings: string[] = []
              collectStrings(data.error, strings)
              const retryText = strings.join("\n").toLowerCase()
              if (sessionID && MATCHES.some((fragment) => retryText.includes(fragment))) errorSeen.add(sessionID)
              continue
            }

            if (raw.type === "session.status" && data.status?.type === "retry" && sessionID) {
              // 2.2 also surfaces transient failures as a retry status.
              const message = String(data.status.message ?? "").toLowerCase()
              if (MATCHES.some((fragment) => message.includes(fragment))) errorSeen.add(sessionID)
              continue
            }

            if (raw.type === "session.error") {
              onError(sessionID, data)
              continue
            }

            if (raw.type === "session.idle") {
              if (!sessionID) continue
              if (errorSeen.delete(sessionID)) {
                // The idle belongs to the failed turn: keep the counter and the
                // armed timer, only drop the marker.
                continue
              }
              resetSession(sessionID)
              continue
            }

            if (raw.type === "session.deleted") {
              if (!sessionID) continue
              errorSeen.delete(sessionID)
              resetSession(sessionID)
            }
          } catch (error) {
            log("warn", `event handler failed: ${String(error)}`)
          }
        }
      } catch {
        // aborted on unload
      }
    })()

    return () => {
      controller.abort()
      for (const timer of timers.values()) clearTimeout(timer)
      timers.clear()
    }
  },
})
