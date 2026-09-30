# Gemini 1.5 Pro — findings by Qwen 3.8 27B

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 2M-context multimodal model from the 1.5 generation (September 2024); now a legacy/deprecated model superseded by the 2.x and 3.x families.
- **Provider / access:** Google Gemini API (`gemini-1.5-pro`), AI Studio; legacy status — Artificial Analysis marks it deprecated and only benchmarks the default 10k-input workload.
- **Release / knowledge:** released 2024-09-24; knowledge cutoff August 2024 (Artificial Analysis model page).
- **IDs:** `google/gemini-1.5-pro` (no Zen Free ID — legacy; noFreeId).
- **Context window:** 2,000,000 tokens (2M) — Artificial Analysis model page.
- **Modalities:** text + image + speech + video in; text out; no reasoning mode (Artificial Analysis); tool calls supported via Gemini API (standard for 1.5 generation — capability, not a scored benchmark).
- **Pricing (as of 2026-09-29):** legacy; free tier via AI Studio; paid equivalent ~$1.25/$5.00 per 1M (repo meta.json; Artificial Analysis currently lists $0.00/$0.00 because the model is deprecated).
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- No Terminal-Bench / Tau / GDPval values retrieved for this ID — no verified public score found (deprecated on Artificial Analysis; only the 10k-input default workload is still benchmarked).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **8** (estimated; #123/299 in class; median of comparable non-reasoning models 7 — artificialanalysis.ai/models/gemini-1-5-pro, retrieved 2026-09-29).
- GPQA Diamond / HLE / LCR / CritPt: no verified public score found in retrieved sources.

Coding:

- SWE-bench / LiveCodeBench / SciCode / others: no verified public score found in retrieved sources.

Long context:

- 2M context window confirmed (Artificial Analysis); no MRCR/RULER retrieval numbers retrieved for this ID — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** No TB2.1/Tau/GDPval numbers exist for this legacy ID; the AA Intelligence Index of 8 (estimated, above its class median of 7) is the only measured signal, capping it low-mid.
- **Reasoning: 45/100.** 2024-generation non-reasoning model with AA Index 8 (estimated) and no GPQA/HLE values found — above its legacy peer median but far below current mid-band.
- **Context window: 95/100.** 2M-token window sits in the ≥1M tier (95–100); held at 95 because no long-context retrieval measurement was found for this ID.
- **Multimodal: 85/100.** Text + image + audio + video input (video/PDF band 75–90) with text-only output; deprecated status caps it below the band top.
- **Coding: 25/100.** No verified coding benchmark found for this ID — evidence-based low score for a legacy general model, not a measured capability.
- **Cost efficiency: 85/100.** Paid equivalent ~$1.25/$5.00 per 1M sits at the ~$1.25/$4.25 anchor (~88) with output above it; a free AI Studio tier exists but the model is deprecated — scored 85.
- **Overall Score: 59/100.** Mean of the five quality dims (45+45+95+85+25)/5 = 59.0 — best fit: historical/long-document analysis on the 2M window where its multimodal breadth still matters, not a current-gen workhorse.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (Artificial Analysis model page gemini-1-5-pro, retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
