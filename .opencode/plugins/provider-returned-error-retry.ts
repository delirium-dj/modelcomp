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
// Three arrival shapes are handled by the shared engine:
//   1. the text rides a `session.error` payload (the common case),
//   2. SILENTLY: it lands in the transcript as a normal assistant message and
//      the turn ends with `session.idle`,
//   3. EMBEDDED: it sits in the last assistant message while the error payload
//      carries generic transport noise.
// Recovery is the same for all: wait DELAY, then send "continue".

import { defineRetryPlugin } from "../lib/plugin-retry/engine"
import { matchesAny } from "../lib/plugin-retry/match"

const PATTERNS = [
  "provider returned error",
  "provider returned an error",
  "upstream provider returned an error",
  "upstream error from phala",
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
