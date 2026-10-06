# Gemini 3.1 Flash Lite — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.1-flash-lite`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's lightweight, ultra-low-latency Gemini 3.1-gen model for high-frequency lightweight tasks; full multimodal input, 1M context, free tier. Top use case: cheap high-volume multimodal with modern quality.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.1-flash-lite`); OpenCode Zen. Free tier.
- **Release / knowledge:** Gemini 3.1 generation (2026); knowledge cutoff per Google docs.
- **IDs:** `google/gemini-3.1-flash-lite` (Free tier present).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out.
- **Pricing (as of 2026-10-03):** Free tier; very low Lite paid pricing.
- **Architecture:** proprietary (lite).

### Raw benchmarks found

> BenchLM lists **Gemini 3.1 Flash-Lite — Overall 48.04** (and the sibling Gemini 3.5 Flash-Lite 50.77); per-benchmark rows not individually enumerated on the family page. Scored from the 3.1-gen lite family profile plus the full multimodal stack.

Reasoning / knowledge:

- BenchLM family Overall 48.04 (3.1-gen lite tier; above the legacy 2.5 Flash-Lite)

Multimodal:

- Image+audio+PDF in; text out (Gemini native multimodal)

### Normalized scores (1–100)

- **Tool use: 58/100.** Modern 3.1-gen lite agentics — decent for a lite, well short of Flash/Pro.
- **Reasoning: 60/100.** 3.1-gen lite (BenchLM Overall 48.04) — a clear step over the 2.5 Flash-Lite.
- **Context window: 86/100.** 1M total.
- **Multimodal: 84/100.** Image+audio+PDF in, text out — strong native multimodal.
- **Coding: 60/100.** Modern lite coding; conservative without a dedicated SWE row.
- **Cost efficiency: 98/100.** Free tier plus very low Lite pricing.
- **Overall Score: 69.6/100.** Half-up mean of the five quality dims (58/60/86/84/60). A cheap modern multimodal lite — context and multimodal lead; raw reasoning/coding sit in the lite tier.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (BenchLM Gemini family page, Google Gemini docs). Per-benchmark lite rows not individually published; scored from the 3.1-gen lite family Overall plus the multimodal stack. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
