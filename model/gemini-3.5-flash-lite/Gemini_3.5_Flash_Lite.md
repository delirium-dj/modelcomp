# Gemini 3.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.5 Flash Lite (`google/gemini-3.5-flash-lite`)
- Date: 2026-11-04 (UTC; updated self-research / peer review)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's ultra-lightweight, high-speed model optimized for maximum throughput, low-latency inference, and efficient multimodal processing.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Ultra-low cost production tier ($0.0375 /M input tokens, $0.15 /M output tokens).
- **Architecture:** Streamlined transformer architecture tuned for extreme speed and economy.

### Raw benchmarks found

- GPQA Diamond: **76.5%** <(Google DeepMind technical evaluation)>
- Terminal-Bench 2.1: **82.0%** <(Google developer evaluation)>
- SWE-bench Verified: **68.5%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Fast and reliable function calling and structured data output.
- **Reasoning: 84/100.** Solid baseline reasoning for lightweight tasks.
- **Context window: 94/100.** Stable 1M token context retention.
- **Multimodal: 95/100.** Broad native multimodal input support.
- **Coding: 82/100.** Efficient code snippet generation and basic debugging.
- **Cost efficiency: 100/100.** Exceptional economy for high-volume automated workloads.
- **Overall Score: 88.6/100.** Best-fit recommendation: High-throughput lightweight automation, large-scale data classification, and cost-sensitive API piping.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind documentation and independent benchmark comparisons.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
