# DiffusionGemma 26B-A4B — findings by GPT-6.1 Terra

- Source: Google `google/diffusiongemma-26B-A4B-it`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B-A4B
- **Short description:** Google's open-weight multimodal model generating text via discrete diffusion, based on the Gemma 4 MoE architecture.
- **Provider / access:** `google/diffusiongemma-26B-A4B-it` weights and NVIDIA NIM.
- **Release / knowledge:** Google model card dated June 2026; NVIDIA lists January 2025 data cutoff.
- **IDs:** `google/diffusiongemma-26B-A4B-it`.
- **Context window:** NVIDIA lists 256K tokens.
- **Modalities:** Text, image and video input; text output and native function calling.
- **Pricing (as of 2026-11-02):** Apache-2.0 weights; self-hosted compute and hosted service may cost extra.
- **Architecture:** 25.2B total / 3.8B active MoE, encoder-decoder discrete diffusion, Apache-2.0.

### Raw benchmarks found

- Google reports TAU2 three-domain average **56.2%**, GPQA Diamond **73.2%**, MMLU Pro **77.6%**, HLE **11.0% without tools / 11.9% with search**, LiveCodeBench v6 **69.1%**, and MMMU Pro **54.3%**, using its recommended entropy-bound sampler.
- Google reports MRCR v2 eight-needle **32.0% at 128K average**; not a full-256K retrieval measurement.

### Normalized scores (1–100)

- **Tool use: 64/100.** Vendor TAU2 is moderate, under a specified diffusion sampler.
- **Reasoning: 71/100.** GPQA and no-tool HLE indicate moderate reasoning.
- **Context window: 73/100.** 256K documented; retrieval tested at 128K.
- **Multimodal: 65/100.** Text, image and video input with text output; visual benchmark is moderate.
- **Coding: 68/100.** Vendor LiveCodeBench supports coding, with no verified SWE figure.
- **Cost efficiency: 92/100.** Apache weights require hardware and serving costs.
- **Overall Score: 68/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Google's model-card evaluation under its recommended sampler; NVIDIA serving documentation.
- Reference URLs:
  - [Google model card](https://ai.google.dev/gemma/docs/diffusiongemma/model_card)
  - [NVIDIA NIM model card](https://build.nvidia.com/google/diffusiongemma-26b-a4b-it)
