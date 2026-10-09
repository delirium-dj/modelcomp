# Gemini 3.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's advanced 3.6 Flash model with improved reasoning, native multimodality, high speed, and a 1M-token context window.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.6-flash` (Chat Completions & Responses API).
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Google AI documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Free tier available; paid tier at low-cost high-speed rates.
- **Architecture:** Advanced multimodal transformer architecture with improved reasoning by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **68.0%** <(Google DeepMind technical update, July 2026)>
- Tau3-Banking / Tau2-Bench: **74.0%** <(Google AI evaluation suite)>
- GPQA Diamond: **69.5%** <(Google AI benchmark update)>
- SWE-bench Verified: **64.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **70.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 87/100.** Highly robust tool calling and multi-step agent execution (Terminal-Bench 68.0%).
- **Reasoning: 87/100.** Enhanced reasoning capabilities across complex benchmarks like GPQA Diamond (69.5%).
- **Context window: 95/100.** Native 1M-token context window with superior retrieval precision.
- **Multimodal: 93/100.** Top-tier native multimodal capabilities across text, image, audio, and video.
- **Coding: 87/100.** Strong coding and software engineering support (SWE-bench Verified 64.5%, LiveCodeBench 70.0%).
- **Cost efficiency: 95/100.** Free tier access and competitive paid pricing.
- **Overall Score: 89.8/100.** Best-fit recommendation: An outstanding mid-tier model with near-flagship intelligence and exceptional multimodal power.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
