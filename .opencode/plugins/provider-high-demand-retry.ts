// V2 port of `.opencode/plugins/v1/provider-high-demand-retry.ts`
// (OpenCode 2.x).
//
// Three transient congestion families, one recovery (wait 20s, then
// "please continue"):
//   1. "...currently experiencing high demand. Spikes in demand are usually
//       temporary..." (Gemini-style)
//   2. "...temporarily rate-limited upstream..." (OpenRouter free models)
//   3. "...the service may be temporarily overloaded..." (generic)
// Only the stable fragments are matched; vendor prefixes, retry advice and
// settings URLs all vary. No model filter on purpose - any provider can send
// any of these. The transcript scan covers silent and embedded arrivals.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

const PATTERNS = [
  "currently experiencing high demand",
  "temporarily rate-limited upstream",
  "the service may be temporarily overloaded",
]
const DELAY = 20_000
const SETTLE = 500
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.provider-high-demand-retry",
  matches: PATTERNS,
  scan: (text) => (matchesAny(text, PATTERNS) ? "overload" : null),
  delayMs: DELAY,
  settleMs: SETTLE,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "please continue",
  brakeMessage: `High demand ${MAX_CONSECUTIVE}x in a row, brake ON. Try later or a new session.`,
  announce: (trigger, attempt) =>
    `model overloaded (${trigger}), saying "please continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
