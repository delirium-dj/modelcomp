# Qwen 3.8 Flash — findings by Laguna S 2.1

> Source: opencode/qwen-3.8-flash (Alibaba), e.g. BenchLM, modelscale, Artificial Analysis
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Qwen 3.8 Flash (Alibaba), 125B MoE (6B active) previewing the Qwen4 architecture.
- Short description: Alibaba's 125B efficiency-tier model in the 3.8 family — near-flagship coding and multimodal at ~1/10th of Max pricing.
- Provider / access: Alibaba Cloud; OpenCode Zen `opencode/qwen-3.8-flash`; Chat Completions-compatible API.
- Release / knowledge: August 2026 (Flash-Next checkpoint 2026-08-26). Knowledge cutoff: not verified.
- IDs: `opencode/qwen-3.8-flash` (paid tier). Note: public ledgers split this tier into hosted "Qwen3.8 Flash" (1M context, metered pricing) and the "Qwen3.8-Flash-Next" experimental checkpoint (262K, open-weight); this report scores the Flash tier using exact-ID specs/pricing plus explicitly-marked Flash-Next measured rows as the closest proxy (same convention as the repo's Muse Spark 1.3 rater).
- Context window: 1,000,000 total tokens (exact-ID hosted Flash; ≥1M tier; clears 64K caveat). Flash-Next checkpoint cataloged at 262K (BenchLM/modelscales).
- Modalities: text, image, video input → text output (+image +video-in); reasoning yes; tool/function calls yes.
- Pricing (as of 2026-09-23): $0.15 / $0.47 per 1M in/out (hosted Flash, pricepertoken/llm-stats); no $0 Zen tier confirmed; 98% cache discount (AA). No free ID.
- Architecture: 125B MoE, 6B active; Qwen Community License 1.0 (commercial use allowed with restrictions).

### Raw benchmarks found

> Verified public numbers, sourced per metric (BenchLM / modelscale / MarkTechPost ledgers; Flash-Next rows explicitly provisional proxies, same tier). Benchmarks not located are NOT fabricated.

Agent / tool use:
- Terminal-Bench 2.1: no Flash-exact number; Flash-Next proxy: CoWorkBench **73.9%**, JobBench **55.7%**, Toolathlon-Verified **73.5%** (BenchLM/MarkTechPost)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1743** (BenchLM ledger) — near-frontier (frontier lead ~1750+)
- Toolathon / MCP-Atlas / OSWorld: Toolathlon-Verified 73.5%; OSWorld 2.0 **19.4%** (weak row — noted)
- Agents' Last Exam: **51.2%** (BenchLM)

Reasoning / knowledge:
- GPQA Diamond: **91.7%** (AA-GPQA 92.3%) (BenchLM/modelscales)
- HLE: **35.9%** w/o tools / AA-HLE **38.0%** (BenchLM/modelscales)
- Artificial Analysis Intelligence Index v4.3.2 / BenchLM overall: **55.8** (BenchLM ledger; modelscales lists 39.8 on a different index cut — both cited)
- AA-LCR: **77.0%** (BenchLM)
- CritPt: **11.1%** (BenchLM)

Coding:
- SWE-bench Verified / SWE-Pro: SWE-Pro **62.5%**, SWE-Multilingual **81.0%** (vendor via MarkTechPost/BenchLM)
- LiveCodeBench: v6 **91.9%** (vendor)
- SciCode: **46.9%** (BenchLM)
- DeepSWE: **58.7%** (DeepSWE 1.1 via MarkTechPost)
- AA Coding Index: 73.0 (index, noted only)

Long context:
- 1M hosted window exact-ID verified; AA-LCR 77.0% is the only retrieval-adjacent number — no MRCR percentage found.

Multimodal (proxy): MathVision 90.6–95.7, CharXiv 90.6, RealWorldQA 88.5 (BenchLM).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Independent re-normalization of the shared BenchLM/official ledger per methodology bands.

- **Tool use: 78/100.** TB 2.1 proxies ~73–74 (mid-to-high) + GDPval-AA 1743 (near-frontier) + Toolathlon/JobBench proxy rows; capped by OSWorld 2.0 19.4% and zero Flash-exact tool numbers. (Repo Muse Spark 1.3 rater: 75.)
- **Reasoning: 87/100.** GPQA 91.7% (frontier 90%+ bar) + HLE ~36–38 + AA Index 55.8 (just under the 60 frontier threshold); capped below 90 by HLE not clearing ~40% and Index just shy of 60.
- **Context window: 92/100.** Exact-ID 1M hosted window (≥1M tier); AA-LCR 77.0% but no MRCR ≥98%-at-512K retrieval proof, so off the 95+ tier.
- **Multimodal: 88/100.** Text + image + video input with text-only output (+image +video-in); proxy MathVision/CharXiv/RealWorldQA strong (methodology +video in = 75–90, +audio/non-text-out = 90–100 band floor reached via video-in).
- **Coding: 83/100.** SWE-Pro 62.5 + LiveCode 91.9 (frontier-high) + DeepSWE 58.7 + SciCode 46.9; strong efficiency-tier coding, capped by DeepSWE <74% and no Flash-exact SWE-bench Verified.
- **Cost efficiency: 97/100.** $0.15/$0.47 (~$0.09/MTok blended) is within striking distance of the $0 value band; no $0 free tier (paid only).
- **Overall Score: 86/100.** (78 + 87 + 92 + 88 + 83) / 5 = 428 / 5 = 85.6 → 86. (Repo Muse rater 85; independent re-normalization of the same BenchLM ledger.)

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research of primary benchmark ledgers (BenchLM, modelscale, MarkTechPost, Artificial Analysis) and the official Qwen org pricing/specs pages; re-normalized via model-comparison.md v4. Flash-Next rows used as explicitly-marked provisional proxies (same tier). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.