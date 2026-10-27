// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch: provider gateway timeouts where the endpoint never sends
// response headers. DeepSeek 4.1 Flash drops this way sometimes with
//   "Provider response headers timed out after 300000ms"
// The millisecond count varies with the configured timeout, so we only match
// the stable fragment before it. Any model/provider can send the same error,
// so the plugin is deliberately global (no model filter).
//
// Two arrival shapes (same lesson as bang-drop-retry.ts):
//   1. as a `session.error` event (the common case), or
//   2. SILENTLY: the text lands in the transcript as a NORMAL assistant
//      message, followed by a plain `session.idle` — no error event at all.
// Case 1a in the hook below re-reads the last assistant message on every
// `session.idle`, so shape 2 can not slip through.
// Recovery is the same for both: wait DELAY, then send "continue".

// Stable, lowercase fragments of the error text. Matching is
// case-insensitive on the FULL text; any fragment here trips the plugin.
// Deliberately exclude the "...after Nms" tail (it varies with config).
// Add more fragments here if a sibling error shows up (e.g. body timeouts).
const PATTERNS = ["provider response headers timed out"]

// How long to wait before saying "continue": 10 seconds = 10_000 milliseconds.
// The endpoint already hung for minutes, so we only give it a short moment
// to shed the broken connection before nudging the session forward.
const DELAY = 10_000

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no clean `session.idle` success in between.
// 30 means: 30x timeouts back-to-back -> we assume the outage is real
// and stop auto-retrying so we don't loop forever.
// Any single success resets the counter back to 0.
const MAX_CONSECUTIVE = 30

// The tiny message we send instead of re-sending your last message.
// One "continue" resumes the existing task from history, just like when
// you type "continue" by hand.
const CONTINUE_TEXT = "continue"

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting 5 timers for the same session.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
// Example: "ses_abc123" -> 2 means 2x header timeouts in a row.
// Any clean `session.idle` (one good answer) resets this back to 0.
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
// Once braked, we stay silent until a clean `session.idle` proves the
// session works again (which removes it from here).
const stopped = new Set<string>()

// A Map remembers, per session, the ID of the last assistant message we
// already judged on `session.idle` (silent-drop path). Stops
// double-counting when `session.idle` fires twice for the same message.
const handledMessage = new Map<string, string>()

// Walk any value and collect every string inside it (nested objects/arrays
// included). The error message can hide at different depths depending on
// provider and OpenCode version, so we check them all.
function collectStrings(value: unknown, out: string[]): void {
  if (typeof value === "string") {
    out.push(value)
  } else if (Array.isArray(value)) {
    for (const v of value) collectStrings(v, out)
  } else if (value && typeof value === "object") {
    for (const v of Object.values(value as Record<string, unknown>))
      collectStrings(v, out)
  }
}

// A Set of event-type names we already logged (bounds log spam: each type
// is reported once per OpenCode restart). Tells us which event types exist,
// in case the timeout ever arrives as something other than `session.error`.
const seenTypes = new Set<string>()

// True when the text contains any of the stable timeout fragments.
// Matching is case-insensitive; the varying "after Nms" tail is ignored.
function matches(text: string): boolean {
  const lower = text.toLowerCase()
  return PATTERNS.some((p) => lower.includes(p))
}

// Small helper: toasts must never break the retry. If the TUI client is
// missing (headless run, odd version), we log and carry on with the timer.
async function toast(client: any, message: string, variant: string): Promise<void> {
  try {
    await client.tui.showToast({ body: { message, variant } })
  } catch {
    try {
      await client.app.log({
        body: { service: "provider-headers-timeout-retry", level: "warn", message: `toast failed: ${message}` },
      })
    } catch {
      // Last resort: silence. The retry timer below still runs.
    }
  }
}

// Case 1a helper (silent shape, see header): read the session's last
// assistant message and check whether its text IS the timeout message.
// Returns the message ID (for dedupe) when matched, or null when clean
// (normal answer, no assistant message, or fetch failed).
async function lastAssistantTimeout(
  client: any,
  sessionID: string,
): Promise<{ messageID: string } | null> {
  try {
    const msgs = await client.session.messages({ path: { id: sessionID } })
    const last = [...(msgs?.data ?? [])]
      .reverse()
      .find((m: any) => m?.info?.role === "assistant")
    if (!last) return null

    // Concatenate the text parts (the timeout arrives as plain text).
    const text = (last.parts ?? [])
      .filter((p: any) => p?.type === "text" && typeof p.text === "string")
      .map((p: any) => p.text)
      .join("\n")
    if (!text || !matches(text)) return null

    return { messageID: String(last.info?.id ?? "") }
  } catch {
    // A failed fetch must never break the plugin: treat as clean.
    return null
  }
}

// Every plugin exports a function. OpenCode calls it once at startup.
// `client` lets us talk to OpenCode (send prompts, show toasts, log).
export const ProviderHeadersTimeoutRetry: Plugin = async ({ client }: any) => {
  // Shared schedule-and-retry block, used by both triggers (error event and
  // silent idle). Bumps the streak, honors brake/pending, toasts, and sends
  // "continue" after DELAY. All state lives in the maps above.
  const scheduleRetry = async (sessionID: string, trigger: string): Promise<void> => {
    // If we already scheduled a retry for this session, stop.
    if (pending.has(sessionID)) return

    // If the brake already tripped for this session, stay silent.
    // Only a clean `session.idle` success will lift it again.
    if (stopped.has(sessionID)) return

    // How many consecutive failures in a row? Default = 0.
    const used = consecutive.get(sessionID) ?? 0

    // Emergency brake: MAX_CONSECUTIVE failures in a row with no success
    // between them. Latch as stopped so further failures stay silent (no
    // toast or timer spam).
    if (used >= MAX_CONSECUTIVE) {
      stopped.add(sessionID)
      pending.delete(sessionID)
      await toast(client, `Headers timeout ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`, "error")
      return
    }

    // Debug breadcrumb: proves the trigger fired. Check OpenCode logs
    // if you ever doubt the plugin saw the timeout.
    try {
      await client.app.log({
        body: {
          service: "provider-headers-timeout-retry",
          level: "info",
          message: `matched ${trigger} (${used + 1}/${MAX_CONSECUTIVE})`,
        },
      })
    } catch {
      // Logging must never break the plugin.
    }

    // Mark this session as "retry scheduled" so we don't double-schedule.
    pending.add(sessionID)
    // Bump the consecutive-failure streak (resets to 0 on next success).
    consecutive.set(sessionID, used + 1)

    // Show a small popup in OpenCode Desktop so you see it working.
    // (Wrapped: a throwing toast must never kill the retry below.)
    await toast(client, `Provider headers timeout (${trigger}), saying "continue" in 10s... (${used + 1}/${MAX_CONSECUTIVE})`, "warning")

    // Wait 10 seconds, then try again.
    setTimeout(async () => {
      try {
        // Send a FRESH tiny message on the SAME model (no model field = no switch).
        // This is exactly like you typing "continue" by hand: the agent
        // keeps full history and resumes the broken task.
        await client.session.prompt({
          path: { id: sessionID },
          body: { parts: [{ type: "text", text: CONTINUE_TEXT }] },
        })

        // Unlock the timer: if this retry also fails, the next error/idle
        // bumps the streak again (brake at MAX_CONSECUTIVE).
        pending.delete(sessionID)
      } catch {
        // If something crashed (e.g. session deleted), just unlock.
        pending.delete(sessionID)
      }
    }, DELAY)
  }

  // We return an object with hooks. `event` runs on every OpenCode event.
  return {
    event: async ({ event }: any) => {
      // Taxonomy breadcrumb (once per event type per restart): if the
      // timeout ever arrives as something other than `session.error`, the
      // logs will show us which type it was so we can widen the trigger.
      if (event?.type && !seenTypes.has(event.type)) {
        seenTypes.add(event.type)
        try {
          await client.app.log({
            body: {
              service: "provider-headers-timeout-retry",
              level: "debug",
              message: `saw event type: ${event.type}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
      }

      // Case 1: session went idle (turn finished, now waiting for user).
      //   a) Silent timeout: the text arrived as a NORMAL assistant message;
      //      no session.error ever fired. Treat a hit as a failure — do NOT
      //      reset the streak, this idle IS the failure signal.
      //   b) Anything else: real success. One success breaks the failure
      //      streak, so reset everything: unlock the timer, reset the
      //      consecutive counter, lift the brake.
      if (event.type === "session.idle") {
        const id = (event.properties as any)?.sessionID as string
        if (!id) return

        const hit = await lastAssistantTimeout(client, id)
        if (hit) {
          // Already judged this exact message (duplicate idle): leave all
          // state untouched so the streak/brake survive.
          if (handledMessage.get(id) !== hit.messageID) {
            handledMessage.set(id, hit.messageID)
            try {
              await client.app.log({
                body: {
                  service: "provider-headers-timeout-retry",
                  level: "warn",
                  message: `silent timeout in assistant message ${hit.messageID}`,
                },
              })
            } catch {
              // Logging must never break the plugin.
            }
            await scheduleRetry(id, "silent timeout")
          }
          return
        }

        // Clean answer (or unreadable transcript): success resets everything.
        handledMessage.delete(id)
        pending.delete(id)
        consecutive.delete(id)
        stopped.delete(id)
        return
      }

      // Case 2: ignore everything that is NOT an error.
      // While the agent works (thinking, tools, messages) we exit here.
      if (event.type !== "session.error") return

      // Gather every string inside the error payload and check each for the
      // stable timeout fragment. This stays correct whether the provider
      // puts the text in `error`, `message`, `error.message`, or `detail`.
      const props = (event.properties as any) ?? event
      const strings: string[] = []
      collectStrings(props, strings)
      if (!strings.some(matches)) return

      // Get the session ID. Quota errors carry `properties.sessionID`
      // (like budget-retry.ts), but a timeout payload may nest it, so try
      // the common alternates before giving up.
      const sessionID = ((event.properties as any)?.sessionID ??
        (event.properties as any)?.session?.id ??
        (event.properties as any)?.sessionId ??
        "") as string

      // Trace exits: if we matched but stop here, the log says why.
      if (!sessionID) {
        try {
          await client.app.log({
            body: {
              service: "provider-headers-timeout-retry",
              level: "warn",
              message: `matched headers timeout but no sessionID in payload head=${JSON.stringify(event.properties ?? event).slice(0, 200)}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
        return
      }

      // Shared with the silent-drop path (Case 1a): pending/brake guards,
      // streak bump, breadcrumb log, toast, and the 10s "continue" timer.
      await scheduleRetry(sessionID, "headers timeout")
    },
  }
}
