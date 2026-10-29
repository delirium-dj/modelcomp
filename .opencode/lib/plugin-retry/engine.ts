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
//   * OpenCode 2.2 event names: a provider failure arrives as
//     `session.step.failed` / `session.execution.failed` with the error on
//     `data.error`; `session.retry.scheduled` means the runtime is retrying on
//     its own. 2.2 no longer emits `session.error` at all, so the legacy names
//     are kept only as fallbacks.
//   * 2.2 transcript shapes: user messages carry `text`, assistant messages
//     carry `content: [{ type: "text", text }]`, and the terminal entry is an
//     `idle` message with `outcome` + `error`. Provider failures are stored on
//     the message (`assistant.error` / `idle.error`), NOT written as assistant
//     text, which is why the silent scanner reads the structured error first.
//   * There is no `ctx.app.log` and no toast API, so diagnostics go to console.
//   * `ctx.session.prompt({ sessionID, text })` replaces
//     `client.session.prompt({ path, body: { parts } })`.
//   * Transcripts are read with `ctx.session.context({ sessionID })`; the 1.x
//     `messages` shape is still accepted where a build exposes it.

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

/**
 * Cross-plugin nudge guard.
 *
 * Every plugin in the suite imports THIS module, so module-level state is shared
 * between them. That matters because one failure can match two plugins at once:
 * a transport-flavoured drop carries both the provider text and undici noise,
 * e.g. `AI.Error.Transport: Timed out waiting for response headers` plus
 * `fetch failed` - which trips `provider-headers-timeout-retry` ("continue") AND
 * `api-connect-retry` ("please continue"). Live evidence (2026-10-29, session
 * ses_e860688beffeBzqsuEF2iDHyG2): two prompts landed 2 ms apart
 * (00:21:46.420 "continue", 00:21:46.422 "please continue"), so the model
 * resumed twice. The first plugin to schedule a nudge wins; the others stand
 * down for NUDGE_WINDOW_MS. The window must outlast the plugins' DELAY (10s) so
 * a second plugin that reacts to the same failure keeps quiet even when it
 * detects it a moment later.
 */
const NUDGE_WINDOW_MS = 15_000
const lastNudge = new Map<string, { at: number; id: string }>()

function claimNudge(sessionID: string, id: string): { ok: true } | { ok: false; by: string; elapsed: number } {
  const now = Date.now()
  const previous = lastNudge.get(sessionID)
  // Only a DIFFERENT plugin is told to stand down. A plugin that already owns
  // this session's retry chain keeps it, so a fast-failing provider (turn dies
  // in a few seconds, well inside the window) is still nudged again instead of
  // stalling until the next unrelated event.
  if (previous && previous.id !== id && now - previous.at < NUDGE_WINDOW_MS) {
    return { ok: false, by: previous.id, elapsed: now - previous.at }
  }
  lastNudge.set(sessionID, { at: now, id })
  return { ok: true }
}

function releaseNudge(sessionID: string): void {
  lastNudge.delete(sessionID)
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

/**
 * Text of a transcript message. Three shapes coexist:
 *   - 2.2 user messages:     `{ type: "user", text }` (no parts array)
 *   - 2.2 assistant messages: `{ type: "assistant", content: [{ type: "text", text }] }`
 *   - 1.x messages:           `{ role, parts: [...] }` (legacy fallback)
 */
function messageText(message: AnyRecord): string {
  const parts = Array.isArray(message?.content)
    ? message.content
    : Array.isArray(message?.parts)
      ? message.parts
      : []
  const fromParts = parts
    .filter((part: AnyRecord) => part?.type === "text" && typeof part.text === "string")
    .map((part: AnyRecord) => part.text as string)
    .join("\n")
  const ownText = typeof message?.text === "string" ? message.text : ""
  return [fromParts, ownText].filter(Boolean).join("\n")
}

/**
 * The provider's structured failure text. OpenCode 2.2 does NOT inject
 * "Upstream error from Phala: ..." as an assistant text part - it stores the
 * error on the message (`assistant.error`, `idle.error`) and leaves the content
 * empty. Older builds also mirrored it under `retry.error`.
 */
function structuredErrorText(message: AnyRecord | undefined): string {
  const pieces = [
    message?.error?.message,
    message?.error?.response?.body,
    message?.retry?.error?.message,
    message?.retry?.error?.response?.body,
  ]
  return pieces.filter((piece): piece is string => typeof piece === "string" && piece.trim() !== "").join("\n")
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

        // Cross-plugin guard (see claimNudge): another plugin in the suite may
        // match the same failure. Only the first one nudges.
        const claim = claimNudge(sessionID, spec.id)
        if (!claim.ok) {
          log(
            spec.id,
            "info",
            `standing down: ${claim.by} already nudged this session ${claim.elapsed}ms ago (one nudge per failure)`,
          )
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

      /** True when `spec.matches` (and every `requireAll` fragment) occurs in `text`. */
      const matchesPatterns = (text: string): boolean => {
        if (!text) return false
        const lower = text.toLowerCase()
        if (!(spec.requireAll ?? []).every((pattern) => lower.includes(pattern))) return false
        return spec.matches.some((pattern) => lower.includes(pattern))
      }

      // Payload matcher shared by the error path and the retry-status marker.
      const matchesPayload = (text: string): boolean =>
        matchesPatterns(text) || Boolean(text && spec.scan?.(text))

      type TurnOutcome = "succeeded" | "failed" | "interrupted" | "unknown"
      interface TurnScan {
        messageID: string
        trigger: string | null
        outcome: TurnOutcome
      }

      const scanLastTurn = async (sessionID: string): Promise<TurnScan | null> => {
        try {
          const messages = await readMessages(sessionID)
          if (messages.length === 0) return null
          const last = messages[messages.length - 1]
          const lastAssistant = [...messages].reverse().find((message) => roleOf(message) === "assistant")

          const outcome: TurnOutcome =
            roleOf(last) === "idle"
              ? (String(last.outcome ?? "unknown") as TurnOutcome)
              : last?.error
                ? "failed"
                : "unknown"

          // OpenCode 2.2 stores provider failures ON THE MESSAGE
          // (`assistant.error` / `idle.error`) instead of writing them as an
          // assistant text part, so structured errors are checked FIRST. Both
          // the terminal `idle` entry and the failed assistant message are
          // candidates.
          for (const message of [last, lastAssistant]) {
            const structured = structuredErrorText(message)
            if (!structured) continue
            if (matchesPatterns(structured)) {
              return { messageID: String(message?.id ?? ""), trigger: "error", outcome }
            }
            const scanned = spec.scan?.(structured)
            if (scanned) return { messageID: String(message?.id ?? ""), trigger: scanned, outcome }
          }

          // Silent degradation still lives in assistant TEXT, and only the
          // spec's own scanner may inspect prose: generic fragments such as
          // "rate limit exceeded" would false-positive in this repo's research
          // answers.
          if (spec.scan && lastAssistant) {
            const scanned = spec.scan(messageText(lastAssistant))
            if (scanned) return { messageID: String(lastAssistant.id ?? ""), trigger: scanned, outcome }
          }

          return { messageID: String(last.id ?? ""), trigger: null, outcome }
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
        // A clean turn clears the cross-plugin guard, so the next failure can
        // be claimed by whichever plugin matches it first.
        releaseNudge(sessionID)
      }

      const onIdle = async (sessionID: string): Promise<void> => {
        if (!sessionID) return

        // A matching failure event already proved this turn is bad.
        let failedTurn = errorSeen.delete(sessionID)

        // No matching event reached this plugin (2.0/2.1 `session.error` is not
        // emitted by 2.2 at all). Before paying for a transcript read, ask the
        // session once whether the turn failed; 2.2 keeps the terminal outcome
        // on the session itself.
        if (!failedTurn && !spec.scan) {
          let info: AnyRecord | undefined
          try {
            info = unwrap(await ctx.session.get({ sessionID }))
          } catch {
            info = undefined
          }
          if (info?.outcome !== "failed") {
            resetSession(sessionID)
            return
          }
          failedTurn = true
        }

        if (spec.settleMs) await sleep(spec.settleMs)
        const scan = await scanLastTurn(sessionID)

        // A clean end of turn proves the retry chain worked: clear the brake,
        // even when an earlier failure event marked this turn.
        if (scan?.outcome === "succeeded") {
          resetSession(sessionID)
          return
        }

        if (scan?.trigger) {
          if (handledMessage.get(sessionID) === scan.messageID) return
          if (!(await sessionMatchesModel(sessionID))) return
          handledMessage.set(sessionID, scan.messageID)
          log(spec.id, "warn", `turn ended with ${scan.trigger} in message ${scan.messageID}`)
          await scheduleRetry(sessionID, scan.trigger)
          return
        }

        // No match. A failed turn keeps the streak and any armed retry;
        // anything else is a clean turn and resets the brake.
        if (failedTurn) {
          handledMessage.delete(sessionID)
          return
        }
        resetSession(sessionID)
      }

      const onError = async (sessionID: string, data: AnyRecord): Promise<void> => {
        const strings: string[] = []
        collectStrings(data, strings)
        const raw = strings.join("\n")
        const text = raw.toLowerCase()
        const hit = matchesPatterns(raw)
        // A storm/refusal can also arrive in the payload itself rather than in
        // the transcript (V1 ran its scorer over `collectStrings(props)` too).
        const payloadTrigger = hit ? "" : (spec.scan?.(raw) ?? "")

        if (hit || payloadTrigger) {
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
        if (!sessionID) return
        if (spec.settleMs) await sleep(spec.settleMs)
        const embedded = await scanLastTurn(sessionID)
        if (!embedded?.trigger) return
        if (handledMessage.get(sessionID) === embedded.messageID) return
        if (!(await sessionMatchesModel(sessionID))) return
        handledMessage.set(sessionID, embedded.messageID)
        errorSeen.add(sessionID)
        log(spec.id, "warn", `embedded ${embedded.trigger} in message ${embedded.messageID}`)
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

      /** Join every string inside a payload (`error.message`, `response.body`, ...). */
      const stringsOf = (value: unknown): string => {
        const out: string[] = []
        collectStrings(value, out)
        return out.join("\n")
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
              } else if (raw.type === "session.step.failed" || raw.type === "session.execution.failed") {
                // OpenCode 2.2 names for a provider failure. The text lives on
                // `data.error` ({ type, message, status?, response? }); 2.0/2.1
                // used the now-absent `session.error`, kept as a fallback below.
                await onError(sessionID, data.error ?? data)
              } else if (raw.type === "session.retry.scheduled") {
                // The runtime is retrying on its own. Remember the failure so
                // the idle that follows cannot wipe the brake, but do NOT
                // nudge - that would queue a second prompt mid-retry.
                if (sessionID && matchesPayload(stringsOf(data.error))) errorSeen.add(sessionID)
              } else if (raw.type === "session.error") {
                // Legacy 2.0/2.1 event name; harmless if it never fires.
                await onError(sessionID, data)
              } else if (raw.type === "session.deleted") {
                if (sessionID) resetSession(sessionID)
              } else if (raw.type === "session.status") {
                // 2.2 also reports a transient failure as a retry status.
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

      log(spec.id, "info", "retry plugin ready (2.2 events: step.failed / execution.failed / idle)")

      return () => {
        controller.abort()
        for (const timer of timers.values()) clearTimeout(timer)
        timers.clear()
      }
    },
  })
}
