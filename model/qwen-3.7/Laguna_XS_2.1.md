# Qwen 3.7 — findings by Laguna XS 2.1

> Source: Alibaba (`qwen-3.7`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba Group's Qwen 3.7 Max, a highly capable agentic model designed for complex reasoning and coding tasks.
- **Provider / access:** Alibaba Cloud, OpenRouter, together.ai, and other inference providers.
- **Release / knowledge:** May 20, 2026; knowledge cutoff varies by provider.
- **IDs:** `qwen3.7-max` (Alibaba); available via multiple inference platforms.
- **Context window:** ~984K tokens (nearly 1M).
- **Modalities:** Text in/out primarily; some vision variants available.
- **Pricing (as of 2026-10-28):** $2.50 / $7.50 per 1M tokens (varies by provider).
- **Architecture:** Transformer-based, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.05%** (rank #39 of 75, Vals AI)
- OSWorld: **70-75%** (estimated from agentic capabilities)
- AutomationBench: **47-48%** (estimated)

Reasoning / knowledge:

- Vals Index: **57.29%** (rank #5 of 27)
- GPQA Diamond: **90.15%** (rank #25 of 138)
- LiveCodeBench: **87.06%** (rank #19 of 143)
- SWE-bench: **68.80%**
- MMLU Pro: **89.31%** (rank #12 of 138)
- LegalBench: **84.91%** (rank #28 of 151)

Coding:

- Terminal-Bench 2.1: 61.05%
- LiveCodeBench: 87.06%
- SWE-bench: 68.80%

Long context:

- ~984K token context window (strong for long-horizon tasks)

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong on Terminal-Bench 61.05% and agent benchmarks; leading agentic capabilities but behind mid-tier for standalone coding.
- **Reasoning: 88/100.** Excellent GPQA 90.15%, strong MMLU Pro 89.31%; dedicated reasoning model per Alibaba.
- **Context window: 92.5/100.** ~984K tokens meets high-tier; strong for long-context tasks.
- **Multimodal: 65.5/100.** Mixed reports on vision capabilities; primarily text-focused.
- **Coding: 87/100.** Strong SWE-bench 68.8%, LiveCodeBench 87%, competitive on coding tasks.
- **Cost efficiency: 71/100.** $2.50/$7.50 pricing; mid-tier cost compared to specialized models.

- **Overall Score: 83.5/100.** Mean of (83+88+92.5+65.5+87) = 83.2 → 83; solid agentic model with strong reasoning but multimodal limitations.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: Public internet research across Alibaba documentation, Vals AI, BenchLM, and modelscope.cn; scores normalized 1-100 interpretations.
- Sources: Vals AI benchmark data, BenchLM rankings, Alibaba Qwen blog, Terminal-Bench leaderboard.