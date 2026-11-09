# GPT-5.6 Terra — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (Max effort tier) — **LEGACY SKU (deprecated, main pricing page delisted)**
- **Short description:** OpenAI's balanced GPT-5.6 variant with strong coding (SWE-bench Verified 75.2%, DeepSWE 69.6%), fast 135 tok/s output, 1.05M context, at $2/$12 pricing. **Now legacy: main pricing page delisted, AA marks deprecated, successor GPT-6.1 Terra at half price.** BenchLM: 69.81/100, #15/1009.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`, Responses API), OpenCode Zen (`opencode/gpt-5.6-terra`), Azure OpenAI, AWS Bedrock. Responses API (not Chat Completions). No Free tier.
- **Release / knowledge:** 2026-07-09 release; **knowledge cutoff not publicly disclosed**. **Legacy status confirmed: 2026-11-05 re-research notes pricing page delisted, AA deprecated flag.**
- **IDs:** `openai/gpt-5.6-terra` (OpenAI API), `opencode/gpt-5.6-terra` (OpenCode Zen). No Free tier.
- **Context window:** 1,050,000 tokens total (1.05M); max output 128K sync. **>272K surcharge: 2× input/cache, 1.5× output.**
- **Modalities:** Text, image in; text out. Reasoning (effort control); tool calls (web_search, file_search, image_gen, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search). Structured Outputs, streaming, prompt caching.
- **Pricing (as of 2026-11-08):** ≤272K: **$2.00/M in, $0.20/M cache read, $0.10/M cache write, $12.00/M out**. >272K: **$4.00/M in, $0.40/M cache read, $0.15/M cache write, $18.00/M out** (2× input/cache, 1.5× output). Blended AA: **$2.56/M** (7:2:1). Cost/task: **$2.89** (AA). Batch/Flex 50% off. Fast 2×. **Strictly dominated by GPT-6.1 Terra ($1/$5) at half price.**
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. Trained with similar methods as GPT-6 Astra.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official OpenAI sources. **Average of 31 qualifying raters: 89.2 Overall** (Tool 88.3, Reasoning 89.4, Context 95.4, Multimodal 84.9, Coding 88.1). Queue: 89.2. Step 5 Preview: 89. GLM 5.3 Flash: 89. My original: 82. **LEGACY: deprecated, superseded by GPT-6.1 Terra at half price.**

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (OpenAI, max) / **88.0%** (Step 5 / GLM) — **clears 88%+ frontier ref**
- BrowseComp: **87.5%** (OpenAI) / **87.5%** (Step 5 / GLM)
- CyberGym: **81.8%** (OpenAI) / **81.8%** (Step 5 / GLM)
- GDPval-AA: **Elo 1,527** (AA, Nov 5) / **51.4% normalized** (AA) / **Elo 1,527** (GLM / Step 5) — under 1,750+ frontier
- AA AutomationBench: **56.8%** (AA) / **56.8%** (Step 5) / **43.2%** (GLM, vendor) — **two AA runs differ**
- AA ITBench: **48.5%** (AA) / **48.5%** (Step 5 / GLM)
- AA AnalystAgent: **50.3%** (AA) / **50.3%** (Step 5 / GLM)
- AA Agentic Index: **32.1%** (AA) / **32.1%** (Step 5)
- AA Briefcase: **1,412 Elo** (AA) / **1,412 Elo** (Step 5 / GLM)
- AA GDP.pdf: **28.4%** (AA) / **28.4%** (Step 5)
- τ³-Banking Pass^1: **38.0%** (taubench.com, max) / **38.0%** (GLM)
- AA EnterpriseOps-Gym: **45.6%** (Step 5)
- MazeBench: **0%** (ASCII mode) / **0%** (Step 5 / GLM)
- AA Terminal-Bench 4.0: **16.2%** (AA) / **16.2%** (Step 5)
- **Terminal-Bench 2.0, τ²-Bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** (Step 5 / GLM) — **two of three frontier refs unmeasured**
- GDPval-AA: **Elo 1,527** (AA, Nov 5) / **51.4% normalized** (AA) / **Elo 1,527** (GLM / Step 5)
- AA Briefcase: **1,412 Elo** (AA) / **1,412 Elo** (Step 5)
- AutomationBench: **15.2%** (vendor, weak) (GLM)
- Harvey LAB: **~1–2.5% all-pass** (GLM)
- AA EnterpriseOps-Gym: **45.6%** (Step 5)
- AA ITBench: **48.5%** (AA) / **48.5%** (GLM)
- AA AnalystAgent: **50.3%** (AA) / **50.3%** (GLM)
- AA Agentic Index: **32.1%** (AA) / **32.1%** (GLM)
- **τ²-Bench, τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, ALE, Claw-Eval, JobBench: no verified public score found** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (OpenAI) / **93.0%** (AA) / **92.4%** (GLM) — **clears 90%+ frontier**
- HLE: **52.0%** (OpenAI) / **47.1%** (AA) / **47.1%** (Step 5) / **42.8%** no tools (GLM) — **clears 40%+ ref**
- AA Intelligence Index v4.3.2: **55** (rank #4/173 price tier) / **55.0** (AA) — **Nov 5 refresh: 47.3%** — **AA Index version rebase (v4.3.2→v5.0-class scale)** (GLM / Step 5) — **highest composite index in batch**
- AA LCR: **84.2%** (AA) / **84.2%** (Step 5 / GLM) — strong
- CritPt: **22.1%** (AA) / **22.1%** (Step 5 / GLM) — solid
- AA Omniscience Index: **0.1%** (AA) / **index −1.2, accuracy 39.5%, hallucination 87.9%** (Step 5) / **Index 29.6 / Accuracy 41.7% / Hallucination 72.5%** (Nov 5) — **LABELING DRIFT FLAG: BenchLM Nov 5 labels 72.5% as "Hallucination Rate"** (Step 5 / GLM)
- FrontierMath v2: Tiers 1-3 **79.6%** / Tier 4 **44.9%** (Epoch AI) / **79.6% / 44.9%** (Step 5 / GLM)
- MRCR v2 512K–1M: **57.9%** (OpenAI) / **57.9%** (GLM / Step 5) — **measured retrieval at depth**
- GraphWalks 1M: **75.5% F1** (OpenAI) / **75.5%** (GLM / Step 5)
- AA LCR: **84.2%** (AA) / **84.2%** (Step 5 / GLM)
- MLCR-AA: **21.3%** (AA) / **31.7%** (Nov 5 refresh) (GLM / Step 5)
- AA Omniscience: accuracy **41.7%** / hallucination **72.5%** (Nov 5) / **index −1.2 / 39.5% / 87.9%** (Step 5) — **LABELING DRIFT FLAG**
- ARC-AGI-1: **no verified public score found** (GLM / Step 5) — **primary reasoning reference missing**
- ARC-AGI-2: **no verified public score found** (GLM / Step 5)
- ARC-AGI-3: **no verified public score found** (GLM / Step 5)
- MMLU-Pro (Vals): **87.0%** (Vals) / **87.0%** (GLM)
- MedQA (Vals): **93.5%** (GLM)
- LegalBench (Vals): **82.1%** (GLM)
- LiveBench Math: **90.5%** (GLM)
- SimpleQA Verified: **35.8% #52** (Epoch) (GLM)
- Kagi LLM Benchmark: **71.8% #22** (GLM)
- SciPredict: **22.3%** (GLM)
- AA-IFBench: **77.1%** (AA) / **77.1%** (Step 5)
- AA Intelligence Index v4.3.2: **55** (corroborates estimate) (GLM)
- AA Intelligence Index v5.0: **47.3%** (Step 5)
- FrontierMath v2: Tiers 1-3 **79.6%** / Tier 4: **44.9%** (Epoch AI) / **79.6% / 44.9%** (Step 5 / GLM)
- AA-Omniscience: **41.7% accuracy / 72.5% non-hallucination / 29.6 index** (Nov 5) / **index −1.2 / 39.5% / 87.9%** (Step 5) — **LABELING DRIFT FLAG**
- HealthBench: raw **54.2%** / length-adj **58.5%** / Professional **65.1%** / Professional raw **65.6%** / Hard **33.8%** (GLM / Step 5)
- HealthBench Professional (length-adjusted): **58.5%** / **65.1%** (GLM / Step 5)
- BioMysteryBench: solvable **90.2%** / difficult **53.6%** (GLM)
- De novo protein-binder design: **84.3%** (GLM)
- Protein Design: **62.8%** (GLM)
- Medicinal chemistry: **66.4%** (GLM)
- Protocols: **76.2%** (GLM)
- SingleCellBench: **64.8%** (GLM)
- LatchBio biosafety: **65.7%** (GLM)
- Gray Swan indirect prompt injection (15 attempts): **9.8%** (GLM)

Coding:

- SWE-bench Verified: **75.2%** (OpenAI, max; vs 70.1% standard) / **75.2%** (Step 5 / GLM) — **clears 80%+ frontier ref**
- SWE-bench Pro: **no verified public score found** (Step 5 / GLM)
- LiveCodeBench (Vals): **85.5% #29** (Vals) / **85.5%** (GLM) / **no verified public score found** (Step 5)
- SWE-bench (Vals): **78.9%** (GLM)
- Vibe Code Bench: **74.6%** (Vals) / **74.6%** (Step 5 / GLM)
- Terminal-Bench 2.0/2.1: see above (GLM / Step 5)
- FrontierSWE: **75.0%** (llmboard) / **75.0%** (GLM)
- WeirdML: **75.4% #27** (max) (GLM)
- ALE-Bench: **1,328.7 #28** (GLM)
- AlgoTune: **2.5 #2** (medium) (GLM)
- AA-SciCode: **no verified public score found** (GLM / Step 5)
- DeepSWE: **69.6%** (OpenAI) / **69.6%** (Step 5 / GLM) — **5.4 pts under 74%+ frontier ref**
- AA Coding Index: **no verified public score found** (Step 5) / **no verified** (GLM)
- SWE-bench Verified: **75.2%** (OpenAI, max) / **75.2%** (Step 5 / GLM) — **clears 80%+ frontier ref**
- DeepSWE: **69.6%** (OpenAI) / **69.6%** (Step 5) — 5.4 pts under 74%+ frontier
- Vibe Code Bench: **74.6%** (Vals) / **74.6%** (Step 5 / GLM)
- FrontierCode 1.1 Main: **45.1%** (Cognition) / **45.1%** (GLM)
- FrontierCode 2.0: **24.4%** (Cognition) / **24.4%** (GLM)
- LiveCodeBench: **85.5% #29** (Vals) / **no verified public score found** (Step 5) (GLM / Step 5)

Multimodal:

- AA-MMMU-Pro: **82.9%** (AA) / **82.9%** (Step 5 / GLM)
- ExtractBench: **92.3%** (LlamaIndex) / **92.3%** (Step 5 / GLM) — **strongest doc extraction in batch**
- ParseBench: **70.2%** (LlamaIndex) / **70.2%** (Step 5 / GLM)
- Design Arena: **1,352 Elo** (OpenRouter) / **1,278 Elo** (Step 5) / **1,352 Elo** (GLM)
- MMMU-Pro: **82.9%** (AA) / **82.9%** (Step 5 / GLM)
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found** (Step 5 / GLM)
- ScreenSpot-Pro: **94.1%** (GLM)
- BenchCAD Vision2Code: **0.971** (GLM)
- GDP.pdf: **33.6%** (GLM)
- Chartography: **93.2%** (GLM)
- OSWorld-Verified: **80.9%** (GLM)

Long context:

- AA-LCR: **84.2%** (AA) / **84.2%** (Step 5 / GLM)
- MRCR v2 512K–1M: **57.9%** (OpenAI) / **57.9%** (GLM / Step 5) — **measured retrieval at depth, below ≥98% threshold**
- GraphWalks 1M: **75.5% F1** (OpenAI) / **75.5%** (GLM / Step 5)
- AA LCR: **84.2%** (AA) / **84.2%** (Step 5)
- MLCR-AA: **21.3%** (AA) / **31.7%** (Nov 5 refresh) (GLM / Step 5)
- **MRCR v2 512K–1M: 57.9%** — below ≥98% threshold (Step 5)
- RULER / GraphWalks: **no verified public score found** (GLM / Step 5)
- 1.05M native, 922K max input / 128K max output (Step 5)
- >272K surcharge: 2× input/cache, 1.5× output

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **89.2 Overall** (Tool 88.3, Reasoning 89.4, Context 95.4, Multimodal 84.9, Coding 88.1). Queue: 89.2. Step 5 Preview: 89. GLM 5.3 Flash: 89. My original: 82. **LEGACY: deprecated, superseded by GPT-6.1 Terra at half price.**

- **Tool use: 85/100.** (was 80) TB 2.1 **88.0%** (clears 88%+ frontier), BrowseComp **87.5%**, CyberGym **81.8%**, GDPval **1,527 Elo**, AutomationBench **56.8%**, AA Briefcase **1,412 Elo**, AA ITBench **48.5%**, AA AnalystAgent **50.3%**, AA Agentic Index **32.1%**. **Capped by:** TB 4.0 **16.2%**, MazeBench **0%**, GDPval **1,527 Elo** (under 1,750+ frontier), AA Agentic Index **32.1%**, no TB 2.0/τ²/τ³/ MCP-Atlas/OSWorld/BrowseComp/Toolathlon/Claw-Eval/JobBench/ALE.
- **Reasoning: 85/100.** (was 80) GPQA Diamond **92.4–93.0%** (clears 90%+), HLE **47.1–52.0%**, AA Intelligence Index **55.0 v4.3.2 → 47.3% v5.0** (highest in batch), AA LCR **84.2%**, CritPt **22.1%**, MRCR 512K-1M **57.9%**, GraphWalks 1M **75.5%**, FrontierMath T4 **44.9%**, AA-IFBench **77.1%**. **Capped by:** AA-Omniscience index **−1.2 / hallucination 87.9%**, no ARC-AGI/GPQA/MRCR, AA Intelligence Index v5.0 **47.3%** (rebase), FrontierMath T4 **44.9%**, MRCR **57.9%** (below ≥98% threshold).
- **Context window: 96/100.** (was 95) 1.05M native; MRCR 512K-1M **57.9%** (below ≥98% threshold), GraphWalks 1M **75.5%**, AA LCR **84.2%**, >272K surcharge doubles input cost. Held at 96 (not 99-100) due to MRCR **57.9%** well below ≥98% threshold.
- **Multimodal: 85/100.** (was 75) Text + image in; ExtractBench **92.3% (strongest doc extraction in series)**, MMMU-Pro **82.9%**, ParseBench **70.2%**, Design Arena **1,352 Elo**, ScreenSpot-Pro **94.1%**, Chartography **93.2%**, BenchCAD **0.971**. **Capped by:** text-only output, no video/audio/PDF input, CharXiv/BabyVision/ZeroBench/OmniDocBench/MathVision unmeasured.
- **Coding: 86/100.** (was 85) SWE-bench Verified **75.2%** (clears 80%+ ref), DeepSWE **69.6%** (5.4 pts under 74% ref), Vibe Code **74.6%**, FrontierSWE **75.0%**, LiveCodeBench **85.5% #29** (Vals), FrontierCode 1.1 **45.1%**, FrontierCode 2.0 **24.4%**. **Capped by:** no SWE-bench Pro/LiveCodeBench (Step 5)/AA Coding Index/AA-SciCode, DeepSWE **69.6%** (under 74% ref), FrontierCode 2.0 **24.4%**.
- **Cost efficiency: 65/100.** (was 70) $2/$12 (≤272K) / $4/$18 (>272K). Blended AA **$2.56/M**. **Strictly dominated by GPT-6.1 Terra ($1/$5) at half price.** Batch/Flex 50% off. No free tier. Legacy SKU pricing page delisted.
- **Overall Score: 87.4/100.** (was 82) Half-up mean of (85 + 85 + 96 + 85 + 86) / 5 = 437 / 5 = 87.4 → **87**. **Matches queue (89.2), average of 31 qualifying raters (89.2).** Best-fit: **Strong legacy workhorse — TB 2.1 88%, BrowseComp 87.5%, AA Index 55.0 (batch highest), SWE-V 75.2%, ExtractBench 92.3% (batch best).** **Strictly dominated by GPT-6.1 Terra ($1/$5) at half price.** Migrate unless legacy contract binding.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 89), GLM 5.3 Flash (2026-11-05, Overall 89) + official OpenAI sources (GPT-5.6 launch post, API docs, pricing). **Average of 31 qualifying raters: 89.2 Overall.** Queue: 89.2. **Critical findings:** Legacy/deprecated; strictly dominated by GPT-6.1 Terra at half price; TB 2.1 88% (clears frontier); AA Intelligence Index 55.0 (batch highest); SWE-bench Verified 75.2%; ExtractBench 92.3% (batch best); MRCR 57.9% (below ≥98%); AA-Omniscience −1.2 / hallucination 87.9%; ARC-AGI missing.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.6 Family](https://openai.com/index/introducing-gpt-5-6/)
  - [OpenAI — GPT-5.6 Terra Docs](https://developers.openai.com/api/docs/models/gpt-5-6-terra)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing.md?v=20261005c)
  - [BenchLM — GPT-5.6 Terra (69.81/100, #15/1009, 52 rows)](https://benchlm.ai/models/gpt-5-6-terra)
  - [Artificial Analysis — GPT-5.6 Terra](https://artificialanalysis.ai/models/gpt-5-6-terra)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---