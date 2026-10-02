// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// The exact error text from AgentRouter we want to catch.
// We compare in lowercase, so keep this lowercase too.
const MATCH = "budget pool quota has been exhausted"

// How long to wait between tries: 55 seconds = 55_000 milliseconds.
const DELAY = 55_000

// A Set remembers which sessions already have a retry timer running.
// This stops us from starting 5 timers for the same session.
const pending = new Set<string>()

// Every plugin exports a function. OpenCode calls it once at startup.
// `client` lets us talk to OpenCode (read messages, send prompts, show toasts).
export const BudgetRetry: Plugin = async ({ client }: any) => {
  // We return an object with hooks. `event` runs on every OpenCode event.
  return {
    event: async ({ event }: any) => {
      // Case 1: session finished fine (model answered, now waiting for user).
      // We remove the session from `pending` so future errors can retry again.
      if (event.type === "session.idle") {
        const id = (event.properties as any)?.sessionID as string
        if (id) pending.delete(id)
        return // do nothing else
      }

      // Case 2: ignore everything that is NOT an error.
      // While the agent works (thinking, tools, messages) we exit here.
      if (event.type !== "session.error") return

      // Turn the whole error event into lowercase text so we can search it.
      const text = JSON.stringify(event.properties ?? event).toLowerCase()

      // If the error is something else (network, 500, etc.), ignore it.
      if (!text.includes(MATCH)) return

      // Get the session ID from the event, e.g. "ses_abc123".
      const sessionID = (event.properties as any)?.sessionID as string

      // If no ID, or we already scheduled a retry for this session, stop.
      if (!sessionID || pending.has(sessionID)) return

      // Mark this session as "retry scheduled" so we don't double-schedule.
      pending.add(sessionID)

      // Show a small popup in OpenCode Desktop so you see it working.
      await client.tui.showToast({
        body: { message: `Pool exhausted, retrying in 55s...`, variant: "warning" },
      })

      // Wait 55 seconds, then try again.
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
          // The agent continues with full history, as if you pressed Enter again.
          if (lastUser) {
            await client.session.prompt({
              path: { id: sessionID },
              body: { parts: lastUser.parts },
            })
          }

          // Unlock: if this retry also fails, the next `session.error`
          // will schedule a new 55s timer. If it succeeds, `session.idle`
          // fires and unlocks anyway. Either way we unlock here.
          pending.delete(sessionID)
        } catch {
          // If something crashed (e.g. session deleted), just unlock.
          pending.delete(sessionID)
        }
      }, DELAY)
    },
  }
}