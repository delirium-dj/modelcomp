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
- DeepSWE: 49.4% (source: BenchLM)
- LiveCodeBench: 47.4% (source: BenchLM)
- SWE-bench Verified: 62.1% (source: BenchLM)
- GPQA-Coding: 57.5% (source: BenchLM)
- HumanEval: 98.4% (source: BenchLM)
- Program Bench: 77.8% (source: HokAI launch report)
- SWE Marathon: 42.0% (source: HokAI launch report)
- Intelligence Index: 44 (#12/225; v4.3.2 scale; was 57 in Sept 2026 pre-scale)

Reasoning / knowledge:

- GPQA Diamond: 43.6% (source: BenchLM)
- AA Intelligence Index: 44 (source: BenchLM / AA model page, v4.3.2)
- HLE: 23.4% (source: BenchLM)
- Humanity's Last Exam: 43.5% (source: HokAI launch report)
- ARC-AGI-1: 93.7% (source: BenchLM)
- ARC-AGI-2: 83.2% (source: BenchLM)
- LCR / MLCR / MRCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE: 49.4% (source: BenchLM)
- SWE-bench Verified: 62.1% (source: BenchLM)
- LiveCodeBench: 47.4% (source: BenchLM)
- AA-SciCode: 61.5% (source: BenchLM)
- AA Coding Index: 59.2% (source: BenchLM)
- Program Bench: 77.8% (source: HokAI launch report)
- TB-2.1: 91.0% (source: BenchLM)

Long context:

- Context window: 1,048,576 tokens; Delta Attention built for full-range recall. No numeric MRCR/RULER published.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.1 91.0% (competitive with Sol, ahead of other open/closed models) and Program Bench 77.8% leads; OSWorld-Verified 71.0%, GDPval-AA 43.9%. Capped by GDPval-AA Elo lower than frontier, τ²-bench 56.5% mid.
- **Reasoning: 78/100.** GPQA Diamond 43.6% (well below 55% frontier ref), AA Intelligence Index 44 (v4.3.2; was 57 pre-scale), HLE 23.4%. GPQA-Coding 57.5% and DeepSWE 49.4% support agentic coding. Strong ARC-AGI-1 93.7% and ARC-AGI-2 83.2% but capped by weak GPQA and no HLE.
- **Context window: 95/100.** 1M-token input window with Delta Attention optimized for full-range recall.
- **Multimodal: 88/100.** Native vision with MMMU-Pro 81.6% and MathVision 97.8%; text+image in, text+code out (no audio/video).
- **Coding: 78/100.** DeepSWE 49.4% (below 60-74 range), SWE-bench Verified 62.1%, LiveCodeBench 47.4%; TB-2.1 91.0% and Program Bench 77.8% provide floor. Capped by weak DeepSWE/LiveCodeBench and no SWE-bench Pro.
- **Cost efficiency: 60/100.** Open weights (local inference = hardware cost only once shipped), but hosted API is premium ($3/$15 per 1M).
- **Overall Score: 84/100.** Mean of five quality dims: (82+78+95+88+78)/5 = 421/5 = 84.2 → 84. The strongest open-weight frontier model on reasoning/coding benchmarks. Intelligence Index dropped from 57 (Sept v4.2 scale) to 44 (v4.3.2); GPQA 43.6% revised down from 93.5% reported at launch; scores recalibrated to current BenchLM+AA data.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/kimi-k3` for full benchmark tables; Artificial Analysis model page for Intelligence Index 44 v4.3.2; Moonshot HokAI launch report). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: BenchLM.ai model page (Overall 76.68/100, #12/887, 43 of 623 benchmarks, 2026-10-10); AA Intelligence Index v4.3.2 = 44; Moonshot HokAI launch report (GPQA 43.6%, DeepSWE 49.4%, LiveCodeBench 47.4%, Program Bench 77.8%).
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---

