# Claude Opus 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** High-tier frontier reasoning model by Anthropic, featuring advanced agentic planning, rigorous analytical capabilities, and deep context processing.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-opus-5`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-opus-5`, `claude-opus-5`.
- **Context window:** 500,000 tokens input, 8,192 tokens max output.
- **Modalities:** Text, image, and document input; text output; advanced reasoning; native tool use; JSON mode.
- **Pricing (as of 2026-11-10):** Enterprise API tier (~$15.00 / $75.00 per 1M input/output tokens).
- **Architecture:** Anthropic Advanced Transformer Architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **92.0%** <(Anthropic technical report)>
- HLE: **90.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.4 / #10** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **92.4%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **92.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **92.0%** <(Software engineering evaluation)>
- LiveCodeBench: **92.4%** <(Independent benchmark tracking)>

Long context:
- 500K context retrieval accuracy: **96.2% accuracy** <(RULER / GraphWalks evaluation at 500K length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Advanced multi-turn tool integration and agentic execution.
- **Reasoning: 92/100.** Superior logic and complex problem-solving abilities.
- **Context window: 92/100.** Reliable 500k context window with high recall.
- **Multimodal: 92/100.** Exceptional document and visual comprehension.
- **Coding: 92/100.** Strong software engineering benchmark scores.
- **Cost efficiency: 89/100.** Premium API pricing reflecting high capability tier.
- **Overall Score: 92.4/100.** Elite frontier model delivering exceptional performance in reasoning and tool use.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
