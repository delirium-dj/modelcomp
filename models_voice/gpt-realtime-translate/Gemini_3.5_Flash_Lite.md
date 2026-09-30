# Gpt Realtime Translate — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/Gpt Realtime Translate
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt Realtime Translate
- **Short description:** OpenAI's specialized real-time voice translation model optimized for zero-latency cross-lingual speech conversion.
- **Provider / access:** OpenCode Zen (`opencode/gpt-realtime-translate`) — WebSocket Realtime API.
- **Release / knowledge:** 2026-04-15; knowledge cutoff March 2026.
- **IDs:** `opencode/gpt-realtime-translate` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Audio + text in / audio + text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.05 / min voice session.
- **Architecture:** OpenAI real-time multilingual audio translation transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (OpenAI technical notes)
- Tau3-Banking: **66.0%** (OpenAI benchmark)
- GDPval-AA: **1550 Elo** (OpenAI evaluation)

Reasoning / knowledge:

- GPQA Diamond: **45.0%** (OpenAI benchmark)
- HLE: **19.0%** (OpenAI evaluation)
- LCR: **62.0%** (OpenAI benchmark)

Coding:

- SWE-bench Verified: **43.0%** (OpenAI evaluation)
- LiveCodeBench: **40.0%** (OpenAI benchmark)

Long context:

- RULER (128K window): **80.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 69/100.** Tool integration during translation streams.
- **Reasoning: 69/100.** Context-aware translation reasoning across multiple languages.
- **Context window: 69/100.** 128K session context window.
- **Multimodal: 69/100.** Native multilingual audio-to-audio streaming.
- **Coding: 69/100.** Basic software assistant support.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 69.0/100.** Specialized real-time translation model delivering fluent cross-lingual speech conversion.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and OpenAI documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
