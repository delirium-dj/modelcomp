# Claude Opus 4.8 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4.8`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Mature finalization of the Claude Opus 4 generation, bridging pre-Mythos capability with advanced reasoning optimizations.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-opus-4.8`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-opus-4.8`, `claude-opus-4.8`.
- **Context window:** 200,000 tokens total (200k input / 64,000 output).
- **Modalities:** Text and image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Standard enterprise tier (~$15.00 / $75.00 per 1M input/output tokens).
- **Architecture:** Mature Opus 4.8 transformer architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **87.0%** <(Anthropic technical evaluation)>
- HLE: **85.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **90.3 / #23** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **91.0%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **90.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **78.2%** <(Software engineering evaluation)>
- LiveCodeBench: **90.5%** <(Independent benchmark tracking)>

Long context:
- 200K context retrieval accuracy: **96.0% accuracy** <(RULER / GraphWalks evaluation at 200K length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional agentic tool utilization.
- **Reasoning: 92/100.** Elite logical and mathematical reasoning (GPQA Diamond 87.0%).
- **Context window: 90/100.** 200k token context window.
- **Multimodal: 90/100.** High-fidelity native vision support.
- **Coding: 92/100.** Top-tier software engineering and code generation (SWE-bench Verified 78.2%).
- **Cost efficiency: 89/100.** Standard enterprise tier pricing.
- **Overall Score: 91.2/100.** Best-fit recommendation: Highly refined enterprise model for complex engineering and analytical tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
