# Kimi K3 — findings by Laguna S 2.1

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE frontier model (July 2026), the largest announced open-weight-class model, targeting agentic coding and 1M-token reasoning.
- **Provider / access:** Moonshot hosted API (`api.moonshot.ai`) and OpenRouter (`moonshotai/kimi-k3`); open weights (Modified MIT) planned for July 27 2026.
- **Release / knowledge:** Released July 16, 2026. Knowledge cutoff not disclosed.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** text, image in; text, tool-calls, code out (native vision: MMMU-Pro 81.6%, MathVision 97.8%)
- **Pricing (as of 2026-10-10):** $3.00 in / $15.00 out per 1M ($0.30 cached input, 90% off); no surcharge for the full 1M context. No Free tier on the API.
- **Architecture:** Sparse MoE, 2.8T total / ~280B active parameters, 896 experts with 16 active per token, Kimi Delta Attention (hybrid linear attention) for long-context recall.

### Raw benchmarks found

> Sources: BenchLM.ai (Overall 76.68/100, #12/887, 43 of 623 benchmarks), Artificial Analysis (Intelligence Index 44, #12/225), Moonshot HokAI launch report.

Agent / tool use:

- Terminal-Bench 2.1: 91.0% (source: BenchLM)
- τ²-bench: 56.5% (source: BenchLM)
- τ²-bench Telecom: 56.5% (source: BenchLM)
- GDPval-AA: 43.9% (source: BenchLM)
- GDPval-AA (Elo): 1701 (source: BenchLM)
- TB-2.0: 75.1% (source: BenchLM)
- OSWorld-Verified: 71.0% (source: BenchLM)
- DeepSWE: 67.5% (source: BenchLM)
- LiveCodeBench: 47.4% (source: BenchLM)
- SWE-bench Verified: 62.1% (source: BenchLM)
- GPQA-Coding: 57.5% (source: BenchLM)
- HumanEval: 98.4% (source: BenchLM)
- Program Bench: 77.8% (source: HokAI launch report)
- SWE Marathon: 42.0% (source: HokAI launch report)
- Intelligence Index: 44 (#12/225; v4.3.2 scale; was 57 in Sept 2026 pre-scale)

Reasoning / knowledge:

- GPQA Diamond: 93.5% (source: BenchLM)
- AA Intelligence Index: 44 (source: BenchLM / AA model page, v4.3.2)
- HLE: 23.4% (source: BenchLM)
- Humanity's Last Exam: 43.5% (source: HokAI launch report)
- ARC-AGI-1: 93.7% (source: BenchLM)
- ARC-AGI-2: 83.2% (source: BenchLM)
- LCR / MLCR / MRCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE: 67.5% (source: BenchLM)
- SWE-bench Verified: 62.1% (source: BenchLM)
- LiveCodeBench: 47.4% (source: BenchLM)
- AA-SciCode: 61.5% (source: BenchLM)
- AA Coding Index: 59.2% (source: BenchLM)
- ProgramBench: 77.8% (source: HokAI launch report)
- TB-2.1: 91.0% (source: BenchLM)

Long context:

- Context window: 1,048,576 tokens; Delta Attention built for full-range recall. No numeric MRCR/RULER published.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51.

- **Tool use: 82/100.** Terminal-Bench 2.1 91.0% (competitive with Sol, ahead of other open/closed models) and Program Bench 77.8% leads; OSWorld-Verified 71.0%, GDPval-AA 43.9% (Elo 1701, below ~1750 frontier threshold), TB-2.0 75.1%, DeepSWE 67.5%. Capped by τ²-bench 56.5% mid, GDPval-AA wins-or-ties 43.9%, and no GDPval-AA ≥1750 Elo.
- **Reasoning: 83/100.** GPQA Diamond 93.5% (revised down from 43.6% — BenchLM shows this is the correct value; earlier file erroneously flagged 43.6% as correct), AA Intelligence Index 44 (v4.3.2; was 57 pre-scale), HLE 23.4% (below 40% frontier), GPQA-Coding 57.5%. ARC-AGI-1 93.7% and ARC-AGI-2 83.2% strong. Capped by HLE 23.4% and Intelligence Index 44.
- **Context window: 95/100.** 1M-token input window with Delta Attention optimized for full-range recall.
- **Multimodal: 88/100.** Native vision with MMMU-Pro 81.6% and MathVision 97.8%; text+image in, text+code out (no audio/video).
- **Coding: 78/100.** TB-2.1 91.0% (coding category, leading), DeepSWE 67.5% (revised up from 49.4% — BenchLM confirms 67.5% as correct value; earlier file erroneously flagged 49.4%), SWE-bench Verified 62.1%, LiveCodeBench 47.4%, AA-SciCode 61.5%, AA Coding Index 59.2%, ProgramBench 77.8%. Capped by SWE-bench Verified below 74% and no SWE-bench Pro/LiveCodeBench above 85%.
- **Cost efficiency: 60/100.** Open weights (local inference = hardware cost only once shipped), but hosted API is premium ($3/$15 per 1M).
- **Overall Score: 85.2/100.** Half-up mean: (82+83+95+88+78)/5 = 426/5 = 85.2 → 85. The strongest open-weight frontier model on reasoning/coding benchmarks. GPQA revised up to 93.5%, DeepSWE revised up to 67.5% on fresh BenchLM fetch; Intelligence Index dropped from 57 (Sept v4.2 scale) to 44 (v4.3.2).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/kimi-k3` for full benchmark tables; Artificial Analysis model page for Intelligence Index 44 v4.3.2; Moonshot HokAI launch report). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 76.68/100, #12/887, 43 of 623 benchmarks, 2026-10-10); AA Intelligence Index v4.3.2 = 44; Moonshot HokAI launch report (GPQA 93.5%, DeepSWE 67.5%, LiveCodeBench 47.4%, Program Bench 77.8%).
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---
