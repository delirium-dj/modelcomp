# Gemini 3.6 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.6 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: model-card table added, scores recomputed 83 → 84); re-research pass 2026-10-07 adds AA/Vals/BenchLM third-party confirmations, scores recomputed 84 → 87
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (Google advanced 3.6)
- **Short description:** Google's advanced 3.6 Flash model with improved reasoning.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.6-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-21 release (model card); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3.6-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, video, PDF in (model card); text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $1.50/$7.50 per 1M (model card); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (model card, Terminus-2 harness; Vals lane 73.8%)
- OSWorld-Verified: **83.0%** (model card, vs 3.5 78.4%)
- MLE-Bench: **63.9%** (model card, vs 3.5 49.7%)
- GDPval-AA v2: **1421 Elo** (model card, vs 3.5 1349)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.4% Vals (rank 4/117) / 92.8% AA-GPQA** (BenchLM third-party rows — fills prior gap)
- HLE: **40.8% AA-HLE** (BenchLM third-party row — fills prior gap)
- CharXiv Reasoning: **85.2% no-tools / 89.4% with tools** (model card)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **52 AA Index** (BenchmarkList, rank 17/427 — fills prior gap); **34.0% AA Index** (BenchLM AA row — scale differs, both listed); **89.3% MMLU-Pro, 88.4% MMMU-Pro (rank 4/79)** (third-party — new); **62.4% Vals Index (rank 15/40), 62.8% Vals Multimodal Index** (new)
- Omniscience Accuracy / Hallucination Rate: **50.0% accuracy / 55.6% hallucination / 22.1% index** (AA-Omniscience third-party rows — new)

Coding:

- SWE-bench Pro (Public): **58.7%** (model card)
- SWE-bench Verified: **79.6% Vals (rank 14/72)** (third-party — fills prior gap); **77.45% Vals Index subset** (Vals model page); **#1 CyberBench Patch track 84.75%** (Vals — new)
- LiveCodeBench: **88.1% Vals (rank 4/123)** (third-party — fills prior gap)
- SciCode / AA-SciCode: **53.4% AA-SciCode** (third-party — fills prior gap)
- Vibe Code Bench: **57.3% Vibe v1.1 (rank 21/75)** (third-party — fills prior gap; 57.88% Vals Index subset; +9pp over 3.5 Flash per Vals)
- DeepSWE / Coding Index / other: **49% DeepSWE v1.1** (model card, vs 3.5 37%); **69.2% AA Coding Index** (third-party — new); **53.5% cursorBench32** (BenchLM mirror); **55.7% ProgramBench, 30.9% Code Migration, 34.4% FrontierCode** (BenchmarkList — new)

Long context:

- **1M window verified; GDM-MRCR v2 (8-needle) 54.0%** (model card) — measured mid retrieval caps the tier

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 78.0% plus OSWorld-Verified 83.0%, MLE-Bench 63.9% and GDPval 1421 show strong workhorse orchestration; capped by no Tau/Claw numbers.
- **Reasoning: 86/100.** GPQA ~93 (multi-source confirmed) plus HLE 40.8, AA Index 52, MMLU-Pro 89.3 and CharXiv 85–89 show strong reasoning; capped by zero LCR/CritPt numbers.
- **Context window: 93/100.** 1M verified with measured MRCR 54.0%; mid retrieval caps it below saturation peers.
- **Multimodal: 87/100.** Broad text/image/audio/PDF input with MMMU-Pro 88.4 and Vals Multimodal Index 62.8 measured; capped as outputs remain text.
- **Coding: 85/100.** SWE-Verified 79.6% plus LiveCode 88.1%, SciCode 53.4%, Coding Index 69.2 and SWE-Pro 58.7% show solid workhorse coding; capped by DeepSWE 49% trailing the frontier bar.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback.
- **Overall Score: 87/100.** Mean of the five non-cost dims (84+86+93+87+85)/5 = 87.0; best-fit improved-reasoning free 3.6 Flash pick — third-party boards now confirm the model-card profile.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (curated metadata, AI Atlas related-model graph) + 2026-10-07 re-research pass (DeepMind 3.6 Flash model card, Google launch blog, Vals model page + Index, BenchLM/BenchmarkList/VectorWire third-party rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
