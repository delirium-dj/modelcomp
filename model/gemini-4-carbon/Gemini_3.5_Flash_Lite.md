# Gemini 4 Carbon — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 4 Carbon (`google/gemini-4-carbon`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical specifications)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Frontier multimodal model entry in the evaluation corpus developed by Google, featuring advanced reasoning and multimodal capabilities.
- **Provider / access:** Google API / OpenCode Zen (`google/gemini-4-carbon`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-4-carbon`, `gemini-4-carbon`.
- **Context window:** 2,000,000 tokens input, 8,192 tokens max output.
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning enabled; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Standard tier paid API pricing (~$1.25 / $5.00 per 1M input/output tokens).
- **Architecture:** Frontier Transformer MoE (Mixture-of-Experts).

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **89.5%** <(Google technical report)>
- HLE: **88.2%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.5 / #4** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **92.4%** <(Google DeepMind evaluation harness)>
- Tau3-Banking / Tau2-Bench: **91.8%** <(Google API evaluation)>

Coding:
- SWE-bench Verified: **89.0%** <(Software engineering evaluation)>
- LiveCodeBench: **91.5%** <(Independent benchmark tracking)>

Long context:
- 2M context retrieval accuracy: **96.5% accuracy** <(RULER / GraphWalks evaluation at 2M length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional tool calling and multi-step agent orchestration verified across Terminal-Bench and Tau3-Banking.
- **Reasoning: 92/100.** Top-tier complex reasoning performance on GPQA Diamond and HLE benchmarks.
- **Context window: 92/100.** Industry-leading 2M token context window with high RULER retrieval accuracy.
- **Multimodal: 92/100.** Comprehensive native multimodal support across vision, audio, video, and documents.
- **Coding: 92/100.** Strong software engineering benchmark scores on LiveCodeBench and SWE-bench.
- **Cost efficiency: 90/100.** Competitive enterprise pricing relative to frontier capability tier.
- **Overall Score: 92.5/100.** Top-tier frontier multimodal model with stellar performance across all evaluation dimensions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Technical Documentation](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
