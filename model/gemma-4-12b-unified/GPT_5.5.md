# Gemma 4 12B Unified — findings by GPT 5.5

- Source: Google (`gemma-4.12b-unified`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google open-weight Gemma 4 12B model using a unified encoder-free multimodal architecture for text, image patches, and raw audio.
- **Provider / access:** Hugging Face/open weights (`google/gemma-4-12B`) and local/third-party serving.
- **Release / knowledge:** Gemma 4 technical report published 2026-07; cutoff not stated.
- **IDs:** `google/gemma-4-12B`, `gemma-4-12b-unified`.
- **Context window:** Public model card includes long-context benchmark rows but exact context limit was not recovered from snippets; family reports emphasize long-context improvements.
- **Modalities:** Text, image, and audio input through the 12B unified architecture; text output.
- **Pricing (as of 2026-10-05):** Open weights; no canonical API price.
- **Architecture:** 12B unified encoder-free Gemma 4 model; Gemma 4 suite spans dense and MoE designs.

### Raw benchmarks found

Agent / tool use:

- No verified exact tool-use benchmark found for 12B Unified.

Reasoning / knowledge:

- Hugging Face model card includes benchmark tables comparing Gemma 4 31B, 26B-A4B, 12B Unified, E4B, E2B, and Gemma 3 27B.
- Gemma 4 technical report states Gemma 4 makes gains across STEM, multimodal, and long-context benchmarks.

Coding:

- No exact SWE-bench/LiveCodeBench value found for 12B Unified.

Long context:

- Technical report highlights long-context benchmark improvements; exact 12B context ceiling not recovered in accessible snippets.

### Normalized scores (1–100)

- **Tool use: 35/100.** No exact tool benchmark or first-party tool stack was verified.
- **Reasoning: 60/100.** Strong for a 12B open model, but below larger Gemma 4 variants and frontier models.
- **Context window: 62/100.** Family long-context work is documented, but exact ceiling for this entry was not recovered.
- **Multimodal: 72/100.** Unified raw audio and image-patch input architecture is a genuine strength.
- **Coding: 50/100.** Usable small open coding model, but no exact coding benchmark was verified.
- **Cost efficiency: 92/100.** Open weights and 12B size make deployment inexpensive.
- **Overall Score: 56/100.** Half-up mean of the five quality dimensions; best fit is local multimodal experimentation at modest size.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

