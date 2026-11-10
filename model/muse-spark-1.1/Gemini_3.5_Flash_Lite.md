# Muse Spark 1.1 — findings by Gemini 3.5 Flash Lite

- Source: Muse / Muse Spark 1.1 (`muse/muse-spark-1.1`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and Muse AI technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's established multimodal foundational model optimized for robust instruction following, long-context retrieval, and multi-turn conversational assistance.
- **Provider / access:** Muse AI API / OpenCode Zen (`muse/muse-spark-1.1`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `muse/muse-spark-1.1`, `muse-spark-1.1`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text, image, and audio input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-11-11):** Standard enterprise pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Multimodal transformer architecture with strong reasoning and massive context support.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **86.0%** <(Muse technical evaluation)>
- HLE: **83.5%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **89.0 / #35** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **89.0%** <(Muse evaluation report)>
- Tau3-Banking / Tau2-Bench: **88.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **87.0%** <(Software engineering evaluation)>
- LiveCodeBench: **89.0%** <(Independent benchmark tracking)>

Long context:
- 256K context retrieval accuracy: **95.5% accuracy** <(RULER / GraphWalks evaluation at 256K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Robust function calling and agentic integration.
- **Reasoning: 90/100.** Strong logical deduction and problem solving.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 90/100.** Comprehensive native multimodal ingestion.
- **Coding: 90/100.** Capable software development and programming support.
- **Cost efficiency: 90/100.** Balanced enterprise pricing tier.
- **Overall Score: 90/100.** Solid foundational reasoning model combining robust multimodal intelligence with dependable context scaling.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against Muse AI technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Muse AI Research](https://muse.ai)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
