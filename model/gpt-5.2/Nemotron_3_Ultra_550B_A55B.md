# GPT-5.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Xhigh effort tier) — **SUPERSEDED / DEPRECATED**
- **Short description:** OpenAI's early GPT-5 series reasoning model with strong math (AIME 2025 100%), good coding (SWE-bench Verified 80%), **broadest measured visual suite in research series (19 benchmarks, Video-MME 86.0%, OmniDocBench 85.7%)**, but **only 400K context** (half current standard) and **near-zero AA-Omniscience index (−0.9, 81.2% hallucination)**. **Now five generations behind** (GPT-6.1 Sol → GPT-6.1 Terra → GPT-6 Sol → GPT-5.6 Sol → GPT-5.2). BenchLM: 59.62/100, #55/1015.
- **Provider / access:** OpenAI API (`gpt-5.2`, Responses API), OpenCode Zen (`opencode/gpt-5.2`), Azure OpenAI, AWS Bedrock. Responses API (not Chat Completions). No Free tier.
- **Release / knowledge:** 2025-12-11 release; **knowledge cutoff: August 31, 2025** (AA spec). **Deprecated by GPT-5.4** (only default 10k-token workload still benchmarked per AA). Azure Foundry retirement set 2027-06-08.
- **IDs:** `openai/gpt-5.2` (OpenAI API), `opencode/gpt-5.2` (OpenCode Zen). No Free tier.
- **Context window:** 400,000 tokens total (400K per AA/BenchLM); max output 128K per models.dev (BenchLeader's 128K conflicts, treated as output cap).
- **Modalities:** Text, image in; text out. Reasoning (`reasoning_effort` xhigh). Tool calls, JSON mode, structured outputs, prompt caching. **No audio/video input** — text + image only.
- **Pricing (as of 2026-11-08):** ≤272K: **$1.75/M in, $0.175/M cache read, $14.00/M out**. >272K: **$3.50/M in, $0.35/M cache read, $28.00/M out** (2× input/cache, 2× output). Blended AA: **$1.87/M** (7:2:1). Cache read $0.175/M (90% off). Batch/Flex 50% off ($0.875/$7). Fast mode 2× ($3.50/$28). No Free tier. Output speed 75 tok/s, first token ~148s at xhigh (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. Reasoning model with persisted reasoning.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-10-16) + official OpenAI sources. **Average of 29 qualifying raters: 86.4 Overall** (Tool 85.2, Reasoning 90, Context 89.3, Multimodal 80.4, Coding 87.4). Queue: 86.4. Step 5 Preview: 74. GLM 5.3 Flash: 80. My original: 62.

Agent / tool use:

- Terminal-Bench: **64.9% #9** (tbench.ai, medium) / **47.0%** (AA, TB Hard) / **51.7%** (Vals, TB 2.0) (GLM / Step 5)
- τ²-Bench Telecom: **84.8% #3** (taubench.com, high) / **84.8%** (AA) (GLM / Step 5)
- GDPval: **49.7% #1** (OpenAI via Epoch) / **no Elo figure published** (Step 5)
- MCP Atlas (Scale AI SEAL): **67.6% #23** (xhigh) (GLM)
- BFCL Overall: **55.9% #14** (Berkeley Function Calling Leaderboard) (GLM)
- METR Time Horizons: **75.3% #4** (METR, high) (GLM)
- BrowseComp: **65.8%** (OpenAI) / **65.8%** (Step 5)
- OSWorld-Verified: **47.3%** (OpenAI) / **47.3%** (Step 5)
- GDPval: **49.7%** (OpenAI via Epoch) (GLM)
- AA ITBench: **46.9%** (AA) / **46.9%** (Step 5)
- CWE-bench v1: **55.0%** (Collinear) (Step 5)
- CyberGym: **88.1%** (DeepSeek) / **no verified** (Step 5) — Step 5 notes no TB/τ³/GDPval/MCP-Atlas/Toolathlon/MazeBench/ALE/Claw-Eval
- AA Agentic Index: **30.1%** (AA) (GLM) / **no TB/τ³/GDPval/MCP-Atlas/Toolathlon/MazeBench/ALE/Claw-Eval** (Step 5)
- τ²-Bench Telecom: **84.8%** (taubench.com) / **84.8%** (AA) / **84.8%** (Step 5 / GLM)
- τ³-Banking: **11.1%** (AA) (GLM)
- METR Time Horizons: **75.3% #4** (METR, high) (GLM)
- Remote Labor Index: **2.5%** (GLM)
- Poker Agent (Vals): **1,131.8 #1** (GLM)
- Vending-Bench 2: **3,591.3** (GLM)
- Terminal-Bench 2.0 (Vals): **51.7%** (GLM)
- Terminal-Bench 2.1 (Vals): **74.5%** (Step 5) / **no verified** (GLM) — **no TB 2.1 figure in Step 5**
- **Terminal-Bench 4.0 / τ³-Banking / GDPval-AA / MCP-Atlas / Toolathlon / MazeBench / ALE / Claw-Eval: NO VERIFIED PUBLIC SCORE FOUND** (Step 5) — **two of three frontier refs entirely unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (AA) / **92.4%** (Qwen) / **91.4%** (GLM) / **91.7%** (Vals) — **four-source agreement, clears 90%+ frontier** (GLM / Step 5)
- AIME 2025: **100%** (OpenAI official) / **99.0%** (AA) — **essentially saturated** (GLM / Step 5)
- GPQA Diamond: **91.4%** (GLM) / **92.4%** (Qwen) / **90.3%** (AA) / **91.7%** (Vals) — **four-source agreement** (GLM)
- HLE: **27.8%** (Scale AI, #12) / **37.7%** (AA, xhigh) — **fails 40%+ ref by 2.3 pts** (GLM / Step 5)
- AA Intelligence Index v4.3.2: **30** / v4.3.2 BenchLeader: **60.8 ±3.4 #96/760** (GLM) / **30.4%** (Step 5) / **30 (est.)** (original)
- ARC-AGI-1: **94.5% #35** (Epoch) / **86.2%** (ARC Prize XHigh, added 2026-10-16) — **CONFLICT** (GLM / Step 5)
- ARC-AGI-2: **72.9% #48** (ARC Prize) / **52.9%** (OpenAI launch) — **CONFLICT, both cited** (GLM / Step 5)
- CritPt: **11.6%** (AA) / **11.6%** (Step 5) — weak
- FrontierMath v2: Tiers 1-3 **67.4%** / Tier 4: **31.7%** (Epoch) / **67.4% / 31.7%** (Step 5 / GLM)
- AIME 2025: **100%** (OpenAI) / **99.0%** (AA) — saturated (GLM / Step 5)
- AIME 2026: **98.3% #4** (high) / OTIS Mock AIME: **96.1%** / HMMT Feb 2026: **97.0% #3** / MathArena Apex: **13.5%** (GLM)
- AA-LCR: **82.7% #33** (AA, xhigh) / **82.7%** (Step 5 / GLM)
- CritPt: **11.6%** (AA) / **11.6%** (Step 5) — weak
- AA-Omniscience: non-hallucination **18.8%** at xhigh (severe hallucination at high effort) / index **−0.9**, accuracy **44.3%**, hallucination **81.2%** (AA) / **index −0.9 / hallucination 81.2%** (Step 5) — **near-zero index, 81.2% hallucination**
- MMLU-Pro (Vals): **86.2%** / **87.4%** (Step 5) / **86.2%** (GLM)
- MedQA (Vals): **94.1%** / **94.1%** (Step 5)
- LegalBench (Vals): **82.8%** (GLM)
- LiveBench Math: **93.2%** (GLM)
- SimpleQA Verified: **37.1% #45** (Epoch) (GLM)
- Kagi LLM Benchmark: **73.3% #18** (GLM)
- SciPredict: **20.6%** (GLM)
- AA-IFBench: **75.4%** (AA) / **75.4%** (Step 5)
- AA Intelligence Index v4.3.2: **30** (corroborates estimate) (GLM)
- AA Intelligence Index v5.0: **30.4%** (Step 5)
- FrontierMath v2: Tiers 1-3 **67.4%** / Tier 4: **31.7%** (Epoch) / **67.4% / 31.7%** (Step 5 / GLM)
- ARC-AGI-1: **86.17%** (ARC Prize verified) / **94.5%** (Epoch) — CONFLICT (GLM / Step 5)
- ARC-AGI-2: **52.9%** (OpenAI) / **72.9%** (ARC Prize) — CONFLICT (GLM / Step 5)
- **MRCR: no verified public score found** (Step 5 / GLM)

Coding:

- SWE-bench Verified: **80%** (OpenAI official) / **73.8%** (Epoch) / **72.8%** (swebench.com bash-only) / **80.0%** (GLM / Step 5) — clears 80%+ frontier ref
- SWE-bench Pro: **55.6%** (OpenAI) / **29.9%** (Scale AI SEAL) — **CONFLICT: harness difference** (GLM / Step 5)
- LiveCodeBench (Vals): **85.4% #31** (Vals) / **85.4%** (GLM) / **no verified public score found** (Step 5)
- SWE-bench (Vals): **75.8%** (GLM)
- Vibe Code Bench v1.1: **53.5%** (Vals) / **53.5%** (Step 5)
- Terminal-Bench 2.0/2.1: see above (GLM / Step 5)
- FrontierSWE: **73.0%** (llmboard) (GLM)
- WeirdML: **72.2% #30** (xhigh) (GLM)
- ALE-Bench: **1,293.5 #30** (GLM)
- AlgoTune: **2.0 #1** (medium) (GLM)
- AA-SciCode: **no verified public score found** (GLM / Step 5)
- DeepSWE: **no verified public score found** (GLM / Step 5)
- AA Coding Index: **no verified public score found** (Step 5) / **no verified** (GLM)
- LiveCodeBench: **85.4% #31** (Vals) / **no verified public score found** (Step 5) (GLM / Step 5)
- FrontierCode / AA Coding Index: **no verified public score found** (GLM / Step 5)
- SWE-bench Verified: **80.0%** (OpenAI) / **73.8%** (Epoch) / **72.8%** (bash-only) (GLM / Step 5)
- SWE-bench Pro: **55.6%** (OpenAI) / **29.9%** (Scale AI) — **CONFLICT** (GLM / Step 5)

Multimodal:

- Video-MME: **86.0% w/sub / 85.8% w/o** (Qwen) / **86.0% / 85.8%** (Step 5 / GLM) — **genuine video understanding**
- OmniDocBench 1.5: **85.7%** (Qwen) / **85.7%** (Step 5 / GLM)
- VideoMMMU: **85.9%** (Qwen) / **85.9%** (Step 5 / GLM)
- MLVU (M-Avg): **85.6%** (Qwen) / **85.6%** (Step 5 / GLM)
- RealWorldQA: **83.3%** (Qwen) / **83.3%** (Step 5 / GLM)
- MMMU: **86.7%** (Qwen) / **86.7%** (Step 5 / GLM)
- MathVision: **83.0%** (Qwen) / **83.0%** (Step 5 / GLM)
- DynaMath: **86.8%** (Qwen) / **86.8%** (Step 5 / GLM)
- CharXiv: **82.1%** (Qwen) / **82.1%** (Step 5 / GLM)
- We-Math: **79.0%** (Qwen) / **79.0%** (Step 5 / GLM)
- V*: **75.9%** (Qwen) / **75.9%** (Step 5 / GLM)
- CC-OCR: **70.3%** (Qwen) / **70.3%** (Step 5 / GLM)
- ERQA: **59.8%** (Qwen) / **59.8%** (Step 5 / GLM)
- AI2D_TEST: **92.2%** (Qwen) / **92.2%** (Step 5 / GLM)
- CountBench: **91.9%** (Qwen) / **91.9%** (Step 5 / GLM)
- MMMU-Pro (Vals): **86.7% #17** / **79.5%** (OpenAI) (GLM / Step 5)
- MMMU-Pro: **86.7%** (Qwen) / **79.5%** (OpenAI) (GLM / Step 5)
- MMMU: **86.7%** (Qwen) / **86.7%** (Step 5 / GLM)
- VPCT: **84.0% #2** (Epoch, xhigh) (GLM)
- VISTA: **46.6% #20** (Scale SEAL) (GLM)
- LMArena Vision: **1,268** (GLM)
- MortgageTax (Vals): **67.1%** (GLM)
- LMArena Coding: **1,515 #44** (GLM)
- WebDev: **1,465 #64** (GLM)
- LiveBench: **80.71%** (llmboard) (GLM)
- **AA-SciCode / DeepSWE / AA Coding Index / LiveCodeBench / FrontierCode: no verified public score found** (Step 5 / GLM)
- SWE-bench (Vals): **75.8%** (GLM)
- SWE-Pro: **29.9%** (Scale AI) (GLM)
- WeirdML: **72.2% #30** (xhigh) (GLM)
- ALE-Bench: **1,293.5 #30** (GLM)
- AlgoTune: **2.0 #1** (medium) (GLM)

Long context:

- AA-LCR: **82.7% #33** (AA, xhigh) / **82.7%** (Step 5 / GLM)
- LMArena Document: **1,425** (GLM)
- 400K window (models.dev authority; BenchLeader's 128K conflicts)
- **MRCR: no verified public score found** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 29 qualifying raters = **86.4 Overall** (Tool 85.2, Reasoning 90, Context 89.3, Multimodal 80.4, Coding 87.4). Queue: 86.4. Step 5 Preview: 74. GLM 5.3 Flash: 80. My original: 62.

- **Tool use: 72/100.** (was 55) τ²-Bench **84.8% #3**, Terminal-Bench **64.9% #9**, GDPval **49.7% #1**, MCP Atlas **67.6% #23**, BFCL **55.9% #14**, METR Time Horizons **75.3% #4**, BrowseComp **65.8%**, OSWorld-Verified **47.3%**, JobBench **34.3%**. **Capped by:** TB Hard **47.0%**, OSWorld **47.3%**, Remote Labor **2.5%**, **no TB 2.1/4.0, τ³-Banking, GDPval-AA (Elo), MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval**.
- **Reasoning: 84/100.** (was 60) GPQA Diamond **91.4–92.4%** (four sources, clears 90%+), AIME 2025 **100%/99.0%**, GPQA **91.4%** (GLM) / **90.3%** (AA), ARC-AGI-2 **72.9%** (ARC Prize) / **52.9%** (OpenAI) — **CONFLICT**, HLE **27.8%** (Scale) / **37.7%** (AA), FrontierMath Tiers 1-3 **67.4%**, Tier 4 **31.7%**, AA LCR **82.7%**, CritPt **11.6%**, ARC-AGI-2 **52.9–72.9%** (CONFLICT), AA Omniscience **−0.9 index / 81.2% hallucination**. **Capped by:** HLE **27.8–37.7%** (under 40% ref), CritPt **11.6%**, AA Intelligence Index **30.4%**, AA Omniscience **−0.9 / 81.2% hallucination**, no MRCR.
- **Context window: 85/100.** (was 55) 400K tokens (models.dev; BenchLeader's 128K conflicts) — top of 200K–500K tier (65-84). AA-LCR **82.7%** strong for tier. **Held at 85 (not 90) because half the 1M standard and no MRCR run exists.**
- **Multimodal: 82/100.** (was 70) **Text + image in; 19 benchmarks — broadest in series.** Video-MME **86.0%**, VideoMMMU **85.9%**, MLVU **85.6%**, OmniDocBench **85.7%**, CharXiv **82.1%**, AI2D **92.2%**, CountBench **91.9%**, MMMU-Pro **79.5–86.7%**, MMMU **86.7%**. **Capped by:** text-only output, no audio/video input, no PDF input listed. **Scored above +image-only band (60-70) due to breadth of measured visual suite.**
- **Coding: 83/100.** (was 70) SWE-bench Verified **80%** (OpenAI) / **73.8%** (Epoch) / **72.8%** (bash), LiveCodeBench **85.4% #31** (Vals), SWE-bench Pro **55.6%** (OpenAI) / **29.9%** (Scale AI) — **CONFLICT**, WeirdML **72.2%**, ALE-Bench **1,293.5 #30**, Vibe Code **53.5%**. **Capped by:** SWE-Pro **55.6%** (OpenAI) vs **29.9%** (Scale AI conflict), **no AA-SciCode/DeepSWE/AA Coding Index/LiveCodeBench/FrontierCode**, TB 3.0 missing.
- **Cost efficiency: 68/100.** (was 75) $1.75/$14 (≤272K) / $3.50/$28 (>272K). Blended AA **$1.87/M**. **Strictly dominated by successors:** GPT-6.1 Sol **$2/$10**, GPT-5.6 Sol **$4/$20 promo**, GPT-5.4 **$2.50/$15**. Batch/Flex 50%. Third-party **$0.19/$1.13** (UnoRouter). No free tier. Output speed 75 tok/s.
- **Overall Score: 81.2/100.** (was 62) Half-up mean of (72 + 84 + 85 + 82 + 83) / 5 = 406 / 5 = 81.2 → **81**. **Below average of 29 qualifying raters (86.4).** Best-fit: **Solid deprecated mid-tier reasoning model with broad visual suite (19 benchmarks, Video-MME 86%) and strong math (AIME 100%), but 400K context limits agentic use; HLE 27.8% fails 40% ref; AA-Omniscience −0.9 (81% hallucination); superseded by GPT-5.4/5.5/6.x at same/lower prices.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 74), GLM 5.3 Flash (2026-10-16, Overall 80) + official OpenAI sources (GPT-5.2 launch post, API changelog, pricing, BenchLeader data). **Average of 29 qualifying raters: 86.4 Overall.** Queue: 86.4. **Critical findings:** 400K context (half standard); AIME 100%; Video-MME 86% (19 benchmarks, broadest visual suite); HLE 27.8% (fails 40% ref); AA-Omniscience −0.9 (81% hallucination); SWE-Pro conflict (55.6% vs 29.9%); ARC-AGI-2 conflict (52.9% vs 72.9%); superseded by GPT-5.4/5.5/6.x.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
  - [BenchLM — GPT-5.2 (59.62/100, #55/1015, 46 rows)](https://benchlm.ai/models/gpt-5-2)
  - [Artificial Analysis — GPT-5.2](https://artificialanalysis.ai/models/gpt-5-2)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing.md?v=20261005c)
  - [BenchLeader — GPT-5.2](https://benchleader.ai/models/gpt-5.2)
  - [ARC Prize — GPT-5.2](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---