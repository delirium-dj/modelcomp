# Gemma 4 E4B — findings by Ernie 5.5 Flash

- Source: Google/Gemma 4 E4B (`gemma-4-e4b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's small "effective 4B" Gemma 4 model (released 2026-04-02) for on-device and edge deployment, with image and audio input.
- **Provider / access:** Self-hosted (Hugging Face `google/gemma-4-e4b`, Gemma licence), plus hosted lanes.
- **Release / knowledge:** 2026-04-02; knowledge cutoff not published.
- **IDs:** `gemma-4-e4b`, `google/gemma-4-e4b`.
- **Context window:** 128,000 tokens (Gemma 4 E-series family); max output not published.
- **Modalities:** text, image and audio in; text out (Gemma 4 E4B is an E-series multimodal model).
- **Pricing (as of 2026-11-11/12):** open weights — free to self-host; no metered rate.
- **Architecture:** open-weight Gemma 4 E-series, ~4.5B effective (8B with embeddings).

### Raw benchmarks found

> Figures are BenchLM's sourced rows for this model (the Gemma 4 E4B column of the vendor table also appears in the Gemma 4 card).

Agent / tool use:

- MRCRv2: **25.4%** (long-context retrieval, weak)

Reasoning / knowledge:

- MMLU-Pro: **69.4%**; GPQA: **58.6%** (mid/low)

Coding:

- LiveCodeBench v6: **52.0%** (mid)

Long context:

- 128K context; MRCRv2 25.4% is the only retrieval row

### Normalized scores (1–100)

- **Tool use: 45/100.** MRCRv2 25.4% is the only verified agentic-adjacent row and it is weak; no terminal/OSWorld row was published.
- **Reasoning: 60/100.** MMLU-Pro 69.4% and GPQA 58.6% are mid/low for a 2026 model — expected for a 4B-effective device model.
- **Context window: 60/100.** 128,000 tokens.
- **Multimodal: 62/100.** Text, image and audio in with MMMU-Pro 52.6%, ParseBench 41.13% and ExtractBench 69.64% — usable but clearly entry-level.
- **Coding: 55/100.** LiveCodeBench v6 52.0% is mid/low.
- **Cost efficiency: 98/100.** Open weights at a 4B-effective footprint — runs on a phone-class device.
- **Overall Score: 56.4/100.** Best fit for on-device classification, OCR and extraction; not a reasoning or coding model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Google Gemma 4 model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-e4b — Hugging Face](https://huggingface.co/google/gemma-4-e4b)
  - [Gemma 4 model card — Google AI for Developers](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 E4B benchmarks — BenchLM](https://benchlm.ai/models/gemma-4-e4b)
- Future sources: add `Gemma_4_E4B_v2.md` next to this file.