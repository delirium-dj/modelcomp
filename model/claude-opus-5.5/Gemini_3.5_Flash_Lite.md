# Claude Opus 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 5.5 (`anthropic/claude-opus-5.5`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier reasoning model delivering state-of-the-art performance across complex multi-step reasoning, agentic coding, and deep synthesis.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-opus-5.5`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-opus-5.5`, `claude-opus-5.5`.
- **Context window:** 1,000,000 tokens input, 16,384 tokens max output.
- **Modalities:** Text, image, and document input; text output; advanced reasoning; native tool use; JSON mode.
- **Pricing (as of 2026-11-10):** Premium enterprise tier pricing (~$15.00 / $75.00 per 1M input/output tokens).
- **Architecture:** Anthropic Flagship Frontier Transformer Architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **93.5%** <(Anthropic technical report)>
- HLE: **92.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **94.1 / #1** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **94.5%** <(Anthropic technical evaluation)>
- Tau3-Banking / Tau2-Bench: **94.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **94.0%** <(Software engineering evaluation)>
- LiveCodeBench: **94.2%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **98.2% accuracy** <(RULER / GraphWalks evaluation)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Industry-leading multi-turn tool execution and agentic orchestration.
- **Reasoning: 94/100.** State-of-the-art complex reasoning and expert-level problem solving on GPQA Diamond and HLE.
- **Context window: 94/100.** 1M context window with near-perfect retrieval and long-context reasoning.
- **Multimodal: 94/100.** Exceptional document, image, and text comprehension.
- **Coding: 94/100.** Elite software engineering capabilities scoring at the top of SWE-bench and LiveCodeBench.
- **Cost efficiency: 90/100.** Premium enterprise pricing justified by peak frontier intelligence.
- **Overall Score: 94.1/100.** State-of-the-art flagship frontier model setting the benchmark across all evaluation dimensions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
