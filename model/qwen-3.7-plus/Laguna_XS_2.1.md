# Qwen 3.7 Plus — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Qwen 3.7 Plus model; strong reasoning and coding capabilities with good multimodal support.
- **Provider / access:** Alibaba Cloud; OpenRouter; self-host via HuggingFace.
- **Context window:** 1M tokens (YaRN-extended).
- **Modalities:** Text, image in; text out; reasoning support.
- **Pricing:** Moderate cost efficiency (86.3 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 83/100.** 82.7 average from 6 top raters; strong agentic capability.
- **Reasoning: 84/100.** 84.2 average; solid reasoning tier.
- **Context window: 92/100.** 91.8 average; excellent 1M class.
- **Multimodal: 84/100.** 84.3 average; good image support.
- **Coding: 83/100.** 82.5 average; solid coding tier.
- **Cost efficiency: 86/100.** 86.3 average; good value.
- **Overall Score: 85/100.** Mean of (83+84+92+84+83)/5 = 85.6 → 85. Strong all-rounder with good multimodal.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Premium.md`, using the same headings.