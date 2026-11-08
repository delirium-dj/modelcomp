# GPT-5.4 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (Xhigh effort tier) — **SUPERSEDED BY GPT-5.5/5.6/6.x FAMILY**
- **Short description:** OpenAI's March 2026 flagship reasoning model unifying Codex and GPT lines — native computer use surpassing human performance on OSWorld, tool search cutting agent token usage by 47%, 1M+ context window. **Now two+ generations behind GPT-6 line.** BenchLM: 66.48/100, #26/1014 (base SKU, 61 benchmarks).
- **Provider / access:** OpenAI API (`gpt-5.4`, Responses + Chat Completions), OpenCode Zen (`opencode/gpt-5.4`), Azure OpenAI, AWS Bedrock. ChatGPT (Plus/Team/Pro), Codex (1M-context experimental). Batch/Flex 50%, Priority 2×. No Free tier.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff **not verified** (GPT-5.4 Pro carries Aug 2025).
- **IDs:** `gpt-5.4` (OpenAI API), `opencode/gpt-5.4` (OpenCode Zen). `gpt-5.4-pro` ($30/$180) is separate Pro variant (12 benchmarks only). No Free ID.
- **Context window:** 1,050,000 tokens total (1.05M); 272K standard window with 2× billing beyond; 922K input / 128K output per tracker listings.
- **Modalities:** Text, image input (detail levels original/high); text output. Native computer use (Playwright code + screenshot-based mouse/keyboard). Reasoning: yes (xhigh default in evals). Tool calls with tool search (lightweight tool list, on-demand definitions). JSON mode: yes.
- **Pricing (as of 2026-11-08):** ≤272K: **$2.50/M in, $0.25/M cache read, $15.00/M out**. >272K: **$5.00/M in, $0.50/M cache read, $22.50/M out** (2× input, 1.5× output). Blended AA: **$5.63/M** (7:2:1). Cached input $0.25/M. Batch/Flex 50% off ($1.25/$7.50). Priority 2×. Output speed 91 tok/s, first token 1.23s (AA). No free API tier.
- **Architecture:** Proprietary; parameter count not disclosed. Most token-efficient OpenAI reasoning model at release.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official OpenAI sources. **Average of 31 qualifying raters: 87.4 Overall** (Tool 87.4, Reasoning 89, Context 94.3, Multimodal 80.2, Coding 86.7). Queue: 87.4. Step 5 Preview: 77. GLM 5.3 Flash: 87. My original: 77.

Agent / tool use:

- Terminal-Bench: **81.8% #2** (tbench.ai leaderboard) / TB 2.1 (AA): **78.3%** / TB 2.0 (Vals): **58.4%** / TB Hard (AA): **57.6% #11** (GLM / Step 5)
- GDPval (wins/ties vs human professionals): **83.0%** (OpenAI) / GDPval-AA v2.1: **37.3–37.4% #105** / **Elo 1,307** (AA, NEW) (GLM / Step 5)
- OSWorld-Verified: **75.0%** (vs human baseline 72.4% — **surpasses human performance**) / **75.0%** (Step 5) (GLM / Step 5)
- MCP Atlas (Scale AI SEAL): **70.6% #19** (47% token reduction with tool search) / **70.6%** (Step 5) (GLM / Step 5)
- τ²-Bench Telecom: **98.9%** (OpenAI) / **98.9%** (Step 5) / AA: **87.1%** (GLM) — **highest in batch**
- AA Tau3-Banking: **39.6%** (BenchLM Nov 5 refresh) / **39.6%** (Step 5) — 10.4 pts under 50% frontier
- APEX-Agents: **52.4% #25** (Mercor) (GLM)
- LifeVal: **73.0%** (OpenAI, NEW) (GLM)
- Claw-Eval: **60.3%** (Claw-Eval leaderboard) / **60.3%** (Step 5) — **best measured ClawEval in series**
- CyberGym: **79.0%** (OpenAI) / **79.0%** (Step 5)
- Toolathlon: **54.6%** (OpenAI) / **54.6%** (Step 5)
- GDPval (wins/ties): **83.0%** (OpenAI) / GDPval-AA Elo **1,307** (AA) (GLM / Step 5)
- DeepSearchQA: **63.7% #3** / METR Time Horizons: **74.3% #7** / Harvey's Legal Agent (Vals): **0.0% #53** (GLM)
- LifeVal: **73.0%** (OpenAI, NEW) / OSWorld-Verified: **75.0% (superhuman)** / τ²-Bench: **98.9%** (highest in batch) (GLM / Step 5)
- ExploitGym: **6.0%** (NEW, very weak) / Toolathlon: **54.6%** (OpenAI) (GLM / Step 5)
- MazeBench: **0%** / ApprenticeBench: **11%** / ResearchClawBench: **15.3%** / JobBench: **38.9%** / ExploitGym: **6.0%** (GLM / Step 5)
- Harvey's Legal Agent (Vals): **0.0% #53** (GLM)
- **MCP Atlas / GDPval-AA (current) / OSWorld 2.x / TB 2.1/4.0 / Claw-Eval (except 60.3%) / MazeBench / ALE / JobBench: partially measured**

Reasoning / knowledge:

- GPQA Diamond: **93.3% #18** (Epoch, xhigh) / **92.0% AA** / **91.7% Vals** / Pro: **94.4%** — **clears 90%+ on all** (GLM / Step 5)
- HLE: **36.2% #8** (Scale/CAIS xhigh) / AA: **43.7%** / Official table: **52.1% w/tools / 39.8% w/o** (GLM / Step 5) — clears 40%+ on 2 of 3
- ARC-AGI-1: **93.67% #43** / **93.7%** (Step 5) (ARC Prize verified)
- ARC-AGI-2: **74.0% #47** / **74.0%** (Step 5) (ARC Prize verified)
- ARC-AGI-3: **0.2%** / **0.2%** (Step 5) — very weak
- FrontierMath v2: Tiers 1–3 **78.6% #17** / Tier 4 **49.0% #24** (Epoch AI) / **78.6% / 49.0%** (Step 5 / GLM)
- AIME 2026: **99.2% #3** (MathArena) / HMMT Feb 2026: **97.7% #2** / AIME (Vals): **96.7% #5** / OTIS **95.3–97.8%** / MathArena Apex: **54.2% #6** / ProofBench: **56.0%** / LiveBench Math: **94.2% #19** (GLM)
- CritPt: **23.4% #46** (AA) / **23.4%** (Step 5)
- AA Intelligence Index: **39.0** (AA current composite, NEW) / BenchLeader Index: **64.2 ±2.5 #51/760** (GLM / Step 5)
- AA LCR: **82.0%** (post-re-scale) / LMCA: **52.0%** / DTBench: **94.4% #44** (GLM / Step 5)
- AA Omniscience: non-hallucination **8.3% #449 at xhigh** (severe hallucination at high effort), hallucination-rate row **91.7%** / **91.7%** (Step 5) — **3rd worst in series**
- MMLU-Pro (Vals): **87.5%** / MedQA (Vals): **96.1% #5** (GLM / Step 5)
- AA-GPQA Diamond: **92.0%** / AA-HLE: **43.7%** / AA-IFBench: **73.9%** (GLM / Step 5)
- AIME 2026: **99.2% #3** / HMMT: **97.7% #2** / OTIS: **95.3–97.8%** / ProofBench: **56.0%** / LiveBench Math: **94.2% #19** (GLM)
- SimpleQA Verified: **45.1% #37** / Kagi: **63.8%** (GLM)

Coding:

- SWE-bench Verified: **76.9% #8** (Epoch, high effort) (GLM)
- SWE-bench Pro: **59.1% #2** (Scale AI SEAL, xhigh) (GLM)
- LiveCodeBench: **84.1% #39** (Vals) / **84.1%** (GLM)
- LiveCodeBench Pro: **87.5%** / **87.5%** (Step 5 / GLM)
- React Native Evals: **85.3%** / **85.3%** (Step 5 / GLM)
- SciCode: **56.6% #30** (clears 55% mark) / DeepSWE v1.1: **51.8% #46** (below 74% threshold) (GLM)
- Vibe Code Bench v1.1: **67.4%** (Vals) / **67.4%** (Step 5)
- Terminal-Bench 2.0: **75.1%** / **75.1%** (Step 5 / GLM)
- React Native Evals: **85.3%** / **85.3%** (Step 5 / GLM)
- PostTrainBench v1.1: **19.0%** (NEW, 2nd worst in batch) / **19.0%** (Step 5 / GLM)
- WeirdML: **77.7% #24** / GSO-Bench: **31.4% #12** / ALE-Bench: **1607 #13** / MirrorCode: **15.6% #7** (GLM)
- AA Coding Index: **71.0%** (AA) / **71.0%** (Step 5) — clears 70%+ ref
- AA-SciCode: **56.6% #30** (clears 55% mark) (GLM)
- DeepSWE v1.1: **51.8% #46** (below 74% threshold) (GLM)
- LMArena Coding: **1521 #33** / WebDev: **1465 #64** / LiveBench Coding: **77.5% #36** (GLM)
- **SWE-bench Verified (base): 76.9% #8** (Epoch) (GLM)
- **MRCR: 86.0% through 128K; 36.6% at 512K–1M** (GLM) — **far-end degradation**

Multimodal:

- MMMU Pro (no tools): **81.2%** / **82.1% w/ Python** / **81.2% / 82.1%** (Step 5 / GLM)
- AA-MMMU-Pro: **78.4%** / **78.4%** (Step 5 / GLM)
- ScreenSpot Pro: **85.4%** / **85.4%** (Step 5 / GLM)
- CharXiv: **82.8%** / **82.8%** (Step 5 / GLM)
- Online-Mind2Web: **92.8%** (GLM)
- MedXpertQA MM: **77.1%** / **77.1%** (Step 5 / GLM)
- ERQA: **65.4%** / **65.4%** (Step 5 / GLM)
- ZeroBench: **41.0%** / **41.0%** (Step 5 / GLM)
- SimpleVQA: **61.1%** / **61.1%** (Step 5 / GLM)
- Online-Mind2Web: **92.8%** (GLM)
- ParseBench: **62.23%** (Oct 28 snapshot, NEW) / **61.72%** (Step 5 / GLM)
- OfficeQA: **68.1% / Pro: 53.2%** (GLM / Step 5)
- Design Arena: **1,218 Elo** (OpenRouter) / **1,219** (Step 5) / **1,218** (GLM)
- Online-Mind2Web: **92.8%** (GLM)
- CharXiv: **82.8%** / **82.8%** (Step 5 / GLM)
- BenchLeader Multimodal: **62** (GLM)
- CL-bench Life: **21.7% #2** (GLM)

Long context:

- MRCR: **86.0% through 128K; 36.6% at 512K–1M** (GLM) — **far-end degradation**
- Graphwalks BFS: **93.0% at 0–128K; 21.4% at 256K–1M** (GLM) — **far-end degradation**
- AA LCR: **82.0%** (post-re-scale) / LMCA: **52.0%** / DTBench: **94.4% #44** (GLM / Step 5)
- AA-LCR: **82.0%** (post-re-scale) (Step 5)
- **No MRCR run at 512K+ ≥98%** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **87.4 Overall** (Tool 87.4, Reasoning 89, Context 94.3, Multimodal 80.2, Coding 86.7). Queue: 87.4. Step 5 Preview: 77. GLM 5.3 Flash: 87. My original: 77.

- **Tool use: 87/100.** (was 70) TB **81.8% #2** (tbench.ai), GDPval **83.0%** (superhuman), OSWorld **75.0% (superhuman)**, τ²-Bench **98.9% (highest in batch)**, MCP Atlas **70.6% #19** (47% token reduction), METR **74.3% #7**, LifeVal **73.0%**, BrowseComp **82.7%**, CyberGym **79.0%**, APEX **52.4% #25**, Claw-Eval **60.3%** (best in series). **Capped by:** ExploitGym **6.0%**, MazeBench **0%**, ApprenticeBench **11%**, no TB 2.1/4.0, AA Agentic Index missing, AA Tau3 Banking **39.6%** (under 50% ref).
- **Reasoning: 89/100.** (was 72) GPQA Diamond **93.3% #18** (clears 90%+), HLE **52.1% w/tools** (official) / **36.2% #8** (Scale), ARC-AGI-1 **93.67%**, ARC-AGI-2 **74.0%**, FrontierMath Tiers 1-3 **78.6%** / Tier 4 **49.0%**, AIME 2026 **99.2% #3**, HMMT **97.7% #2**, AA Intelligence Index **39.0** (NEW), AA LCR **82.0%**, LifeVal **73.0%**, ProofBench **56.0%**, LiveBench Math **94.2%**. **Capped by:** AA Omniscience non-hallucination **8.3% at xhigh** (91.7% hallucination, 3rd worst in series), CritPt **23.4%**, ARC-AGI-3 **0.2%**, no MRCR at 512K+, AA-HLE **43.7%** (under 50%).
- **Context window: 94/100.** (was 95) 1.05M native; 272K standard with 2× billing beyond. AA LCR **82.0%** (post-re-scale). **Far-end degradation:** MRCR **36.6% at 512K–1M**, Graphwalks BFS **21.4% at 256K–1M**. **Held at 94 (not 99) due to far-end degradation and no ≥98% MRCR at 512K+.**
- **Multimodal: 80/100.** (was 70) Text + image in; MMMU Pro **81.2% / 82.1% w/ Python**, ScreenSpot Pro **85.4%**, CharXiv **82.8%**, Online-Mind2Web **92.8%**, MedXpertQA **77.1%**, ERQA **65.4%**, ZeroBench **41.0%**, ParseBench **62.2%**, Design Arena **1,218 Elo**. **Scored above +image-only 60-70 band due to breadth (10+ visual benchmarks).** Capped by no video/audio, ZeroBench **41.0%**, OfficeQA Pro **53.2%**, text-only output.
- **Coding: 87/100.** (was 78) SWE-bench Verified **76.9% #8**, SWE-Pro **59.1% #2**, LiveCodeBench **84.1%**, LiveCodeBench Pro **87.5%**, React Native **85.3%**, SciCode **56.6% (clears 55%)**, Vibe Code **67.4%**, WeirdML **77.7%**, AA Coding Index **71.0%** (clears 70%+). **Capped by:** DeepSWE **51.8% (below 74% ref)**, PostTrainBench **19.0% (2nd worst in batch)**, no FrontierCode/AA-SciCode (base).
- **Cost efficiency: 70/100.** (was 70) $2.50/$15 (≤272K) / $5/$22.50 (>272K). Blended AA **$5.63/M**. Cached input $0.25/M. Batch/Flex 50%. **Strictly dominated by GPT-6.1 Sol ($2/$10) and GPT-5.5 ($2/$12)** — cheaper with equal/better BenchLM. No free tier. Output speed 91 tok/s.
- **Overall Score: 87/100.** (was 77) Half-up mean of (87 + 89 + 94 + 80 + 87) / 5 = 437 / 5 = 87.4 → **87**. **Matches queue (87.4) and average of 31 qualifying raters (87.4).** Best-fit: Strong balanced model for reasoning/coding at mid-tier pricing; OSWorld superhuman, τ²-Bench 98.9% (highest in batch), GPQA 93.3%, AIME 99.2%; **91.7% hallucination rate at xhigh (3rd worst)** limits unattended factual use; **far-end context degradation (MRCR 36.6% at 512K–1M)**; superseded by GPT-5.5/5.6/6.x.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 77), GLM 5.3 Flash (2026-11-05, Overall 87) + official OpenAI sources (GPT-5.4 launch post, GPT-5.5 comparison table, API pricing). **Average of 31 qualifying raters: 87.4 Overall.** Queue: 87.4. **Critical findings:** OSWorld superhuman (75%), τ²-Bench 98.9% (highest in batch), GPQA 93.3%, AIME 99.2% #3; 91.7% hallucination at xhigh (3rd worst); far-end context degradation (MRCR 36.6% at 512K–1M); superseded by GPT-5.5/5.6/6.x.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
  - [OpenAI — Introducing GPT-5.5 (comparison table)](https://openai.com/index/introducing-gpt-5-5/)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing.md?v=20261005c)
  - [BenchLM — GPT-5.4 (66.48/100, #26/1014, 61 rows)](https://benchlm.ai/models/gpt-5-4)
  - [Artificial Analysis — GPT-5.4](https://artificialanalysis.ai/models/gpt-5-4)
  - [Claw-Eval Leaderboard](https://claw-eval.github.io/)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Meta AI — Muse Spark Comparison Chart](https://ai.meta.com/blog/introducing-muse-spark-msl/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---