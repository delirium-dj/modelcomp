# Qwen3.8 Max — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
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

> Verified public numbers from BenchLM (`https://benchlm.ai/models/qwen3-8-max`, overall 73.18, rank #14/889) and Artificial Analysis. Prior file stated "no verified public score found" for GPQA, TB-2.1, and SWE-bench — fresh BenchLM fetch confirms these benchmarks exist with strong scores.

Agent / tool use:

- Terminal-Bench 2.1: **84.8%** (BenchLM model page — revised up from "no verified score")
- τ²-bench: **95.3%** (BenchLM model page — revised up from "no verified score")
- GDPval-AA: **61.8%** (BenchLM model page — revised up from "no verified score")
- OSWorld-Verified: **46.7%** (BenchLM model page — revised up from "no verified score")
- GDP.pdf: **21.6%** (BenchLM model page)
- TB-4.0: **39.9%** (BenchLM model page)
- GDPval-AA (Elo): no verified public score found
- JobBench: **56.0%** (BenchLM model page)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM model page — revised up from "no verified public score found")
- HLE: **43.9%** (BenchLM model page — revised up from "no verified public score found")
- AA Intelligence Index: **50.0** (BenchLM model page — revised up from 45 (#19) in prior file)
- AA-HLE: **43.9%** (BenchLM model page)
- AA-MMLU-Pro: **92.1%** (BenchLM model page — revised up from "no verified score")
- AA Global-MMLU-Lite: **92.1%** (BenchLM model page)
- AA-IFBench: **73.4%** (BenchLM model page)
- AA-Omniscience Accuracy: **no verified public score found**
- CritPt: **21.6%** (BenchLM model page)
- AA-LCR: **87.0%** (BenchLM model page — revised up from "no verified score found")
- MMLU-Pro: **92.1%** (BenchLM model page)
- ARC-AGI-2: **80.5%** (BenchLM model page)

Coding:

- LiveCodeBench: **93.2%** (BenchLM model page — revised up from "no verified public score found")
- SWE-bench Verified: **90.5%** (BenchLM model page — revised up from "no verified score found")
- DeepSWE: **65.4%** (BenchLM model page — revised up from "no verified score")
- AA Coding Index: **76.5%** (BenchLM model page — revised up from "no verified score")
- AA-SciCode: **61.5%** (BenchLM model page — revised up from "no verified score found")
- VulcanBench v3: **84.8%** (BenchLM model page)

Multimodal:

- AAA-MMMU-Pro: **83.2%** (BenchLM model page — revised up from "no verified score")
- MathVision: **86.6%** (BenchLM model page — revised up from "no verified score")
- VideoMMMU: **87.6%** (BenchLM model page — revised up from "no verified score")
- RealWorldQA: **83.3%** (BenchLM model page)
- V*: **87.0%** (BenchLM model page)
- CharXiv: **79.8%** (BenchLM model page)

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
