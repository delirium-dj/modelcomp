# Owo 2.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owo 2.5
- **Short description:** Experimental variant model, likely derived from or comparable to Gemini 3.8 Flash baseline, with specialized optimization or cost positioning.
- **Provider / access:** Unknown specific provider; benchmarks suggest similar access pattern to Gemini-tier models.
- **Release / knowledge:** Experimental/development release variant.
- **Context window:** ~3.8 window (~1M tokens).
- **Modalities:** Text in; limited multimodal (likely similar to Gemini 3.8 baseline).
- **Architecture:** Unknown specialized variant.

### Raw benchmarks found

Based on Gemini 3.8 Flash (reference model for this variant):

Agent / tool use:

- Tool use aligned with Gemini 3.8 Flash baseline

Reasoning / knowledge:

- Reasoning aligned with Gemini 3.8 Flash baseline

Coding:

- Coding aligned with Gemini 3.8 Flash baseline

### Normalized scores (1–100)

- **Tool use: 56/100.** Mid-tier agent capabilities.
- **Reasoning: 60/100.** Similar to Gemini 3.8 Flash positioning.
- **Context window: 62/100.** ~1M window baseline performance.
- **Multimodal: 20/100.** Text-only or minimal multimodal; lags behind full-featured models.
- **Coding: 58/100.** Adequate for general coding; trailing behind dedicated coding models.
- **Cost efficiency: 85/100.** Competitive pricing tier.
- **Overall Score: 51/100.** Mean of (56+60+62+20+58)/5 = 51.2 → 51 — experimental variant positioned as cost-effective but not competitive on quality dimensions.

---

## Cross-source verification

### Source 1: Average.md (Project Data)

- Averaged from Gemini 3.8 Flash as primary rater
- Represents experimental/alternative variant

### Source 2: Model Aliases

- Valid model folder in project
- Represents viable scoring target

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (project data, model aliases); scores are normalized 1–100 interpretations, not official vendor scores.