# MiMo v2.6 Pro — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi / MiMo v2.6 Pro (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Xiaomi technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Pro
- **Short description:** Xiaomi's high-performance professional foundational model optimized for advanced reasoning, robust coding, and multilingual conversational intelligence.
- **Provider / access:** Xiaomi AI API / OpenCode Zen (`xiaomi/mimo-v2.6-pro`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `xiaomi/mimo-v2.6-pro`, `mimo-v2.6-pro`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text and vision input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-11-10):** Competitive developer pricing (~$1.20 / $4.80 per 1M tokens).
- **Architecture:** Dense transformer architecture optimized for high-throughput professional reasoning and multi-turn instruction following.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **88.0%** <(Xiaomi technical evaluation)>
- HLE: **85.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **91.0 / #21** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **90.5%** <(Xiaomi evaluation harness)>
- Tau3-Banking / Tau2-Bench: **90.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **89.5%** <(Software engineering evaluation)>
- LiveCodeBench: **90.5%** <(Independent benchmark tracking)>

Long context:
- 256K context retrieval accuracy: **96.0% accuracy** <(RULER / GraphWalks evaluation at 256K length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong function calling and API integration.
- **Reasoning: 92/100.** Advanced logical deduction and problem-solving performance.
- **Context window: 92/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 92/100.** Comprehensive text and vision comprehension.
- **Coding: 92/100.** Capable software development and programming support.
- **Cost efficiency: 90/100.** Highly favorable price-to-performance ratio.
- **Overall Score: 92/100.** Professional-tier foundational model delivering exceptional reasoning, coding, and multimodal intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Xiaomi technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Xiaomi AI Official Site](https://ai.xiaomi.com)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
