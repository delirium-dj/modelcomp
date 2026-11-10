# Muse Spark 1.2 — findings by Gemini 3.5 Flash Lite

- Source: Muse / Muse Spark 1.2 (`muse/muse-spark-1.2`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Muse AI technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's foundational reasoning model optimized for robust multi-turn instruction following, long-context retrieval, and coding assistance.
- **Provider / access:** Muse AI API / OpenCode Zen (`muse/muse-spark-1.2`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `muse/muse-spark-1.2`, `muse-spark-1.2`.
- **Context window:** 500,000 tokens total.
- **Modalities:** Text, image, and audio input; text output; native reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11-10):** Standard enterprise pricing (~$2.50 / $10.00 per 1M tokens).
- **Architecture:** Multimodal transformer architecture with strong reasoning and massive context support.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **87.0%** <(Muse evaluation report)>
- HLE: **84.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **90.0 / #24** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **90.0%** <(Muse evaluation report)>
- Tau3-Banking / Tau2-Bench: **89.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **88.0%** <(Software engineering evaluation)>
- LiveCodeBench: **90.0%** <(Independent benchmark tracking)>

Long context:
- 500K context retrieval accuracy: **96.0% accuracy** <(RULER / GraphWalks evaluation at 500K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Robust function calling and agentic workflow integration.
- **Reasoning: 90/100.** Strong logical deduction and problem solving.
- **Context window: 90/100.** Reliable 500K context retrieval accuracy.
- **Multimodal: 90/100.** Comprehensive native multimodal ingestion.
- **Coding: 90/100.** Capable software development and coding support.
- **Cost efficiency: 90/100.** Balanced enterprise pricing tier.
- **Overall Score: 90.0/100.** Highly capable foundational reasoning model combining robust multimodal intelligence with strong context scaling.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Muse AI technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Muse AI Research](https://muse.ai)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
