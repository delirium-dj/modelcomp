# Gemini 3.5 Flash Lite — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.5 Flash Lite, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: BenchLM absolutes added, scores recomputed 77 → 83); re-verified 2026-09-29 (UTC, user-signed-off re-research: model-card table confirmed + MLE 39.2 + GDPval 1140 + CharXiv + MRCR fix + cutoff Mar 2026 + AA 22 + computer-use tool; Context 100 → 97, Overall 83 → 82)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite (Google enhanced Lite)
- **Short description:** Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.5-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-21 release (TechCrunch trio launch with 3.6 Flash + Cyber); knowledge cutoff Mar 2026 (model card; Jan 2025 for some domains — re-verified 2026-09-29)
- **IDs:** `google/gemini-3.5-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes + computer use (Preview) (API docs — re-verified 2026-09-29)
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $0.30/$2.50 per 1M (BenchLM panel); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (model card Terminus-2; 50.2% Vals-lane / 31.0–34.1% third-party lanes — lane variance noted — re-verified 2026-09-29); Terminal-Bench 2.0: **54%** (BenchLM mirror)
- OSWorld-Verified: **74.0%** (model card; BenchLM mirror corroborates — re-verified 2026-09-29)
- MLE-Bench: **39.2%** (model card; vs 3.1FL 22.0% — re-verified 2026-09-29)
- GDPval-AA v2: **1140 Elo** (model card; vs 3.1FL 642 — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (Vals): **83.8%** (BenchLM mirror)
- MMLU-Pro: **86.2%** (Vals suite, 14th); **SAGE 49.5%** (5th) and **MortgageTax 67.8%** (7th) (Vals multimodal rows)
- CharXiv Reasoning: **74.5%** no-tools / **76.5%** with-tools (model card; vs 3.1FL 73.2% — re-verified 2026-09-29)
- MRCR v2 8-needle: **72.2% @128k avg / 21.3% @1M pointwise** (model card; BenchLM mirror corroborates 128k — re-verified 2026-09-29)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.5–65.3 BenchLM overall (#35–45)**; agentic 63.4, coding 54.2, reasoning 72.2, multimodal 76.3 (#16); AA Index raw **22** (well above tier-median 12 — re-verified 2026-09-29)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **54.2% SWE-bench Pro** (BenchLM mirror); no verified SWE-Verified absolute found
- LiveCodeBench (Vals): **79.0%** (BenchLM mirror); **SWE Vals 75.0%** (BenchLM mirror)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; MRCR v2 8-needle 72.2% @128k / 21.3% @1M (model card — re-verified 2026-09-29)**

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld-Verified 74% plus TB2.0 54% and TB2.1 Vals 50.2% show decent Lite agency; capped by mid TB numbers and no Tau/GDPval/Claw rows.
- **Reasoning: 80/100.** GPQA Vals 83.8% plus MMLU-Pro 86.2% show strong Lite reasoning; capped by zero HLE/LCR/CritPt numbers.
- **Context window: 97/100.** 1M tier with MRCR 72.2% @128k / 21.3% @1M measured; capped by weak full-length retrieval.
- **Multimodal: 85/100.** Broad text/image/audio/PDF input; capped as outputs remain text.
- **Coding: 74/100.** SWE-Pro 54.2% plus LiveCode Vals 79.0% and SWE Vals 75.0% show decent Lite coding; capped by zero SWE-Verified/SciCode/Vibe/DeepSWE numbers.
- **Cost efficiency: 98/100.** Free tier plus cheapest Lite fallback.
- **Overall Score: 82/100.** Mean of the five non-cost dims (74+80+97+85+74)/5 = 82.0 → 82; best-fit cheapest high-frequency 3.5 Lite pick — now card-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
