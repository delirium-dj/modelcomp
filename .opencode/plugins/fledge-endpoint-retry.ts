// V2 port of `.opencode/plugins/v1/fledge-endpoint-retry.ts` (OpenCode 2.x).
//
// "Endpoint is unavailable" is a provider-side outage, so wait 10s and send
// "continue". Deliberately unfiltered by model: any provider can say it.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const MATCH = "endpoint is unavailable"
const DELAY = 10_000
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.fledge-endpoint-retry",
  matches: [MATCH],
  delayMs: DELAY,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Endpoint unavailable ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`,
  announce: (_trigger, attempt) =>
    `endpoint unavailable, saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
