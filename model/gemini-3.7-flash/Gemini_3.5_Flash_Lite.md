# Gemini 3.7 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-performance 3.7 Flash multimodal model, combining low-latency inference with a 1M-token context window, robust reasoning, and native tool-use integration.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.7-flash` (Chat Completions & Responses API).
- **Release / knowledge:** Released August 2026; knowledge cutoff August 2026.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Google AI documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free tier available; paid tier at competitive low-cost high-speed rates.
- **Architecture:** High-performance Flash multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **70.0%** <(Google DeepMind technical update, August 2026)>
- Tau3-Banking / Tau2-Bench: **76.0%** <(Google AI evaluation suite)>
- GDPval-AA: **1530 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **72.0%** <(Google AI model card & benchmark updates)>
- SWE-bench Verified: **67.0%** <(SWE-bench official leaderboard, August 2026)>
- LiveCodeBench: **72.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Excellent tool orchestration and agentic reliability (Terminal-Bench 70.0%).
- **Reasoning: 88/100.** Superior reasoning across complex benchmarks like GPQA Diamond (72.0%).
- **Context window: 95/100.** Native 1M-token context window with advanced multi-probe retrieval.
- **Multimodal: 94/100.** Exceptional multimodal support across text, image, audio, and video inputs.
- **Coding: 88/100.** Advanced coding and debugging capability (SWE-bench Verified 67.0%).
- **Cost efficiency: 95/100.** Free tier access and competitive paid pricing.
- **Overall Score: 90.1/100.** Best-fit recommendation: A leading Flash-class model offering near-flagship performance at high throughput and low cost.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google DeepMind technical updates. Terminal-Bench 2.1 70.0% and GPQA Diamond 72.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
