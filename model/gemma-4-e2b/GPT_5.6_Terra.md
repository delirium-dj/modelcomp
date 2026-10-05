# Gemma 4 E2B — findings by GPT 5.6 Terra
- Source: Google Gemma (`gemma-4-e2b`)
- Date: 2026-10-05 (UTC)
## Model card
- **Name:** Gemma 4 E2B
- **Short description:** The smallest open Gemma 4 model for highly constrained local inference.
- **Provider / access:** Open weights and local runtimes.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `google/gemma-4-e2b`
- **Context window:** not verified in this pass.
- **Modalities:** Gemma 4 multimodal family.
- **Pricing (as of 2026-10-05):** Open weights.
- **Architecture:** Compact 2B-class model.
### Raw benchmarks found
- MMLU-Pro: **60.0%**; GPQA Diamond: **43.4%**; LiveCodeBench v6: **44.0%**; AIME 2026: **37.5%** (official Gemma 4 model-card table).
### Normalized scores (1–100)
- **Tool use: 45/100.** No verified agent benchmark found.
- **Reasoning: 47/100.** GPQA 43.4% and AIME 37.5%.
- **Context window: 65/100.** Conservative pending a verified limit.
- **Multimodal: 68/100.** Gemma 4 family multimodality, with limited size headroom.
- **Coding: 53/100.** LiveCodeBench 44.0%.
- **Cost efficiency: 100/100.** Tiny open weights are unusually economical locally.
- **Overall Score: 56/100.** Half-up mean: 55.6.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
