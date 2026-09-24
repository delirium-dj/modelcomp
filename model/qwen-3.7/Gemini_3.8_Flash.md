# Qwen 3.7 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (Qwen3.7 Max)
- **Short description:** Alibaba's May 2026 agentic flagship model built for complex programming tasks, multi-step autonomous workflows, and mathematical deduction over a 1M context window.
- **Provider / access:** Alibaba Cloud Model Studio (Bailian) / DashScope (`qwen3.7-max`), OpenRouter, OpenCode Zen (`opencode/qwen-3.7`).
- **Release / knowledge:** May 2026; knowledge cutoff early 2026.
- **IDs:** `qwen3.7-max`, `opencode/qwen-3.7`
- **Context window:** 1,000,000 tokens (up to 131K output).
- **Modalities:** Text in / text out (base release); native function calling, structured outputs, and context caching.
- **Pricing (as of 2026-09-24):** ~$1.25–$1.65 / 1M input tokens, ~$3.75–$4.95 / 1M output tokens ($0.30 cached input).
- **Architecture:** Proprietary frontier dense/MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%** (TB 2.0: **69.7%**)
- MCP Atlas: **76.4%**
- BFCL-V4: **75.0%**
- CoWorkBench: **67.2%**
- Claw-Eval: **65.2%**

Reasoning / knowledge:

- GPQA Diamond: **92.3%–92.4%**
- Humanity's Last Exam (HLE): **41.4%**
- MMLU-Pro: **89.6%**
- AA Intelligence Index: **56.6**
- SciCode: **53.5%**

Coding:

- LiveCodeBench v6: **91.6%**
- SWE-bench Verified: **80.4%**
- SWE-Multilingual: **78.3%**
- SWE-bench Pro: **60.6%**

Long context:

- MRCR (128K): **90.4%**
- Advertised context window of 1,000,000 tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid tool handling across TB 2.1 (74.5%), MCP Atlas (76.4%), and BFCL-V4 (75.0%), demonstrating dependable function calling execution.
- **Reasoning: 88/100.** 92.4% on GPQA Diamond, 41.4% on HLE, and 89.6% on MMLU-Pro position Qwen 3.7 securely in the frontier reasoning class.
- **Context window: 90/100.** 1M context with demonstrated 90.4% retrieval on 128K MRCR provides strong long-context processing capabilities.
- **Multimodal: 20/100.** Text-only input and output on the base model release; multimodal vision supported only on separate specialized snapshots.
- **Coding: 84/100.** Outstanding coding strength highlighted by 91.6% on LiveCodeBench v6 and 80.4% on SWE-bench Verified.
- **Cost efficiency: 84/100.** Aggressively competitive pricing at ~$1.40 / ~$4.00 per 1M tokens.
- **Overall Score: 72/100.** Arithmetic mean of non-cost metrics: (78 + 88 + 90 + 20 + 84) / 5 = 72.0. An elite text and code reasoning model with excellent price-to-performance.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and verification against published Alibaba Cloud data and third-party evaluation trackers.
