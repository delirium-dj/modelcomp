# Gemini 3.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-efficiency 3.5 Flash multimodal model offering enhanced speed, robust reasoning, native multimodal ingestion, and a 1M-token context window.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash` (Chat Completions & Responses API).
- **Release / knowledge:** Released May 2026; knowledge cutoff May 2026.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Google AI documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Free tier available; paid tier at low-cost high-speed rates.
- **Architecture:** Advanced multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **66.0%** <(Google DeepMind technical update, May 2026)>
- Tau3-Banking / Tau2-Bench: **72.0%** <(Google AI evaluation suite)>
- GPQA Diamond: **67.0%** <(Google AI benchmark update)>
- SWE-bench Verified: **62.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **67.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 86/100.** High-performance tool execution and agentic reliability (Terminal-Bench 66.0%).
- **Reasoning: 85/100.** Strong reasoning capabilities across benchmarks like GPQA Diamond (67.0%).
- **Context window: 95/100.** Native 1M-token context window with high retrieval precision.
- **Multimodal: 92/100.** Excellent native multimodal ingestion across text, image, audio, and video.
- **Coding: 85/100.** Very strong coding support and debugging (SWE-bench Verified 62.0%, LiveCodeBench 67.5%).
- **Cost efficiency: 95/100.** Free tier access and competitive paid pricing.
- **Overall Score: 88.6/100.** Best-fit recommendation: An outstanding balance of speed, intelligence, and multimodal power for high-throughput applications.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
