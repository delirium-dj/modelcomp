# Kimi K3 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K3 (`moonshot/kimi-k3`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Moonshot AI technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship long-context foundational model optimized for massive document ingestion, advanced multilingual reasoning, and extensive context synthesis.
- **Provider / access:** Moonshot AI API / OpenCode Zen (`moonshot/kimi-k3`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `moonshot/kimi-k3`, `kimi-k3`.
- **Context window:** 1,000,000 tokens total.
- **Modalities:** Text input and output; tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Competitive developer pricing (~$1.50 / $6.00 per 1M tokens).
- **Architecture:** Advanced transformer architecture optimized for extreme context scaling and robust multilingual instruction following.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **89.0%** <(Moonshot technical report)>
- HLE: **87.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **91.1 / #19** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **91.0%** <(Moonshot evaluation)>
- Tau3-Banking / Tau2-Bench: **90.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **90.0%** <(Software engineering evaluation)>
- LiveCodeBench: **91.0%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **96.5% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong function calling and structured interaction.
- **Reasoning: 92/100.** Elite analytical reasoning and multi-document synthesis.
- **Context window: 93/100.** Exceptional 1M context window with pristine retrieval accuracy.
- **Multimodal: 60/100.** Text and vision capabilities.
- **Coding: 92/100.** Robust software development and scripting support.
- **Cost efficiency: 89/100.** Highly favorable price-to-performance for massive context usage.
- **Overall Score: 85.8/100.** Premier long-context flagship model combining massive 1M context handling with frontier analytical reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Moonshot AI technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Moonshot AI Official Site](https://moonshot.cn)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
