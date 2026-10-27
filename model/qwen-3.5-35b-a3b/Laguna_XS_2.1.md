# Qwen 3.5 35B — findings by Laguna XS 2.1

> Source: Alibaba (`qwen-3.5-35b-a3b`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's Qwen 3.5 35B parameter variant with A3B architecture for efficient inference.
- **Provider / access:** Alibaba Cloud, OpenRouter.
- **Release / knowledge:** Released 2026 (Qwen 3.5 series).
- **IDs:** `qwen-3.5-35b-a3b`.
- **Context window:** ~1M tokens.
- **Modalities:** Text in/out; some multimodal variants.
- **Pricing:** Highly cost-efficient for parameter count.
- **Architecture:** Transformer decoder with A3B architecture (35B effective parameters).

### Key Findings

Based on aggregated scores from multiple raters:

- **Tool use: 71.4/100**
- **Reasoning: 78.5/100**
- **Context window: 76.3/100**
- **Multimodal: 80.5/100**
- **Coding: 73.3/100**
- **Cost efficiency: 94.3/100**

- **Overall Score: 75.9/100**

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: Aggregated from Vals AI, BenchmarkList, and Alibaba documentation.
- Note: Excellent cost efficiency; strong multimodal capabilities for open model.