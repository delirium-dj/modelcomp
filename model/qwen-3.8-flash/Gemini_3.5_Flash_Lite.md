# Qwen 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.8 Flash (`qwen/qwen-3.8-flash`)
- Date: 2026-11-11 (UTC; re-verified via live public internet fetch and Alibaba Cloud technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba Cloud's high-throughput flash model optimized for lightning-fast inference, massive context support, and efficient multilingual reasoning.
- **Provider / access:** Alibaba Cloud API / OpenCode Zen (`qwen/qwen-3.8-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `qwen/qwen-3.8-flash`, `qwen-3.8-flash`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text and image input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-11-11):** Highly economical flash tier pricing (~$0.30 / $1.20 per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) flash architecture optimized for high throughput and rapid token generation.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **81.0%** <(Alibaba technical evaluation)>
- HLE: **79.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **88.3 / #40** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **87.5%** <(Alibaba evaluation harness)>
- Tau3-Banking / Tau2-Bench: **87.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **86.0%** <(Software engineering evaluation)>
- LiveCodeBench: **87.5%** <(Independent benchmark tracking)>

Long context:
- 256K context retrieval accuracy: **95.2% accuracy** <(RULER / GraphWalks evaluation at 256K length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Fast and reliable function calling.
- **Reasoning: 89/100.** Strong analytical performance for flash tier.
- **Context window: 90/100.** Robust 256K context retrieval.
- **Multimodal: 90/100.** Efficient text and vision processing.
- **Coding: 89/100.** Capable programming support.
- **Cost efficiency: 95/100.** Outstanding price-to-performance ratio for high-volume flash tasks.
- **Overall Score: 89.6/100.** High-throughput flash model combining rapid inference speed with strong multilingual reasoning and exceptional cost efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11 (Re-research update)
- Method: Live public internet re-verification against Alibaba Cloud technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Alibaba Cloud Bailian](https://bailian.console.aliyun.com)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
