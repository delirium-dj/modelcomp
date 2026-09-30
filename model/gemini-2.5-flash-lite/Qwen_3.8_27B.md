# Gemini 2.5 Flash Lite — findings by Qwen 3.8 27B

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-low-latency, very-cheap multimodal model (June 2025, non-reasoning); 1M context, 287 tok/s; now deprecated in favor of the 2.5 Flash-Lite Preview (Sep '25) line.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash-lite`), AI Studio; deprecated status on Artificial Analysis (default 10k-input workload only).
- **Release / knowledge:** released 2025-06-17; knowledge cutoff January 2025 (Artificial Analysis model page).
- **IDs:** `google/gemini-2.5-flash-lite` (free tier via AI Studio / OpenCode Zen per meta.json).
- **Context window:** 1,048,576 (1M) tokens (Artificial Analysis; matches meta.json).
- **Modalities:** text + image + speech + video in; text out; non-reasoning; tool calls supported via Gemini API (capability, not a scored benchmark).
- **Pricing (as of 2026-09-29):** $0.10/M input, $0.40/M output, 90% cache discount (blended 7:2:1 ≈ $0.07/M — Artificial Analysis); free tier on AI Studio / Zen (standard rate limits).
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- No Terminal-Bench / Tau / GDPval values retrieved for this ID — no verified public score found (deprecated on AA).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **7** (estimated; #56/75 in class; below the class median of 9 — artificialanalysis.ai/models/gemini-2-5-flash-lite, retrieved 2026-09-29).
- GPQA / HLE / LCR / CritPt: no verified public score found in retrieved sources.

Coding:

- SWE-bench / LiveCodeBench / SciCode / others: no verified public score found in retrieved sources.

Long context:

- 1M window confirmed (Artificial Analysis); no MRCR/RULER retrieval numbers retrieved.

### Normalized scores (1–100)

- **Tool use: 40/100.** No agentic benchmark numbers exist for this deprecated ID; AA Index 7 (below its class median 9) is the only measured signal.
- **Reasoning: 40/100.** Explicitly non-reasoning, 2025-lite generation with AA Index 7 — well below the mid band.
- **Context window: 95/100.** 1M window in the top tier (95–100); held at the band floor pending any retrieval measurement.
- **Multimodal: 85/100.** Text + image + audio + video input (video band 75–90), text-only output; deprecated status caps it below the band top.
- **Coding: 25/100.** No verified coding benchmark found for this ID — evidence-based low score, not a measured capability.
- **Cost efficiency: 97/100.** $0.10/$0.40 per 1M (blended ~$0.07) sits in the ~$0.10/$0.20 tier (97–99) with cheap output; a free AI Studio/Zen tier also exists.
- **Overall Score: 57/100.** Mean of the five quality dims (40+40+95+85+25)/5 = 57.0 — best fit: high-volume, ultra-cheap, low-latency multimodal extraction/classification at 1M context; not a reasoning or agent model.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (Artificial Analysis model page gemini-2-5-flash-lite, retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
