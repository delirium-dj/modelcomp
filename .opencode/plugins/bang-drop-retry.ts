// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch, shape 1: "!"-storm drops. Kimi K3 kills the connection
// with bodies like "!!!", "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", sometimes
// 50+ bangs. The bangs may arrive as the WHOLE message or buried inside a
// longer provider wrapper (e.g. "Upstream error: !!!!..."), so we match
// three shapes:
//   1. a string that is ONLY bangs (>= MIN_BANGS of them),
//   2. any single LINE that is only bangs (>= MIN_BANGS),
//   3. a long embedded run (>= LONG_RUN bangs in a row — real prose never
//      shouts with 10+ "!" in a row, so this is a safe tripwire).
// const MIN_BANGS = 3
// const LONG_RUN = 10
//
// What we catch, shape 2: "lock"-storm stalls. The same model sometimes
// answers with "locklocklock..." (hundreds of glued "lock"s) instead of a
// real reply. Same recovery (wait, then "continue"), so the same plugin
// owns it. Thresholds MIN_LOCKS / LONG_LOCK_RUN live next to lockRun() below.
//
// What we catch, shape 3: "silent" drops. Sometimes the storm does NOT
// arrive as a `session.error` at all — the provider stream just ends and
// the degenerate text sits in the transcript as a NORMAL assistant message,
// followed by a plain `session.idle`. No error event ever fires, so shapes
// 1+2 alone stay blind (this exact mode is why the plugin seemed to "not
// react" to bang-storms that completed as regular messages). Case 1a in the
// hook below therefore re-reads the last assistant message on every
// `session.idle` and scores it with the same matchers.
const MIN_BANGS = 3
const LONG_RUN = 10

// "lock"-storm thresholds (shape 2, see header). Real prose never repeats
// the standalone word "lock" back-to-back, so these tripwires are safe:
// a lock-only message needs >= MIN_LOCKS locks; an embedded run needs
// >= LONG_LOCK_RUN locks in a row. Substring hosts ("unlock", "locked",
// "deadlock") can only contribute short runs, far below either threshold.
const MIN_LOCKS = 3
const LONG_LOCK_RUN = 10

// Which model to handle. Empty string = ANY model.
// Kimi K3 drops these ways today (bang-storms and lock-storms), but any
// model can send the same degenerate payload in the future — so we
// deliberately leave this open.
// To restrict to Kimi only later, set this to "kimi".
const MODEL_FILTER = ""

// How long to wait before saying "continue": 8 seconds = 8_000 milliseconds.
// The connection just dropped, so we give the endpoint a moment to recover
// before nudging the session forward.
const DELAY = 8_000

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no `session.idle` success in between.
// 30 means: 30x bang-drops back-to-back -> we assume the outage is real
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
// Example: "ses_abc123" -> 2 means 2x bang-drops in a row.
// Any `session.idle` (one good answer) resets this back to 0.
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
// Once braked, we stay silent until a `session.idle` proves the session
// works again (which removes it from here).
const stopped = new Set<string>()

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
// in case a drop ever arrives as something other than `session.error`.
const seenTypes = new Set<string>()

// ONE shared reader for the session ID, used by BOTH the idle-reset path
// and the error path so the two can never drift apart. Before this, the
// idle path only tried `properties.sessionID` while the error path tried
// three nestings — an idle with a differently-nested ID would silently
// skip the reset and latch the emergency brake until restart.
// Returns "" when no known shape matches.
function readSessionID(event: any): string {
  const p = (event.properties as any) ?? {}
  return ((p.sessionID ?? p.session?.id ?? p.sessionId ?? "") as string) || ""
}

// Once-per-restart flag: a `session.idle` that carried NO recognizable
// session ID is logged a single time (trace exit) so a future event-shape
// change shows up in the logs instead of hiding as a dead session.
let loggedIdleNoID = false

// True when the text is ONLY "!" signs (plus harmless whitespace/newlines)
// and carries at least MIN_BANGS of them. Examples: "!!!", "!!!!...50x".
// Anything with a letter, digit or other punctuation returns false.
function isBangOnly(text: string): boolean {
  const compact = text.replace(/[\s]/g, "")
  if (compact.length < MIN_BANGS) return false
  return /^[!]+$/.test(compact)
}

// True for any of the three bang-drop shapes (whole string / single line /
// long embedded run). Returns the longest bang run found (0 = no match).
function bangRun(text: string): number {
  if (isBangOnly(text)) return text.replace(/[\s]/g, "").length
  let best = 0
  for (const line of text.split(/\r?\n/)) {
    if (isBangOnly(line)) {
      const n = line.replace(/[\s]/g, "").length
      if (n > best) best = n
    }
  }
  const m = text.match(new RegExp(`!{${LONG_RUN},}`, "g"))
  if (m) {
    for (const run of m) if (run.length > best) best = run.length
  }
  return best
}

// Longest consecutive "lock" run in the text (0 = no match). Whitespace is
// stripped first, so "lock lock\nlock..." and "locklocklock..." score the
// same; each "lock" is 4 chars, so run length / 4 = lock count. Matching is
// case-insensitive ("LOCKLOCK..." trips it too). Both regexes are linear
// (no nested quantifiers), so even thousand-lock storms scan fast.
function lockRun(text: string): number {
  const compact = text.replace(/[\s]/g, "").toLowerCase()
  if (/^(?:lock)+$/.test(compact)) {
    const n = compact.length / 4
    if (n >= MIN_LOCKS) return n
  }
  const m = compact.match(new RegExp(`(?:lock){${LONG_LOCK_RUN},}`, "g"))
  let best = 0
  if (m) {
    for (const run of m) {
      const n = run.length / 4
      if (n > best) best = n
    }
  }
  return best
}

// Small helper: toasts must never break the retry. If the TUI client is
// missing (headless run, odd version), we log and carry on with the timer.
async function toast(client: any, message: string, variant: string): Promise<void> {
  try {
    await client.tui.showToast({ body: { message, variant } })
  } catch {
    try {
      await client.app.log({
        body: { service: "bang-drop-retry", level: "warn", message: `toast failed: ${message}` },
      })
    } catch {
      // Last resort: silence. The retry timer below still runs.
    }
  }
}

// Every plugin exports a function. OpenCode calls it once at startup.
// `client` lets us talk to OpenCode (send prompts, show toasts, log).
export const BangDropRetry: Plugin = async ({ client }: any) => {
  // We return an object with hooks. `event` runs on every OpenCode event.
  return {
    event: async ({ event }: any) => {
      // Taxonomy breadcrumb (once per event type per restart): if a drop
      // ever arrives as something other than `session.error`, the logs will
      // show us which type it was so we can widen the trigger below.
      if (event?.type && !seenTypes.has(event.type)) {
        seenTypes.add(event.type)
        try {
          await client.app.log({
            body: {
              service: "bang-drop-retry",
              level: "debug",
              message: `saw event type: ${event.type}`,
            },
          })
        } catch {
          // Logging must never break the plugin.
        }
      }

      // Case 1: session finished fine (model answered, now waiting for user).
      // One success breaks the failure streak, so we reset everything:
      // unlock the timer, reset the consecutive counter, lift the brake.
      if (event.type === "session.idle") {
        // readSessionID() is the SAME reader the error path below uses,
        // so the two can never drift apart on the ID shape.
        const id = readSessionID(event)
        if (id) {
          pending.delete(id)
          consecutive.delete(id)
          stopped.delete(id)
        } else if (!loggedIdleNoID) {
          // Trace exit: an idle we cannot attribute to a session. Log once
          // per restart so an event-shape change shows up in the logs
          // instead of hiding as a session whose brake never lifts.
          loggedIdleNoID = true
          try {
            await client.app.log({
              body: {
                service: "bang-drop-retry",
                level: "warn",
                message: `session.idle carried no sessionID head=${JSON.stringify(event).slice(0, 200)}`,
              },
            })
          } catch {
            // Logging must never break the plugin.
          }
        }
        return // do nothing else
      }

      // Case 2: ignore everything that is NOT an error.
      // While the agent works (thinking, tools, messages) we exit here.
      if (event.type !== "session.error") return

      // Gather every string inside the error payload and score each for
      // bang-drop shapes (whole / line / long run) and lock-storm shapes
      // (lock-only / long run). This stays correct whether the provider
      // puts the "!!!!" or "locklock..." in `error`, `message`,
      // `error.message`, `detail`, or wraps it ("Upstream error: !!!!...").
      const props = (event.properties as any) ?? event
      const strings: string[] = []
      collectStrings(props, strings)
      let bangLen = 0
      let lockLen = 0
      for (const s of strings) {
        const b = bangRun(s)
        if (b > bangLen) bangLen = b
        const l = lockRun(s)
        if (l > lockLen) lockLen = l
      }

      // No bang shape and no lock shape anywhere -> some other error,
      // ignore it.
      // (Other plugins own quota, Invalid input, endpoint-down, pool-empty.)
      if (!bangLen && !lockLen) return

      // Human-readable trigger for the logs/toasts below.
      const trigger =
        lockLen > bangLen ? `${lockLen}x"lock"` : `${bangLen}x"!"`

      // Optional model guard. Empty MODEL_FILTER = handle ANY model
      // (Kimi K3 today, whoever sends bangs tomorrow).
      if (MODEL_FILTER) {
        const raw =
          (props.model ?? props.modelID ?? props.session?.model ?? "") as unknown
        const modelLower = String(raw ?? "").toLowerCase()
        // Only skip when we POSITIVELY know the model and it is not wanted.
        // Empty string = unknown model -> proceed (fail-open).
        // NOTE: use String(), never JSON.stringify("") which gives '""'
        // (truthy!) and would wrongly block everything with no model field.
        if (modelLower && !modelLower.includes(MODEL_FILTER)) return
      }

      // Get the session ID via the SHARED reader (same as the idle path
      // above): `properties.sessionID` is the common shape, but a drop
      // payload may nest it — readSessionID() tries the common alternates
      // before giving up.
      const sessionID = readSessionID(event)

      // Trace exits: if we matched bangs but stop here, the log says why.
      // (Previously these exits were silent, which hid the real cause.)
      if (!sessionID) {
        try {
          await client.app.log({
            body: {
              service: "bang-drop-retry",
              level: "warn",
              message: `matched ${trigger} but no sessionID in payload head=${JSON.stringify(event.properties ?? event).slice(0, 200)}`,
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
      // Only a `session.idle` success will lift it again.
      if (stopped.has(sessionID)) return

      // How many consecutive failures in a row? Default = 0.
      // (bangLen / lockLen were already scored above: longest runs found.)
      const used = consecutive.get(sessionID) ?? 0

      // Emergency brake: 30 failures in a row with no success between them.
      // We latch the session as stopped so the next 31st, 32nd... error
      // does NOT spam more toasts or timers.
      if (used >= MAX_CONSECUTIVE) {
        stopped.add(sessionID)
        pending.delete(sessionID)
        await toast(client, `Drop/storm ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`, "error")
        return
      }

      // MARK FIRST, AWAIT SECOND. The plugin is single-threaded: another
      // event can only run in at an `await`. The old order was check ->
      // await log -> mark, so two back-to-back errors could BOTH pass the
      // guard above before either marked — scheduling duplicate timers
      // (a double "continue") and undercounting the streak (both read
      // used=0, both wrote 1), which delayed the emergency brake. Marking
      // synchronously right after the checks makes check+mark atomic.
      // Mark this session as "retry scheduled" so we don't double-schedule.
      pending.add(sessionID)
      // Bump the consecutive-failure streak (resets to 0 on next success).
      consecutive.set(sessionID, used + 1)

      // Debug breadcrumb: proves the trigger fired. Check OpenCode logs
      // if you ever doubt the plugin saw the error.
      try {
        await client.app.log({
          body: {
            service: "bang-drop-retry",
            level: "info",
            message: `matched ${trigger} (${used + 1}/${MAX_CONSECUTIVE})`,
          },
        })
      } catch {
        // Logging must never break the plugin.
      }

      // Show a small popup in OpenCode Desktop so you see it working.
      // (Wrapped: a throwing toast must never kill the retry below.)
      await toast(client, `Drop/storm (${trigger}), saying "continue" in 8s... (${used + 1}/${MAX_CONSECUTIVE})`, "warning")

      // Wait 8 seconds, then try again.
      setTimeout(async () => {
        // Unlock the moment the timer fires — NOT after the prompt await
        // below. `client.session.prompt` (sync form) blocks for the WHOLE
        // agent turn (minutes). The old code held the "retry scheduled"
        // lock until that await settled: if this nudge itself dropped, the
        // new `session.error` would see the lock, be ignored, and only
        // then would the catch unlock us — leaving nobody to schedule the
        // next retry (silent chain death until a manual "continue").
        // Unlocking now lets a failing nudge be retried (the streak
        // counter + brake still bound it); the rare cost is one harmless
        // duplicate nudge.
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
          // `session.error` schedules a fresh retry (streak still bounds it).
        }
      }, DELAY)
    },
  }
}
