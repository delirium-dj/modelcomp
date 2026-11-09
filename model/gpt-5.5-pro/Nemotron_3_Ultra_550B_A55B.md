# GPT-5.5 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (Xhigh effort tier) — **LEGACY TIER** (superseded by GPT-5.6, GPT-6, GPT-6.1; **15× cost of GPT-6.1 Sol**)
- **Short description:** OpenAI's maximum-compute "think harder" variant of GPT-5.5 — built for hardest professional/research problems. **BenchLM: 72.76/100, #14/1009 on ONLY 9 benchmarks** — thinnest evidence base of any top-20 model. **Clearest example in series of model priced on legacy reputation rather than current evidence.** $30/$180 (most expensive Zen rate card, 3× GPT-6 Astra, 15× GPT-6.1 Sol).
- **Provider / access:** OpenAI API (`gpt-5.5-pro`, Responses API only — Chat Completions NOT supported), Azure, AWS Bedrock, ChatGPT Pro/Business/Enterprise, **OpenCode Zen (`opencode/gpt-5-5-pro`) at $30/$180**. No Free ID.
- **Release / knowledge:** 2026-04-23 release (ChatGPT); API 2026-04-24. **Knowledge cutoff: 2025-12-01** (official docs). Superseded by GPT-5.6, GPT-6, GPT-6.1.
- **IDs:** `openai/gpt-5.5-pro` (snapshot `gpt-5.5-pro-2026-04-23`); `opencode/gpt-5-5-pro` (Zen). No Free ID.
- **Context window:** **1,050,000 total / 128,000 max output** (verified on developers.openai.com, 2026-11-02). AA lists ~922K usable input.
- **Modalities:** Text + image in; text out. Reasoning (`reasoning.effort`: medium/high/xhigh). Tool calls: function calling, web_search, file_search, code_interpreter, hosted_shell, MCP, image_generation. Structured outputs/JSON: yes. **No audio/video.** Some requests run minutes — OpenAI recommends background mode.
- **Pricing (as of 2026-11-08):** **$30 in / $30 cached read / $180 out per 1M** (official docs; unchanged since launch). **NO cached-input discount** ("GPT-5.5 Pro does not offer a cached input discount"). >272K: $60/$60/$270. Batch/Flex 50%. Data residency +10%. **$0.21 per 10K-in/1K-out request (7× GPT-6.1 Sol's $0.03).** Single worst cost-efficiency in research series.
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed. GPT-5.5 family on NVIDIA GB200/GB300 NVL72. Pro = Responses-API "Pro mode" execution profile applying more model work per request, trading latency for accuracy.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official OpenAI sources. **Average of 32 qualifying raters: 91 Overall** (Tool 91.9, Reasoning 94.2, Context 95.6, Multimodal 82.3, Coding 91.4). Queue: 91. Step 5 Preview: 70. GLM 5.3 Flash: 84. My original: 66. **LEGACY: 9 benchmarks only; $30/$180 (15× GPT-6.1 Sol).**

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI announcement) — **best in OpenAI's 6-model comparison** (ahead of GPT-5.4 Pro 89.3%, Gemini 3.1 Pro 85.9%) (Step 5 / GLM)
- GDPval: **82.3%** (OpenAI; slightly below base GPT-5.5's 84.9%) / **82.3%** (AA harness, xhigh, DataLearner catalog — rank 1/15) (GLM)
- GDPval-AA Elo: **not displayed** (AA page reads "No publicly available API") (GLM)
- Investment Banking Modeling Tasks: **88.6%** (OpenAI) (GLM)
- GeneBench: **33.2%** (OpenAI; base GPT-5.5 25.0%) (GLM)
- **Terminal-Bench 2.1/2.0, τ²/τ³-Bench, MCP-Atlas, Toolathlon: NO VERIFIED PUBLIC SCORE FOR PRO** (— in vendor table; absent from Epoch Aug 18 top-20) (GLM / Step 5) — **every other agentic benchmark in methodology's reference set absent**
- Base GPT-5.5 (family proxy): Tau2-Telecom **98.0%**, MCP-Atlas **75.3%**, Toolathlon **55.6%** (GLM)

Reasoning / knowledge:

- GPQA Diamond: **93.9% ±1.6** (Epoch AI via LM Council, Aug 18 2026 — #4/20, behind GPT-5.4 Pro 94.6%) (GLM) / **NO VERIFIED PUBLIC SCORE FOUND** (Step 5) — **primary frontier reference missing from Step 5**
- FrontierMath v2 Tiers 1-3: **87.7% ±1.9** (Epoch v2 via LM Council — **#1/20**) / **87.7%** (Step 5) (GLM / Step 5)
- FrontierMath Tier 4 v2: **78.0% ±6.5** (Epoch v2 — **#2/20**, behind Fable 5 max 87.8%) / **78.05%** (Step 5) (GLM / Step 5)
- OTIS Mock AIME 2024-25: **100.0% ±0.0** (Epoch via LM Council — **#1**) (GLM)
- HLE: **43.1%** no tools / **57.2%** with tools (OpenAI announcement) — **clears 40%+ ref on both** / trails Opus 4.7 46.9% no-tools, GPT-5.4 Pro 58.7% with tools (GLM)
- ARC-AGI-1: **95.0%**; ARC-AGI-2: **84.2%** (xhigh) / **84.6%** (high) (ARC Prize semi-private) — **ranks 33-34; GPT-6 Astra max leads at 95%** (GLM / Step 5)
- CritPt: **30.6%** (xhigh; BenchmarkList/BenchLM) — **joint-second-highest physics-reasoning in batch** (behind GPT-5.6 Sol 32.3%) (GLM / Step 5)
- IMO-ProofBench Advanced: **88.1%** (#1/24) (Stanford/Epoch via DataLearner) (GLM)
- SimpleBench: **76.9%** (#4/52) (simple-bench.com via LM Council) (GLM)
- AA Intelligence Index: **NO PUBLISHED VALUE** — AA page shows every index field N/A with "No publicly available API" (GLM / Step 5)
- LCR / MLCR / MRCR: **NO VERIFIED PUBLIC SCORE FOUND** (GLM / Step 5)

Coding:

- **NO VERIFIED PUBLIC CODING BENCHMARKS FOR PRO VARIANT** — SWE-bench Verified/Pro, Terminal-Bench 2.0, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode, ProgramBench, Bug Hunt Bench: **all "—" in vendor table; absent from Epoch/Vals boards** (GLM / Step 5)
- Family proxy (base GPT-5.5): Terminal-Bench 2.0 **82.7%** (launch SOTA); SWE-bench Verified **80.6% ±1.8** (Epoch) / **82.60%** (Vals Mini-SWE-agent) (GLM)

Multimodal:

- **NO VERIFIED PUBLIC MULTIMODAL BENCHMARKS FOR PRO** — MMMU-Pro rows "—" in vendor table (GLM) / **zero multimodal benchmarks exist** (Step 5) — image capability entirely unverified

Long context:

- **NO MRCR / RULER / GraphWalks FOR PRO VARIANT** (every long-context row "—" in vendor table) (GLM)
- Family proxy (base GPT-5.5): MRCR v2 8-needle 512K-1M **74.0%**; GraphWalks BFS 1M **45.4%** (OpenAI announcement) (GLM)
- Window: 1,050,000 total / 128,000 max output (verified on official docs) (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 32 qualifying raters = **91 Overall** (Tool 91.9, Reasoning 94.2, Context 95.6, Multimodal 82.3, Coding 91.4). Queue: 91. Step 5 Preview: 70. GLM 5.3 Flash: 84. My original: 66. **LEGACY: 9 benchmarks only; 15× GPT-6.1 Sol cost.**

- **Tool use: 65/100.** (was 55) BrowseComp **90.1%** (strongest single agentic figure). **Capped by:** TB 2.1/4.0, τ²/τ³-Bench, GDPval-AA Elo, MCP-Atlas, Toolathlon, OSWorld, Claw-Eval, AgentTime, AutomationBench, JobBench — **ALL MISSING for Pro variant**. Family proxy Tau2 98.0%, MCP-Atlas 75.3%, Toolathlon 55.6% (GLM). Single browsing number cannot carry tool-use score.
- **Reasoning: 88/100.** (was 82) FrontierMath Tiers 1-3 **87.7% (#1/20)**, Tier 4 **78.0% (#2/20)**, OTIS AIME **100% (#1)**, IMO-ProofBench **88.1% (#1/24)**, GPQA Diamond **93.9%** (GLM), ARC-AGI-2 **84.2%**, CritPt **30.6%** (joint-2nd), SimpleBench **76.9% (#4/52)**, HLE **57.2% w/tools**. **Capped by:** **GPQA Diamond missing (Step 5)**, **no AA Intelligence Index / AA-Omniscience / LCR / MLCR / MRCR** — 3 of 4 reasoning references uncheckable. ARC-AGI-2 84.2% below successors' 92-95%.
- **Context window: 95/100.** (was 90) **1,050,000 total / 128,000 max output** (verified on official docs). **Capped at tier floor: NO MRCR/GraphWalks/LCR for Pro variant** — effective 512K-1M recall unmeasured. Family proxy MRCR 74.0%, GraphWalks 45.4% (GLM).
- **Multimodal: 65/100.** (was 60) Text + image in; text out; image_generation tooling. **Capped at low end of +image-in band (60-70): ZERO multimodal benchmarks for Pro** — no MMMU-Pro, Chartography, ExtractBench, ZeroBench. Compare GPT-6 Astra (same 70 on coverage but #1/#2 on 5 visual benchmarks).
- **Coding: 55/100.** (was 45) **NO coding benchmarks of ANY kind for Pro variant.** Scored at neutral floor for "dimension exists, entirely unmeasured." Family proxy: TB 2.0 82.7% (launch SOTA), SWE-V 80.6%/82.6% (Epoch/Vals) (GLM).
- **Cost efficiency: 10/100.** (was 10) **$30/$180 per 1M, NO cache discount** — most expensive in series by 3× next tier ($10/$50 ≈30), 15× GPT-6.1 Sol ($2/$10). $0.21/10K-in/1K-out vs GPT-6.1 Sol $0.03. No free tier. Batch/Flex 50% still $15/$90. **Single worst cost-efficiency in research series.**
- **Overall Score: 73.6/100.** (was 66) Half-up mean of (65 + 88 + 95 + 65 + 55) / 5 = 368 / 5 = 73.6 → **74**. **Below queue (91), average of 32 qualifying raters (91).** Best-fit: **DO NOT SELECT.** At $30/$180 costs 15× GPT-6.1 Sol while outscored on BenchLM (72.76 vs 85.27), ARC-AGI-2 (84.2% vs 94.2%), FrontierMath T4 (78% vs 100%), with **ZERO coding benchmarks, ZERO multimodal benchmarks, NO GPQA/AA Index/LCR/MRCR**. One asset: strong reasoning on thinnest evidence base in top 20. Treat 74 as floor imposed by missing evidence — no pricing justification for discovering true capability.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 70), GLM 5.3 Flash (2026-11-02, Overall 84) + official OpenAI sources (GPT-5.5 launch post, Pro model docs, LM Council Epoch snapshots). **Average of 32 qualifying raters: 91 Overall.** Queue: 91. **Critical findings:** LEGACY (superseded by GPT-5.6/6/6.1); 9 benchmarks only (thinnest top-20 evidence); $30/$180 (most expensive Zen, 15× GPT-6.1 Sol); NO cache discount; NO GPQA/AA Index/LCR/MRCR/AA-Omniscience for Pro; NO coding benchmarks; NO multimodal benchmarks; NO TB 2.1/τ³/MCP-Atlas/Toolathlon; BrowseComp 90.1% (only agentic figure); FrontierMath T1-3 #1/20, T4 #2/20; OTIS AIME 100% #1.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.5 (launch post; HLE, BrowseComp, FrontierMath-legacy)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 Pro model docs (OpenAI — API ID, 1.05M/128K window, $30/$180, no cache discount, Responses-only)](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [BenchLM — GPT-5.5 Pro benchmark scores (9 rows, 72.76/100, #14/1009)](https://benchlm.ai/models/gpt-5-5-pro)
  - [Artificial Analysis — CritPt Benchmark Leaderboard (30.6% CritPt)](https://artificialanalysis.ai/evaluations/critpt)
  - [ARC Prize — official leaderboard data (ARC-AGI-1 95.0%, ARC-AGI-2 84.2%)](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard (87.7% / 78.05%)](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [LM Council benchmarks (Epoch AI snapshots — GPQA 93.9%, FrontierMath v2 87.7%/78.0%, OTIS 100%, SimpleBench 76.9%)](https://lmcouncil.ai/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---