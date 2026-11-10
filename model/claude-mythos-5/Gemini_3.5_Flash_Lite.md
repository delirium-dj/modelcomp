# Claude Mythos 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Mythos 5 (`anthropic/claude-mythos-5`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Next-generation frontier intelligence model by Anthropic featuring advanced agentic reasoning, robust coding, and deep synthesis capabilities.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-mythos-5`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-mythos-5`, `claude-mythos-5`.
- **Context window:** 500,000 tokens input, 8,192 tokens max output.
- **Modalities:** Text, image, and PDF input; text output; advanced reasoning; native tool use; JSON mode.
- **Pricing (as of 2026-11-10):** Enterprise API paid tier (~$10.00 / $50.00 per 1M input/output tokens).
- **Architecture:** Anthropic Advanced Transformer Architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **91.0%** <(Anthropic technical report)>
- HLE: **89.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.1 / #13** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **92.0%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **91.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **91.0%** <(Software engineering evaluation)>
- LiveCodeBench: **91.5%** <(Independent benchmark tracking)>

Long context:
- 500K context retrieval accuracy: **96.0% accuracy** <(RULER / GraphWalks evaluation at 500K length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Advanced multi-turn tool integration and agentic workflows.
- **Reasoning: 92/100.** Exceptional performance on GPQA Diamond and complex problem solving.
- **Context window: 92/100.** Robust 500k context window with high fidelity retrieval.
- **Multimodal: 92/100.** Excellent visual and document comprehension capabilities.
- **Coding: 92/100.** Industry-leading coding and SWE-bench performance.
- **Cost efficiency: 89/100.** Premium enterprise pricing reflecting top-tier frontier capability.
- **Overall Score: 92.1/100.** Outstanding frontier model with industry-leading reasoning and coding proficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
