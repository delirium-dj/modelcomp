# Qwen 3.7 Plus — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.7-plus`, canonical dotted slug `qwen3-7-plus`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus (proprietary multimodal agent tier on Qwen3.7 backbone) — **SUPERSEDED BY QWEN 3.8 FAMILY (Aug 2026)**; BenchLM 53.91/100, #82/1015
- **Short description:** Alibaba's cost-effective multimodal agent model — **GUI-agent specialisation is genuine strength**: OSWorld-Verified 73.3%, AndroidWorld 81.0%, ScreenSpot Pro 79.0%, MCP Atlas 73.2% (strongest computer-use cluster in series). **Collapse in depth/reliability**: AA Agentic Index 19.7%, AA Intelligence Index absent, CritPt 9.1%, AA-HLE 35.6%, TB Hard 47%, OSWorld 2.0 2.8%. **69 benchmarks**.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, Together ($0.32/$1.28, 1M context), Fireworks ($0.40/$1.60, 262K), OpenRouter, **OpenCode Zen (`opencode/qwen-3.7-plus` — repo meta.json records `noFreeId`)**. Closed-source, proprietary licence — **no weights, no self-hosting**.
- **Release / knowledge:** 2026-05-31 release (llm-stats); GA 2026-06-01. **Knowledge cutoff: not disclosed.**
- **IDs:** `qwen/qwen3.7-plus` (OpenRouter); `qwen3.7-plus` (Together, Fireworks, Zen); `alibaba_qwen3.7-plus` (Vals). **Canonical BenchLM slug: `qwen3-7-plus` (dotted) — repo folder `qwen-3-7-plus` 404s on BenchLM/LLMLearner.**
- **Context window:** **PROVIDER-DEPENDENT — NOT A MODEL PROPERTY**: Together 1M/65.5K, Fireworks 262K/65.5K, Zen text-only 128K. **Repo meta.json records 1M/131K but Zen lane text-only** — conflicts with Together's 1M and measured video benchmarks.
- **Modalities:** **Text, image, video in; text out** — defining claim well-evidenced (Video-MME 88.0%, VideoMMMU 85.4%, MLVU 87.4%). **llm-stats FAQ says text+image only — contradicts QwenCloud spec + 3 measured video benchmarks (aggregator error).**
- **Pricing (as of 2026-11-08):** **CONFLICTING STRUCTURES — RECORDED SIDE BY SIDE**: Together $0.32 in / $0.08 cached / $1.28 out (1M context); Fireworks $0.40 / $0.08 / $1.60 (262K). **Repo meta.json: tiered Alibaba Cloud $0.40/$1.60 ≤256K → $1.20/$4.80 >256K; $0.32/$1.28 via OpenRouter/OpenCode Go.** **Material question: does cheap rate carry 1M window? Together says yes; meta.json tier table implies no.**
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. Built on Qwen3.7 text backbone with vision-language unified agent foundation.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-05) + official Alibaba sources. **Average of 30 qualifying raters: 86.8 Overall** (Tool 83.4, Reasoning 86.1, Context 94.7, Multimodal 85.3, Coding 84.4). Queue: 86.8. Step 5 Preview: 76. GLM 5.3 Flash: 81. My original: 79. **SUPERSEDED BY QWEN 3.8; 69 benchmarks; provider-dependent context; pricing conflict.**

Agent / tool use — **GUI half strong, execution half weak**:

- OSWorld-Verified: **73.3%** (vendor); AndroidWorld: **81.0%** (vendor); **MCP Atlas: 73.2%** (vendor); BFCL v4: **72.9%** (vendor) — **strongest computer-use cluster in series** (Step 5 / GLM)
- τ²-bench: **93.0%** (AA) (GLM / Step 5)
- Terminal-Bench 2.0: **70.3%** (vendor) / **TB 2.1 (Vals): 52.8%** — **17.5pt gap, both far under 88%+ frontier** (GLM / Step 5)
- GDPval-AA: **886 Elo** (AA) / **13.3% normalized** — **2nd-lowest GDPval in batch** (GLM / Step 5)
- OSWorld 2.0: **2.8%** — near-floor on newer harness (GLM / Step 5)
- AA Agentic Index: **19.7%** — **2nd-lowest in batch** (GLM / Step 5)
- Claw-Eval: **62.7%** — **one of only 3 measured ClawEval figures in series** (GLM / Step 5)
- TB Hard (AA): **47%**; VITA-Bench: **45.6%**; QwenClawBench: **61.8%**; DeepPlanning: **62.3%**; QwenWebBench: **1,536 Elo** (GLM / Step 5)
- **TB 4.0, τ³-Banking, Toolathlon, MazeBench, ALE, JobBench, BrowseComp: NO VERIFIED PUBLIC SCORE** — **2 of 3 frontier refs unmeasured** (GLM / Step 5)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (vendor) / **90.0%** (AA) — **corroborated, clears 90%+ frontier** (GLM / Step 5)
- HLE: **34.7%** (vendor) / **35.6%** (AA) — **fails 40%+ ref by ~4-5pts on both** (GLM / Step 5)
- MMLU-Pro: **88.5%**; MMLU-Redux: **94.5%**; MMMLU: **89.0%**; SuperGPQA: **71.4%** (GLM / Step 5)
- MRCR v2 128K: **91.7%** (vendor) — **strongest MRCR-family figure in series** (GLM / Step 5)
- AA-LCR: **73.0%** — **2nd-lowest in batch** (GLM / Step 5)
- CritPt: **9.1%** (GLM / Step 5)
- FrontierMath v2 Tiers 1-3: **34.4%** (Epoch — first FrontierMath row, weak-mid) (GLM / Step 5)
- IFEval: **94.6%**; IFBench: **79.1%** vendor / **78.0%** AA (GLM / Step 5)
- **AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, FrontierMath Tier 4: NO VERIFIED PUBLIC SCORE** — **reliability entirely unmeasured; 3 of 5 reasoning refs unmeasurable** (GLM / Step 5)

Coding:

- SWE-bench Verified: **77.7%** (vendor) (GLM / Step 5)
- SWE-bench Pro: **57.6%** (GLM / Step 5)
- SWE Multilingual: **75.8%** (GLM / Step 5)
- LiveCodeBench v6: **89.6%** — **cross-cited from Qwen3.8-27B card (provenance flag)** (GLM / Step 5)
- AA Coding Index: **55.9%** — **14pts under 70% frontier ref** (GLM / Step 5)
- AA-SciCode: **46.1%** — **under 55% ref** (GLM / Step 5)
- NL2Repo: **41.1%** (GLM / Step 5)
- **DeepSWE, Vibe Code Bench, TB 4.0, FrontierCode: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Multimodal (image + video in) — **2nd-strongest dimension**:

- OmniDocBench 1.5: **91.4%**; MathVision: **90.3%**; RealWorldQA: **86.9%**; CharXiv: **85.9%** (GLM / Step 5)
- Video-MME (w/sub): **88.0%**; VideoMMMU: **85.4%**; MLVU (M-Avg): **87.4%** — **genuine video understanding** (GLM / Step 5)
- MMMU-Pro: **79.0%** vendor / **80.5%** AA — **AA exceeds vendor (unusual direction, confidence signal)** (GLM / Step 5)
- ScreenSpot Pro: **79.0%** (vendor, thinking disabled — vs GPT-5.4 67.4, Opus 4.6 49.5) (GLM / Step 5)
- **ExtractBench, BabyVision, ZeroBench, ParseBench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **Text + image + video in; text out** — video tier (75-90); **no audio input**

Long context:

- MRCR v2 128K: **91.7%** (vendor) — **strongest MRCR in family** (GLM / Step 5)
- AA-LCR: **73.0%** — **2nd-lowest in batch** (GLM / Step 5)
- **NO MRCR AT 512K+/1M; NO GRAPHWALKS/RULER** (GLM / Step 5)
- **Provider-dependent window: Together 1M, Fireworks 262K, Zen text-only 128K** — not a model property (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 30 qualifying raters = **86.8 Overall** (Tool 83.4, Reasoning 86.1, Context 94.7, Multimodal 85.3, Coding 84.4). Queue: 86.8. Step 5 Preview: 76. GLM 5.3 Flash: 81. My original: 79. **SUPERSEDED BY QWEN 3.8; PROVIDER-DEPENDENT CONTEXT; PRICING CONFLICT.**

- **Tool use: 66/100.** (was 66) OSWorld-Verified **73.3%**, AndroidWorld **81.0%**, MCP Atlas **73.2%**, BFCL **72.9%**, τ²-bench **93.0%**, Claw-Eval **62.7%** (1 of 3 in series). **Capped by:** AA Agentic Index **19.7%** (2nd-lowest), GDPval-AA **13.3% normalized (886 Elo)**, TB 2.1 **52.8%** (Vals, 35.2pts under 88%+ frontier), TB Hard **47%**, OSWorld 2.0 **2.8%**, APEX-Agents **22.4%**, **NO TB 4.0/τ³/Toolathlon/MazeBench/ALE/JobBench/BrowseComp** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 64/100.** (was 80) GPQA Diamond **90.0-90.3%** (clears 90%+), MMLU-Pro **88.5%**, MMLU-Redux **94.5%**, MRCR **91.7% @128K (strongest in family)**. **Capped by:** HLE **34.7-35.6% (FAILS 40%+ REF)**, CritPt **9.1%**, FrontierMath T1-3 **34.4%**, Apex **22.7%**, AA-LCR **73.0% (2nd-lowest)**, **NO AA Intelligence Index / AA-Omniscience / ARC-AGI / AIME / FrontierMath Tier 4** — composite depth + reliability entirely unmeasured.
- **Context window: 88/100.** (was 93) **PROVIDER-DEPENDENT — NOT A MODEL PROPERTY**: Together 1M, Fireworks 262K, Zen text-only 128K. MRCR **91.7% @128K** (strongest in family). **Scored at 200K-500K band ceiling (88) because 262K route is more widely deployed and NO MRCR/GraphWalks at 1M depth.** Zen text-only lane would score materially lower.
- **Multimodal: 92/100.** (was 78) Text, image, video in; Video-MME **88.0%**, VideoMMMU **85.4%**, MLVU **87.4%**, OmniDocBench **91.4%**, MathVision **90.3%**, RealWorldQA **86.9%**, CharXiv **85.9%**, MMMU-Pro **80.5% (AA > vendor)**, ScreenSpot Pro **79.0%**. **Held at top of video tier (75-90) marginally above on 3 video benchmarks + AA exceeding vendor.** **Capped by:** text-only output, no audio input, **NO ExtractBench/BabyVision/ZeroBench/ParseBench**.
- **Coding: 68/100.** (was 76) SWE-V **77.7%**, SWE Multilingual **75.8%**, LiveCodeBench **89.6%** (cross-cited from Qwen3.8-27B — **provenance flag**). **Capped by:** AA Coding Index **55.9% (14pts under 70% ref)**, AA-SciCode **46.1% (under 55%)**, NL2Repo **41.1%**, **NO DeepSWE/Vibe Code/TB 4.0/FrontierCode**; LiveCodeBench provenance weak.
- **Cost efficiency: 92/100.** (was 90) **$0.32/$1.28 via Together (1M window) — one of better cards in series**; $0.08 cache aggressive. **Held at 92 (not higher): two provider rate cards conflict on whether cheap rate carries 1M window; no Free tier (`noFreeId`); closed-source, no self-hosting escape; parameter count undisclosed.**
- **Overall Score: 76/100.** (was 79) Half-up mean of (66 + 64 + 88 + 92 + 68) / 5 = 378 / 5 = 75.6 → **76**. **Below queue (86.8), average of 30 qualifying raters (86.8).** Best-fit: **BEST COMPUTER-USE / GUI-AGENT MODEL IN SERIES** — OSWorld-Verified 73.3%, AndroidWorld 81.0%, ScreenSpot Pro 79.0%, MCP Atlas 73.2%, video suite at $0.32/$1.28 with 1M window. **Three cautions:** (1) **CANNOT SUSTAIN LONG AGENTIC TASK** (AA Agentic Index 19.7%, OSWorld 2.0 2.8%, GDPval 13.3%); (2) **COMPOSITE REASONING DEPTH + RELIABILITY ENTIRELY UNMEASURED** — no AA Intelligence Index, no AA-Omniscience, no ARC-AGI; (3) **1M WINDOW PROVIDER-DEPENDENT, ZEN LANE TEXT-ONLY 128K** — verify tier before planning long-horizon work.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 76), GLM 5.3 Flash (2026-11-05, Overall 81) + official Alibaba sources (Qwen3.7-Plus launch benchmarks, QwenCloud docs, llm-stats, awesome-agents). **Average of 30 qualifying raters: 86.8 Overall.** Queue: 86.8. **Critical findings:** Superseded by Qwen 3.8; **OSWorld-Verified 73.3% (BEST COMPUTER-USE CLUSTER IN SERIES)**; Video-MME 88.0%/VideoMMMU 85.4%/MLVU 87.4% (genuine video); HLE 35.6% (fails 40% ref); AA Intelligence Index absent; AA-Omniscience unmeasured; provider-dependent context (Together 1M vs Fireworks 262K vs Zen text-only 128K); pricing conflict (Together $0.32/$1.28 1M vs meta.json tiered $1.20/$4.80 >256K); canonical BenchLM slug `qwen3-7-plus` (dotted); repo folder `qwen-3-7-plus` 404s; LiveCodeBench cross-cited from 3.8-27B.
- Reference URLs:
  - [Alibaba Cloud — Qwen3.7-Plus launch benchmarks (primary source, 50+ vendor rows)](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
  - [Alibaba Cloud — Qwen3.7-Plus: Multimodal Agent Intelligence (launch post)](https://www.alibabacloud.com/blog/603206)
  - [BenchLM — Qwen3.7 Plus benchmark scores (69 rows, 53.91/100, #82/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-7-plus)
  - [Artificial Analysis — Qwen3.7-Plus](https://artificialanalysis.ai/models/qwen3-7-plus)
  - [Vals AI — Qwen3.7 Plus leaderboard results](https://www.vals.ai/models/alibaba_qwen3.7-plus)
  - [LLM Stats — Qwen3.7-Plus release date, licence, provider pricing, context](https://llm-stats.com/models/qwen3.7-plus)
  - [Awesome Agents — Qwen3.7-Plus profile (GA date, GUI-agent capability)](https://awesomeagents.ai/models/qwen-3-7-plus/)
  - [Qwen — Qwen3.7-Plus launch blog ("Multimodal Agent Intelligence")](https://qwen.ai/blog?id=qwen3.7-plus)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [OSWorld 2.0 paper](https://arxiv.org/abs/2606.29537)
  - [OpenRouter — Qwen3.7-Plus benchmarks](https://openrouter.ai/qwen/qwen3.7-plus/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---