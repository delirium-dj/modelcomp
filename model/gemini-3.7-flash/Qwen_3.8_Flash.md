# Gemini 3.7 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.7 Flash (`google/gemini-3.7-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability 3.7 Flash model — a 1M-context omni-input mid-tier with elite visual/ARC reasoning but partial agentic coverage and a light hallucination flag.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.7-flash`); free tier on AI Studio and OpenCode Zen with standard rate limits. Reasoning + tool calls.
- **Release / knowledge:** 2026 (Gemini 3.x line); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.7-flash`.
- **Context window:** 1,048,576 (1M) (curated meta).
- **Modalities:** text, image, audio, PDF in; text out; reasoning on; tool calls. No non-text output.
- **Pricing (as of 2026-10-02):** Free tier available; paid-tier API pricing.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (42 of 618 rows), citing the Google DeepMind Gemini 3.7 Flash model card, Artificial Analysis, Vals AI, ARC Prize and OpenRouter (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (model card; Vals 77.5%) — but TB 3.0 only 14.9%
- GDPval-AA: **1525** (model card; AA normalized 43.6%); OSWorld 2.0 47.9%; AutomationBench 30.4%
- AA Harvey LAB 90.7%; Agents' Last Exam 26.3%; AA Agentic Index 36.4%; AA-AnalystAgent 60.0%; ApprenticeBench 16%

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA; Vals 93.9%); HLE-Verified **53.6%** (AA 47.9%)
- MRCR v2 64K–128K: **97%** (model card); AA-LCR 81.7%
- ARC-AGI-1: **95.50%**; ARC-AGI-2: **84.6%** (ARC Prize verified)
- Artificial Analysis Intelligence Index **39.1**; CritPt 14.3%; Omniscience Accuracy / Hallucination: 55.3% / 64.5%
- MMLU-Pro (Vals) 90.1%; LABBench2 82.1%; BioMysteryBench 87.1 (human-solvable) / 43.5 (difficult)

Coding:

- Terminal-Bench 2.1 85.8%; LiveCodeBench (Vals) **88.7%**; SWE-bench (Vals) 80.8%
- AA Coding Index 76.1%; DeepSWE 65.3%; AA-SciCode 57.2%; FrontierCode 1.1 43.6%; FrontierSWE v2 20.3%

Multimodal / long context:

- CharXiv **88.7%** (w/o tools 84.5); LVBench (video) **85.4%**; AA-MMMU-Pro 85.5%; Design Arena Website 1312
- MRCR v2 97% at 64K–128K; 1M window.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 83/100.** Terminal-Bench 2.1 85.8% and AA Harvey LAB 90.7% are strong, but GDPval-AA 1525 sits under the 1750 frontier ref, TB 3.0 14.9%, AutomationBench 30.4% and AA Agentic Index 36.4% keep it below the 90 band.
- **Reasoning: 87/100.** GPQA-Diamond 94.5%, ARC-AGI-1 95.5% / ARC-AGI-2 84.6% and MRCR 97% clear the high bars; the mid Intelligence Index (39.1), CritPt 14.3% and a 64.5% Omniscience hallucination rate cap it.
- **Context window: 95/100.** 1M-token window meets the ≥1M tier; MRCR 97% is only reported at 64K–128K and AA-LCR 81.7% — no ≥98% retrieval demonstrated at 512K+, so short of 100.
- **Multimodal: 90/100.** Text+image+audio+PDF in with strong grounded output (CharXiv 88.7, LVBench video 85.4, MMMU-Pro 85.5) — audio input present puts it in the 90–100 band; no non-text output holds it at the floor.
- **Coding: 82/100.** LiveCodeBench 88.7% and SWE-bench 80.8% (Vals) with TB 85.8% are solid for a Flash tier; DeepSWE 65.3% (under the 74 ref), FrontierSWE v2 20.3% and partial coverage trim it.
- **Cost efficiency: 92/100.** Free tier on AI Studio / OpenCode Zen plus low Flash-class paid pricing anchors it near the top; exact paid rates not published. Cost is excluded from Overall.
- **Overall Score: 87/100.** Mean of Tool 83, Reasoning 87, Context 95, Multimodal 90, Coding 82 = 87.4 → 87. Best fit: high-volume multimodal agents (charts, video, audio, PDFs) at Flash latency where ARC-level puzzles matter; weaker on long-horizon pure-agency work (TB 3.0, AutomationBench) and BenchLM flags partial coverage, so treat the overall as conservative.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google DeepMind model card, plus Artificial Analysis, Vals AI, ARC Prize and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
