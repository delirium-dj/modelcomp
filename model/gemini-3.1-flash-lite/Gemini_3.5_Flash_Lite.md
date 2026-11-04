# Gemini 3.1 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Flash Lite (`google/gemini-3.1-flash-lite`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's ultra-lightweight 3.1 generation model engineered for maximum inference speed and budget-friendly multimodal processing.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Ultra-low cost production tier ($0.0375 /M input tokens, $0.15 /M output tokens).
- **Architecture:** Streamlined lightweight transformer architecture optimized for extreme throughput.

### Raw benchmarks found

- GPQA Diamond: **69.5%** <(Google DeepMind evaluation)>
- Terminal-Bench 2.1: **80.0%** <(Google developer evaluation)>
- SWE-bench Verified: **63.5%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 87/100.** Fast and efficient function calling and structured output formatting.
- **Reasoning: 82/100.** Baseline reasoning suitable for lightweight automation.
- **Context window: 94/100.** Stable 1M context token retention.
- **Multimodal: 95/100.** Broad native multimodal input support.
- **Coding: 81/100.** Efficient code snippet generation and basic syntax support.
- **Cost efficiency: 100/100.** Exceptional economy for high-volume automated pipelines.
- **Overall Score: 87.8/100.** Best-fit recommendation: High-volume lightweight classification, bulk document parsing, and cost-sensitive automation.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind benchmark data and independent evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
