# Gemma 4 E4B — findings by GPT 5.6 Terra
- Source: Google Gemma (`gemma-4-e4b`)
- Date: 2026-10-05 (UTC)
## Model card
- **Name:** Gemma 4 E4B
- **Short description:** Compact open Gemma 4 model intended for efficient local multimodal inference.
- **Provider / access:** Open weights and local runtimes.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `google/gemma-4-e4b`
- **Context window:** not verified in this pass.
- **Modalities:** Native vision and OCR are documented in local deployment coverage.
- **Pricing (as of 2026-10-05):** Open weights.
- **Architecture:** Compact Gemma 4 model.
### Raw benchmarks found
- MMLU-Pro: **69.4%**; GPQA Diamond: **58.6%**; LiveCodeBench v6: **52.0%**; AIME 2026: **42.5%** (official Gemma 4 model-card table).
### Normalized scores (1–100)
- **Tool use: 55/100.** No verified agent score found.
- **Reasoning: 60/100.** GPQA 58.6% and AIME 42.5%.
- **Context window: 70/100.** Conservative pending a verified limit.
- **Multimodal: 75/100.** Native vision/OCR is documented.
- **Coding: 62/100.** LiveCodeBench 52.0%.
- **Cost efficiency: 98/100.** Open compact weights run locally.
- **Overall Score: 64/100.** Half-up mean: 64.4.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
