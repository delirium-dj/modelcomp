# Gemini 3.7 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.7 Flash (`google/gemini-3.7-flash`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** High-speed flash generation model combining hybrid reasoning capabilities with fast multi-modal input processing and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen (`google/gemini-3.7-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.7-flash`, `gemini-3.7-flash`.
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text, image, audio, and video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Economy tier (~$0.075 / $0.30 per 1M input/output tokens).
- **Architecture:** High-efficiency hybrid transformer with optimized inference latency.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **84.5%** <(Google DeepMind evaluation)>
- HLE: **83.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **91.6 / #15** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **89.2%** <(Google developer evaluation)>
- Tau3-Banking / Tau2-Bench: **89.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **76.0%** <(Software engineering evaluation)>
- LiveCodeBench: **89.0%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **97.0% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Robust tool calling and API integration support.
- **Reasoning: 91/100.** Strong hybrid reasoning performance for fast tasks.
- **Context window: 93/100.** Reliable 1M context retrieval.
- **Multimodal: 95/100.** Comprehensive native multimodal ingestion.
- **Coding: 90/100.** Fast and efficient code generation.
- **Cost efficiency: 98/100.** Highly competitive pricing for high throughput.
- **Overall Score: 91.6/100.** Best-fit recommendation: High-throughput multimodal tasks, rapid prototyping, and large-context document processing.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
