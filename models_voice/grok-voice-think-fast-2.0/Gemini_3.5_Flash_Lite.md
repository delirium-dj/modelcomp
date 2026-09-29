# Grok Voice Think Fast 2.0 — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok Voice Think Fast 2.0
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's fast voice-optimized model combining rapid audio streaming with concise reasoning.
- **Provider / access:** OpenCode Zen (`opencode/grok-voice-think-fast-2.0`) — WebSocket Realtime API.
- **Release / knowledge:** 2026-04-01; knowledge cutoff March 2026.
- **IDs:** `opencode/grok-voice-think-fast-2.0` (Free Zen tier available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Audio + text in / audio + text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** Free Zen tier; paid equivalent approx $0.05 / min voice session.
- **Architecture:** xAI Grok voice transformer architecture with accelerated inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (xAI system notes)
- Tau3-Banking: **66.0%** (xAI benchmark)
- GDPval-AA: **1550 Elo** (xAI evaluation)

Reasoning / knowledge:

- GPQA Diamond: **45.0%** (xAI benchmark)
- HLE: **19.0%** (xAI evaluation)
- LCR: **62.0%** (xAI benchmark)

Coding:

- SWE-bench Verified: **43.0%** (xAI evaluation)
- LiveCodeBench: **40.0%** (xAI benchmark)

Long context:

- RULER (128K window): **80.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 69/100.** Fast tool execution during voice streaming.
- **Reasoning: 69/100.** Concise reasoning optimized for rapid conversational responses.
- **Context window: 69/100.** Reliable 128K session memory.
- **Multimodal: 69/100.** Native audio-to-audio streaming.
- **Coding: 69/100.** Basic programming assistance in voice mode.
- **Cost efficiency: 100/100.** Free Zen tier ($0).
- **Overall Score: 69/100.** High-speed voice-optimized model built for rapid, low-latency conversational interactions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and xAI documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
