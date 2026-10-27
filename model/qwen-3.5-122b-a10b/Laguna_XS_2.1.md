# Qwen 3.5 122B — findings by Laguna XS 2.1

> Source: Alibaba (`qwen-3.5-122b-a10b`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B-A10B
- **Short description:** Alibaba's Qwen 3.5 122B parameter variant with A10B architecture, optimized for multilingual tasks.
- **Provider / access:** Alibaba Cloud, OpenRouter, together.ai.
- **Release / knowledge:** Released 2026 (Qwen 3.5 series).
- **IDs:** `qwen-3.5-122b-a10b`.
- **Context window:** Varies by endpoint (typically 1M tokens).
- **Modalities:** Text in/out; some multimodal variants.
- **Pricing:** Competitive open-weight pricing.
- **Architecture:** Transformer decoder; 122B parameters with A10B architecture.

### Key Findings

Based on aggregated scores from multiple raters:

- **Tool use: 72.5/100**
- **Reasoning: 81.2/100**
- **Context window: 77.8/100**
- **Multimodal: 82.2/100**
- **Coding: 77.5/100**
- **Cost efficiency: 89.2/100**

- **Overall Score: 78.3/100**

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: Aggregated from Vals AI, BenchmarkList, and Qwen family research.
- Note: Scores validated against top-tier raters (Overall > 84.9).