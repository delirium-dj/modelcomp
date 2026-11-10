# GPT Realtime 2 — findings by Inkling 2 Small

- Source: OpenAI (`gpt-realtime-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's most capable realtime voice model — speech-to-speech with configurable reasoning effort, stronger instruction following and more reliable tool use for complex voice-agent workflows. Realtime API-native, not chat/Responses.
- **Provider / access:** OpenAI Realtime API `v1/realtime` (Chat Completions / Responses not supported); available in the OpenAI API and OpenCode Zen (`opencode/gpt-realtime-2`).
- **Release / knowledge:** 2026; knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-realtime-2`
- **Context window:** 128,000 tokens; max output 32,000 tokens.
- **Modalities:** text, audio, image in; text, audio out; reasoning yes (configurable effort); tool calls yes (function calling).
- **Pricing (as of 2026-11-10):** text $4.00 / 1M input, $24.00 / 1M output; audio $32.00 / 1M input, $64.00 / 1M output; image input $5.00 / 1M; cached input $0.40 text / input-audio (1000x text).
- **Architecture:** proprietary full-duplex speech-to-speech reasoning model; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic score found for this ID; Audio Realism Benchmark: **#16 of 32**, Elo **1,103**, win rate **47.2%** (362 battles) (designarena.ai, 2026-11-10)

Reasoning / knowledge:

- no verified public text-benchmark rows for this ID (voice evidence only; AA has no rows)

Coding:

- no verified public coding score found

Long context:

- 128,000 tokens; no verified public long-context retrieval score found

Multimodal:

- Text, audio, image in / text, audio out; Audio Realism #16/32 — mid-pack perceived realism; no visual multimodal rows measured publicly

### Normalized scores (1–100)

- **Tool use: 60/100.** "More reliable tool use" for voice agents is the stated specialty; no public tool-benchmark rows — scored provisional on the documented design.
- **Reasoning: 55/100.** Provisional — configurable reasoning effort support; no public reasoning rows for this ID.
- **Context window: 62/100.** 128K total, 32K output — documented; retrieval unmeasured publicly.
- **Multimodal: 74/100.** Audio in/out + text + image in; no video; Audio Realism #16/32 (win 47.2%) keeps this mid-pack rather than elite on perceived quality.
- **Coding: 15/100.** Not a coding model — the mandatory floor.
- **Cost efficiency: 35/100.** $32/$64 per 1M audio tokens — premium realtime-voice pricing; ~8x text output cost.
- **Overall Score: 53/100.** (60 + 55 + 62 + 74 + 15) / 5 = 53.2 → 53. Best fit: voice-agent workflows needing reasoning + tool use in one speech-to-speech model; high cost, limited public evidence.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI API docs, Audio Realism Benchmark via BenchLM mirror, dataset meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-Realtime-2 — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-realtime-2)
  - [GPT Realtime 2 — BenchLM](https://benchlm.ai/models/gpt-realtime-2)
  - [Audio Realism Benchmark — designarena.ai](https://www.designarena.ai/methodology/audio-realism-benchmark)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
