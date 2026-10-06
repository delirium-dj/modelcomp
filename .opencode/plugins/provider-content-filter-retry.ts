// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch: provider content-filter blocks. Some models drop this way
// sometimes with
//   "The response was blocked by the provider's content filter"
// — usually a FALSE positive: one "continue" brings the session straight
// back to work. Any model/provider can send the same error, so the plugin
// is deliberately global (no model filter): future-proof for whichever
// model starts producing this message next.
//
// NOTE on matching breadth: we deliberately match the WHOLE stable phrase,
// not the bare words "content filter". The silent/embedded paths below scan
// the last ASSISTANT message — an assistant legitimately discussing
// moderation systems says "content filter" in prose all the time, and a
// bare-words match would kick off useless retries mid-answer. The quoted
// error sentence, by contrast, never appears in real answers.
//
// NOTE on ethics/loops: if a block is REAL (the provider genuinely refuses
// the task), the retry will re-block every time. The emergency brake below
// caps that at MAX_CONSECUTIVE nudges, then the plugin goes silent until a
// clean answer arrives — no infinite hammering of a refusal.
//
// Arrival shapes (same lessons as bang-drop-retry.ts):
//   1. as a `session.error` event (the common case),
//   2. SILENTLY: the text lands in the transcript as a NORMAL assistant
//      message, followed by a plain `session.idle` — no error event at all,
//   3. EMBEDDED: the same text sits mid-message in the last assistant reply
//      while the `session.error` payload carries generic transport noise
//      and no `session.idle` ever follows.
// Recovery is the same for all: wait DELAY, then send "continue".

// Stable, lowercase fragments of the error text. Matching is
// case-insensitive on the FULL text; any fragment here trips the plugin.
// Add more fragments here if a sibling block error shows up.
const PATTERNS = ["blocked by the provider's content filter"]

// How long to wait before nudging: 8 seconds = 8_000 milliseconds.
// A false-positive block clears instantly, so we only give the endpoint a
// moment to shed the broken stream before resuming.
const DELAY = 8_000

// Grace period before reading the transcript back (idle and error paths):
// 500 milliseconds. Parts stream into storage as they arrive; a terminal
// event (`session.idle` / `session.error`) can land a hair BEFORE the final
// chunk is committed, so we wait a moment to avoid scoring a half-written
// message.
const SETTLE = 500

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no clean `session.idle` success in between.
// 30 means: the block re-fires 30x -> it is a REAL refusal, not a false
// positive; stop auto-retrying so we don't loop forever.
// Any single success resets the counter back to 0.
const MAX_CONSECUTIVE = 30

// The tiny message we send. One "continue" resumes the existing task from
// history, just like when you type "continue" by hand.
const CONTINUE_TEXT = "continue"

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting 5 timers for the same session.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
// Example: "ses_abc123" -> 2 means 2x blocks in a row.
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
// in case the block ever arrives as something other than `session.error`.
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

// True when the text contains any of the stable block fragments.
// Case-insensitive on the FULL text (see "matching breadth" note in header).
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
        body: { service: "provider-content-filter-retry", level: "warn", message: `toast failed: ${message}` },
      })
    } catch {
      // Last resort: silence. The retry timer below still runs.
    }
  }
}

// Transcript scanner (silent/embedded shapes, see header): read the
// session's last assistant message and check whether its text carries the
// block message. Returns the message ID (for dedupe) when matched, or null
// when clean (normal answer, no assistant message, or fetch failed).
async function lastAssistantBlock(
  client: any,
  sessionID: string,
): Promise<{ messageID: string } | null> {
  try {
    const msgs = await client.session.messages({ path: { id: sessionID } })
    const last = [...(msgs?.data ?? [])]
      .reverse()
      .find((m: any) => m?.info?.role === "assistant")
    if (!last) return null

    // Concatenate the text parts (the block text arrives as plain text).
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
export const ProviderContentFilterRetry: Plugin = async ({ client }: any) => {
  // Shared schedule-and-retry block, used by all triggers (payload error,
  // silent idle, embedded error). Bumps the streak, honors brake/pending,
  // toasts, and sends "continue" after DELAY. All state lives in the maps
  // above.
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
    // between them. For content blocks this means a REAL refusal — latch
    // as stopped so further failures stay silent (no toast or timer spam).
    if (used >= MAX_CONSECUTIVE) {
      stopped.add(sessionID)
      pending.delete(sessionID)
      await toast(client, `Content-filter block ${MAX_CONSECUTIVE}x in a row, brake ON (looks like a real refusal). Rephrase or start a new session.`, "error")
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
    // if you ever doubt the plugin saw the block.
    try {
      await client.app.log({
        body: {
          service: "provider-content-filter-retry",
          level: "info",
          message: `matched ${trigger} (${used + 1}/${MAX_CONSECUTIVE})`,
        },
      })
    } catch {
      // Logging must never break the plugin.
    }

    // Show a small popup in OpenCode Desktop so you see it working.
    // (Wrapped: a throwing toast must never kill the retry below.)
    await toast(client, `Content-filter block (${trigger}), saying "continue" in 8s... (${used + 1}/${MAX_CONSECUTIVE})`, "warning")

    // Wait 8 seconds, then try again.
    setTimeout(async () => {
      // Unlock the moment the timer fires — NOT after the prompt await
      // below. `client.session.prompt` can block for the WHOLE agent turn
      // (minutes); holding the lock until then lets a failed nudge kill the
      // retry chain. Unlocking now lets a failing nudge be retried (the
      // streak counter + brake still bound it).
      pending.delete(sessionID)
      try {
        // Send a FRESH tiny message on the SAME model (no model field = no switch).
        // This is exactly like you typing "continue" by hand: the agent
        // keeps full history and resumes the broken task.
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
      // Taxonomy breadcrumb (once per event type per restart): if the block
      // ever arrives as something other than `session.error`, the logs will
      // show us which type it was so we can widen the trigger.
      if (event?.type && !seenTypes.has(event.type)) {
        seenTypes.add(event.type)
        try {
          await client.app.log({
            body: {
              service: "provider-content-filter-retry",
              level: "debug",
              message: `saw event type: ${event.type}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
      }

      // Case 1: session went idle (turn finished, now waiting for user).
      //   a) Silent block: the text arrived as a NORMAL assistant message;
      //      no session.error ever fired. Treat a hit as a failure — do NOT
      //      reset the streak, this idle IS the failure signal.
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
                  service: "provider-content-filter-retry",
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
        const hit = await lastAssistantBlock(client, id)
        if (hit) {
          // Already judged this exact message: leave all state untouched so
          // the streak/brake survive duplicate idles.
          if (handledMessage.get(id) !== hit.messageID) {
            handledMessage.set(id, hit.messageID)
            try {
              await client.app.log({
                body: {
                  service: "provider-content-filter-retry",
                  level: "warn",
                  message: `silent content-filter block in assistant message ${hit.messageID}`,
                },
              })
            } catch {
              // Logging must never break the plugin.
            }
            await scheduleRetry(id, "silent content-filter block")
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
      // stable block fragment. This stays correct whether the provider puts
      // the text in `error`, `message`, `error.message`, or `detail`.
      const props = (event.properties as any) ?? event
      const strings: string[] = []
      collectStrings(props, strings)

      // No block fragment in the ERROR PAYLOAD. The text may still sit in
      // the partial assistant MESSAGE while the error itself is generic
      // transport noise (embedded shape, see header). So before calling
      // this "some other error", fall back to checking the last assistant
      // message.
      // (Other plugins own quota, Invalid input, pool-empty, high demand,
      // headers-timeout.)
      if (!strings.some(matches)) {
        if (sessionID) {
          // Let the final streamed chunk commit before judging.
          await new Promise((r) => setTimeout(r, SETTLE))
          const hit = await lastAssistantBlock(client, sessionID)
          if (hit && handledMessage.get(sessionID) !== hit.messageID) {
            handledMessage.set(sessionID, hit.messageID)
            try {
              await client.app.log({
                body: {
                  service: "provider-content-filter-retry",
                  level: "warn",
                  message: `embedded content-filter block in assistant message ${hit.messageID} (generic error payload)`,
                },
              })
            } catch {
              // Logging must never break the plugin.
            }
            await scheduleRetry(sessionID, "embedded content-filter block")
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
              service: "provider-content-filter-retry",
              level: "warn",
              message: `matched content-filter block but no sessionID in payload head=${JSON.stringify(event.properties ?? event).slice(0, 200)}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
        return
      }

      // Shared with the silent/embedded paths: pending/brake guards,
      // mark-first streak bump, breadcrumb log, toast, 8s "continue" timer.
      await scheduleRetry(sessionID, "content-filter block")
    },
  }
}
