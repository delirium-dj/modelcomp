# DeepSeek V4 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's V4 Pro model; strong reasoning and coding capabilities.
- **Provider / access:** DeepSeek API; OpenRouter; Chat Completions.
- **Context window:** 86.6 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; basic multimodal (46.5 tier).
- **Pricing:** Cost-efficient (88.8 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 85/100.** 85.1 average; excellent agentic capability.
- **Reasoning: 87/100.** 87.1 average; very strong reasoning tier.
- **Context window: 87/100.** 86.6 tier; good long-context.
- **Multimodal: 47/100.** 46.5 tier; text-plus-image; capped.
- **Coding: 85/100.** 84.6 average; excellent coding tier.
- **Cost efficiency: 89/100.** 88.8 average; excellent value.
- **Overall Score: 78/100.** Mean of (85+87+87+47+85)/5 = 78.2 → 78. Strong coding model with good value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V5_Pro.md`, using the same headings.