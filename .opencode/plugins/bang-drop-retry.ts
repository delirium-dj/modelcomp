// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch: "!"-storm drops. Kimi K3 kills the connection with bodies
// like "!!!", "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", sometimes 50+ bangs.
// The bangs may arrive as the WHOLE message or buried inside a longer
// provider wrapper (e.g. "Upstream error: !!!!..."), so we match three shapes:
//   1. a string that is ONLY bangs (>= MIN_BANGS of them),
//   2. any single LINE that is only bangs (>= MIN_BANGS),
//   3. a long embedded run (> LONG_RUN bangs in a row — real prose never
//      shouts with 10+ "!" in a row, so this is a safe tripwire).
const MIN_BANGS = 3
const LONG_RUN = 10

// Which model to handle. Empty string = ANY model.
// Kimi K3 drops this way today, but any model can send the same bang-only
// payload in the future — so we deliberately leave this open.
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
        const id = (event.properties as any)?.sessionID as string
        if (id) {
          pending.delete(id)
          consecutive.delete(id)
          stopped.delete(id)
        }
        return // do nothing else
      }

      // Case 2: ignore everything that is NOT an error.
      // While the agent works (thinking, tools, messages) we exit here.
      if (event.type !== "session.error") return

      // Gather every string inside the error payload and score each for
      // bang-drop shapes (whole / line / long run). This stays correct
      // whether the provider puts the "!!!!" in `error`, `message`,
      // `error.message`, `detail`, or wraps it ("Upstream error: !!!!...").
      const props = (event.properties as any) ?? event
      const strings: string[] = []
      collectStrings(props, strings)
      let bangLen = 0
      for (const s of strings) {
        const n = bangRun(s)
        if (n > bangLen) bangLen = n
      }

      // No bang shape anywhere -> some other error, ignore it.
      // (Other plugins own quota, Invalid input, endpoint-down, pool-empty.)
      if (!bangLen) return

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

      // Get the session ID. Quota errors carry `properties.sessionID`
      // (like budget-retry.ts), but a drop payload may nest it, so try
      // the common alternates before giving up.
      const sessionID = ((event.properties as any)?.sessionID ??
        (event.properties as any)?.session?.id ??
        (event.properties as any)?.sessionId ??
        "") as string

      // Trace exits: if we matched bangs but stop here, the log says why.
      // (Previously these exits were silent, which hid the real cause.)
      if (!sessionID) {
        try {
          await client.app.log({
            body: {
              service: "bang-drop-retry",
              level: "warn",
              message: `matched ${bangLen}x"!" but no sessionID in payload head=${JSON.stringify(event.properties ?? event).slice(0, 200)}`,
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
      // (bangLen was already scored above: longest "!" run in the payload.)
      const used = consecutive.get(sessionID) ?? 0

      // Emergency brake: 30 failures in a row with no success between them.
      // We latch the session as stopped so the next 31st, 32nd... error
      // does NOT spam more toasts or timers.
      if (used >= MAX_CONSECUTIVE) {
        stopped.add(sessionID)
        pending.delete(sessionID)
        await toast(client, `Bang-drop ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`, "error")
        return
      }

      // Debug breadcrumb: proves the trigger fired. Check OpenCode logs
      // if you ever doubt the plugin saw the error.
      try {
        await client.app.log({
          body: {
            service: "bang-drop-retry",
            level: "info",
            message: `matched ${bangLen}x"!" (${used + 1}/${MAX_CONSECUTIVE})`,
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
      await toast(client, `Connection drop (${bangLen}x "!"), saying "continue" in 8s... (${used + 1}/${MAX_CONSECUTIVE})`, "warning")

      // Wait 8 seconds, then try again.
      setTimeout(async () => {
        try {
          // Send a FRESH tiny message on the SAME model (no model field = no switch).
          // This is exactly like you typing "continue" by hand: the agent
          // keeps full history and resumes the broken task.
          await client.session.prompt({
            path: { id: sessionID },
            body: { parts: [{ type: "text", text: CONTINUE_TEXT }] },
          })

          // Unlock the timer: if this retry also fails, the next
          // `session.error` bumps the streak again (brake at 30).
          pending.delete(sessionID)
        } catch {
          // If something crashed (e.g. session deleted), just unlock.
          pending.delete(sessionID)
        }
      }, DELAY)
    },
  }
}
