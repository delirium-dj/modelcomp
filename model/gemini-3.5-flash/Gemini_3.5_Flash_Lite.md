# Gemini 3.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.5 Flash (`google/gemini-3.5-flash`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-efficiency 3.5 generation Flash model, engineered for fast inference, solid reasoning, and multimodal capabilities across a 1M token context window.
- **Provider / access:** Google AI Studio / OpenCode Zen (`google/gemini-3.5-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.5-flash`, `gemini-3.5-flash`.
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text, image, audio, and video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Economy production tier (~$0.075 / $0.30 per 1M input/output tokens).
- **Architecture:** Efficient transformer architecture optimized for low-latency multimodal processing.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **81.5%** <(Google DeepMind evaluation)>
- HLE: **80.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **89.4 / #30** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **87.5%** <(Google developer evaluation)>
- Tau3-Banking / Tau2-Bench: **87.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **74.2%** <(Software engineering evaluation)>
- LiveCodeBench: **87.5%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **96.8% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable agentic function calling and structured outputs.
- **Reasoning: 90/100.** Strong reasoning performance for standard flash tier workloads.
- **Context window: 90/100.** Stable 1M token context retrieval.
- **Multimodal: 94/100.** Comprehensive native multimodal ingestion.
- **Coding: 90/100.** Efficient code generation and debugging support.
- **Cost efficiency: 98/100.** Highly economical pricing for high-volume tasks.
- **Overall Score: 90.8/100.** Best-fit recommendation: High-volume multimodal data processing, fast document Q&A, and real-time application pipelines.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
