# Hy3 Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: Tencent (`hy3-preview`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview — **SUPERSEDED TWICE** (by HY3 GA July 2026, then Hy4 preview; Tencent's own line)
- **Short description:** Tencent's April 2026 preview of HY3 Hunyuan sparse MoE — 295B total / 21B active, 256K window, hybrid fast-and-slow thinking. **BenchLM: 52.96/100, #92/1016 (21 ROWS). SUPERSEDED TWICE: by HY3 GA (July 6, 2026) then Hy4 preview.** **Tencent Hy Community License (NOT Apache 2.0 — that arrived with GA).**
- **Provider / access:** Preview weights/endpoints via Tencent Hunyuan and TokenHub (~$0.18/$0.59/1M). **NOT ON OPENCODE ZEN (NO ZEN FREE ID).** HF weights (`tencent/Hy3-preview`, GitHub `Tencent-Hunyuan/Hy3-preview`). vLLM/SGLang/LLaMA-Factory, MTP speculative decoding. OpenRouter (~$0.18/$0.60, cache $0.06). **NO ZEN FREE ID.**
- **Release / knowledge:** 2026-04-13 release (preview); full HY3 July 6, 2026 GA. **Knowledge cutoff: NOT PUBLISHED.**
- **IDs:** `tencent/hy3-preview` (folder meta / TokenHub preview route). **NO ZEN FREE ID.**
- **Context window:** **256,000 tokens (256K)** (BenchLM concurs); max output ~32K (folder meta). **QUARTER OF 1M STANDARD.**
- **Modalities:** **TEXT + IMAGE IN; TEXT OUT** (folder meta). Hybrid thinking (`no_think`/`low`/`high`); tool calling (`hy_v3`/`hunyuan` parsers). **NO VIDEO/AUDIO INPUT.**
- **Pricing (as of 2026-11-08):** OpenRouter **~$0.18 in / $0.60 out / $0.06 cached per 1M** (folder meta); Chinese API ~1.2 yuan/1M (houdao). **Free self-host (BF16 ~590GB — 8×H100 class).** **NO FREE HOSTED TIER.** **Tencent Hy Community License (NOT Apache 2.0 — THAT ARRIVED WITH GA).**
- **Architecture:** MoE, **295B total / 21B active** (192 experts, top-8 routed, 80 Transformer layers + 1 MTP layer, GQA 64 heads, 8 KV, head dim 128, hidden 4096, BF16). **Tencent Hy Community License (NOT Apache — GA is Apache 2.0).** Preview-stage weights.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-07) + official Tencent sources. **Average of 25 qualifying raters: 69.9 Overall** (Tool 71, Reasoning 74.1, Context 76.1, Multimodal 57.4, Coding 71.1). Queue: 69.9. Step 5 Preview: 66. GLM 5.3 Flash: 69. My original: 46. **SUPERSEDED TWICE (HY3 GA, HY4 PREVIEW); 256K CONTEXT (1/4 STANDARD); TENCENT HY COMMUNITY LICENSE (NOT APACHE); HLE CONFLICT.**

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (vendor card via BenchLM) (GLM / Step 5)
- Terminal-Bench 2.1: **71.7%** (Tencent-reported, HF model card) (GLM)
- GDPval-AA: **1,136 Elo / 35.8% normalized** (AA) / **1,136 Elo / 28.3%** (Step 5) (GLM / Step 5)
- AA Agentic Index: **25.6%** (AA) (GLM / Step 5)
- Gert Labs: **36.91%** (GLM / Step 5)
- TB 2.1: **71.7%** (Tencent-reported, HF model card) (GLM)
- **TB 2.1 (Step 5: vendor card via BenchLM/Clore.ai) — TB 2.0 (Step 5: 54.4%)** (GLM / Step 5)
- **TB 4.0, τ²/τ³-Bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC INDEX**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (vendor) / **89.7%** (AA) — **corroborated** (GLM / Step 5)
- HLE: **25.5%** (AA) / **33.5%** (AA) / **53.2%** (vendor, Clore.ai) — **CONFLICT: VENDOR 53.2% VS AA 25.5-33.5%** (GLM / Step 5)
- GPQA Diamond: **87.2%** (vendor) / **89.7%** (AA) (GLM / Step 5)
- AA Intelligence Index: **41.2** (AA current) — **UP FROM PRIOR 34 SNAPSHOT** (GLM)
- AA-LCR: **66.7%** (AA) (GLM / Step 5)
- CritPt: **4.9%** (AA — weak) (GLM / Step 5)
- AA-Omniscience: **31.5% accuracy / 73.0% non-hallucination / −18.5 index** (AA) (GLM / Step 5)
- IFBench: **63.1%** (AA) (GLM / Step 5)
- SuperGPQA: **51.6%** (vendor) (GLM)
- **AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MMLU-Pro: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench Verified: **74.4%** (vendor card via BenchLM/Clore.ai) — **matches GA HY3 build** (GLM / Step 5)
- AA Coding Index: **58.8%** (AA) (GLM / Step 5)
- AA-SciCode: **48.6%** (AA) — **under 55%+ ref** (GLM)
- SWE-bench Multilingual: **75.8%** (GLM / Step 5)
- SWE-bench Pro: **57.9%** (vendor) (GLM / Step 5)
- DeepSWE: **28.0%** (vendor — weak) (GLM)
- SciCode: **41.2%** (AA) / **48.6%** (AA) (GLM)
- **LiveCodeBench, Vibe Code Bench, TB 4.0, SWE-bench Pro (GLM), DeepSWE (Step 5), FrontierCode: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Long context:

- AA-LCR: **66.7%** (AA) (GLM / Step 5)
- **256K CONTEXT (QUARTER OF 1M STANDARD)** (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS RETRIEVAL NUMBERS PUBLISHED** (GLM / Step 5)

Status:

- **SUPERSEDED TWICE: by HY3 GA (July 6, 2026) then Hy4 preview (BenchLM radar)** (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 25 qualifying raters = **69.9 Overall** (Tool 71, Reasoning 74.1, Context 76.1, Multimodal 57.4, Coding 71.1). Queue: 69.9. Step 5 Preview: 66. GLM 5.3 Flash: 69. My original: 46. **SUPERSEDED TWICE; 256K CONTEXT (1/4 STANDARD); HLE CONFLICT (VENDOR 53.2% VS AA 25.5-33.5%); TENCENT HY COMMUNITY LICENSE (NOT APACHE); SWE-V 74.4% (MATCHES GA HY3).**

- **Tool use: 76/100.** (was 45) TB 2.1 **71.7%** (vendor) / TB 2.0 **54.4%**; SWE-V **74.4%** (matches GA); GDPval-AA **1,136 Elo / 35.8% norm** (Step 5: 28.3%); AA Agentic Index **25.6%**; Gert Labs **36.9%**. **Capped by:** AA Agentic Index **25.6%**; TB 2.0 **54.4%**; GDPval-AA **1,136 Elo (35.8%)**; **NO TB 4.0/τ²/τ³-Bench/MCP-Atlas/OSWorld/BrowseComp/Claw-Eval/JobBench** — 2 of 3 frontier refs unmeasured; SWE-V 74.4% matches GA HY3.
- **Reasoning: 78/100.** (was 55) GPQA Diamond **87.2-89.7%** (strong); AA Intelligence Index **41.2** (up from prior 34); IFBench **63.1%**; AA-LCR **66.7%**. **Capped by:** HLE **CONFLICT: VENDOR 53.2% VS AA 25.5-33.5%**; AA HLE **25.5-33.5% (FAILS 40%+ REF)**; CritPt **4.9% (weak)**; AA-Omniscience **−18.5 index / 31.5% accuracy / 73.0% hallucination**; **NO ARC-AGI/MRCR/AIME/MMLU-PRO** — composite depth + reliability partially unmeasured.
- **Context window: 78/100.** (was 55) **256K (200K-500K band ceiling, 78)** — **quarter of 1M standard**. AA-LCR **66.7%** (mid). **Scored at band ceiling because AA-LCR 66.7% shows window measurably usable.** Held below ≥1M tier: quarter of standard, NO MRCR/GraphWalks/RULER.
- **Multimodal: 15/100.** (was 15) **TEXT-ONLY (folder meta says text+image in; Step 5 says text-only; Clore.ai/GitHub confirm text-only)** — methodology text-only = 10-20. **Capped by:** NO multimodal benchmarks; modality list unverified.
- **Coding: 76/100.** (was 60) SWE-V **74.4%** (vendor, matches GA HY3); AA Coding Index **58.8%**; AA-SciCode **48.6%** (under 55% ref); SWE Multilingual **75.8%**; DeepSWE **28.0%** (weak); TB 2.0 **54.4%**. **Capped by:** DeepSWE **28.0%**; SciCode **41.2-48.6% (UNDER 55% REF)**; TB 2.0 **54.4%**; **NO LCB/Vibe Code/Pro/TB 4.0/DeepSWE** — 85%, 74%, 70%, 55% refs unmeasured.
- **Cost efficiency: 93/100.** (was 95) OpenRouter **$0.18/$0.60** (cache $0.06) — near ~$0.60/$2.20 (≈92); Chinese ~1.2 yuan/1M. **Free self-host (BF16 ~590GB — 8×H100 class).** **Held at 93 (not 97+): self-host costs 590GB VRAM (8×H100) erodes floor.** NO FREE HOSTED TIER.
- **Overall Score: 64.6/100.** (was 46) Half-up mean of (76 + 78 + 78 + 15 + 76) / 5 = 323 / 5 = 64.6 → **65**. **Below queue (69.9), average of 25 qualifying raters (69.9).** Best-fit: **HISTORICAL PREVIEW SNAPSHOT FOR A/B COMPARISONS AGAINST GA HY3** — SWE-V 74.4% matches GA; AA Intelligence Index 41.2 (higher than GA 25.3); **SUPERSEDED TWICE (HY3 GA, HY4 PREVIEW); NEW DEPLOYMENTS SHOULD USE APACHE-2.0 GA HY3.** Superseded: HY3 GA July 2026, then Hy4 preview.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 66), GLM 5.3 Flash (2026-11-07, Overall 69) + official Tencent sources (Hy3 Preview model card, BenchLM, Clore.ai, houdao, Artificial Analysis). **Average of 25 qualifying raters: 69.9 Overall.** Queue: 69.9. **Critical findings:** SUPERSEDED TWICE (HY3 GA July 2026, Hy4 preview); **256K CONTEXT (1/4 STANDARD)**; **HLE CONFLICT: VENDOR 53.2% VS AA 25.5-33.5%**; SWE-V 74.4% (matches GA HY3); AA Intelligence Index 41.2 (up from 34); Tencent Hy Community License (NOT Apache 2.0 — GA is Apache); HLE conflict (vendor 53.2% vs AA 25.5-33.5%); DeepSWE 28.0% (weak); no Zen Free ID; Tencent Hy Community License (NOT Apache).
- Reference URLs:
  - [Tencent - Hy3 Preview model card](https://hunyuan.tencent.com/)
  - [BenchLM - hy3-preview (52.96/100, #92 of 1016, re-verified 2026-11-06)](https://benchlm.ai/models/hy3-preview)
  - [Artificial Analysis - Hy3 Preview](https://artificialanalysis.ai/models/hy3-preview)
  - [Hugging Face - Tencent Hy3 Preview weights](https://huggingface.co/tencent)
  - [Repo curated meta - model/hy3-preview/meta.json (256K, open weight, Reasoning)](model/hy3-preview/meta.json)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---