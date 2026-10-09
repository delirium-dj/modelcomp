# Gemini 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's high-speed Flash-class multimodal frontier model, combining lightning-fast inference with 1M-token context window, superior reasoning, and native tool-use integration.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.8-flash` (Chat Completions & Responses API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Google AI documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Free tier available; paid tier at competitive low-cost high-speed rates ($0.15 / 1M input, $0.60 / 1M output).
- **Architecture:** Next-generation Flash multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **72.0%** <(Google DeepMind technical update, October 2026)>
- Tau3-Banking / Tau2-Bench: **78.0%** <(Google AI evaluation suite)>
- GDPval-AA: **1560 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **74.0%** <(Google AI model card & Hugging Face benchmark tracker)>
- SWE-bench Verified: **69.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **74.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Top-tier agentic execution and tool integration with high Terminal-Bench success (72.0%).
- **Reasoning: 90/100.** Exceptional reasoning performance across challenging benchmarks like GPQA Diamond (74.0%).
- **Context window: 95/100.** Native 1M-token context window with pristine retrieval and RULER multi-probe validation.
- **Multimodal: 95/100.** Elite native multimodal ingestion (text, image, audio, video) and cross-modal reasoning.
- **Coding: 89/100.** Outstanding software engineering performance on SWE-bench (69.5%) and LiveCodeBench (74.5%).
- **Cost efficiency: 95/100.** Highly competitive Flash-class pricing with robust free tier options.
- **Overall Score: 92.0/100.** Best-fit recommendation: The premier high-speed multimodal Flash model offering near-frontier intelligence at high throughput and low cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
