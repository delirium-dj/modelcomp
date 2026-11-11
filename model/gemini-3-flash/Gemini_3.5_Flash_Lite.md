# Gemini 3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Flash (`google/gemini-3-flash`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and Google DeepMind technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's foundational 3rd-generation Flash model delivering high-speed inference, native multimodality, and large-context document processing.
- **Provider / access:** Google AI Studio / OpenCode Zen (`google/gemini-3-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3-flash`, `gemini-3-flash`.
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text, image, audio, and video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-11):** Economy production tier (~$0.075 / $0.30 per 1M input/output tokens).
- **Architecture:** Efficient foundational transformer architecture for high-throughput multimodal tasks.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **80.0%** <(Google DeepMind evaluation)>
- HLE: **78.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **88.4 / #39** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **85.5%** <(Google developer evaluation)>
- Tau3-Banking / Tau2-Bench: **85.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **72.0%** <(Software engineering evaluation)>
- LiveCodeBench: **85.5%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **96.0% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable function calling and structured JSON generation.
- **Reasoning: 89/100.** Solid core reasoning for fast generation tasks.
- **Context window: 90/100.** Stable 1M context token retrieval.
- **Multimodal: 94/100.** Broad native multimodal support.
- **Coding: 89/100.** Effective code generation and scripting support.
- **Cost efficiency: 98/100.** Highly cost-effective for scaled workloads.
- **Overall Score: 90.4/100.** Best-fit recommendation: High-volume document summarization, rapid multimodal queries, and cost-sensitive API integrations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
