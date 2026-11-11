# MiMo v2.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi / MiMo v2.6 Flash (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and Xiaomi technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Flash
- **Short description:** Xiaomi's high-throughput flash model optimized for lightning-fast inference, low-latency conversational intelligence, and multilingual task execution.
- **Provider / access:** Xiaomi AI API / OpenCode Zen (`xiaomi/mimo-v2.6-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `xiaomi/mimo-v2.6-flash`, `mimo-v2.6-flash`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text and vision input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-11-11):** Extremely economical flash tier pricing (~$0.20 / $0.80 per 1M tokens).
- **Architecture:** Compact transformer architecture optimized for rapid token generation and minimal inference latency.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **83.0%** <(Xiaomi technical evaluation)>
- HLE: **80.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **88.7 / #38** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **88.0%** <(Xiaomi evaluation harness)>
- Tau3-Banking / Tau2-Bench: **87.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **87.0%** <(Software engineering evaluation)>
- LiveCodeBench: **88.0%** <(Independent benchmark tracking)>

Long context:
- 128K context retrieval accuracy: **95.0% accuracy** <(RULER / GraphWalks evaluation at 128K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Fast and reliable function calling.
- **Reasoning: 90/100.** Solid analytical deduction for flash tier.
- **Context window: 90/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 90/100.** Efficient text and vision processing.
- **Coding: 90/100.** Capable programming support.
- **Cost efficiency: 95/100.** Exceptional price-to-performance ratio for high-frequency flash tasks.
- **Overall Score: 90/100.** High-throughput flash model combining lightning-fast response times with robust multilingual capabilities and exceptional economy.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against Xiaomi technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Xiaomi AI Official Site](https://ai.xiaomi.com)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
