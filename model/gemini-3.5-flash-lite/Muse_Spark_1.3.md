# Gemini 3.5 Flash Lite — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.5 Flash Lite, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: BenchLM absolutes added, scores recomputed 77 → 83); re-research pass 2026-10-07 adds vendor-card + third-party gap-fills, scores recomputed 83 → 82
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite (Google enhanced Lite)
- **Short description:** Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.5-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-21 release (TechCrunch trio launch with 3.6 Flash + Cyber); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3.5-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes (light); tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $0.30/$2.50 per 1M (BenchLM panel); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54%** (BenchLM mirror)
- OSWorld-Verified: **74%** (BenchLM mirror; launch-blog comparison: beats 3 Flash 65.1%)
- Terminal-Bench 2.1 (Vals): **50.2%** (BenchLM mirror); **54.0% Terminus-2 vendor run** (DeepMind model card: 3.1 Flash-Lite 31.0%, GPT-5.4 mini 59.2%, Haiku 4.5 44.2% — harness differs, both listed); **53.6%** (BenchmarkList, rank 73/194)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (Vals): **83.8%** (BenchLM mirror; AA-GPQA 83.8 + VectorWire 83.84 corroborate; rank 45/117)
- MMLU-Pro: **86.2%** (Vals suite, 14th); **85.8% Vals lane** (BenchLM; rank 43/116); **SAGE 49.5%** (5th) and **MortgageTax 67.8%** (7th) (Vals multimodal rows); **83.6% MMMU Pro** (BenchmarkList, rank 24/79 — new)
- MRCRv2: **72.2%** (BenchLM reasoning mirror)
- HLE: **18.8%** (AA-HLE third-party row, rank 124/478 — fills prior gap)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.5–65.3 BenchLM overall (#35–45)**; agentic 63.4, coding 54.2, reasoning 72.2, multimodal 76.3 (#16); **22.2 AA Index** (BenchmarkList, rank 148/427 — lane differs, both listed); **51.0% Vals Index** (rank 26/40 — new)
- Omniscience Accuracy / Hallucination Rate: **29.5% accuracy / 34.4% hallucination / 5.2% index** (AA-Omniscience rows — fills prior gap)

Coding:

- SWE-bench Verified / SWE-Pro: **54.2% SWE-bench Pro** (BenchLM mirror; vendor card confirms: 3.1 Flash-Lite 38.3%, GPT-5.4 mini 54.4%, Haiku 4.5 39.5%); **75.0% SWE-bench Verified Vals** (BenchmarkList, rank 31/72 — fills prior gap)
- LiveCodeBench (Vals): **79.0%** (BenchLM mirror; BenchmarkList rank 63/123)
- SciCode / AA-SciCode: **41.3% AA-SciCode** (BenchmarkList, rank 99/296 — fills prior gap)
- Vibe Code Bench: **37.2% Vibe v1.1** (BenchmarkList, rank 35/75 — fills prior gap)
- DeepSWE / Coding Index / other: **49.3% AA Coding Index** (BenchLM — fills prior gap); **39.2% MLE-Bench** (vendor card: 3.1 Flash-Lite 22.0% — new); **26.2% IOI, 50.6% AndroidBench, 6.1% Code Migration, 0.1% SWE-sweep, WebDev Arena 1449** (BenchmarkList — new)

Long context:

- **1M window verified; Context Arena 40.9–45.2% across settings** (BenchmarkList, ranks 14–23 — weak long-context signal); no MRCR/RULER percentage found

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld-Verified 74% plus TB2.0 54% and TB2.1 50–54% show decent Lite agency; capped by mid TB numbers and no Tau/GDPval/Claw rows.
- **Reasoning: 79/100.** GPQA Vals 83.8% plus MMLU-Pro ~86 and MMMU-Pro 83.6 show strong Lite reasoning; capped by HLE 18.8 and zero LCR/CritPt numbers.
- **Context window: 95/100.** 1M verified with MRCRv2-mirror 72.2% but weak Context Arena ~41–45%; held below saturation peers.
- **Multimodal: 85/100.** Broad text/image/audio/PDF input with MMMU-Pro 83.6 measured; capped as outputs remain text.
- **Coding: 75/100.** SWE-Verified 75.0% plus LiveCode 79.0%, SWE-Pro 54.2% and SciCode 41.3% show decent Lite coding; capped by Vibe 37.2% and weak mini-rows (Code Migration 6.1, SWE-sweep 0.1).
- **Cost efficiency: 98/100.** Free tier plus cheapest Lite fallback.
- **Overall Score: 82/100.** Mean of the five non-cost dims (74+79+95+85+75)/5 = 81.6 → 82; best-fit cheapest high-frequency 3.5 Lite pick — vendor card plus third-party rows now fill the profile.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 re-research pass (DeepMind 3.5 Flash-Lite model card, Google launch blog, BenchLM/BenchmarkList/VectorWire third-party rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
