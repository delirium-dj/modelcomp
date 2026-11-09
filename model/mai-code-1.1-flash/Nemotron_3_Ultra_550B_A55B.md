# MAI-Code-1.1-Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Microsoft AI (`mai-code-1.1-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash (Microsoft's code-specialised Flash tier) — **UNRANKED (BenchLM: 3 rows, no overall score)**
- **Short description:** Microsoft AI's lightweight agentic coding model — **BenchLM: UNRANKED (3 SOURCE-DISPLAYABLE ROWS, NO OVERALL SCORE)**. Queue Overall 73.8 is **ROSTER ARTEFACT, NOT A MEASURED FIGURE**. **JOINT-THINNEST EVIDENCE BASE IN SERIES (3 ROWS, ALL VENDOR-SOURCED FROM MICROSOFT MODEL CARD).** SWE-bench Verified 72.6%, TB 2.1 62.9%. **NO INDEPENDENT MEASUREMENT OF ANY KIND.** **NO RATE CARD PUBLISHED — placeholder cost.**
- **Provider / access:** Microsoft AI platform, GitHub Copilot (experimental, across Copilot app, CLI, VS Code by end Oct 2026), Azure, **OpenCode Zen (`opencode/mai-code-1.1-flash` — NO FREE ID)**. Locally downloadable (3-bit quantized, >120GB RAM recommended). **Closed-source, proprietary weights.** **NO FREE ID ON ZEN.**
- **Release / knowledge:** 2026-10-07 release (predecessor MAI-Code-1-Flash 2026-06-02). **Knowledge cutoff: NOT DISCLOSED.**
- **IDs:** `opencode/mai-code-1.1-flash` (Zen, paid); `microsoft.ai/MAI-Code-1.1-Flash` (official). **Canonical BenchLM slug: `mai-code-1-1-flash` (dotted) — repo folder `mai-code-1.1-flash` is correct.**
- **Context window:** **256,000 tokens total (256K)** — **QUARTER OF 1M STANDARD**; max output 128K (meta-verified; 3-bit on-device retains full 256K).
- **Modalities:** **Text, image, PDF IN → text out** (reasons over image contents). **NO VIDEO/AUDIO INPUT.** Reasoning (adaptive thinking — concise for simple, more budget for complex); tool calls (agentic coding in GitHub Copilot harness); JSON mode not documented.
- **Pricing (as of 2026-11-08):** **NO RATE CARD PUBLISHED** — BenchLM row carries none. **Placeholder scored at methodology ~$3/$15 anchor (60) lifted to 76 on Flash-tier inference.** Microsoft card: $0.20/$1.20 per 1M (GitHub Copilot), cached $0.02; local calls free. **NO FREE ID ON ZEN.** Closed-source, proprietary weights. **LOCAL CALLS FREE (3-bit quantized, >120GB RAM).**
- **Architecture:** Proprietary (cloud); locally downloadable 3-bit quantized build (~138B params per LLMLearner); trained on clean enterprise data; adaptive solution length control; RL across thousands of GitHub Copilot environments.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-07) + official Microsoft sources. **Average of 22 qualifying raters: 73.7 Overall** (Tool 75.1, Reasoning 68.8, Context 78.2, Multimodal 68.9, Coding 78.2). Queue: 73.7 (roster artefact). Step 5 Preview: 62. GLM 5.3 Flash: 71. My original: 48. **UNRANKED (BENCHLM); 3 VENDOR ROWS ONLY (JOINT-THINNEST IN SERIES); NO INDEPENDENT MEASUREMENT; NO RATE CARD.**

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (Microsoft model card) — **12.4PTS UNDER 85%+ TERMINAL REF** (GLM / Step 5)
- Production metrics: code survival **+4%**, return visits **+9%** (Microsoft, GitHub Copilot production) (GLM)
- **TB 2.0/4.0, τ²/τ³-Bench, GDPval-AA, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, APEX-Agents: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE**

Reasoning / knowledge:

- **NO VERIFIED PUBLIC REASONING BENCHMARKS** — GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath — **ALL REASONING/KNOWLEDGE/RELIABILITY REFS UNMEASURED** (GLM / Step 5)
- Adversarial-reasoning (186 Qs, 34 cats, Microsoft-internal): predecessor MAI-Code-1-Flash **85.8% adjusted accuracy** — 1.1 inherits training but no 1.1-specific value (GLM)
- AA Intelligence Index / BenchLM overall: **UNRANKED (3 source-displayable rows, no public overall score)** (GLM / Step 5)

Coding:

- SWE-bench Verified: **72.6%** (Microsoft model card) — **12.4PTS UNDER 85%+ TERMINAL REF** (GLM / Step 5)
- SWE-bench Pro (predecessor): **51.2%** (Microsoft production harness, June 2026) — **NO 1.1-SPECIFIC VALUE** (GLM)
- Terminal-Bench 2.1: **62.9%** (Microsoft model card) — **25.1PTS UNDER 88%+ FRONTIER REF** (GLM / Step 5)
- LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode, TB 4.0: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- Efficiency: **25% fewer tokens per task, 25% faster token streaming than 1.0** (Microsoft, production) (GLM)

Multimodal:

- Text, image, **PDF in → text out** (reasons over image contents). **NO VIDEO/AUDIO INPUT DOCUMENTED.** (GLM / Step 5)
- **NO MULTIMODAL BENCHMARKS** — modality set unverified (BenchLM omits field) (GLM / Step 5)

Long context:

- **256,000 tokens total (256K)** — **QUARTER OF 1M STANDARD**; max output 128K (meta-verified; 3-bit on-device retains full 256K). (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS / AA-LCR VERIFIED** — usable depth unverified (GLM / Step 5)
- Local 3-bit build retains full 256K window; zero inference charges for local calls (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 22 qualifying raters = **73.7 Overall** (Tool 75.1, Reasoning 68.8, Context 78.2, Multimodal 68.9, Coding 78.2). Queue: 73.7 (roster artefact). Step 5 Preview: 62. GLM 5.3 Flash: 71. My original: 48. **UNRANKED (BENCHLM); 3 VENDOR ROWS ONLY (JOINT-THINNEST); NO INDEPENDENT MEASUREMENT; NO REASONING REFS; NO RATE CARD.**

- **Tool use: 60/100.** (was 55) TB 2.1 **62.9%** (25.1pts under 88%+ frontier); production metrics code survival **+4%**, return visits **+9%**. **Capped by:** **NO TB 2.0/4.0, τ²/τ³-Bench, GDPval-AA, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index** — ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE. Single vendor figure.
- **Reasoning: 50/100.** (was 40) **SCORED AT NEUTRAL FLOOR FOR "DIMENSION CLAIMED, ENTIRELY UNMEASURED."** Predecessor adversarial-reasoning **85.8%** (provisional); adaptive thinking + multi-turn instruction-following. **NO GPQA/HLE/CRITPT/AA-LCR/AA INTELLIGENCE INDEX/AA-OMNISCIENCE/ARC-AGI/MRCR/AIME/MATH/MMLU-PRO/FRONTIER MATH — ALL 5 REASONING REFS UNMEASURED.** Scored at 50 because SWE-V 72.6% requires reasoning — **EXPLICITLY PLACEHOLDER, NOT MEASUREMENT.**
- **Context window: 85/100.** (was 55) **256K (200K-500K band ceiling, 85)** — **quarter of 1M standard**. **Scored at band ceiling because 256K is verified and no vendor gating on window.** Held below ≥1M tier: quarter of standard, NO MRCR/GraphWalks/RULER/AA-LCR.
- **Multimodal: 50/100.** (was 15) **MODALITY UNVERIFIED** — BenchLM omits field; no source states inputs; no visual benchmark. **SCORED AT NEUTRAL FLOOR FOR "CLAIMED, ENTIRELY UNMEASURED."** Text, image, PDF in (per Microsoft card) — +PDF-in band (75-90). **NO VIDEO/AUDIO INPUT DOCUMENTED.** **NO MULTIMODAL BENCHMARKS.** **NO CLAIM = SCORED AS UNVERIFIED, NOT ASSUMED TEXT-ONLY.**
- **Coding: 72/100.** (was 75) SWE-V **72.6%** (mid-frontier repair, 12.4pts under 85%+ ref); TB 2.1 **62.9%** (mid-tier terminal). **Capped by:** **NO SWE-Pro/LCB/DeepSWE/AA-SciCode/AA Coding Index/Vibe Code/TB 4.0/FrontierCode** — 85%, 74%, 70%, 55% refs unmeasured; both figures vendor-sourced, no independent corroboration.
- **Cost efficiency: 76/100.** (was 50) **NO RATE CARD PUBLISHED** — Flash-tier inference, placeholder at methodology ~$3/$15 anchor (60) lifted to 76 on Flash-tier inference. $0.20/$1.20 per 1M (GitHub Copilot), cached $0.02; **LOCAL CALLS FREE (3-bit, >120GB RAM)**. **Explicitly positioning-based inference, not measurement.** Held below 88: no free tier, no published rate, no cache-read figure, closed-source, no self-hosting escape.
- **Overall Score: 63/100.** (was 48) Half-up mean of (60 + 50 + 85 + 50 + 72) / 5 = 317 / 5 = 63.4 → **63**. **Far below queue (73.8), average of 22 qualifying raters (73.7).** Best-fit: **3-ROW UNRANKED CODE SKU WITH NO CAPABILITY JUDGEMENT POSSIBLE.** SWE-V 72.6%, TB 2.1 62.9%, 256K window — **QUEUE 73.8 IS ROSTER ARTEFACT (BENCHLM UNRANKED).** ALL 3 ROWS VENDOR-SOURCED, NO INDEPENDENT CORROBORATION. **BENCHMARK IT YOURSELF (Vals AA SWE-V/TB) BEFORE RELYING.** Sibling MAI-Thinking-1 (53.0) better-evidenced; GPT-5.3 Codex (62.92, refreshed earlier) better-evidenced Codex.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 62), GLM 5.3 Flash (2026-11-07, Overall 71) + official Microsoft sources (MAI-Code-1.1-Flash model card PDF, BenchLM, GitHub Copilot production metrics, LLMLearner). **Average of 22 qualifying raters: 73.7 Overall.** Queue: 73.7 (roster artefact). **Critical findings:** UNRANKED (BenchLM); **3 VENDOR ROWS ONLY (JOINT-THINNEST IN SERIES)**; SWE-V 72.6%; TB 2.1 62.9%; **NO INDEPENDENT MEASUREMENT**; NO REASONING REFS; NO RATE CARD; 256K context (1/4 standard); local calls free (3-bit, >120GB RAM); GitHub Copilot production metrics +4% survival, +9% return visits; **BENCHMARK IT YOURSELF BEFORE RELYING**; queue 73.8 = roster artefact.
- Reference URLs:
  - [Microsoft AI — MAI-Code-1.1-Flash model card (primary source for all three rows)](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)
  - [BenchLM — MAI-Code-1.1-Flash (3 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/mai-code-1-1-flash)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: `model/mai-thinking-1/` (53.0) — better-evidenced sibling; `model/gpt-5.3-codex/` (62.92) — better-evidenced Codex, refreshed earlier this session
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---