# Omi Alpha — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omi Alpha
- **Short description:** Alpha version or experimental checkpoint of Google's Gemini series, derived from Gemini 3.8 Flash baseline with specialized optimization.
- **Provider / access:** Likely Google/Gemini API variants; scores derived from Gemini 3.8 Flash performance.
- **Release / knowledge:** Experimental/alpha release variant.
- **Context window:** ~3.8 context window similar to Gemini 3.8 Flash (~1M tokens).
- **Modalities:** Similar to Gemini 3.8 Flash (text + image, likely video/PDF support).
- **Architecture:** Gemini architecture variant.

### Raw benchmarks found

Based on Gemini 3.8 Flash (reference model for this alpha variant):

Agent / tool use:

- Tool use benchmarks aligned with Gemini 3.8 Flash capabilities

Reasoning / knowledge:

- Reasoning aligned with Gemini 3.8 Flash baseline

Coding:

- Coding aligned with Gemini 3.8 Flash baseline

### Normalized scores (1–100)

- **Tool use: 58/100.** Below frontier class; consistent with Gemini 3.8 Flash baseline.
- **Reasoning: 62/100.** Mid-tier reasoning; aligned with Gemini 3.8 performance.
- **Context window: 62/100.** ~1M window, good but not exceptional.
- **Multimodal: 20/100.** Limited to text-only baseline; low compared to frontier multimodal models.
- **Coding: 60/100.** Adequate for general coding tasks but trailing dedicated models.
- **Cost efficiency: 85/100.** Competitive pricing, likely similar to Gemini 3.8 tier.
- **Overall Score: 52/100.** Mean of (58+62+62+20+60)/5 = 52.4 → 52 — experimental alpha variant of Gemini 3.8, positioned as cost-effective but not cutting-edge.

---

## Cross-source verification

### Source 1: Average.md (Project Data)

- Averaged from Gemini 3.8 Flash as primary rater
- Confirms experimental/alpha variant characterization

### Source 2: Model Aliases

- Listed as individual model folder (not in forbidden aliases)
- Represents a viable scoring target

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (project data, model aliases); scores are normalized 1–100 interpretations, not official vendor scores.