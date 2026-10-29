// V2-only retry plugin (no V1 original; the suite is Desktop 2.x now).
//
// What we catch: a provider streamed an OpenAI Chat Completions tool-call
// delta without the `id`/`name` fields. The AI SDK throws:
//   AI.Error: OpenAI Chat tool call delta is missing id or name
// (seen 2026-10-28 20:16 and 2026-10-29 11:51 / 21:23 / 21:25 UTC). The
// provider assembles the tool call across chunks and the first chunk is
// sometimes malformed; a plain "continue" re-sends the last user turn, the
// model streams the call again, and the session resumes.
//
// "OpenAI Chat" is the SDK protocol name, not the vendor: any
// OpenAI-compatible endpoint can emit this chunk, so the plugin is global
// (no model filter).
//
// Payload-only on purpose: this is a THROWN streaming error, not model prose.
// A research answer in this repo may quote the sentence while documenting
// provider failures, so there is NO transcript scanner; the engine still reads
// the structured `message.error` on the terminal idle entry, which covers the
// silent case without inspecting assistant text.
//
// A provider that keeps sending malformed chunks re-fails every time, so the
// 30-nudge brake caps it.

import { defineRetryPlugin } from "../lib/plugin-retry/engine"

const PATTERNS = [
  "tool call delta is missing id or name", // exact SDK sentence
  "tool call delta is missing", // survives an SDK rewording of the tail
]

const DELAY = 10_000
const SETTLE = 500
const MAX_CONSECUTIVE = 30

export default defineRetryPlugin({
  id: "modelcomp.provider-tool-delta-retry",
  matches: PATTERNS,
  delayMs: DELAY,
  settleMs: SETTLE,
  maxConsecutive: MAX_CONSECUTIVE,
  continueText: "continue",
  brakeMessage: `Malformed tool-call delta ${MAX_CONSECUTIVE}x in a row, brake ON. The provider keeps sending broken streaming chunks; switch provider/model or start a new session.`,
  announce: (trigger, attempt) =>
    `malformed tool-call delta (${trigger}), saying "continue" in ${DELAY / 1000}s (${attempt}/${MAX_CONSECUTIVE})`,
})
