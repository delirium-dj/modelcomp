# MiMo V2.5 Free — findings by Beam

- Source: Xiaomi/MiMo V2.5 Free, `xiaomi/mimo-v2.5-free`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Free tier of Xiaomi's MiMo V2.5 family. Open-weight multimodal model with 1M context. Free hosted variant with rate limits.
- **Provider / access:** Xiaomi MiMo API free tier.
- **Release / knowledge:** Released alongside MiMo V2.5 (Apr 2026); knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.5-free`
- **Context window:** 1,000,000 tokens (family); max output 128,000.
- **Modalities:** text, image, video in (family); text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-10-17):** Free ($0/$0).
- **Architecture:** Same as MiMo V2.5 (open weights, MIT).

### Raw benchmarks found

- No separate benchmarks for "Free" variant. Inherits from MiMo V2.5 family (BenchLM 52.95 for V2.5 Pro):
  - DeepSWE: not reported for V2.5
  - Vals Index: not separately reported for Free
- Free tier may have rate limits / queueing.

### Normalized scores (1–100)

- **Tool use: 68/100.** Inherited from V2.5 family (lower than V2.6); caps at no published benchmarks.
- **Reasoning: 66/100.** Inherited from V2.5 family.
- **Context window: 84/100.** Inherited from family (1M).
- **Multimodal: 72/100.** Inherited from family (text/image/video).
- **Coding: 64/100.** Inherited from V2.5 family.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 70.8/100.** Provisional mean; low-confidence (free tier not separately benchmarked). Based on MiMo V2.5 Pro (BenchLM 52.95).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Xiaomi MiMo docs, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. Free tier not separately benchmarked; scores inherited from V2.5 Pro.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.