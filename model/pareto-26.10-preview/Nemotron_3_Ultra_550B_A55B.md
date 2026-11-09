# Pareto 26.10 Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: Unbiased (`pareto-26.10-preview` / `pareto`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 (GA, out of preview) — **COMPOSITE ROUTER (NOT A CHECKPOINT)**
- **Short description:** **Unbiased's blended AI model — a composite router that selects frontier/open models per request and blends outputs.** Scores measure a routing policy, not a set of weights; will drift when underlying pool changes. **BenchLM: UNRANKED (only 3 source-displayable rows, no overall score).** **ONLY 4 BENCHMARKS EXIST PUBLICLY (ALL VENDOR-RUN PRELIMINARY).** **GA product shipped Oct 2026 as `pareto` (folder name `-preview` now historical).**
- **Provider / access:** Unbiased API (`pareto`); SurfMind, CloudPrice, token.app, modelcompare.dev, runfreetools, lmmarketcap track it. **No OpenCode Zen route found.**
- **Release / knowledge:** 2026-10-01 release (preliminary runs); **"Pareto 26.10 is out of preview"** per model card; **knowledge cutoff: not disclosed.**
- **IDs:** `pareto` (Unbiased API). **No Free ID found.** No OpenCode Zen route.
- **Context window:** **1M TOKENS REPORTED BY 5 INDEPENDENT TRACKERS** (SurfMind, CloudPrice, token.app, modelcompare.dev, runfreetools) — **BUT NOT STATED BY UNBIASED'S OWN MODEL CARD** (BenchLM records "N/A"). Max output 128K (SurfMind). **Treat 1M as third-party reporting.**
- **Modalities:** Text + image in; text out (Unbiased card + SurfMind). **NO MULTIMODAL, AUDIO OR VIDEO INPUT.** Tool calling, structured outputs, reasoning.
- **Pricing (as of 2026-11-08):** **$0.80 in / $0.03 cached / $3.20 out per 1M** (Unbiased card; corroborated by CloudPrice, token.app, lmmarketcap, modelcompare.dev). **COST PER TASK: DeepSWE $0.24, TB4.0 $0.48, HLE text-only $0.008 — EXCEPTIONAL VALUE.** No free tier.
- **Architecture:** **COMPOSITE ROUTER/BLEND** — proprietary; selects frontier/open models per request, blends outputs. No parameter count (third-party claims 123B dense, unconfirmed).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Unbiased sources. **Average of 24 qualifying raters: 84.5 Overall** (Tool 81.7, Reasoning 88.6, Context 94.7, Multimodal 71.1, Coding 85.8). Queue: 84.5. Step 5 Preview: 74. GLM 5.3 Flash: 76. My original: 55. **COMPOSITE ROUTER; 4 BENCHMARKS ONLY (ALL VENDOR-RUN); UNRANKED ON BENCHLM.**

Agent / tool use:

- Terminal-Bench 4.0: **50.8% at $0.48/task** (vendor, Unbiased preliminary) — **4th of 7 on score** (behind Sonnet 5.5 70.6%, GPT-6 Astra 59.6%, GPT-6.1 Sol 56.1%, Fable 5.1 55.1%; ahead of DeepSeek V4.1 Flash 26.8%, GPT-6 Luna 12.6%) (Step 5 / GLM)
- DeepSWE v1.1: **69.9% at $0.24/task** (vendor) — on cost frontier but **below GPT-6.1 Sol (75.2%), GPT-6 Astra (74.0%), Fable 5 (70.0%), own predecessor Pareto 26.9 (70.0%)** (Step 5 / GLM)
- **NO τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Claw-Eval, SWE-bench Verified, SciCode, LiveCodeBench, Vibe Code Bench, CritPt, MRCR, AA-LCR, MMMU-Pro, AA INTELLIGENCE INDEX, COMPOSITE MEASUREMENT** (Step 5 / GLM) — **ALL BUT 4 BENCHMARKS ABSENT**

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (vendor, Unbiased preliminary via BenchLM) — **clears 90%+ frontier** (GLM / Step 5)
- HLE text-only: **49.9% at $0.008/task** (vendor) — **clears 40%+ ref** (Step 5 / GLM)
- **HLE / LCR / MLCR / CritPt / AA INTELLIGENCE INDEX / AA-OMNISCIENCE / ARC-AGI / MRCR / FRONTIER MATH: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **ALL REASONING REFS EXCEPT GPQA/HLE ABSENT**
- Unbiased caveats: results "may change before final publication"; comparators "not independently validated"; "denominators and cost methodology require confirmation"; competitor points "not directly comparable" (Step 5)

Coding:

- DeepSWE v1.1: **69.9% at $0.24/task** (vendor) — **on cost frontier but below GPT-6.1 Sol (75.2%), GPT-6 Astra (74.0%), Fable 5 (70.0%), Pareto 26.9 (70.0%)** (Step 5 / GLM)
- **SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, AA-SciCode, AA Coding Index, FrontierCode: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- Caveat: DeepSWE 69.9% on fuller set than 30-task-slice comparators (Step 5)

Multimodal:

- **NO MULTIMODAL BENCHMARKS** — MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench, Design Arena: **ALL ABSENT** (GLM / Step 5)
- Text + image in; text out (Unbiased card + SurfMind). **NO VIDEO/AUDIO INPUT.** (GLM / Step 5)

Long context:

- **1M TOKENS REPORTED BY 5 TRACKERS** (SurfMind, CloudPrice, token.app, modelcompare.dev, runfreetools) — **MAX OUTPUT 128K** (SurfMind) (Step 5)
- **BUT NOT STATED BY UNBIASED'S MODEL CARD** (BenchLM "N/A") (Step 5)
- **NO MRCR / RULER / GRAPHWALKS / AA-LCR VERIFIED** (GLM / Step 5)
- Directory ninja.si claims 123B dense / 256K window — **UNRESOLVED DISCREPANCY** (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 24 qualifying raters = **84.5 Overall** (Tool 81.7, Reasoning 88.6, Context 94.7, Multimodal 71.1, Coding 85.8). Queue: 84.5. Step 5 Preview: 74. GLM 5.3 Flash: 76. My original: 55. **COMPOSITE ROUTER; 4 VENDOR BENCHMARKS ONLY; UNRANKED ON BENCHLM; 30-TASK SLICE CAVEAT.**

- **Tool use: 62/100.** (was 60) TB 4.0 **50.8% at $0.48/task (4th of 7)**; DeepSWE **69.9% at $0.24/task (cost frontier)**. **Capped by:** TB 4.0 trails Sonnet 5.5/GPT-6 Astra/GPT-6.1 Sol/Fable 5.1; **NO τ³/GDPval/OSWorld/MCP-Atlas/Claw-Eval** — 2 of 3 frontier refs unmeasured; DeepSWE fuller set than 30-task-slice comparators (flattering).
- **Reasoning: 75/100.** (was 75) GPQA Diamond **92.4% (clears 90%+)**; HLE text-only **49.9% (clears 40%+)**; **cost/task $0.008 (50x cheaper than nearest)**. **Capped by:** ONLY 2 REASONING DATA POINTS (both self-run); NO AA Index, CritPt, MRCR, HLE (vendor), LCR, ARC-AGI, FrontierMath, MMLU-Pro — **reliability entirely unmeasured**; HLE 49.9% is 5th of 7 in Unbiased's own table despite 200x cost advantage.
- **Context window: 95/100.** (was 50) **1M REPORTED BY 5 INDEPENDENT TRACKERS** (SurfMind, CloudPrice, token.app, modelcompare.dev, runfreetools); max output 128K. **Held at tier floor: Unbiased card doesn't state window (BenchLM N/A); NO MRCR/RULER/GraphWalks/AA-LCR VERIFIED; 256K directory claim UNRESOLVED.**
- **Multimodal: 62/100.** (was 15) Text + image in; text out. **Scored at +image-in band ceiling (60-70) on modality spec only.** **Capped by:** ZERO MULTIMODAL EVIDENCE — no MMMU-Pro, Chartography, document/perception benchmarks; NO video/audio input; modality list = Unbiased card + SurfMind only.
- **Coding: 78/100.** (was 75) DeepSWE **69.9% at $0.24/task (cost frontier)**; trails GPT-6.1 Sol 75.2%, GPT-6 Astra 74.0%, Fable 5 70.0%, Pareto 26.9 70.0%; **NO SWE-V/Pro/LCB/AA-SciCode/Coding Index/FrontierCode** — 85%, 74%, 70%, 55% refs unmeasured. DeepSWE on fuller set than 30-task-slice comparators (flattering).
- **Cost efficiency: 94/100.** (was 50) **$0.80/$3.20 per 1M (cheapest in batch)**; cached $0.03; **COST PER TASK: DeepSWE $0.24, TB4.0 $0.48, HLE $0.008 — ON PARETO FRONTIER FOR ALL 3**. **EXCEPTIONAL VALUE.** Held at 94 (not 100): paid-only preview; long-term pricing stability unknown; no free tier.
- **Overall Score: 74/100.** (was 55) Half-up mean of (62 + 75 + 95 + 62 + 78) / 5 = 372 / 5 = 74.4 → **74**. **Matches Step 5 Preview (74); below queue (84.5), average of 24 qualifying raters (84.5).** Best-fit: **OUTSTANDING COST-EFFICIENCY PICK for agentic coding/terminal work** — $0.24-0.48/task on Pareto frontier; **BUT NOT A CAPABILITY LEADER** — GPT-6.1 Sol, GPT-6 Astra, Sonnet 5.5, Fable 5.1 beat it on at least one scored benchmark. **4 VENDOR BENCHMARKS ONLY (ALL SELF-RUN); UNRANKED ON BENCHLM; NO INDEPENDENT EVIDENCE.** Also: folder name `-preview` now historical — product shipped as `pareto` Oct 2026.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 74), GLM 5.3 Flash (2026-11-05, Overall 76) + official Unbiased sources (Pareto 26.10 model card, preliminary results, cost-frontier charts, SurfMind, CloudPrice, token.app, modelcompare.dev). **Average of 24 qualifying raters: 84.5 Overall.** Queue: 84.5. **Critical findings:** COMPOSITE ROUTER (NOT A CHECKPOINT); **ONLY 4 VENDOR-RUN BENCHMARKS**; UNRANKED ON BENCHLM (3 rows, no overall); TB 4.0 50.8% (4th of 7); DeepSWE 69.9% ($0.24/task, cost frontier); GPQA 92.4%; HLE 49.9% ($0.008/task, 200x cheaper); **NO INDEPENDENT EVIDENCE**; Unbiased caveats: results may change, comparators not independently validated, 30-task slice caveat; 1M window reported by 5 trackers but not by Unbiased; NO MRCR/AA-LCR/ARC-AGI/CritPt/MRCR/AA Index/Omniscience/AA Agentic Index; cost per task exceptional ($0.008-0.48); folder `-preview` now historical (product shipped as `pareto` Oct 2026).
- Reference URLs:
  - [Unbiased — Pareto 26.10 model card (benchmarks, cost per task, pricing, release notes)](https://unbiased.ai/model-card/)
  - [Unbiased — Pareto 26.10 preliminary results and trade-off frontier charts](https://unbiased.ai/)
  - [BenchLM — Pareto 26.10 Preview (3 source-displayable rows, unranked)](https://benchlm.ai/models/pareto-26-10-preview)
  - [SurfMind — Pareto 26.10 Preview pricing, context & benchmarks (archived)](https://surfmind.ai/models/unbiased/pareto-26.10-preview)
  - [CloudPrice — Pareto 26.10 Preview pricing & specs](https://cloudprice.net/models/unbiased-pareto-26-10-preview)
  - [token.app — Pareto 26.10 pricing, context & benchmarks](https://token.app/model/pareto-26.10-preview)
  - [Benchable.ai — Pareto 26.10 Preview model details & benchmarks](https://www.benchable.ai/models/unbiased/pareto-26.10-preview-20260929)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---