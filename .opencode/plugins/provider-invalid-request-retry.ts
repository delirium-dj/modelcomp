// V2 port of `.opencode/plugins/v1/provider-invalid-request-retry.ts`
// (OpenCode 2.x).
//
// "[Vendor] The request was rejected as invalid" / "Bad Request: Invalid
// request" - usually a false positive on one assembled payload; a plain
// "continue" turns the last message back into a user turn and the session
// resumes. The "[Vendor]" prefix varies, so only the stable tails are matched,
// and the whole phrase is required (an assistant discussing validation errors
// says "invalid" in prose all the time).
//
// A genuinely malformed request re-rejects every time, so the 30-nudge brake
// caps it instead of hammering.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

const PATTERNS = ["the request was rejected as invalid", "bad request: invalid request"]
const DELAY = 8_000
const SETTLE = 500
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.provider-invalid-request-retry",
  matches: PATTERNS,
  scan: (text) => (matchesAny(text, PATTERNS) ? "invalid-request reject" : null),
  delayMs: DELAY,
  settleMs: SETTLE,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Invalid-request reject ${MAX_CONSECUTIVE}x in a row, brake ON (looks like a real refusal). Rephrase or start a new session.`,
  announce: (trigger, attempt) =>
    `invalid-request reject (${trigger}), saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
