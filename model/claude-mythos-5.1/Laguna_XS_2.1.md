# Claude Mythos 5.1 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's Claude Mythos 5.1; same weights as Fable 5.1 but with looser safeguards for research.
- **Provider / access:** Anthropic API; trusted-access programs only.
- **Context window:** 1M tokens; 128K max output.
- **Modalities:** Text, image in; text out.
- **Pricing:** Paid only; similar to Fable 5.1 ($10/$50 per 1M).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 92/100.** 91.7 average; excellent agentic capability.
- **Reasoning: 92/100.** 92.1 average; frontier reasoning tier.
- **Context window: 95/100.** 95.1 average; 1M verified.
- **Multimodal: 75/100.** 74.6 average; good image support.
- **Coding: 91/100.** 91.3 average; excellent coding tier.
- **Cost efficiency: 40/100.** 39.7 average; premium pricing.
- **Overall Score: 89/100.** Mean of (92+92+95+75+91)/5 = 89.0 → 89. Best-fit research/modeling tasks.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_6.md`, using the same headings.