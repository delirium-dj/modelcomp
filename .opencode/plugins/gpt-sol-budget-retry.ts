// V2 port of `.opencode/plugins/v1/gpt-sol-budget-retry.ts` (OpenCode 2.x).
//
// The GPT-5.6 Sol pool answers with a Chinese "no available channel" (无可用渠道)
// while the request is routed to an empty channel group. The V1 plugin waited
// 83.5s - landing just after the built-in retry storm gives up - then re-sent
// the last user message. 259 tries ~= 6 hours of polling.
//
// Two guards kept from V1: the stable Chinese fragment AND the "gpt" + "sol"
// words, so the Claude pool (budget-retry.ts) is never stolen.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const MATCH = "无可用渠道"
const WANT_GPT = "gpt"
const WANT_SOL = "sol"
const DELAY = 83_500
const MAX_CONSECUTIVE = 259

export default defineRetryPlugin({
  id: "modelcomp.gpt-sol-budget-retry",
  matches: [MATCH],
  requireAll: [WANT_GPT, WANT_SOL],
  delayMs: DELAY,
  maxConsecutive: MAX_CONSECUTIVE,
  resendLastUser: true,
  continueText: "", // unused: resendLastUser takes over
  brakeMessage: `GPT Sol pool empty ${MAX_CONSECUTIVE}x in a row (~6h), brake ON. Try later or a new session.`,
  announce: (_trigger, attempt) =>
    `GPT Sol pool empty, retrying in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
