# Claude Sonnet 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 5.5 (`anthropic/claude-sonnet-5.5`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's flagship Sonnet 5.5 model, providing the best combination of speed and intelligence for demanding agentic workflows and large-context coding.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-sonnet-5.5`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-sonnet-5.5`, `claude-sonnet-5.5`.
- **Context window:** 1,000,000 tokens input, 64,000 tokens max output.
- **Modalities:** Text and image input; text output; native tool calling; JSON mode; adaptive thinking.
- **Pricing (as of 2026-11-10):** Standard enterprise tier (~$3.00 / $15.00 per 1M input/output tokens).
- **Architecture:** Next-generation Sonnet 5.5 transformer architecture balancing speed, intelligence, and 1M context.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **89.5%** <(Anthropic technical report)>
- HLE: **88.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.5 / #7** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **93.5%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **93.0%** <(API benchmark suite)>

Coding:
- SWE-bench Pro: **81.0%** <(Software engineering evaluation)>
- LiveCodeBench: **93.0%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **97.8% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Industry-leading multi-turn agentic tool execution.
- **Reasoning: 92/100.** Exceptional logical and scientific reasoning (GPQA Diamond 89.5%).
- **Context window: 93/100.** Full 1M token context window with stable long-range memory.
- **Multimodal: 92/100.** Outstanding native vision and document comprehension.
- **Coding: 93/100.** Elite software engineering and agentic coding (SWE-bench Pro 81.0%).
- **Cost efficiency: 91/100.** Outstanding value for top-tier operational capability.
- **Overall Score: 92.5/100.** Best-fit recommendation: Premier balanced model for enterprise engineering, autonomous agents, and large-context analysis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
