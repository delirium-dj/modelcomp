# Grok Build 0.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-build-0.1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 — **UNRANKED (BenchLM), NON-REASONING**
- **Short description:** xAI's coding-focused model (Grok Build series) — **BenchLM carries a page for this slug but ONLY ONE benchmark row and NO overall score** ("has 1 source-displayable benchmark rows but no public overall score. It remains unranked"). BenchLM classifies it **Non-Reasoning** (18th such model in corpus). **Queue Overall 74.5 is a roster artefact, not a measured figure.** BenchLM: 1 benchmark row, 0 of 744 with score, unranked.
- **Provider / access:** xAI API, Cloudflare, Vercel AI Gateway, OpenRouter, OpenCode Zen (`opencode/grok-build-0.1`). No Free tier. Proprietary, closed weights.
- **Release / knowledge:** 2026 release (Build series); **knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-build-0.1` (xAI, Zen); `grok-build-0-1` (BenchLM canonical). xAI's Voice/Realtime/TTS lines are distinct identities.
- **Context window:** 256,000 tokens (BenchLM) — **only verified property** for this model.
- **Modalities:** **NOT STATED in any source** — BenchLM's model-details table omits modality field entirely, no visual/multimodal benchmark exists. **Treated as unverified, not assumed on family grounds.**
- **Pricing (as of 2026-11-08):** **Not published in any source checked** — BenchLM row carries no pricing block. **Scored conservatively as unverified.**
- **Architecture:** Proprietary (xAI); parameter count and compute budget undisclosed. "Build" tier name implies build-agent specialization (unverified).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-06) + official xAI sources. **Average of 24 qualifying raters: 73.7 Overall** (Tool 70.5, Reasoning 79.2, Context 79.1, Multimodal 64.3, Coding 75.1). Queue: 73.7 (roster artefact). Step 5 Preview: 57. My original: 35. **BENCHLM: UNRANKED, NON-REASONING, 1 BENCHMARK ROW (Gert Labs 49.15%).**

Agent / tool use:

- Gert Labs: **49.15%** (Gert Labs rankings) — **ONLY BENCHMARK ROW** (Step 5 / GLM)
- Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench, AA ITBench: **NO MEASURED BENCHMARKS** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

Coding:

- SWE-bench (all variants), LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

Multimodal:

- MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM) — **modality set itself UNVERIFIED**

Long context:

- Context window: **256,000 tokens** (BenchLM) — **ONLY VERIFIED PROPERTY**
- AA-LCR, MRCR, GraphWalks: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 24 qualifying raters = **73.7 Overall** (Tool 70.5, Reasoning 79.2, Context 79.1, Multimodal 64.3, Coding 75.1). Queue: 73.7 (roster artefact). Step 5 Preview: 57. My original: 35. **BENCHLM: UNRANKED, NON-REASONING, 1 BENCHMARK ROW (Gert Labs 49.15%), MODALITIES UNVERIFIED, PRICING UNPUBLISHED.**

- **Tool use: 52/100.** (was 45) Anchored on **Gert Labs 49.15% (mid-tier)** — only evidence. **Held at 52 (not floor) because single benchmark cannot establish level.** **Capped by TOTAL ABSENCE of Terminal-Bench, τ²/τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench, AA ITBench** — all three frontier refs unmeasured.
- **Reasoning: 50/100.** (was 30) **SCORED AT METHODOLOGY NEUTRAL FLOOR for "claimed, entirely unmeasured."** No reasoning benchmark exists — no GPQA, HLE, CritPt, AA-LCR, AA Intelligence Index, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro. **Scored at 50, not above, because unmeasured claim must not be scored as demonstrated.** BenchLM's **Non-Reasoning classification** is the structural signal pointing downward.
- **Context window: 85/100.** (was 55) **256,000 tokens (BenchLM)** — only verified spec. **Scored at 200K–500K band ceiling (85) because NO AA-LCR, MRCR, GraphWalks figure exists** — window's usable depth entirely unverified. No max-output limit published.
- **Multimodal: 50/100.** (was 15) **SCORED AT NEUTRAL FLOOR because modality set UNVERIFIED.** BenchLM's model-details table omits field entirely; no source states inputs; no visual/audio benchmark exists. **Scored at 50, not assuming text+image on family grounds.**
- **Coding: 50/100.** (was 30) **SCORED AT NEUTRAL FLOOR.** No coding benchmark exists — no SWE-bench, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode. **Scored at 50, not lower on inference that "Build" tier implies coding substrate; not above 50 because nothing supports it.**
- **Cost efficiency: 60/100.** (was 75) **NO RATE CARD PUBLISHED** — placeholder for unknown. Scored at methodology ~$3/$15 anchor (≈60). Sibling rate cards (Grok 4.5/4.6 at $2/$6) are only directional signal. **Explicitly a placeholder, not an estimate.**
- **Overall Score: 57/100.** (was 35) Half-up mean of (52 + 50 + 85 + 50 + 50) / 5 = 287 / 5 = 57.4 → **57**. **Below average of 24 qualifying raters (73.7).** Best-fit: **DO NOT SELECT — unranked, 1 benchmark (Gert Labs 49.15%), Non-Reasoning, 256K context only verified property, modalities/pricing unverified.** Queue 74.5 is roster artefact. Prefer Grok 4 (51.56), 4.3 (52.89), 4.20 (56.41) — better-evidenced at similar prices. If you need Grok Build 0.1, **benchmark it yourself first** — this report's 57 is a floor on evidence, not capability judgement, and 4 of 6 dimensions rest on nothing.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from Step 5 Preview (2026-11-06, Overall 57) + official xAI sources (BenchLM model page, Gert Labs rankings). **Average of 24 qualifying raters: 73.7 Overall.** Queue: 73.7 (roster artefact). **Critical findings:** BenchLM UNRANKED, Non-Reasoning, 1 benchmark row (Gert Labs 49.15%), 256K context only verified property, modalities/pricing unverified. Queue 74.5 is roster artefact. Prefer Grok 4/4.3/4.20.
- Reference URLs:
  - [BenchLM — Grok Build 0.1 (1 benchmark row, 0 of 744 with score, unranked)](https://benchlm.ai/models/grok-build-0-1)
  - [Gert Labs Rankings](https://gertlabs.com/rankings)
  - [xAI API Documentation](https://x.ai/api)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
  - See also: `model/grok-4/` (51.56), `model/grok-4.3/` (52.89), `model/grok-4.20/` (56.41) — better-evidenced Groks
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---