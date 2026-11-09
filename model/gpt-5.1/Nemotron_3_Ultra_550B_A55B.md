# GPT-5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 (Thinking) — **DEPRECATED (superseded by GPT-5.2; AA confirms only default 10k-token workload benchmarked)**
- **Short description:** OpenAI's early GPT-5 series reasoning model with **200K CONTEXT (SMALLEST IN BATCH, 1/5 OF 1M STANDARD)**, adaptive reasoning, good speed (80 tok/s), at $1.07/$8.50 (Zen). **BenchLM: 57.04/100, #59/1015 (23 BENCHMARKS — 2ND-THINNEST IN BATCH). FULLY INDEPENDENTLY-EVIDENCED: NO VENDOR ROWS IN BENCHLM.** **DEPRECATED: superseded by GPT-5.2; AA benchmarks only default 10k workload.**
- **Provider / access:** OpenAI API (`gpt-5.1`, Responses + Chat Completions), Azure, **OpenCode Zen (`opencode/gpt-5.1` at $1.07/$8.50)**, OpenRouter. Responses API (also Chat Completions). No Free ID on Zen. **CONTEXT WINDOW CONFLICT: BenchLM 200K vs BenchLeader 400K vs AA 272K — UNRESOLVED.**
- **Release / knowledge:** 2025-11-12/13 release; **knowledge cutoff: September 30, 2024** (AA spec). **DEPRECATED by GPT-5.2.**
- **IDs:** `opencode/gpt-5.1` (Zen); `gpt-5.1` (OpenAI API); `gpt-5.1-thinking` (system card). No Free ID on Zen. ChatGPT sibling: GPT-5.1 Instant (`gpt-5.1-chat-latest`) — different model.
- **Context window:** **CONFLICTING: BenchLM 200K (SMALLEST IN BATCH) vs BenchLeader 400K vs AA 272K — UNRESOLVED.** Max output 128K per BenchLeader. **BenchLM 200K = SMALLEST IN BATCH (1/5 OF 1M STANDARD).**
- **Modalities:** Text + image in; text out. Adaptive reasoning (`reasoning_effort`); tool calling with preamble; structured outputs; prompt caching; Batch API. **NO VIDEO/AUDIO/PDF INPUT.**
- **Pricing (as of 2026-11-08):** Zen **$1.07 in / $0.107 cached / $8.50 out per 1M**; OpenAI first-party **$1.25/$10.00** (AA); OpenRouter **$1.38/$11.00**; $0.625/$5.00 route also seen. Cache read $0.107 (Zen). Batch API discount. Output speed 80 tok/s (AA), first token 1.30s. **DEPRECATED STATUS = CAVEAT.**
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed. **DEPRECATED — AA confirms only default 10k workload still benchmarked.**

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-05) + official OpenAI sources. **Average of 27 qualifying raters: 84.6 Overall** (Tool 83.9, Reasoning 87, Context 85.8, Multimodal 80.4, Coding 85.3). Queue: 84.6. Step 5 Preview: 59. GLM 5.3 Flash: 68. My original: 56. **DEPRECATED; 200K CONTEXT (SMALLEST IN BATCH); 23 BENCHMARKS (2ND-THINNEST); FULLY INDEPENDENT EVIDENCE.**

Agent / tool use:

- Terminal-Bench: **47.6% #37** (tbench.ai, medium) / **TB Hard (AA): 45.5% #34** / **TB 2.1 (AA): 52.4%** / **TB 2.0 (Vals): 44.9%** — **CONFLICT: 44.9-52.4% spread** (GLM / Step 5)
- Tau2-Bench Telecom: **81.9%** (AA) (GLM / Step 5)
- GDPval-AA v2.1: **16.5% / Elo 930** (AA — weak) (GLM / Step 5)
- Tau3-Banking (AA): **15.9%** (GLM)
- MCP Atlas (Scale AI SEAL): **50.1% #31** (GLM)
- Poker Agent (Vals): **1,038.6 #8**; Vending-Bench 2: **1,473.4**; DeepResearch Bench: **42.8%** (GLM)
- Gert Labs: **41.24%** (GLM / Step 5)
- **TB (all harnesses), τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, APEX-Agents: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE**

Reasoning / knowledge:

- GPQA Diamond: **87.6% #65** (Epoch) / **87.3%** (AA) / **86.6%** (Vals) — **JUST UNDER 90%+ FRONTIER** (GLM / Step 5)
- HLE: **23.7% #17** (Scale AI/CAIS) / **28.5%** (AA) — **FAILS 40%+ REF BY 11.5-16.3PTS** (GLM / Step 5)
- ARC-AGI-1: **72.8%** (ARC Prize) — **UNUSUALLY LOW FOR FAMILY** (GLM / Step 5)
- ARC-AGI-2: **17.6% #131** (ARC Prize — weak) (GLM)
- CritPt: **4.9% #147** — **LOWEST MEASURED IN BATCH** (GLM / Step 5)
- AA-LCR: **80.0% #73** (AA) (GLM / Step 5)
- AA Intelligence Index v4.3.2: **24.7 #161** (AA) / **BenchLeader Index: 57.9 ±3.5 #155/760** (GLM)
- AA-HLE: **28.5%** (AA) (GLM / Step 5)
- AA-Omniscience: **accuracy 37.7%, non-hallucination 48.1% #122, index 5.4** (GLM) / **hallucination 51.9%** (Step 5)
- AA AIME 2025: **93.3%** (Vals) / **94.0%** (AA) (GLM / Step 5)
- AA MMLU-Pro: **86.4%** (Vals); Global-MMLU-Lite: **90.6%**; IFBench: **72.9%** (GLM / Step 5)
- SimpleBench: **53.2% #41**; LMCA: **43.9% #79**; DTBench: **90.1% #67**; ForecastBench: **58.1%** (GLM)
- HELM Capabilities: **65.6% #33**; IFEval: **93.5% #3**; WildBench: **86.3% #2** (GLM)
- **AA Intelligence Index, AA-Omniscience, ARC-AGI-2, MRCR, FrontierMath: NO VERIFIED PUBLIC SCORE** — **reliability partially unmeasured** (GLM / Step 5)

Coding:

- SWE-bench Verified: **68.0% #26** (Epoch) / **66.0% #17** (swebench.com bash) (GLM / Step 5)
- LiveCodeBench: **86.5% #21** (Vals) / **86.8%** (AA) (GLM / Step 5)
- SWE-bench (Vals): **69.8%** (GLM / Step 5)
- Vibe Code Bench v1.1: **24.6%** (Vals — weak) (GLM / Step 5)
- SciCode: **43.3%** (Epoch) — **BELOW 55%+ FRONTIER REF** (GLM)
- AA Coding Index: **49.4%** — **20.6PTS UNDER 70% FRONTIER REF** (GLM / Step 5)
- WeirdML: **60.8% #47**; ALE-Bench: **1,192.2 #35**; GSO-Bench: **13.7%** (GLM)
- **SWE-bench Verified/Pro, DeepSWE, AA-SciCode, Terminal-Bench, FrontierCode: NO VERIFIED PUBLIC SCORE** — **85%, 74%, 70%, 55% refs unmeasured** (GLM / Step 5)

Multimodal:

- MMMU: **85.4% #1** (not-stated) (GLM)
- MMMU-Pro: **79.0% #4 / 76.0%** (not-stated) / **83.2% #33** (Vals) (GLM / Step 5)
- VISTA: **43.8% #31**; VPCT: **58.7% #7**; LMArena Vision: **1,250** (GLM)
- Design Arena: **1,188 Elo** (Step 5) / **1,185 Elo** (original)
- **Text + image in only; text out; NO VIDEO/AUDIO/PDF INPUT** (GLM / Step 5)

Long context:

- AA-LCR: **80.0% #73** (AA) (GLM / Step 5)
- **CONTEXT WINDOW CONFLICT: BenchLM 200K vs BenchLeader 400K vs AA 272K — UNRESOLVED** (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 27 qualifying raters = **84.6 Overall** (Tool 83.9, Reasoning 87, Context 85.8, Multimodal 80.4, Coding 85.3). Queue: 84.6. Step 5 Preview: 59. GLM 5.3 Flash: 68. My original: 56. **DEPRECATED; 200K CONTEXT (SMALLEST); 23 BENCHMARKS; CRITPT 4.9% (LOWEST IN BATCH); HLE 23.7% (FAILS 40%); GPQA 87.6% (JUST UNDER 90%); FULLY INDEPENDENT EVIDENCE.**

- **Tool use: 58/100.** (was 50) Tau2 **81.9%**; TB **47.6% #37** / TB Hard **45.5%** / TB 2.1 **52.4%** / TB 2.0 **44.9%**; MCP Atlas **50.1% #31**; GDPval-AA **16.5% / Elo 930** (weak); Poker Agent **1,038.6 #8**; Vending-Bench **1,473.4**; DeepResearch **42.8%**; Gert Labs **41.2%**. **Capped by:** TB Hard **45.5%**; GDPval **930 Elo (16.3% norm, 2ND-LOWEST IN BATCH)**; **NO TB 4.0/τ³/τ²/τ³-Banking/MCP-Atlas/OSWorld/BrowseComp/Toolathlon/MazeBench/ALE/Claw-Eval/JobBench/AA Agentic Index/APEX-Agents** — ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE.
- **Reasoning: 65/100.** (was 55) GPQA Diamond **87.6% #65** (just under 90%+); AIME **93.3-94.0%**; AA-LCR **80.0% #73**; MMLU-Pro **86.4%**; Global-MMLU-Lite **90.6%**; IFBench **72.9%**; SimpleBench **53.2%**; DTBench **90.1%**; HELM **65.6%**; IFEval **93.5%**; WildBench **86.3%**; AA AIME **94.0%**. **Capped by:** HLE **23.7% #17 / 28.5% (FAILS 40%+ BY 11.5-16.3PTS)**; ARC-AGI-1 **72.8% (UNUSUALLY LOW FOR FAMILY)**; ARC-AGI-2 **17.6%** (weak); CritPt **4.9% (LOWEST IN BATCH)**; AA Intelligence Index **24.7**; AA-Omniscience **5.4 index / 37.7% accuracy / 51.9% hallucination**; **NO ARC-AGI-2/MRCR/FrontierMath/AA Intelligence Index (vendor)/AA-Omniscience (vendor)**.
- **Context window: 70/100.** (was 65) **CONFLICT: BenchLM 200K (SMALLEST IN BATCH) vs BenchLeader 400K vs AA 272K — UNRESOLVED.** BenchLM 200K = 1/5 of 1M standard. AA-LCR **80.0%** (strong for tier). **Held at 70 (200K tier boundary): BenchLM 200K = tier floor; NO MRCR/RULER/GRAPHWALKS; max output unconfirmed.**
- **Multimodal: 70/100.** (was 60) MMMU **85.4% #1**; MMMU-Pro **79.0% #4 / 83.2% #33 (Vals)**; VISTA **43.8% #31**; VPCT **58.7% #7**; LMArena Vision **1,250**. **Capped by:** visual suite = 3 benchmarks; Design Arena **1,185 Elo (LOW)**; NO video/audio/PDF input; NO CharXiv/ExtractBench/BabyVision/ZeroBench/OmniDocBench/MathVision.
- **Coding: 65/100.** (was 50) SWE-V **68.0% #26 / 66.0% bash** (clears 65% mid-tier); LCB **86.5% #21 / 86.8%** (strong); SWE-bench **69.8% (Vals)**; Vibe Code **24.6%** (near-floor); SciCode **43.3% (BELOW 55%+ REF)**; AA Coding Index **49.4% (20.6PTS UNDER 70% REF)**; WeirdML **60.8%**; ALE-Bench **1,192 #35**. **Capped by:** SciCode **43.3% (UNDER 55% REF)**; AA Coding Index **49.4% (20.6PTS UNDER 70% REF)**; Vibe Code **24.6%**; **NO SWE-V/Pro/DeepSWE/AA-SciCode/TB/FrontierCode** — 85%, 74%, 70%, 55% refs unmeasured.
- **Cost efficiency: 72/100.** (was 80) Zen **$1.07/$8.50** (cache $0.107); OpenAI **$1.25/$10**; OpenRouter **$1.38/$11**; $0.625/$5.00 route seen. **Between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60).** **DEPRECATED STATUS = CAVEAT.** Output speed 80 tok/s.
- **Overall Score: 66/100.** (was 56) Half-up mean of (58 + 65 + 70 + 70 + 65) / 5 = 328 / 5 = 65.6 → **66**. **Below queue (84.6), average of 27 qualifying raters (84.6).** Best-fit: **DEPRECATED MID-TIER REASONING/CHAT UPGRADE — USE ONLY FOR LEGACY REPRODUCIBILITY.** 200K window (smallest in batch), CritPt 4.9% (lowest in batch), HLE 23.7% (fails 40%), AA Index 24.7, Coding 49.4% (20.6pts under 70% ref). **Step up to GPT-5.2/5.5-class models for current work. Dominated by GPT-5.6 Luna (63.94, 54 benchmarks) at similar price.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 59), GLM 5.3 Flash (2026-11-05, Overall 68) + official OpenAI sources (BenchLeader sweep tables, BenchLM, ARC Prize, Epoch AI, Scale AI/CAIS, Vals AI, OpenRouter). **Average of 27 qualifying raters: 84.6 Overall.** Queue: 84.6. **Critical findings:** DEPRECATED (superseded by GPT-5.2; AA only 10k workload); **200K CONTEXT (SMALLEST IN BATCH, 1/5 OF 1M); 23 BENCHMARKS (2ND-THINNEST); CRITPT 4.9% (LOWEST IN BATCH); HLE 23.7% (FAILS 40%); GPQA 87.6% (JUST UNDER 90%); FULLY INDEPENDENT EVIDENCE (NO VENDOR ROWS); CONTEXT CONFLICT 200K/400K/272K UNRESOLVED; AA INDEX 24.7; AA CODING INDEX 49.4% (20.6PTS UNDER 70% REF); CRITPT 4.9% (LOWEST IN BATCH).**
- Reference URLs:
  - [BenchLM — GPT-5.1 benchmark scores (23 rows, 57.04/100, #59/1015)](https://benchlm.ai/models/gpt-5-1)
  - [BenchLeader — GPT-5.1 effort-sweep tables (TB, Tau2, GDPval, MCP, Index)](https://benchleader.ai/models/gpt-5.1)
  - [Artificial Analysis — GPT-5.1 (primary independent source)](https://artificialanalysis.ai/models/gpt-5-1)
  - [ARC Prize — GPT-5.1 (Thinking, High) verified results](https://arcprize.org/leaderboard)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Artificial Analysis — livecodebench leaderboard](https://artificialanalysis.ai/evaluations/livecodebench)
  - [Artificial Analysis — aime-2025 leaderboard](https://artificialanalysis.ai/evaluations/aime-2025)
  - [Artificial Analysis — mmlu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmlu-pro)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Openrouter — GPT-5.1 benchmarks](https://openrouter.ai/openai/gpt-5.1/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---