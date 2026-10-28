// V2 port of `.opencode/plugins/v1/provider-returned-error-retry.ts`
// (OpenCode 2.x / Desktop 2.x).
//
// What we catch: generic provider-side failure wrappers. Real drops seen here:
//   "Provider returned error"
//   "Provider returned an error"
//   "[DeepSeek] provider returned an error"
//   "Upstream error from Phala: The upstream provider returned an error"
// There is no vendor-specific tail to lean on - the sentence IS the wrapper -
// so only the stable full sentences below are matched. This is USUALLY a
// transient provider-side hiccup: a plain "continue" reprocesses the last
// request and the session goes straight back to work.
//
// Any model/provider can emit the wrapper, so the plugin is deliberately
// global (no model filter).
//
// NOTE on matching breadth: the whole sentence is required, never the bare
// prefix "provider returned". Research answers in this project legitimately
// discuss provider behaviour, and a prefix match on the transcript scan would
// kick off useless retries mid-answer. If a NEW suffix variant shows up, add
// it to PATTERNS - that list is the intended extension point.
//
// The Phala wrapper is matched by its TAIL, not by the "Upstream error from
// Phala:" prefix. That prefix also precedes errors another plugin owns (e.g.
// "The request was rejected as invalid" -> provider-invalid-request-retry), and
// matching it here would queue two "continue" prompts for one failure.
//
// Three arrival shapes are handled by the shared engine:
//   1. the text rides a provider failure event (`session.step.failed` /
//      `session.execution.failed` in 2.2, `session.error` in older builds),
//   2. SILENTLY: it lands in the transcript as a normal assistant message and
//      the turn ends with `session.idle`,
//   3. EMBEDDED: it sits in the last assistant message while the error payload
//      carries generic transport noise. 2.2 stores the text on the message's
//      structured `error` field instead of a text part, which the engine reads.
// Recovery is the same for all: wait DELAY, then send "continue".

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

const PATTERNS = [
  "provider returned error",
  "provider returned an error",
  "upstream provider returned an error",
]

const DELAY = 10_000
const SETTLE = 500
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.provider-returned-error-retry",
  matches: PATTERNS,
  scan: (text) => (matchesAny(text, PATTERNS) ? "provider returned error" : null),
  delayMs: DELAY,
  settleMs: SETTLE,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Provider-returned-error ${MAX_CONSECUTIVE}x in a row, brake ON (looks like a real outage). Check the provider status, then /compact or a new session.`,
  announce: (trigger, attempt) =>
    `provider returned error (${trigger}), saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
