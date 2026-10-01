# ByteDance Seed 2.0 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's Seed 2.0 Pro language model; strong reasoning and moderate multimodal capabilities.
- **Provider / access:** OpenCode Zen; self-host via HuggingFace; third-party APIs.
- **Context window:** ~1M tokens; good long-context.
- **Modalities:** Text, image in; text out; reasoning support.
- **Pricing:** Mixed free/paid tiers; cost-efficient.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 78/100.** 77.7 average from 6 top raters; solid agentic capability.
- **Reasoning: 87/100.** 87.3 average; excellent reasoning; near-frontier tier.
- **Context window: 78/100.** 78 tier; 1M-class context.
- **Multimodal: 84/100.** 84.3 average; strong image/modal input.
- **Coding: 83/100.** 82.8 average; strong coding tier.
- **Cost efficiency: 84/100.** 83.8 average; excellent value.
- **Overall Score: 82/100.** Mean of (78+87+78+84+83)/5 = 82.0 → 82. Strong reasoning model with good multimodal capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Seed_2.1.md`, using the same headings.