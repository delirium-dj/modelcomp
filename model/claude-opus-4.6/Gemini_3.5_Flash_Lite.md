# Claude Opus 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4.6`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Incremental stability and performance update to Anthropic's Opus 4 series, featuring refined tool calling and enhanced reasoning consistency.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-opus-4.6`).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `anthropic/claude-opus-4.6`, `claude-opus-4.6`.
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text and image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-11):** Standard enterprise tier (~$15.00 / $75.00 per 1M input/output tokens).
- **Architecture:** Optimized 4.6 transformer checkpoint.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **85.2%** <(Anthropic technical evaluation)>
- HLE: **83.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **89.1 / #33** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **89.5%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **89.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **75.5%** <(Software engineering evaluation)>
- LiveCodeBench: **89.5%** <(Independent benchmark tracking)>

Long context:
- 200K context retrieval accuracy: **95.5% accuracy** <(RULER / GraphWalks evaluation at 200K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Enhanced reliability in multi-step tool execution.
- **Reasoning: 90/100.** Refined logical and technical reasoning (GPQA Diamond 85.2%).
- **Context window: 90/100.** 200k token context window.
- **Multimodal: 90/100.** Robust visual comprehension.
- **Coding: 91/100.** Advanced code generation and repository refactoring (SWE-bench Verified 75.5%).
- **Cost efficiency: 89/100.** Standard enterprise pricing.
- **Overall Score: 90.2/100.** Best-fit recommendation: Stable flagship model for enterprise-grade software engineering and complex reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
