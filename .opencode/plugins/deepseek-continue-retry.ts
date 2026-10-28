// V2 port of `.opencode/plugins/v1/deepseek-continue-retry.ts` (OpenCode 2.x).
//
// DeepSeek rejects an assembled payload with a bare "Invalid input" and stops
// the turn. Re-sending the same message would fail identically, so the V1
// plugin waited 7s and sent a fresh "continue" instead.
//
// V2 note: the model filter now reads the session's model
// (`ctx.session.get`) because `session.error` no longer carries a model field.
// A session whose model cannot be read is treated as "not DeepSeek" and left
// alone, matching the V1 behaviour of staying silent when unsure.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const MATCH = "invalid input"
const MODEL_FILTER = "deepseek"
const DELAY = 7_000
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.deepseek-continue-retry",
  matches: [MATCH],
  modelFilter: MODEL_FILTER,
  delayMs: DELAY,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `DeepSeek failed ${MAX_CONSECUTIVE}x in a row, brake ON. Try /compact or a new session.`,
  announce: (_trigger, attempt) =>
    `DeepSeek "invalid input", saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
