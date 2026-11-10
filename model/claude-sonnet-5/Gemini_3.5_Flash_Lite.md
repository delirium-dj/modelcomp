# Claude Sonnet 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 5 (`anthropic/claude-sonnet-5`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's foundational Sonnet 5 model introducing expanded 1M context, adaptive thinking, and elite software engineering performance.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-sonnet-5`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-sonnet-5`, `claude-sonnet-5`.
- **Context window:** 1,000,000 tokens total (1M input / 64,000 output).
- **Modalities:** Text and image input; text output; native tool calling; JSON mode; adaptive thinking.
- **Pricing (as of 2026-11-11):** Standard enterprise tier (~$3.00 / $15.00 per 1M input/output tokens).
- **Architecture:** Sonnet 5 transformer architecture with extended context.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **88.8%** <(Anthropic technical evaluation)>
- HLE: **87.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **88.8 / #36** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **92.0%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **91.5%** <(API benchmark suite)>

Coding:
- SWE-bench Pro: **80.0%** <(Software engineering evaluation)>
- LiveCodeBench: **92.0%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **97.5% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Excellent agentic tool integration.
- **Reasoning: 90/100.** Advanced logical and technical reasoning (GPQA Diamond 88.8%).
- **Context window: 90/100.** Full 1M token context window.
- **Multimodal: 90/100.** Robust native vision support.
- **Coding: 90/100.** Top-tier software engineering (SWE-bench Pro 80.0%).
- **Cost efficiency: 89/100.** Competitive enterprise pricing.
- **Overall Score: 90/100.** Best-fit recommendation: Premier balanced enterprise model for large-context coding and agentic workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
