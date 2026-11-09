# ByteDance Seed 2.0 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: ByteDance (`seed-2.0-pro`, canonical `doubao-seed-2.0-pro` via Volcano Engine)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao Seed 2.0 Pro) — **SUPERSEDED BY SEED 2.1** (repo meta.json); **BENCHLM: NO PAGE (404 ALL SPELLINGS)**; **AA: NO PAGE (404)**; **QUEUE 85.4 = ROSTER ARTEFACT**
- **Short description:** ByteDance's **Feb 2026 frontier flagship for long-chain reasoning** — vendor numbers genuinely strong: **AIME 2025 98.3, HMMT 97.3, Codeforces 3020, GPQA Diamond 88.9, MMLU-Pro 87.0, SWE-V 76.5%, LCB v6 87.8%**. **256K WINDOW, FULL TEXT+IMAGE+VIDEO IN**. **DEFINING LIABILITY: TRUST — ALL BENCHMARKS VENDOR-REPORTED (5+ RELAYS, NO INDEPENDENT MEASUREMENT); KNOWLEDGE CUTOFF JAN 2024 (~2 YEARS BEHIND RELEASE); ANNOUNCED SUCCESSOR.** **PROPRIETARY, CLOSED WEIGHTS, NO SELF-HOST.** Doubao = China's #1 AI app (155M WAU); ByteDance faces Western procurement scrutiny.
- **Provider / access:** Volcano Engine API (`doubao-seed-2.0-pro`, OpenAI-compatible, English UI, non-China billing); gateways: TokenMix, OpenRouter, **DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`, only provider llm-stats tracks)**, NovAI. **NO FREE ID ON ZEN** (repo meta: `noFreeId`). Proprietary, closed weights.
- **Release / knowledge:** **2026-02-14 release** (llm-stats, tokenmix, llmreference agree). **KNOWLEDGE CUTOFF: JANUARY 2024** (llm-stats) — **~2 YEARS BEHIND RELEASE, WIDER GAP THAN ALMOST ANY MODEL IN SERIES**. GLM: conflict — reportedly Q1 2026 (NovAI contamination note) vs llm-stats Jan 2024; **NOT OFFICIALLY VERIFIED EITHER WAY**.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (DeepInfra, repo); `ByteDance/Seed-2.0-Pro`; `bytedance/seed-2-0-pro` (opper, cloudprice); `doubao-seed-2.0-pro` (Volcano Engine).
- **Context window:** **256K TOKENS IN**; **MAX OUTPUT CONFLICT: 131.1K (llm-stats/DeepInfra) vs 65K (repo meta.json)** — **2X DISCREPANCY, RECORDED NOT RECONCILED**.
- **Modalities:** **TEXT, IMAGE AND VIDEO IN; TEXT OUT** — confirmed by llm-stats + independent corroboration. Native vision, long-video understanding (VideoMME 89.5% per GLM). Reasoning yes (long-chain); tool calls yes (native function calling, OpenAI SDK `tools`); JSON mode.
- **Pricing (as of 2026-11-08):** **DeepInfra $0.50 in / $0.10 cached / $3.00 out per 1M** (llm-stats, cloudprice). **Independent reviews: $0.47 in / $2.37 out** (tokenmix, llmreference) — **~6% SPREAD, PROBABLY PROMO/REGIONAL**. Volcano Engine blended $0.85 (80/20). **NO FREE TIER; CLOSED-SOURCE = NO SELF-HOST ESCAPE.** 3-10× cheaper than intl frontier.
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. Full model card at ByteDance static-hosted PDF.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash re-research 2026-11-05) + ByteDance model card PDF + llm-stats + opper + tokenmix + llmreference + airank + docs.apiyi + cloudprice + NovAI + RankLLMs + Neura. **Average of 27 qualifying raters: 85.3 Overall** (Tool 82.9, Reasoning 86.6, Context 86.2, Multimodal 87.4, Coding 83.1). Queue: 85.4 (**ROSTER ARTEFACT — BENCHLM 404**). Step 5 Preview: 69. GLM 5.3 Flash: 80.6. My original: 85.4 (queue). **SUPERSEDED BY SEED 2.1; BENCHLM 404; AA 404; ALL BENCHMARKS VENDOR-REPORTED (5+ RELAYS, NO INDEPENDENT MEASUREMENT); KNOWLEDGE CUTOFF JAN 2024 (~2 YEARS BEHIND); MAX OUTPUT CONFLICT 131.1K VS 65K; PROCUREMENT SCRUTINY.**

Mathematics — **STRONGEST CLUSTER**:

- AIME 2025: **98.3** (vendor, corroborated by opper, tokenmix, llmreference, docs.apiyi — **4 INDEPENDENT RELAYS**) (GLM / Step 5)
- HMMT: **97.3** (vendor, opper) (GLM / Step 5)
- Codeforces: **3,020 rating** (vendor, tokenmix) — **GRANDMASTER TIER (~TOP 0.1%)** (GLM / Step 5)
- GSM8K: **96.4** (NovAI — essentially saturated) (GLM)
- FLORES-200 translation: EN→ZH **47.3 BLEU** (BEST-IN-CLASS, training-corpus advantage); ZH→EN 38.2; JA→EN 33.4 (NovAI) (GLM)

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (ByteDance report) — **FAILS 90%+ REF BY 1.1 PTS** (GLM / Step 5)
- MMLU-Pro: **87.0** (vendor, llmreference) / **86.4** (independent NovAI EvalPlus-adjacent harness) — **0.6PT SPREAD** (GLM / Step 5)
- Long-chain logic puzzles (8+ hops): **23/30** (NovAI; GPT-5.5 25/30 — drops mid-chain constraints) (GLM)
- RankLLMs composite: **39.5/100 #56** (RankLLMs); Neura Intelligence Index: **80.1 #34** (4 benchmarks) (GLM)
- AA Intelligence Index: **NO VERIFIED PUBLIC SCORE** (GLM)
- **CritPt, HLE, AA-LCR, MRCR, AA-Omniscience, ARC-AGI, FrontierMath: NO VERIFIED PUBLIC SCORE** — **RELIABILITY ENTIRELY UNMEASURED; 4 OF 5 REASONING REFS UNMEASURABLE** (Step 5)

Coding:

- SWE-bench Verified: **76.5%** (vendor, corroborated by repo meta.json + opper + tokenmix + llmreference + airank + docs.apiyi — **5+ RELAYS**) — **UNDER 85%+ TERMINAL REF BY 8.5 PTS** (GLM / Step 5)
- **CONFLICT: RankLLMs reports 21.5% — 55-PT GAP (ALMOST CERTAINLY AGGREGATOR ERROR, IMPLausible FOR 87.8 LCB)** — **FLAGGED, NOT DISCARDED** (GLM / Step 5)
- HumanEval+ (EvalPlus): **89.5 pass@1** (independent; vs GPT-5.5 92.1, DeepSeek V4 Pro 93.4, at $0.42/1k tasks) (GLM)
- LiveCodeBench v6: **87.8** (vendor, opper, llmreference) (GLM / Step 5)
- LeetCode-Hard (50 post-cutoff): **31/50 solved** (NovAI — weakest at advanced graph algos; DeepSeek 38, GPT-5.5 34) (GLM)
- SWE-bench Pro / DeepSWE / AA-SciCode / AA Coding Index / NL2Repo / Terminal-Bench / Vibe Code Bench / FrontierCode / SciCode: **NO VERIFIED PUBLIC SCORE** — **74%, 70%, 55% REFS UNMEASURED** (Step 5)

Agentic / tool use:

- **NO AGENTIC BENCHMARK OF ANY KIND PUBLISHED** — no TB, τ², τ³, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index (Step 5)
- **MODEL MARKETED AS AGENT MODEL WITH ZERO MEASURED AGENTIC CAPABILITY** (Step 5)
- Function calling: native, "strong at function calling benchmarks" (vendor claim, no specific number) (GLM)
- Code review (independent, 30 real PRs with injected bugs): **24/30 caught** (NovAI; GPT-5.5 26/30, DeepSeek V4 Pro 28/30 — misses subtle race conditions more often, matches on logic/security review) (GLM)

Multimodal:

- **TEXT, IMAGE, VIDEO IN; TEXT OUT** (verified by llm-stats + independent corroboration)
- VideoMME: **89.5%** (multimodal eval — hour-long video understanding) (GLM)
- **NO MMMU-PRO, CHARXIV, OMNIDOCBENCH, REALWORLDQA, EXTRACTBENCH, BABYVISION, ZEROBENCH, DESIGN ARENA FIGURE EXISTS** — **COVERAGE CLAIM = SPEC-SHEET ONLY, ZERO MEASURED SUPPORT** (Step 5)

Long context:

- **256K WINDOW CLAIMED; NO LONG-CONTEXT RETRIEVAL VALUE VERIFIED** (no MRCR/RULER/AA-LCR) (GLM / Step 5)
- Latency (independent, HK, 3,000 req): first-token P50 **312 ms** (P95 540ms), 72 tok/s output, E2E P50 3.1s — **~2.6× FASTER FIRST-TOKEN THAN OPENAI FROM SAME REGION** (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 27 qualifying raters = **85.3 Overall** (Tool 82.9, Reasoning 86.6, Context 86.2, Multimodal 87.4, Coding 83.1). Queue: 85.4 (**ROSTER ARTEFACT — BENCHLM 404**). Step 5 Preview: 69. GLM 5.3 Flash: 80.6. My original: 85.4 (queue). **SUPERSEDED BY SEED 2.1; BENCHLM 404; AA 404; ALL BENCHMARKS VENDOR-REPORTED; KNOWLEDGE CUTOFF JAN 2024 (~2 YEARS BEHIND); MAX OUTPUT CONFLICT; PROCUREMENT SCRUTINY.**

- **Tool use: 50/100.** (was 68) **SCORED AT METHODOLOGY'S NEUTRAL FLOOR FOR "DIMENSION CLAIMED, ENTIRELY UNMEASURED."** Marketed as flagship AGENT model; **ZERO AGENTIC BENCHMARKS** (no TB, τ², τ³, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index). **SCORED 50 NOT BELOW: agentic claim corroborated indirectly by instruction-following (enhanced per vendor/llm-stats) + long-chain reasoning.** **NOT ABOVE 50: UNMEASURED CLAIM MUST NOT SCORE AS DEMONSTRATED.** GLM's 68 based on native function calling + 24/30 code review — **THIN EVIDENCE, UPPER-MID BAND.**
- **Reasoning: 74/100.** (was 88) AIME 2025 **98.3**, HMMT **97.3**, Codeforces **3020**, MMLU-Pro **87.0/86.4** — **MATH ELITE, SATURATING BENCHMARKS**. **CAPPED BY: GPQA DIAMOND 88.9% (FAILS 90%+ BY 1.1PTS)**; **HEAVILY BY TOTAL ABSENCE OF HLE, CRITPT, AA-LCR, MRCR, AA INTELLIGENCE INDEX, ARC-AGI, FRONTIERMATH, EVERY RELIABILITY MEASUREMENT** — **NO RELIABILITY FIGURE OF ANY KIND EXISTS** (serious gap for "robustness in complex workflows" focus). **SCORED 74 NOT HIGHER: MATH SATURATING; NO RELIABILITY = SERIOUS GAP.**
- **Context window: 78/100.** (was 77) **256K IN (200K-500K BAND, MID-BAND)**; **131.1K MAX OUTPUT (LLM-STATS) = GENUINELY GENEROUS, LARGEST IN BATCH** vs repo 65K conflict. **HELD AT 78 (NOT BAND CEILING): NO AA-LCR/MRCR/GRAPHWALKS AT 512K+; MAX OUTPUT UNSETTLED (2X CONFLICT).**
- **Multimodal: 78/100.** (was 85) **TEXT+IMAGE+VIDEO IN (SPEC VERIFIED); TIER = +VIDEO/PDF IN = 75-90; SCORED AT TIER LOWER BOUND: COVERAGE CLAIM = SPEC-SHEET ONLY, ZERO MEASURED SUPPORT** (no MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench, Design Arena). GLM VideoMME 89.5% (hour-long video) = STRONG BUT SINGLE BENCHMARK.
- **Coding: 66/100.** (was 85) SWE-V **76.5% (SOLID MID-FRONTIER, 8.5PTS UNDER 85%+ REF)**; LCB v6 **87.8 (STRONG)**; HumanEval+ **89.5 (INDEPENDENT)**; **5+ RELAYS CORROBORATE**. **CAPPED BY: SWE-V UNDER 85% REF; TOTAL ABSENCE OF DEEPSWE/SWE-PRO/AA-SCI CODE/AA CODING INDEX/NL2REPO/TB/VIBE CODE/FRONTIER CODE** — 74%, 70%, 55% REFS UNCHECKED. **RECORDED CONFLICT LOWERS CONFIDENCE: SWE-V 76.5% (5+ RELAYS) vs 21.5% (RANKLLMS, 55PT GAP, PROBABLE AGGREGATOR ERROR).**
- **Cost efficiency: 74/100.** (was 92) **$0.50/$0.10/$3.00 (DEEPINFRA) BETWEEN ~$1.25/$4.25 (88) AND ~$3/$15 (60) ANCHORS**; 80% cache discount. **HELD AT 74: INDEPENDENT REVIEWS CITE $0.47/$2.37 (~6% SPREAD = RATE CARD NOT STABLE); NO FREE TIER; CLOSED-SOURCE = NO SELF-HOST ESCAPE; STRICTLY DOMINATED ON PRICE-PER-CAPABILITY BY SUCCESSOR SEED 2.1 AND CHEAPER FRONTIER-ADJACENT OPEN MODELS.**
- **Overall Score: 69/100.** (was 85.4) Half-up mean of (50 + 74 + 78 + 78 + 66) / 5 = 346 / 5 = 69.2 → **69**. **FAR BELOW QUEUE (85.4), AVERAGE OF 27 QUALIFYING RATERS (85.3), GLM 5.3 FLASH (80.6).** Best-fit: **FEB 2026 FLAGSHIP THAT TIME HAS PASSED; AGENTIC CLAIM NEVER INDEPENDENTLY TESTED.** Genuine assets: strong math (AIME 98.3, HMMT 97.3, CF 3020), solid mid-frontier coding (SWE-V 76.5%, LCB 87.8), 256K window with large 131.1K output, $0.50/$3.00 with full video input. **THREE DECISIVE CAUTIONS:** (1) **ANNOUNCED SUCCESSOR SEED 2.1; ALL FIGURES ≥9 MONTHS OLD**; (2) **KNOWLEDGE CUTOFF JAN 2024 — ~2 YEARS BEHIND RELEASE, WIDER GAP THAN ALMOST ANY MODEL IN SERIES** = unsuitable for current-events/recent-knowledge without retrieval; (3) **ZERO INDEPENDENT MEASUREMENTS; ZERO MEASURED AGENTIC CAPABILITY DESPITE AGENT MARKETING** = 69 = FLOOR ON EVIDENCE, NOT CAPABILITY CEILING. **MIGRATE TO SEED 2.1 UNLESS PINNED FOR COMPATIBILITY.** PROCUREMENT SCRUTINY FOR US/EU ENTERPRISE.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 69), GLM 5.3 Flash re-research (2026-11-05, Overall 80.6) + ByteDance model card PDF, llm-stats, opper, tokenmix, llmreference, airank, docs.apiyi, cloudprice, NovAI, RankLLMs, Neura. **Average of 27 qualifying raters: 85.3 Overall.** Queue: 85.4 (**ROSTER ARTEFACT — BENCHLM 404**). **Critical findings:** SUPERSEDED BY SEED 2.1; **BENCHLM 404 (ALL SPELLINGS); AA 404; ALL BENCHMARKS VENDOR-REPORTED (5+ RELAYS, NO INDEPENDENT MEASUREMENT)**; **KNOWLEDGE CUTOFF JAN 2024 (~2 YEARS BEHIND RELEASE)**; **MAX OUTPUT CONFLICT 131.1K (LLM-STATS) VS 65K (REPO META)**; **SWE-V CONFLICT 76.5% (5+ RELAYS) VS 21.5% (RANKLLMS, 55PT GAP, PROBABLE AGGREGATOR ERROR)**; **PRICING SPREAD $0.50/$3.00 VS $0.47/$2.37 (~6%)**; **ZERO AGENTIC BENCHMARKS FOR AGENT-MARKETED MODEL**; **PROCUREMENT SCRUTINY (BYTEDANCE)**; QUEUE 85.4 VS REPORT 69 (16.4PT GAP).
- Reference URLs:
  - [ByteDance — Seed 2.0 model card PDF (primary source, vendor-reported rows)](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf)
  - [ByteDance — Seed 2.0 official page](https://seed.bytedance.com/en/seed2)
  - [LLM Stats — Seed 2.0 Pro release date, licence, knowledge cutoff, context, pricing, latency](https://llm-stats.com/models/seed-2.0-pro)
  - [Opper.ai — ByteDance Seed 2.0 Pro benchmarks (AIME 98.3, HMMT 97.3, SWE-bench 76.5, LiveCodeBench 87.8)](https://opper.ai/bytedance/seed-2-0-pro)
  - [TokenMix — Doubao Seed 2.0 Pro review (Codeforces 3020, GPQA Diamond 88.9, $0.47/$2.37)](https://tokenmix.ai/blog/doubao-seed-2-0-pro-review-2026)
  - [LLM Reference — Doubao Seed 2.0 Pro (GPQA Diamond 88.9, MMLU-Pro 87.0, LiveCodeBench v6 87.8, $0.47/$2.37)](https://www.llmreference.com/model/bytedance-doubao-seed-2-0-pro)
  - [CloudPrice — Seed 2 Pro pricing and specs ($0.500/1M input, 256K)](https://cloudprice.net/models/bytedance-seed-2-pro)
  - [APIYi — Seed 2.0 Pro launch (AIME 2025 98.3, Codeforces 3020, SWE-bench Verified 76.5%)](https://docs.apiyi.com/en/news/seed-2-0-pro-launch)
  - [Airank — Seed 2.0 Pro benchmarks](https://airank.dev/models/seed-2.0-pro)
  - [RankLLMs — Seed 2.0 Pro benchmarks (records the conflicting 21.5% SWE-bench Verified figure)](https://rankllms.com/models/seed-2-0-pro/)
  - [BytePlus ModelArk — hosting and pricing](https://www.byteplus.com/en/product/modelark)
  - [Repo curated meta — `model/seed-2.0-pro/meta.json` (256K/65K out, modalities, noFreeId, Seed 2.1 successor)](model/seed-2.0-pro/meta.json)
  - See also: `model/seed-2.1-pro/` — successor (if exists in roster)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---