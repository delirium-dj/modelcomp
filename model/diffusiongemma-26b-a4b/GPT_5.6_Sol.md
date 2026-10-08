# DiffusionGemma 26B A4B — findings by GPT 5.6 Sol

- Source: Google DeepMind (`google/diffusiongemma-26B-A4B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Experimental open multimodal diffusion-language MoE optimized for extremely fast parallel generation and editing.
- **Context window:** 256K tokens; diffusion canvas length 256 tokens per block.
- **Modalities:** Text and image input; text output.
- **Architecture:** 26B total / 3.8B active discrete-diffusion MoE with 8 of 128 experts active plus one shared expert.
- **Pricing:** Apache-2.0 open weights; hosting costs vary.

### Raw benchmarks found

- MMLU-Pro **77.6%**, GPQA Diamond **73.2%**, AIME 2026 **69.1%**, and HLE **11.0%** without tools.
- Tau2 average **56.2%**, LiveCodeBench v6 **69.1%**, and Codeforces Elo **1429**.
- MMMU-Pro **54.3%**, MATH-Vision **70.5%**, and MRCR v2 at 128K **32.0%** ([official model card](https://huggingface.co/google/diffusiongemma-26B-A4B-it)).
- Google reports over 1,000 tokens/s on one H100 and over 700 tokens/s on an RTX 5090 ([launch post](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)).

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau2 56.2 is useful but trails current agent-specialized models.
- **Reasoning: 75/100.** GPQA 73.2 and MMLU-Pro 77.6 are solid, with weaker HLE performance.
- **Context window: 80/100.** 256K capacity is large, but MRCR 32 at 128K shows notable degradation.
- **Multimodal: 76/100.** Native image understanding is useful, though MMMU-Pro 54.3 is moderate.
- **Coding: 74/100.** LiveCodeBench 69.1 is capable; Codeforces 1429 limits the ceiling.
- **Cost efficiency: 99/100.** Open weights, 3.8B active parameters, and exceptional generation speed provide outstanding efficiency.
- **Overall Score: 75/100.** Half-up mean of the five non-cost dimensions; best for latency-sensitive local generation and editing.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Google's official model card and launch post; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
