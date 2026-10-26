// V2 port of `.opencode/plugins/v1/provider-headers-timeout-retry.ts`
// (OpenCode 2.x).
//
// "Provider response headers timed out after NNNNNNms": the gateway accepted
// the connection and never answered. The "...after Nms" tail varies with the
// configured timeout, so only the stable fragment is matched. The transcript
// scan catches the silent arrival (text lands in a normal assistant message,
// turn ends with `session.idle`, no error event at all).

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

const PATTERNS = ["provider response headers timed out"]
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
