# GPT Realtime 2 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT Realtime 2
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2
- **Short description:** OpenAI's second-generation real-time voice and audio streaming model with reduced latency and improved conversational flow.
- **Provider / access:** OpenCode Zen (`opencode/gpt-realtime-2`) — Realtime WebSocket API.
- **Release / knowledge:** 2026-03-01; knowledge cutoff February 2026.
- **IDs:** `opencode/gpt-realtime-2` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Audio + text in / audio + text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.06 / min voice session.
- **Architecture:** OpenAI real-time audio transformer streaming architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (OpenAI technical notes)
- Tau3-Banking: **67.0%** (OpenAI benchmark)
- GDPval-AA: **1570 Elo** (OpenAI evaluation)

Reasoning / knowledge:

- GPQA Diamond: **46.5%** (OpenAI benchmark)
- HLE: **20.0%** (OpenAI evaluation)
- LCR: **63.0%** (OpenAI benchmark)

Coding:

- SWE-bench Verified: **44.0%** (OpenAI evaluation)
- LiveCodeBench: **41.0%** (OpenAI benchmark)

Long context:

- RULER (128K window): **81.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 70/100.** Real-time tool execution during voice streaming.
- **Reasoning: 70/100.** Solid conversational reasoning for spoken interactions.
- **Context window: 69/100.** 128K session context window.
- **Multimodal: 69/100.** Native audio-to-audio streaming capabilities.
- **Coding: 70/100.** Basic coding assistance during voice sessions.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 69.6/100.** Highly responsive real-time voice model optimized for low-latency conversational agent workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and OpenAI documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
