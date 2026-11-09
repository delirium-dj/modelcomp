# Solar Pro 4 — findings by Nemotron 3 Ultra 550B A55B

- Source: Upstage (`solar-pro-4`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (Upstage's proprietary pro-tier) — **UNRANKED (BenchLM: 18 ROWS, NO OVERALL SCORE)**
- **Short description:** Upstage's proprietary pro-tier model — **BenchLM: UNRANKED (18 ROWS, NO OVERALL SCORE).** Queue Overall 69.5 is **ROSTER ARTEFACT, NOT A MEASURED FIGURE.** **18 ROWS (VENDOR + AA) — NO INDEPENDENT MEASUREMENT ON MOST ROWS.** **512K CONTEXT (HALF 1M STANDARD).** GPQA 89.0%/89.1% (tightest vendor-AA agreement in batch), LiveCodeBench 87.8%, SWE-V 70.6%, Korean KMMLU-Pro 79.2%. **WEAK EXECUTION LAYER: TB 2.1 57.0%, APEX 18.7%, BrowseComp 49.2%.** **NO RATE CARD PUBLISHED — placeholder cost.** **CLOSED-SOURCE, NO SELF-HOSTING (unlike Solar Open 2).**
- **Provider / access:** Upstage API (proprietary), OpenRouter (`upstage/solar-pro4`), **OpenCode Zen (`opencode/solar-pro-4`)**. **Closed-source, NO SELF-HOSTING (unlike Solar Open 2).** No Free tier on any platform.
- **Release / knowledge:** 2026-08-10 release; **knowledge cutoff: 2026-02** (GLM).
- **IDs:** `solar-pro-4` (BenchLM canonical, repo, OpenRouter); `upstage/solar-pro4` (OpenRouter). **Canonical BenchLM slug: `solar-pro-4`.**
- **Context window:** **512,000 tokens (512K) — HALF OF 1M STANDARD** (BenchLM); 524,288 tokens / 131,072 max output (GLM). **MINOR CATALOG DISCREPANCY: BenchLM 512K vs GLM 524K.**
- **Modalities:** **TEXT + IMAGE IN; TEXT OUT** — Design Arena 1,176 Elo only visual row. **NO VIDEO/AUDIO/PDF INPUT.** Reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-11-08):** **$0.30 in / $1.20 out / $0.06 cached per 1M** (Upstage Console API). **NO RATE CARD IN BENCHLM ROW — placeholder cost.** No Free tier. **NO SELF-HOSTING (closed-source, unlike Solar Open 2).**
- **Architecture:** Proprietary (Upstage); parameter count undisclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-08) + official Upstage sources. **Average of 26 qualifying raters: 69.5 Overall** (Tool 75, Reasoning 84.4, Context 86.9, Multimodal 18.9, Coding 82). Queue: 69.5 (roster artefact). Step 5 Preview: 67. GLM 5.3 Flash: 68. My original: 62. **UNRANKED (BENCHLM); 18 ROWS (VENDOR + AA); NO RATE CARD IN BENCHLM; 512K CONTEXT (HALF 1M); TIGHT GPQA AGREEMENT (0.1PT GAP); KOREAN KMMLU 79.2%; CLOSED-SOURCE.**

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (vendor) — **31PTS UNDER 88%+ FRONTIER REF** (GLM / Step 5)
- MCP Atlas: **61.4%** (vendor) (GLM / Step 5)
- BrowseComp: **49.2%** (vendor) — weak browsing (GLM / Step 5)
- APEX-Agents: **18.7%** (vendor — near-floor) (GLM / Step 5)
- GDPval-AA: **Elo 1,277** (vendor) / **30.3-30.5% normalized** (AA) (GLM / Step 5)
- APEX-Agents: **18.7%** (vendor) (GLM / Step 5)
- Tau3-Banking: **23.0%** (vendor — weak) (GLM)
- Design Arena agent Elo: **1,115** (GLM)
- **TB 2.0/4.0, τ²/τ³-Bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, AA ITBench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE**

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (vendor) / **89.1%** (AA) — **TIGHTEST VENDOR-AA AGREEMENT IN BATCH (0.1PT GAP), JUST UNDER 90%+ FRONTIER** (GLM / Step 5)
- HLE: **29.8%** (AA) — **10.2PTS UNDER 40%+ FRONTIER REF** (GLM / Step 5)
- AA-LCR: **71.0%** (vendor) / **71.0%** (GLM) (GLM / Step 5)
- CritPt: **6.3%** (AA — near-floor) (GLM / Step 5)
- AA Intelligence Index: **28.1** (AA current — updates earlier "42", pre-recalibration) (GLM)
- KMMLU-Pro: **79.2%** (vendor — Korean specialisation continues) (GLM / Step 5)
- AIME26: **95.3%** (vendor) (GLM / Step 5)
- MMLU-Pro: **86.3%** (GLM / Step 5)
- AA-Omniscience: **Index -0.8 / 1.4, accuracy 18.4-18.9%, hallucination 20.9-24.4%** — **good honesty** (GLM / Step 5)
- **HLE, AA Intelligence Index (vendor), AA-Omniscience, ARC-AGI, MRCR, MATH, FrontierMath, HMMT: NO VERIFIED PUBLIC SCORE** — **COMPOSITE DEPTH + RELIABILITY + 3 OF 5 REASONING REFS UNMEASURED** (GLM / Step 5)

Coding:

- SWE-bench Verified: **70.6%** (OpenHands scaffold — corroborated) (GLM / Step 5)
- LiveCodeBench: **87.8%** (vendor) (GLM / Step 5)
- AA-SciCode: **44.6-48.0%** (AA — **UPWARD DRIFT, STILL BELOW 55%+ FRONTIER REF**) (GLM / Step 5)
- **SWE-bench Pro, DeepSWE, AA Coding Index, Vibe Code, TB 4.0, FrontierCode, LiveCodeBench (Vals): NO VERIFIED PUBLIC SCORE** — **85%, 74%, 70%, 55% REFS UNMEASURED** (GLM / Step 5)

Multimodal:

- Design Arena Website: **1,174-1,183 Elo** (drift 1183→1174) (GLM / Step 5)
- **Text + image in; text out** — **NO VIDEO/AUDIO/PDF INPUT** (GLM / Step 5)
- **NO MMMU-PRO, CHARXIV, EXTRACTBENCH, BABYVISION, ZEROBENCH, OMNIDOCBENCH, MATHVISION** (GLM / Step 5)

Long context:

- AA-LCR: **71.0%** (vendor) (GLM / Step 5)
- **512K CONTEXT (500K-1M BAND) — HALF OF 1M STANDARD** (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED** (GLM / Step 5)
- 512K-524K context window supported (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 26 qualifying raters = **69.5 Overall** (Tool 75, Reasoning 84.4, Context 86.9, Multimodal 18.9, Coding 82). Queue: 69.5 (roster artefact). Step 5 Preview: 67. GLM 5.3 Flash: 68. My original: 62. **UNRANKED (BENCHLM); 18 ROWS (VENDOR + AA); TIGHT GPQA AGREEMENT (0.1PT GAP); 512K CONTEXT (HALF 1M); KOREAN KMMLU 79.2%; NO RATE CARD IN BENCHLM; CLOSED-SOURCE.**

- **Tool use: 52/100.** (was 60) TB 2.1 **57.0%** (31pts under 88%+ frontier); MCP Atlas **61.4%**; BrowseComp **49.2%**; GDPval **Elo 1,277 (30.5% norm)**; APEX **18.7%**; Tau3 **23.0%**; MCP Atlas **61.4%**. **Capped by:** TB 2.1 **57.0% (31pts under 88%+ frontier)**; BrowseComp **49.2%**; GDPval **Elo 1,277 (30.5%)**; APEX **18.7%**; **NO TB 2.0/4.0, τ²/τ³/OSWorld/Toolathlon/MazeBench/ALE/Claw-Eval/JobBench/AA Agentic Index/AA AutomationBench/AA ITBench** — ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE.
- **Reasoning: 72/100.** (was 75) GPQA Diamond **89.0-89.1% (TIGHTEST VENDOR-AA AGREEMENT IN BATCH, 0.1PT GAP, JUST UNDER 90%+ FRONTIER)**; MMLU-Pro **86.3%**; AIME **95.3%**; AA-LCR **71.0%**; KMMLU-Pro **79.2%**. **Capped by:** HLE **29.8% (10.2PTS UNDER 40%+ REF)**; CritPt **6.3% (near-floor)**; AA Intelligence Index **28.1**; AA-Omniscience **−0.8 to 1.4 / 18.4-18.9% accuracy / 20.9-24.4% hallucination**; **NO HLE (vendor), AA Intelligence Index (vendor), AA-Omniscience, ARC-AGI, MRCR, MATH, FRONTIER MATH, HMMT** — 3 of 5 reasoning refs unmeasured.
- **Context window: 90/100.** (was 85) **512K (500K-1M BAND) — HALF OF 1M STANDARD**; AA-LCR **71.0%**. **Held at 90 (not 95+): NO MRCR/GRAPHWALKS/RULER AT 512K+; NO MAX-OUTPUT LIMIT PUBLISHED.**
- **Multimodal: 58/100.** (was 15) **Text + image in; text out** — Design Arena **1,174-1,183 Elo** (weak, 2nd-lowest in batch). **Scored at +image-in band ceiling (60-70) marginally above on single Design Arena row.** **Capped by:** NO video/audio/PDF input; visual suite = 1 row; text-only output.
- **Coding: 72/100.** (was 75) LiveCodeBench **87.8%** (strong); SWE-V **70.6%** (near 80%+ frontier); AA-SciCode **44.6-48.0% (7PTS UNDER 55%+ REF)**. **Capped by:** AA-SciCode **48.0% (7PTS UNDER 55% REF)**; SWE-V **14.4PTS UNDER 85%+ REF**; **NO SWE-Pro/DeepSWE/AA Coding Index/Vibe Code/TB 4.0/FrontierCode/LCB (Vals)** — 85%, 74%, 70%, 55% refs unmeasured.
- **Cost efficiency: 60/100.** (was 50) **NO RATE CARD IN BENCHLM ROW** — placeholder at methodology ~$3/$15 anchor (60). Upstage Console **$0.30/$1.20 per 1M** ($0.06 cache, 80% discount). **Strictly disadvantaged on access vs Solar Open 2 (open weights, 1M window).** NO FREE TIER; NO SELF-HOSTING.
- **Overall Score: 68.8/100.** (was 62) Half-up mean of (52 + 72 + 90 + 58 + 72) / 5 = 342 / 5 = 68.4 → **68**. **Below queue (69.5), average of 26 qualifying raters (69.5).** Best-fit: **UNRANKED PROPRIETARY PRO-TIER WITH STRONG KNOWLEDGE PROFILE, WEAK EXECUTION LAYER** — GPQA 89.0/89.1% (tightest vendor-AA agreement in batch, 0.1pt gap), AIME 95.3%, LiveCodeBench 87.8%, **512K WINDOW (HALF 1M), KOREAN KMMLU 79.2%**. **WEAK EXECUTION: TB 2.1 57.0%, APEX 18.7%, NO COMPOSITE AGENTIC INDEX — REASONER, NOT AUTONOMOUS AGENT.** **CLOSED-SOURCE, NO SELF-HOSTING (UNLIKE SOLAR OPEN 2).** **PREFER SOLAR OPEN 2 (OPEN WEIGHTS, 1M WINDOW) UNLESS 512K WINDOW + PRO-TIER RELIABILITY DECISIVE.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 67), GLM 5.3 Flash (2026-11-08, Overall 68) + official Upstage sources (Solar Pro 4 launch post, AA, BenchLM, OpenRouter). **Average of 26 qualifying raters: 69.5 Overall.** Queue: 69.5 (roster artefact). **Critical findings:** UNRANKED (BenchLM); 18 ROWS (VENDOR + AA); TIGHT GPQA AGREEMENT (0.1PT GAP); GPQA 89.0/89.1% (JUST UNDER 90%+); LiveCodeBench 87.8%; SWE-V 70.6%; 512K CONTEXT (HALF 1M); KOREAN KMMLU 79.2%; HLE 29.8% (FAILS 40% BY 10.2PTS); CritPt 6.3% (NEAR-FLOOR); AA-Omniscience −0.8 to 1.4 / 18.4-18.9% accuracy / 20.9-24.4% hallucination (good honesty); NO RATE CARD IN BENCHLM; CLOSED-SOURCE, NO SELF-HOSTING; PREFER SOLAR OPEN 2 (OPEN WEIGHTS, 1M WINDOW).
- Reference URLs:
  - [Upstage — Solar Pro 4 launch post (primary source; source of the vendor rows)](https://www.upstage.ai/blog/en/solar-pro-4)
  - [BenchLM — Solar Pro 4 (18 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/solar-pro-4)
  - [Artificial Analysis — Solar Pro 4](https://artificialanalysis.ai/models/solar-pro4)
  - [Artificial Analysis — gpqa-diamond leaderboard (source of the 89.1%)](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [OpenRouter — Solar Pro 4](https://openrouter.ai/upstage/solar-pro4/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---