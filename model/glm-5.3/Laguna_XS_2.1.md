# GLM 5.3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Tsinghua University's GLM 5.3 language model; strong coding and reasoning capabilities.
- **Provider / access:** OpenCode Zen; self-host via HuggingFace; third-party APIs.
- **Context window:** ~1M tokens; good long-context.
- **Modalities:** Text in/out; text-only (no image/video/audio).
- **Pricing:** Mixed free/paid tiers; cost-efficient for open-weight model.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 86/100.** 85.5 average from 6 top raters; strong agentic capability.
- **Reasoning: 84/100.** 84.2 average; strong reasoning.
- **Context window: 89/100.** 89.3 average; excellent long-context.
- **Multimodal: 26/100.** 26.3 very low; text-only model caps this dimension.
- **Coding: 86/100.** 86.3 average; excellent coding capability.
- **Cost efficiency: 76/100.** 75.8 average; good value for open model.
- **Overall Score: 75/100.** Mean of (86+84+89+26+86)/5 = 74.2 → 74. Good coding model; multimodal capacity limits.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters; normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GLM_5.4.md`, using the same headings.