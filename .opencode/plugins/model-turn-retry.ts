// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch: a structural/prompt error some providers reject with when
// the request ends on a model-only turn (no user message after it). The
// exact message we saw:
//   "Requests ending with a model turn are not supported."
// The provider drops the connection and stops the task on it. Unlike a
// network break, this is NOT an outage — the fix is to make the last turn
// a user turn again, which is exactly what sending "please continue" does:
// the agent resumes from history and the next request ends on a user message.
// We match this stable fragment (lowercased) so any wrapper prefix is fine.
const MATCH = "requests ending with a model turn"

// Which model to handle. Empty string = ANY model.
// This is deliberately GENERAL: Gemini models drop this way today, but the
// same "ends on a model turn" constraint can come from any provider, so we
// catch it globally instead of filtering to one model family.
const MODEL_FILTER = ""

// How long to wait before saying "please continue": 7 seconds.
// There is no outage to recover from — the provider simply rejected the
// request shape — so a short pause is enough before nudging the session.
const DELAY = 7_000

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no `session.idle` success in between.
// 30 means: 30x in a row -> "please continue" is NOT fixing the shape,
// the session is truly poisoned; stop so we don't loop forever.
// Any single success resets the counter back to 0.
const MAX_CONSECUTIVE = 30

// The tiny message we send instead of re-sending your last message.
// One nudge resumes the existing task from history, just like when
// you type "continue" by hand — and turns the last message into a user turn.
const CONTINUE_TEXT = "please continue"

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting 5 timers for the same session.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
// Example: "ses_abc123" -> 2 means 2x model-turn rejects in a row.
// Any `session.idle` (one good answer) resets this back to 0.
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
// Once braked, we stay silent until a `session.idle` proves the session
// works again (which removes it from here).
const stopped = new Set<string>()

// A Set of event-type names we already logged (bounds log spam: each type
// is reported once per OpenCode restart). Tells us which event types exist,
// in case this drop ever arrives as something other than `session.error`.
const seenTypes = new Set<string>()

// Small helper: toasts must never break the retry. If the TUI client is
// missing (headless run, odd version), we log and carry on with the timer.
async function toast(client: any, message: string, variant: string): Promise<void> {
  try {
    await client.tui.showToast({ body: { message, variant } })
  } catch {
    try {
      await client.app.log({
        body: { service: "model-turn-retry", level: "warn", message: `toast failed: ${message}` },
      })
    } catch {
      // Last resort: silence. The retry timer below still runs.
    }
  }
}

// Every plugin exports a function. OpenCode calls it once at startup.
// `client` lets us talk to OpenCode (send prompts, show toasts, log).
export const ModelTurnRetry: Plugin = async ({ client }: any) => {
  // We return an object with hooks. `event` runs on every OpenCode event.
  return {
    event: async ({ event }: any) => {
      // Taxonomy breadcrumb (once per event type per restart): if this drop
      // ever arrives as something other than `session.error`, the logs will
      // show us which type it was so we can widen the trigger below.
      if (event?.type && !seenTypes.has(event.type)) {
        seenTypes.add(event.type)
        try {
          await client.app.log({
            body: {
              service: "model-turn-retry",
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

      // Turn the whole error event into lowercase text so we can search it.
      // The message can hide in `error`, `message`, `error.message`,
      // `detail`, or a provider wrapper ("Upstream error: Requests ending...").
      const text = JSON.stringify(event.properties ?? event).toLowerCase()

      // If this is some other error (quota, network, 500, bang/lock storms,
      // endpoint-down, ...) it is owned by the other plugins. Ignore it.
      if (!text.includes(MATCH)) return

      // Optional model guard (inactive while MODEL_FILTER is empty).
      // Only skip when we POSITIVELY know the model and it is not wanted.
      // Empty string = unknown model -> proceed (fail-open).
      if (MODEL_FILTER) {
        const props = (event.properties as any) ?? {}
        const raw =
          (props.model ?? props.modelID ?? props.session?.model ?? "") as unknown
        const modelLower = String(raw ?? "").toLowerCase()
        if (modelLower && !modelLower.includes(MODEL_FILTER)) return
      }

      // Get the session ID. `properties.sessionID` is the common shape, but
      // a drop payload may nest it, so try the common alternates first.
      const sessionID = ((event.properties as any)?.sessionID ??
        (event.properties as any)?.session?.id ??
        (event.properties as any)?.sessionId ??
        "") as string

      // Trace exit: if we matched but stop here, the log says why.
      if (!sessionID) {
        try {
          await client.app.log({
            body: {
              service: "model-turn-retry",
              level: "warn",
              message: `matched "${MATCH}" but no sessionID in payload head=${text.slice(0, 200)}`,
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
      const used = consecutive.get(sessionID) ?? 0

      // Emergency brake: 30 rejects in a row with no success between them.
      // Latch the session as stopped so the 31st, 32nd... error does NOT
      // spam more toasts or timers.
      if (used >= MAX_CONSECUTIVE) {
        stopped.add(sessionID)
        pending.delete(sessionID)
        await toast(
          client,
          `Model-turn reject ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`,
          "error"
        )
        return
      }

      // Debug breadcrumb: proves the trigger fired.
      try {
        await client.app.log({
          body: {
            service: "model-turn-retry",
            level: "info",
            message: `matched "${MATCH}" (${used + 1}/${MAX_CONSECUTIVE}) head=${text.slice(0, 200)}`,
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
      await toast(
        client,
        `Model-turn reject, saying "please continue" in 7s... (${used + 1}/${MAX_CONSECUTIVE})`,
        "warning"
      )

      // Wait 7 seconds, then nudge the session forward.
      setTimeout(async () => {
        try {
          // Send a FRESH tiny message on the SAME model (no model field = no switch).
          // This is exactly like you typing "please continue" by hand: the
          // agent keeps full history, resumes the broken task, and the next
          // request ends on a user turn again — which the provider accepts.
          await client.session.prompt({
            path: { id: sessionID },
            body: { parts: [{ type: "text", text: CONTINUE_TEXT }] },
          })

          // Unlock the timer: if this nudge also fails, the next
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
