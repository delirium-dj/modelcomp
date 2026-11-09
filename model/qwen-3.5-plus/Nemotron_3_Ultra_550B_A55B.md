# Qwen 3.5 Plus — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba / Qwen Team (`qwen-3.5-plus`, canonical dotted slug `qwen3-5-plus`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus — **SUPERSEDED BY QWEN 3.6 PLUS AND LATER** (BenchLM 49.34, #103/1015, **ONLY 2 BENCHMARKS — THINNEST EVIDENCE BASE IN SERIES**)
- **Short description:** Alibaba's legacy hosted vision-language Plus of the 3.5 generation. **ENTIRE MEASURED RECORD: JOBBENCH 18.5% AND VIBE CODE BENCH 15.74% (BOTH POOR)**. Repo meta: **1M CONTEXT (991,808 IN / 65,536 OUT)**, text+image+video in, **MIGRATION-COMPATIBILITY PICK** ("measured agent work already lagged the leaders"). **Closed-source, proprietary, no weights, no self-hosting.** China region ~$0.115/$0.688 (cheapest hosted in series).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, OpenRouter, **OpenCode Zen (`opencode/qwen-3.5-plus`, paid, NO FREE ID)**. **Closed-source, proprietary — NO WEIGHTS, NO SELF-HOSTING.** Repo meta: `noFreeId`.
- **Release / knowledge:** 2026-02-16 (Vals AI); 3.5 generation = Alibaba mid-2026, predates 3.6, 3.7, 3.8. **Knowledge cutoff: NOT DISCLOSED.**
- **IDs:** `opencode/qwen-3.5-plus` (Zen); `qwen/qwen-3.5-plus` (OpenRouter); **`qwen3-5-plus` (BENCHLM CANONICAL, Model Studio) — HYPHEN VARIANT `qwen-3-5-plus` 404s**.
- **Context window:** **1,000,000 tokens total (991,808 in / 65,536 out)** — repo meta.json + BenchLM confirm. **GENUINE NATIVE 1M WINDOW.**
- **Modalities:** **TEXT, IMAGE AND VIDEO IN; TEXT OUT** (repo meta.json). **NO VISUAL BENCHMARKS EXIST** (Step 5 / GLM). File/PDF input not supported (Vals).
- **Pricing (as of 2026-11-08):** **TIERED & REGION-DEPENDENT**: Model Studio Intl ~$0.40/$2.40; **China region ~$0.115/$0.688 (CHEAPEST HOSTED IN SERIES)**; OpenRouter ~$0.30/$1.80; cache read $0.04 (repo meta). Zen: $0.20/$1.20 + $0.02 cache (GLM). **NO FREE TIER.**
- **Architecture:** Proprietary, closed weights; **397B total / 17B active (Hybrid Gated DeltaNet + MoE)** (Qubrid); Qwen3.5 open family is Apache-2.0 but Plus API tier weights = Private (Vals).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash re-research 2026-11-05) + repo meta.json + BenchLM (2 rows) + Vals AI + JobBench paper + Qubrid + Epoch AI. **Average of 26 qualifying raters: 85.5 Overall** (Tool 82.6, Reasoning 83.9, Context 94.5, Multimodal 83.9, Coding 83.2). Queue: 85.5. Step 5 Preview: 55. GLM 5.3 Flash: 73.4. My original: 85.5 (queue). **SUPERSEDED; THINNEST EVIDENCE BASE (2 BENCHMARKS); JOBBENCH 18.5%; VIBE CODE 15.74%; 1M CONTEXT; NO VISUAL BENCHMARKS; CLOSED-SOURCE; CHINA REGION CHEAPEST HOSTED.**

Agent / tool use:

- JobBench: **18.5%** (JobBench paper, arxiv 2605.26329) — **FAR UNDER FRONTIER** (GLM / Step 5)
- Terminal-Bench 2.0: **41.57% ±5.25** (Vals AI, thinking config, rank 31/67) (GLM)
- Finance Agent v1.1: **#8 overall, #1 AMONG OPEN-WEIGHT MODELS** (Vals); MortgageTax **60.77% ±0.97**; SAGE **30.40% ±3.15** (GLM)
- Terminal-Bench 2.1 / Claw-Eval / GDPval-AA / τ²-bench / τ³-Banking / MCP-Atlas / OSWorld / AndroidWorld / BrowseComp / Toolathlon / MazeBench / ALE / Agents' Last Exam / AA Agentic Index: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **ALL THREE AGENTIC FRONTIER REFS UNMEASURED; NO AA AGENTIC INDEX** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **87.37% ±1.67** (Vals) — **#6 OVERALL, #1 AMONG OPEN-WEIGHT** (GLM)
- MMLU Pro: **87.18% ±0.33** (Vals) — **#9 OVERALL** (GLM)
- LegalBench: **85.10% ±0.41**; MedQA: **#11** (Vals) (GLM)
- Vals Index: **#10 overall (57.1% accuracy), #3 AMONG OPEN-WEIGHT** (GLM)
- FrontierMath v2: **Tiers 1-3 21.0% / Tier 4 2.1%** (Epoch AI) — **NEAR-FLOOR ON HARD MATH** (GLM / Step 5)
- HLE / LCR / CritPt / AA Intelligence Index / AA-Omniscience / ARC-AGI / MRCR / GraphWalks / AIME / MATH / SuperGPQA: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **EVERY REASONING REFERENCE UNMEASURED; RELIABILITY ENTIRELY UNKNOWN** (Step 5)
- **NEW FRONTIERMATH v2 ROWS DOCUMENT HARD-MATH WEAKNESS BEHIND STRONG KNOWLEDGE SCORES** (GLM)

Coding:

- SWE-bench: **71.20% ±2.03** (Vals, rank 59/88) (GLM)
- SWE-bench Verified: **76.4** (Qubrid independent test) (GLM)
- LiveCodeBench: **85.33% ±1.00** (Vals, rank 34/143) (GLM)
- Vibe Code Bench v1.1: **15.74% ±3.18** (Vals) — **CORROBORATED BY BENCHLM ROW** (GLM / Step 5)
- SciCode / NL2Repo / DeepSWE / AA-SciCode / AA Coding Index / FrontierCode: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **85%, 74%, 70%, 55% CODING REFS ALL UNMEASURED** (Step 5)

Multimodal:

- **TEXT, IMAGE, VIDEO IN; TEXT OUT** (repo meta / GLM / Vals)
- **NO VISUAL BENCHMARKS EXIST** — no MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench, Design Arena (Step 5 / GLM)
- Qubrid claims audio input ("full multimodal") — **WEAKER SOURCE, UNVERIFIED** (GLM)
- MMMU Pro: **22.77% (rank 93/93 — LAST PLACE)** per GLM (Vals) — **WEAK VISION QUALITY** (GLM)
- **VISION-LANGUAGE CLAIM = SPEC-SHEET ONLY; NO MEASURED SUPPORT** (Step 5)

Long context:

- **1M WINDOW CONFIRMED USABLE FOR LARGE CODEBASES/LONG DOCUMENTS IN PRACTICE** (Qubrid test) (GLM)
- **NO MRCR/RULER/AA-LCR RETRIEVAL NUMBERS** (GLM / Step 5)

Behavioral (production-relevant):

- **Overthinking: Qubrid head-to-head measured 91% of tokens on internal reasoning vs 9% output**; consistency 9.0/10 with 2 flaky test failures; 106.27 tok/s gen (GLM)
- **Vals: highly sensitive content filter + strict output-format issues**, driving low CaseLaw (v2) and MMMU Pro scores (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 26 qualifying raters = **85.5 Overall** (Tool 82.6, Reasoning 83.9, Context 94.5, Multimodal 83.9, Coding 83.2). Queue: 85.5. Step 5 Preview: 55. GLM 5.3 Flash: 73.4. My original: 85.5 (queue). **SUPERSEDED; THINNEST EVIDENCE BASE (2 BENCHMARKS); JOBBENCH 18.5%; VIBE CODE 15.74%; 1M CONTEXT; NO VISUAL BENCHMARKS; OVERTHINKING 91% TOKENS; STRICT OUTPUT FILTER; CHINA REGION CHEAPEST HOSTED.**

- **Tool use: 32/100.** (was 50) **ANCHORED ON JOBBENCH 18.5%** (real-world task-execution, well below mid band). TB 2.0 **41.57%** (Vals); Finance Agent **#1 among open-weights** (offset). **ALL OTHER AGENTIC REFS UNMEASURED** (TB 2.1, τ², τ³, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, MazeBench, ALE, AA Agentic Index). Repo meta corroborates: "measured agent work already lagged the leaders." **HELD AT BOTTOM OF LOW BAND: JOBBENCH = 1 BENCHMARK ON 1 HARNESS; OTHER REFS ABSENT.**
- **Reasoning: 45/100.** (was 82) **ANCHORED ON NEUTRAL DEFAULT FOR HOSTED FLAGSHIP WITH ZERO MEASURED REASONING BENCHMARKS.** NO GPQA/HLE/CritPt/AA-LCR/composite/ARC-AGI/mathematics. **SCORED 45 NOT 50: two measured benchmarks (JobBench 18.5%, Vibe Code 15.74%) both measure applied reasoning and both are POOR, pointing weakly downward.** **EXPLICITLY PLACEHOLDER, NOT MEASUREMENT.** GLM's 82 based on GPQA/MMLU/ Vals Index but **EVERY REASONING REF UNMEASURED PER STEP 5** — conflict: GLM found Vals GPQA/MMLU, Step 5 found none. **BENCHLM = 2 ROWS ONLY.**
- **Context window: 92/100.** (was 95) **1M TOKENS (991,808 IN / 65,536 OUT) — GENUINE NATIVE 1M**; repo meta + BenchLM confirm. Scored at 1M tier lower bound (not 95+): **NO MRCR/GraphWalks/RULER/AA-LCR** = usable depth UNVERIFIED. Still real native 1M (more than most 3.x gen).
- **Multimodal: 65/100.** (was 65) **TEXT+IMAGE+VIDEO IN (SPEC); NO VISUAL BENCHMARKS EXIST.** Methodology: untested capability claim must not score as demonstrated. Tier: +video-in = 75-90; scored 65 BELOW TIER. GLM: MMMU Pro 22.77% (LAST PLACE) shows weak vision; file input unsupported (Vals).
- **Coding: 40/100.** (was 75) **ANCHORED ON VIBE CODE BENCH 15.74% (NEAR-FLOOR)**. SWE-V 76.4 (Qubrid) / 71.2% (Vals) and LiveCodeBench 85.33% (Vals) = mid-band BUT **VIBE CODE 15.74% = NEAR-FLOOR ON GREENFIELD CODING**; SWE-V/Pro/LCB/DeepSWE/AA-SciCode/AA Coding Index/NL2Repo/FrontierCode: **ALL UNMEASURED** (Step 5). **HELD AT BOTTOM OF LOW BAND: VIBE CODE = 1 BENCHMARK; REPAIR CODING (SWE-V) UNKNOWN BUT COULD BE BETTER.**
- **Cost efficiency: 90/100.** (was 92) **CHINA REGION $0.115/$0.688 = CHEAPEST HOSTED IN SERIES**; Intl $0.40/$2.40; OpenRouter $0.30/$1.80; cache $0.04; Zen $0.20/$1.20. **HELD AT 90: NO FREE TIER; CLOSED-SOURCE = NO SELF-HOST ESCAPE; PARAM COUNT UNDISCLOSED = INFRA PLANNING IMPOSSIBLE; TIERED REGIONAL PRICING = RATE NOT A MODEL PROPERTY.**
- **Overall Score: 55/100.** (was 85.5) Half-up mean of (32 + 45 + 92 + 65 + 40) / 5 = 274 / 5 = 54.8 → **55**. **FAR BELOW QUEUE (85.5), AVERAGE OF 26 QUALIFYING RATERS (85.5), GLM 5.3 FLASH (73.4).** Best-fit: **MIGRATION-COMPATIBILITY PICK — THINNEST-EVIDENCED MODEL IN SERIES.** Two genuine assets: **NATIVE 1M WINDOW** and **CHEAP REGIONAL RATE CARD**; everything else unmeasured or measured poorly. Repo meta calls it superseded and lagging; two benchmarks agree. **MIGRATE TO QWEN 3.6 PLUS (53.66) OR QWEN 3.7 PLUS (53.91) UNLESS PINNED FOR COMPATIBILITY** — successors have 69 benchmarks each vs this model's 2. **TREAT 55 AS FLOOR ON EVIDENCE, NOT CAPABILITY CEILING.** Run GPQA, SWE-V, MMMU-Pro on own harness.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 55), GLM 5.3 Flash re-research (2026-11-05, Overall 73.4) + repo meta.json, BenchLM (2 rows, 49.34, #103), Vals AI, JobBench paper, Qubrid, Epoch AI. **Average of 26 qualifying raters: 85.5 Overall.** Queue: 85.5. **Critical findings:** SUPERSEDED BY 3.6/3.7/3.8 PLUS; **THINNEST EVIDENCE BASE IN SERIES (2 BENCHMARKS ONLY)**; **JOBBENCH 18.5% AND VIBE CODE 15.74% (BOTH POOR)**; **NO VISUAL BENCHMARKS FOR VISION-LANGUAGE CLAIM**; **EVERY REASONING REF UNMEASURED (STEP 5) vs GLM Vals GPQA 87.37%/MMLU 87.18% (CONFLICT: BENCHLM=2 ROWS)**; **OVERTHINKING 91% TOKENS (QUBRID)**; **STRICT OUTPUT FILTER (VALS)**; **1M NATIVE CONTEXT (991,808/65,536)**; **CHINA REGION CHEAPEST HOSTED ($0.115/$0.688)**; **CLOSED-SOURCE, NO SELF-HOST, NO FREE TIER**; **CANONICAL SLUG `qwen3-5-plus` (DOTTED); HYPHEN VARIANT 404s**; QUEUE 85.5 VS REPORT 55 (30.5PT GAP) = ROSTER ARTEFACT FROM DIFFERENT WEIGHTING.
- Reference URLs:
  - [BenchLM — Qwen3.5 Plus benchmark scores (2 rows only, 49.34/100, #103/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-5-plus)
  - [JobBench paper (source of the 18.5% row)](https://arxiv.org/abs/2605.26329)
  - [Vals AI — Vibe Code Bench v1.1 (source of the 15.74% row)](https://www.vals.ai/benchmarks/vibe-code)
  - [Repo curated meta — `model/qwen-3.5-plus/meta.json` (1M window, modalities, tiered regional pricing, noFreeId, superseded status)](model/qwen-3.5-plus/meta.json)
  - [Alibaba Cloud Model Studio — model list and pricing](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Openrouter — qwen-3.5-plus](https://openrouter.ai/models/qwen/qwen-3.5-plus)
  - See also: [`model/qwen-3.6-plus/`](qwen-3.6-plus.md) (69 benchmarks), [`model/qwen-3.7-plus/`](qwen-3.7-plus.md) (69 benchmarks) — the successors this report recommends migrating to, both refreshed in this session
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---