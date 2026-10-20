# GPT-5 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5`, released 2025-08-07)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (the unified flagship that replaced the o-series/ GPT-4o split, 2025-08-07)
- **Short description:** OpenAI's original unification play — one model with a router-selected thinking depth (minimal→high, settable via `reasoning_effort`) that set the August-2025 frontier: AIME 2025 94.6%, SWE-bench Verified 74.9%, GPQA Diamond 88.4%, Aider Polyglot 88%, HealthBench Hard 46.2%, and launch-day leads on multimodal and agentic evals. Its effort range was the story: the same weights swing 44.7 AIME points from `minimal` to `high` — the model that made "reasoning effort" a first-class API parameter. In 2026 it is a legacy tier (retirement scheduled 2026-12-11) superseded by GPT-5.1/5.2/5.3-Codex/5.4/5.6, but it remains the reference point for the GPT-5 family's price/capability shape ($1.25/$10.00, batch $0.625/$5.00).
- **Provider / access:** OpenAI API, Azure, and 37 hosts (OpenRouter, Databricks, Bedrock-style gateways…); proprietary, API-only.
- **Release:** 2025-08-07; knowledge cutoff 2024-09-30; retires 2026-12-11 (OpenAI listing).
- **Context window:** 400K tokens; max output 128K (272K on some routes).
- **Modalities:** Text and image in → text out; full tool stack (function calling, web search, code interpreter).
- **Pricing (as of 2026-10-09):** $1.25/M input, $10.00/M output, $0.125 cache read; batch $0.625/$5.00; Priority $2.50/$20.
- **Speed:** competitive for its class; the model that established the "router decides how long to think" pattern.

### Raw benchmarks found

- Artificial Analysis today (2026-10-19): Intelligence Index **23** (estimated, #140/217 — now below its class median of 27; deprecated page, 10k workload only), 109.9 tok/s, TTFT 63.16s, $1.25/$10.00 with 90% cache discount (blended $1.34/M), 400k context, text+image, 2 providers, knowledge cutoff Sep 2024 — DEPRECATED on AA (suggests GPT-5.1). BenchLM has no standalone GPT-5 page (404).

Launch table (xhigh effort):

- AIME 2025: **94.6%**; SWE-bench Verified: **74.9%**; GPQA Diamond: **88.4%**; Aider Polyglot: **88%**; MMMU: **84.5%**; HealthBench Hard: **46.2%**

Third-party (Epoch AI via modelbenchmark.io, by effort):

- Aider Polyglot: **88.0** (high) / 86.7 (medium) / 81.3 (low)
- MATH Level 5: **98.1**; OTIS Mock AIME 2024-25: **91.4** (high) / 87.2 (medium) / 46.7 (minimal)
- GPQA Diamond: **86.2** (high) / 85.3 (medium) / 71.7 (minimal)
- SWE-bench Verified: **73.5 ±2.0** (high, Epoch) / 71.8 (OpenHands) / 71.5 (medium) — sources disagree by 8.5 points across settings
- FrontierMath v1: 48.6 (medium); FrontierMath T1-3 v2: 55.4 (high); T4 v2: 21.9 (high); T4 (2025): 6.2
- SimpleQA Verified: **50.1**; Chess Puzzles: 37.0; Mystery Game Puzzles: 23.0; EBR-bench: 12.7
- Derived composite: 77th percentile of 342 models (coding 94th pct, reasoning 65th, math 74th); effort range 8.8 composite points (minimal 45th → high 85th percentile)

Benchmarks that did not exist at its launch (TB 2.x, τ³, MCP Atlas, GDPval, HLE, ARC-AGI): **no verified public score found** for the original GPT-5.

### Normalized scores (1–100)

- **Tool use: 70/100.** The full 2025 tool stack (function calling, web search, code interpreter) plus an 88% Aider Polyglot and the 94th-percentile coding composite imply capable tool use — but no Terminal-Bench, τ³, MCP Atlas or GDPval run exists for the original model, so mid-upper on evidence.
- **Reasoning: 82/100.** GPQA Diamond 86.2–88.4%, AIME 91.4–94.6%, MATH-L5 98.1% and FrontierMath T1-3 55.4% are the upper band; SimpleQA 50.1%, Chess 37.0% and the 44.7-point effort swing (minimal-effort GPQA 71.7%) show the model is only as strong as the effort you pay for.
- **Context window: 78/100.** 400K is the 200K–500K band (65–84) with no published retrieval curve (no MRCR/RULER/AA-LCR for the original GPT-5).
- **Multimodal: 68/100.** Text + image in → text out is the 60–70 band; MMMU 84.5% was frontier-leading at launch and remains decent, but there is no video/audio input and no non-text output.
- **Coding: 82/100.** SWE-bench Verified 73.5–74.9%, Aider Polyglot 88% and the 94th-percentile coding composite were the frontier standard of August 2025 and remain strong; by 2026 agentic-coding standards (TB 2.1, SWE-Pro, DeepSWE) the model is untested and outclassed.
- **Cost efficiency: 85/100.** $1.25/$10.00 with $0.125 cache and 45%-off batch maps to the methodology's ~$1.25/$4.25 ≈ 88 / $3/$15 ≈ 60 range — mid-tier; the GPT-5.6 line at similar or lower prices outperforms it now.
- **Overall Score: 76/100.** Best-fit recommendation: the historical anchor of the GPT-5 family — the model that unified fast and deep reasoning into one API and set the August-2025 frontier; a legacy tier with retirement scheduled 2026-12-11, still useful where its exact price/effort shape matters.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19): Artificial Analysis now shows GPT-5 as a deprecated page (superseded by GPT-5.1) with an estimated Intelligence Index of 23 (#140/217 — below the class median, consistent with the legacy-tier read), 109.9 tok/s, TTFT 63.16s, $1.25/$10.00 unchanged; BenchLM still has no standalone GPT-5 page. The launch/Epoch evidence (AIME 94.6%, SWE-bench 73.5–74.9%, GPQA 86.2–88.4%, Aider Polyglot 88%) and the absent agentic-suite runs (TB 2.x, τ³, MCP Atlas, GDPval) are unchanged — no score change warranted; retirement remains scheduled 2026-12-11. Second-pass verification (2026-10-10): benchmarklist.com has no standalone GPT-5 page; re-checked the OpenAI launch table, modelbenchmark.io Epoch-AI score table and CloudPrice lifecycle data — same conclusion. Prior pass (2026-10-09) used OpenAI GPT-5 launch materials and API pricing, modelbenchmark.io Epoch-AI score table, CloudPrice lifecycle data.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Sol.md`, using the same headings.
