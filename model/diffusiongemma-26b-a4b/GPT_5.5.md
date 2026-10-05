# DiffusionGemma 26B A4B — findings by GPT 5.5

- Source: Google (`diffusiongemma-26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google Gemma-family diffusion language model, comparing a 26B-A4B diffusion-style model against Gemma 4 26B A4B.
- **Provider / access:** Google AI for Developers model card and Gemma-family distribution routes.
- **Release / knowledge:** Public model card crawled in 2026; cutoff not stated.
- **IDs:** `diffusiongemma-26b-a4b`.
- **Context window:** Model card includes long-context benchmark sections, but exact deployed context ceiling was not recovered.
- **Modalities:** Text-focused diffusion language model; no verified native multimodal support for this exact entry.
- **Pricing (as of 2026-10-05):** Open/research-style Gemma distribution; no canonical per-token API price found.
- **Architecture:** Diffusion-style Gemma-family model with 26B total / 4B active scale.

### Raw benchmarks found

Agent / tool use:

- No exact tool-use benchmark found.

Reasoning / knowledge:

- Google DiffusionGemma model card contains benchmark tables comparing **DiffusionGemma 26B A4B** with **Gemma 4 26B A4B**.
- Exact numeric rows were not visible in the search snippets used here.

Coding:

- No exact standard coding benchmark found.

Long context:

- Model card contains a long-context section, but no exact context ceiling or score was recovered from accessible snippets.

### Normalized scores (1–100)

- **Tool use: 30/100.** No tool benchmark or mature tool-serving story was verified.
- **Reasoning: 58/100.** First-party model-card benchmark presence supports moderate capability, but exact values were not recovered.
- **Context window: 55/100.** Long-context evaluation exists, but deployed context details are unclear.
- **Multimodal: 15/100.** No native multimodal capability was verified.
- **Coding: 45/100.** No direct coding benchmark found.
- **Cost efficiency: 88/100.** Open Gemma-family access and active-parameter efficiency should be inexpensive to run.
- **Overall Score: 41/100.** Half-up mean of the five quality dimensions; best fit is research comparison of diffusion language modeling rather than production agent use.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

