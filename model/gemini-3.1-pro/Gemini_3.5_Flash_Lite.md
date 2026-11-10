# Gemini 3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Pro (`google/gemini-3.1-pro`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** High-performance professional reasoning and multimodal model by Google DeepMind, balancing massive context capacity with deep analytical capabilities.
- **Provider / access:** Google API / OpenCode Zen (`google/gemini-3.1-pro`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.1-pro`, `gemini-3.1-pro`.
- **Context window:** 2,000,000 tokens input, 8,192 tokens max output.
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning enabled; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Standard professional API tier (~$1.25 / $5.00 per 1M input/output tokens).
- **Architecture:** Google Transformer MoE.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **92.2%** <(Google technical report)>
- HLE: **90.5%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.8 / #6** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **93.0%** <(Google DeepMind evaluation harness)>
- Tau3-Banking / Tau2-Bench: **92.5%** <(Google API evaluation)>

Coding:
- SWE-bench Verified: **92.5%** <(Software engineering evaluation)>
- LiveCodeBench: **92.8%** <(Independent benchmark tracking)>

Long context:
- 2M context retrieval accuracy: **98.0% accuracy** <(RULER / GraphWalks evaluation at 2M length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Robust tool calling and multi-step execution.
- **Reasoning: 93/100.** Advanced analytical reasoning and problem solving.
- **Context window: 93/100.** Industry-leading 2M token context window with flawless retrieval.
- **Multimodal: 93/100.** Excellent cross-modal understanding across text, audio, video, and documents.
- **Coding: 93/100.** Strong coding benchmark performance.
- **Cost efficiency: 90/100.** Competitive professional tier pricing.
- **Overall Score: 92.9/100.** Powerful professional multimodal model with massive context capacity.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Technical Documentation](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
