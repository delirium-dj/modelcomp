// V2 port of `.opencode/plugins/v1/gemini-quota-retry.ts` (OpenCode 2.x).
//
// Self-contained on purpose: it imports nothing but `@opencode/plugin`, so it
// keeps working even if the shared engine in `lib/` is reorganised again. (The
// generic 429s - "rate limit exceeded", "too many requests", bare
// "resource exhausted" - are owned by `provider-rate-limit-retry.ts`; this file
// only handles the Gemini quota error, which is the one that tells us exactly
// how long to wait.)
//
// What we catch: the provider 429 that says the project's quota is used up.
// The exact text we saw from Gemini (free tier):
//   "You exceeded your current quota, please check your plan and billing details.
//    ... * Quota exceeded for metric:
//    generativelanguage.googleapis.com/generate_content_free_tier_input_token_count,
//    limit: 250000, model: gemini-3.5-flash-lite, description: Generate content
//    input tokens per minute limit exceeded on Free Tier ...
//    Please retry in 23.331327004s."
//
// How this plugin behaves:
//   1. The provider TELLS US how long to wait ("Please retry in 23.33s"), so we
//      wait that long instead of a fixed delay - plus a small margin (2s) for
//      the round trip, because the countdown started when Google built the error.
//   2. Infinite retry mode: Gemini models on free or metered tiers frequently hit
//      the 250k input token per minute (TPM) limit during long-running tasks.
//      Instead of giving up after a fixed number of attempts, this plugin keeps
//      messaging Gemini models indefinitely right after each retry window expires.
//
// Recovery is identical to the other retry plugins: wait, then send
// "please continue" so the agent resumes the existing task from history.
//
// V2 notes (why this file looks different from the .opencode/plugins/v1 copy):
//   * `Plugin.define({ id, setup })` replaces the V1 named-export function.
//   * Events arrive from `ctx.event.subscribe()` and carry `data` (V1 used
//     `properties`); both shapes are read below.
//   * `ctx.session.prompt({ sessionID, text })` replaces
//     `client.session.prompt({ path, body })`.
//   * There is no toast surface, so the user-visible line goes to the server
//     console instead.
//   * V2 emits `session.error` and then still lets the session go idle, so a
//     plain idle is NOT proof of a healthy turn - `errorSeen` remembers that a
//     quota failure just happened, so the attempt counter is not wiped prematurely.

import { Plugin } from "@opencode/plugin"

// Stable lowercased fragments. ANY of them marks the payload as a quota 429.
// We only ever inspect provider error payloads (never assistant prose), so
// these cannot fire mid-answer.
const MATCHES = [
  "you exceeded your current quota", // Gemini's exact sentence
  "quota exceeded for metric", // Gemini's metric bullet
  "resource_exhausted", // the gRPC status name Google puts in its JSON
]

// Grace added to the provider's own hint, covering our round trip + clock skew.
// Waiting exactly 23.33s would retry a fraction of a second too early and burn
// an attempt on a window that has not reopened yet. A 2-second grace ensures we fire
// right after Google's rate-limit window has genuinely reopened.
const MARGIN_MS = 2_000

// Safe maximum wait time per single retry hint. For rolling windows (TPM/RPM), hints are
// typically under a minute. We cap at 24 hours to avoid 32-bit signed integer overflow in setTimeout.
const MAX_WAIT_MS = 24 * 60 * 60_000

// Used when the error carries no hint at all. 60s matches the TPM/RPM window,
// which is the overwhelmingly common case for this error.
const FALLBACK_WAIT_MS = 60_000

// The tiny message we send. One nudge resumes the task from history, exactly
// like typing "continue" by hand - and it costs almost no input tokens, which
// matters because input tokens are the very thing this quota meters.
const CONTINUE_TEXT = "please continue"

// Quota errors are 429s that surface as an error event, because V2's own
// retry has already given up by the time the user sees one. We never react to
// `session.status` retry events: while the built-in retry is running there is
// nothing for us to do, and nudging on top of it would double-send prompts.

// Parse the provider's own "retry in Ns" hint. Handles:
//   - "Please retry in 23.331327004s."
//   - "Please retry after 23.33s."
//   - Google's JSON field: "retryDelay": "23s"
// Returns the LONGEST hint found (a payload can quote several models), already
// padded with the margin. `null` when there is no hint at all.
const RETRY_HINT = /retry(?:delay)?(?:\s+(?:in|after))?["'\s:]*([\d.]+)\s*s(?:ec(?:onds?)?)?\b/gi

function hintedWaitMs(text: string): number | null {
  let bestSeconds = 0
  for (const match of text.matchAll(RETRY_HINT)) {
    const seconds = Number.parseFloat(match[1])
    if (Number.isFinite(seconds) && seconds > bestSeconds) bestSeconds = seconds
  }
  if (bestSeconds <= 0) return null
  return Math.min(Math.ceil(bestSeconds * 1_000) + MARGIN_MS, MAX_WAIT_MS)
}

// Flatten every string in the payload: the message can hide in `message`,
// `error.message`, `data.message`, `responseBody`, or a provider wrapper.
function collectStrings(value: unknown, out: string[]): void {
  if (typeof value === "string") {
    out.push(value)
  } else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out)
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value as Record<string, unknown>)) collectStrings(item, out)
  }
}

function log(level: "info" | "warn" | "error", message: string): void {
  const line = `[gemini-quota-retry] ${message}`
  if (level === "error") console.error(line)
  else if (level === "warn") console.warn(line)
  else console.log(line)
}

export default Plugin.define({
  id: "modelcomp.gemini-quota-retry",
  setup(ctx: any) {
    const controller = new AbortController()

    // A Map of sessionID -> armed timer, so we can cancel a pending nudge and
    // never start two timers for the same session.
    const timers = new Map<string, ReturnType<typeof setTimeout>>()
    // Sessions with a nudge currently scheduled in a setTimeout.
    const pending = new Set<string>()
    // Consecutive quota failures per session (no clean turn in between), tracked for diagnostic logging.
    const consecutive = new Map<string, number>()
    // Sessions whose current turn died on a provider error, so the following
    // `session.idle` must NOT reset the failure streak.
    const errorSeen = new Set<string>()

    const clearTimer = (sessionID: string): void => {
      const timer = timers.get(sessionID)
      if (timer) {
        clearTimeout(timer)
        timers.delete(sessionID)
      }
    }

    // A genuinely clean turn: unlock everything and reset the attempt counter.
    const resetSession = (sessionID: string): void => {
      clearTimer(sessionID)
      pending.delete(sessionID)
      consecutive.delete(sessionID)
    }

    // Nudge the model with "please continue" so it picks up where it left off.
    const sendContinue = async (sessionID: string): Promise<void> => {
      try {
        await ctx.session.prompt({ sessionID, text: CONTINUE_TEXT })
        log("info", `sent "${CONTINUE_TEXT}" (${sessionID})`)
      } catch (error) {
        // Session deleted, network hiccup, or provider still refusing:
        // log the warning and check if the rejection itself was a quota error.
        log("warn", `could not nudge session: ${String(error)}`)
        // If the prompt call failed synchronously with a quota error, trigger onError
        // so that the next retry is scheduled even if no OpenCode event was dispatched.
        onError(sessionID, { message: String(error) })
      }
    }

    // Schedules a retry after the provider's hinted wait time (plus safety margin).
    const scheduleRetry = (sessionID: string, waitMs: number, hintSeconds: number | null): void => {
      // Step 1: Prevent duplicate timers for the same session while one is already queued.
      if (pending.has(sessionID)) return

      // Step 2: Track consecutive attempts for visibility.
      // NOTE: We do NOT enforce an emergency brake here because the user wants infinite retries.
      // Long research sessions on Gemini models will keep nudging indefinitely until the task succeeds.
      const used = consecutive.get(sessionID) ?? 0
      pending.add(sessionID)
      consecutive.set(sessionID, used + 1)

      const waitSeconds = (waitMs / 1_000).toFixed(1)
      const source = hintSeconds === null ? "no hint, TPM window" : `hint ${hintSeconds}s + ${MARGIN_MS / 1_000}s margin`
      log(
        "warn",
        `quota 429 (${source}): sending "${CONTINUE_TEXT}" in ${waitSeconds}s (attempt ${used + 1}) (${sessionID})`,
      )

      // Step 3: Arm the timer to wait until right after the retry window expires.
      const timer = setTimeout(() => {
        timers.delete(sessionID)
        // Hardening rule (.agents/rules.md line 163): Unlock `pending` immediately when the timer fires!
        // `ctx.session.prompt` awaits the entire agent turn (which can take minutes).
        // If we held `pending` locked during the turn, any new quota error during that turn
        // would be ignored. Deleting before the prompt allows new quota failures to schedule smoothly.
        pending.delete(sessionID)
        void sendContinue(sessionID)
      }, waitMs)
      timers.set(sessionID, timer)
    }

    const onError = (sessionID: string, data: Record<string, any>): void => {
      // Step 1: Extract all strings from the error payload.
      const strings: string[] = []
      collectStrings(data, strings)
      const raw = strings.join("\n")
      const text = raw.toLowerCase()

      // Step 2: Check if this error is actually a Gemini quota 429.
      if (!MATCHES.some((fragment) => text.includes(fragment))) return

      // Step 3: Ensure we have a valid session ID to nudge.
      if (!sessionID) {
        log("warn", `matched a quota 429 but the event carried no sessionID head=${text.slice(0, 200)}`)
        return
      }

      // Step 4: The turn died on a provider error: remember it so that the upcoming
      // `session.idle` does not falsely reset our attempt streak.
      errorSeen.add(sessionID)

      // Step 5: Parse Google's "Please retry in X.Xs" hint and schedule the retry.
      const hinted = hintedWaitMs(raw)
      scheduleRetry(sessionID, hinted ?? FALLBACK_WAIT_MS, hinted === null ? null : (hinted - MARGIN_MS) / 1_000)
    }

    void (async () => {
      try {
        for await (const event of ctx.event.subscribe({ signal: controller.signal })) {
          try {
            const raw = (event ?? {}) as Record<string, any>
            const data = (raw.data ?? raw.properties ?? {}) as Record<string, any>
            // Robust sessionID resolution covering all OpenCode 2.x event shapes (.agents/rules.md line 169)
            const sessionID = String(
              data.sessionID ??
                data.session?.id ??
                data.sessionId ??
                data.info?.sessionID ??
                data.part?.sessionID ??
                data.part?.sessionId ??
                "",
            )

            if (raw.type === "session.step.failed" || raw.type === "session.execution.failed") {
              // OpenCode 2.2 names for a provider failure; the text is on `data.error`.
              onError(sessionID, (data.error ?? data) as Record<string, any>)
              continue
            }

            if (raw.type === "session.retry.scheduled") {
              // The runtime retries on its own; only remember that this turn
              // died so the idle that follows cannot reset the streak.
              const strings: string[] = []
              collectStrings(data.error, strings)
              const retryText = strings.join("\n").toLowerCase()
              if (sessionID && MATCHES.some((fragment) => retryText.includes(fragment))) errorSeen.add(sessionID)
              continue
            }

            if (raw.type === "session.status" && data.status?.type === "retry" && sessionID) {
              // 2.2 also surfaces transient failures as a retry status.
              const message = String(data.status.message ?? "").toLowerCase()
              if (MATCHES.some((fragment) => message.includes(fragment))) errorSeen.add(sessionID)
              continue
            }

            if (raw.type === "session.error") {
              // Legacy 2.0/2.1 event name fallback.
              onError(sessionID, data)
              continue
            }

            if (raw.type === "message.updated") {
              // Handle structured error attached directly to an assistant message.
              const info = data.info
              if (info?.error && String(info.type ?? info.role ?? "") === "assistant") {
                onError(sessionID, info.error)
              }
              continue
            }

            if (raw.type === "message.part.updated") {
              // Handle retry part errors.
              const part = data.part
              if (part?.type === "retry" && part.error) {
                onError(sessionID || String(part.sessionID ?? part.sessionId ?? ""), part.error)
              }
              continue
            }

            if (raw.type === "session.idle") {
              if (!sessionID) continue
              if (errorSeen.delete(sessionID)) {
                // The idle belongs to the failed turn: keep the counter and the
                // armed timer, only drop the marker.
                continue
              }
              // A clean idle turn means previous retries succeeded! Reset session state.
              resetSession(sessionID)
              continue
            }

            if (raw.type === "session.deleted") {
              if (!sessionID) continue
              errorSeen.delete(sessionID)
              resetSession(sessionID)
            }
          } catch (error) {
            log("warn", `event handler failed: ${String(error)}`)
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
