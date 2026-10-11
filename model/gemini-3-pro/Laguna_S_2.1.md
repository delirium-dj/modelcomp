# Gemini 3 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
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

> Verified public numbers from BenchLM (`https://benchlm.ai/models/gemini-3-pro`, overall 59.42, rank #52/889) and Artificial Analysis (referenced from BenchLM).

Agent / tool use:

- TB-2.1: **84.8%** (BenchLM model page)
- τ²-bench: **95.3%** (BenchLM model page)
- GDPval-AA: **61.8%** (BenchLM model page)
- OSWorld-Verified: **46.7%** (BenchLM model page)
- GDP.pdf: **24.0%** (BenchLM model page)
- TB-4.0: **39.9%** (BenchLM model page)
- JobBench: **11.4%** (BenchLM)
- Gert Labs: **63.23** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA Diamond: **95.8%** (BenchLM model page)
- HLE: **43.9%** (BenchLM model page)
- AA Intelligence Index: **50.0** (BenchLM model page; revised up from 28.0 — fresh BenchLM shows substantially different score)
- AA-LCR: **81.0%** (BenchLM model page)
- AA-HLE: **43.4%** (BenchLM model page)
- AA-MMLU-Pro: **92.1%** (BenchLM model page)
- AA Global-MMLU-Lite: **92.2%** (BenchLM model page)
- AA-IFBench: **70.4%** (BenchLM model page)
- CritPt: **21.6%** (BenchLM model page)
- AA-Omniscience Index: **15.3%** (BenchLM model page)
- AA-Omniscience Accuracy: **55.8%** (BenchLM model page)
- AA-Omniscience Hallucination Rate: **91.5%** (BenchLM model page)
- MMLU-Pro: **92.1%** (BenchLM model page)
- ARC-AGI-2: **31.1%** (Google DeepMind model card)
- FrontierMath v2 (Tiers 1-3): **37.6%** (Epoch AI via BenchLM)
- FrontierMath v2 (Tier 4): **18.75%** (Epoch AI via BenchLM)

Coding:

- LiveCodeBench (AA): **93.2%** (BenchLM model page)
- SWE-bench Verified: **88.9%** (BenchLM model page — revised up from "no verified score")
- DeepSWE: **65.4%** (BenchLM model page)
- AA-SciCode: **no verified public score found** for this exact ID
- Vibe Code Bench: **14.30%** (Vals AI via BenchLM)
- AA Coding Index: **78.2%** (BenchLM model page)

Multimodal:

- AAA-MMMU-Pro: **83.2%** (BenchLM model page)
- VideoMMMU: **87.6%** (Google Gemini 3 blog / Qwen3.6 comparison)
- MathVision: **86.6%** (Qwen3.6 comparison)
- CharXiv: **81.4%** (Qwen3.6 comparison)
- V*: **88.0%** (Qwen3.6 comparison)
- RealWorldQA: **83.3%** (BenchLM model page)
- ScreenSpot Pro: **72.7%** (Google DeepMind model card)

Long context:

- AA-LCR: **81.0%** ( BenchLM model page — moderate long-context reasoning)
- Context window: 2,000,000 tokens (BenchLM); repo `meta.json` lists 1M (discrepancy noted)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 59.42, #52/889) and AA as of 2026-10-10.

- **Tool use: 88/100.** τ²-bench 95.3% (near ≥95 frontier ref), TB-2.1 84.8% (strong), GDPval-AA 61.8%, OSWorld-Verified 46.7%, GDP.pdf 24.0%, TB-4.0 39.9%. Capped by GDP.pdf 24.0%, OSWorld-Verified 46.7%, TB-4.0 39.9%, JobBench 11.4%, Gert Labs 63.23.
- **Reasoning: 87/100.** GPQA Diamond 95.8% (near ≥96 frontier threshold), AA Intelligence Index 50.0 (revised up from 28.0 — fresh BenchLM shows substantially higher score), HLE 43.9% (at 40% frontier), AA-LCR 81.0%, MMLU-Pro 92.1%, AA-MMLU-Pro 92.1%, AA Global-MMLU-Lite 92.2%, AA-IFBench 70.4%. Capped by ARC-AGI-2 31.1%, FrontierMath T1-3 37.6%, CritPt 21.6%, Omniscience Index 15.3% (poor reliability, 91.5% hallucination).
- **Context window: 96/100.** BenchLM-verified **2,000,000** tokens (≥1M tier, near 2M which approaches 100; no ≥98% retrieval at 512K+ published). No MRCR/RULER retrieval curve published.
- **Multimodal: 95/100.** Verified text+image+audio+video+PDF input, text output (repo `meta.json`, methodology "any non-text in + text out = 90-100"); exceptional vision benchmarks: VideoMMMU 87.6%, MathVision 86.6%, AAA-MMMU-Pro 83.2%, V* 88.0%, CharXiv 81.4%, RealWorldQA 83.3%.
- **Coding: 82/100.** SWE-bench Verified 88.9% (revised up from "no verified score"), LiveCodeBench 93.2% (at frontier), DeepSWE 65.4%, AA Coding Index 78.2%. Capped by AA-SciCode not published and Vibe Code Bench 14.3% (very poor).
- **Cost efficiency: 65/100.** Paid-tier per BenchLM but no concrete pricing numbers published; no Free ID on Zen. Provisional estimate.
- **Overall Score: 89.6/100.** Half-up mean: (88+87+96+95+82)/5 = 448/5 = 89.6 → 90. **Best-fit:** exceptional multimodal frontier model with elite reasoning (GPQA 95.8%, Intelligence Index 50.0 revised up) and coding (LiveCodeBench 93.2%, SWE-bench 88.9%); cap: severe hallucination rate (91.5%), poor Vibe Code Bench (14.3%), no Free ID on Zen, non-reasoning base variant (Deep Think is a separate sibling).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3-pro` for overall rank/score (#52/889, 59.42) and full benchmark tables including τ²-bench 95.3%, GPQA 95.8%, Intelligence Index 50.0; AA model page for GPQA-D 90.8%, HLE 39.7%, Omniscience data; Google Gemini 3 blog for MMMU-Pro, VideoMMMU); repo `meta.json` for modalities/context/pricing tier). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 59.42/100, rank #52/889); AA model benchmarks; Google Gemini 3 blog; repo `meta.json`.
- Discrepancy note: BenchLM lists context window as 2M; repo `meta.json` lists 1M. Scored on BenchLM's measured 2M value. Intelligence Index revised from 28.0 (prior file) to 50.0 based on fresh BenchLM fetch.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1.md`, using the same headings.

---
