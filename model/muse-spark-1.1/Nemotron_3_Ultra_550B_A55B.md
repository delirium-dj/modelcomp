# Muse Spark 1.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1 — **THREE GENERATIONS BEHIND** (superseded by 1.2 2026-08-05, 1.3 2026-09-02, Muse Wonder 2026-10-12; BenchLM 65.16, #32/1009 — scores *below* 1.2's 65.41)
- **Short description:** Earliest Muse Spark with dedicated evaluation report. **Highest raw HLE in research series (62.1% vendor)** and **Cybench 92.9%**, best-documented agentic suite of any legacy Meta model (MCP Atlas 88.1% — **still #1 on live independent board**, OSWorld-Verified 80.8%, Toolathlon 75.6%). Reliability mid-pack (hallucination 50.0%), reasoning depth thin (CritPt 15.1%, MRCR 1M 54.1%). **No public API pricing published for this legacy SKU** — Zen omits 1.1; Meta API covers 1.3/1.2 only.
- **Provider / access:** Meta Model API (`muse-spark-1.1`, public preview, OpenAI/Anthropic SDK compatible), OpenRouter (`meta/muse-spark-1.1`), EmpirioLabs ($1.25/$4.25), **consumer free in Meta AI app (Thinking mode)**, **OpenCode Zen (`opencode/muse-spark-1-1`) — Zen's current list carries 1.3/1.2 but NOT 1.1**. Weights never released. No EU access at launch.
- **Release / knowledge:** 2026-07-09 release (same day as GPT-5.6); lineage: Spark 2026-04-08 → 1.1 2026-07-09 → 1.2 2026-08-05 → 1.3 2026-09-02 → Spark Open 2026-10-15. **Knowledge cutoff: not verified.**
- **IDs:** `muse-spark-1.1` (Meta Model API); `meta/muse-spark-1.1` (OpenRouter). **No Free ID on Zen.**
- **Context window:** **1,048,576 tokens (1M)** with active context management that compacts long sessions automatically; **max output 131,072** (LiteLLM/AnotherWrapper confirmed).
- **Modalities:** Text, image, video, **audio**, PDF in; text out. Reasoning (Thinking mode); tool calls with zero-shot MCP generalization, parallel subagent orchestration; computer use first-class; structured output/JSON; built-in web search; Files API; prompt caching.
- **Pricing (as of 2026-11-08):** **NOT PUBLISHED for this legacy SKU** — Meta Model API pricing covers 1.3/1.2 ($1.25/$4.25); OpenRouter/EmpirioLabs $1.25/$4.25; consumer free in Meta AI app; $20 free credits new accounts. LiteLLM ranks cheapest Muse Spark at $2.00 blended. **Scored conservatively — verify against Meta before relying.**
- **Architecture:** Proprietary, closed-weight; parameters undisclosed. AA-measured output speed **231 tok/s** (TTFT 12.4s) — fast for class.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Meta sources. **Average of 30 qualifying raters: 89 Overall** (Tool 87.2, Reasoning 87.4, Context 94.4, Multimodal 89.8, Coding 86.3). Queue: 89. Step 5 Preview: 83. GLM 5.3 Flash: 90. My original: 77. **THREE GENS BEHIND: no public pricing; MCP Atlas #1 live board.**

Agent / tool use:

- MCP Atlas: **88.1%** (Meta evaluation report) — **STILL #1 ON LIVE INDEPENDENT BOARD** (LLMBenchmark Nov 3: leads 32 models, +0.9 over Fable 5.1's 87.2; median 75.8) (GLM / Step 5)
- Terminal-Bench 2.1: **80.0%** (Meta report, x-high) / **69.29% ±0.99** (Vals) / **76.2% ±1.2** (BenchmarkList best-reported-harness roll-up, 46th pct) — **10.7pt vendor-vs-independent gap, both under 88%+ ref** (GLM / Step 5)
- Toolathlon-Verified: **75.6%** (Meta); OSWorld-Verified: **80.8%** (Meta) vs OSWorld 2.0 **14.2%** (hard split, trails Opus 4.8) (GLM / Step 5)
- WebArena-Verified: **69%**; Cybench: **92.9%**; CyberGym: **59.0%**; ExploitGym: **0.8%** (GLM / Step 5)
- GDPval-AA: **1,375-1,381 Elo** (Meta / BenchmarkList x-high re-read, minor drift) / AA-normalized **35.6%** — **well under 1,750+ frontier** (GLM / Step 5)
- Vals x-high rows (NEW): TaxEval v2 **79.72% ±0.77** (#2/145); SkillsBench **59.19%** (#10/35); Finance Agent v2 **57.21%** (#17/81); Public Benefits 61.30%; MortgageTax 66.14%; Legal Research 37.98%; EMB 56.36%; MedScribe **88.89%** (#10/109); LegalBench **84.98%**; Code Migration 31.11%; ProgramBench **0.0%**; Time-Horizon KSP 1.7% (GLM)
- JobBench: **54.7%**; DeepSearchQA: **84.9%**; AA Agentic Index: **27.5%** (second-lowest in batch) (GLM / Step 5)
- **τ³-Banking, Tau2/Tau3-Bench, BrowseComp, Claw-Eval, MazeBench, ALE, Toolathlon-Verified: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Reasoning / knowledge:

- HLE: **62.1% with tools** (Meta report — **HIGHEST RAW HLE IN RESEARCH SERIES**) / **52.2% without** / AA-HLE **46.2%** (GLM / Step 5)
- AA-GPQA Diamond: **89.8%** (AA) / **91.16% ±2.10** (Vals, #23/138) — **clears 90%+ only on Vals run** (GLM / Step 5)
- AA-LCR: **77.7%** (GLM / Step 5)
- CritPt: **15.1%** (GLM / Step 5)
- MRCR at 1M: **54.1%** (Meta report — **one of few measured 1M retrieval figures in series**) — **mid-tier at that length, trails GPT-5.5's 74.0%** (GLM / Step 5)
- AA Intelligence Index: **33.7** (current recalibrated board; launch-era 51 on v4.1, then 53.2 — version chain documented, not comparable across scales) (GLM)
- AA-Omniscience: index 28.1, accuracy 52.1%, hallucination **50.0%** (GLM / Step 5)
- LiveBench (NEW): Reasoning **87.7**, Mathematics 87.1, Data Analysis 72.5, Language 74.3, IF 69.6, overall 75.3 (GLM)
- MMLU-Pro (Vals): **88.7%**; HealthBench Professional: **59.3%** (GLM / Step 5)
- **FrontierMath, ARC-AGI: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench (Vals): **82.0% ±1.72** (independent, mini-SWE-agent, #21/88; Meta published no SWE-V) / **61.5% ±3.1** Pro (GLM / Step 5)
- LiveCodeBench (Vals): **85.91%** (#29/143) (GLM / Step 5)
- AA-SciCode: **58.8%** (#5/458 per BenchmarkList) — **clears 55%+ ref** (GLM / Step 5)
- AA Coding Index: **71.3%** — **clears 70%+ frontier ref** (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **72.16% ±3.33** (NEW — fills gap; +52.5pt generational jump from 1.0's 19.67%) (GLM)
- SWE-Atlas: **42.2%** (#3/14) / Test-Writing 41.5% (#9/24) — NEW (GLM)
- DeepSWE: **53.3%** (Meta report) — **20.7pts under 74%+ frontier, second-worst in batch** (GLM / Step 5)
- Arena WebDev: **1,539.84** (#23/105); Atomic coding (Meta internal): 67.0% pass@1 / 82.5% pass@20 (GLM)
- **SWE-bench Verified: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Multimodal:

- CharXiv: **88.4%** (Meta); BabyVision: **76.3%** (GLM / Step 5)
- MMMU-Pro (Vals): **86.59% ±0.82** (NEW) (GLM)
- Design Arena Website: **1,275 Elo** (GLM) / **1,269 Elo** (Step 5)
- **Text + image + video + audio + PDF in; text out** — full audio/video tier (90-100)

Long context:

- MRCR: **54.1%** at 1M window (Meta); AA-LCR: **77.7%** (GLM / Step 5)
- Hands-on: retrieval solid to ~400K, vaguer beyond; active compaction can silently drop early constraints (buildfastwithai) (GLM)
- **Measured 1M-window retrieval at 54.1% — unusually for 1M-window model in series, but only ~half quality of shorter contexts** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 30 qualifying raters = **89 Overall** (Tool 87.2, Reasoning 87.4, Context 94.4, Multimodal 89.8, Coding 86.3). Queue: 89. Step 5 Preview: 83. GLM 5.3 Flash: 90. My original: 77. **THREE GENS BEHIND: no public pricing; MCP Atlas #1 live board.**

- **Tool use: 85/100.** (was 78) MCP Atlas **88.1% (#1 live board)**, OSWorld-Verified **80.8%**, Toolathlon **75.6%**, DeepSearchQA **84.9%**, Cybench **92.9%**, JobBench **54.7%**, Vals TaxEval **79.7% #2/145**, SkillsBench **59.2%**, MedScribe **88.9% #10/109**, LegalBench **84.98%**. **Capped by:** TB 2.1 **80.0% vendor / 69.3% Vals (10.7pt gap, both under 88%+ ref)**; GDPval-AA **1,375 Elo (375 under 1,750 frontier)**; OSWorld 2.0 **14.2%**; ExploitGym **0.8%**; AA Agentic Index **27.5% (2nd lowest)**; **NO τ³-Banking/BrowseComp/Tau2/Tau3/Claw-Eval/MazeBench/ALE**.
- **Reasoning: 82/100.** (was 72) **HLE 62.1% vendor (HIGHEST RAW IN SERIES) / 52.2% no tools / AA-HLE 46.2%** (clears 40%+); GPQA Diamond **89.8% AA / 91.2% Vals (clears 90%+ only on Vals)**; LiveBench Reasoning **87.7**; AA-LCR **77.7%**; MMLU-Pro **88.7%**; HealthBench Pro **59.3%**. **Capped by:** AA Intelligence Index **33.7** (current scale); CritPt **15.1%**; **NO FrontierMath / ARC-AGI / MRCR** — three of five reasoning references missing. AA-Omniscience hallucination **50.0%** (mid-pack).
- **Context window: 95/100.** (was 90) **1M/131K verified**; MRCR **54.1% @1M (measured — unusually for series)**; AA-LCR **77.7%**. **Held at 95 (not 97+): MRCR 54.1% well below ≥98% threshold; no max-output limit published; retrieval solid ~400K, vaguer beyond; active compaction drops early constraints.**
- **Multimodal: 92/100.** (was 65) **Text, image, video, audio, PDF in; text out.** CharXiv **88.4%**, BabyVision **76.3%**, MMMU-Pro **86.59% (Vals, NEW)**, Design Arena **1,275 Elo**. **Full audio/video tier (90-100).** **Capped by:** visual suite = 3 benchmarks only; no MMMU-Pro (Step 5), no ZeroBench/ExtractBench; text-only output.
- **Coding: 78/100.** (was 80) SWE-bench **82.0% (Vals, #21/88)**, LiveCodeBench **85.9% (Vals)**, AA Coding Index **71.3%** (clears 70% ref), AA-SciCode **58.8%** (clears 55% ref, #5/458), Vibe Code v1.1 **72.16%** (Vals, NEW), SWE-Atlas **42.2% (#3/14)**. **Capped by:** DeepSWE **53.3% (20.7pts under 74% ref, 2nd worst in batch)**; TB 2.1 **80.0%** (under 85% ref); SWE-Pro **61.5%**; **NO SWE-V / LiveCodeBench (Step 5)**.
- **Cost efficiency: 55/100.** (was 30) **NO RATE CARD PUBLISHED FOR THIS LEGACY SKU** — Meta API pricing covers 1.3/1.2 only; Zen omits 1.1. OpenRouter/EmpirioLabs $1.25/$4.25; consumer free in Meta AI app; LiteLLM $2.00 blended. **Scored conservatively at methodology ~$3/$15 anchor (≈60), estimate flagged as unverified.** If $1.25/$4.25 verified → ~88.
- **Overall Score: 86.4/100.** (was 77) Half-up mean of (85 + 82 + 95 + 92 + 78) / 5 = 432 / 5 = 86.4 → **86**. **Above Step 5 Preview (83), matches GLM 5.3 Flash (90); below average of 30 qualifying raters (89) and queue (89).** Best-fit: **Genuinely well-rounded legacy model** — **highest raw HLE in series (62.1%)**, **MCP Atlas #1 live board (88.1%)**, **measured 1M retrieval (54.1%)**, **full audio/video input** — three gens behind, **priced on unpublished card**. For agentic/multimodal work competitive with newer models; for repo coding not (DeepSWE 53.3%). **Prefer Muse Spark 1.3 at known $1.25/$4.25 unless 1.1 already deployed.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 83), GLM 5.3 Flash (2026-11-05, Overall 90) + official Meta sources (Muse Spark 1.1 evaluation report, Model API, OpenRouter, LiteLLM, LLMBenchmark live board). **Average of 30 qualifying raters: 89 Overall.** Queue: 89. **Critical findings:** Three gens behind; **HLE 62.1% (HIGHEST RAW IN SERIES)**; **MCP Atlas 88.1% (#1 live board)**; Cybench 92.9%; MRCR 54.1% @1M (measured); full audio/video in; NO public pricing for legacy SKU; Zen omits 1.1; TB 2.1 80.0%/69.3% (10.7pt vendor-ind gap); GDPval 1,375 Elo; DeepSWE 53.3% (20.7 under 74%); AA Intelligence Index 33.7 (current scale); CritPt 15.1%; FrontierMath/ARC-AGI missing.
- Reference URLs:
  - [Meta AI — Muse Spark 1.1 evaluation report (primary benchmark source)](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [Meta Model API — Muse Spark 1.1](https://developer.meta.com/ai/models/muse-spark/)
  - [BenchLM — Muse Spark 1.1 benchmark scores (40 rows, 65.16/100, #32/1009)](https://benchlm.ai/models/muse-spark-1-1)
  - [Artificial Analysis — Muse Spark 1.1](https://artificialanalysis.ai/models/muse-spark-1-1)
  - [Vals AI — Muse Spark 1.1 leaderboard results](https://www.vals.ai/models/meta_muse_spark_1_1)
  - [OpenRouter — Muse Spark 1.1 benchmarks](https://openrouter.ai/meta/muse-spark-1.1/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - [LLMBenchmark — live MCP Atlas board](https://llmbenchmark.ai)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---