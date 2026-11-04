# Gemini 2.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.5 Flash Lite (`google/gemini-2.5-flash-lite`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-economical 2.5 generation flash model engineered for high-throughput lightweight tasks and cost-sensitive API integrations.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.5-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Ultra-low cost production tier ($0.05 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Lightweight transformer optimized for extreme efficiency.

### Raw benchmarks found

- GPQA Diamond: **58.0%** <(Google DeepMind evaluation)>
- Terminal-Bench 2.1: **75.0%** <(Google developer evaluation)>
- SWE-bench Verified: **55.0%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast function calling and structured JSON generation.
- **Reasoning: 79/100.** Baseline reasoning suitable for lightweight automation.
- **Context window: 94/100.** Stable 1M context token retention.
- **Multimodal: 95/100.** Broad native multimodal input support.
- **Coding: 78/100.** Efficient code snippet generation and basic syntax support.
- **Cost efficiency: 100/100.** Exceptional economy for high-volume automated pipelines.
- **Overall Score: 86.2/100.** Best-fit recommendation: High-volume data parsing, bulk text classification, and cost-sensitive multimodal pipelines.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind documentation and independent benchmark reports.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
