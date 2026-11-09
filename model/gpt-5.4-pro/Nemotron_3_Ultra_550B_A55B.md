# GPT-5.4 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (Xhigh effort tier) — **THREE GENERATIONS BEHIND** (superseded by GPT-5.5, 5.6, 6, 6.1; shares $30/$180 with GPT-5.5 Pro)
- **Short description:** Maximum-performance variant of GPT-5.4 generation — genuine strengths in **physics-competition maths (IPhO 2025 Theory 93.5%)** and long-exam reasoning (HLE 58.7%), priced at top of market. **BenchLM: 68.23/100, #20/1009 on ONLY 12 benchmarks** — second-thinnest top-20 evidence base after GPT-5.5 Pro's 9. **$30/$180 (joint-most-expensive Zen tier, 15× GPT-6.1 Sol).**
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, Responses API; snapshot `gpt-5.4-pro-2026-03-05`; **NOT in Chat Completions**); OpenCode Zen (`opencode/gpt-5-4-pro` at $30/$180); Azure AI Foundry (`gpt-5.4-pro:2026-03-05`); ChatGPT Pro/Enterprise. **Active on OpenAI API (no deprecation); Azure Foundry retirement 2027-09-07.**
- **Release / knowledge:** 2026-03-04/05 release; **knowledge cutoff: 2025-08-31** (modelbenchmark.io).
- **IDs:** `opencode/gpt-5.4-pro` (Zen); `gpt-5.4-pro` (OpenAI API). No Free ID.
- **Context window:** **1,050,000 tokens / 128,000 max output** (models.dev; BenchLeader 1.1M). **>272K input tokens: 2× long-context rates ($60 in / $270 out).**
- **Modalities:** Text + image in; text out; reasoning yes. **models.dev lists Tool Call: No for Pro variant (conflicts with OpenAI's agentic browsing claims).** Structured outputs not listed.
- **Pricing (as of 2026-11-08):** **$30 / 1M input, $180 / 1M output (OpenAI, Azure, OpenRouter identical); cache read $30 — NO CACHING DISCOUNT.** Batch/Flex 50% ($15/$90 short-context). Priority 2× ($60/$360). Long-context band 2× over 272K input. Output speed ~6 tok/s, first token ~7.0s. Blended $67.50/M short-context. **10K-in/1K-out: $0.21 (7× GPT-6.1 Sol). Joint-worst cost-efficiency in series.**
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed. Base model is `gpt-5.4` — Pro is distinct, slower, pricier variant.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official OpenAI sources. **Average of 31 qualifying raters: 89.9 Overall** (Tool 90.8, Reasoning 92.5, Context 95.4, Multimodal 81.5, Coding 89). Queue: 89.9. Step 5 Preview: 69. GLM 5.3 Flash: 82. My original: 64. **THREE GENS BEHIND: 12 benchmarks only; $30/$180 (15× GPT-6.1 Sol).**

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI) — **SOTA at announcement** (above GPT-5.5 84.4%, only GPT-5.5 Pro 90.1% higher) (Step 5 / GLM)
- Tau2-Bench Telecom: **98.7%** (OpenAI launch table, GPT-5.4 Pro column — **RECOVERED this pass; prior report marked missing**) (GLM)
- GDPval (wins/ties vs professionals): **82.0%** (OpenAI; base 83.0%) (GLM)
- FinanceAgent v1.1: **61.5%**; Investment Banking Modeling: **83.6%** (OpenAI) (GLM)
- MultiChallenge: **69.2%** (#5, Scale AI SEAL); TutorBench: **56.6%** (#2) (GLM)
- **MCP Atlas, Terminal-Bench 2.0, Terminal-Bench 2.1/4.0, τ³-Banking, OSWorld, JobBench, Toolathlon, MazeBench, Claw-Eval: NO VERIFIED PUBLIC SCORE FOR PRO** (GLM / Step 5) — **entire agentic reference set beyond BrowseComp and Tau2 absent**
- **models.dev "Tool Call: No" flag for Pro conflicts with OpenAI's agentic browsing claims** (GLM)

Reasoning / knowledge:

- GPQA Diamond: **94.6% ±1.6** (Epoch AI, #7/108 — corroborates OpenAI's 94.4%) (GLM) / **NO VERIFIED PUBLIC SCORE** (Step 5) — **primary frontier reference missing from Step 5**
- HLE: **58.7% with tools** (OpenAI) / **42.7% no tools** (OpenAI) / Scale/Epoch 44.3% (#5/46) — **clears 40%+ frontier on both; 58.7% = BEST HLE in batch** (Step 5 / GLM)
- ARC-AGI-1: **94.5%** (verified, #19/89) (GLM / Step 5)
- ARC-AGI-2: **83.3%** (verified, **#17/89** Epoch; **#37/280** ARC Prize board X-High, rank improved from #34) (GLM / Step 5)
- IPhO 2025 Theory: **93.5%** (Meta Muse Spark chart) — **STANDOUT: physics-olympiad score no other model in series approaches** (Step 5 / GLM)
- FrontierMath v2: Tiers 1-3 **82.5% ±2.3** (#13/71) / Tier 4 **58.5% ±7.8** (#14/58) (Epoch v2, xhigh) (GLM) / **82.5% / 58.5%** (Step 5)
- CritPt: **30.0%** (#10/154, xhigh) — **joint-second-highest physics-reasoning in batch** (behind GPT-5.6 Sol 32.3%) (GLM / Step 5)
- SimpleBench: **74.1%** (#9/77); EnigmaEval: **23.8%** (#5/38 — NEW); MathArena Apex: **69.8%** (#3); SimpleQA Verified: **46.3% ±1.6** (#30/68); MultiNRC: **62.3%** (#4); Frontier Science: **36.7%** (GLM / Step 5)
- Epoch Capabilities Index: **159.8-160.2** (#16/210-225); BenchLeader Index: **63.6 ±3.3** (#60/760); ARBITER: **#16/146 (83.8)**; Noometry Index: **59.1, #20/362** (Nov 2026, knowledge rank #9) (GLM)
- FORTRESS (safety/honesty): **14.8%** (#54, Scale AI SEAL) (GLM)
- AA Intelligence Index: **NO PUBLISHED ROW FOR PRO** (benchgap's "33.2%" estimate excluded) (GLM)
- **GPQA Diamond, AA Intelligence Index, AA-LCR, MLCR, AA-Omniscience, MRCR, MMLU-Pro: NO VERIFIED PUBLIC SCORE** — **primary reasoning reference + every reliability metric missing** (Step 5)

Coding:

- WeirdML: **57.4%** — **#35/119, top 30%** (Epoch; rank improved from #53) (GLM)
- **SWE-Bench Pro, SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench, Vibe Code Bench, FrontierCode, ProgramBench: ALL NO VERIFIED PUBLIC SCORE FOR PRO** (GLM / Step 5) — **no coding benchmark of any kind**

Multimodal:

- VISTA (visual language understanding): **53.9%** (#2/57, Scale AI SEAL) (GLM)
- OSWorld-Verified, MMMU Pro: **NO PRO-SPECIFIC VERIFIED ROWS** (launch-table columns ambiguous — excluded) (GLM)
- **Zero multimodal benchmarks for Pro in Step 5** — image capability entirely unmeasured (Step 5)

Long context:

- **NO LONG-CONTEXT RETRIEVAL MEASUREMENT FOR PRO** (base reports GraphWalks parents 256K-1M 98.2% / MRCR v2 rows; not applied here) (GLM)
- **NO AA-LCR/MRCR/GraphWalks for Pro** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **89.9 Overall** (Tool 90.8, Reasoning 92.5, Context 95.4, Multimodal 81.5, Coding 89). Queue: 89.9. Step 5 Preview: 69. GLM 5.3 Flash: 82. My original: 64. **THREE GENS BEHIND: 12 benchmarks; $30/$180 (15× GPT-6.1 Sol).**

- **Tool use: 65/100.** (was 50) BrowseComp **89.3%** (SOTA at launch), Tau2-Telecom **98.7%** (RECOVERED top-tier tool result), GDPval **82.0%**, FinanceAgent **61.5%**, Investment Banking **83.6%**, MultiChallenge **69.2%** (#5), TutorBench **56.6%** (#2). **Capped by:** models.dev "Tool Call: No" flag; **TB 2.1/4.0, τ³-Banking, MCP-Atlas, OSWorld, JobBench, Toolathlon, MazeBench, Claw-Eval: ALL MISSING for Pro** — two of three frontier refs uncheckable.
- **Reasoning: 86/100.** (was 80) HLE **58.7% w/tools (BEST in batch) / 42.7% no tools**, ARC-AGI-1 **94.5%**, ARC-AGI-2 **83.3% (#17/89)**, GPQA Diamond **94.6% (#7/108 Epoch)**, IPhO **93.5% (STANDOUT: no other model approaches)**, FrontierMath **82.5/58.5%**, CritPt **30.0%** (joint-2nd), MathArena Apex **69.8% (#3)**, EnigmaEval **23.8% (#5/38)**. **Capped by:** **GPQA Diamond missing (Step 5)**, **NO AA Intelligence Index / AA-LCR / MLCR / AA-Omniscience / MRCR / MMLU-Pro** — three of five reasoning references uncheckable. FrontierMath T4 58.5%, ARC-AGI-2 83.3% well behind successors.
- **Context window: 95/100.** (was 95) **1.05M/128K verified (≥1M tier)**; **2× billing over 272K input is cost caveat, not capability limit**. **Held at tier floor: NO Pro long-context retrieval measurement** (no AA-LCR/MRCR/GraphWalks). Base GraphWalks parents 256K-1M 98.2% (GLM).
- **Multimodal: 68/100.** (was 60) Text + image in; VISTA **53.9% (#2/57 Scale AI SEAL)** — measured vision. **Scored at +image-in band ceiling (60-70) with measured depth.** **Capped by:** NO MMMU-Pro/CharXiv/ExtractBench/ZeroBench/Chartography for Pro; OSWorld-Verified/MMMU Pro ambiguous; text-only output.
- **Coding: 60/100.** (was 35) WeirdML **57.4% (top 30%)** — only coding-adjacent measured number. **Scored at neutral floor (50) lifted to 60 on WeirdML signal.** SWE-Pro/TB 2.0 "—" for Pro (GLM); **NO coding benchmarks of ANY kind** (Step 5).
- **Cost efficiency: 10/100.** (was 5) **$30/$180, NO cache discount (cache read = input price)** — joint-most-expensive in series (level with GPT-5.5 Pro), far beyond $10/$50 ≈30 reference. 2× long-context band and absent caching discount make heavy workloads worse. Blended $67.50/M short-context. **10K-in/1K-out: $0.21 (7× GPT-6.1 Sol). Joint-worst cost-efficiency in series.**
- **Overall Score: 74.8/100.** (was 64) Half-up mean of (65 + 86 + 95 + 68 + 60) / 5 = 374 / 5 = 74.8 → **75**. **Below queue (89.9), average of 31 qualifying raters (89.9).** Best-fit: **DO NOT SELECT.** One real asset: physics-competition/long-exam reasoning (IPhO 93.5%, HLE 58.7%, CritPt 30.0%) — but **unverifiable against standard refs: GPQA missing, every composite index missing, ZERO coding benchmarks, ZERO multimodal benchmarks, NO AA-LCR/MRCR**. At $30/$180 costs 15× GPT-6.1 Sol while outscored on BenchLM (68.23 vs 85.27), ARC-AGI-2 (83.3% vs 94.2%), FrontierMath T4 (58.5% vs 100%). Treat 75 as floor imposed by missing evidence — no pricing justification for discovering true capability.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 69), GLM 5.3 Flash (2026-11-05, Overall 82) + official OpenAI sources (GPT-5.4 launch post, model docs, models.dev, BenchLeader, ARC Prize, Epoch AI, Scale AI SEAL). **Average of 31 qualifying raters: 89.9 Overall.** Queue: 89.9. **Critical findings:** Three gens behind; 12 benchmarks only (2nd-thinnest top-20); $30/$180 (joint-most-expensive Zen, 15× GPT-6.1 Sol); NO cache discount; GPQA Diamond missing (Step 5); IPhO 93.5% (standout, no other model approaches); HLE 58.7% w/tools (BEST in batch); ARC-AGI-2 83.3% (#17/89); NO AA Intelligence Index/LCR/MRCR/Omniscience; NO coding benchmarks; NO multimodal benchmarks; models.dev "Tool Call: No" conflicts with BrowseComp SOTA; Tau2-Telecom 98.7% RECOVERED.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4 (launch post; HLE, BrowseComp, FrontierMath-legacy, FrontierScience, ARC-AGI-2)](https://openai.com/index/introducing-gpt-5-4/)
  - [BenchLM — GPT-5.4 Pro benchmark scores (12 rows, 68.23/100, #20/1009)](https://benchlm.ai/models/gpt-5-4-pro)
  - [OpenAI model docs — gpt-5.4-pro (Responses API, 1.05M/128K, $30/$180, no cache discount, lifecycle)](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
  - [Artificial Analysis — GPT-5.4 Pro (CritPt source)](https://artificialanalysis.ai/models/gpt-5-4-pro)
  - [ARC Prize — GPT-5.4 Pro (XHigh) verified results](https://arcprize.org/leaderboard)
  - [Meta AI — Muse Spark comparison chart (IPhO 2025, FrontierScience)](https://ai.meta.com/blog/introducing-muse-spark-msl/)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Scale AI SEAL — VISTA, MultiChallenge, TutorBench, FORTRESS](https://scale.ai/seal)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---