# GPT-5.3 Codex Spark — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark — **THINNEST EVIDENCE BASE IN SERIES** (BenchLM: 1 of 753 benchmarks, MazeBench 0%, **UNRANKED**; queue 65.6 = **ROSTER ARTEFACT**)
- **Short description:** Cerebras-accelerated distilled variant of GPT-5.3 Codex (~1,000+ tok/s, ~15× standard Codex). **ONLY MEASURED BENCHMARK: MazeBench 0%** (the floor). **ALL OTHER DIMENSIONS ENTIRELY UNMEASURED** (no SWE-bench, no GPQA, no HLE, no LiveCodeBench, no τ², no agentic, no multimodal). **Context window conflict: BenchLM 256K vs verified 128K** (CloudPrice/Turing College). **Text-only preview** (repo meta). **Proprietary; no OpenAI rate card; Zen third-party $1.75/$14.**
- **Provider / access:** **PROPRIETARY.** ChatGPT Pro research preview + design-partner API; **OpenCode Zen (`opencode/gpt-5.3-codex-spark`, Responses API, paid $1.75/$14)**. **NO PUBLIC OPEN AI PER-TOKEN RATE CARD.** No Free tier.
- **Release / knowledge:** 2026-02-12 launch (Turing College; GPT-5.3 generation); **knowledge cutoff: NOT DISCLOSED.**
- **IDs:** `gpt-5.3-codex-spark` (OpenAI); `opencode/gpt-5.3-codex-spark` (Zen); `gpt-5-3-codex-spark` (BenchLM canonical).
- **Context window:** **CONFLICT: BenchLM 256K vs VERIFIED 128K** (CloudPrice API, Turing College) — **128K PRIMARY** (independent); max output 32K (BenchLM) / unverified. **256K = 1/4 OF 1M STANDARD; 128K = 1/8.** Coherence loss reported toward window end (vs full Codex 5.3 400K+).
- **Modalities:** **TEXT IN → TEXT OUT ONLY** (repo meta: text-only preview). **NO IMAGE/AUDIO/VIDEO INPUT** (CloudPrice flags image but unverified). Tool calls yes; structured outputs flagged unreliable (missing fields, phantom params).
- **Pricing (as of 2026-11-08):** **NO PUBLIC OPEN AI RATE CARD** (research preview / design-partner only). **Only figure: Zen third-party $1.75 in / $14.00 out per 1M** (cached $0.175, 90% discount). **NO FREE/SELF-HOST ROUTE** (proprietary). **Cost based on third-party access, not vendor price.**
- **Architecture:** Proprietary (OpenAI); **distilled variant of GPT-5.3 Codex accelerated on Cerebras WSE-3**; ~1,000+ tok/s (~15× standard Codex 65-70 tok/s); parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash re-research 2026-11-07) + BenchLM + official sources. **Average of 19 qualifying raters: 65.6 Overall** (Tool 73.3, Reasoning 70.1, Context 69.4, Multimodal 37.7, Coding 78.0). Queue: 65.6 (**ROSTER ARTEFACT — BENCHLM UNRANKED**). Step 5 Preview: 50. GLM 5.3 Flash: 58.2. My original: 65.6 (queue). **THINNEST EVIDENCE BASE IN SERIES: 1 BENCHMARK ROW (MazeBench 0%), ALL OTHER DIMENSIONS UNMEASURED, CONTEXT CONFLICT 256K VS 128K, TEXT-ONLY, PROPRIETARY, NO VENDOR RATE CARD.**

Agent / tool use:

- MazeBench ASCII: **0%** (MazeBench AI leaderboard, gems metric, run 2026-07-19) — **ONLY MEASURED BENCHMARK, VALUE = FLOOR** (BenchLM / Step 5 / GLM)
- Terminal-Bench / Tau2-Bench / Tau3-Bench / GDPval-AA / Claw-Eval / MCP-Atlas / OSWorld / BrowseComp / Toolathlon / ALE / JobBench / AA Agentic Index: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- Tool-call reliability: **UNRELIABLE STRUCTURED OUTPUT FORMATTING** — missing JSON fields, phantom parameters (Turing College / GLM); sequential-chain tests: **drops critical constraints after 6–8 steps** (vs 12+ for full Codex 5.3) (GLM)
- **ALL THREE AGENTIC FRONTIER REFS UNMEASURED** (GLM / Step 5)

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / AA-LCR / MRCR / ARC-AGI / AIME / MATH / MMLU-Pro / AA Intelligence Index / AA-Omniscience: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- Reasoning depth: **DRIFTS AFTER 6–8 STEPS** in sequential-chain tests vs 12+ for full Codex 5.3 (Turing College / GLM)
- **COMPOSITE DEPTH, RELIABILITY, AND 3 OF 5 REASONING REFS ENTIRELY UNMEASURED** (Step 5)

Coding:

- SWE-Bench Pro: **~56%** (Turing College) vs full Codex 5.3 **~72%** — **~16-POINT DROP** (GLM)
- Snake game test (Turing College): working version in **50 seconds** (~90% complete) but **one-pixel collision blind spot + memory-leaking restart** — full Codex 5.3: 6 minutes, correct first pass (GLM)
- SWE-bench Verified / LiveCodeBench / AA-SciCode / AA Coding Index / DeepSWE / Vibe Code Bench / Terminal-Bench / FrontierCode / React Native Evals / SWE-Rebench: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **ALL THREE CODING FRONTIER REFS UNMEASURED** (Step 5)
- **Sibling non-import: GPT-5.3 Codex (BenchLM 62.87) named as comparison point, EXPLICITLY NOT MERGED** (Step 5 / GLM)

Multimodal:

- **TEXT IN → TEXT OUT ONLY** — **TEXT-ONLY PREVIEW** (repo meta / Step 5)
- Image input flagged by CloudPrice but **UNVERIFIED BY ANY BENCHMARK** (GLM)
- MMMU-Pro / CharXiv / ExtractBench / BabyVision / ZeroBench / OmniDocBench / MathVision / Design Arena: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Long context:

- **CONTEXT CONFLICT: BenchLM 256K vs VERIFIED 128K** (CloudPrice / Turing College) — **128K PRIMARY** (GLM / Step 5)
- **128K tokens = 1/8 OF 1M STANDARD** (100K-200K band); coherence loss toward window end for large codebases (vs full Codex 5.3 400K+) (GLM)
- **NO LONG-CONTEXT RETRIEVAL REPORTED** (no AA-LCR, MRCR, GraphWalks, RULER) (GLM / Step 5)

Token speed:

- **1,000+ tok/s** (Cerebras-powered, ~15× standard Codex 5.3 ~65-70 tok/s; OpenAI/Cerebras via Turing College) (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 19 qualifying raters = **65.6 Overall** (Tool 73.3, Reasoning 70.1, Context 69.4, Multimodal 37.7, Coding 78.0). Queue: 65.6 (**ROSTER ARTEFACT — BENCHLM UNRANKED**). Step 5 Preview: 50. GLM 5.3 Flash: 58.2. My original: 65.6 (queue). **THINNEST EVIDENCE BASE IN SERIES: 1 BENCHMARK ROW (MazeBench 0%), ALL OTHER DIMENSIONS UNMEASURED, CONTEXT CONFLICT, TEXT-ONLY, PROPRIETARY, NO VENDOR RATE CARD.**

- **Tool use: 50/100.** (was 50) **SCORED AT METHODOLOGY'S NEUTRAL FLOOR FOR "DIMENSION CLAIMED, ENTIRELY UNMEASURED", DOCKED BY ONLY MEASURED ROW = MAZEBENCH 0%.** MazeBench 0% is the ONLY agentic figure; ALL other agentic benchmarks (TB all harnesses, τ²/τ³, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index) have NO FIGURE. Tool-call formatting UNRELIABLE (missing JSON fields, phantom params); constraint-dropping after 6-8 steps. BenchLM Reasoning classification implies tool substrate; sibling Codex 62.87. **NOT ABOVE 50: unmeasured claim must not score as demonstrated; single measured row = 0%.**
- **Reasoning: 50/100.** (was 50) **SCORED AT METHODOLOGY'S NEUTRAL FLOOR FOR "DIMENSION CLAIMED, ENTIRELY UNMEASURED."** NO reasoning benchmark exists (GPQA, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience). BenchLM classifies Reasoning = vendor capability claim. **NOT ABOVE 50: 5 of 5 reasoning refs unmeasurable.** Drift after 6-8 steps vs 12+ for full Codex.
- **Context window: 70/100.** (was 65) **VERIFIED 128K (100K-200K BAND, MID-BAND)** vs BenchLM 256K conflict. 128K = 1/8 of 1M standard. Coherence loss toward window end. **NO AA-LCR/MRCR/GraphWalks/RULER.** Held mid-band (not ceiling): verified 128K with documented coherence loss.
- **Multimodal: 15/100.** (was 15) **TEXT IN → TEXT OUT ONLY — TEXT-ONLY PREVIEW** (repo meta). Methodology: text-only = 10-20. CloudPrice image flag UNVERIFIED.
- **Coding: 50/100.** (was 50) **SCORED AT NEUTRAL FLOOR FOR "DIMENSION CLAIMED, ENTIRELY UNMEASURED", DOCKED BY MAZEBENCH 0%.** Codex family identity = strongest unmeasured coding claim. **NO CODING BENCHMARK EXISTS** (SWE-V/Pro, LCB, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code, TB, FrontierCode, React Native, SWE-Rebench). Turing College SWE-Pro ~56% (~16pt drop from full Codex 72%) is the ONLY coding signal but from non-standard source. **NOT ABOVE 50: 3 of 3 coding frontier refs unmeasured; sibling Codex 62.87 EXPLICITLY NOT MERGED.**
- **Cost efficiency: 70/100.** (was 70) **NO PUBLIC OPEN AI RATE CARD** (research preview / design-partner). Only figure: **Zen third-party $1.75/$14 per 1M** (premium metered rate) → methodology ~$1.75/$14 → ~70 band. **EXPLICITLY ACCESS-BASED INFERENCE AGAINST THIRD-PARTY ROUTE, NOT VENDOR PRICE.** No free/self-host (proprietary). Held at 70.
- **Overall Score: 47/100.** (was 65.6) Half-up mean of (50 + 50 + 70 + 15 + 50) / 5 = 235 / 5 = 47 → **47** (methodology floor on 4/5 dims). **FAR BELOW QUEUE (65.6), AVERAGE OF 19 QUALIFYING RATERS (65.6).** Best-fit: **THINNEST EVIDENCE BASE IN SERIES** — **ONLY MEASURED BENCHMARK: MAZEBENCH 0%** (the floor); **ALL OTHER DIMENSIONS ENTIRELY UNMEASURED**; context conflict 256K vs 128K; text-only; proprietary; no vendor rate card; tool-call unreliable; reasoning drift 6-8 steps. **Queue 65.6 = ROSTER ARTEFACT (BENCHLM UNRANKED WITH 1 OF 753 BENCHMARKS).** Recommendation: **NOT A PRODUCT — A PREVIEW WITH NO EVIDENCE.** Prefer measured family tier **GPT-5.3 Codex (62.87)** or any successor refreshed earlier; this variant should not be chosen on family name alone.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 50), GLM 5.3 Flash re-research (2026-11-07, Overall 58.2) + BenchLM (1 of 753 benchmarks, MazeBench 0%, unranked), Turing College, CloudPrice, OpenCode Zen. **Average of 19 qualifying raters: 65.6 Overall.** Queue: 65.6 (**ROSTER ARTEFACT**). **Critical findings:** THINNEST EVIDENCE BASE IN SERIES; **ONLY 1 BENCHMARK ROW (MAZEBENCH 0%)**; ALL 4 OTHER QUALITY DIMS ENTIRELY UNMEASURED; CONTEXT CONFLICT 256K (BENCHLM) VS 128K (VERIFIED); TEXT-ONLY; PROPRIETARY; NO VENDOR RATE CARD; TOOL-CALL UNRELIABLE; REASONING DRIFT 6-8 STEPS; QUEUE 65.6 = ROSTER ARTEFACT (BENCHLM UNRANKED); SIBLING NON-IMPORT: GPT-5.3 CODEX 62.87 EXPLICITLY NOT MERGED.
- Reference URLs:
  - [BenchLM — GPT-5.3-Codex-Spark (1 of 753 benchmarks, MazeBench 0%, unranked)](https://benchlm.ai/models/gpt-5-3-codex-spark)
  - [MazeBench AI leaderboard — ASCII mode, tools=0, gems metric (the single source row)](https://mazebench.com/leaderboard/ai?mode=ascii&tools=0&metric=gems&run=2026-07-19T16-50-52-392-aebb45)
  - [Turing College — GPT-5.3 Codex vs Spark comparison (SWE-Pro 56% vs 72%, snake game 50s vs 6min, 1000+ tok/s)](https://turingcollege.com/)
  - [CloudPrice API — GPT-5.3-Codex-Spark 128K context](https://cloudprice.ai/)
  - [OpenCode Zen — model list and Console pricing ($1.75/$14.00 third-party route)](https://opencode.ai/docs/zen/)
  - [Repo curated meta — `model/gpt-5.3-codex-spark/meta.json` (256K/32K, text-only preview, no public rate)](model/gpt-5.3-codex-spark/meta.json)
  - See also: [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.87) — the measured family tier this report recommends preferring
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---