// V2 port of `.opencode/plugins/v1/api-connect-retry.ts` (OpenCode 2.x).
//
// Same job: a connection/DNS break killed the request before the model could
// answer, so wait, then send "please continue" and let it resume from history.
// Matched fragments, delay and the 30-nudge brake are unchanged; only the
// plumbing moved to the V2 plugin API (see `../lib/plugin-retry/engine.ts`).

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

// Any of these (lowercased) means "the endpoint was unreachable" - transient.
const MATCHES = [
  "getaddrinfo",
  "enotfound",
  "econnrefused",
  "econnreset",
  "econnaborted",
  "enetworkunreachable",
  "ehostunreach",
  "etimedout",
  "response headers timed out",
  "socket hang up",
  "fetch failed",
  "network request failed",
  "network socket disconnected",
  "cannot connect",
]

const DELAY = 10_000
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.api-connect-retry",
  matches: MATCHES,
  delayMs: DELAY,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "please continue",
  brakeMessage: `API unreachable ${MAX_CONSECUTIVE}x in a row, brake ON. Check network/provider, then /compact or a new session.`,
  announce: (trigger, attempt, max) =>
    `${trigger}: network/DNS failure, saying "please continue" in ${DELAY / 1000}s (${attempt}/${Number.isFinite(max) ? max : "inf"})`,
})
