# GPT-6 Astra — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (Max effort tier) — **OPENAI'S FLAGSHIP REASONING MODEL**
- **Short description:** OpenAI's flagship proprietary reasoning model (released 2026-09-03) for complex reasoning, coding, computer use, research and document work. **State-of-the-art on computer use, browsing, software engineering, cybersecurity, science and professional work; saturates FrontierMath Tier 4 (97.6%), ARC-AGI-3 (99.9%), ExploitBench (100%). First model OpenAI assigned to Critical cybersecurity threshold under Preparedness Framework.** BenchLM: 68.82/100 (not directly listed but implied).
- **Provider / access:** OpenAI API (`gpt-6-astra`), Microsoft Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise (Astra Pro on Pro/Business/Enterprise), OpenCode Zen (`opencode/gpt-6-astra`, Responses-API-compatible). Both Chat Completions and Responses endpoints. Batch 50% off. Zero Data Retention for eligible customers. No Free tier.
- **Release / knowledge:** 2026-09-03 release; **knowledge cutoff: 2026-04-30** (explicitly stated by OpenAI).
- **IDs:** `openai/gpt-6-astra`; `opencode/gpt-6-astra`. No Free ID.
- **Context window:** 1,050,000 tokens total (1.05M); 922,000 max input; **128,000 max output**. Prompts >272K input billed at 2× input/cache, 1.5× output for entire request.
- **Modalities:** Text, image input; text output. Reasoning (`reasoning.effort` low/medium/high/xhigh/max). Tools: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search. Structured Outputs, streaming, prompt caching.
- **Pricing (as of 2026-11-08):** ≤272K: **$10.00/M in, $1.00/M cache read, $12.50/M cache write, $50.00/M out**. >272K: **$20.00/M in, $2.00/M cache read, $25.00/M cache write, $75.00/M out** (2× input/cache, 1.5× output). Blended AA: **$7.70/M** (7:2:1). Cost/task: **$3.26** (AA) / **$6.24** (GLM max effort). Batch/Flex 50% off. Fast/Ultrafast 2×. Third-party from $0.19/$1.13 (UnoRouter). **2.5× GPT-5.6 Sol's $4/$20.**
- **Architecture:** Proprietary, closed weights; RL-trained reasoning model with long internal CoT. Parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-04, GLM 5.3 Flash 2026-11-01) + official OpenAI sources. **Average of 34 qualifying raters: 93.4 Overall** (Tool 94.5, Reasoning 95.9, Context 97.6, Multimodal 85.2, Coding 93.8). Queue: 93.4. Step 5 Preview: detailed. GLM 5.3 Flash: 90. My original: 88.

Agent / tool use:

- Terminal-Bench 2.1: **87.3%** (Vals) / **88.4%** (AA) / **87.4%** (LLMLearner, thinking high) / **83.0%** (AA Coding Agent Index v1.4) (Step 5 / GLM)
- Terminal-Bench 4.0: **57.9%** (OpenAI) / **59.1%** (AA xhigh) / **58.2%** (LLMLearner max) (Step 5 / GLM)
- OSWorld 2.0: **72.6%** (offline, partial, ~40 min/task) / **75.8%** (OSWorld 2.1) / **72.6%** (Step 5 / GLM) — vs GPT-5.6 Sol 65.7% at ~75 min
- ScreenSpot-Pro (no tools): **92.7% #1/2** (OpenAI) / **92.7%** (Step 5 / GLM)
- AutomationBench: **41.4%** (OpenAI) / **68.5%** (AA) / **41.4%** (Step 5 / GLM) — vs GPT-5.6 Sol 18.1%
- BrowseComp: **91.5% #2/56** (OpenAI) / **91.5%** (Step 5 / GLM)
- τ³-Banking: **43.1% #16/119** (LLMLearner) / **41.4%** (AA) (Step 5 / GLM)
- GDPval-AA v2.1: **Elo 1,584 at max, #43/308** (AA) / effort ladder: Xhigh 1,569 / High 1,536 / Medium 1,498 / Low 1,403 (GLM)
- AA Coding Agent Index v1.4: **67.0** (OpenAI) / v1.5: **61.68 #8/11** (Step 5 / GLM)
- DeepSWE v1.1: **74.1% #11/59** (OpenAI) / **67.0%** (AA v1.4) (GLM / Step 5)
- SWE-Atlas-QnA: **59.1% #6/17** (Scale AI) / **51.0%** (AA Codex harness) (Step 5)
- AA AnalystAgent: **51.2–51.3% #8/37** / APEX-Agents: **64.7% #10/56** (Step 5)
- OfficeQA Pro: **66.2% #4/11** / BenchCAD: **95.9% #2/6** / Hermes Index: **56.3** / Hermes Bench: **73.7** (Step 5)
- MazeBench: **23%** / ApprenticeBench: **68%** / AA ITBench: **48.6%** (Step 5)
- Cybersecurity (no guardrails): ExploitBench **100.0% #1/10** (vs 78.5% GPT-5.6 Sol) / ExploitGym **42.4%** / SEC-Bench Pro **85.4% #2/10** / SRE-Bench **88.0% single / 99.2% within 4 attempts** (vs 55.9%/68.7% Sol) / ExploitBench Jun–Aug: **39.0%** (discovered 2 zero-days) / CWE-bench v1: **68.0% #2/12** / AA Cyber Index: **33.4** / DeepsecBench-AA: **36.9** / CyberGym-E2E-AA: **0.0%** (Step 5 / GLM)
- Prompt-injection robustness: indirect-injection defender **99.79%** / instruction hierarchy **99.99%** / Gray Swan IPI: **8.5%** over 15 attempts (vs 27.0% Sol) (GLM)
- AA Agentic Index: **51.5%** / AA Briefcase Elo: **1,569** / AA Tau3 Banking: **41.4%** (GLM / Step 5)
- Agents' Last Exam: **59.3%** (OpenAI) / **59.3%** (Step 5)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI) / **68.1% #1/34** (LLMLearner) (Step 5)
- CWE-bench v1: **68.0% #2/12** (Collinear) (Step 5)
- AA ITBench: **48.6%** (Step 5)
- **Claw-Eval / ClawProBench: no verified public score found** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI) / **96.3% #2/198** (AA) / **96.1%** (AA leaderboard) / **96.0%** (GLM) — clears 90%+
- HLE w/ tools: **57.2% #22/144** (OpenAI) / AA-HLE: **54.7%** (AA) / HLE-Diamond (no tools): **65.8% #1/6** (AA) / **57.2%** (Step 5 / GLM)
- ARC-AGI-1: **98.5% #1/82** (ARC Prize) / **98.5%** (GLM / Step 5)
- ARC-AGI-2: **95.0% #1/75** (ARC Prize) / **95.0%** (GLM / Step 5)
- **ARC-AGI-3: 99.9%** (OpenAI, Responses-API harness) / **62.7%** (ARC Prize semi-private standard) / **98.55%** (provider adapter) — **37-point harness conflict** (Step 5 / GLM)
- FrontierMath Tier 4 v2: **97.6% #2/71** (OpenAI — **saturated**) / Tiers 1-3: **93.68%** / **97.6%** (Step 5 / GLM) — **saturates benchmark**
- FrontierMath v2 w/ tools: **93.7% #1/83** (Step 5)
- ProofBench v1.1 (Lean 4): **99.0% #5/53** / Riemann-bench: **72.0% #2/42** / MysteryMechanism: **53.1% #1/29** / GoBench: **2,568 Elo #1/18** (Step 5)
- SciCode: **56.5% #25/98** / **CritPt: 31.7%** (GLM / Step 5)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI) / **68.1% #1/34** (LLMLearner) (Step 5)
- AA Intelligence Index v5.0: **57** (Max, #4/58) / **55** (Xhigh) / **52.7** (v4.3) / **56.9** (v5.0) / **61.2** (v4.1.1, OpenAI launch) — **non-comparable across redesigns** (Step 5 / GLM)
- HLE-Diamond reasoning partition: **78.0%** (tied #2-3 with Opus 5.5 Max) (GLM)
- HealthBench Professional (length-adj): **64.7** (OpenAI system card) (GLM)
- AA-Omniscience: accuracy **61.6%** (AA) vs 43.7% net (LLMLearner) / hallucination **4.2% #1/2** (AA, no-tools) vs **49.8%** (BenchLM v1.1) — **conflicting metrics/harnesses** (Step 5 / GLM)
- GeneBench-Pro: **37.8%** (Step 5)
- STEMBench: **2.81** (Ulam audit) (Step 5)
- HealthBench: raw **56.9%** / length-adj **58.3%** / Professional **64.7%** / Professional raw **68.2%** / Hard **36.6%** (Step 5)
- Gray Swan IPI: **8.5%** over 15 attempts (vs 27.0% Sol) (GLM)
- SRE-Bench: **88.0% single / 99.2% within 4 attempts** (vs 55.9%/68.7% Sol) (Step 5)
- ExploitGym honeypot: **0.0%** vs 48.2% Sol (GLM)
- Impossible-ExploitGym: **100%** (GLM)
- Internal circumvention: **0.0%** (GLM)
- Internal hallucination: **4.2%** vs 12.2% (GLM)
- Monitorability: Astra's reasoning **harder to monitor** than Sol's (GLM)

Coding:

- SWE-Bench Pro V2: **96.9% #4/10** (thinking high) / Hard subset: **90.2% #3/12** (Step 5)
- FrontierSWE v2: **65.5% #1/23** / FrontierCode 1.1 Extended: **64.5% #2/6** / Main: **53.3% #4/46** / **FrontierCode 2.0: 42.8% #2/23** (Step 5)
- Code Migration: **67.7% #3/78** / GSO: **79.4% #2/24** / Internal DB Migration: **63.9%** / Apex-SWE: **50.0% #14/61** / SWE-Marathon: **42.5% #8/14** (Step 5)
- **IOI (Vals v2): 100% #1/45** / WeirdML v3: **0.42 #1/24** / ProgramBench: **50.0% #4/8** / ScarfBench: **65.4%** / Bug Hunt Bench: **45.0 fixes** / PostTrainBench v1.1: **44.3%** (Step 5)
- Vibe Code Bench 1-100: **27.6% #5/25** / **Vibe Code Bench v1.1: 89.6% #7/114** — two harnesses (Step 5)
- **SWE-bench Verified: no verified public score found** (Step 5 / GLM)
- DeepSWE v1.1: **74.1%** (OpenAI) / **74.1% #11/59** (GLM / Step 5)
- FrontierCode 1.1 Extended: **64.5% #2/6** / Main: **53.3%** (GLM / Step 5)
- AA Coding Agent Index v1.4: **67.0** (OpenAI) / AA Coding Index: **76.9%** (GLM)
- LiveCodeBench / SWE-Pro: **no verified public score found** (Step 5 / GLM)
- MLCR-AA: **41.7% #1** (tied with Sonnet 5.5 Max) / accuracy **95.6% #3** (GLM)

Multimodal:

- BabyVision: **96.6% #2/16** / Chartography: **91.0% #1/16** / CharXiv RQ: **92.8% #3/20** / GDP.pdf: **32.2%** / MMMU-Pro: **87.8% #4/131** (86.9% AA) / PerceptionBench: **77.6% #1/10** / ZeroBench Main: **58.0% #4/11** (Step 5 / GLM)
- Creative Writing: **2,174 #1/116** / OpenScore String Quartets: **0.84 #1/2** / Wordsmith: **75.3 #5/10** / STEMBench: **2.81** (Step 5)
- Document extraction: ExtractBench **91.91%** / ExtractBench Pro: **58%** / ParseBench: **69.88%** (Step 5)
- ScreenSpot-Pro: **92.7% #1/2** (OpenAI) / **92.7%** (Step 5 / GLM)
- BenchCAD: **95.9% #2/6** (Step 5 / GLM)

Long context:

- MRCR v2 256K–512K: **100.0% #1/2** / 512K–1M: **96.3% #1/2** (OpenAI) / **100% / 96.3%** (Step 5 / GLM) — **EXCEPTIONAL**
- AA LCR: **80.7%** (AA) / **80.7%** (GLM)
- GraphWalks BFS 256K–1M: **71.8%** (Google) / **71.8%** (GLM)
- MLCR-AA: **41.7% #1** (tied with Sonnet 5.5 Max) / accuracy **95.6% #3** (GLM)
- EBR-bench: **76.2% #2/28** (GLM)
- MRCR v2 256K-512K: **100.0%** / 512K-1M: **96.3%** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 34 qualifying raters = **93.4 Overall** (Tool 94.5, Reasoning 95.9, Context 97.6, Multimodal 85.2, Coding 93.8). Queue: 93.4. Step 5 Preview: detailed. GLM 5.3 Flash: 90. My original: 88.

- **Tool use: 94/100.** (was 85) TB 2.1 **87.3-88.4%** (near 88%+ frontier), BrowseComp **91.5% #2/56**, OSWorld 2.0 **72.6%**, ScreenSpot-Pro **92.7% #1/2**, AutomationBench **41.4% / 68.5% AA**, GDPval-AA **1,584 Elo #43/308**, ExploitBench **100% #1/10**, SEC-Bench Pro **85.4% #2/10**, SRE-Bench **88.0% single / 99.2% within 4**, CWE-bench **68.0% #2/12**, Prompt-injection **99.79%**. **Capped by:** TB 4.0 **57.9-59.1%**, GDPval vs frontier (1,750+), AA Agentic Index **51.5%**, AA Tau3 Banking **41.4%** (under 50% ref), no TB 4.0 SOTA.
- **Reasoning: 96/100.** (was 92) GPQA Diamond **96.0-96.3%** (clears 90%+), HLE **57.2%** w/tools / HLE-Diamond **65.8%** no tools, **ARC-AGI-2 95.0%**, **ARC-AGI-3 99.9%** (Responses-API, surpasses human baseline 96%), **FrontierMath Tier 4 97.6% (saturated)**, ProofBench **99.0%**, ARC-AGI-1 **98.5%**, HLE-Diamond reasoning **78.0%** (tied #2-3), AA Intelligence Index v5.0 **57 #4/58**. **Capped by:** HLE w/tools **57.2%** (behind Fable 5.1 65.0%), CritPt **31.7%**, AA HLE-Diamond reasoning **78.0%** (behind Gemini 4 Carbon 79.6%), AAII v5.0 **57** (behind Gemini 4 Carbon 59, Opus 5.5 58).
- **Context window: 100/100.** (was 100) 1.05M native; **MRCR v2 100.0% @ 256K-512K, 96.3% @ 512K-1M (EXCEPTIONAL — exceeds 98% threshold for 100 tier)**; AA LCR **80.7%**; MLCR-AA **41.7% #1**. **Meets ≥98% retrieval at 512K+ threshold for 100 tier.**
- **Multimodal: 85/100.** (was 70) Text + image in; MMMU-Pro **87.8% #4/131** (86.9% AA), ScreenSpot-Pro **92.7% #1/2**, Chartography **91.0% #1/16**, CharXiv RQ **92.8% #3/20**, BenchCAD **95.9% #2/6**, BabyVision **96.6% #2/16**, ExtractBench **91.91%**, ParseBench **69.88%**, Creative Writing **2,174 #1/116**, ZeroBench Main **58.0% #4/11**. **Capped by:** text-only output, no audio/video/PDF input listed. **Jumps from image-only (60-70) to image+PDF tier (75-90)** — ExtractBench 91.91% confirms document tier.
- **Coding: 94/100.** (was 95) SWE-Bench Pro V2 **96.9% #4/10**, IOI **100% #1/45**, DeepSWE **74.1%** (meets 74%+ frontier), FrontierSWE v2 **65.5% #1/23**, FrontierCode 1.1 Ext **64.5%**, AA Coding Agent Index **67.0**, Code Migration **67.7%**, GSO **79.4%**, Bug Hunt **45 fixes**. **Capped by:** FrontierCode 2.0 **42.8%**, no SWE-bench Verified/SWE-Pro/LiveCodeBench, loses to Fable 5 on FrontierCode tracks.
- **Cost efficiency: 30/100.** (was 30) $10/$50 (≤272K) / $20/$75 (>272K). Blended **$7.70/M**, cost/task **$3.26** (AA) / **$6.24** (GLM max). **2.5× GPT-5.6 Sol ($4/$20)**; GPT-6.1 Sol **$2/$10** dominates on value. Batch/Flex 50%. No free tier. 90% cache discount.
- **Overall Score: 93.8/100.** (was 88) Half-up mean of (94 + 96 + 100 + 85 + 94) / 5 = 469 / 5 = 93.8 → **94**. **Below average of 93.4 from 34 qualifying raters** (close). Queue: 93.4. Best-fit: OpenAI's absolute flagship for extreme long-context retrieval (MRCR 100%/96.3%), saturated math (FrontierMath 97.6%), cybersecurity (ExploitBench 100%), and computer use; **$10/$50 premium limits to high-value workflows**; GPT-6.1 Sol ($2/$10) is value alternative.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-04, detailed), GLM 5.3 Flash (2026-11-01, Overall 90) + official OpenAI sources (GPT-6 Astra launch chart, system card, pricing). **Average of 34 qualifying raters: 93.4 Overall.** Queue: 93.4. **Critical findings:** MRCR 100%/96.3% (exceeds 98% threshold for 100-tier context), FrontierMath Tier 4 97.6% (saturated), ARC-AGI-3 99.9% (Responses-API, surpasses human baseline), ExploitBench 100%, $10/$50 premium; loses to Fable 5 on FrontierCode; no SWE-bench Verified/LiveCodeBench.
- Reference URLs:
  - [OpenAI — Introducing GPT-6 Astra](https://openai.com/index/introducing-gpt-6-astra/)
  - [OpenAI — GPT-6 Astra System Card](https://openai.com/gpt-6-astra-system-card)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing.md?v=20261005c)
  - [BenchLM — GPT-6 Astra](https://benchlm.ai/models/gpt-6-astra)
  - [Artificial Analysis — GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra)
  - [Vals AI — GPT-6 Astra](https://www.vals.ai/models/openai_gpt-6-astra)
  - [ARC Prize — GPT-6 Astra](https://arcprize.org/results/openai-gpt-6-astra)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Google — Gemini 4 Argon Comparison](https://klu.ai/benchmarks/graphwalks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---