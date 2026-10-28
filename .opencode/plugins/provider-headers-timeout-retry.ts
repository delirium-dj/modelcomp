// V2 port of `.opencode/plugins/v1/provider-headers-timeout-retry.ts`
// (OpenCode 2.x).
//
// Response-header timeouts - the request dies before the endpoint sends
// response headers. Two phrasings of the same failure:
//   - Gateway-side: "Provider response headers timed out after NNNNNNms".
//     The "...after Nms" tail varies with the configured timeout, so only the
//     stable fragment is matched.
//   - AI-side: "Timed out waiting for response headers" (server log shows
//     `Failed to drain Session` with cause `AI.Error: ...`). The word order
//     differs, so the gateway fragment does NOT catch it.
// The transcript scan catches the silent arrival (text lands in a normal
// assistant message, turn ends with `session.idle`, no error event at all).

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

const PATTERNS = [
  "provider response headers timed out", // gateway-side phrasing
  "timed out waiting for response headers", // AI-side phrasing
]
const DELAY = 10_000
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.provider-headers-timeout-retry",
  matches: PATTERNS,
  scan: (text) => (matchesAny(text, PATTERNS) ? "headers timeout" : null),
  delayMs: DELAY,
  // V1 scanned immediately here (no SETTLE) - the provider already hung for
  // minutes, so an extra pause buys nothing.
  settleMs: 0,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Headers timeout ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`,
  announce: (_trigger, attempt) =>
    `headers timeout, saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
