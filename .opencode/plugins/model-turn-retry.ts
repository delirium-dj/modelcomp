// V2 port of `.opencode/plugins/v1/model-turn-retry.ts` (OpenCode 2.x).
//
// The provider rejects a request whose transcript ends on a model turn:
//   "Requests ending with a model turn are not supported."
// Retrying the same payload fails again, so the fix is to make the last turn a
// user turn - i.e. send "please continue" and let the agent resume from history.
// This is the recovery that AGENTS.md directive #1 depends on.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const MATCH = "requests ending with a model turn"
const DELAY = 7_000
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.model-turn-retry",
  matches: [MATCH],
  delayMs: DELAY,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "please continue",
  brakeMessage: `Model-turn reject ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`,
  announce: (_trigger, attempt) =>
    `model-turn reject, saying "please continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
