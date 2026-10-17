# Gemini 3.5 Flash-Lite — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (cheapest Gemini 3 tier; released alongside 3.6 Flash and the limited-access 3.5 Flash Cyber)
- **Short description:** Google's July 2026 budget tier: natively multimodal (text/image/audio/video/PDF), 1M context, ~350 tok/s — and notably the first Flash-Lite that is genuinely usable for terminal-style agents, beating the older, larger Gemini 3 Flash on SWE-Bench Pro and OSWorld-Verified. BenchLM ranks it #91 of 889 (51.63). The 2026-10-05 enrichment pass added an independent SWE-bench Verified run.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.5-flash-lite`; also AI Studio, Gemini app, Search AI Overviews. `generateContent` API; model card PDF on storage.googleapis.com.
- **Release / knowledge:** released 2026-07-21 (succeeds Gemini 3.1 Flash-Lite). Knowledge cutoff **March 2026** — the freshest in the Flash-Lite line.
- **IDs:** `gemini-3.5-flash-lite` (Google). Free tier available with usage limits.
- **Context window:** 1,000,000-token input (BenchLM concurs), 64,000-token max output (ai-tldr spec block).
- **Modalities:** text, image, audio, video, PDF in; text out. Reasoning yes (natively multimodal Gemini 3 model); tool calling yes.
- **Pricing (as of 2026-10-11):** $0.30 in / $2.50 out per 1M (output includes thinking tokens), cached input $0.03/1M, context-cache storage $1.00/1M/hr; free tier with usage limits. Roughly 2.5× the 3.1 Flash-Lite list price but still near the repo's cheapest paid band.
- **Architecture:** proprietary, parameters undisclosed; ~350 output tok/s on AA's index (median for its price tier ≈107 t/s).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google launch blog via benchlm.ai — corroborated); Vals independent: **50.2%**
- OSWorld-Verified: **74%** (Google launch blog — beats the larger Gemini 3 Flash's 65.1%)
- GDPval-AA: **1139 Elo** (Google launch blog; AA-normalized **24.3%**)
- AA Agentic Index: **15.9%** (AA — weak)
- Tau2/Tau3/BFCL/Claw: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA, independent; Vals **83.8%** — fills the gap, decent for the tier)
- AA-HLE: **18.8%** (AA — fills the HLE gap; weak); CritPt: **0.0%** (AA — floor)
- Artificial Analysis Intelligence Index: **22.2** (AA current board) — **conflicts with the "36" launch-era reading the 2026-10-05 pass cited**; board recomposition accounts for the difference
- AA-LCR v1.1: **76.0%** (AA — fills the long-context gap); MRCR v2: **72.2%** (Google launch row — corroborated)
- AA-Omniscience: **29.5% accuracy / 34.4% non-hallucination row / 5.2 index** (AA — weak)
- MMLU-Pro: **85.8%** (Vals)

Coding:

- LiveCodeBench (Vals): **79.0%** (Vals, independent — fills the LiveCodeBench gap)
- SWE-bench (Vals): **75.0%** (Vals — corroborates the 75.00% Verified run from the prior pass)
- SWE-bench Pro (Public): **54.2%** (Google launch blog — corroborated)
- AA Coding Index: **49.3%** (AA); AA-SciCode: **41.3%** (AA — fills the gap)
- SciCode (vendor harness): no verified public score found

Long context:

- MRCR v2: **72.2%** (Google) and AA-LCR **76.0%** (AA) — the best-evidenced 1M package among the cheap tiers; 1M in / 64K out

Multimodal:

- AA-MMMU-Pro: **79.0%** (AA, independent — first measured vision evidence, solid for the tier)

### Normalized scores (1–100)

- **Tool use: 70/100.** (Was 76 on the prior pass.) OSWorld-Verified 74% remains the standout and TB2.1 54% is corroborated (Vals 50.2%), but GDPval normalized 24.3% and AA Agentic Index 15.9% document the budget-tier ceiling.
- **Reasoning: 68/100.** (Was 72 on the prior pass.) GPQA 83.8% (two sources) and AA-LCR 76.0% fill gaps positively, but the AA Index recomposed from the cited 36 to 22.2, with AA-HLE 18.8% and CritPt 0.0% — the independent board moves the score down.
- **Context window: 98/100.** 1M input with measured long-context retrieval on two independent sources (MRCR v2 72.2%, AA-LCR 76.0%) — the best-evidenced 1M package among the cheap tiers; 64K output cap.
- **Multimodal: 85/100.** Full omni input (text/image/audio/video/PDF) now backed by measured vision (AA-MMMU-Pro 79.0%); text-only output.
- **Coding: 80/100.** (Was 84 on the prior pass.) Vals LiveCodeBench 79.0% and SWE-bench 75.0% corroborate the mid-frontier coding story, but AA Coding Index 49.3% and AA-SciCode 41.3% on the 2026 boards pull it down a band.
- **Cost efficiency: 92/100.** Free tier + $0.30/$2.50 with a $0.03 cache rate; docked for costing ~2.5× its 3.1 Flash-Lite predecessor at list.
- **Overall Score: 80.2/100.** (Was 83.0 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (70 + 68 + 98 + 85 + 80) / 5 = 401/5 = 80.2 — lowered on the 2026-10-11 second pass as the recomposed AA board corrects the launch-era reasoning claim, even as GPQA/LCR/LiveCodeBench/vision gaps filled. Best fit: default cheap 2026 workhorse — high-volume multimodal ingestion and budget agent loops with independently verified coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Google launch blog, Vals AI leaderboards, Artificial Analysis model benchmarks via benchlm.ai, plus the prior 2026-09-18/10-05 passes; 2026-10-16 re-check: BenchLM 26-row refresh corroborates all rows (FrontierMath v2 25.97/0.0 added) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
