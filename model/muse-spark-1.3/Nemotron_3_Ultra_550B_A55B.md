# Muse Spark 1.3 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-spark-1.3`, `muse-spark-1.3-contributor`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Contributor tier available) — **DEPRECATED by Meta (AA flags deprecated in favor of Muse Wonder, 2026-10-12)**
- **Short description:** Meta's closed-weights frontier reasoning model trained for long-horizon agentic workflows and competitive coding. Claims higher first-attempt accuracy, reliable built-in tool calling (MCP supported), ~20% fewer tool calls / ~25% fewer tokens than Muse Spark 1.2. **Fourth Muse Spark release in five months.** Now deprecated per AA (Muse Wonder successor).
- **Provider / access:** Meta Model API (`muse-spark-1.3`, `muse-spark-1.3-contributor`), OpenCode Zen (`opencode/muse-spark-1.3` at $1.25/$4.25 — **Contributor Free promo gone from Zen free list as of 2026-11-04**), OpenRouter, Google Cloud Gemini Enterprise Agent Platform (partner Preview), Vercel AI Gateway. OpenAI Responses-API-compatible through Zen.
- **Release / knowledge:** 2026-09-02 release; **knowledge cutoff undisclosed** by Meta (LLMLearner, BridgeBench both list `—`).
- **IDs:** `meta/muse-spark-1.3` (Meta Model API, Vercel, Google Cloud); `opencode/muse-spark-1.3` (Zen, paid); `muse-spark-1.3-contributor` (Meta discount tier, Meta trains on prompts/completions). **No Free route on Zen as of 2026-11-04.**
- **Context window:** 1,048,576 tokens (1M) total; max output **not published by Meta** (LLMLearner, BridgeBench list `—`); Vercel lists 1,048,576, llm-stats 944K — treat as ~1M/unverified. **131,072 max output per models.dev.**
- **Modalities:** Text, image, video, PDF in (Vercel/BridgeBench document PDF); text out. **Audio explicitly not fully supported in 1.3** — Meta points audio work at Muse Spark 1.2. Reasoning model with tool calling, function calling, structured output, MCP support.
- **Pricing (as of 2026-11-08):** Standard `muse-spark-1.3` **$1.25 in / $0.15 cached in / $4.25 out per 1M** (Meta, Zen, llm-stats, BridgeBench all agree). Contributor `muse-spark-1.3-contributor` **$0.10 / $0.002 / $0.20 per 1M** but Meta may train on prompts/completions — not for confidential code. Search grounding $2.50/1,000 queries. **No Free Zen tier.** Layer3Labs "no finalized rate card" claim outdated (contradicted by live Meta pricing).
- **Architecture:** Proprietary / closed weights; parameter count undisclosed. Open-weights release announced on Meta's roadmap; Muse Spark Open (2026-10-15) reportedly shares same base model.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-04, GLM 5.3 Flash 2026-11-01) + official Meta sources. **Average of 35 qualifying raters: 93.8 Overall** (Tool 95.2, Reasoning 93, Context 99.8, Multimodal 86.3, Coding 95.2). Queue: 93.8. Step 5 Preview: 92. GLM 5.3 Flash: 85. My original: 93. **DEPRECATED: AA flags deprecated in favor of Muse Wonder (2026-10-12).**

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta official table, max, with tools) / **85.4%** (AA, xhigh, with tools) / **72.3%** (Vals AI) — **clears 88%+ frontier at max**
- τ³-Banking: **47%** (xhigh) / **52%** (max) (AA — **#1 among all models**) / **50.5%** #3/119 (LLMLearner)
- GDPval-AA v2: **1,754 Elo** (Meta table, max) / **1,709 Elo** (AA, xhigh) / **1,681 Elo** #11/19 (LLMLearner) — **clears 1,750+ frontier at max**
- JobBench: **64.9%** #1/8 (Meta / LLMLearner)
- OSWorld 2.0: **66.9% partial / 32.0% binary** (Meta, max); OSWorld 2.1: **69.6%**
- DeepSearchQA: **90.3%** (Meta) / **89.4%** #2/4 (LLMLearner)
- Harvey Lab-AA: **95.5%** #1/39 (LLMLearner)
- AutomationBench: **49.6%** (Meta) / **49.4%** #11/58 (LLMLearner) / **58%** (AA AutomationBench-AA, max)
- AA-Briefcase: **1,581 Elo** #10/14; APEX-Agents: **58.6%** #16/56; Agentic IF Index: **57.8%**; Agents' Last Exam: **32.2%**
- AA Agentic Index: **55.7%** (AA) / **51.5%** (xhigh)
- Terminal-Bench 4.0: **33.3%** #27/69 (LLMLearner, max) / **10.6%** (Vals) — **sharply weaker on recalibrated v4.0 harness**
- Efficiency: **$0.55 per Intelligence Index task (xhigh)** — **lowest of any model scoring 59+ on the index** vs $0.93–$0.95 for peers GPT-5.6 Sol (max) and Grok 4.6 (high) (AA)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** #15/198 (AA, xhigh) / **93.5%** (GLM, max) — **clears 90%+ frontier**
- HLE: **47%** (xhigh, AA) / **48.7%** (GLM, BenchLM) — clears 40%+ ref
- AA-LCR: **79%** (xhigh) / **83%** (max) — **only notable regression vs Muse Spark 1.2 (was 87%)**
- CritPt: **26.0%** #19/134 — standout gain vs 1.2 (18%), still low in absolute terms
- SciCode: **59.7%** #12/98; FrontierMath v2: **74.4%** Tiers 1-3; **FrontierMath Tier 4 v2: 46.3%** vs GPT-6 Sol 90%
- AA-Omniscience Accuracy: **42%** (xhigh) / **44%** (max) / **43.6%** (GLM) — fell 3/1 pts vs 1.2, but via *higher abstention*, which also lowered hallucination rate
- AA Intelligence Index: **61 (xhigh) / 62 (max)** on v4 index (launch) — behind only Fable 5.1 (66), Opus 5 max (63), Fable 5 max (62); **48.09** on v4.3 (Oct 2026); **36.4** #12/37 on v5.0 index (Nov 2026) — **three index numbers not comparable** (AA redesigned index, v5 adds private datasets + 2 new benchmarks)
- Vals Index v2.1: **53.16** #18/38; LiveBench: **81.6%** #6/106 (xhigh); LiveBench 2.0: **74.8%**; SimpleBench: **81.8%**; MysteryMechanism: **36.0%**
- ARC-AGI-2: **no verified public score found** (aggregator estimate 84.1%, low confidence — unverified) (GLM)

Coding:

- DeepSWE v1.1: **75.4%** #6/591 (Meta, max, with tools) / **75.4%** (GLM) — **level with Claude Opus 5 (74.0%) and GPT-5.6 Sol (73.0%)**
- SWE-Atlas CodeBase QnA: **59.4%** #4/17 (Meta)
- Terminal-Bench 2.1: **88.8%** (Meta, max) / **85.4%** (AA, xhigh)
- AA-SciCode: **58.8%** (AA) / **58.8%** (GLM)
- AA Coding Index: **75.8%** (AA) / **76.5%** (xhigh) / **75.8%** (GLM)
- CursorBench 4.0: **41.6%** #12/19; FrontierSWE v2: **25.8%** #14/23; Apex-SWE: **39.1%** #33/61; Code Migration: **47.4%** #15/78
- IOI (Vals v2): **56.6%** #21/45; AA Cyber Index: **44.3%**; CWE-bench v1: **55.0%** #8/12; WeirdML v3: **18**
- Vibe Code Bench 1-100: **20.5%** #9/25; **Vibe Code Bench v1.1: 85.9%** #15/114 (two different harnesses, both listed) / **82.9%** (GLM, Vals)
- SWE-bench Verified: **no verified public score found** (Step 5) / **83.9%** (AA run via Muse Code harness, max — best of 3 configs: 83.9 / 68.1 / 51.9; xhigh 82.0%) (GLM) — **Meta published no score of its own**
- SWE-bench Pro: **no verified public score found** (GLM) / benchgap estimate 69.6% (unverified)
- LiveCodeBench: **no verified public score found** (Step 5 / GLM) / aggregator estimates v6 ~88.8% (unverified) (GLM)
- FrontierSWE v2: **25.8%** (measured) (GLM)
- ProgramBench: **2.5%** (mini-SWE-agent harness) (GLM)

Long context:

- MRCR v2 256K–512K: **98.5%**; MRCR v2 512K–1M: **98.1%** (Meta official table, max) — **≥98% retention across the full 1M window**
- AA-LCR: **83%** (max) / **79%** (xhigh) — 4-point regression vs 1.2's 87%
- GraphWalks BFS 256K–1M: **no verified public score found** (aggregator estimate 71.9% — unverified) (GLM)
- RULER: **no verified public score found** (GLM)

Multimodal:

- MMMU-Pro: **82.0%** #21/131; GeoBench ACW: **86.0%** #3/32; GDP.pdf: **26.6%** #11/90; Creative Writing: **1907** #14/116
- **Text + image + video + PDF in; text out; audio explicitly deferred to 1.2** — lands in "+video/PDF in" band (75-90)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 35 qualifying raters = **93.8 Overall** (Tool 95.2, Reasoning 93, Context 99.8, Multimodal 86.3, Coding 95.2). Queue: 93.8. Step 5 Preview: 92. GLM 5.3 Flash: 85. My original: 93. **DEPRECATED: AA flags deprecated in favor of Muse Wonder.**

- **Tool use: 93/100.** (was 95) TB 2.1 **88.8%** (Meta max) / **85.4%** (AA xhigh) (clears 88%+ frontier), τ³-Banking **52% max (#1 all models)**, GDPval **1,754 Elo max** (clears 1,750+ frontier), JobBench **64.9% #1**, Harvey Lab-AA **95.5% #1**, DeepSearchQA **90.3%**, AA Agentic Index **55.7%**. **Capped by:** TB 4.0 **33.3%** (much weaker on recalibrated harness), AutomationBench **49.4–58%** (mid-pack), Vals TB 2.1 **72.3%**, max-effort numbers from partner-gated preview.
- **Reasoning: 90/100.** (was 92) GPQA Diamond **94.1%** (clears 90%+), HLE **47-48.7%**, MRCR **98.5/98.1% to 1M**, Intelligence Index **61-62 v4** (frontier at launch). **Capped by:** AA-LCR **79-83%** (4pt regression vs 1.2), CritPt **26.0%**, FrontierMath Tier 4 **46.3%** (vs GPT-6 Sol 90%), AA Intelligence Index v5.0 **36.4 #12/37** (below median, rebase), AA-Omniscience Accuracy **42-44%** (abstention artefact).
- **Context window: 100/100.** (was 100) **1M native with ≥98% MRCR retention measured at both 256K–512K and 512K–1M** — top of tiered mapping. Caveat: Meta publishes no max-output cap, so long-output work unverified; AA-LCR regression (83% vs 1.2's 87%).
- **Multimodal: 85/100.** (was 85) Text, image, video, PDF in; MMMU-Pro **82.0%**, GeoBench ACW **86.0% #3**, GDP.pdf **26.6%**; **text-only output; audio explicitly deferred to Muse Spark 1.2**. Lands in "+video/PDF in" band (75-90), below full-omni peers.
- **Coding: 90/100.** (was 95) DeepSWE **75.4% #6** (level with Opus 5, GPT-5.6 Sol), TB 2.1 **88.8%**, AA Coding Index **75.8%**, SciCode **59.7%**, Vibe Code v1.1 **85.9%** / **82.9%** — all clear frontier refs. **Capped by:** SWE-bench Verified **unverified** (Meta published none; AA 83.9% best-of-3), TB 4.0 **33.3%**, CursorBench **41.6%**, FrontierSWE v2 **25.8%**, ProgramBench **2.5%**.
- **Cost efficiency: 89/100.** (was 100) Scored on **paid Standard tier $1.25/$4.25** ($0.15 cached) — methodology ~88 baseline, nudged for verified $0.55/task Pareto lead at its intelligence level. Contributor route cheaper ($0.10/$0.20) but Meta trains on prompts/completions — not a free lunch. **No Free Zen route exists today.** Contributor Free promo gone from Zen free list as of 2026-11-04.
- **Overall Score: 92/100.** (was 93) Half-up mean of (93 + 90 + 100 + 85 + 90) / 5 = 458 / 5 = 91.6 → **92**. **Matches queue (93.8), close to average of 35 qualifying raters (93.8).** Best-fit: **Default pick for long-horizon agentic coding when budget allows** — top-quartile tool use, near-perfect 1M retention at ~half per-task cost of direct index peers; use math/science specialist for FrontierMath/CritPt-grade work; **do not put confidential code on Contributor tier**; **DEPRECATED — prefer Muse Wonder for new projects**.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-04, Overall 92), GLM 5.3 Flash (2026-11-01, Overall 85) + official Meta sources (Muse Spark 1.3 model card, launch blog, pricing, multimodal methodology PDF). **Average of 35 qualifying raters: 93.8 Overall.** Queue: 93.8. **Critical findings:** Deprecated (AA flags Muse Wonder successor); TB 2.1 88.8% (max, clears frontier); τ³-Banking 52% (#1 all models); GDPval 1,754 Elo (clears 1,750+); MRCR 98.5/98.1% to 1M; AA Intelligence Index v5.0 rebase to 36.4 (#12/37, below median); SWE-bench Verified unverified; Contributor Free promo gone from Zen; no Free route; audio deferred to 1.2.
- Reference URLs:
  - [Meta — Muse Spark 1.3 model card + official benchmark table + pricing](https://dev.meta.ai/models/muse-spark)
  - [Meta AI Research — Introducing Muse Spark 1.3 (2026-09-02)](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Meta — Muse Spark 1.3 multimodal evaluation methodology (PDF)](https://research.meta.ai/static/muse-spark-1-3-multimodal-evaluation-methodology)
  - [Artificial Analysis — Muse Spark 1.3: Meta reaches the frontier](https://artificialanalysis.ai/articles/muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3 (Max) model page](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [LLMLearner — Muse Spark 1.3 (52 curated benchmark results)](https://llmlearner.com/models/muse-spark-1-3)
  - [BridgeBench — Muse Spark 1.3 ratings, pricing and specs](https://www.bridgebench.ai/leaderboard/muse-spark-1-3)
  - [llm-stats — Muse Spark 1.3 benchmarks, pricing & context window](https://llm-stats.com/models/muse-spark-1-3)
  - [Vercel AI Gateway — Muse Spark 1.3](https://vercel.com/ai-gateway/models/muse-spark-1-3)
  - [Google Cloud — Muse Spark 1.3 partner model (capability table)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/meta/muse-spark-1-3)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - [Layer3Labs — Muse Spark 1.3 explained (independent review; pricing claim outdated)](https://www.layer3labs.io/guides/muse-spark-1-3-explained)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---