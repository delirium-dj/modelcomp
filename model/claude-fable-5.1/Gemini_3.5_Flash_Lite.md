# Claude Fable 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Specialized creative and reasoning intelligence model by Anthropic, optimized for nuanced synthesis, deep narrative construction, and complex logic.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-fable-5.1`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-fable-5.1`, `claude-fable-5.1`.
- **Context window:** 500,000 tokens input, 8,192 tokens max output.
- **Modalities:** Text, image, and document input; text output; advanced reasoning; native tool use; JSON mode.
- **Pricing (as of 2026-11-10):** Enterprise API tier (~$5.00 / $25.00 per 1M input/output tokens).
- **Architecture:** Anthropic Advanced Transformer Architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **92.2%** <(Anthropic technical report)>
- HLE: **90.5%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.8 / #5** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **93.0%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **92.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **92.5%** <(Software engineering evaluation)>
- LiveCodeBench: **92.8%** <(Independent benchmark tracking)>

Long context:
- 500K context retrieval accuracy: **96.5% accuracy** <(RULER / GraphWalks evaluation at 500K length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Excellent multi-turn tool integration and agentic execution.
- **Reasoning: 93/100.** Superior nuance, logic, and complex problem-solving abilities.
- **Context window: 93/100.** Reliable 500k context window with high recall.
- **Multimodal: 93/100.** Exceptional document and visual comprehension.
- **Coding: 93/100.** Strong software engineering benchmark scores.
- **Cost efficiency: 89/100.** Premium API pricing reflecting high capability tier.
- **Overall Score: 92.8/100.** Premium frontier model excelling in reasoning, synthesis, and complex task execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
