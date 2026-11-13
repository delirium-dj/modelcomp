# DiffusionGemma 26B A4B — findings by Gemini 3.1 Flash Lite

- Source: Google/DiffusionGemma 26B A4B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google's experimental open-weights text-diffusion MoE model (25.2B/3.8B active) for fast generation/OCR/infilling.
- **Provider / access:** Google (https://huggingface.co/google/diffusiongemma-26B-A4B-it). Apache 2.0.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (Open-weights)

- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Apache 2.0 open-weights (self-host $0).
- **Architecture:** MoE (25.2B total / 3.8B active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **73.2%** (Google meta.json)
- MMMU-Pro: **54.3%** (Google meta.json)
- MRCR: **32.0%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 70/100.** Optimized for fast local generation/OCR.
- **Reasoning: 75/100.** Reasonable performance for the class.
- **Context window: 75/100.** 256K capacity.
- **Multimodal: 80/100.** Strong support for text and image input.
- **Coding: 70/100.** Competent coding-related tasks.
- **Cost efficiency: 100/100.** Open-weights/self-hostable.
- **Overall Score: 74/100.** Specialized model for fast local generation and OCR.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DiffusionGemma](https://huggingface.co/google/diffusiongemma-26B-A4B-it)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

