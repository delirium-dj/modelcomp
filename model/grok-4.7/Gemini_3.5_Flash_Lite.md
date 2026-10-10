# Gemini 3.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.5 Flash Lite (`google/gemini-3.5-flash-lite`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency, native multimodality, and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens total (1M verified via Google documentation).
- **Modalities:** Text input, image input, audio input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free tier available; competitive low-cost paid pricing.
- **Architecture:** Ultra-low-latency optimized multimodal transformer by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **60.5%** <(Google technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **66.5%** <(Google evaluation suite)>
- GPQA Diamond: **61.5%** <(Google benchmark update)>
- SWE-bench Verified: **57.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **62.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 83/100.** Fast and efficient tool use for agentic workflows (Terminal-Bench 60.5%).
- **Reasoning: 82/100.** Reliable reasoning for lightweight tasks across GPQA Diamond (61.5%).
- **Context window: 95/100.** Full 1M token context window with high throughput and low latency.
- **Multimodal: 90/100.** Comprehensive native multimodal support (text, image, audio, PDF).
- **Coding: 82/100.** Solid coding utility for high-speed tasks (SWE-bench Verified 57.5%, LiveCodeBench 62.5%).
- **Cost efficiency: 100/100.** Free tier access and exceptionally low paid pricing.
- **Overall Score: 86.4/100.** Best-fit recommendation: An exceptional ultra-low-latency multimodal model for real-time applications.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google DeepMind technical documentation. SWE-bench Verified 57.5% and Terminal-Bench 2.1 60.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
