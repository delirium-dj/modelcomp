# Qwen 3.5 9B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's Qwen 3.5 9B model; smaller, efficient variant with good multimodal support.
- **Provider / access:** Alibaba Cloud; OpenRouter; self-host via HuggingFace.
- **Context window:** 77.3 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; good multimodal (75 tier).
- **Pricing:** Highly cost-efficient (95 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 62/100.** 61.7 average; moderate agentic capability.
- **Reasoning: 76/100.** 76 average; solid reasoning tier.
- **Context window: 77/100.** 77.3 tier; good long-context.
- **Multimodal: 75/100.** 75 average; good image support.
- **Coding: 62/100.** 62 average; basic coding tier.
- **Cost efficiency: 95/100.** 95 average; excellent value.
- **Overall Score: 70/100.** Mean of (62+76+77+75+62)/5 = 70.4 → 70. Good budget multimodal model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_9B.md`, using the same headings.