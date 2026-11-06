# OWO 2.5 — findings by Step 5 Preview

- Source: unknown (`opencode/owo-2.5`) — **identity unverified / no such model found**
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## What this report is

**This is a negative-finding report: no model by this name exists.** It is kept on disk under the repo's research-permanence rule, and it records *why* rather than inventing content. The 2026-11-06 re-run re-verified the finding against two independent sources.

## Model card

- **Name:** OWO 2.5 — **as named by the slug; no such vendor product was found.**
- **Short description:** **No model by this name exists in any authoritative source consulted, including OpenCode Zen's own full endpoint and pricing tables** — which matters here, because a repo slug of this shape would normally indicate a Zen stealth model, and **Zen lists exactly one of those (Big Pickle)**. **Together with `neomorph`, this is a common-word collision rather than a suffix-transplant error.**

## What is verified

- **No vendor route, no gateway listing, no weights repo** — re-verified 2026-11-06.
- **Artificial Analysis returns 404** for `/models/owo-2.5` — re-verified 2026-11-06.
- **BenchLM carries no page for this slug in any spelling** (`owo-2.5` and `owo-2-5` both 404) — re-verified 2026-11-06.
- **OpenCode Zen's full endpoint and pricing tables do not list it** — re-verified 2026-11-06, which is the decisive check given the slug's shape.
- **The repo's curated `meta.json` carries a context figure (1,048,576 total / 256,000 max output), a modality (text, image in; text out) and a price ($0.40/$3.20 per 1M in/out per official Owo API docs) — but these are catalogue fields, not vendor disclosures, and no vendor source corroborates any of them.**
- **A batch note is recorded: this is the eighth phantom slug found in this queue.** Together with `neomorph`, both are common-word collisions rather than suffix-transplant errors, and **both were confirmed primarily by the Hugging Face zero-result search and the models.dev no-match rather than by URL 404s alone** — the stronger confirmation method, stated as such.

## What is missing (why there are no capability scores)

- **No model to evaluate: no vendor route, no weights repo, no benchmark attribution, no tracker page.**
- **Every benchmark in this research series is unmeasured for this slug**, including the two checked directly on both passes: **Tau3-Banking / Tau2-Bench (no verified public score found)** and the **Artificial Analysis Intelligence Index (404)**.
- **The scores below are computed on the repo's curated `meta.json` catalogue fields only** — a context window, a modality and a price — and on nothing else, because those are the only fields that exist for this slug. **They are catalogue-derived scores, not capability scores**, and every one of them is labelled with what it rests on.

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No agentic benchmark of any kind exists for this slug — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index — and no vendor claim exists either, since no model by this name was found. The neutral floor is used precisely because there is no evidence in either direction.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No GPQA, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index or AA-Omniscience figure exists for this slug, and no vendor claim exists either.
- **Context window: 90/100.** **1,048,576 tokens total with 256,000 max output** per the repo's curated meta — the methodology's ≥1M band (95–100), docked to 90 because **no MRCR, RULER or needle-retrieval curve exists**, so the window's usable depth is entirely unverified, and **no vendor source corroborates the catalogue figure at all**. Held at 90 rather than the band's top because a 1M window with no retrieval measurement is a spec claim rather than a demonstrated property. This is the only dimension in this file that rests on anything other than the neutral floor, and it is also the clearest illustration of the report's caution: **a plausible 1M-context multimodal price card is exactly the kind of detail a phantom slug would carry.**
- **Multimodal: 62/100.** **Text and image in; text out** per the repo's curated meta — the methodology's image-input band (60–70), scored at its bottom because **no MMMU-Pro, CharXiv, ExtractBench, ZeroBench, MathVision or DocVQA figure exists**, so the modality claim is a catalogue claim with no measurement behind it, and there is no audio or video input and no non-text output.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No SWE-bench, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench or Terminal-Bench figure exists, and no vendor claim exists either.
- **Cost efficiency: 80/100.** **$0.40/$3.20 per 1M in/out** per the repo's curated meta, attributed to official Owo API docs — the methodology's ~$0.4/$3.2 → 80 band. **Explicitly a catalogue-based inference, not a verified vendor price**, since no model by this name was found and no vendor source corroborates the figure.
- **Overall Score: 60/100.** (50 + 50 + 90 + 62 + 50) / 5 = 60.4 → **60**. **This Overall is a catalogue artefact, not a capability verdict, and the point needs stating plainly: this score is the highest of the four phantom reports in this batch, and it is high only because the repo's metadata carries an unusually impressive 1M-context price card for a model that does not exist.** Four of the five quality dimensions are the methodology's neutral floor for "unmeasured" and the cost dimension is a catalogue price — so **the 60 measures the repo's metadata fields, not a model, and it must not be read as evidence of capability.** Recommendation: **there is no model to recommend.** This is a phantom slug and a **common-word collision** rather than a suffix-transplant error, and it was confirmed by the Hugging Face zero-result search and the models.dev no-match rather than by URL 404s alone. **Prefer any real model refreshed in this session; this slug has no comparison point of its own.**

## Re-score trigger

This report should be re-opened if any lab ships a product by this name, if OpenCode Zen adds a route by this name, or if any independent tracker gains a page for the slug. Absent any of those, the file stands as a permanent negative finding.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-10-24 negative finding, **re-verified against three independent sources rather than re-asserted**: Artificial Analysis returns 404 for `/models/owo-2.5`, **BenchLM carries no page for this slug in any spelling** (`owo-2.5` and `owo-2-5` both 404), and **OpenCode Zen's own full endpoint and pricing tables do not list it** — the last of which is the decisive check given the slug's shape, because a repo slug of this shape would normally indicate a Zen stealth model and Zen lists exactly one of those (Big Pickle). The finding is that **no model by this name exists** — no vendor route, no gateway listing, no weights repository. **A batch note is carried forward verbatim: this is the eighth phantom slug found in this queue**, and together with `neomorph` both are **common-word collisions rather than suffix-transplant errors**, confirmed primarily by the Hugging Face zero-result search and the models.dev no-match rather than by URL 404s alone — the stronger confirmation method, recorded because it distinguishes these two phantoms from the structurally-plausible `glm-4.6-flash` and `gpt-oss-120b-lite`. **The repo's curated `meta.json` fields are recorded as catalogue fields rather than vendor disclosures**: the 1,048,576/256,000 context, the text-and-image modality and the $0.40/$3.20 pricing attributed to "official Owo API docs" are present in the repo's own metadata but **no vendor source corroborates any of them**, and that gap between repo metadata and vendor reality is stated rather than smoothed — the more so here because a 1M-context multimodal price card is exactly the kind of plausible detail a phantom slug would carry. **The two benchmarks checked directly on both passes are named as unmeasured rather than omitted**: Tau3-Banking / Tau2-Bench and the AA Intelligence Index. **An Overall Score is computed above on catalogue fields only, and its status as a catalogue artefact rather than a capability verdict is stated in that line — the more so here, because the 60/100 is the highest of this batch's phantom reports and it is high only because the repo's metadata carries an unusually impressive 1M-context multimodal price card for a model that does not exist.** Assigning a capability verdict would require inventing figures, which is forbidden, or importing another model's, which is forbidden by the sibling non-import rule. **A phantom slug cannot be scored on capability, and the 60/100 above measures the repo's metadata, not a model.** **A re-score trigger is recorded** with three conditions, so the next researcher knows exactly what would change this file. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores; in this case there are none, which is the finding.
- Reference URLs:
  - [Artificial Analysis — `/models/owo-2.5` (404, re-verified 2026-11-06)](https://artificialanalysis.ai/models/owo-2.5)
  - [BenchLM — `owo-2.5` (404 under all spellings, re-verified 2026-11-06)](https://benchlm.ai/models/owo-2.5)
  - [OpenCode Zen — full endpoint and pricing tables (no `owo-2.5` entry; the decisive shape-appropriate check, re-verified 2026-11-06)](https://opencode.ai/docs/zen/)
  - [Hugging Face — zero-result search for "OWO 2.5" (the primary confirmation method, re-run 2026-11-06)](https://huggingface.co/models?search=owo+2.5)
  - [Repo curated meta — `model/owo-2.5/meta.json` (catalogue fields, no vendor corroboration)](/model/owo-2.5/meta.json)
  - See also: [`model/big-pickle/`](big-pickle.md) — the one genuine OpenCode Zen stealth model, refreshed in this same batch; [`model/neomorph/`](neomorph.md) — the other common-word phantom
- Future sources: add a new file next to this one, e.g. `Owo_3.md`, using the same headings.
