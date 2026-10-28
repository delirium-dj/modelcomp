// Shared engine for the V2 retry plugins (OpenCode 2.x / Desktop 2.x).
//
// Lives OUTSIDE `.opencode/plugins/` on purpose: OpenCode auto-discovers every
// `.ts` file directly inside that directory as a plugin, and a helper module
// without a default export would be reported as a load failure.
//
// Behaviour is a 1:1 port of the V1 plugins parked in `.opencode/plugins/v1/`:
//   detect a provider error  ->  wait  ->  send "continue" and let the model
//   resume from history.
//
// V2 differences that shape this file:
//   * Events arrive from `ctx.event.subscribe()` and carry `data` (V1 used
//     `properties`), so everything below reads both.
//   * There is no `ctx.app.log` and no toast API, so diagnostics go to console.
//   * `ctx.session.prompt({ sessionID, text })` replaces
//     `client.session.prompt({ path, body: { parts } })`.
//   * Transcripts are `{ type, content: [...] }` (V1 used `{ info, parts }`),
//     so message readers accept both shapes.

import { Plugin } from "@opencode/plugin"

export interface RetrySpec {
  /** Stable plugin id (also the log prefix). */
  id: string
  /** Lowercase fragments; the error matches when ANY of them appears. */
  matches: readonly string[]
  /** Extra lowercase fragments that must ALSO appear (e.g. both "gpt" and "sol"). */
  requireAll?: readonly string[]
  /** Only act when the session's provider/model contains this (lowercase). */
  modelFilter?: string
  /** Wait before nudging the session, in milliseconds. */
  delayMs: number
  /** Pause before reading the transcript, so the last message is persisted. */
  settleMs?: number
  /** Consecutive nudges before the brake engages. Omit for "never stop". */
  maxConsecutive?: number
  /** Text sent as the next user turn. */
  continueText: string
  /** Re-send the last user message instead of `continueText`. */
  resendLastUser?: boolean
  /** Log line when the brake engages. */
  brakeMessage: string
  /** Log line when a retry is scheduled. */
  announce: (trigger: string, attempt: number, max: number) => string
  /**
   * Optional transcript scanner for "silent" drops: the provider ends the turn
   * with degenerate text and a plain `session.idle`, so no error event fires.
   * Returns a trigger label when the assistant text looks broken.
   */
  scan?: (text: string) => string | null
}

type AnyRecord = Record<string, any>

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

function log(id: string, level: "info" | "warn" | "error", message: string): void {
  const line = `[${id}] ${message}`
  if (level === "error") console.error(line)
  else if (level === "warn") console.warn(line)
  else console.log(line)
}

function collectStrings(value: unknown, out: string[]): void {
  if (typeof value === "string") {
    out.push(value)
  } else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out)
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value as AnyRecord)) collectStrings(item, out)
  }
}

const roleOf = (message: AnyRecord): string => String(message?.type ?? message?.role ?? "")

/** V2 stores text in `content`, V1 in `parts`. Accept either. */
function messageText(message: AnyRecord): string {
  const parts = Array.isArray(message?.content)
    ? message.content
    : Array.isArray(message?.parts)
      ? message.parts
      : []
  return parts
    .filter((part: AnyRecord) => part?.type === "text" && typeof part.text === "string")
    .map((part: AnyRecord) => part.text as string)
    .join("\n")
}

/** `ctx.session.list` is paginated; `ctx.session.get` may or may not be wrapped. */
const unwrap = (value: AnyRecord): AnyRecord => (value && typeof value === "object" && "data" in value ? (value as AnyRecord).data : value)

export function defineRetryPlugin(spec: RetrySpec) {
  const max = spec.maxConsecutive ?? Number.POSITIVE_INFINITY

  return Plugin.define({
    id: spec.id,
    setup(ctx: any) {
      const controller = new AbortController()
      const timers = new Map<string, ReturnType<typeof setTimeout>>()
      const pending = new Set<string>()
      const consecutive = new Map<string, number>()
      const stopped = new Set<string>()
      const handledMessage = new Map<string, string>()
      // Sessions whose current turn ended with a provider error. V2 emits
      // `session.error` and then lets the session go idle, so a plain idle is
      // not proof of a healthy turn; without this the brake counter would be
      // wiped after every failed attempt and the brake would never engage.
      const errorSeen = new Set<string>()

      const readMessages = async (sessionID: string): Promise<AnyRecord[]> => {
        // Desktop 2.x exposes the transcript as `ctx.session.context`; other
        // 2.x builds used `ctx.session.messages`. Try both, and accept the
        // list either bare or wrapped in `{ data }` / `{ messages }`.
        const calls = [
          () => ctx.session.context({ sessionID }),
          () => ctx.session.messages({ sessionID }),
          () => ctx.session.messages({ path: { id: sessionID } }),
        ]
        for (const call of calls) {
          try {
            const result = await call()
            const unwrapped = unwrap(result)
            const list = Array.isArray(result)
              ? result
              : Array.isArray(unwrapped)
                ? unwrapped
                : Array.isArray(unwrapped?.messages)
                  ? unwrapped.messages
                  : []
            if (list.length > 0) return list
          } catch {
            // API shape not present in this build - try the next one.
          }
        }
        return []
      }

      const sessionMatchesModel = async (sessionID: string): Promise<boolean> => {
        if (!spec.modelFilter) return true
        try {
          const info = unwrap(await ctx.session.get({ sessionID })) ?? {}
          const model = info.model ?? {}
          const hay = `${model.providerID ?? ""} ${model.id ?? ""} ${model.name ?? ""}`.toLowerCase()
          // Unknown model => stay silent, the same way the V1 plugins did.
          return hay.trim() === "" ? false : hay.includes(spec.modelFilter)
        } catch {
          return false
        }
      }

      const sendContinue = async (sessionID: string): Promise<void> => {
        if (spec.resendLastUser) {
          const messages = await readMessages(sessionID)
          const lastUser = [...messages].reverse().find((message) => roleOf(message) === "user")
          const text = lastUser ? messageText(lastUser) : ""
          if (text) {
            await ctx.session.prompt({ sessionID, text })
            return
          }
          // Transcript unavailable in this build: fall back to the continue
          // text instead of dropping the retry silently.
          log(spec.id, "warn", "no user text to re-send; falling back to the continue text")
        }
        await ctx.session.prompt({ sessionID, text: spec.continueText })
      }

      const scheduleRetry = async (sessionID: string, trigger: string): Promise<void> => {
        if (pending.has(sessionID) || stopped.has(sessionID)) return

        const used = consecutive.get(sessionID) ?? 0
        if (used >= max) {
          stopped.add(sessionID)
          pending.delete(sessionID)
          log(spec.id, "error", spec.brakeMessage)
          return
        }

        pending.add(sessionID)
        consecutive.set(sessionID, used + 1)
        log(spec.id, "info", spec.announce(trigger, used + 1, max))

        const timer = setTimeout(() => {
          timers.delete(sessionID)
          pending.delete(sessionID)
          void sendContinue(sessionID).catch((error: unknown) => {
            log(spec.id, "warn", `could not nudge session: ${String(error)}`)
          })
        }, spec.delayMs)
        timers.set(sessionID, timer)
      }

      const scanLastAssistant = async (sessionID: string): Promise<{ messageID: string; trigger: string } | null> => {
        if (!spec.scan) return null
        try {
          const messages = await readMessages(sessionID)
          const last = [...messages].reverse().find((message) => roleOf(message) === "assistant")
          if (!last) return null
          const text = messageText(last)
          if (!text) return null
          const trigger = spec.scan(text)
          if (!trigger) return null
          return { messageID: String(last.id ?? ""), trigger }
        } catch {
          return null
        }
      }

      const resetSession = (sessionID: string): void => {
        const timer = timers.get(sessionID)
        if (timer) {
          clearTimeout(timer)
          timers.delete(sessionID)
        }
        handledMessage.delete(sessionID)
        pending.delete(sessionID)
        consecutive.delete(sessionID)
        stopped.delete(sessionID)
      }

      const onIdle = async (sessionID: string): Promise<void> => {
        if (!sessionID) return

        // The turn ended because of a provider error: keep the brake counter and
        // the armed retry timer, drop only the "already handled" marker.
        if (errorSeen.delete(sessionID)) {
          handledMessage.delete(sessionID)
          return
        }

        if (!spec.scan) {
          resetSession(sessionID)
          return
        }

        if (spec.settleMs) await sleep(spec.settleMs)
        const hit = await scanLastAssistant(sessionID)
        if (!hit) {
          resetSession(sessionID)
          return
        }
        if (handledMessage.get(sessionID) === hit.messageID) return
        handledMessage.set(sessionID, hit.messageID)
        log(spec.id, "warn", `silent ${hit.trigger} in assistant message ${hit.messageID}`)
        await scheduleRetry(sessionID, hit.trigger)
      }

      const onError = async (sessionID: string, data: AnyRecord): Promise<void> => {
        const strings: string[] = []
        collectStrings(data, strings)
        const raw = strings.join("\n")
        const text = raw.toLowerCase()
        const hit = spec.matches.some((pattern) => text.includes(pattern))
        const extraOk = (spec.requireAll ?? []).every((pattern) => text.includes(pattern))
        // A storm/refusal can also arrive in the payload itself rather than in
        // the transcript (V1 ran its scorer over `collectStrings(props)` too).
        const payloadTrigger = hit ? "" : (spec.scan?.(raw) ?? "")

        if ((hit && extraOk) || payloadTrigger) {
          if (!sessionID) {
            log(spec.id, "warn", `matched but the event carried no sessionID head=${text.slice(0, 200)}`)
            return
          }
          if (!(await sessionMatchesModel(sessionID))) return
          errorSeen.add(sessionID)
          await scheduleRetry(sessionID, payloadTrigger || "error")
          return
        }

        // Embedded case: the provider text sits in the last assistant message
        // while the error payload only carries generic transport noise.
        if (!spec.scan || !sessionID) return
        if (spec.settleMs) await sleep(spec.settleMs)
        const embedded = await scanLastAssistant(sessionID)
        if (!embedded) return
        if (handledMessage.get(sessionID) === embedded.messageID) return
        if (!(await sessionMatchesModel(sessionID))) return
        handledMessage.set(sessionID, embedded.messageID)
        errorSeen.add(sessionID)
        log(spec.id, "warn", `embedded ${embedded.trigger} in assistant message ${embedded.messageID}`)
        await scheduleRetry(sessionID, `${embedded.trigger} (embedded)`)
      }

      // One reader for every event shape V2.2 emits. `data.info.sessionID` is
      // the session for `message.updated`; `data.part.sessionID` for
      // `message.part.updated`. Never use `data.info.id` - that is a MESSAGE id.
      const resolveSessionID = (data: AnyRecord): string =>
        String(
          data.sessionID ??
            data.session?.id ??
            data.sessionId ??
            data.info?.sessionID ??
            data.part?.sessionID ??
            data.part?.sessionId ??
            "",
        )

      // Payload matcher shared by the error path and the retry-status marker.
      const matchesPayload = (text: string): boolean => {
        if (!text) return false
        const lower = text.toLowerCase()
        const required = (spec.requireAll ?? []).every((pattern) => lower.includes(pattern))
        return (spec.matches.some((pattern) => lower.includes(pattern)) && required) || Boolean(spec.scan?.(text))
      }

      void (async () => {
        try {
          for await (const event of ctx.event.subscribe({ signal: controller.signal })) {
            try {
              const raw = (event ?? {}) as AnyRecord
              const data = (raw.data ?? raw.properties ?? {}) as AnyRecord
              const sessionID = resolveSessionID(data)

              if (raw.type === "session.idle") {
                await onIdle(sessionID)
              } else if (raw.type === "session.error") {
                await onError(sessionID, data)
              } else if (raw.type === "session.deleted") {
                if (sessionID) resetSession(sessionID)
              } else if (raw.type === "session.status") {
                // V2 models a transient provider failure as a retry status.
                // While the built-in retry runs we do NOT nudge (that would
                // double-send prompts), but we must remember that this turn
                // died so the following `session.idle` cannot wipe the brake.
                const message = String(data.status?.message ?? "")
                if (data.status?.type === "retry" && sessionID && matchesPayload(message)) {
                  errorSeen.add(sessionID)
                }
              } else if (raw.type === "message.updated") {
                // Legacy shape: the assistant message itself carries the error.
                const info = data.info
                if (info?.error && roleOf(info) === "assistant") {
                  await onError(sessionID, info.error)
                }
              } else if (raw.type === "message.part.updated") {
                // Legacy V1 retry part, still emitted for old sessions.
                const part = data.part
                if (part?.type === "retry" && part.error) {
                  await onError(sessionID || String(part.sessionID ?? part.sessionId ?? ""), part.error)
                }
              }
            } catch (error) {
              log(spec.id, "warn", `event handler failed: ${String(error)}`)
            }
          }
        } catch {
          // aborted on unload
        }
      })()

      return () => {
        controller.abort()
        for (const timer of timers.values()) clearTimeout(timer)
        timers.clear()
      }
    },
  })
}
