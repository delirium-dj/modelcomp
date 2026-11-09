# Gemini 3.1 Flash-Lite — findings by Nemotron 3 Ultra 550B A55B

- Source: Google DeepMind (`gemini-3.1-flash-lite`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite — **FOUR GENERATIONS BEHIND** (superseded by 3.5 Flash-Lite 46.87, 3.5 Flash 61.62, 3.6 Flash 62.56, 3.7 Flash 66.49, 3.8 Flash 66.74, 4 Argon 82.29, 4 Carbon 88.79; BenchLM 46.62, #117/1015, 12 benchmarks)
- **Short description:** Google's cheapest 3.x tier — **1M CONTEXT (FRONTIER WINDOW AT FLASH-LITE PRICING)**, **Vibe Code Bench 0.00% (LOWEST IN SERIES)** vs **LiveCodeBench 80.1% (80.1-PT GAP)**. GPQA 81.1% (8.9pts under 90%+ ref), MMLU-Pro 86.2%. **Near-floor agentics** (TB 2.1 34.1%, Gert Labs 38.46%). **Non-Reasoning (BenchLM)**. **NO PUBLIC RATE CARD** (positioned as cheapest 3.x). **Multimodal: text+image in, audio+video per GLM**.
- **Provider / access:** Gemini API, Vertex AI (`gemini-3.1-flash-lite`), AI Studio, Search AI Overviews; **OpenCode Zen (NO FREE ID found by Step 5; GLM reports free tier on AI Studio/Zen)**. Proprietary, closed weights.
- **Release / knowledge:** Preview 2026-03-03; GA 2026-05-07; preview retired 2026-05-25. **Knowledge cutoff: January 2025** (GLM).
- **IDs:** `gemini-3-1-flash-lite` (Google, Zen, BenchLM canonical); `google_gemini-3.1-flash-lite-preview` (Vals).
- **Context window:** **1,000,000 tokens input / 64,000 max output** (BenchLM / GLM) — **FULL FRONTIER WINDOW AT FLASH-LITE PRICING**.
- **Modalities:** **CONFLICT: Step 5 = text+image in; GLM = text+image+audio+video in**. Step 5 (Nov 6): text+image (CharXiv 73.2%, ParseBench 56.66%). GLM (Nov 6 re-research): text+image+audio+video (MMMU-Pro 76.8%, Video-MMMU 84.8%, CharXiv 73.2%). **BenchLM: Non-Reasoning**. Text out. Tool calls yes.
- **Pricing (as of 2026-11-08):** **CONFLICT: Step 5 = NO PUBLIC RATE CARD (scored 82 positioning); GLM = $0.25/$1.50 + audio $0.50 + cache $0.025 (scored 93)**. GLM: 2.5-3.75× 2.5 Flash-Lite's $0.10/$0.40. Free tier on AI Studio (rate-limited). **NO CACHE-READ FIGURE IN STEP 5 SOURCES.**
- **Architecture:** Proprietary, parameters undisclosed ("built on Gemini 3 Pro", natively multimodal reasoning); ~363 tok/s output, ~45% faster gen, ~2.5× shorter TTFT than 2.5 Flash (Google via ai-tldr).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash re-research 2026-11-06) + Google model card + BenchLM + Vals + Epoch + LlamaIndex + JevBench + Gert Labs. **Average of 28 qualifying raters: 77.7 Overall** (Tool 66.5, Reasoning 76.5, Context 88.8, Multimodal 85.6, Coding 71.1). Queue: 77.7. Step 5 Preview: 65. GLM 5.3 Flash: 77.4. My original: 77.7 (queue). **FOUR GENERATIONS BEHIND; Vibe Code Bench 0.00% (LOWEST IN SERIES) vs LiveCodeBench 80.1% (80.1-PT GAP); GPQA 81.1% (8.9PTS UNDER 90%+); 1M CONTEXT; NON-REASONING; MODALITY CONFLICT; PRICING CONFLICT.**

Agent / tool use:

- Gert Labs: **38.46%** (Vals / GLM / Step 5)
- Terminal-Bench 2.1 (Vals): **34.1%** — **53.9 PTS UNDER 88%+ REF** (GLM / Step 5)
- Vibe Code Bench v1.1: **0.00%** (Vals) — **LOWEST IN SERIES** (GLM / Step 5)
- Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **ALL THREE AGENTIC FRONTIER REFS UNMEASURED; NO COMPOSITE** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **81.1% (Vals, independent)** vs **86.9% (Google vendor)** — **5.8PT CONFLICT, BOTH LISTED** (GLM / Step 5)
- MMLU-Pro: **86.2% (Vals)** — respectable (GLM / Step 5)
- MMMLU: **88.9% (Google vendor, prior)** (GLM)
- HLE: **16% (Google launch set)** — **HONEST CAP** (GLM / Step 5)
- FrontierMath v2 Tiers 1-3: **27.7% (Epoch)** — **NEAR-FLOOR** (GLM / Step 5)
- JevBench v1.4: **14.26** / v1.5: **19.58** (GLM / Step 5)
- MMMU-Pro: **76.8%**; Video-MMMU: **84.8%** (Google vendor, prior) (GLM)
- LMArena Elo: **1432** (GLM)
- CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **COMPOSITE DEPTH, RELIABILITY, 3 OF 5 REASONING REFS UNMEASURED** (Step 5)
- **STRONG-EXAM-AGAINST-WEAK-DEPTH PATTERN CONSISTENT WITH NON-REASONING CLASSIFICATION** (Step 5)

Coding — **DEFINING CONTRADICTION**:

- LiveCodeBench: **80.1% (Vals)** / **72% (Google vendor, prior)** — **8.1PT SPREAD** (GLM / Step 5)
- SWE-bench (Vals): **62.8%** — **22.2 PTS UNDER 85%+ TERMINAL REF** (GLM / Step 5)
- Vibe Code Bench: **0.00% (Vals)** — **LOWEST IN SERIES; 80.1-PT GAP FROM OWN LIVECODEBENCH** (GLM / Step 5)
- SWE-bench Verified: **62.80% (Vals, mini-SWE-agent, corroborates BenchLM SWE-bench row)** (GLM)
- SWE-bench Verified / DeepSWE / AA-SciCode / AA Coding Index / Terminal-Bench 4.0 / FrontierCode: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **85%, 74%, 70%, 55% REFS ALL UNMEASURED** (Step 5)

Multimodal:

- **CONFLICT: Step 5 = text+image; GLM = text+image+audio+video**
- CharXiv: **73.2%** (Google model card via BenchLM) (GLM / Step 5)
- ParseBench: **56.66%** (LlamaIndex, BenchLM Nov 6 snapshot) (Step 5 / GLM)
- MMMU-Pro: **76.8%**; Video-MMMU: **84.8%** (Google vendor, prior) (GLM)
- MMMU-Pro, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Long context:

- **1M tokens input / 64K output** (BenchLM / GLM) — **FULL FRONTIER WINDOW**
- MRCR / RULER / AA-LCR: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- JevBench v1.4/1.5 only long-context-adjacent evidence (mid) (GLM / Step 5)
- **NO MAX-OUTPUT LIMIT PUBLISHED** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **77.7 Overall** (Tool 66.5, Reasoning 76.5, Context 88.8, Multimodal 85.6, Coding 71.1). Queue: 77.7. Step 5 Preview: 65. GLM 5.3 Flash: 77.4. My original: 77.7 (queue). **FOUR GENERATIONS BEHIND; Vibe Code Bench 0.00% (LOWEST IN SERIES) vs LiveCodeBench 80.1% (80.1-PT GAP); GPQA 81.1% vs 86.9% (5.8PT VENDOR CONFLICT); 1M CONTEXT; NON-REASONING; MODALITY CONFLICT; PRICING CONFLICT.**

- **Tool use: 42/100.** (was 45) Gert Labs **38.46%**; TB 2.1 **34.1%** (53.9pts under 88%+ ref); Vibe Code **0.00%**. **ONLY TWO AGENTIC FIGURES, BOTH WEAK**. TB 2.0/4.0, τ², τ³, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: **ALL UNMEASURED** — 3 of 3 frontier refs unmeasured, no composite. **NON-REASONING CLASSIFICATION CAPS TOOL SUBSTRATE EXPECTATION.**
- **Reasoning: 60/100.** (was 65) MMLU-Pro **86.2%**; GPQA **81.1% (Vals) vs 86.9% (Google) — 5.8PT CONFLICT**; HLE **16% (HONEST CAP)**; FrontierMath v2 T1-3 **27.7% (NEAR-FLOOR)**. **CAPPED BY:** CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME: **ALL UNMEASURED** — composite depth, reliability, 3 of 5 refs unknown. **STRONG-EXAM-AGAINST-WEAK-DEPTH PATTERN = NON-REASONING.**
- **Context window: 92/100.** (was 90) **1M TOKENS (FULL FRONTIER WINDOW)** — scored 92 not 95+: no AA-LCR/MRCR/GraphWalks; window usable depth UNVERIFIED; no max-output published. JevBench 14.26/19.58 only long-context signal (mid).
- **Multimodal: 68/100.** (was 70) **CONFLICT: Step 5 = text+image (68); GLM = omni (88).** CharXiv **73.2%** (good chart reading); ParseBench **56.66%** (middling); MMMU-Pro **76.8%**, Video-MMMU **84.8%** (vendor, prior). Held at 68: visual suite = 2 benchmarks; MMMU-Pro/ExtractBench/BabyVision/ZeroBench/OmniDocBench/MathVision unmeasured. **Methodology: text+image = 60-70 upper end.**
- **Coding: 62/100.** (was 65) **CENTRAL CONTRADICTION UNRESOLVED:** LiveCodeBench **80.1%** (strong) vs Vibe Code Bench **0.00%** (LOWEST IN SERIES, 80.1-PT GAP). SWE-bench **62.8%** (22.2pts under 85% ref). SWE-V **62.80%** (Vals). **CAPPED BY:** SWE-V/DeepSWE/AA-SciCode/AA Coding Index/TB 4.0/FrontierCode: **ALL UNMEASURED**. 80.1-pt internal conflict recorded, not averaged.
- **Cost efficiency: 82/100.** (was 80) **CONFLICT: Step 5 = NO RATE CARD (82 positioning); GLM = $0.25/$1.50 + $0.025 cache (93).** Flash-Lite = Google's cheapest 3.x route (positioning). **EXPLICITLY POSITIONING-BASED, NOT MEASUREMENT** — held below 88: no free tier confirmed (Step 5), no published rate (Step 5), no cache-read (Step 5). GLM free tier on AI Studio (rate-limited).
- **Overall Score: 65/100.** (was 77.7) Half-up mean of (42 + 60 + 92 + 68 + 62) / 5 = 324 / 5 = 64.8 → **65**. **FAR BELOW QUEUE (77.7), AVERAGE OF 28 QUALIFYING RATERS (77.7), GLM 5.3 FLASH (77.4).** Best-fit: **CHEAP 1M-CONTEXT FLASH-LITE WITH ALARMING INTERNAL CONTRADICTION** — MMLU-Pro 86.2%, LiveCodeBench 80.1%, CharXiv 73.2%, 1M window at Flash-Lite pricing. **BUT: Vibe Code Bench 0.00% vs LiveCodeBench 80.1% = 80.1-PT GAP ON NEIGHBOURING CODING BENCHMARKS (STARKER IN SERIES); AGENTICS NEAR-FLOOR (TB 2.1 34.1%, NO COMPOSITE); NO RELIABILITY MEASUREMENT (CANNOT ASSESS AS FACTUAL ASSISTANT); DOMINATED BY SUCCESSORS 3.5 FLASH-LITE (46.87) AND 3.5 FLASH (61.62) ON BENCHLM.** Recommendation: **PREFER 3.5 FLASH-LITE TIER (DIRECT SUCCESSOR).** Resolve Vibe Code 0.00% on own harness before trusting any coding figure.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 65), GLM 5.3 Flash re-research (2026-11-06, Overall 77.4) + Google model card, BenchLM (12 rows, 46.62, #117), Vals, Epoch, LlamaIndex, JevBench, Gert Labs. **Average of 28 qualifying raters: 77.7 Overall.** Queue: 77.7. **Critical findings:** FOUR GENERATIONS BEHIND; **Vibe Code Bench 0.00% (LOWEST IN SERIES) vs LiveCodeBench 80.1% (80.1-PT GAP)**; GPQA 81.1% vs 86.9% (5.8PT VENDOR CONFLICT); HLE 16% (HONEST CAP); **1M CONTEXT (FRONTIER WINDOW AT FLASH-LITE PRICING)**; **NON-REASONING (BENCHLM)**; **MODALITY CONFLICT (STEP 5: TEXT+IMAGE; GLM: OMNI)**; **PRICING CONFLICT (STEP 5: NO RATE CARD; GLM: $0.25/$1.50)**; **DOMINATED BY 3.5 FLASH-LITE (46.87) AND 3.5 FLASH (61.62) ON BENCHLM**; QUEUE 77.7 VS REPORT 65 (12.7PT GAP).
- Reference URLs:
  - [Google — Gemini 3.1 Flash-Lite model card (source of the CharXiv row)](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/)
  - [BenchLM — Gemini 3.1 Flash-Lite benchmark scores (12 rows, 46.62/100, #117/1015)](https://benchlm.ai/models/gemini-3-1-flash-lite)
  - [Vals AI — Gemini 3.1 Flash-Lite (preview) leaderboard results](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview)
  - [Vals AI — Vibe Code Bench v1.1 (source of the series-lowest 0.00%)](https://www.vals.ai/benchmarks/vibe-code)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - [JevBench v1.4.2.2 results](https://github.com/fstandhartinger/jevbench/blob/5b405e7e4efff2cfbbb2fe67db9b0cbad0704b8d/results/v1.4.2.2/jevbench-v1.4.2.2-results.json)
  - [JevBench v1.5.4 results](https://benchmarkheaven.com/api/jevbench/v1.5.4)
  - See also: [`model/gemini-3.5-flash-lite/`](gemini-3.5-flash-lite.md) (46.87) — the direct successor this report recommends preferring, refreshed in an earlier batch; [`model/gemini-3.5-flash/`](gemini-3.5-flash.md) (61.62) — the next tier up
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---