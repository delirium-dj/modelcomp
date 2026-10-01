# GPT-6 Luna — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's GPT-6 Luna; part of the GPT-6 family with strong long-context capabilities.
- **Provider / access:** OpenAI API; OpenCode Zen.
- **Context window:** 90.5 tier; ~1M+ tokens.
- **Modalities:** Text, image in; text out; tool calling; reasoning support.
- **Pricing:** Competitive tier at 94.5 cost efficiency.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 74/100.** 74.2 average; solid agentic capability.
- **Reasoning: 78/100.** 78.2 average; good reasoning tier.
- **Context window: 91/100.** 90.5 tier; excellent long-context.
- **Multimodal: 71/100.** 71 average; basic multimodal.
- **Coding: 78/100.** 77.8 average; solid coding tier.
- **Cost efficiency: 95/100.** 94.5 average; excellent value.
- **Overall Score: 78/100.** Mean of (74+78+91+71+78)/5 = 78.4 → 78. Good value long-context model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_7_Luna.md`, using the same headings.