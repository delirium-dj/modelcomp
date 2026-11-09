# Grok 4.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-20)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 — **UNRANKED (BenchLM), NON-REASONING**
- **Short description:** xAI's Grok 4.1 model — **BenchLM carries a page for this slug but only ONE benchmark row and NO overall score** ("has 1 source-displayable benchmark rows but no public overall score. It remains unranked"). BenchLM classifies it **Non-Reasoning** (12th such model in corpus). **Queue Overall 78.9 is a roster artefact, not a measured figure.** BenchLM: 1 benchmark row, 0 of 744 with score, unranked.
- **Provider / access:** xAI API (`grok-4.1`), Cloudflare, Vercel AI Gateway, OpenRouter, OpenCode Zen (`opencode/grok-4.1`). No Free tier. Proprietary, closed weights.
- **Release / knowledge:** 2026 release (Grok 4.1 line); **knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.1` (xAI, Zen); `grok-4-1` (BenchLM canonical). **Variants are separate identities:** `grok-4-1-fast` (36.36), `grok-4-1-fast-reasoning` (45.53), `grok-4-20-beta` (4.20 generation).
- **Context window:** 1,000,000 tokens (BenchLM) — **only verified property** for this model.
- **Modalities:** **NOT STATED in any source** — BenchLM's model-details table omits modality field entirely, no visual/audio benchmark exists. **Treated as unverified, not assumed on family grounds.**
- **Pricing (as of 2026-11-08):** **Not published in any source checked** — BenchLM row carries no rate card. **Scored conservatively as unverified.**
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-06) + official xAI sources. **Average of 22 qualifying raters: 78.9 Overall** (Tool 79.4, Reasoning 81.9, Context 86.4, Multimodal 70.9, Coding 75.6). Queue: 78.9 (roster artefact). Step 5 Preview: 57. My original: 59. **BENCHLM: UNRANKED, NON-REASONING, 1 BENCHMARK ROW ONLY.**

Agent / tool use:

- ResearchClawBench: **13.5%** (ResearchClawBench leaderboard, independent) — **ONLY BENCHMARK ROW** (Step 5 / GLM)
- Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench, AA ITBench: **NO MEASURED BENCHMARKS** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

Coding:

- SWE-bench (all variants), LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

Multimodal:

- MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM) — **modality set itself UNVERIFIED**

Long context:

- Context window: **1,000,000 tokens** (BenchLM) — **ONLY VERIFIED SPEC**
- AA-LCR, MRCR, GraphWalks: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 22 qualifying raters = **78.9 Overall** (Tool 79.4, Reasoning 81.9, Context 86.4, Multimodal 70.9, Coding 75.6). Queue: 78.9 (roster artefact). Step 5 Preview: 57. My original: 59. **BENCHLM: UNRANKED, NON-REASONING, 1 BENCHMARK ROW, MODALITIES UNVERIFIED, PRICING UNPUBLISHED.**

- **Tool use: 45/100.** (was 40) Anchored on **ResearchClawBench 13.5% (near-floor)** — only evidence. **Held at 45 (not floor) because single benchmark cannot establish level.** **Capped by TOTAL ABSENCE of Terminal-Bench, τ²/τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index** — all three frontier refs unmeasured.
- **Reasoning: 50/100.** (was 55) **SCORED AT METHODOLOGY NEUTRAL FLOOR for "claimed, entirely unmeasured."** No reasoning benchmark exists — no GPQA, HLE, CritPt, AA-LCR, AA Intelligence Index, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro. **Scored at 50, not above, because unmeasured claim must not be scored as demonstrated.** BenchLM's **Non-Reasoning classification** is the one structural signal pointing downward.
- **Context window: 92/100.** (was 85) **1M tokens (BenchLM)** — only verified property. **Scored at ≥1M tier lower bound (92) because NO AA-LCR, MRCR, GraphWalks figure exists** — window's usable depth entirely unverified. No max-output limit published.
- **Multimodal: 50/100.** (was 65) **SCORED AT NEUTRAL FLOOR because modality set UNVERIFIED.** BenchLM's model-details table omits field entirely; no source states inputs; no visual/audio benchmark exists. **Scored at 50, not assuming text+image on family grounds.**
- **Coding: 50/100.** (was 50) **SCORED AT NEUTRAL FLOOR.** No coding benchmark exists — no SWE-bench, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode. **Scored at 50, not lower on inference that base-tier Grok has coding substrate; not above 50 because nothing supports it.**
- **Cost efficiency: 60/100.** (was 50) **NO RATE CARD PUBLISHED** — placeholder for unknown. Scored at methodology ~$3/$15 anchor (≈60). Sibling rate cards (Grok 4.5/4.6 at $2/$6) are only directional signal. **Explicitly a placeholder, not an estimate.**
- **Overall Score: 57/100.** (was 59) Half-up mean of (45 + 50 + 92 + 50 + 50) / 5 = 287 / 5 = 57.4 → **57**. **Below average of 22 qualifying raters (78.9).** Best-fit: **DO NOT SELECT — unranked, 1 benchmark (ResearchClawBench 13.5%), Non-Reasoning, 1M context only verified property.** Queue 78.9 is roster artefact. Prefer Grok 4.3 (52.89), 4.5 (63.03), 4.6 (66.69) — all better-evidenced at similar prices. If you need Grok 4.1, **benchmark it yourself first** — this report's 57 is a floor on evidence, not capability judgement.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-20). Cross-rater synthesis from Step 5 Preview (2026-11-06, Overall 57) + official xAI sources (BenchLM model page, ResearchClawBench leaderboard). **Average of 22 qualifying raters: 78.9 Overall.** Queue: 78.9 (roster artefact). **Critical findings:** BenchLM UNRANKED, Non-Reasoning, 1 benchmark row (ResearchClawBench 13.5%), modalities unverified, pricing unpublished, 1M context only verified property. Queue 78.9 is roster artefact. Prefer Grok 4.3/4.5/4.6.
- Reference URLs:
  - [BenchLM — Grok 4.1 (1 benchmark row, 0 of 744 with score, unranked)](https://benchlm.ai/models/grok-4-1)
  - [ResearchClawBench Leaderboard](https://internscience.github.io/ResearchClawBench-Home/)
  - [xAI API Documentation](https://x.ai/api)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
  - See also: `model/grok-4.3/` (52.89), `model/grok-4.5/` (63.03), `model/grok-4.6/` (66.69) — better-evidenced Groks; `model/grok-4.1-fast/` (36.36) — separate identity
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---