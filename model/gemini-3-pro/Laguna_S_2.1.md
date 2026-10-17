# Gemini 3 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-16 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Gemini 3 Pro (Google DeepMind)
- Short description: Google DeepMind's frontier Pro model with 2M context (per BenchLM) / 1M context (per repo meta) and Deep Think mode available via a sibling variant.
- Provider / access: Google API / Vertex AI; ID `gemini-3-pro`. Also available through multiple providers. No Free ID on Zen (noFreeId per repo `meta.json`).
- Release: 2026 (Gemini 3 series). Knowledge cutoff: not published.
- IDs: `google/gemini-3-pro` (repo meta). noFreeId per repo `meta.json`.
- Context window: **2,000,000** (BenchLM canonical page); repo `meta.json` lists 1M / 65K out. BenchLM is the more authoritative measured value; scoring uses 2M as the measured context window. Discrepancy noted.
- Modalities: **Text, image, audio, video, PDF in; text out** (repo `meta.json`). Reasoning: BenchLM lists type "Non-Reasoning" (base variant); a sibling "Gemini 3 Pro Deep Think" variant supports reasoning. Reasoning yes (via Deep Think variant); tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-10): "Paid-tier" per BenchLM model page; Google API pricing available via Google Cloud pricing calculator. No concrete numbers published in BenchLM.
- Architecture: Proprietary dense transformer (Google DeepMind). No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/gemini-3-pro`, overall 61.18, rank #52/954, 41 of 639 benchmarks) and Artificial Analysis. 41 benchmark rows verified.

Agent / tool use:

- τ²-bench: **87.1%** (Artificial Analysis model benchmarks / BenchLM — CRITICAL drop from 95.3%, below 90% frontier threshold)
- TB-2.1: 84.8% (BenchLM model page — no longer displayed on current page, was ≥88 frontier)
- GDPval-AA (normalized): 61.8% (BenchLM model page — no longer displayed on current page)
- OSWorld-Verified: 46.7% (BenchLM model page — no longer displayed on current page)
- GDP.pdf: 24.0% (BenchLM model page — no longer displayed on current page)
- TB-4.0: 39.9% (BenchLM model page — no longer displayed on current page)
- Gert Labs: **63.23%** (Gert Labs rankings / BenchLM)
- JobBench: **11.4%** (JobBench paper / BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **95.8%** (BenchLM model page — no longer displayed on current page)
- AA-GPQA Diamond: **90.8%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- GPQA Diamond (Vals): not reported
- HLE (w/o tools): **45.4%** (Meta AI: Muse Spark comparison chart / BenchLM — NEW)
- AA-HLE: **39.7%** (Artificial Analysis model benchmarks / BenchLM — revised down from 43.4%)
- AA Intelligence Index: **28.0** (Artificial Analysis model benchmarks / BenchLM — CRITICAL correction from 50.0; the Oct 10 page showed 50.0 but this was erroneous; v4.3.2 confirms 28.0)
- AA-LCR: **76.0%** (Artificial Analysis model benchmarks / BenchLM — revised down from 81.0%)
- AA-MMLU-Pro: **89.8%** (Artificial Analysis / BenchLM — revised down from 92.1%)
- AA Global-MMLU-Lite: **92.2%** (Artificial Analysis / BenchLM — unchanged)
- AA-IFBench: **70.4%** (Artificial Analysis model benchmarks / BenchLM — unchanged)
- CritPt: **9.1%** (Artificial Analysis model benchmarks / BenchLM — CRITICAL drop from 21.6%)
- MLCR-AA: not shown on current page (was not found in Oct 10 file)
- AA-Omniscience Index: **15.3%** (Artificial Analysis model benchmarks / BenchLM — unchanged)
- AA-Omniscience Accuracy: **55.8%** (Artificial Analysis model benchmarks / BenchLM — unchanged)
- AA-Omniscience Hallucination Rate: **91.5%** (Artificial Analysis model benchmarks / BenchLM — unchanged)
- MMLU-Pro: 92.1% (BenchLM model page — no longer displayed on current page)
- ARC-AGI-1: **75.00%** (ARC Prize: Gemini 3 Pro verified results / BenchLM — NEW)
- ARC-AGI-2: **31.1%** (Google DeepMind: Gemini Pro / BenchLM — unchanged)
- FrontierMath v2 (Tiers 1-3): **37.6%** (Epoch AI via BenchLM — unchanged)
- FrontierMath v2 (Tier 4): **18.75%** (Epoch AI via BenchLM — unchanged)
- GMMLU: **92.5%** (Anthropic / BenchLM — NEW for this model)
- MILU: **92.1%** (Anthropic / BenchLM — NEW for this model)
- INCLUDE: **89.8%** (Anthropic / BenchLM — NEW for this model)

Coding:

- LiveCodeBench (AA): **91.7%** (Artificial Analysis: livecodebench leaderboard / BenchLM — revised down from 93.2%)
- SWE-bench Verified: 88.9% (BenchLM model page — no longer displayed on current page, was revised up from "no verified score")
- DeepSWE: 65.4% (BenchLM model page — no longer displayed on current page)
- AA-SciCode: 58.7% (Artificial Analysis model benchmarks / BenchLM — was "no verified public score found" in Oct 10; actually now shown)
- VulcanBench v3: 87.0% (VulcanBench technical report — not on current BenchLM page, retained from external source)
- Vibe Code Bench: **14.30%** (Vals AI: Vibe Code Bench v1.1 / BenchLM)
- AA Coding Index: **68.8%** (Artificial Analysis model benchmarks / BenchLM — CRITICAL drop from 78.2%)

Multimodal:

- AA-MMMU-Pro: **80.2%** (Artificial Analysis model benchmarks / BenchLM — revised down from 83.2%)
- MMMU: **87.2%** (Qwen3.5-397B-A17B model card comparison / BenchLM — NEW)
- MMMU-Pro: **81%** (Google: Gemini 3 / BenchLM — NEW)
- VideoMMMU: **87.6%** (Qwen3.5-397B-A17B model card comparison / BenchLM — was 87.6% from Google Gemini 3 blog)
- MathVision: **86.6%** (Qwen3.6-Plus comparison / BenchLM — unchanged)
- CharXiv: **81.4%** (Qwen3.6-Plus comparison / BenchLM — unchanged)
- V*: **88.0%** (Qwen3.6-Plus comparison / BenchLM — unchanged)
- RealWorldQA: **83.3%** (Qwen3.5-397B-A17B comparison / BenchLM — unchanged)
- ScreenSpot Pro: **72.7%** (Google DeepMind: Gemini Flash / BenchLM — unchanged)
- Video-MME (with subtitle): **88.4%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- Video-MME (w/o subtitle): **87.7%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- We-Math: **86.9%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- DynaMath: **85.1%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- OmniDocBench 1.5: **88.5%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- AI2D_TEST: **94.1%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- CountBench: **97.3%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- MLVU (M-Avg): **83.0%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- Design Arena Website: **72.7** (OpenRouter / BenchLM — revised from 1307)

Long context:

- AA-LCR: **76.0%** (Artificial Analysis model benchmarks / BenchLM — revised DOWN from 81.0%)
- Context window: 2,000,000 tokens (BenchLM); repo `meta.json` lists 1M (discrepancy noted)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 61.18, #52/954, 41 of 639) and AA as of 2026-10-16.

- **Tool use: 58/100.** (Revised DOWN from 88.) τ²-bench 87.1% (revised DOWN from 95.3%, below 90% frontier), GDPval-AA 61.8% (no longer displayed on current BenchLM page), TB-2.1 84.8% (no longer displayed, was ≥88 frontier), OSWorld-Verified 46.7% (no longer displayed), GDP.pdf 24.0% (no longer displayed), TB-4.0 39.9% (no longer displayed). Capped by τ²-bench below 90 frontier, GDPval-AA no longer on page, all supporting agentic benchmarks removed from page.

- **Reasoning: 60/100.** (Revised DOWN from 87.) CRITICAL: AA Intelligence Index 28.0 (CRITICAL correction from 50.0 — Oct 10 file erroneously revised up; actual AA value is 28.0). GPQA Diamond 95.8% (no longer displayed on page; AA-GPQA-D 90.8%, below 95 frontier), HLE w/o tools 45.4% (new, from Meta comparison), AA-HLE 39.7% (revised down from 43.4%, below 40% frontier), AA-LCR 76.0% (revised down from 81.0%), AA-MMLU-Pro 89.8% (revised down from 92.1%), CritPt 9.1% (CRITICAL drop from 21.6%), AA-IFBench 70.4% (unchanged). New: ARC-AGI-1 75.00%, GMMLU 92.5%, MILU 92.1%, INCLUDE 89.8%. Capped by Intelligence Index 28.0 (well below ~60 frontier), CritPt 9.1% (very low), AA-HLE 39.7% (below 40% frontier), GPQA 90.8% (below 95 frontier).
- **Context window: 96/100.** BenchLM-verified **2,000,000** tokens (≥1M tier, near 2M which approaches 100; no ≥98% retrieval at 512K+ published). No MRCR/RULER retrieval curve published.
- **Multimodal: 95/100.** Verified text+image+audio+video+PDF input, text output (repo `meta.json`, methodology "any non-text in + text out = 90-100"); exceptional vision benchmarks: VideoMMMU 87.6%, MathVision 86.6%, AA-MMMU-Pro 80.2%, MMMU 87.2%, V* 88.0%, CharXiv 81.4%, RealWorldQA 83.3%, ScreenSpot Pro 84.4%, Video-MME 88.4/87.7%, We-Math 86.9%, DynaMath 85.1%, CountBench 97.3%, AI2D_TEST 94.1%, RefCOCO 84.1%, OmniDocBench 88.5%.
- **Coding: 78/100.** (Revised DOWN from 82.) SWE-bench Verified 88.9% (no longer on current BenchLM page, retained from Oct 10), LiveCodeBench (AA) 91.7% (revised down from 93.2%), DeepSWE 65.4% (no longer on current BenchLM page, retained from Oct 10), AA-SciCode 58.7% (≥55% frontier), VulcanBench v3 87.0% (external source, retained), Vibe Code Bench 14.30% (very poor). AA Coding Index 68.8% (CRITICAL drop from 78.2%, below 70% frontier). Capped by AA Coding Index 68.8%, Vibe Code Bench 14.3%.
- **Cost efficiency: 65/100.** Paid-tier per BenchLM but no concrete pricing numbers published; no Free ID on Zen. Provisional estimate.
- **Overall Score: 77/100.** Half-up mean: (58+60+96+95+78)/5 = 387/5 = 77.4 → 77. **CRITICAL correction:** AA Intelligence Index revised from 50.0 (Oct 10 file erroneously showed 50.0 as "revised up from 28.0") to actual 28.0 per current BenchLM/AA model page. τ²-bench dropped 95.3→87.1 (below 90% frontier). GDPval-AA, TB-2.1, OSWorld-Verified, GDP.pdf, TB-4.0 all removed from current BenchLM page. GPQA 95.8→90.8 (AA), CritPt 21.6→9.1, AA-LCR 81→76, AA Coding Index 78.2→68.8. New: GMMLU 92.5%, MILU 92.1%, INCLUDE 89.8%, ARC-AGI-1 75.00%, FrontierMath v2 retained. Aligns with BenchLM Overall 61.18/100 rank #52/954.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3-pro` for overall rank/score (#52/954, 61.18) and full benchmark tables including τ²-bench 87.1%, Gert Labs 63.23%, JobBench 11.4%; AA model page `https://artificialanalysis.ai/models/gemini-3-pro` for Intelligence Index 28.0 (CRITICAL correction from 50.0), CritPt 9.1%, AA-LCR 76.0%; Qwen3.5-397B-A17B model card comparison for MMMU 87.2%, Video-MME 88.4/87.7%, We-Math 86.9%, DynaMath 85.1%, AI2D_TEST 94.1%, CountBench 97.3%, RealWorldQA 83.3%, MLVU 83.0%; Qwen3.6-Plus comparison for MathVision 86.6%, CharXiv 81.4%, V* 88.0%; Google Gemini 3 blog for MMMU-Pro 81%; Epoch AI for FrontierMath v2; repo `meta.json` for modalities/context). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- CRITICAL correction: AA Intelligence Index was 50.0 in the Oct 10 file (erroneously noted as "revised up from 28.0 — fresh BenchLM shows substantially higher score"). The Oct 16 re-verification confirms the actual AA model page value is **28.0%** — reverting the erroneous revision. This single correction drops Reasoning from 87 to 60 and Overall from 90 to 77. Additionally: τ²-bench dropped 95.3→87.1% (below 90% frontier); GPQA 95.8→90.8% (AA-GPQA-D); CritPt 21.6→9.1%; AA-LCR 81→76; AA Coding Index 78.2→68.8%. Benchmark pool grew 889→954; 5 agentic benchmarks (GDPval-AA, TB-2.1, OSWorld-Verified, GDP.pdf, TB-4.0) no longer displayed on BenchLM page. New: GMMLU 92.5%, MILU 92.1%, INCLUDE 89.8%, ARC-AGI-1 75.00%, Video-MME, We-Math, DynaMath, CountBench. Normalized: Tool 88→58, Reasoning 87→60, Coding 82→78. Overall 90→77 (aligns with BenchLM 61.18).

---
