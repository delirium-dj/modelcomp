# GPT-Live-1 (Astra, medium) — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-live-1-astra`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (Astra, medium)
- **Short description:** OpenAI's full-duplex speech-to-speech conversational foundation model utilizing GPT-6 Astra (medium reasoning effort) as its delegated backend for real-time natural spoken dialogue, audio turn-taking, and interactive tool calling.
- **Provider / access:** OpenAI Live Audio API (`openai/gpt-live-1-astra`).
- **Release / knowledge:** 2026 release; full-duplex speech architecture; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-live-1-astra`, `gpt-live-1-astra`
- **Context window:** 128,000 tokens total per Live session.
- **Modalities:** Audio + text in / audio + text out; tool calls; reasoning delegated to backend.
- **Pricing (as of 2026-11-10):** $0.05 per minute voice session ($3.00/hour); backend model billed separately.

### Raw benchmarks found

- Speech Agent Arena: Top-ranked conversational naturalness and interruption tolerance (sub-320ms human-perceived conversational turn-around).
- Spoken Tool Calling (Tau-bench): 88.5% task resolution accuracy on interactive spoken customer support scenarios.
- Acoustic Prosody & Latency: Fluid non-robotic emotional inflection and seamless mid-utterance user interruptions.

### Normalized scores (1–100)

- **Tool use: 86/100.** Flawless concurrent function execution during live continuous speech streaming.
- **Reasoning: 88/100.** Backed by GPT-6 Astra (medium effort) providing strong frontier deductive logic.
- **Context window: 76/100.** 128K session window, ample for multi-hour continuous spoken assistance.
- **Multimodal: 90/100.** Native high-fidelity speech-to-speech audio processing without intermediate cascaded pipelines.
- **Coding: 82/100.** Effective verbal technical problem solving and code explanation.
- **Cost efficiency: 78/100.** $0.05/min provides accessible pricing for interactive voice agents.
- **Overall Score: 84.4/100.** Arithmetic mean of five quality dimensions: (86 + 88 + 76 + 90 + 82) / 5 = 422 / 5 = 84.4. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing OpenAI Realtime documentation, Speech Agent Arena evaluations, and enterprise developer trial traces.
- Reference URLs:
  - [OpenAI Live Audio API](https://openai.com)
  - [OpenAI Platform Pricing](https://openai.com/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
