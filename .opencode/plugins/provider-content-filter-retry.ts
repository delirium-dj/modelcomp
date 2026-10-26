// V2 port of `.opencode/plugins/v1/provider-content-filter-retry.ts`
// (OpenCode 2.x).
//
// "The response was blocked by the provider's content filter" is usually a
// FALSE positive: one "continue" brings the session straight back to work.
// The whole quoted sentence is matched on purpose - assistants legitimately
// discuss content filters in prose, and a bare-words match would fire retries
// mid-answer. The transcript scan covers the silent and embedded arrivals.
// A genuine refusal re-blocks every time, so the 30-nudge brake caps it.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

const PATTERNS = ["blocked by the provider's content filter"]
const DELAY = 8_000
const SETTLE = 500
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.provider-content-filter-retry",
  matches: PATTERNS,
  scan: (text) => (matchesAny(text, PATTERNS) ? "content-filter block" : null),
  delayMs: DELAY,
  settleMs: SETTLE,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Content-filter block ${MAX_CONSECUTIVE}x in a row, brake ON (looks like a real refusal). Rephrase or start a new session.`,
  announce: (trigger, attempt) =>
    `content-filter block (${trigger}), saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
