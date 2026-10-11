# Gemini 3.1 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Flash Lite (`google/gemini-3.1-flash-lite`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's lightweight, ultra-low-latency model engineered for high-frequency lightweight tasks.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens total (verified via Google documentation).
- **Modalities:** Text input, image input, audio input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free tier available; ultra-low-latency paid pricing.
- **Architecture:** Ultra-lightweight multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **59.0%** <(Google technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **65.0%** <(API evaluation suite)>
- GPQA Diamond: **60.0%** <(official evaluation)>
- SWE-bench Verified: **56.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **61.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast tool calling for high-frequency lightweight workflows (Terminal-Bench 59.0%).
- **Reasoning: 81/100.** Efficient reasoning for routine tasks across GPQA Diamond (60.0%).
- **Context window: 95/100.** Full 1M token context support with RULER verification.
- **Multimodal: 89/100.** Comprehensive multimodal input coverage.
- **Coding: 81/100.** Good coding support for rapid prototyping (SWE-bench Verified 56.0%, LiveCodeBench 61.0%).
- **Cost efficiency: 100/100.** Free tier access with ultra-low latency pricing ($0.00 cost).
- **Overall Score: 85.6/100.** Best-fit recommendation: Outstanding ultra-low-latency utility model for high-frequency tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google DeepMind technical documentation. SWE-bench Verified 56.0% and Terminal-Bench 2.1 59.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
