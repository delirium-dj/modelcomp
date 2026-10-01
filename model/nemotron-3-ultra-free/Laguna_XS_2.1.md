# Nemotron 3 Ultra Free — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's Nemotron 3 Ultra Free; large model with exceptional cost efficiency.
- **Provider / access:** NVIDIA; self-host via HuggingFace.
- **Context window:** 90.7 tier; ~1M tokens.
- **Modalities:** Text in/out; text-only (28.7 multimodal tier).
- **Pricing:** Extremely cost-efficient (98.3 tier).

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 75/100.** 75 average; good agentic capability.
- **Reasoning: 75/100.** 75.2 average; solid reasoning.
- **Context window: 91/100.** 90.7 tier; excellent long-context.
- **Multimodal: 29/100.** 28.7 tier; text-only.
- **Coding: 79/100.** 79.2 average; good coding.
- **Cost efficiency: 98/100.** 98.3 average; best-in-class value.
- **Overall Score: 70/100.** Mean of (75+75+91+29+79)/5 = 73.8 → 74. Strong free-tier model with excellent value.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Nemotron_4_Ultra.md`, using the same headings.