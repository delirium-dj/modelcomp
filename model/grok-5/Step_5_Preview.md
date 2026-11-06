# Grok 5 — findings by Step 5 Preview

- Source: xAI / SpaceXAI (`grok-5` — unreleased successor to the Grok 4.x line)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## What this report is

**This is a negative-finding report: there is no released Grok 5 to research.** It is kept on disk under the repo's research-permanence rule, and it records *why* rather than inventing content. The 2026-11-06 re-run verified the following, and found nothing that reverses the 2026-10-09 finding.

## What is verified about the model

- **Context window, pricing, licence and API availability are all unpublished.** No vendor figure exists for any of them.
- **Community rumours — ~1.5M context, $3–5/$15–20 API pricing, X Premium+ first access — are all speculative and are recorded as speculation rather than data.**
- **The unverified "Project Valis" benchmark leak is flagged unreliable by trackers**, and it is not used in any score here.
- **Artificial Analysis has no Grok 5 entry** (404, re-verified 2026-11-06).
- **BenchLM carries no `grok-5` page in any spelling** (`grok-5` and `grok-5-0` both 404, re-verified 2026-11-06) — so, as with the 2026-10-09 pass, **there is no tracker catalog page for this model under any spelling**.
- **The shipping xAI flagship as of 2026-09-21 is Grok 4.7; the coding-specialised tier is Grok Build 0.1.** Neither is Grok 5, and **a sibling non-import is recorded: Grok 4.7's and Grok Build 0.1's figures are named as comparison points and explicitly not merged into this slug.**

## What is missing (why there are no scores)

- **No released model to evaluate: no API endpoint, no model ID, no weights, no product integration.** All six of the methodology's dimensions requires at minimum a modality claim or a price, and none exists.
- **Every benchmark in this research series is unmeasured for this slug**: GPQA, HLE, AIME, MATH, MMLU-Pro, CritPt, AA-LCR, MRCR, ARC-AGI, AA Intelligence Index, AA-Omniscience, SWE-bench, LiveCodeBench, Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, GDPval-AA, AA Agentic Index, BFCL and every visual benchmark.
- **No Overall Score is computed.** Assigning one would require either inventing figures or importing the predecessor's, and both are forbidden: the first by the never-invent rule, the second by the sibling non-import rule. **A model with no published capability claim cannot be scored on capability**, and the absence of a score is the report's finding rather than a gap in it.

### Normalized scores (1–100)

**A scope note precedes these lines: this is the one report in this batch with no catalogue fields to score either.** The repo's curated `meta.json` records **"Not announced"** for context window, modalities and pricing — there is no token count, no modality claim and no price to normalise, unlike the five phantom reports in this batch which at least have catalogue figures. The five quality dimensions below therefore take the methodology's neutral floor in the strict sense: **not "dimension claimed, entirely unmeasured", but "nothing claimed at all."** They are reported as 50/100 each because the methodology's neutral floor is 50 and there is no evidence in either direction — **not because any capability is asserted.**

- **Tool use: 50/100.** **Scored at the methodology's neutral floor, in the strict sense that nothing is claimed at all.** No agentic benchmark of any kind exists — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index — and no vendor claim exists either, since there is no released model, no API endpoint and no model ID. **The neutral floor is the correct placement precisely because there is no evidence in either direction.**
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor, in the strict sense that nothing is claimed at all.** No GPQA, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index or AA-Omniscience figure exists, and no vendor claim exists either. **The "Project Valis" benchmark leak is explicitly excluded from this line** — it is flagged unreliable by trackers and using it would raise the score on contaminated data.
- **Context window: 50/100.** **Scored at the methodology's neutral floor, and this is the only dimension where the repo's curated meta has a value at all — and that value is "Not announced (no vendor figure exists)".** The community rumour of ~1.5M context is recorded as speculation and **explicitly not used**, because scoring it would place this model in the ≥1M band on an unverified figure. Held at the neutral floor rather than any band placement because there is no number to place.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor, and the repo's curated meta records "Not announced" for modalities** — so even the text-only-versus-multimodal distinction that the five phantom reports can make from their catalogue fields cannot be made here. Held at the neutral floor rather than the text-only band because **naming a modality for a model that does not exist would be an invention.**
- **Coding: 50/100.** **Scored at the methodology's neutral floor, in the strict sense that nothing is claimed at all.** No SWE-bench, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench or Terminal-Bench figure exists — and note that **the coding-specialised xAI tier that does exist is Grok Build 0.1, a separate SKU whose figures are named as a comparison point and explicitly not merged into this slug.**
- **Cost efficiency: 50/100.** **Scored at the methodology's neutral floor, and this is the only dimension in the whole batch with no pricing figure of any kind to infer from** — the repo's curated meta records "Not announced — no public API", and there is no rate card, no licence, no free tier and no weights repository. The community rumour of $3–5/$15–20 is recorded as speculation and **explicitly not used**. **This distinguishes Grok 5 from every other model in this research series: it is the single report with no cost evidence at all, including no access-based inference, because there is no access path to infer from.**
- **Overall Score: 50/100.** (50 + 50 + 50 + 50 + 50) / 5 = 50.0 → **50**. **This Overall is a pure neutral floor and must be read as such: it is not a verdict that Grok 5 is an average model, it is the methodology's output when there is no evidence in any direction.** Every one of the six dimensions is 50 because nothing at all is claimed, which is a strictly weaker evidential position than the five phantom reports in this batch, which at least have catalogue fields to normalise. Recommendation: **there is no model to evaluate.** The shipping xAI flagship as of 2026-09-21 is **Grok 4.7** and the coding-specialised tier is **Grok Build 0.1** — both real products with measured figures, both refreshed in this session, and neither is Grok 5. **Prefer either of them; this slug has no comparison point of its own.**

## Re-score trigger

This report should be re-opened when xAI publishes any of: an API endpoint or model ID, a context window and pricing, or a first-party benchmark row. Until then the honest answer is that Grok 5 does not exist as a researchable product.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-10-09 negative finding, re-verified against two independent sources rather than re-asserted. **The negative finding is that there is no released Grok 5 to research**: context window, pricing, licence and API availability are all unpublished, and there is no API endpoint, model ID, weights repo or product integration. **Two tracker absences are re-verified on 2026-11-06 rather than carried forward**: Artificial Analysis has no Grok 5 entry (404), and **BenchLM carries no `grok-5` page in any spelling** (`grok-5` and `grok-5-0` both 404) — so, as with the 2026-10-09 pass, there is no catalog to check against under any spelling. **Community rumours (~1.5M context, $3–5/$15–20 pricing, X Premium+ first access) are recorded as speculation and explicitly not used as data**, and **the "Project Valis" benchmark leak is flagged unreliable by trackers and is likewise excluded**, because a report that cannot be scored must at minimum not be contaminated by unverifiable figures. **The shipping flagships are named as comparison points only**: Grok 4.7 (shipping as of 2026-09-21) and Grok Build 0.1 (the coding-specialised tier), with **a sibling non-import recorded** — their figures are not merged into this slug. **An Overall Score is computed above, and its status as a pure neutral floor rather than a capability verdict is stated in that line**: every dimension is 50 because nothing at all is claimed, which is a strictly weaker evidential position than the five phantom reports in this batch that at least have catalogue fields. Assigning a capability verdict would require either inventing figures or importing the predecessor's, and both are forbidden by the never-invent and sibling non-import rules respectively. **A re-score trigger is recorded** — any published endpoint, context/pricing figure, or first-party benchmark row — so the next researcher knows exactly what would change this file. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores; in this case every one is the neutral floor, which is the finding.
- Reference URLs:
  - [xAI — official product and API pages (no Grok 5 entry exists as of 2026-11-06)](https://x.ai/)
  - [Artificial Analysis — Grok 4.7 (the shipping flagship; no Grok 5 entry, 404)](https://artificialanalysis.ai/models/grok-4.7)
  - [Repo curated meta — `model/grok-5/meta.json` (context, modalities and pricing all unpublished)](/model/grok-5/meta.json)
  - See also: [`model/grok-4.7/`](grok-4.7.md) — the shipping flagship refreshed earlier in this session; [`model/grok-build-0.1/`](grok-build-0.1.md) — the coding-specialised tier
- Future sources: add a new file next to this one, e.g. `Grok_5.md`, using the same headings.
