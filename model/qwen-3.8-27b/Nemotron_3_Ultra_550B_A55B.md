# Qwen 3.8 27B — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba Qwen (`Qwen/Qwen3.8-27B`, canonical dotted slug `qwen3-8-27b`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B — **DENSE 27B APACHE 2.0 OPEN-WEIGHT** (canonical BenchLM slug `qwen3-8-27b` — repo folder `qwen-3-8-27b` 404s on BenchLM/LLMLearner; dotted slug lookup trap)
- **Short description:** **Most striking value proposition in series**: 27B dense Apache 2.0 model (55.6 GB FP16, **17 GB at Q4_K_M — fits single 24 GB consumer GPU**) scoring **SWE-bench 86.0% (Vals), AA Coding Index 68.1%, LiveCodeBench v6 90.3%, OmniDocBench 91.1%, CharXiv 90.2%, MathVision 94.6% w/Python**. **75 benchmarks — DEEPEST EVIDENCE BASE IN SERIES** (majority independently attributed). **Weaknesses concentrated: CritPt 5.4% (LOWEST IN SERIES), AA Intelligence Index 20.1%, security-agentic collapse (CyberGym-E2E-AA 0.0%, AA Cyber Index 12.7%).**
- **Provider / access:** **OPEN WEIGHTS, APACHE 2.0** on HF (`Qwen/Qwen3.8-27B`, `Qwen/Qwen3.8-27B-FP8`); Alibaba Cloud Model Studio, Chutes (TEE variant), self-hosting. **Repo meta.json: `noFreeId` — NO OPENCODE ZEN FREE TIER.**
- **Release / knowledge:** 2026-08-14 release (HF card); **knowledge cutoff: not disclosed.**
- **IDs:** `Qwen/Qwen3.8-27B` (HF); `Qwen/Qwen3.8-27B-FP8`; `qwen3-8-27b` (BenchLM canonical); `qwen/qwen3.8-27b` (OpenRouter).
- **Context window:** **262,144 tokens (262K) native, extensible to 1M via YaRN** (repo meta.json, BenchLM 262K). Hosted endpoint: 1M total, 991K max input, 131K max output, 262K max reasoning.
- **Modalities:** **Text, image, video in; text out** (repo meta.json). Native vision-language dense model with vision encoder.
- **Pricing (as of 2026-11-08):** **APACHE 2.0 — SELF-HOSTING FREE** (55.6 GB FP16, **17 GB Q4_K_M — runs on single 24 GB consumer GPU**); hosted ~$0.40 in / $0.04 cached / $3.00 out per 1M (llm-stats). **DECISIVE FACT: Apache 2.0 self-hosting free.**
- **Architecture:** **Dense 27B** (not MoE) — 27.78B params incl. vision tower; 64 layers, hybrid Gated DeltaNet + Gated Attention (16×3×DeltaNet + 1×Attention/group); MTP trained.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-05) + official Alibaba sources. **Average of 30 qualifying raters: 86.6 Overall** (Tool 85.3, Reasoning 85.2, Context 90.5, Multimodal 86.3, Coding 85.9). Queue: 86.6. Step 5 Preview: 79. GLM 5.3 Flash: 81. My original: 78. **75 BENCHMARKS — DEEPEST EVIDENCE BASE IN SERIES; APACHE 2.0; 27B DENSE; 262K NATIVE + YARN.**

Agent / tool use:

- OSWorld-Verified: **84.3%** (vendor) — **STRONGEST OSWORLD IN SERIES** (GLM / Step 5)
- AndroidWorld: **81.9%** (GLM / Step 5)
- CoWorkBench: **70.7%** (vendor); WebArena-Verified: **64.8%** (GLM / Step 5)
- Terminal-Bench 2.1: **73.0%** (vendor) / **79.8%** (AA) / **58.4%** (Vals) — **21.4pt spread** (GLM / Step 5)
- Agents' Last Exam: **42.9%** (vendor) / **42.9** score (GLM)
- AA Agentic Index: **46.5%** (AA); AA Tau3 Banking: **48.0%** (AA); AA AutomationBench: **48.2%** (AA); AA EnterpriseOps-Gym: **44.2%** (GLM / Step 5)
- GDPval-AA: **1,423-1,427 Elo** (AA) / **45.9-46.2% normalized** (GLM / Step 5)
- AA Briefcase: **1,391-1,397 Elo** (GLM / Step 5)
- AA TB 4.0: **5.6%** (AA — very weak on 2026 harness); MazeBench: **0%** (GLM / Step 5)
- AA Cyber Index: **12.7%** (weak); CWE-Bench-AA: **26.7%**; DeepsecBench-AA: **11.5%**; **CyberGym-E2E-AA: 0.0%** — **SECURITY LAYER EFFECTIVELY ABSENT** (GLM / Step 5)
- **τ³-Banking, MCP-Atlas, Toolathlon, Claw-Eval, ALE: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (vendor) / **90.5%** (AA) / **88.9%** (Vals) — **corroborated, AA clears 90%+ frontier** (GLM / Step 5)
- HLE: **30.8%** (vendor) / **33.9%** (AA) — **fails 40%+ ref by ~6-9pts on both** (GLM / Step 5)
- AA Intelligence Index: **33.7** (AA current board) / **20.1%** (Step 5) — **low** (GLM / Step 5)
- AA-Omniscience: **15.6% accuracy / 30.3% non-hallucination / −10.0 index** (AA — **very weak**) / **index −6.4, accuracy 17.3%, hallucination 28.6%** (Step 5) — **LOWEST ACCURACY (17.3%) IN SERIES, 4th-lowest hallucination** (Step 5)
- AA-LCR: **82.0%** (AA) — **strong for class** (GLM / Step 5)
- CritPt: **5.4%** (AA) — **LOWEST CRITPT IN SERIES** (GLM / Step 5)
- MLCR-AA: **21.7%** (GLM)
- MMLU-Pro (Vals): **84.3%**; IFBench: **79.5%** (GLM / Step 5)
- MathVision: **90.0% / 94.6% w/Python** (GLM / Step 5)
- **ARC-AGI, MRCR, AIME, FrontierMath Tier 4, AA-Omniscience (vendor): NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **reliability refs unmeasured**

Coding:

- SWE-bench (Vals): **86.0%** — **clears 85%+ terminal reference; STRONGEST SWE-BENCH IN SERIES FOR 27B** (GLM / Step 5)
- LiveCodeBench v6: **90.3%** (vendor) / **84.0%** (Vals) (GLM / Step 5)
- SWE-bench Pro: **61.7%** (vendor, beats Opus 4.6 Max 53.4%, Qwen3.7-Plus 57.6%) (GLM / Step 5)
- AA Coding Index: **68.1%** (AA) — **1.9pts UNDER 70% FRONTIER REF** (GLM / Step 5)
- AA-SciCode: **46.6%** (AA) — **under 55%+ ref** (GLM / Step 5)
- DeepSWE: **42.2%** — **31.8pts UNDER 74% FRONTIER REF** (GLM / Step 5)
- NL2Repo: **42.3%**; Bug Hunt Bench: **15.0 fixes** (GLM / Step 5)
- VulcanBench v3: **82.6%** (GLM / Step 5)
- SWE Multilingual: **73.8%** (#26/55, BenchmarkList) (GLM)
- **SWE-bench Verified, Vibe Code Bench, FrontierCode, TB 4.0 (vendor): NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Multimodal:

- OmniDocBench 1.5: **91.1%** (GLM / Step 5)
- CharXiv: **90.2% w/tools / 83.7% w/o** (GLM / Step 5)
- MathVision: **90.0% / 94.6% w/Python** (GLM / Step 5)
- BabyVision: **65.7% / 85.6% w/Python** (GLM / Step 5)
- RealWorldQA: **85.9%** (GLM / Step 5)
- ExtractBench: **89.75%** (LlamaIndex); ParseBench: **69.03%** (LlamaIndex) (Step 5)
- AA-MMMU-Pro: **76.3%** (AA) / **83.93%** (Vals #28/93, NEW) (GLM / Step 5)
- **Text + image + video in; text out; NO AUDIO INPUT** — video tier (75-90)

Long context:

- Native **262,144 tokens (262K)**, extensible to 1M via YaRN (factor 4.0) (GLM / Step 5)
- AA-LCR: **82.0%** (AA) — **strong for class** (GLM / Step 5)
- GDM-MRCRv2 Context Arena: **AUC 128K ~91% / AUC 1M ~16%** — **collapses at full 1M** (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED AT WINDOW LENGTH** (GLM / Step 5)
- YaRN factor 4.0, original 262,144 — **1M YaRN remains unmeasured scaling claim** (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 30 qualifying raters = **86.6 Overall** (Tool 85.3, Reasoning 85.2, Context 90.5, Multimodal 86.3, Coding 85.9). Queue: 86.6. Step 5 Preview: 79. GLM 5.3 Flash: 81. My original: 78. **75 BENCHMARKS — DEEPEST EVIDENCE BASE; APACHE 2.0; 262K NATIVE; CRITPT 5.4% (LOWEST); OMNISCIENCE 17.3% ACCURACY (LOWEST).**

- **Tool use: 76/100.** (was 74) OSWorld-Verified **84.3% (STRONGEST IN SERIES)**; AndroidWorld **81.9%**; CoWorkBench **70.7%**; WebArena **64.8%**; AA Agentic Index **46.5%**; AA Tau3 **48.0%**; AA AutomationBench **48.2%**; GDPval-AA **1,423 Elo (46.2%)**; AA Briefcase **1,391 Elo**. **Capped by:** TB 2.1 **73.0% vendor / 79.8% AA / 58.4% Vals (21.4pt spread)**; TB 4.0 **5.6%**; MazeBench **0%**; **CyberGym-E2E-AA 0.0%; AA Cyber Index 12.7%**; **NO τ³-Banking/MCP-Atlas/Toolathlon/Claw-Eval/ALE** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 68/100.** (was 76) GPQA Diamond **89.2/90.5%** (AA clears 90%+); AA-LCR **82.0%**; IFBench **79.5%**; MMLU-Pro **84.3%**; MathVision **94.6% w/Python**. **Capped by:** HLE **30.8-33.9% (FAILS 40%+ REF)**; AA Intelligence Index **20.1% (low)**; AA-Omniscience **17.3% accuracy (LOWEST IN SERIES), −10.0 index**; CritPt **5.4% (LOWEST IN SERIES)**; MLCR **21.7%**; **NO ARC-AGI/MRCR/AIME/FrontierMath Tier 4** — reliability entirely unmeasured. **Omniscience: model abstains constantly, usually right when it speaks (narrow reliability form).**
- **Context window: 88/100.** (was 78) **262K NATIVE (200K-500K band top edge)**; YaRN to 1M (factor 4.0) — **1M YaRN UNMEASURED SCALING CLAIM**; AA-LCR **82.0%** (strong); GDM-MRCRv2 **AUC 1M ~16% (collapses)**. **Held at 88 (not ≥1M tier): 262K native; YaRN extension not native; NO MRCR/GraphWalks at depth; hosted caps output at 32K.**
- **Multimodal: 90/100.** (was 86) Text, image, video in; OmniDocBench **91.1%**; CharXiv **90.2%**; MathVision **94.6% w/Python**; BabyVision **85.6% w/Python**; RealWorldQA **85.9%**; ExtractBench **89.75%**; AA-MMMU-Pro **83.93% (Vals #28/93)**. **Top of video tier (75-90) marginally above on 3 video benchmarks + deep visual suite.** **Capped by:** text-only output; NO audio input; ZeroBench unmeasured; Vision2Web **62.9%**; ERQA **65.5%**.
- **Coding: 82/100.** (was 76) SWE-bench **86.0% (Vals, STRONGEST FOR 27B, clears 85%+ ref)**; LiveCodeBench **90.3% vendor / 84.0% Vals**; AA Coding Index **68.1% (1.9pts under 70% ref)**; SWE-Pro **61.7%** (beats Opus 4.6 Max); VulcanBench **82.6%**; Code Arena WebDev **#13/105**. **Capped by:** DeepSWE **42.2% (31.8pts UNDER 74% REF)**; AA-SciCode **46.6% (UNDER 55% REF)**; NL2Repo **42.3%**; **NO SWE-V/Vibe Code/FrontierCode**.
- **Cost efficiency: 96/100.** (was 90) **APACHE 2.0 — SELF-HOSTING FREE** (55.6 GB FP16, **17 GB Q4_K_M — fits single 24 GB consumer GPU**); hosted ~$0.33/$2.40 per 1M. **TOP OF METHODOLOGY SCALE: no inference bill if you own hardware.** Held at 96 (not 100): hosted route not free; no Zen free tier (`noFreeId`); 262K native window.
- **Overall Score: 81/100.** (was 78) Half-up mean of (76 + 68 + 88 + 90 + 82) / 5 = 404 / 5 = 80.8 → **81**. **Below queue (86.6), average of 30 qualifying raters (86.6).** Best-fit: **BEST SELF-HOST VALUE IN SERIES** — 27B Apache 2.0 dense model fitting one 24 GB card with SWE-bench 86.0%, OSWorld-Verified 84.3%, AA Coding Index 68.1%, OmniDocBench 91.1%, AA-LCR 82.0%. **CAUTIONS:** CritPt 5.4% (LOWEST IN SERIES); Omniscience accuracy 17.3% (LOWEST) — NOT deep-reasoning/knowledge model; security-agentic layer ABSENT (CyberGym-E2E 0.0%); DeepSWE 42.2% — real weakness on repo-scale generation. **11pts behind Opus 5 on SWE-bench at ~1/40th runtime footprint.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 79), GLM 5.3 Flash (2026-11-05, Overall 81) + official Alibaba sources (Qwen3.8-27B model card, HF card, BenchLM 75-row catalog, llm-stats, independent hardware/serving reviews, VulcanBench, ExtractBench, Epoch AI). **Average of 30 qualifying raters: 86.6 Overall.** Queue: 86.6. **Critical findings:** 75 benchmarks (deepest evidence base in series); **Apache 2.0 — self-hosting free on 24 GB GPU**; SWE-bench 86.0% (Vals, strongest for 27B); OSWorld-Verified 84.3% (strongest in series); OmniDocBench 91.1%; MathVision 94.6% w/Python; **CritPt 5.4% (LOWEST IN SERIES)**; AA Intelligence Index 20.1%; **Omniscience 17.3% accuracy (LOWEST IN SERIES), −6.4 index**; 262K native + YaRN to 1M (YaRN unmeasured); CyberGym-E2E 0.0%; DeepSWE 42.2% (31.8pts under 74% ref); SWE-V missing; Canonical BenchLM slug `qwen3-8-27b` (dotted); repo folder `qwen-3-8-27b` 404s; AA Index 33.7 vs "52 at max effort" outlier.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.8-27B model card (primary benchmark source)](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Hugging Face — Qwen/Qwen3.8-27B-FP8 artifact](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)
  - [BenchLM — Qwen3.8-27B benchmark scores (75 rows, 54.55/100, #79/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-8-27b)
  - [Artificial Analysis — Qwen3.8-27B](https://artificialanalysis.ai/models/qwen3-8-27b)
  - [Vals AI — Qwen3.8-27B leaderboard results](https://www.vals.ai/models/alibaba_qwen3.8-27b)
  - [LLM Stats — Qwen3.8-27B pricing, context, licence, release](https://llm-stats.com/models/qwen3.8-27b)
  - [Independent benchmark roundup — official vs independent results, hardware footprint](https://www.qubrid.com/blog/qwen38-27b-benchmarks-official-and-independent-results)
  - [Independent hardware/serving review — Apache 2.0, 55.6 GB / 17 GB Q4_K_M, 24 GB GPU](https://kingy.ai/blog/qwen3-8-27b-specs-benchmarks-local-hardware/)
  - [Independent coding-leaderboard write-up — SWE-bench Verified 86.0%, #14 of 30, 11 pts behind Opus 5](https://genztech.blog/models/qwen3-8-27b/)
  - [VulcanBench Eval Suite 3 leaderboard](https://vulcanbench.com/leaderboard.html)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---