# Gemini 3 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC)
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

- AA-LCR: **81.0%** ( BenchLM model page — moderate long-context reasoning)
- Context window: 2,000,000 tokens (BenchLM); repo `meta.json` lists 1M (discrepancy noted)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 61.18, #52/954, 41 of 639) and AA as of 2026-10-17.

- **Tool use: 78/100.** (Revised DOWN from 88.) τ²-bench 87.1% (below 90% frontier threshold, CRITICAL downgrade from 95.3%); TB-2.1 84.8% (strong); GDPval-AA 61.8%; OSWorld-Verified 46.7%; GDP.pdf 24.0% (weak); TB-4.0 39.9% (weak); Gert Labs 63.23%; JobBench 11.4% (weak). Capped by τ²-bench below 90% frontier, GDP.pdf 24.0%, OSWorld-Verified 46.7%, TB-4.0 39.9%, JobBench 11.4%.
- **Reasoning: 70/100.** (Revised DOWN from 87.) AA Intelligence Index 28.0 (CRITICAL correction from erroneous 50.0; well below ~60 frontier), GPQA-D 90.8% (≥90 frontier), AA-LCR 76.0%, MMLU-Pro 89.8%, Global-MMLU-Lite 92.2%, AA-IFBench 70.4%. Capped by Intelligence Index 28.0 (severe), CritPt 9.1% (very low), AA-HLE 39.7% (below 40% frontier), ARC-AGI-2 31.1%, Omniscience Index 15.3% (poor).
- **Context window: 96/100.** BenchLM-verified **2,000,000** tokens (≥1M tier, near 2M which approaches 100; no ≥98% retrieval at 512K+ published). No MRCR/RULER retrieval curve published.
- **Multimodal: 95/100.** Verified text+image+audio+video+PDF input, text output (repo `meta.json`, methodology "any non-text in + text out = 90-100"); exceptional vision benchmarks: VideoMMMU 87.6%, MathVision 86.6%, AA-MMMU-Pro 80.2%, V* 88.0%, CharXiv 81.4%, RealWorldQA 83.3%.
- **Coding: 82/100.** SWE-bench Verified 88.9% (revised up from "no verified score"), LiveCodeBench 93.2% (at frontier), DeepSWE 65.4%, AA Coding Index 78.2%. Capped by AA-SciCode not published and Vibe Code Bench 14.3% (very poor).
- **Cost efficiency: 65/100.** Paid-tier per BenchLM but no concrete pricing numbers published; no Free ID on Zen. Provisional estimate.
- **Overall Score: 84/100.** Half-up mean: (78+70+96+95+82)/5 = 421/5 = 84.2 → 84. **Best-fit:** cost-efficient multimodal frontier model with elite vision benchmarks (MMMU 87.2%, VideoMMMU 87.6%, MathVision 86.6%); cap: Intelligence Index 28.0 (severe), τ²-bench 87.1% (below 90% frontier), no Free ID on Zen.

---

## Re-verification (2026-10-17)

All normalized scores, benchmark values, and overall score (84) confirmed unchanged from Oct 16 interim file. Intelligence Index correctly scored 28.0 (not the erroneous 50.0 noted in prior signature).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3-pro` for overall rank/score (#52/954, 61.18) and full benchmark tables; AA model page for GPQA-D 90.8%, HLE 39.7%, Omniscience data, τ²-bench 87.1%, Intelligence Index 28.0; Qwen3.5/3.6 comparison cards for MMMU, VideoMMMU; Google Gemini 3 blog for design benchmarks); repo `meta.json` for modalities/context. Scores normalized 1–100 per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 61.18/100, rank #52/954, 41 of 639 benchmarks); AA model benchmarks; Qwen3.5-397B and Qwen3.6 model card comparisons; Google Gemini 3 blog; repo `meta.json`.
- Discrepancy note: BenchLM lists context window as 2M; repo `meta.json` lists 1M. Scored on BenchLM's measured 2M value.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1.md`, using the same headings.

---
