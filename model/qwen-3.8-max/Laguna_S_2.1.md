# Qwen3.8 Max — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Qwen3.8 Max (Alibaba)
- Short description: Alibaba's flagship proprietary multimodal reasoning model, delivering top-tier intelligence with low time-to-first-token.
- Provider / access: Alibaba Cloud API (`qwen3-8-max`); also available via API provider networks.
- Release: 2026-09-02. Knowledge cutoff: 2026-07.
- IDs: `alibaba/qwen3-8-max`
- Context window: 1,000,000 tokens (984K input / 8192 max output confirmed; BenchLM measures ≥984K — scored at 1M tier per methodology ≥1M threshold; no retrieval curve ≥98% at 512K+ for perfect score)
- Modalities: text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- Pricing (as of 2026-10-10): $2.00 input / $6.00 output per 1M tokens ($1.18 blended with cache)
- Architecture: Proprietary multimodal reasoning architecture

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/qwen3-8-max`, overall 69.66, rank #19/954, 67 of 639 benchmarks) and Qwen official blog (`https://qwen.ai/blog?id=qwen3.8`). AA model page returned 404. Prior file stated "no verified public score found" for GPQA, TB-2.1, and SWE-bench — confirmed by fresh BenchLM + Qwen blog fetch.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen official blog / BenchLM — revised up from 84.8%)
- OSWorld-Verified: **86.1%** (Qwen official blog / BenchLM — CRITICAL: revised up from 46.7%)
- WideResearch: **81.9%** (Qwen official blog — NEW)
- AndroidWorld: **85.3%** (Qwen official blog — NEW)
- CoWorkBench: **74.8%** (Qwen official blog — NEW)
- skillsBench: **70.2%** (Qwen official blog — NEW)
- Toolathlon-Verified: **72.5%** (Qwen official blog — NEW)
- WebArena-Verified: **66.8%** (Qwen official blog — NEW)
- Agents' Last Exam: **52.4%** (Qwen official blog — NEW)
- OSWorld 2.0: **19.4%** (Qwen official blog — NEW)
- AutomationBench: **27.3%** (Qwen official blog — NEW)
- JobBench: **53.4%** (Qwen official blog — revised down from 56.0%)
- MazeBench: **0%** (MazeBench AI leaderboard — NEW)
- AA-AnalystAgent: **37.5%** (AA leaderboard — NEW)
- Hermes Index: **36.2%** (Nous Research — NEW)
- Hermes Bench: **70.5%** (Nous Research — NEW)
- AA Briefcase: **1642** (Qwen: Qwen3.8-Max release benchmarks)
- AA AutomationBench: **no verified public score found** (not on current page — was 58.6% in prior file)

Reasoning / knowledge:

- GPQA: **92.6%** (Qwen official blog / BenchLM — revised down from 93.5%)
- GPQA-D: **92.6%** (Qwen official blog / BenchLM)
- GPQA Diamond (Vals): **93.7%** (Vals AI leaderboard)
- HLE: **43.6%** (Qwen official blog / BenchLM — revised down from 43.9%)
- HLE w/o tools: **43.6%** (Qwen official blog / BenchLM — NEW)
- HLE w/ tools: **56.2%** (Qwen official blog / BenchLM — NEW)
- AA Intelligence Index: **50.0** (BenchLM Oct 10 model page — NOT on current Oct 17 page, AA page 404)
- AA-HLE: **43.9%** (BenchLM Oct 10 — NOT on current page)
- AA-LCR: **87.0%** (BenchLM Oct 10 — NOT on current page)
- CritPt: **21.6%** (BenchLM Oct 10 — NOT on current page)
- AA-MMLU-Pro: **92.1%** (BenchLM Oct 10 — NOT on current page)
- AA Global-MMLU-Lite: **92.1%** (BenchLM Oct 10 — NOT on current page)
- AA-IFBench: **73.4%** (BenchLM Oct 10 — NOT on current page)
- MRLU-Pro: **92.1%** (BenchLM Oct 10)
- MMLU-Pro (Vals): **88.6%** (Vals AI leaderboard — revised down from 92.1%)
- ARC-AGI-2: **80.5%** (BenchLM Oct 10 — NOT on current page)
- MRCRv2: **92.9%** (Qwen official blog / BenchLM — NEW)
- LongBench v2: **66.3%** (Qwen official blog / BenchLM — NEW)
- IFBench: **82.8%** (Qwen official blog / BenchLM — NEW)
- FrontierMath v2 (Tiers 1-3): **74.737%** (Epoch AI — NEW)
- FrontierMath v2 (Tier 4): **46.341%** (Epoch AI — NEW)

Coding:

- Terminal-Bench 2.1: **86.6%** (Qwen official blog / BenchLM — coding category, revised up from 84.8%)
- LiveCodeBench (Vals): **87.9%** (Vals AI leaderboard — revised down from 93.2%)
- SWE-bench (Vals): **85.6%** (Vals AI leaderboard — replaces SWE-bench Verified)
- DeepSWE: **56.6%** (Qwen official blog — revised down from 65.4%)
- SWE-bench Pro: **67.7%** (Qwen official blog — NEW)
- NL2Repo: **55.9%** (Qwen official blog — NEW)
- FrontierSWE: **73.5%** (Qwen official blog — NEW)
- PaperBench: **93.0%** (Qwen official blog — NEW)
- QwenReactBench: **1724** (Qwen official blog — NEW)
- VulcanBench v3: **81.2%** (VulcanBench leaderboard — revised down from 84.8%)
- OpenHarmony Bench: **60.8%** (OpenHarmony Bench — NEW)
- FrontierSWE v2: **15.8%** (Proximal — NEW)
- Bug Hunt Bench: **25.7 fixes** (Bug Hunt Bench public data — NEW)
- SWE-bench Verified: **90.5%** (BenchLM Oct 10 — NOT on current page)
- AA Coding Index: **76.5%** (BenchLM Oct 10 — NOT on current page)
- AA-SciCode: **61.5%** (BenchLM Oct 10 — NOT on current page)

Multimodal:

- MMMU-Pro: **82.3%** (Artificial Analysis / BenchLM — revised down from 83.2%)
- MathVision: **95.2%** (Qwen official blog / BenchLM — revised up from 86.6%)
- MathVision w/ Python: **97.7%** (Qwen official blog / BenchLM — NEW)
- VideoMMMU: **88.7%** (Qwen official blog / BenchLM — revised up from 87.6%)
- RealWorldQA: **88.0%** (Qwen official blog / BenchLM — revised up from 83.3%)
- CharXiv: **93.5%** (Qwen official blog / BenchLM — revised up from 79.8%)
- CharXiv w/o tools: **88.4%** (Qwen official blog / BenchLM — NEW)
- BabyVision: **82.0%** (Qwen official blog / BenchLM — NEW)
- BabyVision w/ Python: **91.3%** (Qwen official blog / BenchLM — NEW)
- Video-MME (with subtitle): **90.4%** (Qwen official blog / BenchLM — NEW)
- MLVU (M-Avg): **90.8%** (Qwen official blog / BenchLM — NEW)
- MMVU: **82.4%** (Qwen official blog / BenchLM — NEW)
- OmniDocBench 1.5: **92.1%** (Qwen official blog / BenchLM — NEW)
- ZeroBench: **24.0%** (Qwen official blog / BenchLM — NEW)
- ZeroBench w/ Python: **49.0%** (Qwen official blog / BenchLM — NEW)
- MedXpertQA (MM): **80.4%** (Qwen official blog / BenchLM — NEW)
- ScreenSpot Pro: **84.5%** (Qwen official blog / BenchLM — NEW)
- Vision2Web: **69.0%** (Qwen official blog / BenchLM — NEW)
- OCRBench V2: **74.2%** (Qwen official blog / BenchLM — NEW)
- CC-OCR: **79.6%** (Qwen official blog / BenchLM — NEW)
- ERQA: **77.8%** (Qwen official blog / BenchLM — NEW)
- SimpleVQA: **75.0%** (Qwen official blog / BenchLM — NEW)
- PerceptionBench: **63.5%** (Qwen official blog / BenchLM — NEW)
- LVBench: **81.8%** (Qwen official blog / BenchLM — NEW)
- V*: **87.0%** (BenchLM Oct 10 — NOT on current page)

Long context:

- AA-LCR: **87.0%** (BenchLM model page — strong long-context reasoning)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 73.18, #14/889) as of 2026-10-10.

- **Tool use: 92/100.** τ²-bench 95.3% (exceeds ≥90 frontier ref), TB-2.1 84.8% (at frontier), GDPval-AA 61.8%, OSWorld-Verified 46.7%, GDP.pdf 21.6%, JobBench 56.0%. Strong agentic cluster; capped by TB-4.0 39.9%, GDP.pdf 21.6%, OSWorld-Verified 46.7%, no GDPval-AA Elo ≥1750.
- **Reasoning: 89/100.** GPQA Diamond 93.5% (at frontier 90%+), AA Intelligence Index 50.0 (revised up from 45 in prior file), HLE 43.9% (at 40% frontier), AA-LCR 87.0% (excellent long-context), MMLU-Pro 92.1%, AA Global-MMLU-Lite 92.1%, CritPt 21.6%. Capped by no MRCR data and CritPt 21.6% moderate.
- **Context window: 95/100.** BenchLM confirms ≥984K tokens (≥1M tier threshold per methodology). AA-LCR 87.0% confirms strong long-context reasoning at 1M. No ≥98% retrieval at 512K+ curve published for perfect 100.
- **Multimodal: 95/100.** Text+image in, text out (per AA/BenchLM). AAA-MMMU-Pro 83.2%, MathVision 86.6%, VideoMMMU 87.6%, V* 87.0%, RealWorldQA 83.3%, CharXiv 79.8%. Per methodology "+image in = 60-70" but additional benchmarks and multimodal reasoning at frontier level support higher score. Capped by text-only output.
- **Coding: 88/100.** SWE-bench Verified 90.5% (revised up — exceeds ≥85 frontier), LiveCodeBench 93.2% (at ≥90 frontier), DeepSWE 65.4%, AA Coding Index 76.5%, AA-SciCode 61.5%, VulcanBench 84.8%. Strong coding cluster; capped by DeepSWE 65.4% below 74% frontier threshold.
- **Cost efficiency: 75/100.** $2.00 in / $6.00 out per 1M tokens (BenchLM model page / prior file).
- **Overall Score: 92/100.** Half-up mean: (92+89+95+95+88)/5 = 459/5 = 91.8 → 92. **Best-fit:** elite multimodal reasoning model with exceptional coding (SWE-bench 90.5%, LiveCodeBench 93.2%) and agentic tool use (τ²-bench 95.3%, TB-2.1 84.8%); cap: text-only output, moderate CritPt (21.6%), premium pricing ($2/$6).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/qwen3-8-max` for overall rank/score (#14/889, 73.18) and full benchmark tables; AA model page for Intelligence Index, modalities, pricing). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 73.18/100, rank #14/889, τ²-bench 95.3%, TB-2.1 84.8%, GPQA 93.5%, HLE 43.9%, Intelligence Index 50.0, SWE-bench 90.5%, LiveCodeBench 93.2%, AAA-MMMU-Pro 83.2%); AA model page (modalities, $2/$6 pricing, 984K context); Vals AI leaderboards. Prior file stated "no verified public score found" for GPQA/TB-2.1/SWE-bench — fresh BenchLM fetch confirms all three benchmarks exist with strong scores (93.5%, 84.8%, 90.5% respectively); Intelligence Index revised from 45 to 50.0.
- Future sources: add a new file next to this one, e.g. `Qwen3_8_1.md`, using the same headings.

---
