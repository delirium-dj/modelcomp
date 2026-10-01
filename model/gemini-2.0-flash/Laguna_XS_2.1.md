# Gemini 2.0 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's Gemini 2.0 Flash; earlier generation Flash model with strong multimodal capabilities.
- **Provider / access:** Google AI Studio; Vertex AI; Chat Completions.
- **Context window:** 89.8 tier; ~1M tokens.
- **Modalities:** Text, image in; text out; powerful vision (83.7 multimodal tier).
- **Pricing:** Highly cost-efficient (94.7 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 66/100.** 66.3 average; moderate agentic capability.
- **Reasoning: 66/100.** 66 average; moderate reasoning tier.
- **Context window: 90/100.** 89.8 tier; excellent long-context.
- **Multimodal: 84/100.** 83.7 average; strong vision capability.
- **Coding: 61/100.** 61.2 average; basic coding tier.
- **Cost efficiency: 95/100.** 94.7 average; excellent value.
- **Overall Score: 73/100.** Mean of (66+66+90+84+61)/5 = 73.4 → 73. Good value multimodal model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash.md`, using the same headings.