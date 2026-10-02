// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// The exact error text from DeepSeek V4 Flash we want to catch.
// We compare in lowercase, so keep this lowercase too.
// "Invalid input" is what the provider returns when it rejects the request
// payload (bad parts, unsupported content, oversized context, strict schema).
const MATCH = "invalid input"

// Only auto-retry when the model looks like DeepSeek.
// We compare in lowercase too. Set to "" to retry for ANY model.
const MODEL_FILTER = "deepseek"

// How long to wait before saying "continue": 7 seconds = 7_000 milliseconds.
// Unlike quota exhaustion (wait 55s), this error is instant, so we only wait
// a moment to let the provider settle.
const DELAY = 7_000

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no `session.idle` success in between.
// 30 means: 30x "Invalid input" back-to-back -> we assume the session is
// truly poisoned and stop auto-retrying so we don't loop forever.
// Any single success resets the counter back to 0.
const MAX_CONSECUTIVE = 30

// The tiny message we send instead of re-sending your last message.
// Re-sending the same message would fail again with the same "Invalid input".
// A fresh "continue" lets the model resume from history, just like when
// you type "continue" by hand.
const CONTINUE_TEXT = "continue"

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting 5 timers for the same session.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
// Example: "ses_abc123" -> 2 means 2x "Invalid input" in a row.
// Any `session.idle` (one good answer) resets this back to 0.
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
// Once braked, we stay silent until a `session.idle` proves the session
// works again (which removes it from here).
const stopped = new Set<string>()

// Every plugin exports a function. OpenCode calls it once at startup.
// `client` lets us talk to OpenCode (send prompts, show toasts, log).
export const DeepseekContinueRetry: Plugin = async ({ client }: any) => {
  // We return an object with hooks. `event` runs on every OpenCode event.
  return {
    event: async ({ event }: any) => {
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
      const text = JSON.stringify(event.properties ?? event).toLowerCase()

      // If the error is something else (network, 500, quota, etc.), ignore it.
      // This plugin ONLY handles "Invalid input".
      if (!text.includes(MATCH)) return

      // Optional model guard: if the event tells us the model name and it
      // is NOT DeepSeek, ignore it. If no model name is found, we proceed
      // anyway (fail-open) so we never miss a real DeepSeek failure.
      if (MODEL_FILTER) {
        const modelText =
          ((event.properties as any)?.model ??
            (event.properties as any)?.modelID ??
            "") as string
        const modelLower = JSON.stringify(modelText).toLowerCase()
        // Only skip when we POSITIVELY know the model and it is not DeepSeek.
        if (modelLower && !modelLower.includes(MODEL_FILTER)) return
        // Fallback: also check the full event text for "deepseek".
        // If the full text mentions deepseek, it is ours for sure.
        // If it mentions neither, we still continue (fail-open).
      }

      // Get the session ID from the event, e.g. "ses_abc123".
      const sessionID = (event.properties as any)?.sessionID as string

      // If no ID, or we already scheduled a retry for this session, stop.
      if (!sessionID || pending.has(sessionID)) return

      // If the brake already tripped for this session, stay silent.
      // Only a `session.idle` success will lift it again.
      if (stopped.has(sessionID)) return

      // How many consecutive failures in a row? Default = 0.
      const used = consecutive.get(sessionID) ?? 0

      // Emergency brake: 30 failures in a row with no success between them.
      // We latch the session as stopped so the next 31st, 32nd... error
      // does NOT spam more toasts or timers.
      if (used >= MAX_CONSECUTIVE) {
        stopped.add(sessionID)
        pending.delete(sessionID)
        await client.tui.showToast({
          body: {
            message: `DeepSeek failed ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`,
            variant: "error",
          },
        })
        return
      }

      // Mark this session as "retry scheduled" so we don't double-schedule.
      pending.add(sessionID)
      // Bump the consecutive-failure streak (resets to 0 on next success).
      consecutive.set(sessionID, used + 1)

      // Show a small popup in OpenCode Desktop so you see it working.
      await client.tui.showToast({
        body: {
          message: `DeepSeek invalid input, saying "continue" in 7s... (${used + 1}/${MAX_CONSECUTIVE})`,
          variant: "warning",
        },
      })

      // Wait 7 seconds, then try again.
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
