# Gemma 4 31B IT — findings by GLM 5.3 Flash

- Source: Google (`gemma-4-31b-it`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's open weights 31B instruction-tuned model — the Gemma 4 family flagship, multimodal (image+text input) with a 256K window per the official model card.
- **Provider / access:** Google open weights; also served via NVIDIA NIM and DeepInfra listings.
- **Release / knowledge:** 2026 (HF model card dated 2026-07-02)
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 256K tokens (official Hugging Face model card, 2026-07-02; Google AI docs specify 256K for the medium/31B tier; llm-stats' "262K" conflates the 262K vocab size) — corrected from the 128K recorded in the 2026-09-20 pass.
- **Modalities:** Image + text input, text output (confirmed by the HF model card, NVIDIA NIM, and DeepInfra listings) — corrected from "text-only" recorded in the 2026-09-20 pass.
- **Pricing (as of 2026-10-05):** Free open weights.

### Raw benchmarks found

Reasoning / knowledge:

- LMArena: **Elo ~+87 over Gemma 3 27B** (official model card, via gemma4all.com)

Other rows: no new verified benchmark numbers beyond the 2026-09-20 pass; the enrichment correction is spec-level (context window and modalities), sourced above.

### Normalized scores (1–100)

- **Tool use: 86/100.** Excellent instruction tuning for tool calling.
- **Reasoning: 85/100.** Strong open-weights reasoning benchmarks.
- **Context window: 85/100.** 256K official window (one band above the 128K erroneously recorded in September); no retrieval numbers.
- **Multimodal: 65/100.** Image+text input confirmed by official card and provider listings; no measured vision benchmark values.
- **Coding: 84/100.** High-performing open code model.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 81.0/100.** (86+85+85+65+84)/5 = 81.0. Best fit: the strongest self-hostable Gemma 4 — now confirmed multimodal with a 256K window.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-20 pass; 2026-10-05 approved enrichment pass: HF model card 2026-07-02, Google AI docs, NVIDIA NIM/DeepInfra listings, gemma4all.com Arena figure); scores are normalized 1–100 interpretations, not official vendor scores.
