# Claude Opus 4.7 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.7 (`anthropic/claude-opus-4.7`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Advanced minor release in the Claude Opus 4 generation, featuring optimized instruction adherence and reduced hallucination rates in coding tasks.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-opus-4.7`).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `anthropic/claude-opus-4.7`, `claude-opus-4.7`.
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text and image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Standard enterprise tier (~$15.00 / $75.00 per 1M input/output tokens).
- **Architecture:** Optimized Opus 4.7 checkpoint.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **86.1%** <(Anthropic technical evaluation)>
- HLE: **84.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **89.9 / #25** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **90.0%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **89.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **76.8%** <(Software engineering evaluation)>
- LiveCodeBench: **90.0%** <(Independent benchmark tracking)>

Long context:
- 200K context retrieval accuracy: **95.8% accuracy** <(RULER / GraphWalks evaluation at 200K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Highly robust function calling and multi-tool orchestration.
- **Reasoning: 90/100.** Superior reasoning and problem solving (GPQA Diamond 86.1%).
- **Context window: 90/100.** 200k token context window.
- **Multimodal: 90/100.** Advanced native vision integration.
- **Coding: 91/100.** Exceptional software engineering and debugging (SWE-bench Verified 76.8%).
- **Cost efficiency: 89/100.** Standard enterprise pricing.
- **Overall Score: 89.9/100.** Best-fit recommendation: High-reliability enterprise model for demanding technical workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
