# DeepSeek V4 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's V4 Flash model; cost-efficient light variant.
- **Provider / access:** DeepSeek API; OpenRouter; Chat Completions.
- **Context window:** 92 tier; ~1M tokens.
- **Modalities:** Text in/out; text-only (17.6 multimodal tier).
- **Pricing:** Highly cost-efficient (92 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 83/100.** 83 average; good agentic capability.
- **Reasoning: 82/100.** 82.4 average; solid reasoning tier.
- **Context window: 92/100.** 92 tier; excellent long-context.
- **Multimodal: 18/100.** 17.6 tier; text-only; caps score.
- **Coding: 83/100.** 83.4 average; strong coding tier.
- **Cost efficiency: 92/100.** 92 average; excellent value.
- **Overall Score: 72/100.** Mean of (83+82+92+18+83)/5 = 72.0 → 72. Good value coding model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V5_Flash.md`, using the same headings.