# GPT Realtime 2.1 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT Realtime 2.1
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt Realtime 2.1
- **Short description:** OpenAI's updated real-time voice model with enhanced conversational cadence and reduced latency.
- **Provider / access:** OpenCode Zen (`opencode/gpt-realtime-2.1`) — WebSocket Realtime API.
- **Release / knowledge:** 2026-05-01; knowledge cutoff April 2026.
- **IDs:** `opencode/gpt-realtime-2.1` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Audio + text in / audio + text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.06 / min voice session.
- **Architecture:** OpenAI real-time audio streaming transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.0%** (OpenAI technical notes)
- Tau3-Banking: **68.0%** (OpenAI benchmark)
- GDPval-AA: **1580 Elo** (OpenAI evaluation)

Reasoning / knowledge:

- GPQA Diamond: **47.0%** (OpenAI benchmark)
- HLE: **21.0%** (OpenAI evaluation)
- LCR: **64.0%** (OpenAI benchmark)

Coding:

- SWE-bench Verified: **45.0%** (OpenAI evaluation)
- LiveCodeBench: **42.0%** (OpenAI benchmark)

Long context:

- RULER (128K window): **82.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 71/100.** Real-time tool execution during voice streaming.
- **Reasoning: 70/100.** Conversational reasoning for spoken interactions.
- **Context window: 70/100.** 128K session context window.
- **Multimodal: 70/100.** Native audio-to-audio streaming capabilities.
- **Coding: 70.5/100.** Basic coding assistance during voice sessions.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 70.3/100.** Updated real-time voice model offering improved streaming cadence and low latency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and OpenAI documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
