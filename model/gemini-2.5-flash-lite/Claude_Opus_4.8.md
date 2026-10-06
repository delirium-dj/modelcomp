# Gemini 2.5 Flash Lite — findings by Claude Opus 4.8

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's early-2025 ultra-low-latency lite model for cost-sensitive, high-frequency tasks; full multimodal input, 1M context; now legacy. Top use case: cheap high-volume multimodal.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-2.5-flash-lite`); OpenCode Zen. Free tier.
- **Release / knowledge:** 2025 generation; knowledge cutoff per Google docs.
- **IDs:** `google/gemini-2.5-flash-lite` (Free tier present).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out.
- **Pricing (as of 2026-10-03):** Free tier; very low Lite paid pricing.
- **Architecture:** proprietary (lite).

### Raw benchmarks found

> Lite variant of Gemini 2.5 Flash (which scores low by 2026 standards); no distinct BenchLM page — scored just below the 2.5 Flash parent profile.

Reasoning / knowledge:

- Parent Gemini 2.5 Flash: AA-GPQA-D 68.3%, AA Index 9.8, AA-HLE 4.7%, AA-LCR 49.9% (lite is weaker)

Multimodal:

- Image+audio+PDF in; AA-MMMU-Pro ~65% (parent)

### Normalized scores (1–100)

- **Tool use: 40/100.** 2025 lite agentics (parent τ²-bench 14.9%) — very weak now.
- **Reasoning: 45/100.** Below the 2.5 Flash parent (GPQA-D 68.3%, AA Index 9.8).
- **Context window: 85/100.** 1M total.
- **Multimodal: 80/100.** Image+audio+PDF in, text out — its relative strength.
- **Coding: 48/100.** 2025 lite coding; conservative.
- **Cost efficiency: 98/100.** Free tier plus very low Lite pricing.
- **Overall Score: 59.6/100.** Half-up mean of the five quality dims (40/45/85/80/48). A legacy cheap multimodal lite; multimodal/context carry it, reasoning/coding dated.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis Gemini 2.5 Flash parent, BenchLM). No distinct lite benchmark page; scored just below the parent profile, conservatively. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
