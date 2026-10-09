# GPT-5 nano — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-nano`, released 2025-08-07)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano (the smallest member of the GPT-5 family, August 2025)
- **Short description:** OpenAI's tiny GPT-5 lane, built for routing, classification, extraction and bulk jobs — a 400K-context reasoning model with image input at the cheapest price in the GPT-5 family ($0.05/$0.40). It was a genuine step up over GPT-4.1 nano-era expectations (AA Intelligence Index 13 at launch, above the 8 median for its price class) but also OpenAI's clearest demonstration of effort scaling: the same weights score GPQA 53.0 at low effort and 69.4 at high, with AIME 41.1→81.1 — at the cost of extreme latency at high effort (95 s TTFT measured by AA). It is now deprecated: OpenAI's scheduling retires it 2026-12-11 and the docs steer new work to GPT-5.4 nano (AA index 21, four times the price).
- **Provider / access:** OpenAI API, Azure, and 30 hosts (OpenRouter, Bedrock-style gateways, Databricks, Vercel…); proprietary, API-only.
- **Release:** 2025-08-07; knowledge cutoff 2024-05-30; retires 2026-12-11 (OpenAI listing).
- **Context window:** 400K tokens; max output 128K (272K on some listings).
- **Modalities:** Text and image in → text out; reasoning with configurable effort (low/medium/high).
- **Pricing (as of 2026-10-09):** $0.05/M input, $0.40/M output, $0.005 cache read (90% discount); batch $0.025/$0.20; Priority tier $2.50/M input.
- **Speed:** 123.9 tok/s output (AA, OpenAI API); TTFT 95.43 s at high effort (vs ~1 s at low).

### Raw benchmarks found

Artificial Analysis (deprecated page, 10k workload):

- Intelligence Index: **13** (estimated; #14 of 59 in its price class; class median 8)
- Speed 123.9 tok/s; TTFT 95.43 s; blended price $0.05/M

Epoch AI (via modelbenchmark.io, by effort setting):

- GPQA Diamond: **69.4** (high) / 67.4 (medium) / 53.0 (low)
- MATH Level 5: **95.2** (medium); OTIS Mock AIME 2024-25: **81.1** (high) / 74.2 (medium) / 41.1 (low)
- SWE-bench Verified: **34.8%** (medium, mini-SWE-agent)
- FrontierMath v1: 14.1 (high); FrontierMath T1-3 v2: 20.0 (high); T4 v2: 2.4
- SimpleQA Verified: **11.7**; Chess Puzzles: 27.0; Mystery Game Puzzles: 9.0
- Derived composite: 39th percentile of 342 models — coding 19th pct, reasoning 49th, math 43rd, knowledge 5th

Reference (GPT-5 mini, high, from the GPT-5.4 nano launch table): SWE-bench Pro 45.7%, TB 2.0 38.2%, GPQA 81.6%, OSWorld 42.0%, MCP Atlas 47.6%, τ²-telecom 74.1% — the nano tier has **no verified public score** on any of these agentic evals.

### Normalized scores (1–100)

- **Tool use: 40/100.** The GPT-5 family's full tool stack (function calling, web search) was available, but nano was never run on Terminal-Bench, τ³, MCP Atlas or GDPval — the only agentic evidence is its positioning (routing/extraction, not agent loops), so a structural low-mid score.
- **Reasoning: 52/100.** GPQA Diamond 69.4% (high effort) and MATH-L5 95.2%/AIME 81.1% are the best sub-10B-class reasoning of its era; AA Intelligence Index 13, SimpleQA 11.7%, FrontierMath 14.1% and the 40-point effort spread (GPQA 53→69) mark it as a small model whose ceiling arrives slowly and expensively.
- **Context window: 72/100.** 400K is the 200K–500K band (65–84) with no published retrieval curve (no MRCR/RULER figure for nano; the GPT-5 family's best long-context numbers sit on the main model).
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band; image input was supported throughout but no MMMU/vision benchmark was published for nano.
- **Coding: 45/100.** SWE-bench Verified 34.8% (mini-SWE-agent, medium effort) and a 19th-percentile coding composite are weak agentic coding; the model was never positioned or measured as a coding agent.
- **Cost efficiency: 96/100.** $0.05/$0.40 with $0.005 cache reads and 45%-off batch — the methodology's ~$0.05/$0.4 ≈ 96 point, the cheapest GPT-5 tier ever sold.
- **Overall Score: 54/100.** Best-fit recommendation: the high-volume cheap lane — classification, extraction and routing at $0.05/M with 400K context and usable (if slow) high-effort reasoning; deprecated with retirement scheduled 2026-12-11, and GPT-5.4 nano supersedes it on every capability axis.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Artificial Analysis deprecated-model page, modelbenchmark.io Epoch-AI score table, OpenAI GPT-5 family pricing/lifecycle data via CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_4_Nano.md`, using the same headings.
