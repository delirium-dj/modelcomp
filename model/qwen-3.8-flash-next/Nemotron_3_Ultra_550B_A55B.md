# Qwen 3.8 Flash Next — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba / Qwen Team (`qwen3.8-flash-next`, canonical dotted slug `qwen3-8-flash-next`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next (experimental "Next" checkpoint previewing Qwen4 architecture) — **EXPERIMENTAL PREVIEW (repo meta.json warns: "expect churn and breaking changes before real Qwen4 ships")**
- **Short description:** Most remarkable efficiency result in series: **125B total / 6B active params (5% activation ratio)** delivering **AA Coding Index 73.0% (clears 70% frontier), LiveCodeBench v6 91.9% (HIGHEST IN SERIES), aaTerminalBench21 86.1% (within 2pts of 88%+ frontier), GDPval-AA 1,648 Elo / 56.4% norm (strongest GDPval norm in batch), GPQA 92.3% (AA)**. **Weaknesses: AA-Omniscience −12.2 index / 23.5% accuracy / 46.8% hallucination (2ND-LOWEST ACCURACY IN BATCH); HLE 38.0% (narrowest miss of 40% ref); OSWorld 2.0 19.4%; Tau3 45.4%.** **Repo meta.json: `noFreeId` — NO ZEN FREE TIER.**
- **Provider / access:** **Open weights on HF (`Qwen/Qwen3.8-Flash-Next`) under Qwen Community Licence (custom, NOT Apache 2.0 — commercial-use terms need verification)**, Vercel AI Gateway, **OpenCode Zen (`qwen3-8-flash-next` — NO Free ID)**. Self-hosting available. **Production Flash served as `qwen3.8-flash` on QwenCloud (1M window via YaRN).**
- **Release / knowledge:** 2026-08-26 release (HF + qwen.ai blog); **knowledge cutoff: not disclosed.** **BenchLM canonical slug: `qwen3-8-flash-next` (dotted) — repo folder `qwen-3-8-flash-next` 404s on BenchLM/LLMLearner.**
- **Context window:** **262,144 tokens (262K) native, extensible to 1M via YaRN** (repo meta.json; BenchLM 262K). **Production Flash serves 1M by default (991K max input, 131K max output).** YaRN factor 4.0 — **1M YaRN is unmeasured scaling claim; static YaRN "can slightly reduce short-context performance" (Alibaba warning).**
- **Modalities:** Text, image, **video in; text out** (repo meta.json). Tool use, reasoning (thinking mode default), JSON mode.
- **Pricing (as of 2026-11-08):** **Vercel AI Gateway: $0.12 in / $0.40 out per 1M** (repo meta.json) — **CHEAPEST IN BATCH alongside MiMo-V2.6-Flash**. Production Flash: $0.15/$0.47 (cached $0.016). **$0 self-hosted** (Qwen Community Licence — **custom, NOT Apache 2.0; commercial-use caveat vs 27B sibling's Apache 2.0**). **NO ZEN FREE TIER (`noFreeId`).** 50% batch discount.
- **Architecture:** **Ultra-sparse MoE: 125B total / 6B active (5% activation ratio)** — **125B main + 51B n-gram embedding params (20M bigrams/trigrams at layer 2, cheap scaling axis)**; hybrid Gated DeltaNet + QSA attention (7.6× prefill / 4.9× decode speedup at 1M); Gated Residual (4 branches); Muon optimizer; 8.6× prefill throughput vs Qwen3.7-Plus at 90% prefix-cache hit. FP8 build ~173 GiB VRAM.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-05) + official Alibaba sources. **Average of 27 qualifying raters: 85.6 Overall** (Tool 84.5, Reasoning 85.7, Context 87.5, Multimodal 84.5, Coding 85.5). Queue: 85.6. Step 5 Preview: 82. GLM 5.3 Flash: 81. My original: 79. **EXPERIMENTAL PREVIEW; Qwen Community Licence (custom, not Apache); NO ZEN FREE TIER.**

Agent / tool use:

- GDPval-AA: **1,648 Elo** (AA independent) / **56.4% normalized** (AA) — **STRONGEST GDPval NORM IN BATCH** (GLM / Step 5)
- aaTerminalBench21: **86.1%** (AA independent — Nov 5 refresh) — **within 2pts of 88%+ frontier** (GLM / Step 5)
- Toolathlon-Verified: **73.5%** (vendor) (GLM / Step 5)
- CoWorkBench: **73.9%** (vendor) (GLM / Step 5)
- JobBench: **55.7%** (vendor) (GLM / Step 5)
- AndroidWorld: **84.5%** (vendor) (GLM / Step 5)
- Agents' Last Exam: **51.2%** (vendor) (GLM / Step 5)
- AA Tau3 Banking: **45.4%** (AA — Nov 5 refresh, weak-mid) (GLM / Step 5)
- OSWorld 2.0: **19.4%** (vendor) (GLM / Step 5)
- **TB 2.0/2.1 (vendor), TB 4.0, τ³-Banking, MCP-Atlas, OSWorld 1.0, BrowseComp, Toolathlon (unverified), MazeBench, ALE, Claw-Eval, AA Agentic Index: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vendor) / **92.3%** (AA) — **corroborated, clears 90%+ frontier; AA HIGHER than vendor (unusual)** (GLM / Step 5)
- HLE: **35.9%** (vendor) / **38.0%** (AA) — **FAILS 40%+ REF by 2.0pts on independent run (narrowest miss in batch)** (GLM / Step 5)
- AA Intelligence Index: **39.8** (AA current board) (GLM)
- IFBench: **81.3%** (GLM / Step 5)
- AA-LCR: **79.7%** (AA) (GLM / Step 5)
- CritPt: **11.1%** (weak) (GLM / Step 5)
- AA-Omniscience: **24.5% accuracy / 45.3% non-hallucination / −9.7 index** (AA) / **23.5% accuracy / 46.8% hallucination / −12.2 index** (Nov 5 re-read — **2ND-LOWEST ACCURACY IN BATCH, DEEPLY NEGATIVE INDEX**) (GLM / Step 5)
- MathVision: **90.6%** / **95.7% w/Python** (vendor) — **STRONGEST MATHVISION IN SERIES** (GLM / Step 5)
- CharXiv: **90.6% w/tools / 84.6% w/o** (GLM / Step 5)
- **AA Intelligence Index, ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro, HMMT, IMOAnswerBench: NO VERIFIED PUBLIC SCORE** — **composite depth, 3 of 5 reasoning refs + all mathematics unmeasured** (GLM / Step 5)

Coding:

- AA Coding Index: **73.0%** (AA independent) — **CLEARS 70%+ FRONTIER REF** (GLM / Step 5)
- LiveCodeBench v6: **91.9%** (vendor) — **HIGHEST LIVECODEBENCH IN SERIES** (GLM / Step 5)
- SWE-bench Pro: **62.5%** (vendor; ahead of Opus 4.6 Max 53.4%) (GLM / Step 5)
- SWE Multilingual: **81.0%** (GLM / Step 5)
- DeepSWE: **58.7%** (vendor) — **15.3pts UNDER 74% FRONTIER REF** (GLM / Step 5)
- NL2Repo: **48.1%** (GLM / Step 5)
- AA-SciCode: **50.6%** (AA) — **under 55%+ ref** (GLM / Step 5)
- AA-MMMU-Pro: **79.8%** (AA) (GLM / Step 5)
- ExtractBench (LlamaIndex): **89.88%** (Nov 5 snapshot — NEW) (GLM / Step 5)
- **SWE-bench Verified, Vibe Code Bench, TB 4.0, FrontierCode, Bug Hunt Bench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **85% terminal ref only checkable on AA harness**

Multimodal:

- MathVision: **90.6% / 95.7% w/Python** — **STRONGEST MATHVISION IN SERIES** (GLM / Step 5)
- CharXiv: **90.6% w/tools / 84.6% w/o** (GLM / Step 5)
- RealWorldQA: **88.5%** (GLM / Step 5)
- AA-MMMU-Pro: **79.8%** (AA) (GLM / Step 5)
- LVBench (long video): **76.6%** (GLM / Step 5)
- Vision2Web: **64.0%** (GLM / Step 5)
- ERQA: **72.3%** (GLM / Step 5)
- ExtractBench (LlamaIndex): **89.88%** (Nov 5 — NEW) (GLM / Step 5)
- **Text + image + video in; text out; NO AUDIO INPUT** — video tier (75-90)
- **NO OMNIDOCBENCH, BABYVISION, ZEROBENCH, DESIGN ARENA, PARSEBENCH** (GLM / Step 5)

Long context:

- 262K native, extensible to 1M via YaRN (factor 4.0) (GLM / Step 5)
- AA-LCR: **79.7%** (AA) (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED FOR THIS CHECKPOINT** (GLM / Step 5)
- **1M YaRN UNMEASURED SCALING CLAIM; static YaRN "can slightly reduce short-context performance" (Alibaba warning)** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 27 qualifying raters = **85.6 Overall** (Tool 84.5, Reasoning 85.7, Context 87.5, Multimodal 84.5, Coding 85.5). Queue: 85.6. Step 5 Preview: 82. GLM 5.3 Flash: 81. My original: 79. **EXPERIMENTAL PREVIEW; Qwen Community Licence (custom, not Apache); NO ZEN FREE TIER; AA-Omniscience −12.2 / 23.5% accuracy / 46.8% hallucination (2ND-LOWEST ACCURACY); HLE 38.0% (NARROWEST MISS).**

- **Tool use: 78/100.** (was 76) GDPval-AA **1,648 Elo (56.4% norm, STRONGEST IN BATCH)**; aaTerminalBench21 **86.1% (within 2pts of 88%+ frontier)**; Toolathlon **73.5%**; CoWorkBench **73.9%**; JobBench **55.7%**; AndroidWorld **84.5%**; Agents' Last Exam **51.2%**. **Capped by:** OSWorld 2.0 **19.4%**; Tau3 **45.4% (4.6pts under 50% ref)**; **NO TB 2.0/2.1 (vendor)/TB 4.0/τ³-Banking/MCP-Atlas/OSWorld 1.0/BrowseComp/Toolathlon (unverified)/MazeBench/ALE/Claw-Eval/AA Agentic Index** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 70/100.** (was 82) GPQA Diamond **91.7-92.3% (corroborated, AA HIGHER — unusual)**; HLE **38.0% (NARROWEST MISS OF 40% REF IN BATCH)**; AA-LCR **79.7%**; IFBench **81.3%**; MathVision **95.7% w/Python (STRONGEST IN SERIES)**; CharXiv **90.6%**; AA-LCR **79.7%**. **Capped by:** AA-Omniscience **−12.2 index / 23.5% accuracy / 46.8% hallucination (2ND-LOWEST ACCURACY IN BATCH)**; CritPt **11.1%**; **NO AA Intelligence Index/ARC-AGI/MRCR/AIME/FrontierMath/MMLU-Pro** — **composite depth + all mathematics unmeasured**.
- **Context window: 88/100.** (was 78) **262K NATIVE (200K-500K band ceiling, 88)**; YaRN to 1M (factor 4.0) — **1M YaRN UNMEASURED SCALING CLAIM; static YaRN can hurt short-context (Alibaba warning)**; AA-LCR **79.7%**. **Held at 88 (not ≥1M tier): 262K native; YaRN extension not native; NO MRCR/GraphWalks; hosted caps output at 131K.**
- **Multimodal: 92/100.** (was 78) Text, image, video in; MathVision **95.7% w/Python (STRONGEST IN SERIES)**; CharXiv **90.6%**; RealWorldQA **88.5%**; ExtractBench **89.88%**; AA-MMMU-Pro **79.8%**; LVBench **76.6%**; V* **90.6%**. **Held at 92 (not 95+): NO audio input; text-only output; Vision2Web 64.0%, ERQA 72.3% well below suite; OmniDocBench/BabyVision/ZeroBench unmeasured.**
- **Coding: 82/100.** (was 82) AA Coding Index **73.0% (CLEARS 70%+ FRONTIER REF, strongest in batch outside GPT-5.6 line)**; LiveCodeBench v6 **91.9% (HIGHEST IN SERIES)**; SWE-Pro **62.5%**; SWE Multilingual **81.0%**; TB 2.1 **86.1% (AA)**. **Capped by:** DeepSWE **58.7% (15.3pts UNDER 74% REF)**; AA-SciCode **50.6% (UNDER 55% REF)**; NL2Repo **48.1%**; **NO SWE-V/VIBE CODE/TB 4.0/FRONTIERCODE** — 85% terminal ref only checkable on AA harness.
- **Cost efficiency: 97/100.** (was 94) **$0.12/$0.40 per 1M via Vercel (CHEAPEST IN BATCH alongside MiMo-V2.6-Flash)**; **$0 self-hosted** (Qwen Community Licence — **custom, NOT Apache 2.0 — commercial-use caveat vs 27B sibling's Apache 2.0**); 50% batch discount. **Held at 97 (not 100): NO ZEN FREE TIER (`noFreeId`); 262K native window means long work needs YaRN.**
- **Overall Score: 82/100.** (was 79) Half-up mean of (78 + 70 + 88 + 92 + 82) / 5 = 410 / 5 = 82 → **82**. **Below queue (85.6), average of 27 qualifying raters (85.6).** Best-fit: **MOST EFFICIENT MODEL IN SERIES** — 125B/6B-active MoE (5% activation), AA Coding Index 73.0%, LiveCodeBench 91.9%, aaTerminalBench21 86.1%, GDPval-AA 1,648 Elo, MathVision 95.7% w/Python, $0.12/$0.40 + open weights. **CAUTIONS:** (1) **EXPERIMENTAL PREVIEW — repo warns "expect churn and breaking changes before real Qwen4 ships"**; (2) **AA-Omniscience 23.5% accuracy / −12.2 index — NOT A FACTUAL ASSISTANT**; (3) OSWorld 2.0 19.4%, DeepSWE 58.7% show weakness on newest execution harnesses/repo-scale gen despite strong repair-coding.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 82), GLM 5.3 Flash (2026-11-05, Overall 81) + official Alibaba sources (Qwen3.8-Flash-Next model card, BenchLM 39-row catalog, repo meta.json, Vercel pricing, ExtractBench, Artificial Analysis). **Average of 27 qualifying raters: 85.6 Overall.** Queue: 85.6. **Critical findings:** EXPERIMENTAL PREVIEW (not product; repo warns churn/breaking changes); **125B/6B MoE (5% activation) — MOST EFFICIENT IN SERIES**; LiveCodeBench 91.9% (HIGHEST IN SERIES); AA Coding Index 73.0% (CLEARS 70% FRONTIER); GDPval 1,648 Elo (STRONGEST IN BATCH); aaTerminalBench21 86.1% (within 2pts of 88%+ frontier); MathVision 95.7% w/Python (STRONGEST IN SERIES); **AA-Omniscience −12.2 / 23.5% accuracy / 46.8% hallucination (2ND-LOWEST ACCURACY IN BATCH)**; HLE 38.0% (NARROWEST MISS OF 40% REF); OSWorld 2.0 19.4%; DeepSWE 58.7% (15.3pts under 74% ref); Qwen Community Licence (custom, NOT Apache); NO ZEN FREE TIER; 262K native + YaRN to 1M (YaRN unmeasured, can hurt short-context); canonical BenchLM slug `qwen3-8-flash-next` (dotted); repo folder `qwen-3-8-flash-next` 404s.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.8-Flash-Next model card (primary benchmark source)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [BenchLM — Qwen3.8-Flash-Next benchmark scores (39 rows, 56.12/100, #64/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-8-flash-next)
  - [Artificial Analysis — Qwen3.8-Flash-Next](https://artificialanalysis.ai/models/qwen3-8-flash-next)
  - [Artificial Analysis — terminalbench-v2-1 leaderboard (source of the 86.1% aaTerminalBench21 row)](https://artificialanalysis.ai/evaluations/terminalbench-v2-1)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — tau3-banking leaderboard](https://artificialanalysis.ai/evaluations/tau3-banking)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [Vercel AI Gateway — qwen3.8-flash-next pricing and access](https://vercel.com/ai-gateway/models/qwen3.8-flash-next)
  - [Repo curated meta — `model/qwen-3.8-flash-next/meta.json` (125B/6B active, 262K→1M YaRN, Qwen Community licence, noFreeId, preview-churn warning)](model/qwen-3.8-flash-next/meta.json)
  - See also: `model/qwen-3.8-27b/` — sibling 27B dense checkpoint, refreshed in this same batch
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---