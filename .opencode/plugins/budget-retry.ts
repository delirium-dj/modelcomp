// V2 port of `.opencode/plugins/v1/budget-retry.ts` (OpenCode 2.x).
//
// AgentRouter drains a pool and rejects every call until it refills, so the V1
// plugin waited 55s and then re-sent the last USER message (not "continue", so
// the model retries the real task instead of answering a nudge).
//
// V2 note: the prompt API takes text, so the re-send keeps the last user text
// but not file attachments. There is also no toast API in V2 - the retry is
// logged to the server console instead.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const MATCH = "budget pool quota has been exhausted"
const DELAY = 55_000

export default defineRetryPlugin({
  id: "modelcomp.budget-retry",
  matches: [MATCH],
  delayMs: DELAY,
  // No brake in V1 either: a pool refill can take hours.
  resendLastUser: true,
  continueText: "", // unused: resendLastUser takes over
  brakeMessage: "unreachable: this plugin never brakes",
  announce: (trigger, attempt) => `${MATCH}: pool exhausted, re-sending the last message in ${DELAY / 1000}s (${attempt})`,
})
