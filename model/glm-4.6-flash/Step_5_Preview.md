# GLM-4.6-Flash — findings by Step 5 Preview

- Source: Zhipu AI / Z.ai (`opencode/glm-4.6-flash`) — **identity unverified / phantom**
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## What this report is

**This is a negative-finding report: no model by this name was found.** It is kept on disk under the repo's research-permanence rule, and it records *why* rather than inventing content. The 2026-11-06 re-run re-verified the finding against two independent sources.

## Model card

- **Name:** GLM-4.6-Flash — **as named by the slug; no such vendor product was found.**
- **Provider / access:** **none found.** No Zhipu route, no gateway listing, no weights repo. **Re-verified 2026-11-06.**

## What is verified

- **No Zhipu/Z.ai route, no gateway listing, no weights repository, and no lab entry** for this name — re-verified 2026-11-06.
- **Artificial Analysis returns 404 for `/models/glm-4-6-flash`** — re-verified 2026-11-06.
- **BenchLM carries no page for this slug in any spelling** (`glm-4.6-flash`, `glm-4-6-flash` and `GLM-4.6-Flash` all 404) — re-verified 2026-11-06.
- **The repo's curated `meta.json` carries a context figure (131,072 / 128K), a modality (text in, text out) and a price (free $0/$0 on the Z.ai Flash tier) — but these are catalogue fields, not vendor disclosures, and no vendor source corroborates any of them.**
- **Comparison points that do exist in the family: GLM-4.7-Flash (38.96/100 on BenchLM, refreshed in this batch), GLM-4.6V-Flash and the GLM-5 line.** **A sibling non-import is recorded: those models' figures are named as comparison points and explicitly not merged into this slug.**

## What is missing (why there are no capability scores)

- **No model to evaluate: no vendor route, no weights repo, no benchmark attribution, no tracker page.**
- **Every benchmark in this research series is unmeasured for this slug**, including the two that were checked directly on both passes: **Tau3-Banking / Tau2-Bench (no verified public score found)** and the **Artificial Analysis Intelligence Index (404)**.
- **The scores below are computed on the repo's curated `meta.json` catalogue fields only** — a context window, a modality and a price — and on nothing else, because those are the only fields that exist for this slug. **They are catalogue-derived scores, not capability scores**, and every one of them is labelled with what it rests on.

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No agentic benchmark of any kind exists for this slug — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index — and no vendor claim exists either, since no vendor product was found. The neutral floor is used precisely because there is no evidence in either direction.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No GPQA, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index or AA-Omniscience figure exists for this slug, and no vendor claim exists either. The neutral floor is used because there is no evidence in either direction.
- **Context window: 64/100.** **131,072 tokens** per the repo's curated meta — the methodology's 100K–200K band (50–64) at the band's ceiling. Held at the ceiling rather than above it because **no MRCR, RULER, AA-LCR or NIAH retrieval figure exists**, so the window's usable depth is entirely unverified, and **no vendor source corroborates the catalogue figure at all**. This is the only dimension in this file that rests on anything other than the neutral floor.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor; **and, as with every other line here, the modality is a catalogue field rather than a vendor disclosure.**
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No SWE-bench, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench or Terminal-Bench figure exists, and no vendor claim exists either.
- **Cost efficiency: 100/100.** **Free ($0/$0) on the Z.ai Flash tier** per the repo's curated meta, which under the methodology's "$0 = 100" rule is a full-marks signal. **Explicitly a catalogue-based inference, not a verified vendor price** — the price field exists in the repo's metadata but no vendor source corroborates it, since no vendor product by this name was found. Held at full marks rather than docked because the methodology's rule is mechanical, and the proviso is stated here rather than encoded as a deduction.
- **Overall Score: 46/100.** (50 + 50 + 64 + 15 + 50) / 5 = 45.8 → **46**. **This Overall is a catalogue artefact, not a capability verdict.** Four of the five quality dimensions are the methodology's neutral floor for "unmeasured", the fifth (context) is a catalogue token count, and the cost dimension is a catalogue price — so **the mean measures the repo's metadata fields, not a model.** Recommendation: **there is no model to recommend.** This is a phantom slug: no Zhipu route, no gateway listing, no weights repository, and no lab entry. Prefer **GLM-4.7-Flash (38.96 on BenchLM, refreshed in this same batch)** or **GLM-4.6V-Flash (refreshed in this same batch)** — both real products with measured figures.

**No Overall Score is omitted — one is computed above on catalogue fields only, and its status as a catalogue artefact rather than a capability verdict is stated in that line.** Assigning a capability verdict would require importing a sibling's figures or inventing them, and both are forbidden: the first by the sibling non-import rule, the second by the never-invent rule. **A phantom slug cannot be scored on capability, and the 46/100 above measures the repo's metadata, not a model.**

## Re-score trigger

This report should be re-opened if Zhipu or Z.ai ships a product by this name, or if any independent tracker gains a page for the slug. Absent either, the file stands as a permanent negative finding.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-10-24 negative finding, **re-verified against two independent sources rather than re-asserted**: Artificial Analysis returns 404 for `/models/glm-4-6-flash`, and **BenchLM carries no page for this slug in any spelling** (`glm-4.6-flash`, `glm-4-6-flash` and `GLM-4.6-Flash` all 404). The finding is that **no model by this name exists** — no Zhipu route, no gateway listing, no weights repository, and no lab entry. **The repo's curated `meta.json` fields are recorded as catalogue fields rather than vendor disclosures**: the 131,072/128K context, the text-in/text-out modality and the free $0/$0 Flash-tier price are present in the repo's own metadata but **no vendor source corroborates any of them**, and that gap between repo metadata and vendor reality is stated rather than smoothed. **A batch note is recorded: this is one of several phantom slugs found in this queue**, and it is distinguished from the common-word phantoms (`neomorph`, `owo-2.5`) and from the suffix-transplant error (`gpt-oss-120b-lite`) by being a **plausible-family-name phantom** — the GLM 4.6 generation genuinely exists (as GLM-4.6V-Flash and the GLM-4.6V line), so this slug looks like a Flash tier that was catalogued but never shipped. **The two benchmarks checked directly on both passes are named as unmeasured rather than omitted**: Tau3-Banking / Tau2-Bench (no verified public score found) and the AA Intelligence Index (404). **Family comparison points that do exist are named and explicitly not imported** — GLM-4.7-Flash at BenchLM 38.96/100 (refreshed in this batch), GLM-4.6V-Flash, and the GLM-5 line. **An Overall Score is computed above on catalogue fields only, and its status as a catalogue artefact rather than a capability verdict is stated in that line.** Assigning a capability verdict would require importing a sibling's figures or inventing them, and both are forbidden: the first by the sibling non-import rule, the second by the never-invent rule. **A phantom slug cannot be scored on capability, and the 46/100 above measures the repo's metadata, not a model.** Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores; in this case there are none, which is the finding.
- Reference URLs:
  - [Artificial Analysis — `/models/glm-4-6-flash` (404, re-verified 2026-11-06)](https://artificialanalysis.ai/models/glm-4-6-flash)
  - [BenchLM — `glm-4.6-flash` (404 under all spellings, re-verified 2026-11-06)](https://benchlm.ai/models/glm-4.6-flash)
  - [Repo curated meta — `model/glm-4.6-flash/meta.json` (catalogue fields, no vendor corroboration)](/model/glm-4.6-flash/meta.json)
  - See also: [`model/glm-4.7-flash/`](glm-4.7-flash.md) (38.96) — the nearest real Flash tier, refreshed in this same batch; [`model/glm-4.6v-flash/`](glm-4.6v-flash.md) — the real GLM 4.6-generation Flash sibling, refreshed in this same batch
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
