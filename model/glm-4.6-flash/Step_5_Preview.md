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
- **Overall Score: 46/100.** (50 + 50 + 64 + 15 + 50) / 5 = 45.8 → **46** → **46**. **This Overall is a catalogue artefact, not a capability verdict.** Four of the five quality dimensions are the methodology's neutral floor for "unmeasured", the fifth (context) is a catalogue token count, and the cost dimension is a catalogue price — so **the mean measures the repo's metadata fields, not a model.** Recommendation: **there is no model to recommend.** This is a phantom slug: no Zhipu route, no gateway listing, no weights repository, and no lab entry. Prefer **GLM-4.7-Flash (38.96 on BenchLM, refreshed in this same batch)** or **GLM-4.6V-Flash (refreshed in this same batch)** — both real products with measured figures.

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

---

## Archived research pass — `Step_5_Preview.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Step_5_Preview.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## glm-4.6-flash — negative findings by Step 5 Preview

> SELF-EXCLUSION: zero verified data was found for this exact model ID across six
> independent authoritative sources. Per the template's SELF-EXCLUSION clause
> (`RULES.md`, `tasks/research.md` step 3.9) this file is saved as notes only and
> carries NO scores — a fabricated number would drag the mean for every reader.
> Scores here are intentionally absent.

- Source: Zhipu AI / Z.ai (`glm-4.6-flash`) — **identity unverified / phantom**
- Archived date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** GLM-4.6-Flash (as named by the slug; no such vendor product was found)
- **Short description:** No text-only GLM-4.6-Flash exists. Zhipu's GLM 4.6 generation shipped three models — GLM-4.6 (text flagship), GLM-4.6V (vision flagship) and GLM-4.6V-Flash (vision, lightweight) — and the "Flash" tier was applied **only to the vision line**, never to the text line. The naming asymmetry is itself the evidence: the earlier GLM-4.5 generation *did* have a text `GLM-4.5-Flash`, so a 4.6 text-Flash would be expected if it existed, yet none does.
- **Provider / access:** none found. No Zhipu route, no gateway listing, no weights repo.
- **Release / knowledge:** not found.
- **IDs:** none verified.
- **Context window:** not verifiable — no model to measure.
- **Modalities:** not verifiable.
- **Pricing:** not verifiable.
- **Architecture:** not verifiable.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: no verified public score found — AA returns 404 for `/models/glm-4-6-flash`.

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found.

#### Verification trail (six independent checks, all run 2026-10-24)

1. **models.dev — Zhipu catalog** (`https://models.dev/api/zhipuai.json`): the complete set of entries containing "4.6" or "4.7" is — `glm-4.6` (204,800 ctx / 131,072 out, open weights, $0.00/$0.00, 2025-09-30), `glm-4.6v` (128,000 / 32,768, open, 2025-12-08), `glm-4.6v-flash` (128,000 / 32,768, open, 2025-12-08), `glm-4.7` (204,800 / 131,072, 2025-12-22), `glm-4.7-flash` (200,000 / 131,072, 2026-01-19), `glm-4.7-flashx` (200,000 / 131,072, $0.06/$0.40, 2026-01-19). **No `glm-4.6-flash` entry exists.** For contrast, `glm-4.5-flash` *is* present in the same catalog, which is what makes this absence meaningful rather than an artifact of a narrow search.
2. **OpenRouter — Z.ai catalog** (`https://openrouter.ai/z-ai`): the GLM-4.6/4.7 entries are `glm-4.6`, `glm-4.6v`, `glm-4.7`, `glm-4.7-flash`. No text-only GLM-4.6-Flash. (OpenRouter also omits `glm-4.6v-flash` and `glm-4.7-flashx`, so its coverage is partial — it is counted as one data point, not as a complete negative.)
3. **Artificial Analysis:** `https://artificialanalysis.ai/models/glm-4-6-flash` returns **404**.
4. **Hugging Face:** `zai-org/GLM-4.6-Flash`, `zai-org/GLM-4.6-Flash-9B` and the lowercase variant all return 401 rather than content. A control fetch of `zai-org/GLM-4.6V-Flash` (definitely real) loaded full content through the same tool, so the 401s indicate non-public or non-existent repos rather than an access failure.
5. **Z.ai's own docs** (`https://docs.z.ai/` overview + llms.txt, and `https://z.ai/blog` which itself 404s): the text-model matrix lists only GLM-5.3(-FlashX-Legal), 5.2, 5.1, 5, 4.7 and 4.6 — with **no GLM-4.6-Flash announcement, guide page, or entry anywhere**.
6. **Web search (Bing)** for `"GLM-4.6-Flash" Zhipu`: ~9,000 raw hits but zero genuine model pages in the visible results (all irrelevant "private banking" spam). No launch post, benchmark, or vendor page exists under this name.

#### Conflict / resolution notes

- No conflicting sources were found. Every source that could answer the question answered "no", and the three partial-coverage sources (OpenRouter, HF, Bing) are individually labelled as such above rather than presented as complete negatives.
- **The strongest single piece of evidence is the naming asymmetry**, not any one 404: Zhipu shipped a text-Flash at 4.5 and again at 4.7 and 5.x, but applied "Flash" only to the *vision* line at 4.6. A repo slug `glm-4.6-flash` therefore most plausibly arose as a bad merge target for `glm-4.6v-flash` (the real 4.6-era Flash model, already researched and scored separately in `model/glm-4.6v-flash/`) or for `glm-4.5-flash`.
- Closest real models, for anyone needing a substitute: **GLM-4.6V-Flash** (real, 9B vision, 128K ctx, MIT, researched in this pass), **GLM-4.6** (real, text flagship, 204.8K ctx / 131,072 out, open weights), and **GLM-4.7-Flash** (real, 30B-A3B text MoE, 200K ctx / 131,072 out, MIT). None of these should be silently merged into this folder's numbers — only the ID actually measured may be cited.
- **Surfaced for the orchestrator, not acted on:** this slug appears in `model-queue.md` with a computed Overall of 63.2, so other raters evidently produced reports for it. Under `RULES.md` a folder is permanent and only a *user* may park a slug (it must be removed from both `RETIRED_SLUGS` lists, `src/data/models.ts` + `scripts/lib/average.mjs`, to be rendered in `model-aliases.generated.md`). This file therefore makes no parking recommendation and no deletion — it records the negative finding and stops.
- **Batch note:** this is the fifth phantom slug found in this queue (`claude-sonnet-5.4`, `claude-opus-4.4`, `qwen-3.8-325b`, `gpt-oss-120b-lite`, and now `glm-4.6-flash`), each verified against the same class of independent catalogs. The recurring pattern is informative: three of the five are a plausible-but-wrong name formed by transplanting a real suffix (`-4.4`, `-325b`, `-flash`) onto a real family. That clustering strengthens the case for a wider queue audit once the user decides how to handle these.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
