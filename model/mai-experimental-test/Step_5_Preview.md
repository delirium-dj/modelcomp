# MAI-Experimental-Test — findings by Step 5 Preview

- Source: unknown (`opencode/mai-experimental-test`)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## What this report is

**This is a negative-finding report: no model by this name was found.** It is kept on disk under the repo's research-permanence rule, and it records *why* rather than inventing content. The 2026-11-06 re-run re-verified the finding against three independent sources.

## What is verified

- **models.dev has no entry for this slug** — checked 2026-10-09 against the full catalog JSON and **re-verified 2026-11-06** — confirming it is **not a catalogued model**.
- **Artificial Analysis returns 404** for `/models/mai-experimental-test` — re-verified 2026-11-06.
- **BenchLM carries no page for this slug in any spelling** (`mai-experimental-test` and `mai_experimental_test` both 404) — re-verified 2026-11-06.
- **No Microsoft AI / MAI route, no gateway listing, no weights repository** for this name — re-verified 2026-11-06.
- **The repo's curated `meta.json` carries a context figure (128,000 total), a modality (text in/out only) and a price (experimental tier pricing, no published rate) — but these are catalogue fields, not vendor disclosures, and no vendor source corroborates any of them.**
- **The MAI line does exist — MAI-Code-1-Flash and MAI-Code-1.1-Flash (both refreshed in this session) — but "experimental test" is not a tier name either of them uses.** **A sibling non-import is recorded: those models' figures are named as comparison points and explicitly not merged into this slug.**

## What is missing (why there are no capability scores)

- **No model to evaluate: no vendor route, no weights repo, no benchmark attribution, no tracker page, no catalog entry.**
- **Every benchmark in this research series is unmeasured for this slug.**
- **The scores below are computed on the repo's curated `meta.json` catalogue fields only** — a context window, a modality and a price — and on nothing else, because those are the only fields that exist for this slug. **They are catalogue-derived scores, not capability scores**, and every one of them is labelled with what it rests on.

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No agentic benchmark of any kind exists for this slug — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index — and no vendor claim exists either, since no model by this name was found. The neutral floor is used precisely because there is no evidence in either direction.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No GPQA, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index or AA-Omniscience figure exists for this slug, and no vendor claim exists either.
- **Context window: 64/100.** **128,000 tokens** per the repo's curated meta — the methodology's 100K–200K band (50–64) at the band's ceiling. Held at the ceiling rather than above it because **no MRCR, RULER, AA-LCR or NIAH retrieval figure exists**, so the window's usable depth is entirely unverified, and **no vendor source corroborates the catalogue figure at all**. This is the only dimension in this file that rests on anything other than the neutral floor.
- **Multimodal: 15/100.** **Text in; text out only** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor; **and, as with every other line here, the modality is a catalogue field rather than a vendor disclosure.**
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No SWE-bench, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench or Terminal-Bench figure exists, and no vendor claim exists either.
- **Cost efficiency: 88/100.** **Experimental tier pricing — no published rate** per the repo's curated meta, which is the weakest provenance of any cost figure in this batch: there is no number to score. Scored at 88 on the **access-based inference that an experimental tier is served rather than open-weight**, since no Apache/MIT licence or weights repository was found. **Explicitly an access-based inference against an unpublished rate, not a price measurement** — held at 88 rather than the ~97 tier that free open weights would reach because there is no $0 route to verify, and above the ~85 mid-premium band only marginally on the assumption that an experimental tier is priced below GA tiers.
- **Overall Score: 46/100.** (50 + 50 + 64 + 15 + 50) / 5 = 45.8 → **46**. **This Overall is a catalogue artefact, not a capability verdict.** Four of the five quality dimensions are the methodology's neutral floor for "unmeasured", the fifth (context) is a catalogue token count, and the cost dimension is an inference against an unpublished rate — so **the mean measures the repo's metadata fields, not a model.** Recommendation: **there is no model to recommend.** This is a phantom slug with a **placeholder-style compound suffix** — "experimental test" reads as a scaffold or test entry rather than a mistaken tier name, a third phantom mechanism distinct from the common-word collisions (`neomorph`, `owo-2.5`) and the suffix-transplant error (`gpt-oss-120b-lite`). Prefer **MAI-Code-1-Flash or MAI-Code-1.1-Flash**, both real MAI-line products with measured figures, refreshed in this session.

## Re-score trigger

This report should be re-opened if Microsoft ships or lists a product by this name, or if any independent tracker gains a page or catalog entry for the slug. Absent either, the file stands as a permanent negative finding.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-10-09 negative finding, **re-verified against three independent sources rather than re-asserted**: **models.dev has no entry for this slug** (the decisive catalog check, re-verified 2026-11-06 against the full catalog JSON), **Artificial Analysis returns 404** for `/models/mai-experimental-test`, and **BenchLM carries no page for this slug in any spelling** (`mai-experimental-test` and `mai_experimental_test` both 404). The finding is that **no model by this name was found** — no Microsoft AI / MAI route, no gateway listing, no weights repository, no catalog entry. **The repo's curated `meta.json` fields are recorded as catalogue fields rather than vendor disclosures**: the 128,000 context, the text-in/text-out modality and the "experimental tier pricing — no published rate" price are present in the repo's own metadata but **no vendor source corroborates any of them**, and that gap between repo metadata and vendor reality is stated rather than smoothed. **The MAI line's real products are named as comparison points and explicitly not imported** — MAI-Code-1-Flash and MAI-Code-1.1-Flash, both refreshed in this session — with **a sibling non-import recorded**, because the slug's `mai-` prefix makes that the single most likely error a future researcher would make. **The `experimental test` compound is recorded as the slug's most distinctive feature**: unlike the phantoms that are common-word collisions (`neomorph`, `owo-2.5`) or suffix-transplant errors (`gpt-oss-120b-lite`), this one carries a **placeholder-style compound suffix**, which reads as a scaffold or test entry rather than a mistaken tier name — a third phantom mechanism, recorded so the taxonomy in this research series covers all three. **The catalog check is recorded as the primary confirmation method** for this slug, because a models.dev full-catalog no-match is stronger evidence than a URL 404. **An Overall Score is computed above on catalogue fields only, and its status as a catalogue artefact rather than a capability verdict is stated in that line.** Assigning a capability verdict would require inventing figures, which is forbidden, or importing a sibling's, which is forbidden by the sibling non-import rule. **A phantom slug cannot be scored on capability, and the 46/100 above measures the repo's metadata, not a model.** **A re-score trigger is recorded** so the next researcher knows what would change this file. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores; in this case there are none, which is the finding.
- Reference URLs:
  - [models.dev — full catalog JSON (no `mai-experimental-test` entry; the decisive catalog check, re-verified 2026-11-06)](https://models.dev/)
  - [Artificial Analysis — `/models/mai-experimental-test` (404, re-verified 2026-11-06)](https://artificialanalysis.ai/models/mai-experimental-test)
  - [BenchLM — `mai-experimental-test` (404 under all spellings, re-verified 2026-11-06)](https://benchlm.ai/models/mai-experimental-test)
  - [Repo curated meta — `model/mai-experimental-test/meta.json` (catalogue fields, no vendor corroboration)](/model/mai-experimental-test/meta.json)
  - See also: [`model/mai-code-1-flash/`](mai-code-1-flash.md) and [`model/mai-code-1.1-flash/`](mai-code-1.1-flash.md) — the real MAI-line products this report defers to, refreshed in this session
- Future sources: add a new file next to this one, e.g. `MAI_Code_2.md`, using the same headings.
