# Nemotron 3.5 Lightning Free — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's Nemotron 3.5 Lightning Free; cost-efficient lightweight model.
- **Provider / access:** NVIDIA; self-host via HuggingFace; API.
- **Context window:** 75.6 tier; ~500K tokens.
- **Modalities:** Text in/out; minimal multimodal (25 tier).
- **Pricing:** Extremely cost-efficient (95.4 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 54/100.** 54.2 average; moderate agentic capability.
- **Reasoning: 64/100.** 64.2 average; basic reasoning tier.
- **Context window: 76/100.** 75.6 tier; adequate context.
- **Multimodal: 25/100.** 25 tier; text-only.
- **Coding: 60/100.** 60.4 average; basic coding.
- **Cost efficiency: 95/100.** 95.4 average; excellent value.
- **Overall Score: 56/100.** Mean of (54+64+76+25+60)/5 = 55.8 → 56. Good budget/free alternative.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Nemotron_4.0_Lightning.md`, using the same headings.