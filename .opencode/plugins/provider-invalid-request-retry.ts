// V2 port of `.opencode/plugins/v1/provider-invalid-request-retry.ts`
// (OpenCode 2.x).
//
// "Invalid request" / "[Vendor] The request was rejected as invalid" /
// "Bad Request: Invalid request" - usually a false positive on one assembled
// payload; a plain "continue" turns the last message back into a user turn and
// the session resumes.
//
// Real-world cases this must catch:
//   - Phala, 2026-10-28: `session.step.failed` with
//       data.error.message = "Upstream error from Phala: The request was
//       rejected as invalid"
//   - bare runtime message, 2026-10-29:
//       cause="AI.Error: Invalid request"   (no vendor prefix, no "Bad Request:")
// OpenCode 2.2 stores these on the structured error (`data.error` /
// `message.error`), not in assistant text.
//
// Matching breadth is split on purpose:
//   * Payload / structured error -> broad ("invalid request"). The provider may
//     send just those two words, so requiring a longer sentence misses it.
//   * Assistant PROSE -> narrow (full phrases), plus a short-message allowance
//     for silent drops. "invalid request" is ordinary technical prose in this
//     repo's research answers, and a bare match there would nudge a healthy
//     session mid-answer.
//
// A genuinely malformed request re-rejects every time, so the 30-nudge brake
// caps it instead of hammering.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

// Payload / structured-error patterns. Keep these lowercase; matching is
// case-insensitive. "invalid request" also covers "Bad Request: Invalid
// request" and any "Invalid request: <detail>" wrapper.
const PATTERNS = ["invalid request", "the request was rejected as invalid"]

// Assistant prose is only trusted with the full phrases (see header). The bare
// form is handled separately below, and only for short, standalone messages.
const PROSE_PATTERNS = ["the request was rejected as invalid", "bad request: invalid request"]

// A provider that drops the failure into assistant TEXT leaves a short line
// like "Invalid request". A real answer discussing invalid requests is long,
// so the length gate keeps the bare pattern out of normal prose.
const SHORT_MESSAGE_MAX = 300

const DELAY = 8_000
const SETTLE = 500
const MAX_CONSECUTIVE = 30

const scanProse = (text: string): string | null => {
  if (matchesAny(text, PROSE_PATTERNS)) return "invalid-request reject"
  const trimmed = text.trim()
  if (trimmed.length > 0 && trimmed.length <= SHORT_MESSAGE_MAX && matchesAny(trimmed, ["invalid request"])) {
    return "invalid-request reject (short)"
  }
  return null
}

export default defineRetryPlugin({
  id: "modelcomp.provider-invalid-request-retry",
  matches: PATTERNS,
  scan: scanProse,
  delayMs: DELAY,
  settleMs: SETTLE,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Invalid-request reject ${MAX_CONSECUTIVE}x in a row, brake ON (looks like a real refusal). Rephrase or start a new session.`,
  announce: (trigger, attempt) =>
    `invalid-request reject (${trigger}), saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
