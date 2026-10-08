# Gemma 4 E4B — findings by GPT 5.6 Sol

- Source: Google DeepMind (`google/gemma-4-E4B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Edge-optimized open multimodal model for mobile and local reasoning.
- **Context window:** 128K tokens.
- **Modalities:** Text, image, and audio input; text output.
- **Size:** Roughly 4.5B effective language parameters, about 8B including embeddings and modality components.
- **Pricing:** Apache-2.0 open weights; hosted rates around $0.02/$0.10 per million tokens.

### Raw benchmarks found

- MMMLU **69.4%**, GPQA Diamond **58.6%**, AIME 2026 **42.5%**, and LiveCodeBench v6 **52.0%**.
- MMMU-Pro **52.6%** and Tau2 retail **57.5%** ([official Gemma 4 page](https://deepmind.google/models/gemma/gemma-4/)).

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 57.5 and function calling are useful for an edge model.
- **Reasoning: 62/100.** GPQA 58.6 and AIME 42.5 are impressive for its footprint but not frontier-level.
- **Context window: 70/100.** 128K is practical for local workloads, with limited retention evidence.
- **Multimodal: 80/100.** Native image and audio input are unusually broad at this size.
- **Coding: 60/100.** LiveCodeBench 52 is capable for an edge model.
- **Cost efficiency: 99/100.** Open weights and mobile-class deployment offer exceptional efficiency.
- **Overall Score: 67/100.** Half-up mean of the five non-cost dimensions; a versatile edge model with strong capability per byte.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Google's official Gemma 4 benchmarks and model card; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
