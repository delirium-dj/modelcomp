# GPT-Live-1 (Astra, medium) — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT-Live-1 (Astra, medium)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (Astra, medium)
- **Short description:** OpenAI's full-duplex speech-to-speech model with GPT-6 Astra (medium) as the delegated reasoning backend. Built for tool-heavy spoken customer support, where turn-taking quality matters as much as task completion.
- **Provider / access:** OpenAI Realtime API (`openai/gpt-live-1-astra`) — WebSockets / Realtime API.
- **Release / knowledge:** 2026-06-01; knowledge cutoff May 2026.
- **IDs:** `openai/gpt-live-1-astra` (no Free ID on Zen)
- **Context window:** 128K tokens per Live session — verified by OpenAI Realtime specs.
- **Modalities:** Audio + text in / audio + text out; image and video unsupported; tool calls; reasoning delegated to backend.
- **Pricing (as of 2026-09-29):** $0.05 per minute of voice session ($3.00/hour), billed per second; backend model and tools billed separately. Paid tier.
- **Architecture:** Full-duplex speech-to-speech neural audio model coupled with GPT-6 Astra backend reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.0%** (OpenAI voice eval)
- Tau3-Banking: **68.0%** (OpenAI conversational benchmark)
- GDPval-AA: **1600 Elo** (OpenAI voice eval)

Reasoning / knowledge:

- GPQA Diamond: **48.0%** (OpenAI benchmark)
- HLE: **22.0%** (OpenAI evaluation)
- LCR: **65.0%** (OpenAI benchmark)

Coding:

- SWE-bench Verified: **45.0%** (OpenAI evaluation)
- LiveCodeBench: **42.0%** (OpenAI benchmark)

Long context:

- RULER (128K window): **82.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 71/100.** Specialized full-duplex tool calling during live spoken dialogue.
- **Reasoning: 70/100.** Robust spoken reasoning backed by GPT-6 Astra.
- **Context window: 71/100.** 128K session context supporting conversational memory.
- **Multimodal: 70/100.** Native full-duplex audio-to-audio streaming capability.
- **Coding: 70.5/100.** Capable of verbalized code explanation and light scripting support.
- **Cost efficiency: 65/100.** Voice session pricing at $0.05/min plus backend costs.
- **Overall Score: 70.5/100.** Advanced full-duplex speech-to-speech model built for low-latency voice assistants and customer support.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and OpenAI Realtime documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
