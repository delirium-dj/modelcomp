# Kimi K2.7 Code — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code (code-specialised variant) — **SCORES BELOW GENERALIST SIBLINGS** (BenchLM 53.75, #86/1015; below K2.6 57.53 and K3 69.46)
- **Short description:** Moonshot AI's coding-specialised open-weight model — **genuine contradiction: MCP Mark Verified 81.1% / MCP Atlas 76.0% (STRONGEST TOOL-PROTOCOL IN SERIES) vs GDPval-AA 26.9% norm / AA Agentic Index 22.5% (AMONG WEAKEST)** — speaks tool protocol fluently but cannot complete multi-step tasks. **BenchLM: 53.75/100, #86/1015 (26 BENCHMARKS — 2ND-THINNEST IN BATCH).** **NO RATE CARD PUBLISHED — placeholder cost.**
- **Provider / access:** **OPEN WEIGHTS** on Hugging Face (`moonshotai/Kimi-K2.7-Code`), Moonshot API, **OpenCode Zen (`kimi-k2-7-code`)**. Self-hosting available (Modified MIT license — commercial use restricted). DeepInfra, Fireworks, Novita, Together host it. **NO FREE ID ON ZEN.**
- **Release / knowledge:** 2026-06-12 release; **knowledge cutoff: not disclosed.**
- **IDs:** `moonshotai/Kimi-K2.7-Code` (HF); `kimi-k2-7-code` (BenchLM canonical, Zen); `kimi_kimi-k2.7-code` (Vals). **Canonical BenchLM slug: `kimi-k2-7-code` (dotted) — repo folder `kimi-k2-7-code` 404s on BenchLM.**
- **Context window:** **256,000 tokens (256K)** — **QUARTER OF 1M STANDARD**; 262K in/out on DeepInfra/Moonshot (131K on Fireworks/Together). **BINDING CONSTRAINT.**
- **Modalities:** Text, image, **VIDEO IN (experimental, official API only)**; text out. Reasoning (thinking forced, temperature 1.0, top-p 0.95, `preserve_thinking` forced); tool calls interleaved thinking; JSON mode. **VIDEO EXPERIMENTAL, OFFICIAL API ONLY.**
- **Pricing (as of 2026-11-08):** **NO RATE CARD PUBLISHED** — BenchLM row carries none. **Placeholder scored at methodology ~$3/$15 anchor (60).** DeepInfra $0.68/$3.40; Moonshot/Fireworks/Novita/Together $0.95/$4.00 (cached $0.19). **Open weights = self-hosting escape (Modified MIT — commercial restrictions).** **NO FREE ID ON ZEN.**
- **Architecture:** MoE, **1T total / 32B active** (61 layers, 384 experts, 8 selected + 1 shared, MLA attention, SwiGLU, MoonViT 400M vision encoder, native INT4 quantization); Modified MIT license (commercial use restricted).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-05) + official Moonshot sources. **Average of 28 qualifying raters: 82.3 Overall** (Tool 84.7, Reasoning 79.8, Context 81.6, Multimodal 79.8, Coding 85). Queue: 82.3. Step 5 Preview: 67. GLM 5.3 Flash: 81. My original: 61. **26 BENCHMARKS (2ND-THINNEST IN BATCH); NO RATE CARD; 256K CONTEXT (1/4 STANDARD); SCORES BELOW GENERALIST SIBLINGS.**

Agent / tool use — **DEFINING CONTRADICTION: STRONG PROTOCOL, WEAK EXECUTION**:

- MCP Mark Verified: **81.1%** (vendor) — **AMONG STRONGEST MCP FIGURES IN SERIES** (beats Opus 4.8 76.4%) (GLM / Step 5)
- MCP Atlas: **76.0%** (GLM / Step 5)
- τ²-bench: **90.1%** (AA) — **STRONGEST INDEPENDENT AGENTIC FIGURE HERE** (GLM / Step 5)
- Kimi Claw 24/7: **46.9%** (vendor); TB Hard (AA): **44.7%** (GLM / Step 5)
- Terminal-Bench 2.1 (Vals): **67.0%** — **21PTS UNDER 88%+ FRONTIER REF** (GLM / Step 5)
- GDPval-AA: **1,114 Elo / 26.9% normalized** (AA) — **WELL UNDER 1,750 FRONTIER** (GLM / Step 5)
- AA Agentic Index: **22.5%** — **AMONG WEAKEST AGENTIC COMPOSITES IN SERIES** (GLM / Step 5)
- TB Hard (AA): **44.7%** (Nov 5 refresh — weak-mid) (GLM)
- WildClawBench: **46.9%**; Long-Horizon TB: **3 tasks solved** (GLM)
- **TB 2.0/4.0, τ³-Banking, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench: NO VERIFIED PUBLIC SCORE** — **2 OF 3 FRONTIER REFS UNMEASURED; NO COMPOSITE BEYOND AA AGENTIC INDEX** (GLM / Step 5)

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA) — **0.4PTS UNDER 90%+ FRONTIER (NARROWEST MISS IN BATCH)** (GLM / Step 5)
- HLE: **35.0%** (AA) — **5PTS UNDER 40%+ REF** (GLM / Step 5)
- AA-LCR: **79.3%** (AA) (GLM / Step 5)
- CritPt: **10.0%** (AA) (GLM / Step 5)
- AA-IFBench: **63.1%** (AA) (GLM)
- FrontierMath v2: Tiers 1-3 **54.0%** / Tier 4 **12.2%** (Epoch) (GLM / Step 5)
- AA Intelligence Index: **25.8%** (AA) (GLM)
- AA-Omniscience: **39.6% accuracy / 82.4% non-hallucination / −10.2 index** (AA — weak) (GLM)
- MLS-Bench Lite: **35.1%** (GLM)
- **AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME: NO VERIFIED PUBLIC SCORE** — **COMPOSITE DEPTH, RELIABILITY, 3 OF 5 REASONING REFS UNMEASURED** (GLM / Step 5)

Coding:

- SWE-bench (Vals): **78.2%** — **strongest coding figure** (GLM / Step 5)
- LiveCodeBench (Vals): **82.1%** (GLM / Step 5)
- AA Coding Index: **60.8%** — **9.2PTS UNDER 70% FRONTIER REF** (GLM / Step 5)
- Kimi Code Bench v2: **62.0%** (vendor); ProgramBench: **53.6%** (vendor) (GLM / Step 5)
- LiveCodeBench (Vals): **82.1%**; AA-SciCode: **47.8%** — **UNDER 55%+ REF** (GLM / Step 5)
- CursorBench 3.2: **49.7%**; OpenHarmony Bench: **52.1%**; MLS-Bench Lite: **35.1%** (GLM / Step 5)
- **SWE-bench Verified/Pro, DeepSWE, Vibe Code Bench, FrontierCode, TB 4.0: NO VERIFIED PUBLIC SCORE** — **85%, 74%, 55% REFS UNMEASURED** (GLM / Step 5)

Multimodal:

- Design Arena Website: **1,262-1,270 Elo** (drift 1270→1266→1262 flagged) (GLM / Step 5)
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: NO VERIFIED PUBLIC SCORE** — **EFFECTIVELY UNMEASURED** (GLM / Step 5)
- **Text + image in; video experimental (official API only); text out** — **VIDEO EXPERIMENTAL, OFFICIAL API ONLY** (GLM / Step 5)

Long context:

- AA-LCR: **79.3%** (AA) (GLM / Step 5)
- **256K CONTEXT (QUARTER OF 1M STANDARD) — BINDING CONSTRAINT** (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **82.3 Overall** (Tool 84.7, Reasoning 79.8, Context 81.6, Multimodal 79.8, Coding 85). Queue: 82.3. Step 5 Preview: 67. GLM 5.3 Flash: 81. My original: 61. **26 BENCHMARKS; NO RATE CARD; 256K CONTEXT (1/4 STANDARD); SCORES BELOW GENERALIST SIBLINGS (K2.6 57.53, K3 69.46).**

- **Tool use: 68/100.** (was 60) MCP Mark **81.1% (AMONG STRONGEST IN SERIES)**; MCP Atlas **76.0%**; τ² **90.1% (AA, strongest independent agentic)**; Kimi Claw **46.9%**; MCP Atlas **76.0%**; τ² **90.1%**; TB 2.1 **67.0%** (Vals). **Capped by:** GDPval-AA **1,114 Elo / 26.9% norm (well under 1,750)**; AA Agentic Index **22.5% (AMONG WEAKEST)**; TB 2.1 **67.0% (21pts under 88%+ frontier)**; TB Hard **44.7%**; **NO TB 2.0/4.0, τ³/OSWorld/BrowseComp/Toolathlon/MazeBench/ALE/Claw-Eval/JobBench/AA AutomationBench** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 65/100.** (was 55) GPQA Diamond **89.6% (0.4pts UNDER 90%+ — NARROWEST MISS IN BATCH)**; AA-LCR **79.3%**; AA-IFBench **63.1%**; AA-HLE **35.0% (5pts UNDER 40%+ REF)**; CritPt **10.0%**; FrontierMath T1-3 **54.0%** / T4 **12.2%**; IFBench **63.1%**. **Capped by:** AA Intelligence Index **25.8%**; AA-Omniscience **−10.2 index / 39.6% accuracy / 82.4% hallucination**; CritPt **10.0%**; **NO AA Intelligence Index/AA-Omniscience/ARC-AGI/MRCR/AIME** — composite depth + reliability unmeasured.
- **Context window: 85/100.** (was 55) **256K (200K-500K band ceiling, 85)** — **quarter of 1M standard**. AA-LCR **79.3%** (strong for tier). **Scored at band ceiling because AA-LCR 79.3% shows window measurably usable, and open weights mean window not vendor-gated.** Held below ≥1M tier: quarter of standard, NO MRCR/GraphWalks.
- **Multimodal: 60/100.** (was 60) **Text + image in; video experimental (official API only); text out.** Design Arena **1,262-1,270 Elo** (drift 1270→1266→1262). **Scored at bottom of +image-in band (60-70) on single Design Arena row — NO OTHER VISUAL BENCHMARKS.** MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: ALL UNPUBLISHED. **VIDEO EXPERIMENTAL, OFFICIAL API ONLY.**
- **Coding: 72/100.** (was 75) SWE-bench **78.2% (Vals)**; LiveCodeBench **82.1% (Vals)**; AA Coding Index **60.8% (9.2pts UNDER 70% REF)**; Kimi Code **62.0%**; LiveCodeBench **82.1%**; ProgramBench **53.6%**; CursorBench **49.7%**; OpenHarmony **52.1%**; AA-SciCode **47.8% (UNDER 55% REF)**. **Capped by:** AA Coding Index **60.8% (9.2pts under 70% ref)**; AA-SciCode **47.8% (UNDER 55% ref)**; ProgramBench **53.6%**; **NO SWE-V/Pro/DeepSWE/Vibe Code/FrontierCode/TB 4.0** — 85%, 74%, 55% refs unmeasured.
- **Cost efficiency: 60/100.** (was 85) **NO RATE CARD PUBLISHED** — placeholder at methodology ~$3/$15 anchor (60). DeepInfra $0.68/$3.40; Moonshot/Fireworks/Novita/Together $0.95/$4.00 (cached $0.19). **Open weights = self-hosting escape (Modified MIT — commercial restrictions).** **NO ZEN FREE TIER.** **Explicitly an estimate, not a measurement.**
- **Overall Score: 70/100.** (was 61) Half-up mean of (68 + 65 + 85 + 60 + 72) / 5 = 350 / 5 = 70 → **70**. **Below queue (82.3), average of 28 qualifying raters (82.3).** Best-fit: **Tool-protocol specialist whose execution layer does not match protocol fluency** — MCP Mark **81.1% (AMONG STRONGEST IN SERIES)**, MCP Atlas **76.0%**, τ² **90.1%** make it one of the better models at *calling* tools correctly, while AA Agentic Index **22.5%**, GDPval-AA **26.9%**, TB 2.1 **67.0%** show it does not reliably *complete* multi-step tasks. **Use for tool-calling-heavy work where harness drives plan; NOT as autonomous agent.** **CAUTIONS:** 256K context = 1/4 standard; CritPt 10.0%, FrontierMath T4 12.2%, NO reliability measurement. **Scores BELOW generalist siblings K2.6 (57.53) and K3 (69.46) — prefer those unless MCP-protocol strength decisive.** NOTE: `kimi-k2.7-code-highspeed` serving profile was parked/deleted as duplicate (same weights, same window, 2× API price).

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 67), GLM 5.3 Flash (2026-11-05, Overall 81) + official Moonshot sources (Kimi K2.7 Code model card, HF, Kimi Code CLI, BenchLM, AA, Vals, Epoch AI, Cursor, OpenHarmony, OpenRouter). **Average of 28 qualifying raters: 82.3 Overall.** Queue: 82.3. **Critical findings:** 256K context (1/4 standard); **MCP Mark 81.1% (AMONG STRONGEST IN SERIES) vs GDPval 26.9% norm / AA Agentic 22.5% (WEAKEST) — PROTOCOL FLUENCY WITHOUT EXECUTION RELIABILITY**; GPQA 89.6% (0.4pts under 90%+); SWE-bench 78.2% (Vals); LiveCodeBench 82.1%; 256K context (1/4 standard); NO rate card (placeholder); Modified MIT license (commercial restrictions); scores BELOW generalist siblings K2.6/K3; highspeed profile parked as duplicate; MCP Mark 81.1% (AMONG STRONGEST IN SERIES).
- Reference URLs:
  - [Hugging Face — moonshotai/Kimi-K2.7-Code model card (primary source)](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [BenchLM — Kimi K2.7 Code benchmark scores (26 rows, 53.75/100, #86/1015)](https://benchlm.ai/models/kimi-k2-7-code)
  - [Artificial Analysis — Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code)
  - [Vals AI — Kimi K2.7 Code leaderboard results](https://www.vals.ai/models/kimi_kimi-k2.7-code)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — terminalbench-hard leaderboard](https://artificialanalysis.ai/evaluations/terminalbench-hard)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Cursor evals — CursorBench 3.2](https://cursor.com/cursorbench)
  - [OpenHarmony Bench official leaderboard](https://bench.matrix.openharmony.cn/)
  - [Openrouter — Kimi K2.7 Code benchmarks](https://openrouter.ai/moonshotai/kimi-k2.7-code/benchmarks)
  - See also: `model/kimi-k2.6/` (57.53) and `model/kimi-k3/` (69.46) — generalist siblings, refreshed earlier
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---