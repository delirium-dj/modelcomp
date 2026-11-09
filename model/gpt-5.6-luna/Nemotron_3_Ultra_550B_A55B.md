# GPT-5.6 Luna — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (Max effort tier) — **NANO-TIER / SUPERSEDED BY GPT-6 LUNA (Sep 2026)**
- **Short description:** OpenAI's cost-efficient GPT-5.6 variant — **BenchLM: 63.94/100, #37/1015 (54 benchmarks, best-evidenced in batch)**. **Batch's best composite: AA Intelligence Index 51.2% (2nd-highest in series), best long-context AA-LCR 83.7%, best FrontierMath T4 58.5% (more than double next-best), best multimodal ExtractBench 91.16%.** **LARGEST WINDOW IN SERIES: 1.05M tokens.** **AA-Omniscience −10.3 / 92.6% hallucination (deeply negative).** **NO RATE CARD PUBLISHED — placeholder cost.**
- **Provider / access:** OpenAI API (`gpt-5.6-luna`, Responses API), ChatGPT, Codex, Azure OpenAI, AWS Bedrock, OpenRouter, 15+ routers. **NOT on OpenCode Zen (no Zen Free ID).** Proprietary, closed weights.
- **Release / knowledge:** 2026-07-09 GA (ChatGPT, Codex, API); **knowledge cutoff: February 16, 2026** (verified on OpenAI API model page).
- **IDs:** `gpt-5.6-luna` (OpenAI API, snapshots/aliases); `openai_gpt-5.6-luna` (Vals/ARC). Siblings: `gpt-5.6-sol` (flagship), `gpt-5.6-terra`. **Successor: GPT-6 Luna (Sep 22, 2026).**
- **Context window:** **1,050,000 tokens (1.05M) — LARGEST WINDOW IN SERIES**; 128,000 max output (verified on OpenAI API model page). **>272K input: 2× input / 1.5× output surcharge for full request**; cache writes at 1.25× input rate.
- **Modalities:** Text + image in; text out. Audio/video not supported. Reasoning (effort: none/low/medium/high/xhigh/max). Tools: web search, file search, code interpreter, hosted shell, computer use, MCP, tool search, skills.
- **Pricing (as of 2026-11-08):** **NO RATE CARD PUBLISHED IN SOURCES CHECKED** — BenchLM row carries no rate card. **Placeholder cost scored at 60.** Historical: $0.20 in / $1.20 out per 1M (cached $0.02, 90% discount); Batch 50%; AA $0.18/task; blended $0.17/1M. **Explicitly estimate, not measurement.** AA verbosity: 150M output tokens across index; 161.8 tok/s; TTFT 123.28s at max.
- **Architecture:** Proprietary (OpenAI); parameters undisclosed (nano tier of family).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official OpenAI sources. **Average of 27 qualifying raters: 85.2 Overall** (Tool 84.1, Reasoning 84.8, Context 95.4, Multimodal 75.3, Coding 85.6). Queue: 85.2. Step 5 Preview: 83. GLM 5.3 Flash: 77. My original: 77. **SUPERSEDED BY GPT-6 LUNA; 1.05M WINDOW (LARGEST IN SERIES); AA INDEX 51.2% (2ND-HIGHEST); OMNISCIENCE −10.3/92.6% HALLUCINATION; NO RATE CARD.**

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (vendor) / **79.0%** (Vals) / **80.9%** (AA — 3rd independent reading, corroborating) — **5.7pt spread, all under 88%+ frontier** (GLM / Step 5)
- BrowseComp: **83.3%** (GLM / Step 5)
- CyberGym: **77.9%** (GLM / Step 5)
- GDPval-AA: **1,582 Elo** (vendor) / **48.0-48.2% normalized** (AA) (GLM / Step 5)
- OSWorld 2.0: **45.6%** (GLM / Step 5)
- Toolathlon: **53.4%**; AA Agentic Index: **42.7%**; APEX-Agents: **35.8%**; AA EnterpriseOps-Gym: **40.8%**; AA ITBench: **40.3%** (GLM / Step 5)
- TB 3.0: **14.3%**; ExploitGym: **12.4%**; MazeBench: **0%**; ApprenticeBench: **7%** (GLM / Step 5)
- AA TB 2.1: **80.9%** (3rd independent reading, corroborating) (GLM)
- **τ³-Banking, MCP-Atlas, OSWorld 1.0, Claw-Eval, ALE, JobBench, MRCR: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (vendor) / **91.1%** (AA) / **91.7%** (Vals) — **three-source elite-class agreement, clears 90%+ frontier** (GLM / Step 5)
- ARC-AGI-1: **88.0%** (Max verified); ARC-AGI-2: **59.5%** (verified); ARC-AGI-3: **0.2%** (GLM / Step 5)
- FrontierMath v2: Tiers 1-3 **78.6%** / Tier 4 **58.5%** — **BEST FRONTIER MATH IN SERIES (more than double next-best)** (GLM / Step 5)
- AA Intelligence Index: **51.2%** (Step 5, 2nd-highest in series) / **37** (AA direct, #4/176) — **effort/version discrepancy flagged** (GLM)
- AA-HLE: **39.5%** — **0.5pts UNDER 40%+ REFERENCE (narrowest miss in batch)** (GLM / Step 5)
- AA-LCR: **83.7%** — **BEST LONG-CONTEXT REASONING IN BATCH** (GLM / Step 5)
- CritPt: **20.6%** (GLM / Step 5)
- AA-Omniscience: **index −10.3, accuracy 42.7%, hallucination 92.6%** — **DEEPLY NEGATIVE INDEX (far more incorrect than correct)** (GLM / Step 5)
- MMLU-Pro (Vals): **86.0%**; HealthBench Professional: **55.7%**; HealthBench Hard: **32.0%** (GLM / Step 5)
- **MRCR: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench (Vals): **93.0%** — **STRONGEST SWE-BENCH IN BATCH** (GLM / Step 5)
- SWE-bench Pro: **62.7%** (GLM / Step 5)
- DeepSWE: **67.2%** — **6.8pts UNDER 74% FRONTIER REF** (GLM / Step 5)
- AA Coding Index: **71.5%** — **clears 70%+ frontier ref** (GLM / Step 5)
- AA-SciCode: **53.6%** — **under 55%+ ref** (GLM / Step 5)
- VulcanBench v3: **85.5%**; SWE-Pro: **62.7%**; CursorBench 3.2: **61.1%**; FrontierCode 1.1 Ext: **55.1%** (GLM / Step 5)
- **SWE-bench Verified, LiveCodeBench, Vibe Code Bench, TB 4.0: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **4 of 5 coding refs unmeasured**

Multimodal:

- ExtractBench: **91.16%** (LlamaIndex) — **STRONGEST DOCUMENT EXTRACTION IN SERIES** (GLM / Step 5)
- ParseBench: **66.86%** (LlamaIndex) (GLM / Step 5)
- MMMU-Pro: **78.4%** vendor / **79.5% w/Python** / **78.6%** AA — **three agree within 1.1pts** (GLM / Step 5)
- **Text + image in only; NO VIDEO/AUDIO/PDF INPUT** — image-in band (60-70)
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: NO VERIFIED SCORE** (GLM / Step 5)

Long context:

- 1.05M window (LARGEST IN SERIES); 128K max output; AA-LCR **83.7% (BEST IN BATCH)**
- **>272K surcharge: 2× input / 1.5× output** for full request (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS RETRIEVAL NUMBERS** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 27 qualifying raters = **85.2 Overall** (Tool 84.1, Reasoning 84.8, Context 95.4, Multimodal 75.3, Coding 85.6). Queue: 85.2. Step 5 Preview: 83. GLM 5.3 Flash: 77. My original: 77. **SUPERSEDED BY GPT-6 LUNA; 1.05M WINDOW (LARGEST); AA INDEX 51.2% (2ND-HIGHEST); FRONTIER MATH T4 58.5% (BEST IN SERIES); OMNISCIENCE −10.3/92.6% HALLUCINATION; NO RATE CARD.**

- **Tool use: 72/100.** (was 72) TB 2.1 **84.7% vendor / 79.0% Vals / 80.9% AA (3 readings, 5.7pt spread, under 88%+ frontier)**; BrowseComp **83.3%**; CyberGym **77.9%**; GDPval **1,582 Elo (48.0%)**; Toolathlon **53.4%**; AA Agentic Index **42.7%**; AA EnterpriseOps **40.8%**. **Capped by:** OSWorld 2.0 **45.6%**; AA Agentic Index **42.7%**; APEX-Agents **35.8%**; TB 3.0 **14.3%**; MazeBench **0%**; ApprenticeBench **7%**; **NO τ³/MCP-Atlas/OSWorld 1.0/Claw-Eval/ALE/JobBench/MRCR** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 80/100.** (was 70) **AA Intelligence Index 51.2% (2nd-highest in series)**; AA-LCR **83.7% (BEST IN BATCH)**; FrontierMath T4 **58.5% (BEST IN SERIES, >2× next-best)**; GPQA Diamond **91.1-92.3% (three-source, clears 90%+)**; ARC-AGI-1 **88.0%**; ARC-AGI-2 **59.5%**; AA-LCR **83.7% (BEST IN BATCH)**. **Capped by:** AA-HLE **39.5% (0.5pts UNDER 40%+ REF — narrowest miss)**; CritPt **20.6%**; ARC-AGI-3 **0.2%**; **AA-Omniscience −10.3 / 92.6% HALLUCINATION (DEEPLY NEGATIVE INDEX)**; AA Index discrepancy **51.2% vs 37** (effort/version).
- **Context window: 99/100.** (was 95) **1.05M — LARGEST WINDOW IN SERIES**; AA-LCR **83.7% (BEST IN BATCH)**. **Scored at 99 (not 100): NO MRCR/GraphWalks at depth; no max-output limit published; >272K surcharge doubles input cost.**
- **Multimodal: 75/100.** (was 70) Text + image in; ExtractBench **91.16% (STRONGEST IN SERIES)**; ParseBench **66.86%**; MMMU-Pro **78.4-79.5% (three agree within 1.1pts)**. **Scored in upper image-in band (60-70) lifted by ExtractBench depth.** **Capped by:** NO video/audio/PDF input; text-only output; CharXiv/BabyVision/ZeroBench/OmniDocBench/MathVision/Design Arena unmeasured.
- **Coding: 82/100.** (was 78) SWE-bench **93.0% (STRONGEST IN BATCH)**; AA Coding Index **71.5% (clears 70%+ ref)**; VulcanBench **85.5%**; SWE-Pro **62.7%**; DeepSWE **67.2% (6.8pts under 74% ref)**; AA-SciCode **53.6% (under 55% ref)**; CursorBench 4.0 **35.9%**; FrontierCode Ext **55.1%**. **Capped by:** DeepSWE **67.2% (under 74% ref)**; AA-SciCode **53.6% (under 55% ref)**; **NO SWE-V/LiveCodeBench/Vibe Code/TB 4.0** — 4 of 5 coding refs unmeasured.
- **Cost efficiency: 60/100.** (was 95) **NO RATE CARD PUBLISHED** — placeholder at methodology ~$3/$15 anchor (60). Historical $0.20/$1.20 (90% cache discount, AA $0.18/task, blended $0.17/1M) is directional signal only. **Explicitly estimate, not measurement.**
- **Overall Score: 81.6/100.** (was 77) Half-up mean of (72 + 80 + 99 + 75 + 82) / 5 = 408 / 5 = 81.6 → **82**. **Below queue (85.2), average of 27 qualifying raters (85.2).** Best-fit: **STRONGEST ALL-ROUND MID-TIER IN BATCH, BEST LONG-CONTEXT REASONER AFTER DEEPSEEK V4 PRO** — AA Index 51.2%, AA-LCR 83.7%, FrontierMath T4 58.5%, ExtractBench 91.16%, AA Coding Index 71.5%, 1.05M window (largest in series). **TWO CAUTIONS:** (1) **AA-Omniscience −10.3 / 92.6% HALLUCINATION — MUST PAIR WITH RETRIEVAL FOR FACTUAL WORK**; (2) **AGENTIC EXECUTION COLLAPSES ON NEWER HARNESSES** (TB 3.0 14.3%, MazeBench 0%, ApprenticeBench 7%) — **REASONER, NOT AUTONOMOUS AGENT**. Prefer GPT-5.6 Sol (74.88) unless Luna pricing decisive.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 83), GLM 5.3 Flash (2026-11-05, Overall 77) + official OpenAI sources (GPT-5.6 launch post, system card, API model page, BenchLM, ARC Prize, Epoch AI, LlamaIndex, Cognition/Devin, Cursor, VulcanBench). **Average of 27 qualifying raters: 85.2 Overall.** Queue: 85.2. **Critical findings:** Superseded by GPT-6 Luna; **1.05M window (LARGEST IN SERIES)**; AA Index 51.2% (2nd-highest); FrontierMath T4 58.5% (BEST IN SERIES); ExtractBench 91.16% (STRONGEST IN SERIES); AA-LCR 83.7% (BEST IN BATCH); SWE-bench 93.0% (STRONGEST IN BATCH); **AA-Omniscience −10.3 / 92.6% HALLUCINATION (DEEPLY NEGATIVE)**; AA-HLE 39.5% (0.5 under 40% ref); AA Index discrepancy 51.2% vs 37; NO rate card; agentic collapses on newer harnesses (TB 3.0 14.3%, MazeBench 0%, ApprenticeBench 7%); 4 of 5 coding refs unmeasured.
- Reference URLs:
  - [OpenAI — GPT-5.6 launch post (primary benchmark source)](https://openai.com/index/gpt-5-6/)
  - [OpenAI — GPT-5.6 system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf)
  - [OpenAI API model page — GPT-5.6 Luna (context, cutoff, lifecycle)](https://developers.openai.com/api/docs/models/gpt-5.6-luna)
  - [BenchLM — GPT-5.6 Luna benchmark scores (54 rows, 63.94/100, #37/1015)](https://benchlm.ai/models/gpt-5-6-luna)
  - [Artificial Analysis — GPT-5.6 Luna](https://artificialanalysis.ai/models/gpt-5-6-luna)
  - [Vals AI — GPT-5.6 Luna leaderboard results](https://www.vals.ai/models/openai_gpt-5.6-luna)
  - [ARC Prize — published Semi-Private results for GPT-5.6 Luna](https://arcprize.org/results/openai-gpt-5-6-luna)
  - [LlamaIndex — ExtractBench leaderboard](https://www.extractbench.ai/#leaderboard)
  - [Cognition — GPT-5.6 models in Devin](https://devin.ai/blog/gpt-5-6)
  - [Cursor evals — CursorBench 3.2 / 4.0](https://cursor.com/cursorbench)
  - [VulcanBench Eval Suite 3 leaderboard](https://vulcanbench.com/leaderboard.html)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---