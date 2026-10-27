// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// The stable part of the GPT-5.6 Sol pool error (Chinese for "no available channel").
// Full message looks like:
//   "当前分组 default 下对于模型 gpt-5.6-sol 无可用渠道 (request id: ...)"
// The request id changes every time, so we only match this stable fragment.
// Chinese has no uppercase/lowercase, but we still lowercase everything.
const MATCH = "无可用渠道"

// Extra guard so we ONLY handle GPT Sol and never steal other models' errors
// (Claude Opus 5 pool is handled by budget-retry.ts).
// We check the FULL error text for these, because the model name is inside
// the message itself ("对于模型 gpt-5.6-sol"), even when no model field exists.
const WANT_GPT = "gpt"
const WANT_SOL = "sol"

// How long to wait between tries: 83.5 seconds = 83_500 milliseconds.
// You counted the built-in retry storm at ~80s total ("retrying in 3s"
// attempts, then give-up). We fire 3.5s AFTER it gives up, so each of OUR
// retries starts clean instead of overlapping its countdowns.
const DELAY = 83_500

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no `session.idle` success in between.
// 259 x 83.5s = ~6 hours of polling. Any single success resets back to 0.
const MAX_CONSECUTIVE = 259

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting 5 timers for the same session.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
// Example: "ses_abc123" -> 2 means 2x pool-empty in a row.
// Any `session.idle` (one good answer) resets this back to 0.
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
// Once braked, we stay silent until a `session.idle` proves the session
// works again (which removes it from here).
const stopped = new Set<string>()

// Every plugin exports a function. OpenCode calls it once at startup.
// `client` lets us talk to OpenCode (read messages, send prompts, show toasts).
export const GptSolBudgetRetry: Plugin = async ({ client }: any) => {
  // We return an object with hooks. `event` runs on every OpenCode event.
  return {
    event: async ({ event }: any) => {
      // Case 1: session finished fine (model answered, now waiting for user).
      // One success means the pool is back, so reset everything:
      // unlock the timer, reset the streak, lift the brake.
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
      // NOTE: the built-in "retrying in 3s - attempt #N" countdowns are NOT
      // separate session.error events we must handle — we only care about
      // the final give-up error, which re-triggers us each minute anyway.
      if (event.type !== "session.error") return

      // Turn the whole error event into lowercase text so we can search it.
      const text = JSON.stringify(event.properties ?? event).toLowerCase()

      // If the error is something else (network, 500, Invalid input, ...),
      // ignore it. This plugin ONLY handles the pool-empty message.
      if (!text.includes(MATCH)) return

      // Model guard on the FULL text (the model name is inside the message).
      // This avoids the old deepseek bug where a missing model FIELD blocked
      // everything — here an unknown model simply means "not GPT Sol".
      if (!text.includes(WANT_GPT) || !text.includes(WANT_SOL)) return

      // Get the session ID from the event, e.g. "ses_abc123".
      const sessionID = (event.properties as any)?.sessionID as string

      // If no ID, or we already scheduled a retry for this session, stop.
      if (!sessionID || pending.has(sessionID)) return

      // If the brake already tripped for this session, stay silent.
      // Only a `session.idle` success will lift it again.
      if (stopped.has(sessionID)) return

      // How many consecutive pool-empty failures in a row? Default = 0.
      const used = consecutive.get(sessionID) ?? 0

      // Emergency brake: pool stayed empty for ~6 hours straight.
      // Latch as stopped so further errors stay silent (no toast spam).
      if (used >= MAX_CONSECUTIVE) {
        stopped.add(sessionID)
        pending.delete(sessionID)
        await client.tui.showToast({
          body: {
            message: `GPT Sol pool empty ${MAX_CONSECUTIVE}x in a row (~6h), brake ON. Try later or a new session.`,
            variant: "error",
          },
        })
        return
      }

      // Debug breadcrumb: proves the trigger fired. Check OpenCode logs
      // if you ever doubt the plugin saw the error.
      try {
        await client.app.log({
          body: {
            service: "gpt-sol-budget-retry",
            level: "info",
            message: `matched pool-empty (${used + 1}/${MAX_CONSECUTIVE}) head=${text.slice(0, 200)}`,
          },
        })
      } catch {
        // Logging must never break the plugin.
      }

      // Mark this session as "retry scheduled" so we don't double-schedule.
      pending.add(sessionID)
      // Bump the streak (resets to 0 on the next success).
      consecutive.set(sessionID, used + 1)

      // Show a small popup in OpenCode Desktop so you see it working.
      await client.tui.showToast({
        body: {
          message: `GPT Sol pool empty, retrying in 83.5s... (${used + 1}/${MAX_CONSECUTIVE})`,
          variant: "warning",
        },
      })

      // Wait 83.5 seconds, then try again.
      setTimeout(async () => {
        try {
          // Read all messages in this session from OpenCode.
          const msgs = await client.session.messages({ path: { id: sessionID } })

          // Find the last message YOU sent (role === "user").
          // We reverse the list so the newest message comes first.
          const lastUser = [...(msgs.data ?? [])]
            .reverse()
            .find((m) => m.info.role === "user")

          // Re-send that same message on the SAME model (no model field = no switch).
          // Pool errors are TRANSIENT (unlike "Invalid input"), so the same
          // payload succeeds once the pool refreshes — like pressing Enter again.
          if (lastUser) {
            await client.session.prompt({
              path: { id: sessionID },
              body: { parts: lastUser.parts },
            })
          }

          // Unlock the timer: if the pool is still empty, the next
          // `session.error` bumps the streak again (brake at 259 = ~6h).
          // If it succeeds, `session.idle` resets everything anyway.
          pending.delete(sessionID)
        } catch {
          // If something crashed (e.g. session deleted), just unlock.
          pending.delete(sessionID)
        }
      }, DELAY)
    },
  }
}
