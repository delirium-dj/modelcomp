# Gemini 3.6 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.6 Flash (`google/gemini-3.6-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-2026 Flash refresh between 3.5 and 3.7 — a 1M-context multimodal workhorse (text/image/audio/PDF in) with strong textbook knowledge (GPQA, MMLU-Pro, ARC-AGI) but a middling agentic/coding profile and a high hallucination rate.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.6-flash`); free tier on AI Studio / OpenCode Zen with standard rate limits, plus a paid tier. Reasoning + tool calls.
- **Release / knowledge:** mid 2026 (Google blog "Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber"); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.6-flash`.
- **Context window:** 1,048,576 (1M) total (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, audio, PDF in; text out; reasoning on; tool calls. No video in, no non-text output.
- **Pricing (as of 2026-10-02):** Free tier (AI Studio / OpenCode Zen); exact paid-tier rates not published in curated meta.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (25 of 618 rows; 65.15/100, #34 of 645), citing the Google Gemini 3.6 Flash blog, Artificial Analysis, Vals AI, ARC Prize and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- OSWorld-Verified **83.0%**; Terminal-Bench 2.1 (Vals) **73.8%** (under the 88 frontier ref)
- GDPval-AA **1423** (AA normalized 38.2%); AA Agentic Index **30.1%**

Reasoning / knowledge:

- AA-GPQA Diamond **92.8%** (Vals 93.4%); AA-HLE **40.8%** — just clears the 40% bar
- ARC-AGI-1 **91.2%** / ARC-AGI-2 **60.4%** (ARC Prize verified); AA-LCR 80.0
- Intelligence Index **34.0** (mid); CritPt 10.6%; MMLU-Pro (Vals) 89.3
- Omniscience Index 22.1 / Accuracy 50.0% / Hallucination **55.6%** — elevated guessing rate

Coding:

- LiveCodeBench (Vals) **88.1%**; SWE-bench (Vals) **79.6%**; AA Coding Index 69.2%
- AA-SciCode 53.4% (under the 55 ref); DeepSWE **49.0%** (well under the 74 ref); CursorBench 3.2 53.5%

Multimodal / long context:

- AA-MMMU-Pro **83.2%**; Design Arena Website 1307; no video/audio-specific rows published
- 1M window (AA-LCR 80.0 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 75/100.** OSWorld-Verified 83.0% is respectable, but Terminal-Bench 2.1 73.8% sits well under the 88 ref, GDPval-AA 1423 (normalized 38.2%) misses the 1750 frontier bar and AA Agentic Index 30.1% is low — a solid-but-not-frontier agentic tier.
- **Reasoning: 77/100.** GPQA-Diamond 92.8/93.4%, ARC-AGI-1 91.2% / ARC-AGI-2 60.4% and MMLU-Pro 89.3 are strong; but HLE 40.8% only just clears the bar, Intelligence Index 34.0 and CritPt 10.6% are mid, and a 55.6% Omniscience hallucination rate drags it down.
- **Context window: 95/100.** 1M-token window meets the ≥1M tier; AA-LCR 80.0 supportive; no ≥98% long-context retrieval metric demonstrated at 512K+, so the band floor.
- **Multimodal: 88/100.** Text+image+audio+PDF in / text out — audio input lifts it into the 90-band, and MMMU-Pro 83.2 is strong, but no video row and no non-text output keep it at/below the floor.
- **Coding: 76/100.** LiveCodeBench 88.1% and SWE-bench 79.6% (Vals) are good, but AA Coding Index 69.2%, SciCode 53.4% (under ref), DeepSWE 49.0% (far under the 74 ref) and CursorBench 53.5% hold it mid.
- **Cost efficiency: 92/100.** Free tier on AI Studio / OpenCode Zen plus Flash-class paid pricing anchors it near the top; exact paid rates not published. Cost is excluded from Overall.
- **Overall Score: 82/100.** Mean of Tool 75, Reasoning 77, Context 95, Multimodal 88, Coding 76 = 82.2 → 82. Best fit: high-volume multimodal retrieval/QA and textbook reasoning at a free/low Flash price where abstention discipline matters less than breadth — for agentic coding or answer-grounded factual recall, the 3.7 Flash sibling is the cleaner pick.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google Gemini 3.6 Flash blog, plus Artificial Analysis, Vals AI, ARC Prize and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
