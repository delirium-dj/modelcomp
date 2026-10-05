// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch: provider overload rejections. Some Gemini models drop this
// way sometimes with
//   "This model is currently experiencing high demand. Spikes in demand are
//    usually temporary. Please try again later."
// We only match the stable fragment before "Spikes" (the advice tail may
// vary). Any model/provider can send the same error, so the plugin is
// deliberately global (no model filter).
//
// Arrival shapes (same lessons as bang-drop-retry.ts):
//   1. as a `session.error` event (the common case),
//   2. SILENTLY: the text lands in the transcript as a NORMAL assistant
//      message, followed by a plain `session.idle` — no error event at all,
//   3. EMBEDDED: the same text sits mid-prose in the last assistant message
//      while the `session.error` payload carries generic transport noise
//      and no `session.idle` ever follows.
// Recovery is the same for all: wait DELAY, then send "please continue".

// Stable, lowercase fragments of the error text. Matching is
// case-insensitive on the FULL text; any fragment here trips the plugin.
// Add more fragments here if a sibling overload error shows up.
const PATTERNS = ["currently experiencing high demand"]

// How long to wait before nudging: 20 seconds = 20_000 milliseconds.
// "Spikes in demand are usually temporary" — after 20 s a fresh request
// typically lands on a freed-up backend, without hammering a busy pool.
const DELAY = 20_000

// Grace period before reading the transcript back (idle and error paths):
// 500 milliseconds. Parts stream into storage as they arrive; a terminal
// event (`session.idle` / `session.error`) can land a hair BEFORE the final
// chunk is committed, so we wait a moment to avoid scoring a half-written
// message.
const SETTLE = 500

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no clean `session.idle` success in between.
// 30 x 20s = ~10 minutes of a demand spike; if it outlasts that, assume a
// real outage and stop auto-retrying so we don't loop forever.
// Any single success resets the counter back to 0.
const MAX_CONSECUTIVE = 30

// The tiny message we send. "please continue" resumes the existing task
// from history, just like when you type it by hand.
const CONTINUE_TEXT = "please continue"

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting 5 timers for the same session.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
// Example: "ses_abc123" -> 2 means 2x overloads in a row.
// Any clean `session.idle` (one good answer) resets this back to 0.
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
// Once braked, we stay silent until a clean `session.idle` proves the
// session works again (which removes it from here).
const stopped = new Set<string>()

// A Map remembers, per session, the ID of the last assistant message we
// already judged (silent path on idle, embedded path on error). Stops
// double-counting when the same final message is seen twice.
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
// in case the overload ever arrives as something other than `session.error`.
const seenTypes = new Set<string>()

// ONE shared reader for the session ID, used by BOTH the idle path and the
// error path so the two can never drift apart on the ID shape.
// Returns "" when no known shape matches.
function readSessionID(event: any): string {
  const p = (event.properties as any) ?? {}
  return ((p.sessionID ?? p.session?.id ?? p.sessionId ?? "") as string) || ""
}

// Once-per-restart flag: a `session.idle` that carried NO recognizable
// session ID is logged a single time (trace exit) so a future event-shape
// change shows up in the logs instead of hiding as a dead session.
let loggedIdleNoID = false

// True when the text contains any of the stable overload fragments.
// Case-insensitive on the FULL text.
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
        body: { service: "provider-high-demand-retry", level: "warn", message: `toast failed: ${message}` },
      })
    } catch {
      // Last resort: silence. The retry timer below still runs.
    }
  }
}

// Transcript scanner (silent/embedded shapes, see header): read the
// session's last assistant message and check whether its text carries the
// overload message. Returns the message ID (for dedupe) when matched, or
// null when clean (normal answer, no assistant message, or fetch failed).
async function lastAssistantOverload(
  client: any,
  sessionID: string,
): Promise<{ messageID: string } | null> {
  try {
    const msgs = await client.session.messages({ path: { id: sessionID } })
    const last = [...(msgs?.data ?? [])]
      .reverse()
      .find((m: any) => m?.info?.role === "assistant")
    if (!last) return null

    // Concatenate the text parts (the overload text arrives as plain text).
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
export const ProviderHighDemandRetry: Plugin = async ({ client }: any) => {
  // Shared schedule-and-retry block, used by all triggers (payload error,
  // silent idle, embedded error). Bumps the streak, honors brake/pending,
  // toasts, and sends "please continue" after DELAY. All state lives in the
  // maps above.
  const scheduleRetry = async (
    sessionID: string,
    trigger: string,
  ): Promise<void> => {
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
      await toast(client, `High demand ${MAX_CONSECUTIVE}x in a row, brake ON. Try later or a new session.`, "error")
      return
    }

    // MARK FIRST, AWAIT SECOND. The plugin is single-threaded: another
    // event can only run in at an `await`. The old order was check ->
    // await log -> mark, so two back-to-back errors could BOTH pass the
    // guard above before either marked — scheduling duplicate timers and
    // undercounting the streak, which delayed the emergency brake. Marking
    // synchronously right after the checks makes check+mark atomic.
    pending.add(sessionID)
    consecutive.set(sessionID, used + 1)

    // Debug breadcrumb: proves the trigger fired. Check OpenCode logs
    // if you ever doubt the plugin saw the overload.
    try {
      await client.app.log({
        body: {
          service: "provider-high-demand-retry",
          level: "info",
          message: `matched ${trigger} (${used + 1}/${MAX_CONSECUTIVE})`,
        },
      })
    } catch {
      // Logging must never break the plugin.
    }

    // Show a small popup in OpenCode Desktop so you see it working.
    // (Wrapped: a throwing toast must never kill the retry below.)
    await toast(client, `Model overloaded (${trigger}), saying "please continue" in 20s... (${used + 1}/${MAX_CONSECUTIVE})`, "warning")

    // Wait 20 seconds, then try again.
    setTimeout(async () => {
      // Unlock the moment the timer fires — NOT after the prompt await
      // below. `client.session.prompt` can block for the WHOLE agent turn
      // (minutes); holding the lock until then lets a failed nudge kill the
      // retry chain. Unlocking now lets a failing nudge be retried (the
      // streak counter + brake still bound it).
      pending.delete(sessionID)
      try {
        // Send a FRESH tiny message on the SAME model (no model field = no switch).
        // The agent keeps full history and resumes the broken task.
        await client.session.prompt({
          path: { id: sessionID },
          body: { parts: [{ type: "text", text: CONTINUE_TEXT }] },
        })
      } catch {
        // The nudge request itself failed (e.g. session deleted).
        // Nothing to unlock anymore; if the session errors, the next
        // event schedules a fresh retry (streak still bounds it).
      }
    }, DELAY)
  }

  // We return an object with hooks. `event` runs on every OpenCode event.
  return {
    event: async ({ event }: any) => {
      // Taxonomy breadcrumb (once per event type per restart): if the
      // overload ever arrives as something other than `session.error`, the
      // logs will show us which type it was so we can widen the trigger.
      if (event?.type && !seenTypes.has(event.type)) {
        seenTypes.add(event.type)
        try {
          await client.app.log({
            body: {
              service: "provider-high-demand-retry",
              level: "debug",
              message: `saw event type: ${event.type}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
      }

      // Case 1: session went idle (turn finished, now waiting for user).
      //   a) Silent overload: the text arrived as a NORMAL assistant
      //      message; no session.error ever fired. Treat a hit as a failure
      //      — do NOT reset the streak, this idle IS the failure signal.
      //   b) Anything else: real success. One success breaks the failure
      //      streak, so reset everything.
      if (event.type === "session.idle") {
        // readSessionID() is the SAME reader the error path below uses,
        // so the two can never drift apart on the ID shape.
        const id = readSessionID(event)
        if (!id) {
          // Trace exit: an idle we cannot attribute to a session. Log once
          // per restart so an event-shape change shows up in the logs
          // instead of hiding as a session whose brake never lifts.
          if (!loggedIdleNoID) {
            loggedIdleNoID = true
            try {
              await client.app.log({
                body: {
                  service: "provider-high-demand-retry",
                  level: "warn",
                  message: `session.idle carried no sessionID head=${JSON.stringify(event).slice(0, 200)}`,
                },
              })
            } catch {
              // Logging must never break the plugin.
            }
          }
          return
        }

        // Let the final streamed chunk commit before judging the message.
        await new Promise((r) => setTimeout(r, SETTLE))
        const hit = await lastAssistantOverload(client, id)
        if (hit) {
          // Already judged this exact message: leave all state untouched so
          // the streak/brake survive duplicate idles.
          if (handledMessage.get(id) !== hit.messageID) {
            handledMessage.set(id, hit.messageID)
            try {
              await client.app.log({
                body: {
                  service: "provider-high-demand-retry",
                  level: "warn",
                  message: `silent overload in assistant message ${hit.messageID}`,
                },
              })
            } catch {
              // Logging must never break the plugin.
            }
            await scheduleRetry(id, "silent overload")
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

      // Get the session ID via the SHARED reader (same as the idle path
      // above). Needed by BOTH matchers below (payload scan first, message
      // fallback second).
      const sessionID = readSessionID(event)

      // Gather every string inside the error payload and check each for the
      // stable overload fragment. This stays correct whether the provider
      // puts the text in `error`, `message`, `error.message`, or `detail`.
      const props = (event.properties as any) ?? event
      const strings: string[] = []
      collectStrings(props, strings)

      // No overload fragment in the ERROR PAYLOAD. The text may still sit
      // in the partial assistant MESSAGE while the error itself is generic
      // transport noise (embedded shape, see header). So before calling
      // this "some other error", fall back to checking the last assistant
      // message.
      // (Other plugins own quota, Invalid input, pool-empty, headers-timeout.)
      if (!strings.some(matches)) {
        if (sessionID) {
          // Let the final streamed chunk commit before judging.
          await new Promise((r) => setTimeout(r, SETTLE))
          const hit = await lastAssistantOverload(client, sessionID)
          if (hit && handledMessage.get(sessionID) !== hit.messageID) {
            handledMessage.set(sessionID, hit.messageID)
            try {
              await client.app.log({
                body: {
                  service: "provider-high-demand-retry",
                  level: "warn",
                  message: `embedded overload text in assistant message ${hit.messageID} (generic error payload)`,
                },
              })
            } catch {
              // Logging must never break the plugin.
            }
            await scheduleRetry(sessionID, "embedded overload")
          }
        }
        return
      }

      // Payload matched (classic shape 1).

      // Trace exits: if we matched but stop here, the log says why.
      // (Previously these exits were silent, which hid the real cause.)
      if (!sessionID) {
        try {
          await client.app.log({
            body: {
              service: "provider-high-demand-retry",
              level: "warn",
              message: `matched high-demand but no sessionID in payload head=${JSON.stringify(event.properties ?? event).slice(0, 200)}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
        return
      }

      // Shared with the silent/embedded paths: pending/brake guards,
      // mark-first streak bump, breadcrumb log, toast, 20s retry timer.
      await scheduleRetry(sessionID, "high demand")
    },
  }
}
