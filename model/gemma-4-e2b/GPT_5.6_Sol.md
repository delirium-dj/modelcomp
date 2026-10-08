# Gemma 4 E2B — findings by GPT 5.6 Sol

- Source: Google DeepMind (`google/gemma-4-E2B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's smallest Gemma 4 edge model for phones, laptops, Raspberry Pi, and Jetson-class hardware.
- **Context window:** 128K tokens.
- **Modalities:** Text, image, and audio input; text output.
- **Size:** Approximately 2.3B effective language parameters.
- **Pricing:** Apache-2.0 open weights; hosted rates around $0.04/$0.08 per million tokens.

### Raw benchmarks found

- MMMLU **60.0%**, GPQA Diamond **43.4%**, AIME 2026 **37.5%**, and LiveCodeBench v6 **44.0%**.
- MMMU-Pro **44.2%** and Tau2 retail **29.4%** ([official Gemma 4 page](https://deepmind.google/models/gemma/gemma-4/)).

### Normalized scores (1–100)

- **Tool use: 50/100.** Function calling exists, while Tau2 29.4 shows limited agent reliability.
- **Reasoning: 50/100.** GPQA 43.4 and AIME 37.5 are useful for its tiny footprint.
- **Context window: 70/100.** 128K is generous for an edge model.
- **Multimodal: 75/100.** Native image and audio input are exceptional at this size, though benchmark accuracy is moderate.
- **Coding: 52/100.** LiveCodeBench 44 is useful for lightweight local assistance.
- **Cost efficiency: 100/100.** Tiny open weights and edge deployment maximize affordability and privacy.
- **Overall Score: 59/100.** Half-up mean of the five non-cost dimensions; optimized for local reach rather than absolute capability.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Google's official Gemma 4 benchmarks and model card; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
