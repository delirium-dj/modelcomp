# Claude Sonnet 5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Sonnet 5 (`anthropic/claude-sonnet-5`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost revised 60→65 (Anthropic made the $2/$10 intro rate permanent 2026-08-10; pass-1 scored the lapsed list fallback) + legacy status with 2027-06-30 floor documented, quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model of the pre-5.5 line, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus — now superseded by Sonnet 5.5, which beat it on every axis.
- **Provider / access:** Anthropic API (`claude-sonnet-5`); no OpenCode Zen free ID (`noFreeId`). Adaptive thinking + tool calls.
- **Release / knowledge:** mid 2026 (Sonnet 5 system card); knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-sonnet-5`.
- **Context window:** 1M in / 128K max out (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, file (PDF) in; text out; reasoning on; tool calls. No audio/video, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $3 / $15 per 1M; no free tier.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (41 of 618 rows; 67.35/100, #26 of 645), citing the Anthropic Claude Sonnet 5 system card, Artificial Analysis, Vals AI, Cognition, Cursor, NeoCognition, VulcanBench and OpenRouter (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (system card; Vals 74.5%) — TB 3.0 only 14.6%
- BrowseComp **84.7%**; OSWorld-Verified **81.2%**; GDPval-AA **1603** (AA normalized 47.5%)
- AA Agentic Index 44.3%; ApprenticeBench 16%

Reasoning / knowledge:

- AA-GPQA Diamond: **91.1%** (Vals 88.9); HLE **57.4%** w/ tools (43.2% w/o, AA 41.3; HLE-Verified 31.0)
- AA-LCR 82.0%; CritPt 16.9%; Intelligence Index **38.2**
- Omniscience Accuracy / Hallucination: 40.1% / **39.4%** (low); MMLU-Pro (Vals) 87.5; LABBench2 80.1

Coding:

- SWE-bench Verified **85.2%** (also Vals 79.6); SWE Multilingual 78.3%; LiveCodeBench (Vals) 82.4%
- SWE-bench Pro 63.2%; AA Coding Index 71.5%; Terminal-Bench 2.1 80.4%; VulcanBench CII v1 89.2
- AA-SciCode 54.3% (under 55 ref); FrontierCode 1.1 42.7%; SWE Multimodal 28.1%; CursorBench 3.2 61.5 / 4.0 34.1

Multimodal / long context:

- CharXiv **88.3** (w/o tools 77.0); AA-MMMU-Pro 77.3; Design Arena 1284
- AA-LCR 82.0 at 1M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** BrowseComp 84.7%, OSWorld-Verified 81.2% and GDPval-AA 1603 are respectable, but TB 2.1 80.4% sits under the 88 ref and TB 3.0 14.6%, Agentic Index 44.3% and ApprenticeBench 16% show the 5.5 generation left it behind.
- **Reasoning: 84/100.** GPQA-Diamond 91.1% and HLE 57.4% (43.2% no-tools) clear both bars with a low 39.4% hallucination rate; Index 38.2, HLE-Verified 31.0 and CritPt 16.9 cap it.
- **Context window: 95/100.** 1M-token window / 128K output meets the ≥1M tier and AA-LCR 82.0 is supportive; no ≥98% retrieval-at-length metric published, so the band floor.
- **Multimodal: 78/100.** Text+image+file(PDF) in / text out — the +PDF band (75–90), backed by strong chart work (CharXiv 88.3) and MMMU-Pro 77.3; no audio/video in and no non-text output.
- **Coding: 80/100.** SWE-bench Verified 85.2% and VulcanBench CII 89.2 are good; SWE-bench Pro 63.2%, Coding Index 71.5%, SciCode 54.3% (under ref), SWE Multimodal 28.1% and CursorBench 4.0 34.1% keep it mid.
- **Cost efficiency: 65/100.** (Revised by the 2026-11-03 second pass from 60/100: pass 1 priced the $3/$15 list fallback, but Anthropic's launch page edit of 2026-08-10 states **"Sonnet 5's introductory pricing of $2 per million input tokens and $10 per million output tokens is now permanent"** — one bracket under the $3/$15 ≈ 60 anchor, matching the $2/$10 placement used for GPT-6 Sol. No free tier.) Cost is excluded from Overall.
- **Overall Score: 83/100.** Mean of Tool 80, Reasoning 84, Context 95, Multimodal 78, Coding 80 = 83.4 → 83. Best fit: cost-capped everyday agents and document/chart workflows still on the Sonnet 5 API; new projects should default to Sonnet 5.5 (same $3/$15-class lane, +6 overall) unless pinned to this exact model.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://www.anthropic.com/news/claude-sonnet-5 (**"Edit August 10, 2026: Sonnet 5's introductory pricing of $2 per million input tokens and $10 per million output tokens is now permanent"**) — the vendor page itself corrects pass 1 — corroborated by https://enterprisedna.co/resources/news/anthropic-claude-sonnet-5-pricing-permanent-reversal-august-2026/ (**"Anthropic set the rate at $2 per million input tokens and $10 per million output tokens"**, framed as intro then frozen) and https://www.sentra.app/articles/claude-api-pricing (successor Sonnet 5.5 also **"$2 per million input tokens and $10 per million output tokens, with cache reads at $0.10"**); counter-source declined: https://www.getaiperks.com/en/ai/claude-sonnet-5-pricing (**"published $3 and $15 as the rates"**) predates/ignores the permanence edit · lifecycle — https://www.developersdigest.tech/blog/claude-sonnet-5-developer-guide-2026 (**"Anthropic now lists Sonnet 5 as a legacy model, with retirement not sooner than June 30, 2027"**) · generation gap — https://artificialanalysis.ai/articles/claude-sonnet-5-5 (**"In Terminal-Bench 4.0 it [5.5] scores 64%, a 50 point increase over Claude Sonnet 5"**) and https://www.linkedin.com/pulse/claude-sonnet-5-achieves-53-artificial-analysis-intelligence-28sbc (**"Claude Sonnet 5 achieves 53 on the Artificial Analysis Intelligence Index, but without promotional pricing will cost more per task than Opus 4.8"**) · still profiled — https://artificialanalysis.ai/models/releases/claude-sonnet-5 (six tracked configs) and https://www.highcircl.com/en/blog/claude-sonnet-4-5-retirement (Anthropic names **claude-sonnet-5-5** as replacement for retiring Sonnet 4.5, keeping Sonnet-5-class ids live).

**What moved and how it was resolved:**

1. **Cost 60→65 — the only substantive change.** Pass 1 took the published $3/$15 list fallback, but the vendor's own launch page carries an **August 10, 2026 permanence edit at $2/$10** — the promo that AdMix expected to lapse was frozen instead. The corrected rate is one bracket below the $3/$15 ≈ 60 anchor, the same reading the 2026-11-03 passes applied to GPT-6 Sol ($2/$10 → 65). The legacy $3/$15 anchor note in pass-1's Cost bullet is superseded; all other pass-1 content retained verbatim.
2. **Lifecycle: legacy, with a dated floor.** DevelopersDigest records Anthropic listing Sonnet 5 as a **legacy model with retirement no sooner than June 30, 2027** — eight months out; unlike gemini-3-1-pro (fully shut down) or gemini-3.6-flash (16 days), this id is a comfortable legacy listing and stays ranked with normal curation weight. Sonnet 5.5 is the default replacement across Anthropic's own migration notes.
3. **Index-version noise recorded, not averaged.** The report's Intelligence Index **38.2** was the capture-build reading; current-build coverage says **53** (LinkedIn pulse) and AA's v5 basket differs again. Consistent with the batch-wide convention (Opus 4.7/4.8, Gemini rows): scale drift across index rebuilds, not a capability re-measurement of this model — Reasoning 84 and all quality bands unchanged.
4. **The generation-gap evidence strengthens pass 1's caps, not the bands.** AA's 5.5 article quantifies exactly what this report asserted qualitatively: a **50-point Terminal-Bench 4.0 gap** between 5.5 (64%) and Sonnet 5 — consistent with the TB 3.0 14.6% row already scoring Tool 80's ceiling. Every scored row (SWE-bench 85.2, BrowseComp 84.7, GDPval 1603, GPQA 91.1, 39.4% hallucination) stands uncontradicted. **Scores changed by this pass:** Cost 60→65 (outside Overall). Tool 80, Reasoning 84, Context 95, Multimodal 78, Coding 80 → Overall = half-up mean = 417/5 = 83.4 → **83, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Sonnet 5 system card, plus Artificial Analysis, Vals AI, Cognition, Cursor, NeoCognition, VulcanBench and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Anthropic launch page's own permanence edit, EnterpriseDNA/Sentra pricing corroboration with the getaiperks fallback declined, DevelopersDigest legacy date, AA 5.5-vs-5 generation-gap article); Cost re-anchored 60→65 at the verified $2/$10, legacy-with-dated-floor status recorded, 38.2-vs-53 index noise logged as scale drift without averaging, all quality rows uncontradicted — **only Cost moved; Overall remains 83**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
