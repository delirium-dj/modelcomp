# MiniMax M3.1 Flash Preview — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's M3.1 Flash preview variant; optimized for speed and cost.
- **Provider / access:** MiniMax API; preview deployment.
- **Context window:** ~900K tokens; 90.7 tier.
- **Modalities:** Text, image in; text out.
- **Pricing:** Cost-efficient (80 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 67/100.** 67 average; moderate agentic capability.
- **Reasoning: 68/100.** 67.7 average; moderate reasoning.
- **Context window: 91/100.** 90.7 tier; good long-context.
- **Multimodal: 55/100.** 55.3 tier; basic image support.
- **Coding: 71/100.** 71.3 average; moderate coding.
- **Cost efficiency: 80/100.** 80 average; good value.
- **Overall Score: 70.4/100.** Mean of (67+68+91+55+71)/5 = 70.4 → 70. Good cost-effective preview model.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.2.md`, using the same headings.