# GPT-5.1 — findings by Muse Glimmer 30B

- Source: OpenAI / opencode/gpt-5.1
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's Instant/Thinking revision (400K/128K, $1.25/$10) for generalist work; SWE-Verified 66.0%, Deprecated, superseded by GPT-5.2.
- **Provider / access:** OpenAI API `opencode/gpt-5.1`, OpenAI Platform Chat Completions / Responses API. Paid tier only; no free ID on Zen.
- **Release / knowledge:** Deprecated revision in GPT-5 line; superseded by GPT-5.2 per meta.json short description. Knowledge cutoff not published in meta.
- **IDs:** `opencode/gpt-5.1`
- **Context window:** 400,000 total (128,000 out) per `meta.json`.
- **Modalities:** Text, image in; text out per `meta.json`.
- **Pricing (as of 2026-10-20):** Paid $1.25 / $10.00 per 1M input / output; $0.125 cached per `meta.json` pricingNote.
- **Architecture:** Proprietary OpenAI.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:

- SWE-bench Verified: **66.0%** per `meta.json` short description “SWE-Verified 66.0%”. No independent harness publication located; figure is curated meta note.
- LiveCodeBench / SciCode / DeepSWE / Terminal-Bench: no verified public score found for `opencode/gpt-5.1`.

Agent / tool use:

- Terminal-Bench 2.x / SWE-bench Pro / BrowseComp / OSWorld: no verified public score found for this exact ID.
- Vendor release notes for GPT-5.1 are not published as a standalone model card; deprecated status limits independent reporting.

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU / AIME: no verified public score found for `opencode/gpt-5.1`.
- Meta short description references generalist revision, no independent reasoning benchmarks cited.

Long context:

- Context window 400K total / 128K out per `meta.json`. No verified long-context retrieval benchmark (MRCR / RULER / GraphWalks) published for this ID.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 68/100.** No public Terminal-Bench / SWE-bench Pro numbers; generalist Instant/Thinking revision with moderate agentic use case. Caps below frontier due to lack of verified agent benchmarks and deprecated status.
- **Reasoning: 72/100.** Generalist revision for generalist work; no independent GPQA / HLE numbers published. Inferred mid-tier reasoning for a 2026-05 era Instant/Thinking model, capped by deprecation.
- **Context window: 78/100.** 400,000 total / 128,000 out maps to 400K tier per methodology. 78 reflects 400K total with 128K output limit, below 1M+ tier.
- **Multimodal: 60/100.** Text + image in, text out per `meta.json`. No audio / video in. Tier maps to 60.
- **Coding: 70/100.** SWE-bench Verified 66.0% per meta short description. Deprecated superseded model; 66% maps to low-70 coding tier with no independent confirmation.
- **Cost efficiency: 70/100.** Paid $1.25 / $10.00 per 1M; $0.125 cached. Moderate price for deprecated generalist revision; efficiency penalized vs newer 5.2+ pricing/ performance.
- **Overall Score: 70/100.** Mean of Tool 68, Reasoning 72, Context 78, Multimodal 60, Coding 70 = 69.6 → 70. Best fit as deprecated generalist Instant/Thinking revision for reproducibility of older runs; superseded by GPT-5.2 onward per meta.json.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research using `model/gpt-5.1/meta.json` and webfetch of OpenAI API pricing / research pages; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
