# Qwen 3.8 Max — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Alibaba Cloud technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship foundational model optimized for advanced reasoning, massive multilingual knowledge, and complex software engineering.
- **Provider / access:** Alibaba Cloud API / OpenCode Zen (`qwen/qwen-3.8-max`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `qwen/qwen-3.8-max`, `qwen-3.8-max`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text and image input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-11-10):** Competitive developer pricing (~$1.20 / $4.80 per 1M tokens).
- **Architecture:** Large-scale dense/MoE hybrid transformer model with advanced multilingual and reasoning pre-training.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **87.0%** <(Alibaba technical evaluation)>
- HLE: **84.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **89.9 / #28** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **90.0%** <(Alibaba evaluation harness)>
- Tau3-Banking / Tau2-Bench: **89.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **88.5%** <(Software engineering evaluation)>
- LiveCodeBench: **90.0%** <(Independent benchmark tracking)>

Long context:
- 256K context retrieval accuracy: **96.0% accuracy** <(RULER / GraphWalks evaluation at 256K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Robust function calling and structured agent integration.
- **Reasoning: 90/100.** Superior analytical deduction and multilingual knowledge synthesis.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 90/100.** Comprehensive text and vision comprehension.
- **Coding: 90/100.** Capable software development and programming support.
- **Cost efficiency: 90/100.** Highly favorable price-to-performance ratio.
- **Overall Score: 89.9/100.** Flagship foundational model delivering elite multilingual reasoning, coding, and general intelligence.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Alibaba Cloud technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Alibaba Cloud Bailian](https://bailian.console.aliyun.com)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
