# Qwen 3.8 Max — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's Qwen 3.8 Max; flagship variant of Qwen 3.8 with strongest reasoning and coding.
- **Provider / access:** Alibaba Cloud; OpenRouter; self-host.
- **Context window:** 86.5 tier; ~1M tokens.
- **Modalities:** Text, image, video in; text out; strong multimodal (80 tier).
- **Pricing:** Moderate value (70 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 84/100.** 84 average; excellent agentic capability.
- **Reasoning: 86/100.** 86 average; very strong reasoning tier.
- **Context window: 87/100.** 86.5 tier; good long-context.
- **Multimodal: 80/100.** 80 average; excellent multimodal.
- **Coding: 87/100.** 86.8 average; excellent coding tier.
- **Cost efficiency: 70/100.** 70 average; moderate value.
- **Overall Score: 85/100.** Mean of (84+86+87+80+87)/5 = 84.8 → 85. Strong flagship model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_4.0_Max.md`, using the same headings.