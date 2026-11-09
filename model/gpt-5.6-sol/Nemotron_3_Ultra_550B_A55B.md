# GPT-5.6 Sol — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (Max effort tier) — **PRIOR-GENERATION (superseded by GPT-6 Sol, GPT-6 Astra, GPT-6.1 Sol)**
- **Short description:** OpenAI's 5.6-generation reasoning flagship — strongest **tool-use** model in batch: TB 2.1 **91.9%**, BrowseComp **92.2%**, CyberGym **84.5%**, **CritPt 32.3% (highest physics-reasoning figure in research series)**. BenchLM: 74.83/100, #12/1009. **Now prior-generation: GPT-6 Sol/Astra (Sep 2026), GPT-6.1 Sol (Oct 2026) supersede it.** Promotional pricing through Nov 21, 2026.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, Chat Completions + Responses + Batch), Azure OpenAI, AWS Bedrock, **OpenCode Zen (`opencode/gpt-5-6-sol`) at $4/$20** (promo). ~8 API providers on AA. No Free ID on Zen.
- **Release / knowledge:** 2026-07-09 release (limited preview late June 2026); **knowledge cutoff: 2026-02-16** (verified on OpenAI developer model page).
- **IDs:** `openai/gpt-5.6-sol` (`gpt-5.6` alias routes to Sol); siblings `gpt-5.6-terra`, `gpt-5.6-luna`; successors `gpt-6-sol`, `gpt-6-astra`, `gpt-6.1-sol`. No Free ID on Zen.
- **Context window:** **1,050,000 tokens** total; **922,000 max input**; **128,000 max output** (verified on developers.openai.com). **>272K input tokens: 2× input / 1.5× output for full request.**
- **Modalities:** Text + image in (documents/PDF via file inputs); text out. **No audio, no video in/out.** Reasoning (`reasoning.effort`: none/low/medium/high/xhigh/max + `ultra` 4-agent coordination mode on ChatGPT Work/Codex). Tool calls: function calling, structured outputs, hosted tools (web_search, file_search, image_gen, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search).
- **Pricing (as of 2026-11-08):** **$4.00 in / $0.40 cached read / $20.00 out per 1M** (promo through Nov 21, 2026; list $5/$30). Cache writes $5.00/M (1.25×). **>272K: $8 in / $30 out** (full request). Batch/Flex 50% off. Fast 2×. No free tier. Blended AA ~$3.08/M. Cost/task $1.99 (AA).
- **Architecture:** Proprietary, closed weights; parameter count/MoE undisclosed. Reasoning-effort-scaled single model; `ultra` runs four coordinated agents in parallel.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official OpenAI sources. **Average of 33 qualifying raters: 92.1 Overall** (Tool 92.7, Reasoning 94, Context 95.8, Multimodal 85.4, Coding 92.6). Queue: 92.1. Step 5 Preview: 87. GLM 5.3 Flash: 87. My original: 84. **PRIOR-GEN: superseded by GPT-6 family.**

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI) / **85.8%** (Vals) — **6.1pt harness spread; vendor clears 88%+ frontier**
- Terminal-Bench 2.1 `ultra` 4-agent: **88.8%** / **91.9%** (GLM)
- BrowseComp: **92.2%** (OpenAI) / **90.4%** / **92.2% ultra** (GLM) — **strongest browsing in batch**
- CyberGym: **84.5%** (OpenAI); ExploitGym: **33.7%**; Toolathlon: **58%**
- GDPval-AA v2: **1,735 Elo** (OpenAI) / **55.4% normalized** (AA) / **1,747.8 Elo** (GLM, launch SOTA #2 behind Fable 5 1,759.6) / **current AA board: 1,588 Elo** #25 (max)
- τ²-Bench Telecom: **85.1%** (AA) / **84.8%** (GLM)
- AA ITBench: **56.2%**; Terminal-Bench Hard: **65.9%**; OSWorld 2.0: **62.6%**
- LifeVal: **80.0%**; AA Agentic Index: **50.5%**; AA-AnalystAgent: **47.5%**; AA EnterpriseOps-Gym: **42.9%**
- Terminal-Bench 3.0: **34.6%**; MazeBench: **13%**; ApprenticeBench: **26%**
- AutomationBench: **18.1%** (OpenAI harness) (GLM)
- CTF: **96.7%**; SEC-Bench Pro: **71.2%** / **74.3% ultra** (GLM)
- Agents' Last Exam: **52.7%** / **53.6%** (GLM) — launch SOTA, eclipses Fable 5's 40.5%
- **Claw-Eval / τ³-Banking / MCP-Atlas: no verified public score found** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI) / **94.1%** (AA) / **95.2%** (Vals) — **clears 90%+ on all three harnesses**
- HLE: **49.5%** (AA) / **54.5%** HLE-Verified (GLM) / **47.3%** (AA, xhigh) — clears 40%+ ref
- ARC-AGI-1: **96.5%** (semi-private) / **96.5%** (GLM)
- ARC-AGI-2: **92.5%** (semi-private) / **92.5%** (GLM) — rank #6, behind only Opus 5.5 XHigh and GPT-6 Astra
- ARC-AGI-3: **7.8%** (semi-private) / **7.78%** (GLM) / **13.33% public** (ARC Prize verified — **first model to win an ARC-AGI-3 public game**, ft09 at 87%)
- FrontierMath v2: **89.0%** Tiers 1-3 / **83.0%** Tier 4 (OpenAI) / **89%/83%** (GLM) — Tier 4 behind Fable 5's 87.8%
- AA Intelligence Index: **58.9** (OpenAI) / **59.9** (Fable 5) / **AA v4.1: max ≈59** #2 behind Fable 5 at ~1/3 cost / **AA v5.0: N/A (model deprecated on AA after GPT-6 launch)** — **unexplained vendor/AA gap: 58.9 vs 39-42**
- AA-LCR: **84.0%** (AA) / **82.3%** (GLM, xhigh)
- CritPt: **32.3%** (AA) — **highest physics-reasoning figure in research series** (Step 5) / **no verified public score found** (GLM)
- AA-IFBench: **72.7%** (AA) / **69.2-71.0%** (GLM)
- MMMU-Pro: **83.0%** no tools / **84.6%** with Python / **83.4%** (AA)
- MMLU-Pro (Vals): **89.1%**; LABBench2: **82.1%**
- HealthBench Professional: **60.5%**; HealthBench Hard: **33.1%**; GeneBench-Pro: **28.7%**
- AA-Omniscience: **index 22.0, accuracy 59.4%, hallucination rate 92.2%** — **worst hallucination figure in research series** (Step 5) / **minor accuracy uplift over GPT-5.5 with higher hallucination** (GLM)
- ExtractBench: **93.77%**; ParseBench: **74.46%** (Step 5)
- Gray Swan IPI (15 attempts): **27.0%** — **by far weakest prompt-injection resistance in series** (next worst: Gemini 3.8 Flash 5.5%, GPT-6 Astra 8.5%) (Step 5)

Coding:

- SWE-bench Verified: **96.20%** (Vals, Mini-SWE-agent, rank #3 as of 2026-09-01 behind Opus 5 97.0%, DeepSeek V4 Pro 96.4%; $1.15/test) (GLM)
- SWE-bench (Vals): **96.2%** (Step 5)
- SWE-bench Pro: **64.6%** (OpenAI) — **~16pts behind Mythos 5 (80.3%) / Fable 5 (80%)** (GLM)
- Terminal-Bench 2.1: **91.9%** (OpenAI) / **88.8% / 91.9% ultra** (GLM) — **launch SOTA**
- DeepSWE v1.1: **72.7%** (OpenAI) — **launch SOTA, ahead of Fable 5's 69.7%** (GLM)
- AA Coding Index: **77.4%** (AA) / **80 max / 76.3 med / 77.2 high** (GLM) — **clears 70%+ frontier**
- AA Coding Agent Index v1.1: **80** (max, Codex harness) — **SOTA at launch, 2.8 above Fable 5** (GLM)
- LiveCodeBench: **82.6%** (Vals) (Step 5) / **no verified public score found** (GLM)
- VulcanBench v3: **87.0%**; VulcanBench CII v1: **86.5%** (Step 5)
- FrontierCode 1.1 Extended: **60.6%**; FrontierCode 2.0: **27.6%**; FrontierSWE v2: **32.2%**
- CursorBench 3.2: **67.2%**; CursorBench 4.0: **41.7%**; PostTrainBench v1.1: **36.2%**
- Bug Hunt Bench: **42.0 fixes** (Step 5)
- AA-SciCode: **57.1%** (AA) — **clears 55%+ frontier** / **no verified** (GLM)
- **SWE-bench Verified: no verified public score found** (Step 5) / **96.20% (Vals)** (GLM)

Multimodal:

- MMMU-Pro: **83.0%** no tools / **84.6%** with tools / **83.4%** (AA)
- GDP.pdf: **30.7%** (OpenAI) / **30.7%** (GLM)
- ExtractBench: **93.77%** (Step 5); ParseBench: **74.46%** (Step 5)
- **Text + image in (PDF via file inputs); text out; no audio, no video** — image-in only band (60-70)

Long context:

- MRCR v2 8-needle: **91.5%** @256K–512K; **73.8%** @512K–1M (OpenAI launch tables) (GLM)
- GraphWalks BFS: **90.7% f1** @256K; **77.1% f1** @1M (OpenAI launch tables) (GLM)
- AA-LCR: **84.0%** (AA) / **82.3%** (GLM, xhigh)
- **RULER: no verified public score found** (GLM)
- **>272K surcharge: 2× input / 1.5× output** makes upper window economically impractical (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 33 qualifying raters = **92.1 Overall** (Tool 92.7, Reasoning 94, Context 95.8, Multimodal 85.4, Coding 92.6). Queue: 92.1. Step 5 Preview: 87. GLM 5.3 Flash: 87. My original: 84. **PRIOR-GEN: superseded by GPT-6 Sol/Astra/6.1 Sol.**

- **Tool use: 90/100.** (was 82) TB 2.1 **91.9%** (OpenAI) / **85.8%** (Vals) (clears 88%+ frontier), BrowseComp **92.2%** (strongest in batch), GDPval **1,747.8 Elo** (launch SOTA #2), τ²-Telecom **84.8%**, CTF **96.7%**, OSWorld 2.0 **62.6%** (launch SOTA), LifeVal **80.0%**, AA Agentic Index **50.5%**. **Capped by:** GDPval-AA current board **1,588 Elo** #25 (under 1,750+ frontier), τ³-Banking **44.3%** (under 50% ref), TB 3.0 **34.6%**, MazeBench **13%**, AutomationBench **18.1%**, Toolathlon **58%** (behind Mythos 5's 61.7%), **no Claw-Eval/τ³/MCP-Atlas**.
- **Reasoning: 91/100.** (was 85) GPQA Diamond **94.6/95.2%** (three harnesses, clears 90%+), HLE **47.3-54.5%**, ARC-AGI-2 **92.5%** (rank #6), ARC-AGI-3 **7.78%** (first public-game win), FrontierMath **89/83%**, AA Intelligence Index **58.9** (launch #2 behind Fable 5), AA-LCR **84.0%**, CritPt **32.3%** (series best). **Capped by:** ARC-AGI-3 **7.8%**, **hallucination 92.2% (worst in series)**, AA Intelligence Index vendor/AA gap (58.9 vs 39-42), AA v5.0 N/A (deprecated), FrontierMath T4 **83%** (trails Fable 5 87.8%), **no MRCR figure published**.
- **Context window: 95/100.** (was 95) **1.05M native (922K max input / 128K max output)**; MRCR **91.5% @256-512K / 73.8% @512K-1M**; GraphWalks **77.1% f1 @1M**; AA-LCR **84.0%**. **Held at 95 (not 97+) due to MRCR 73.8% @512K-1M (below ≥98% threshold) and >272K surcharge doubling input cost.**
- **Multimodal: 70/100.** (was 70) Text + image in (PDF via file inputs); MMMU-Pro **84.6%** w/tools, ExtractBench **93.77%**, ParseBench **74.46%**. **Capped by:** no video/audio input, text-only output, no native image gen (hosted tool only) — methodology: +image in = 60-70 band ceiling.
- **Coding: 91/100.** (was 90) SWE-bench Verified **96.20%** (Vals, #3), TB 2.1 **91.9%/88.8%** (launch SOTA), DeepSWE **72.7%** (launch SOTA), AA Coding Index **77.4%/80**, AA-SciCode **57.1%**, VulcanBench **87.0%/86.5%**. **Capped by:** SWE-bench Pro **64.6%** (~16pts behind Mythos 5/Fable 5), DeepSWE **72.7%** (3pts under 74% ref), FrontierCode 2.0 **27.6%**, FrontierSWE v2 **32.2%**, **no verified LiveCodeBench**.
- **Cost efficiency: 65/100.** (was 65) **$4/$20 promo (through Nov 21, 2026); list $5/$30**; >272K: $8/$30. Blended AA **~$3.08/M**. **~1/3 cost of Fable 5 (AA)**; $1.15/test SWE-V. **Capped by:** ~2× market median ($2/$10), >272K surcharge, sunset risk (GPT-6 family undercuts). **No free tier.**
- **Overall Score: 87/100.** (was 84) Half-up mean of (90 + 91 + 95 + 70 + 91) / 5 = 437 / 5 = 87.4 → **87**. **Matches Step 5 Preview (87), GLM 5.3 Flash (87), close to queue (92.1) and average of 33 qualifying raters (92.1).** Best-fit: **Excellent on-sale flagship for agentic/terminal-heavy/long-context work at promo pricing** — but prior-gen, so new projects default to GPT-6-class successors; **two hard cautions:** hallucination **92.2% (worst in series)**, Gray Swan IPI **27.0% (3x next-weakest)** — least suitable for untrusted input workloads.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 87), GLM 5.3 Flash (2026-11-02, Overall 87) + official OpenAI sources (GPT-5.6 launch post, system card, model docs, pricing). **Average of 33 qualifying raters: 92.1 Overall.** Queue: 92.1. **Critical findings:** Prior-gen (superseded by GPT-6 Sol/Astra/6.1 Sol); TB 2.1 91.9% / BrowseComp 92.2% (strongest tool-use in batch); CritPt 32.3% (series best physics reasoning); SWE-V 96.2% (#3); Hallucination 92.2% (worst in series); Gray Swan IPI 27.0% (3x next-weakest); MRCR 73.8% @512K-1M (below ≥98%); AA v5.0 N/A (deprecated); promo pricing through Nov 21, 2026.
- Reference URLs:
  - [OpenAI — GPT-5.6 launch post and benchmark chart](https://openai.com/index/gpt-5-6/)
  - [OpenAI — GPT-5.6 system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf)
  - [OpenAI model docs — GPT-5.6 Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [BenchLM — GPT-5.6 Sol benchmark scores (77 rows, 74.83/100, #12/1009)](https://benchlm.ai/models/gpt-5-6-sol)
  - [Artificial Analysis — GPT-5.6 benchmarks across Intelligence, Speed and Cost](https://artificialanalysis.ai/articles/gpt-5-6-has-landed)
  - [Artificial Analysis — GPT-5.6 Sol (Max) model page](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [Vals AI — SWE-bench Verified leaderboard](https://www.vals.ai/benchmarks/swebench)
  - [ARC Prize — GPT-5.6 verified results](https://arcprize.org/results/openai-gpt-5-6)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---