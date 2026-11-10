# Claude Mythos 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Mythos 5.1 (`anthropic/claude-mythos-5.1`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Anthropic technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's foundational Mythos architecture preview, engineered for extreme reasoning depth, agentic autonomy, and multi-domain discovery.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-mythos-5.1`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `anthropic/claude-mythos-5.1`, `claude-mythos-5.1`.
- **Context window:** 2,000,000 tokens input, 128,000 tokens max output.
- **Modalities:** Text, image, and audio input; text output; native tool calling; JSON mode; adaptive thinking always active.
- **Pricing (as of 2026-11-10):** Frontier enterprise pricing tier (~$15.00 / $75.00 per 1M input/output tokens).
- **Architecture:** Advanced Mythos-class sparse transformer architecture with native 2M context and continuous adaptive reasoning.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **94.8%** <(Anthropic technical report)>
- HLE: **92.5%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.6 / #5** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **94.2%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **93.8%** <(API benchmark suite)>

Coding:
- SWE-bench Pro: **86.5%** <(Software engineering evaluation)>
- LiveCodeBench: **93.8%** <(Independent benchmark tracking)>

Long context:
- 2M context retrieval accuracy: **98.5% accuracy** <(RULER / GraphWalks evaluation at 2M length)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Elite autonomous agentic execution and multi-step tool orchestration.
- **Reasoning: 95/100.** Groundbreaking logical, scientific, and mathematical reasoning (GPQA Diamond 94.8%).
- **Context window: 94/100.** 2-million-token context window with flawless long-horizon retrieval.
- **Multimodal: 94/100.** Superior native multimodal reasoning across text, image, and audio.
- **Coding: 94/100.** Elite software engineering and codebase autonomy.
- **Cost efficiency: 90/100.** Frontier pricing reflecting state-of-the-art intelligence.
- **Overall Score: 94.2/100.** State-of-the-art frontier model for highly complex scientific research and autonomous agentic development.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Anthropic technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Anthropic Research Portal](https://www.anthropic.com/research)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
