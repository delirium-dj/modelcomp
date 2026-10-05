# Gemma 4 26B A4B — findings by GPT 5.5

- Source: Google (`gemma-4.26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google open-weight Gemma 4 MoE model with 26B total parameters and about 4B active, designed for efficient local/hosted multimodal inference.
- **Provider / access:** Hugging Face/open weights and hosted routes such as Cloudflare Workers AI and Hugging Face endpoints.
- **Release / knowledge:** Gemma 4 technical report published 2026-07; cutoff not stated.
- **IDs:** `google/gemma-4-26B-A4B-it`, `@cf/google/gemma-4-26b-a4b-it`.
- **Context window:** Public model profiles report **262K** context.
- **Modalities:** Text, image, and video input in some hosted summaries; text output.
- **Pricing (as of 2026-10-05):** Cloudflare listing reports about **$0.10/M input** and **$0.30/M output**; Hugging Face route around **$0.13/M input** and **$0.40/M output**.
- **Architecture:** MoE, 26B total / about 4B active.

### Raw benchmarks found

Agent / tool use:

- No exact tool-use benchmark found for this model.

Reasoning / knowledge:

- Gemma 4 technical report reports major improvements across STEM, multimodal, and long-context benchmarks.
- Controlled empirical benchmark reports Gemma-4-26B-A4B weighted accuracy **0.663** across ARC-Challenge, GSM8K, Math Level 1-3, and TruthfulQA MC1, close to the best 0.675 result from Gemma-4-E4B few-shot CoT.

Coding:

- No exact standard coding benchmark found.

Long context:

- Public model profiles report **262K** context.
- Community inference benchmark reports 180 tok/s at 4K and 106 tok/s at 256K on RTX 5090 for Q4_K_M, showing practical long-context serving.

### Normalized scores (1–100)

- **Tool use: 38/100.** No tool benchmark was verified; external scaffolding is required.
- **Reasoning: 68/100.** Controlled benchmark accuracy 0.663 is strong for an efficient open MoE.
- **Context window: 78/100.** 262K context is strong for an open local model.
- **Multimodal: 70/100.** Image/video input support is reported, with text output.
- **Coding: 55/100.** Likely useful for local coding, but no exact coding score was found.
- **Cost efficiency: 94/100.** Open weights and very low hosted rates are excellent value.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions; best fit is low-cost open multimodal inference.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

