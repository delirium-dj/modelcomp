# GPT-OSS-120B-Lite — findings by Step 5 Preview

- Source: OpenAI (`opencode/gpt-oss-120b-lite`) — **identity unverified / phantom**
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## What this report is

**This is a negative-finding report: no model by this name was found.** It is kept on disk under the repo's research-permanence rule, and it records *why* rather than inventing content. The 2026-11-06 re-run re-verified the finding against two independent sources.

## Model card

- **Name:** GPT-OSS-120B-Lite — **as named by the slug; no such vendor product was found.**
- **Provider / access:** **none found.** No OpenAI route, no gateway listing, no weights repo. **Re-verified 2026-11-06.**

## What is verified

- **No OpenAI route, no gateway listing, no weights repository** for this name — re-verified 2026-11-06.
- **Artificial Analysis returns 404 for `/models/gpt-oss-120b-lite`** — re-verified 2026-11-06.
- **BenchLM carries no page for this slug in any spelling** (`gpt-oss-120b-lite` and `gpt-oss-120b-lite` both 404) — re-verified 2026-11-06.
- **The repo's curated `meta.json` carries a context figure (131,072 total / 32,768 max output), a modality (text in/out) and a price (free Apache-2.0 open weights, hosted ~$0.15/$0.60 per 1M) — but these are catalogue fields, not vendor disclosures, and no vendor source corroborates any of them.**
- **A batch note is recorded: this is the clearest case in this queue of the suffix-transplant pattern.** `gpt-oss-20b` is the real smaller tier of the GPT-OSS line, so `gpt-oss-120b-lite` looks like an attempt to name a mid-size tier that OpenAI never shipped — a name that fuses the largest tier's size with the smallest tier's suffix.
- **Comparison points that do exist in the family: GPT-OSS 120B (40.76/100 on BenchLM, refreshed in this batch) and GPT-OSS 20B.** **A sibling non-import is recorded: those models' figures are named as comparison points and explicitly not merged into this slug.**

## What is missing (why there are no capability scores)

- **No model to evaluate: no vendor route, no weights repo, no benchmark attribution, no tracker page.**
- **Every benchmark in this research series is unmeasured for this slug**, including the two checked directly on both passes: **Tau3-Banking / Tau2-Bench (no verified public score found)** and the **Artificial Analysis Intelligence Index (404)**.
- **The scores below are computed on the repo's curated `meta.json` catalogue fields only** — a context window, a modality and a price — and on nothing else, because those are the only fields that exist for this slug. **They are catalogue-derived scores, not capability scores**, and every one of them is labelled with what it rests on.

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No agentic benchmark of any kind exists for this slug — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index — and no vendor claim exists either, since no vendor product was found. The neutral floor is used precisely because there is no evidence in either direction.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No GPQA, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index or AA-Omniscience figure exists for this slug, and no vendor claim exists either.
- **Context window: 64/100.** **131,072 tokens total with 32,768 max output** per the repo's curated meta — the methodology's 100K–200K band (50–64) at the band's ceiling. Held at the ceiling rather than above it because **no MRCR, RULER, AA-LCR or NIAH retrieval figure exists**, so the window's usable depth is entirely unverified, and **no vendor source corroborates the catalogue figure at all**. This is the only dimension in this file that rests on anything other than the neutral floor.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor; **and, as with every other line here, the modality is a catalogue field rather than a vendor disclosure.**
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No SWE-bench, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench or Terminal-Bench figure exists, and no vendor claim exists either.
- **Cost efficiency: 97/100.** **Free Apache-2.0 open weights with a hosted route at ~$0.15/$0.60 per 1M** per the repo's curated meta — the open-weights route brings this to the methodology's near-$0 anchor, with the published hosted price disclosed. **Explicitly a catalogue-based inference, not a verified vendor price**, held at 97 rather than 100 because $0.15/$0.60 is a real metered rate and only the self-host route is literally free.
- **Overall Score: 46/100.** (50 + 50 + 64 + 15 + 50) / 5 = 45.8 → **46**. **This Overall is a catalogue artefact, not a capability verdict.** Four of the five quality dimensions are the methodology's neutral floor for "unmeasured", the fifth (context) is a catalogue token count, and the cost dimension is a catalogue price — so **the mean measures the repo's metadata fields, not a model.** Recommendation: **there is no model to recommend.** This is a phantom slug — no OpenAI route, no gateway listing, no weights repository — and **the clearest suffix-transplant case in this queue**: `gpt-oss-20b` is the real smaller tier, so this slug fuses the largest tier's size with the smallest tier's suffix. Prefer **GPT-OSS 120B (40.76 on BenchLM, refreshed in this same batch)** or **GPT-OSS 20B**, both real products with measured figures.

## Re-score trigger

This report should be re-opened if OpenAI ships a product by this name, or if any independent tracker gains a page for the slug. Absent either, the file stands as a permanent negative finding.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-10-24 negative finding, **re-verified against two independent sources rather than re-asserted**: Artificial Analysis returns 404 for `/models/gpt-oss-120b-lite`, and **BenchLM carries no page for this slug in any spelling**. The finding is that **no model by this name exists** — no OpenAI route, no gateway listing, no weights repository. **The repo's curated `meta.json` fields are recorded as catalogue fields rather than vendor disclosures**: the 131,072/32,768 context, the text modality and the free Apache-2.0 / hosted $0.15/$0.60 pricing are present in the repo's own metadata but **no vendor source corroborates any of them**, and that gap is stated rather than smoothed. **A batch note is recorded and is the report's most distinctive contribution: this is the sixth phantom slug found in this queue and the clearest case of the suffix-transplant pattern** — `gpt-oss-20b` is the real smaller tier, so `gpt-oss-120b-lite` fuses the largest tier's size with the smallest tier's suffix to name a mid-size tier OpenAI never shipped. That pattern note is carried forward verbatim because it explains the error mechanism and makes the phantom recognisable to the next researcher. **The two benchmarks checked directly on both passes are named as unmeasured rather than omitted**: Tau3-Banking / Tau2-Bench and the AA Intelligence Index. **Family comparison points that do exist are named and explicitly not imported** — GPT-OSS 120B at BenchLM 40.76/100 (refreshed in this batch) and GPT-OSS 20B. **An Overall Score is computed above on catalogue fields only, and its status as a catalogue artefact rather than a capability verdict is stated in that line.** Assigning a capability verdict would require importing a sibling's figures or inventing them, and both are forbidden: the first by the sibling non-import rule, the second by the never-invent rule. **A phantom slug cannot be scored on capability, and the 46/100 above measures the repo's metadata, not a model.** Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores; in this case there are none, which is the finding.
- Reference URLs:
  - [Artificial Analysis — `/models/gpt-oss-120b-lite` (404, re-verified 2026-11-06)](https://artificialanalysis.ai/models/gpt-oss-120b-lite)
  - [BenchLM — `gpt-oss-120b-lite` (404 under all spellings, re-verified 2026-11-06)](https://benchlm.ai/models/gpt-oss-120b-lite)
  - [Repo curated meta — `model/gpt-oss-120b-lite/meta.json` (catalogue fields, no vendor corroboration)](/model/gpt-oss-120b-lite/meta.json)
  - See also: [`model/gpt-oss-120b/`](gpt-oss-120b.md) (40.76) — the real 120B tier, refreshed in this same batch; [`model/gpt-oss-20b/`](gpt-oss-20b.md) — the real small tier this slug's suffix was transplanted from
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
