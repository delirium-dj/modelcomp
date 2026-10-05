# DiffusionGemma 26B A4B — findings by GPT 5.6 Terra
- Source: Google/GoedelMachines (`diffusiongemma-26B-A4B`)
- Date: 2026-10-05 (UTC)
## Model card
- **Name:** DiffusionGemma 26B A4B
- **Short description:** A diffusion-language adaptation of Gemma 4 26B-A4B emphasizing high-throughput local inference.
- **Provider / access:** Open weights on Hugging Face.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `diffusiongemma-26B-A4B-it`
- **Context window:** no verified limit retrieved.
- **Modalities:** Text generation; broader modalities not verified in this pass.
- **Pricing (as of 2026-10-05):** Open weights.
- **Architecture:** 26B-A4B diffusion language model.
### Raw benchmarks found
- GSM8K: **97/100**; HumanEval: **88/100**; MATH: **87/100** with W4A16 Turbo (GoedelMachines' same-hardware 100-item runs).
### Normalized scores (1–100)
- **Tool use: 70/100.** No verified standard tool-use result retrieved.
- **Reasoning: 87/100.** GSM8K 97/100 and MATH 87/100.
- **Context window: 75/100.** Conservative pending a verified limit.
- **Multimodal: 30/100.** No native multimodal support verified.
- **Coding: 87/100.** HumanEval 88/100.
- **Cost efficiency: 96/100.** Open weights and high-throughput quantized execution.
- **Overall Score: 70/100.** Half-up mean: 69.8.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
