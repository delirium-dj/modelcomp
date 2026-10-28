// V2 port of `.opencode/plugins/v1/provider-rate-limit-retry.ts`
// (OpenCode 2.x / Desktop 2.x).
//
// What we catch: provider rate-limit / quota rejections that are not the
// Gemini per-minute quota (that one is owned by `gemini-quota-retry.ts`, which
// also honours Google's own "retry in Ns" hint).
// Stable fragments:
//   - "rate limit exceeded"
//   - "too many requests"            (HTTP 429 wording)
//   - "resource has been exhausted"  (Google-style 429 without the underscore)
//   - "requests per minute" / "per-minute"
//
// Payload-only on purpose: this plugin has NO transcript scanner. A research
// answer in this repo discusses rate limits all the time, so scanning assistant
// prose for these generic phrases would fire spurious "continue" nudges.
//
// Recovery: a rate-limit window is per minute, so wait 45s (enough for a
// rolling minute window to reopen) and send "continue".

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const PATTERNS = [
  "rate limit exceeded",
  "too many requests",
  "resource has been exhausted",
  "resource exhausted",
  "requests per minute",
  "per-minute",
]

const DELAY = 45_000
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.provider-rate-limit-retry",
  matches: PATTERNS,
  delayMs: DELAY,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Rate-limit / quota error ${MAX_CONSECUTIVE}x in a row, brake ON. Check account limits or start a new session.`,
  announce: (trigger, attempt) =>
    `rate limit (${trigger}), saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
