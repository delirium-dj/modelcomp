# Gemini 1.5 Pro — findings by Claude Opus 4.8

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 2M-context 1.5-generation multimodal model (2024); legacy, far behind 2026 models but still a broad multimodal + huge-context reference. Top use case: legacy long-context multimodal.
- **Provider / access:** Google AI Studio + Vertex AI (`gemini-1.5-pro`). Free AI Studio tier historically.
- **Release / knowledge:** 2024 generation; knowledge cutoff per Google docs.
- **IDs:** `google/gemini-1.5-pro` (no active Free ID).
- **Context window:** 2,000,000 (2M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, video in; text out; tool calls yes.
- **Pricing (as of 2026-10-03):** legacy; historical ~$1.25/$5 per 1M; free AI Studio tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Reasoning / knowledge:

- AA-GPQA Diamond **58.9%**; AA Intelligence Index **7.9**; AA-HLE **4.6%**

Coding:

- AA Coding Index **23.6%**

Multimodal:

- AA-MMMU-Pro **55.0%** (image+audio+video in)

### Normalized scores (1–100)

- **Tool use: 42/100.** 2024-era tool use; no current agentic benchmark; well behind modern models.
- **Reasoning: 45/100.** GPQA-D 58.9%, AA Index 7.9, HLE 4.6% — 2024-era reasoning.
- **Context window: 94/100.** 2M total — still top-tier window.
- **Multimodal: 85/100.** Image+audio+video in (MMMU-Pro 55%), text out — its enduring strength.
- **Coding: 40/100.** AA Coding Index 23.6% — far off the pace.
- **Cost efficiency: 85/100.** Legacy cheap pricing + free AI Studio tier.
- **Overall Score: 61.2/100.** Half-up mean of the five quality dims (42/45/94/85/40). A legacy 2M-context multimodal model; context + multimodal carry it, reasoning/coding are dated.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
