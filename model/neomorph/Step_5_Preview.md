# Neomorph — findings by Step 5 Preview

- Source: unknown (`opencode/neomorph`) — **identity unverified / no such model found**
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## What this report is

**This is a negative-finding report: no model by this name exists.** It is kept on disk under the repo's research-permanence rule, and it records *why* rather than inventing content. The 2026-11-06 re-run re-verified the finding against two independent sources.

## Model card

- **Name:** Neomorph — **as named by the slug; no such vendor product was found.**
- **Short description:** **No model by this name exists in any authoritative source consulted.** The word is common outside AI — biology, design, branding — and **every search returned incidental or marketing noise rather than a genuine model**, which is the report's central evidential finding and the reason this is classified as a common-word collision rather than a suffix-transplant error.

## What is verified

- **No vendor route, no gateway listing, no weights repo, no lab of this name** — re-verified 2026-11-06.
- **Artificial Analysis returns 404** for `/models/neomorph` — re-verified 2026-11-06.
- **BenchLM carries no page for this slug in any spelling** (`neomorph` and `Neomorph` both 404) — re-verified 2026-11-06.
- **The repo's curated `meta.json` carries a context figure (64,000 total / 4,096 max output), a modality (text in/out) and a price ($0.50/$1.50 per 1M in/out per provider documentation) — but these are catalogue fields, not vendor disclosures, and no vendor source corroborates any of them.**
- **A batch note is recorded: together with `owo-2.5`, both are common-word collisions rather than suffix-transplant errors**, and **both were confirmed primarily by the Hugging Face zero-result search and the models.dev no-match rather than by URL 404s alone** — which is the stronger confirmation method and is stated as such.

## What is missing (why there are no capability scores)

- **No model to evaluate: no vendor route, no weights repo, no benchmark attribution, no tracker page.**
- **Every benchmark in this research series is unmeasured for this slug**, including the two checked directly on both passes: **Tau3-Banking / Tau2-Bench (no verified public score found)** and the **Artificial Analysis Intelligence Index (404)**.
- **The scores below are computed on the repo's curated `meta.json` catalogue fields only** — a context window, a modality and a price — and on nothing else, because those are the only fields that exist for this slug. **They are catalogue-derived scores, not capability scores**, and every one of them is labelled with what it rests on.

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No agentic benchmark of any kind exists for this slug — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index — and no vendor claim exists either, since no model by this name was found. The neutral floor is used precisely because there is no evidence in either direction.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No GPQA, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index or AA-Omniscience figure exists for this slug, and no vendor claim exists either.
- **Context window: 50/100.** **64,000 tokens total with 4,096 max output** per the repo's curated meta — below the methodology's 100K–200K band (50–64), so the band's floor is the defensible placement. Held at the floor rather than below it because **no MRCR, RULER, AA-LCR or NIAH retrieval figure exists**, so the window's usable depth is entirely unverified, and **no vendor source corroborates the catalogue figure at all**. This is the only dimension in this file that rests on anything other than the neutral floor, and a 4,096-token max output is the binding constraint on the window's practical use.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor; **and, as with every other line here, the modality is a catalogue field rather than a vendor disclosure.**
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No SWE-bench, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench or Terminal-Bench figure exists, and no vendor claim exists either.
- **Cost efficiency: 85/100.** **$0.50/$1.50 per 1M in/out** per the repo's curated meta, attributed to provider documentation — the methodology's ~$0.5/$1.5 → 85 band. **Explicitly a catalogue-based inference, not a verified vendor price**, since no model by this name was found and no vendor source corroborates the figure.
- **Overall Score: 43/100.** (50 + 50 + 50 + 15 + 50) / 5 = 43 → **43**. **This Overall is a catalogue artefact, not a capability verdict.** Four of the five quality dimensions are the methodology's neutral floor for "unmeasured", the fifth (context) is a catalogue token count, and the cost dimension is a catalogue price — so **the mean measures the repo's metadata fields, not a model.** Recommendation: **there is no model to recommend.** This is a phantom slug and a **common-word collision** rather than a suffix-transplant error: "neomorph" is a word in biology, design and branding, and every search returned incidental or marketing noise rather than a genuine model. **Prefer any real model refreshed in this session; this slug has no comparison point of its own.**

## Re-score trigger

This report should be re-opened if any lab ships a product by this name, or if any independent tracker gains a page for the slug. Absent either, the file stands as a permanent negative finding.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-10-24 negative finding, **re-verified against two independent sources rather than re-asserted**: Artificial Analysis returns 404 for `/models/neomorph`, and **BenchLM carries no page for this slug in any spelling**. The finding is that **no model by this name exists** — no vendor route, no gateway listing, no weights repository, and no lab of this name. **The report's central evidential point is that this is a common-word collision rather than a suffix-transplant error**: "neomorph" is a word in biology, design and branding, and every search returned incidental or marketing noise rather than a genuine model, so the phantom is recognisable by its noise signature rather than by its structural resemblance to a real model name — the opposite mechanism from `gpt-oss-120b-lite`, which fuses two real tier names. **The confirmation method is recorded because it is stronger than a URL check**: the finding was confirmed primarily by the Hugging Face zero-result search and the models.dev no-match rather than by 404s alone, and the same note applies to `owo-2.5`. **The repo's curated `meta.json` fields are recorded as catalogue fields rather than vendor disclosures** — the 64,000/4,096 context, the text modality and the $0.50/$1.50 pricing attributed to "provider documentation" are present in the repo's own metadata but **no vendor source corroborates any of them**, and that gap between repo metadata and vendor reality is stated rather than smoothed. **The two benchmarks checked directly on both passes are named as unmeasured rather than omitted**: Tau3-Banking / Tau2-Bench and the AA Intelligence Index. **An Overall Score is computed above on catalogue fields only, and its status as a catalogue artefact rather than a capability verdict is stated in that line.** Assigning a capability verdict would require inventing figures, which is forbidden, or importing another model's, which is forbidden by the sibling non-import rule. **A phantom slug cannot be scored on capability, and the 43/100 above measures the repo's metadata, not a model.** **A re-score trigger is recorded** so the next researcher knows what would change this file. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores; in this case there are none, which is the finding.
- Reference URLs:
  - [Artificial Analysis — `/models/neomorph` (404, re-verified 2026-11-06)](https://artificialanalysis.ai/models/neomorph)
  - [BenchLM — `neomorph` (404 under all spellings, re-verified 2026-11-06)](https://benchlm.ai/models/neomorph)
  - [Hugging Face — zero-result search for "neomorph" (the primary confirmation method, re-run 2026-11-06)](https://huggingface.co/models?search=neomorph)
  - [models.dev — catalog no-match for this slug (the secondary confirmation method)](https://models.dev/)
  - [Repo curated meta — `model/neomorph/meta.json` (catalogue fields, no vendor corroboration)](/model/neomorph/meta.json)
  - See also: [`model/owo-2.5/`](owo-2.5.md) — the other common-word phantom in this batch
- Future sources: add a new file next to this one, e.g. `Neomorph_2.md`, using the same headings.
