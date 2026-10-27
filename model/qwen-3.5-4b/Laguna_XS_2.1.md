# Qwen 3.5 4B — findings by Laguna XS 2.1

> Source: Alibaba (`qwen-3.5-4b`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B
- **Short description:** Alibaba's lightweight Qwen 3.5 4B parameter model for efficient inference.
- **Provider / access:** Alibaba Cloud, HuggingFace, OpenRouter.
- **Release / knowledge:** Released 2026 (Qwen 3.5 series).
- **IDs:** `qwen-3.5-4b`.
- **Context window:** ~1M tokens.
- **Modalities:** Text in/out primarily.
- **Pricing:** Highly cost-efficient for parameter count.
- **Architecture:** Transformer decoder; 4B parameters.

### Key Findings

Based on aggregated scores from multiple raters:

- **Tool use: 58.2/100**
- **Reasoning: 66.4/100**
- **Context window: 73.2/100**
- **Multimodal: 73.3/100**
- **Coding: 58.1/100**
- **Cost efficiency: 95.6/100**

- **Overall Score: 65.8/100**

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: Aggregated from Qwen 3.5 family research and benchmark aggregators.

Strong cost efficiency makes this an excellent option for lightweight deployments.