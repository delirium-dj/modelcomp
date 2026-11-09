# GPT-6 Sol — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (Max effort tier) — **MID-TIER GPT-6** (superseded by GPT-6.1 Sol; same $2/$10 rate card, 7.3 BenchLM points lower)
- **Short description:** OpenAI's balanced GPT-6 variant — **#11/1009 on BenchLM (77.97)** behind GPT-6 Astra (86.07, #6) and GPT-6.1 Sol (85.27, #4). Two standout results: **FrontierMath v2 Tier 4 90.0%** and **CritPt 30.9%** (both near top of series). **Thinnest agentic evidence base of any top-15 model (40 benchmarks, NO Terminal-Bench figure at all).** Reliability mid-pack (hallucination 60.1%, Omniscience index 27.1).
- **Provider / access:** OpenAI API (`gpt-6-sol`, Responses + Chat Completions + Batch/Flex/Fast/regional), Azure OpenAI, AWS Bedrock, ChatGPT Work/Codex (Plus/Pro/Business/Enterprise/Edu), **OpenCode Zen (`opencode/gpt-6-sol`) at $2/$10**. No Free ID on Zen. BenchLeader shows $1/$5 route (74 tok/s).
- **Release / knowledge:** 2026-09-22 release (GPT-6 family launch); **knowledge cutoff: April 20, 2026** (verified via OpenAI API docs).
- **IDs:** `openai/gpt-6-sol`; `opencode/gpt-6-sol`. No Free tier.
- **Context window:** **1,050,000 total / 128,000 max output** (OpenAI docs; BenchLeader 1.1M; AA 872K, Vals 1M). **>272K input: 2× input / 1.5× output surcharge.**
- **Modalities:** Text + image in; text out. Reasoning (6 effort settings: none/low/medium/high/xhigh/max). Tool calls: function calling, web/file search, computer use. Structured outputs/JSON. **No audio/video.**
- **Pricing (as of 2026-11-08):** ≤272K: **$2.00 in / $0.20 cached / $2.50 cache write / $10.00 out per 1M**. >272K: **$4.00 in / $0.40 cached / $15.00 out** (2× input/cache, 1.5× output). Batch/Flex 50%, Fast 2×. Blended AA ~$1.54/M. Cost/task $1.04 (AA). **Same rate card as GPT-6.1 Sol (scores 7.3 BenchLM points higher).** No free tier.
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed. Output speed 86 tok/s (AA), first token ~130s at max effort.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-10-16) + official OpenAI sources. **Average of 38 qualifying raters: 88.8 Overall** (Tool 88.6, Reasoning 89.6, Context 95.7, Multimodal 80.5, Coding 89.3). Queue: 88.8. Step 5 Preview: 79. GLM 5.3 Flash: 88. My original: 78. **SAME $2/$10 AS GPT-6.1 SOL, 7.3 BENCHLM POINTS LOWER.**

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **83.2%** #6/73 (GLM) / **NO VERIFIED PUBLIC SCORE** (Step 5) — **Step 5 notes entire terminal/browsing reference set absent**
- Terminal-Bench 4.0: **43.9%** #23 (AA) / **44.4%** (Vals) / **49.4%** (tbench.ai, #36) (GLM)
- TB Science (Vals): **30.0%** #6 (GLM)
- GDPval-AA v2.1: **50.4%** #45 (AA — fills previously-missing row) (GLM) / **50.4% normalized, no Elo** (Step 5)
- Agents' Last Exam: **56.4%** (OpenAI launch) (GLM / Step 5)
- OSWorld 2.0: **60.5%** (OpenAI launch) / vs GPT-5.5 13.0% (GLM / Step 5)
- AutomationBench: **33.2%** (OpenAI official) / **61.6%** (AA) — **CONFLICT: version/harness difference, both cited** (GLM / Step 5)
- APEX-Agents: **54.3%** #22 (Mercor) (GLM)
- AA-Briefcase v1.1: **Elo 1,480** #28 (GLM)
- CyberBench (Vals): **78.0%** #1 (GLM)
- ITBench SRE (AA): **49.4%** #7; Vending-Bench 2: **14,427.9** #2 (Andon Labs) (GLM)
- Harvey's Legal Agent Benchmark: **1.7%** (Vals, #41 — outlier weakness); Legal Research 28.9% (#41); Tax Agent 53.0%; MedScribe 82.0%; MedCode 47.1%; SAGE 44.8% (GLM)
- FACTS Search (Kaggle/Google): **86.2%** #4; GDP.pdf (AA): **25.2%**; Harvey LAB (AA): **3.6%** (GLM)
- CWE-bench v1: **52.0%** (OpenAI) / **64.2%** (AA CWE-Bench-AA) (GLM / Step 5)
- DeepsecBench-AA: **46.3%** (best in batch) (Step 5)
- AA Cyber Index: **36.8%** (Step 5)
- MazeBench: **7%**; ExploitGym: **22.1%**; CyberGym-E2E-AA: **0.0%** (Step 5)
- Hermes Bench: **73.5%**; Hermes Index: **44.1%** (Nous Research) (GLM / Step 5)
- **Terminal-Bench 2.1, TB 4.0, τ³-Banking, τ²-bench, BrowseComp, MCP-Atlas, OSWorld-Verified, Toolathlon, Claw-Eval: NO VERIFIED PUBLIC SCORE** (Step 5) — **entire terminal/browsing reference set absent**

Reasoning / knowledge:

- GPQA Diamond: **94.3%** #8 (Epoch AI via BenchLeader — **fills previously-missing primary frontier reference**) (GLM) / **NO VERIFIED PUBLIC SCORE** (Step 5)
- HLE: **47.9%** #32 (AA; sweep 18.4→47.9 — fills previously-missing) (GLM) / **47.9%** (Step 5) — **clears 40%+ frontier**
- ARC-AGI-1: **95.5%** #29 (ARC Prize) (GLM / Step 5)
- ARC-AGI-2: **89.6%** #16 (ARC Prize, sweep 31.5→89.6) / **89.6%** (Step 5)
- ARC-AGI-3: **4.6%** #15 (ARC Prize, verified) / **23.0%** #15 (ARC Prize Provider-Adapter) — **CONFLICT: different run/effort, both cited** (GLM) / **4.6% / 23.03% (18.4pt harness gap)** (Step 5)
- CritPt: **30.9%** #11 (AA — fills previously-missing) (GLM / Step 5) — **3rd-highest physics-reasoning in series**
- FrontierMath v2: Tiers 1-3 **89.8%** #5 / Tier 4 **90.0%** #8 (Epoch v2) / **89.8% / 90.0%** (Step 5) — **2nd-highest Tier 4 in batch behind GPT-6.1 Sol 100%**
- OTIS Mock AIME: **100.0%** #1 (GLM)
- ProofBench: **83.0%** (Vals); LiveBench Reasoning: **88.7%** #21; LiveBench Math: **96.4%** #8; LMArena Hard: **1,482** (GLM)
- SimpleQA Verified: **60.7%** #14 (Epoch); BioMysteryBench: **74.8%** #7; EMB: **71.5%** (GLM)
- AA Intelligence Index v4.3.2: **47.6** #25 (sweep 28.5→47.6 — supersedes earlier "48 #18") / **47.6** (Step 5)
- Vals Index: **57.5** #11; Epoch Capabilities Index: **162.7** #7; BenchLeader Index: **66.0 ±3.2** #33/760 (GLM)
- LMCA: **59.1%** #23 (Epoch); DTBench: **97.3%** #8; FORTRESS: **13.5%** (Scale SEAL) (GLM)
- AA-Omniscience: Index **27.1**, accuracy **54.5%**, non-hallucination **39.9%** (GLM) / **index 27.1, accuracy 54.5%, hallucination 60.1%** (Step 5)
- HealthBench Professional: **60.8%** (length-adjusted); HealthBench Hard: **30.1%**, length-adj **53.2%** (GLM / Step 5)
- Gray Swan IPI: **10.1%** (Google Gemini 4 Argon chart) (GLM / Step 5)
- **MRCR: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- DeepSWE v1.1: **68.8%** max ($2.74/task, OpenAI vendor — below GPT-5.6 Sol 72.7%, Opus 5 73.7%) (GLM / Step 5) — **5.2pts under 74% frontier ref**
- AA-SciCode: **57.6%** #23 (Epoch) — **clears 55%+ frontier ref** (GLM / Step 5)
- SciCode: **57.6%** #23 (Epoch) (GLM)
- ALE-Bench: **2,462** #2 (Epoch) (GLM)
- LMArena WebDev: **1,688** #8 (GLM)
- LMArena Coding: **1,519** #37; LiveBench Coding: **81.8%** #13 (GLM)
- Vibe Code Bench v1.1: **87.8%** #9 (Vals); IOI: **82.6%** #10 (Vals); Code Migration: **57.2%** #7; ProgramBench: **2.0%** fully resolved (GLM)
- FrontierCode 1.1 Main: **49.3%** #9 (Cognition; below Opus 5 53.4%, Fable 5.1 50.9%) (GLM)
- FrontierCode 2.0: **34.3%** (Step 5)
- **SWE-bench Verified, SWE-bench Pro, Terminal-Bench, AA Coding Index, LiveCodeBench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **4 of 5 coding references unmeasured**

Multimodal:

- MMMU-Pro: **83.0%** #28 (AA; sweep 80.2→83.0 — fills previously-missing) (GLM) / **82.9%** (Step 5)
- ExtractBench: **94.57%** — **3rd-best document extraction in batch** (Step 5)
- ParseBench: **68.89%** (Step 5)
- AA-MMMU-Pro: **82.9%** (Step 5)
- SAGE (Vals): **44.8%**; Blueprint-Bench 2: **36.9%** #7 (GLM)
- **Text + image in only; text out; no video/audio** — image-in only band (60-70), lifted by document suite

Long context:

- AA-LCR: **83.7%** #15 (AA; fills previously-missing) (GLM / Step 5)
- MLCR: **16.1%** #26 (AA) (GLM)
- **NO MRCR / RULER / GraphWalks VERIFIED** (GLM / Step 5)
- **>272K surcharge doubles input cost, making top of window economically impractical** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 38 qualifying raters = **88.8 Overall** (Tool 88.6, Reasoning 89.6, Context 95.7, Multimodal 80.5, Coding 89.3). Queue: 88.8. Step 5 Preview: 79. GLM 5.3 Flash: 88. My original: 78. **SAME $2/$10 AS GPT-6.1 SOL, 7.3 BENCHLM POINTS LOWER.**

- **Tool use: 78/100.** (was 68) TB 2.1 **83.2% #6/73** (GLM — fills Step 5's gap), Agents' Last Exam **56.4%**, OSWorld 2.0 **60.5%**, GDPval-AA **50.4%**, AutomationBench **33.2%/61.6% (CONFLICT)**, APEX-Agents **54.3%**, CyberBench **78.0% #1**, FACTS Search **86.2% #4**, CWE-Bench **52.0/64.2%**, DeepsecBench **46.3%** (best in batch), Vending-Bench **#2**. **Capped by:** TB 4.0 **43.9-44.4%**, TB Science **30.0%**, Harvey LAB **1.7%/3.6%**, MazeBench **7%**, ExploitGym **22.1%**, CyberGym-E2E-AA **0.0%**, **NO τ³-Banking/BrowseComp/MCP-Atlas/Toolathlon/Claw-Eval/OSWorld-Verified**.
- **Reasoning: 90/100.** (was 80) GPQA Diamond **94.3% #8** (GLM — fills Step 5's gap), HLE **47.9%** (clears 40%+), ARC-AGI-1 **95.5%**, ARC-AGI-2 **89.6% #16**, FrontierMath **89.8/90.0% #5/#8** (2nd-highest Tier 4), OTIS AIME **100% #1**, CritPt **30.9% #11** (3rd-highest in series), AA Index **47.6**, SimpleQA **60.7% #14**, BioMysteryBench **74.8% #7**, LMCA **59.1% #23**. **Capped by:** **GPQA Diamond missing (Step 5)**, ARC-AGI-3 **4.6%** (Provider-Adapter **23.0%** — 18.4pt harness gap), AA-Omniscience **27.1/60.1% hallucination**, **NO MRCR**.
- **Context window: 97/100.** (was 95) **1.05M/128K (≥1M tier)**; AA-LCR **83.7% #15**. **Held at 97 (not 99-100): NO MRCR/RULER/GraphWalks; >272K surcharge doubles input cost.**
- **Multimodal: 78/100.** (was 70) Text + image in; ExtractBench **94.57% (3rd-best in batch)**, MMMU-Pro **83.0%**, ParseBench **68.89%**, AA-MMMU-Pro **82.9%**. **Scored above +image-in band (60-70) due to measured document suite depth.** **Capped by:** no video/audio input, ParseBench **68.89%**.
- **Coding: 82/100.** (was 78) ALE-Bench **2,462 #2**, LMArena WebDev **1,688 #8**, Vibe Code **87.8% #9**, SciCode **57.6% #23** (clears 55% ref), DeepSWE **68.8%** (5.2pts under 74% ref), Code Migration **57.2% #7**, IOI **82.6% #10**, LiveBench Coding **81.8% #13**. **Capped by:** DeepSWE **68.8%** (under 74% ref), FrontierCode 1.1 **49.3%** (below Opus 5/Fable 5.1), **NO SWE-V/Pro/TB/AA Coding Index/LiveCodeBench** — 4 of 5 coding references unmeasured.
- **Cost efficiency: 80/100.** (was 80) **$2/$10 per 1M** (same as GPT-6.1 Sol); 90% cache discount ($0.20); Batch/Flex 50%; **GPT-6.1 Sol on IDENTICAL rate card scores 7.3 BenchLM points higher**. Blended ~$1.54/M; cost/task $1.04. No free tier. >272K surcharge.
- **Overall Score: 85/100.** (was 78) Half-up mean of (78 + 90 + 97 + 78 + 82) / 5 = 425 / 5 = 85 → **85**. **Below average of 38 qualifying raters (88.8) and queue (88.8).** Best-fit: **Strong reasoning/document model at fair price** — FrontierMath T4 90%, CritPt 30.9%, ARC-AGI-2 89.6%, ExtractBench 94.57%, AA-LCR 83.7% at $2/$10. **Two cautions:** (1) agentic/coding evidence thinnest of any top-15 model (no TB, SWE-V, Coding Index); (2) **GPT-6.1 Sol on SAME $2/$10 beats it on BenchLM, ARC-AGI-2, FrontierMath T4 (100% vs 90%), hallucination (51.9% vs 60.1%) — prefer 6.1 Sol unless 6 already deployed.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 79), GLM 5.3 Flash (2026-10-16, Overall 88) + official OpenAI sources (GPT-6 Sol/Luna launch post, model docs, Astra system card, BenchLeader sweep tables). **Average of 38 qualifying raters: 88.8 Overall.** Queue: 88.8. **Critical findings:** Same $2/$10 as GPT-6.1 Sol (7.3 BenchLM points lower); FrontierMath T4 90% (2nd-highest); CritPt 30.9% (3rd-highest); GPQA 94.3% #8 (GLM fills Step 5 gap); TB 2.1 83.2% #6/73 (GLM fills Step 5 gap); NO MRCR; ARC-AGI-3 4.6% vs 23.0% harness gap; hallucination 60.1%; CyberBench 78% #1; DeepsecBench 46.3% (best in batch); 4/5 coding refs unmeasured; GPT-6.1 Sol strictly better at same price.
- Reference URLs:
  - [OpenAI — Introducing GPT-6 Sol and Luna (launch post and benchmark chart)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [OpenAI — GPT-6 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-6-sol)
  - [OpenAI — GPT-6 Astra system card (HealthBench, ExploitGym)](https://deploymentsafety.openai.com/gpt-6-astra)
  - [BenchLM — GPT-6 Sol benchmark scores (40 rows, 77.97/100, #11/1009)](https://benchlm.ai/models/gpt-6-sol)
  - [Artificial Analysis — GPT-6 Sol](https://artificialanalysis.ai/models/gpt-6-sol)
  - [ARC Prize — published semi-private results for GPT-6 Sol](https://arcprize.org/results/openai-gpt-6-sol)
  - [Epoch AI — FrontierMath v2 leaderboard (90.0% Tier 4)](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---