// V2 port of `.opencode/plugins/v1/bang-drop-retry.ts` (OpenCode 2.x).
//
// Same job, three arrival shapes:
//   1. "!"-storms / "locklock..." / "@ @ @" arrive as a `session.error` body,
//   2. the same text sits inside the last assistant message while the error
//      payload is generic transport noise ("embedded"),
//   3. the turn simply ends with the degenerate text and a plain `session.idle`
//      ("silent") - no error event is ever emitted.
// Shapes 2 and 3 need the transcript scan, which the shared engine runs through
// `scan` on every idle/error. Thresholds are unchanged.

import { degenerateTrigger } from "../lib/plugin-retry/match"
import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const DELAY = 8_000
const SETTLE = 500
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.bang-drop-retry",
  matches: [], // never matched from the error payload directly...
  scan: (text) => degenerateTrigger(text) || null, // ...only through the transcript
  delayMs: DELAY,
  settleMs: SETTLE,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Drop/storm ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`,
  announce: (trigger, attempt) =>
    `drop/storm (${trigger}), saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
