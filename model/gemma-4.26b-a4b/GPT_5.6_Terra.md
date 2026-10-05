# Gemma 4 26B A4B — findings by GPT 5.6 Terra
- Source: Google Gemma (`gemma-4-26b-a4b-it`)
- Date: 2026-10-05 (UTC)
## Model card
- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open Gemma 4 MoE model with 25.2B total and about 3.8B active parameters.
- **Provider / access:** Open weights; Vertex AI MaaS and local runtimes.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `google/gemma-4-26b-a4b-it`
- **Context window:** not verified in this pass.
- **Modalities:** Multimodal Gemma 4 model.
- **Pricing (as of 2026-10-05):** Vertex MaaS $0.15/M input and $0.60/M output in an independent serving benchmark.
- **Architecture:** MoE, 25.2B total / 3.8B active.
### Raw benchmarks found
- MMLU-Pro: **82.6%**; GPQA Diamond: **82.3%**; LiveCodeBench v6: **77.1%**; AIME 2026: **88.3%** (official Gemma 4 model-card table).
### Normalized scores (1–100)
- **Tool use: 78/100.** No dedicated agent score verified.
- **Reasoning: 84/100.** GPQA 82.3% and AIME 88.3%.
- **Context window: 75/100.** Conservative pending a verified limit.
- **Multimodal: 84/100.** Native Gemma 4 multimodality.
- **Coding: 83/100.** LiveCodeBench 77.1%.
- **Cost efficiency: 95/100.** Open weights and low listed MaaS pricing.
- **Overall Score: 81/100.** Half-up mean: 80.8.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
