// @ts-nocheck - OpenCode loads this at runtime; types come from its own bun install, not this Qwik project.
// @ts-ignore - silences "Cannot find module '@opencode-ai/plugin'" in the editor.
import type { Plugin } from "@opencode-ai/plugin"

// What we catch: provider rate-limit rejections and quota / RPM limits (such as
// Google Gemini models exceeding 15 requests per minute, resource exhaustion,
// quota limits, and too-many-requests responses).
// Stable fragments:
//   1. "Resource has been exhausted" / "Resource exhausted"
//   2. "Quota exceeded" / "Exceeded your current quota"
//   3. "Rate limit exceeded" / "Rate-limit"
//   4. "Requests per minute" / "Per-minute"
//   5. "Too many requests"
// Any model/provider can send these, so the plugin is deliberately global
// (no model filter).
//
// Arrival shapes (same lessons as bang-drop-retry.ts):
//   1. as a `session.error` event (the common case),
//   2. SILENTLY: the text lands in the transcript as a NORMAL assistant
//      message, followed by a plain `session.idle` — no error event at all,
//   3. EMBEDDED: the same text sits mid-message in the last assistant reply
//      while the `session.error` payload carries generic transport noise
//      and no `session.idle` ever follows.
// Recovery is the same for all: wait DELAY (45s for per-minute rate window
// reset), then send "continue".

const PATTERNS = [
  "resource has been exhausted",
  "resource exhausted",
  "quota exceeded",
  "rate limit exceeded",
  "requests per minute",
  "too many requests",
  "exceeded your current quota",
  "per-minute",
]

// How long to wait before nudging: 45 seconds = 45_000 milliseconds.
// Rate limits (like Gemini 15 requests per minute) operate on a per-minute
// rolling window; 45s gives the window time to clear without excessive idle.
const DELAY = 45_000

// Grace period before reading the transcript back (idle and error paths):
// 500 milliseconds. Parts stream into storage as they arrive; a terminal
// event (`session.idle` / `session.error`) can land a hair BEFORE the final
// chunk is committed, so we wait a moment to avoid scoring a half-written
// message.
const SETTLE = 500

// Emergency brake: stop after this many CONSECUTIVE failures in a row.
// "Consecutive" means with no clean `session.idle` success in between.
// 30 means: the rate limit re-fires 30x -> it is a persistent quota block
// or heavy lock; stop auto-retrying so we don't loop forever.
const MAX_CONSECUTIVE = 30

// The tiny message we send. One "continue" resumes the existing task from
// history, just like when you type "continue" by hand.
const CONTINUE_TEXT = "continue"

// A Set remembers which sessions already have a retry timer running.
const pending = new Set<string>()

// A Map counts CONSECUTIVE failures per session (no success in between).
const consecutive = new Map<string, number>()

// A Set remembers sessions where the emergency brake tripped.
const stopped = new Set<string>()

// A Map remembers, per session, the ID of the last assistant message we
// already judged (silent path on idle, embedded path on error).
const handledMessage = new Map<string, string>()

// Walk any value and collect every string inside it (nested objects/arrays
// included).
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

const seenTypes = new Set<string>()

// ONE shared reader for the session ID.
function readSessionID(event: any): string {
  const p = (event.properties as any) ?? {}
  return ((p.sessionID ?? p.session?.id ?? p.sessionId ?? "") as string) || ""
}

let loggedIdleNoID = false

function matches(text: string): boolean {
  const lower = text.toLowerCase()
  return PATTERNS.some((p) => lower.includes(p))
}

async function toast(client: any, message: string, variant: string): Promise<void> {
  try {
    await client.tui.showToast({ body: { message, variant } })
  } catch {
    try {
      await client.app.log({
        body: { service: "provider-rate-limit-retry", level: "warn", message: `toast failed: ${message}` },
      })
    } catch {
      // Last resort: silence.
    }
  }
}

async function lastAssistantRateLimit(
  client: any,
  sessionID: string,
): Promise<{ messageID: string } | null> {
  try {
    const msgs = await client.session.messages({ path: { id: sessionID } })
    const last = [...(msgs?.data ?? [])]
      .reverse()
      .find((m: any) => m?.info?.role === "assistant")
    if (!last) return null

    const text = (last.parts ?? [])
      .filter((p: any) => p?.type === "text" && typeof p.text === "string")
      .map((p: any) => p.text)
      .join("\n")
    if (!text || !matches(text)) return null

    return { messageID: String(last.info?.id ?? "") }
  } catch {
    return null
  }
}

export const ProviderRateLimitRetry: Plugin = async ({ client }: any) => {
  const scheduleRetry = async (
    sessionID: string,
    trigger: string,
  ): Promise<void> => {
    if (pending.has(sessionID)) return
    if (stopped.has(sessionID)) return

    const used = consecutive.get(sessionID) ?? 0

    if (used >= MAX_CONSECUTIVE) {
      stopped.add(sessionID)
      pending.delete(sessionID)
      await toast(client, `Rate-limit / quota error ${MAX_CONSECUTIVE}x in a row, brake ON. Check account limits or start a new session.`, "error")
      return
    }

    pending.add(sessionID)
    consecutive.set(sessionID, used + 1)

    try {
      await client.app.log({
        body: {
          service: "provider-rate-limit-retry",
          level: "info",
          message: `matched ${trigger} (${used + 1}/${MAX_CONSECUTIVE})`,
        },
      })
    } catch {
      // Ignore log failure
    }

    await toast(client, `Rate limit / quota exceeded (${trigger}), saying "continue" in 45s... (${used + 1}/${MAX_CONSECUTIVE})`, "warning")

    setTimeout(async () => {
      pending.delete(sessionID)
      try {
        await client.session.prompt({
          path: { id: sessionID },
          body: { parts: [{ type: "text", text: CONTINUE_TEXT }] },
        })
      } catch {
        // Ignore prompt failure
      }
    }, DELAY)
  }

  return {
    event: async ({ event }: any) => {
      if (event?.type && !seenTypes.has(event.type)) {
        seenTypes.add(event.type)
        try {
          await client.app.log({
            body: {
              service: "provider-rate-limit-retry",
              level: "debug",
              message: `saw event type: ${event.type}`,
            },
          })
        } catch {
          // Ignore log failure
        }
      }

      if (event.type === "session.idle") {
        const id = readSessionID(event)
        if (!id) {
          if (!loggedIdleNoID) {
            loggedIdleNoID = true
            try {
              await client.app.log({
                body: {
                  service: "provider-rate-limit-retry",
                  level: "warn",
                  message: `session.idle carried no sessionID head=${JSON.stringify(event).slice(0, 200)}`,
                },
              })
            } catch {
              // Ignore log failure
            }
          }
          return
        }

        await new Promise((r) => setTimeout(r, SETTLE))
        const hit = await lastAssistantRateLimit(client, id)
        if (hit) {
          if (handledMessage.get(id) !== hit.messageID) {
            handledMessage.set(id, hit.messageID)
            try {
              await client.app.log({
                body: {
                  service: "provider-rate-limit-retry",
                  level: "warn",
                  message: `silent rate-limit in assistant message ${hit.messageID}`,
                },
              })
            } catch {
              // Ignore log failure
            }
            await scheduleRetry(id, "silent rate-limit")
          }
          return
        }

        handledMessage.delete(id)
        pending.delete(id)
        consecutive.delete(id)
        stopped.delete(id)
        return
      }

      if (event.type !== "session.error") return

      const sessionID = readSessionID(event)
      const props = (event.properties as any) ?? event
      const strings: string[] = []
      collectStrings(props, strings)

      if (!strings.some(matches)) {
        if (sessionID) {
          await new Promise((r) => setTimeout(r, SETTLE))
          const hit = await lastAssistantRateLimit(client, sessionID)
          if (hit && handledMessage.get(sessionID) !== hit.messageID) {
            handledMessage.set(sessionID, hit.messageID)
            try {
              await client.app.log({
                body: {
                  service: "provider-rate-limit-retry",
                  level: "warn",
                  message: `embedded rate-limit in assistant message ${hit.messageID} (generic error payload)`,
                },
              })
            } catch {
              // Ignore log failure
            }
            await scheduleRetry(sessionID, "embedded rate-limit")
          }
        }
        return
      }

      if (!sessionID) {
        try {
          await client.app.log({
            body: {
              service: "provider-rate-limit-retry",
              level: "warn",
              message: `matched rate-limit but no sessionID in payload head=${JSON.stringify(event.properties ?? event).slice(0, 200)}`,
            },
          })
        } catch {
          // Ignore log failure
        }
        return
      }

      await scheduleRetry(sessionID, "rate-limit")
    },
  }
}
