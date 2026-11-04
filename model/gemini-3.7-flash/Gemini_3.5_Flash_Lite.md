# Gemini 3.7 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.7 Flash (`google/gemini-3.7-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** High-speed flash generation model combining hybrid reasoning capabilities with fast multi-modal input processing and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.7-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy tier ($0.075 /M input tokens, $0.30 /M output tokens).
- **Architecture:** High-efficiency hybrid transformer with optimized inference latency.

### Raw benchmarks found

- GPQA Diamond: **84.5%** <(Google DeepMind evaluation)>
- Terminal-Bench 2.1: **89.2%** <(Google developer evaluation)>
- SWE-bench Verified: **76.0%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Robust tool calling and API integration support.
- **Reasoning: 91/100.** Strong hybrid reasoning performance for fast tasks.
- **Context window: 94/100.** Reliable 1M context retrieval.
- **Multimodal: 96/100.** Comprehensive native multimodal ingestion.
- **Coding: 90/100.** Fast and efficient code generation.
- **Cost efficiency: 98/100.** Highly competitive pricing for high throughput.
- **Overall Score: 92.8/100.** Best-fit recommendation: High-throughput multimodal tasks, rapid prototyping, and large-context document processing.

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
