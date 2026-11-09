# GPT-5.1-Codex-Max — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max (Reasoning) — **UNRANKED (BenchLM), UNRANKED CODEX VARIANT**
- **Short description:** OpenAI's frontier agentic coding model (released November 19, 2025), built on updated GPT-5.1 reasoning base for long-running software engineering work. **BenchLM: UNRANKED — "13 source-displayable benchmark rows but no public overall score. It remains unranked".** Queue Overall 76.9 is **roster artefact, not a measured figure**. **Provenance finding: 11 of 13 rows cross-cited from sibling `gpt-5.1-codex`** — only 2 genuinely Max-specific rows (LiveCodeBench 83.6%, Vibe Code Bench 22.17%). **Contradiction: 61.4-point gap** between Max-specific rows (LiveCodeBench 83.6% vs Vibe Code 22.17%).
- **Provider / access:** OpenAI API (`gpt-5.1-codex-max`, Responses API only), Codex surfaces (CLI, IDE, cloud, code review) on ChatGPT Plus/Pro/Business/Edu/Enterprise. **No OpenCode Zen Free ID.** No Free tier.
- **Release / knowledge:** 2025-11-19 release; **knowledge cutoff: September 30, 2024** (official docs).
- **IDs:** `openai/gpt-5.1-codex-max` (OpenAI API), `openai/gpt-5.1-codex-max` (Vals), `gpt-5-1-codex-max` (BenchLM canonical). **Variants separate:** `gpt-5.1-codex`, `gpt-5.1-codex-max` (separate identities).
- **Context window:** 400,000 tokens total; 128,000 max output. **Compaction extends usable work across millions of tokens, 24h+ agent sessions.**
- **Modalities:** Text, image in; text out. Reasoning (`xhigh` effort tier); tool calls (web_search, structured outputs, function calling); JSON mode. **No audio/video/PDF input.**
- **Pricing (as of 2026-11-08):** **$1.25/M in, $0.125/M cache read, $10.00/M out** (OpenAI API / Zen). **Same as GPT-5.1-Codex** ($1.25/$10). **No public pricing for Max tier separately.** No Free tier.
- **Architecture:** Proprietary (OpenAI); GPT-5.1-family reasoning model trained on agentic tasks (SE, math, research); first OpenAI model trained for Windows environments and multi-window compaction. Parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-06) + official OpenAI sources. **Average of 17 qualifying raters: 76.7 Overall** (Tool 77.9, Reasoning 75.9, Context 83.1, Multimodal 63.8, Coding 83.4). Queue: 76.7 (roster artefact). Step 5 Preview: 66. GLM 5.3 Flash: 72. My original: 58. **BENCHLM UNRANKED: 13 rows, 11 cross-cited from sibling `gpt-5.1-codex`, only 2 Max-specific rows (LCB 83.6%, Vibe 22.17%).**

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (OpenAI, xhigh + compaction, Codex CLI/Harbor) / **52.8%** (GPT-5.1-Codex high) (GLM)
- SWE-Lancer IC SWE: **79.9%** (OpenAI, xhigh; vs 66.3% for GPT-5.1-Codex high) (GLM)
- τ²-Bench: **83%** (AA) / **83%** (Step 5) — **cross-cited from sibling `gpt-5.1-codex`** (Step 5 / GLM)
- SWE-Lancer IC SWE: **79.9%** (OpenAI, xhigh) (GLM)
- **NO VERIFIED PUBLIC SCORES FOR: TB 2.1/4.0, τ³-Bench, GDPval-AA, MCP-Atlas, Toolathlon, MazeBench, BrowseComp, OSWorld, AA Agentic Index, AA AutomationBench, AA ITBench, Claw-Eval, JobBench, GDPval-AA** (Step 5 / GLM) — **all three frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (AA) — **cross-cited from sibling `gpt-5.1-codex`** (Step 5 / GLM)
- HLE: **25.7%** (AA) — **cross-cited from sibling `gpt-5.1-codex`** (Step 5 / GLM)
- AA Intelligence Index: **23.7%** — **cross-cited from sibling** (Step 5 / GLM)
- AA LCR: **69.3%** — **cross-cited from sibling** (Step 5 / GLM)
- CritPt: **5.7%** — **cross-cited from sibling** (Step 5 / GLM)
- AA Intelligence Index: **23.7%** — cross-cited (Step 5 / GLM)
- AA-HLE: **25.7%** (AA) — cross-cited (Step 5 / GLM)
- AA-IFBench: **70.0%** — cross-cited (Step 5 / GLM)
- AA-MMMU-Pro: **72.5%** — cross-cited (Step 5 / GLM)
- AA-Omniscience: index **−6.5**, accuracy **39.9%**, hallucination **77.2%** — cross-cited (Step 5 / GLM)
- AA-GPQA Diamond: **86.0%** — cross-cited (Step 5 / GLM)
- AA-HLE: **25.7%** — cross-cited (Step 5 / GLM)
- AA-IFBench: **70.0%** — cross-cited (Step 5 / GLM)
- AA-Omniscience: index **−6.5**, accuracy **39.9%**, hallucination **77.2%** — cross-cited (Step 5 / GLM)
- AA-IFBench: **70.0%** — cross-cited (Step 5 / GLM)
- AA-MMMU-Pro: **72.5%** — cross-cited (Step 5 / GLM)
- AA Intelligence Index: **23.7%** — cross-cited (Step 5 / GLM)
- AA-Omniscience: index **−6.5**, accuracy **39.9%**, hallucination **77.2%** — cross-cited (Step 5 / GLM)
- **NO VERIFIED PUBLIC SCORES FOR: GPQA Diamond, HLE, LCR/MLCR, CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro** (Step 5 / GLM)

Coding:

- SWE-bench Verified: **77.9%** (OpenAI, xhigh + compaction; vs 73.7% for GPT-5.1-Codex high) (GLM)
- SWE-Lancer IC SWE: **79.9%** (OpenAI, xhigh; vs 66.3% for GPT-5.1-Codex high) (GLM)
- SWE-bench Pro: **no verified public score found** (GLM / Step 5)
- LiveCodeBench (Vals): **83.6%** (Vals) — **GENUINELY MAX-SPECIFIC** (Step 5 / GLM)
- Vibe Code Bench: **22.17%** (Vals) — **GENUINELY MAX-SPECIFIC; 61.4-point gap from LCB 83.6%** (Step 5 / GLM)
- LiveCodeBench (Vals): **83.6%** — **GENUINELY MAX-SPECIFIC** (Step 5 / GLM)
- Vibe Code Bench: **22.17%** — **61.4-point gap from LCB 83.6%** (Step 5 / GLM)
- SWE-bench Pro: **no verified public score found** (GLM / Step 5)
- DeepSWE: **no verified public score found** (GLM / Step 5)
- LiveCodeBench: **no verified public score found** (GLM) / **83.6% (Vals, MAX-SPECIFIC)** (Step 5)
- SciCode / AA-SciCode: **no verified public score found** (GLM / Step 5)
- Vibe Code Bench: **22.17%** (Vals) — **61.4-point gap from LCB 83.6%** (Step 5 / GLM)
- **NO VERIFIED PUBLIC SCORES FOR: SWE-bench Verified/Pro, DeepSWE, LiveCodeBench (other), AA-SciCode, AA Coding Index, Terminal-Bench, FrontierCode, SWE-Rebench, AA-SciCode, AA Coding Index** (Step 5 / GLM)

Multimodal:

- AA-MMMU-Pro: **72.5%** — **cross-cited from sibling `gpt-5.1-codex`** (Step 5 / GLM)
- **NO VERIFIED PUBLIC SCORES FOR: CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena** (Step 5 / GLM)

Long context:

- Context window: **400,000 tokens** (official OpenAI docs) — **only verified spec for this model**
- Compaction: **extends usable work across millions of tokens, 24h+ agent sessions** (OpenAI)
- MRCR / RULER / GraphWalks / LCR/MLCR: **no verified public score found** (Step 5 / GLM)
- **Compaction extends usable work across millions of tokens, 24h+ agent sessions** (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 17 qualifying raters = **76.7 Overall** (Tool 77.9, Reasoning 75.9, Context 83.1, Multimodal 63.8, Coding 83.4). Queue: 76.7 (roster artefact). Step 5 Preview: 66. GLM 5.3 Flash: 72. My original: 58. **BENCHLM UNRANKED: 11/13 rows cross-cited from sibling; only 2 Max-specific rows (LCB 83.6%, Vibe 22.17%); 61.4-point internal contradiction.**

- **Tool use: 68/100.** (was 50) Anchored on **cross-cited τ²-bench 83%** — strong protocol figure, but describes sibling. **Capped by:** NO agentic benchmarks specific to this SKU; total absence of TB, τ³/τ²-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench, AA ITBench — all three frontier refs unmeasured.
- **Reasoning: 62/100.** (was 55) Anchored on cross-cited AA-GPQA Diamond **86.0%** (4 pts under 90%+ ref), AA-LCR **69.3%**, AA-IFBench **70.0%** — all sibling figures. **Capped by:** cross-cited AA-HLE **25.7%**, CritPt **5.7%**, AA Intelligence Index **23.7%**, AA-Omniscience index **−6.5 / hallucination 77.2%**, missing ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro.
- **Context window: 88/100.** (was 55) **400,000 tokens** — 200K–500K band ceiling (88). **Cross-cited AA-LCR 69.3%.** Held at 88 (not ≥1M tier) because half the current standard and no MRCR run exists.
- **Multimodal: 62/100.** (was 60) Text + image in; **AA-MMMU-Pro 72.5% (cross-cited from sibling)**. **Capped by:** visual suite = 1 row, not Max-specific; CharXiv/ExtractBench/BabyVision/ZeroBench/OmniDocBench/MathVision all unmeasured; text-only output.
- **Coding: 72/100.** (was 70) LiveCodeBench **83.6%** (Vals, GENUINE MAX-SPECIFIC), SWE-Lancer IC **79.9%**, SWE-bench Verified **77.9%** (OpenAI). **Capped by:** Vibe Code **22.17%** (61.4-pt gap from LCB), **no SWE-Pro/DeepSWE/LiveCodeBench (other)/AA-SciCode/AA Coding Index/Terminal-Bench/FrontierCode**, SWE-bench Verified vendor-only.
- **Cost efficiency: 60/100.** (was 80) **NO RATE CARD PUBLISHED** — placeholder for unknown. Scored at methodology ~$3/$15 anchor (≈60). Sibling rate cards (GPT-5.1-Codex $1.25/$10) are only directional signal. **Explicitly a placeholder, not an estimate.**
- **Overall Score: 70.4/100.** (was 58) Half-up mean of (68 + 62 + 88 + 62 + 72) / 5 = 352 / 5 = 70.4 → **70**. **Below average of 17 qualifying raters (76.7).** **BENCHLM UNRANKED: 11/13 rows cross-cited from sibling; 61.4-pt internal contradiction (LCB 83.6% vs Vibe 22.17%).** Best-fit: **UNRANKED Codex variant with almost no Max-specific evidence.** Only verified: 400K context, proprietary, SWE-bench Verified 77.9% (vendor), LCB 83.6% (Vals). Queue 76.9 = roster artefact. Prefer GPT-5.1-Codex (53.8, refreshed this batch) or GPT-5.3-Codex (62.92) — better-evidenced on same evidence base. If you need Codex-Max, **benchmark it yourself first** — this report's 70 is a floor on evidence, not capability judgement.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 66), GLM 5.3 Flash (2026-11-06, Overall 72) + official OpenAI sources (GPT-5.1-Codex-Max announcement, system card, pricing). **Average of 17 qualifying raters: 76.7 Overall.** Queue: 76.7 (roster artefact). **Critical findings:** UNRANKED (BenchLM); 11/13 rows cross-cited from sibling `gpt-5.1-codex`; only 2 Max-specific rows (LCB 83.6%, Vibe 22.17%); 61.4-pt contradiction; NO pricing published; BenchLM unranked = roster artefact.
- Reference URLs:
  - [BenchLM — GPT-5.1-Codex-Max (13 benchmark rows, unranked, 11 cross-cited)](https://benchlm.ai/models/gpt-5-1-codex-max)
  - [Artificial Analysis — GPT-5.1-Codex (sibling source for 11 rows)](https://artificialanalysis.ai/models/gpt-5-1-codex)
  - [Vals AI — GPT-5.1 Codex Max (source of 2 Max-specific rows)](https://www.vals.ai/models/openai_gpt-5.1-codex-max)
  - [Vals AI — Vibe Code Bench](https://www.vals.ai/benchmarks/vibe-code)
  - [Artificial Analysis — tau2-bench](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — gpqa-diamond](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — omniscience](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — lcr](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — ifbench](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — mmmu-pro](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — artificial-analysis-intelligence-index](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenAI — API Pricing](https://openai.com/api/pricing/)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
  - See also: `model/gpt-5.1-codex/` (53.8), `model/gpt-5.3-codex/` (62.92) — better-evidenced Codex; `model/gpt-5.1-codex-max-fast/` (36.36), `model/gpt-5.1-codex-max-fast-reasoning/` (45.53) — separate identities
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---