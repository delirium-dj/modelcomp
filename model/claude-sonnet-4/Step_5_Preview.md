# Claude Sonnet 4 — findings by Step 5 Preview

- Source: Anthropic (`claude-sonnet-4-0`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May-2025 mid-tier model (released 2025-05-22 alongside Opus 4) — the generation whose headline was 72.7% on SWE-bench Verified, matching flagship Opus 4 (72.5%) at 5× lower cost, which made it the default backbone for GitHub Copilot's coding agent. Hybrid reasoning (instant + extended thinking up to 64K), $3/$15. **Now retired** — snapshot `claude-sonnet-4-20250514` was deprecated 2026-04-14 and retired 2026-06-15 (re-confirmed on Anthropic's official deprecations record 2026-10-19, which lists `claude-sonnet-5-5` as the replacement).
- **Provider / access:** Was Claude API `claude-sonnet-4-0` (retired); Amazon Bedrock, Google Cloud Vertex. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-05-22; knowledge cutoff March 2025 (AA lists Mar 1, 2025).
- **IDs:** `claude-sonnet-4-0` (alias), `claude-sonnet-4-20250514` (snapshot, retired).
- **Context window:** 200,000 tokens standard; 64K max output; a gated 1M beta (`context-1m-2025-08-07`, Tier 4+, 2× pricing) existed — Artificial Analysis lists the model at **1M** while BenchLM lists **200K**; both are recorded, with 200K the standard/default window.
- **Modalities:** Text, vision (image) and PDF in → text out; hybrid reasoning with extended thinking; tool use; steerability focus.
- **Pricing (as of 2026-10-19):** $3.00 / MTok input, $15.00 output (historical — matching Sonnet 3.7).
- **Architecture:** Proprietary; Claude 4-generation hybrid reasoning transformer.

### Raw benchmarks found

Reasoning / knowledge (Anthropic launch + current AA/Vals runs):

- GPQA Diamond: **75.4%** (launch; 70.0% without thinking; 83.8% with parallel test-time compute); AA: **68.3%** (non-reasoning); Vals: 74.8%
- AIME: **70.5%** (launch; **33.1%** without thinking — re-confirmed 2026-10-19)
- MMLU: **86.5%** (launch; 85.4% without thinking); MMLU-Pro: 83.9% (Vals)
- HLE: **4.3–10.7%** (AA's current runs — the May-2025 generation's ceiling on this benchmark)
- AA Intelligence Index: **16.6–17** (rebased; AA's deprecated page: 17 estimated, #42/296 among non-reasoning models, class median 7)
- IFBench: **54.7%** (AA, thinking) / **45.4%** (AA, non-reasoning — new in the re-run); CritPt: **1.1%** (AA, new)
- AA-Omniscience index **−9.0** (accuracy 22.7%, hallucination rate 41.0%)

Coding:

- SWE-bench Verified: **72.7%** (launch; **80.2%** with parallel test-time compute — matching Opus 4's 79.4%) — re-confirmed 2026-10-19
- Terminal-bench: **35.5%** (launch; 41.3% parallel); AA's Terminal-Bench 2.1: 36.3%; Terminal-Bench Hard: 31.1%
- LiveCodeBench: **62.4%** (Vals); HumanEval: 94.1%
- SWE-bench Pro / DeepSWE / Vibe Code Bench: **no verified public score found**

Agentic / tool use:

- TAU-bench: **Retail 80.5% / Airline 60.0%** (launch)
- **New in the 2026-10-19 re-run:** τ²-bench **52.3%** (AA), Gert Labs **39.66%**, JobBench **18.4%** (weak)
- MCP-Atlas / BrowseComp / GDPval-AA / Toolathlon / Claw-Eval: **no verified public score found**
- BenchLM aggregate (2026-10-19): **38.08** (#149/956)

Multimodal:

- MMMU: **74.4%** (launch; 72.6% without thinking); MMMU-Pro: **62.4%** (AA's current run — re-confirmed 2026-10-19)

Long context:

- 200K-token standard window; **AA-LCR 44.0%** (AA, non-reasoning — new in the re-run; the earlier 70.3% reading was the thinking variant); no MRCR/RULER figure published; gated 1M beta noted above

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged.** The new AA/BenchLM rows (τ² 52.3%, Gert 39.66%, JobBench 18.4%, AA-LCR 44.0%, IFBench 45.4%, aggregate 38.08) are the non-reasoning variant's readings and sit exactly where the existing scores placed the model — mid-band on every axis — while the AA-vs-BenchLM context conflict (1M vs 200K) is documented with 200K kept as the standard window.

- **Tool use: 58/100.** TAU-bench Retail 80.5% / Airline 60.0% at launch were competitive for mid-2025, but the current AA reads (τ² 52.3%, Terminal-Bench 2.1 36.3%, Hard 31.1%, Gert 39.66%, JobBench 18.4%) and the absence of any MCP-Atlas/BrowseComp/GDPval row leave it clearly mid-band by today's standard.
- **Reasoning: 62/100.** GPQA 68.3–75.4%, AIME 33.1–70.5% and MMLU 86.5% were solid in mid-2025; HLE 4.3–10.7%, CritPt 1.1% and the AA Index of 16.6–17 show how far the reasoning frontier has moved since.
- **Context window: 72/100.** 200K-token standard window is the methodology's 200K baseline tier (65–84 band) with AA-LCR 44.0% consistent with that; the gated 1M beta (AA lists 1M, BenchLM 200K) is real but not the default and was never the primary configuration, so the baseline stands.
- **Multimodal: 70/100.** Text + vision + PDF in → text out is the 60–70 band, at its top on MMMU 74.4–74.9% (AA-MMMU-Pro 62.4%); no video/audio input or non-text output.
- **Coding: 64/100.** SWE-bench Verified 72.7% (80.2% parallel, re-confirmed) matched Opus 4 at a fifth of the price — its enduring claim; Terminal-bench 35.5% and LiveCodeBench 62.4% are mid-pack, with no SWE-Pro/DeepSWE/Vibe data and every current-generation coding suite far ahead.
- **Cost efficiency: 60/100.** $3/$15 per MTok maps to the methodology's ~$3/$15 ≈ 60 tier; superseded on price by Sonnet 4.6/5 ($3/$15 → $2/$10) and the whole sub-dollar tier.
- **Overall Score: 65/100.** Best-fit recommendation: a retired mid-2025 workhorse whose SWE-bench-at-Sonnet-price thesis is now delivered better by Sonnet 4.6/5; relevant mainly as a historical baseline and migration source.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — Artificial Analysis deprecated page (Index 17, 1M listing, Mar-2025 cutoff), BenchLM's 15-row aggregate (τ², Gert Labs, JobBench, SWE-bench/GPQA/HLE/Omniscience re-confirmations) and Anthropic's official deprecations record (retirement + replacement); original run used the Anthropic Claude 4 launch post + Sonnet 4 system card, Vals AI, Benchgen, DataLearner and ShawnHack. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.md`, using the same headings.
