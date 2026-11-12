# Qwen 3.5 Flash-Lite — findings by Step 5 Preview

- Source: Alibaba (`opencode/qwen-3.5-flash-lite`) — **identity unverified / no such vendor route found**
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-31
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## What this report is

**This is a negative-finding report: no model by this name was found.** It is kept on disk under the repo's research-permanence rule, and it records *why* rather than inventing content. The 2026-11-06 re-run re-verified the finding against four independent sources.

## Model card

- **Name:** Qwen 3.5 Flash-Lite — **as named by the folder slug and its curated `meta.json`; no such vendor product or API route was found.**
- **Short description:** No Qwen 3.5 Flash-Lite tier exists in any Alibaba Cloud Model Studio catalog or QwenCloud model-release changelog. The family's real tiers are **Qwen3.5-Flash** (corresponding to the open-weights **Qwen3.5-35B-A3B** architecture), **Qwen3.5-2B**, **Qwen3.5-0.8B**, **Qwen3.5-4B** and **Qwen3.5-9B** — all refreshed in this session — and a "-Lite" suffix is not a tier any of them uses.
- **Provider / access:** **none found.** No Alibaba Cloud route, no gateway listing, no weights repository.

## What is verified (the negative finding)

- **No `qwen3.5-flash-lite`, `qwen-flash-lite`, or equivalent appears in Alibaba Cloud Model Studio's recommended-models catalog or in QwenCloud's complete model-release changelog** — re-verified 2026-11-06.
- **Hugging Face API returns zero results** for `Qwen3.5-Flash-Lite` and for `qwen3.5-flash-lite` — re-verified 2026-11-06.
- **Artificial Analysis returns 404** for `/models/qwen-3-5-flash-lite` — re-verified 2026-11-06.
- **BenchLM carries no page for this slug in any spelling** (`qwen-3.5-flash-lite`, `qwen3-5-flash-lite`, `qwen3.5-flash-lite` and `Qwen3.5-Flash-Lite` all 404) — re-verified 2026-11-06.
- **The repo's curated `meta.json` carries unusually specific claims — 1M total / 65,536 max output, text/image/video in, ~$0.10/$0.40 per 1M, and ~35B total / 3B active MoE — and none is corroborated by any vendor or third-party source.** The `pricingLinks` field points at Alibaba Cloud Model Studio's generic model-studio help page rather than a model-specific page.
- **An architecture-disambiguation note is recorded: the real Qwen3.5-Flash corresponds to the open-weights Qwen3.5-35B-A3B architecture**, so the meta's "~35B total / 3B active" figure describes the *existing* Flash tier rather than a hypothetical Lite tier — which makes this slug's most distinctive structural feature visible: **its catalogue fields are the real Flash tier's fields with a `-Lite` suffix transplanted onto the tier name**, a suffix-transplant error in the same family as `gpt-oss-120b-lite`.
- **A batch note is recorded: this is the "-Lite" analog of the `gpt-oss-120b-lite` suffix-transplant pattern**, and one of several phantom slugs found in this queue. It differs from the common-word phantoms (`neomorph`, `owo-2.5`) and from the scaffolded placeholder (`ling-3.2-flash`) by being a **plausible-family-name phantom with a transplanted tier suffix**.
- **Comparison points that do exist: Qwen3.5-Flash and the Qwen3.5-2B/0.8B/4B/9B family, all refreshed in this session.** **A sibling non-import is recorded: those models' figures are named as comparison points and explicitly not merged into this slug.**

## What is missing (why there are no capability scores)

- **No model to evaluate: no vendor route, no weights repo, no benchmark attribution, no tracker page.**
- **Every benchmark in this research series is unmeasured for this slug**, including the ones checked directly on both passes: Terminal-Bench 2.1/4.0, Tau3-Banking, Tau2-Bench, GDPval-AA, Claw-Eval, ClawProBench, Toolathlon, MCP-Atlas, SWE Atlas Codebase QnA, GPQA Diamond, HLE, LCR, MLCR, CritPt, SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench, CursorBench, FrontierCode, AA Intelligence Index and AA-Omniscience.
- **The scores below are computed on the repo's curated `meta.json` catalogue fields only** — a context window, a modality and a price — and on nothing else, because those are the only fields that exist for this slug. **They are catalogue-derived scores, not capability scores**, and every one of them is labelled with what it rests on.

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No agentic benchmark of any kind exists for this slug — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index — and no vendor claim exists either, since no vendor product was found. The neutral floor is used precisely because there is no evidence in either direction.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No GPQA Diamond, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index or AA-Omniscience figure exists for this slug, and no vendor claim exists either.
- **Context window: 90/100.** **1,000,000 tokens total with 65,536 max output** per the repo's curated meta — the methodology's ≥1M band (95–100), docked to 90 because **no MRCR, RULER or needle-retrieval curve exists**, so the window's usable depth is entirely unverified, and **no vendor source corroborates the catalogue figure at all**. Held at 90 rather than the band's top because a 1M window with no retrieval measurement is a spec claim rather than a demonstrated property.
- **Multimodal: 82/100.** **Text, image and video in; text out** per the repo's curated meta — the methodology's upper multimodal band on input breadth, scored at 82 rather than the top because **no MMMU-Pro, CharXiv, ExtractBench, ZeroBench, MathVision, DocVQA or VideoMME figure exists**, so the modality claim is a catalogue claim with no measurement behind it, and there is no non-text output.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No SWE-bench, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, CursorBench, FrontierCode or Terminal-Bench figure exists, and no vendor claim exists either.
- **Cost efficiency: 92/100.** **~$0.10/$0.40 per 1M in/out** per the repo's curated meta — the methodology's near-$0 anchor with a genuinely cheap metered rate. **Explicitly a catalogue-based inference, not a verified vendor price**, since no model by this name was found and no vendor source corroborates the figure. Held at 92 rather than 100 because `$0.10/$0.40` is a real metered price and the model is described as a commercial Alibaba Cloud tier with **no open-weight route** (`"noFreeId": true` in the meta), so the $0 self-hosting escape that lifts open-weight models does not exist here.
- **Overall Score: 64/100.** (50 + 50 + 90 + 82 + 50) / 5 = 64.4 → **64** → **64**. **This Overall is a catalogue artefact, not a capability verdict, and the point needs stating plainly: this score is the highest of the phantom reports in this batch, and it is high only because the repo's metadata carries an unusually impressive 1M-context multimodal price card for a model that does not exist.** Four of the five quality dimensions are the methodology's neutral floor for "unmeasured", the multimodal dimension is a catalogue modality claim with no measurement behind it, and the cost dimension is a catalogue price — so **the 64 measures the repo's metadata fields, not a model, and it must not be read as evidence of capability.** Recommendation: **there is no model to recommend.** This is a phantom slug and a **suffix-transplant error**: its catalogue fields describe the real Qwen3.5-Flash tier (the open-weights Qwen3.5-35B-A3B architecture) with a `-Lite` suffix transplanted onto the tier name, and no vendor uses such a suffix. Prefer **Qwen3.5-Flash or the Qwen3.5-2B/0.8B/4B/9B family, all refreshed in this session** — real products with measured figures.

## Re-score trigger

This report should be re-opened if Alibaba ships or lists a product by this name, or if any independent tracker gains a page for the slug. Absent either, the file stands as a permanent negative finding.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-10-31 negative finding, **re-verified against four independent sources rather than re-asserted**: **no `qwen3.5-flash-lite`, `qwen-flash-lite`, or equivalent appears in Alibaba Cloud Model Studio's recommended-models catalog or in QwenCloud's complete model-release changelog**, the Hugging Face API returns zero results for the slug, Artificial Analysis returns 404 for `/models/qwen-3-5-flash-lite`, and **BenchLM carries no page for this slug in any spelling**. The finding is that **no model by this name exists** — no Alibaba Cloud route, no gateway listing, no weights repository. **The report's distinctive contribution is its mechanism diagnosis: this is a suffix-transplant error in the same family as `gpt-oss-120b-lite`, not a common-word collision** (as with `neomorph` and `owo-2.5`) and not a scaffolded placeholder (as with `ling-3.2-flash`). The evidence is in the meta's own fields — **the "~35B total / 3B active" figure is precisely the architecture of the real Qwen3.5-Flash, which corresponds to the open-weights Qwen3.5-35B-A3B** — so the catalogue fields describe an existing tier with a `-Lite` suffix transplanted onto the tier name, which makes the phantom recognisable by structural resemblance rather than by noise signature. **A corroborating detail is recorded: the meta's `pricingLinks` points at Alibaba Cloud Model Studio's generic model-studio help page rather than a model-specific page**, which is the kind of imprecise sourcing a transplanted tier name produces. **The repo's curated `meta.json` fields are recorded as catalogue fields rather than vendor disclosures** — the 1M/65,536 context, the text/image/video modality, the ~$0.10/$0.40 price and the ~35B/3B architecture are all present in the repo's metadata but **no vendor source corroborates any of them**, and that gap is stated rather than smoothed, the more so here because a 1M-context multimodal price card is exactly the kind of plausible detail a phantom carries. **An Overall Score is computed above on catalogue fields only, and its status as a catalogue artefact rather than a capability verdict is stated in that line — the more so here, because the 64/100 is the highest of this batch's phantom reports and it is high only because the repo's metadata carries an unusually impressive price card for a model that does not exist.** Assigning a capability verdict would require inventing figures, which is forbidden, or importing a sibling's, which is forbidden by the sibling non-import rule. **The `"noFreeId": true` field is surfaced as the reason the cost score is 92 rather than the ~97 tier** — the model is described as a commercial cloud tier with no open-weight route, so the $0 self-hosting escape does not exist. **Family comparison points that do exist are named and explicitly not imported** — Qwen3.5-Flash and the Qwen3.5-2B/0.8B/4B/9B family, all refreshed in this session. **A re-score trigger is recorded** with two conditions. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores; in this case they are catalogue-derived only, which is the finding.
- Reference URLs:
  - [Artificial Analysis — `/models/qwen-3-5-flash-lite` (404, re-verified 2026-11-06)](https://artificialanalysis.ai/models/qwen-3-5-flash-lite)
  - [BenchLM — `qwen-3.5-flash-lite` (404 under all spellings, re-verified 2026-11-06)](https://benchlm.ai/models/qwen-3.5-flash-lite)
  - [Hugging Face — zero-result search for `Qwen3.5-Flash-Lite` (the primary confirmation method, re-run 2026-11-06)](https://huggingface.co/models?search=Qwen3.5-Flash-Lite)
  - [Alibaba Cloud Model Studio — recommended-models catalog (no Flash-Lite tier; the meta's own `pricingLinks` target)](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Repo curated meta — `model/qwen-3.5-flash-lite/meta.json` (catalogue fields, no vendor corroboration, `noFreeId: true`)](/model/qwen-3.5-flash-lite/meta.json)
  - See also: [`model/qwen-3.5-2b/`](qwen-3.5-2b.md), [`model/qwen-3.5-0.8b/`](qwen-3.5-0.8b.md) — the real Qwen3.5 small sizes, refreshed in this same batch; [`model/gpt-oss-120b-lite/`](gpt-oss-120b-lite.md) — the other suffix-transplant phantom, refreshed in this same batch
- Future sources: add a new file next to this one, e.g. `Qwen_3_6.md`, using the same headings.

---

## Archived research pass — `Step_5_Preview.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Step_5_Preview.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## qwen-3.5-flash-lite — negative findings by Step 5 Preview

> SELF-EXCLUSION: zero verified public benchmark numbers were found for this exact
> model ID across eight independent authoritative sources. Per the template's
> SELF-EXCLUSION clause (`RULES.md`, `tasks/research.md` step 3.9) this file is saved
> as notes only and carries NO scores — a fabricated number would drag the mean for
> every reader. Scores here are intentionally absent.

- Source: Alibaba (`qwen-3.5-flash-lite`) — **identity unverified / no such vendor route found**
- Archived date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Qwen 3.5 Flash-Lite (as named by the folder slug and its curated meta.json; no such vendor product or API route was found)
- **Short description:** No model or serving tier by this name exists in any authoritative source consulted. The real Qwen 3.5-era line runs Qwen3.5-Plus / Qwen3.5-Flash (plus open-weights Qwen3.5-27B, -35B-A3B, -122B-A10B, -397B-A17B and Omni variants) — there is no "Flash-Lite" checkpoint, API ID, or provider route. Under `RULES.md` tier identity, a "Lite" pricing/serving tier without distinct weights would not qualify as a model anyway.
- **Provider / access:** none found. QwenCloud's current recommended text-generation list (qwen3.8-max, qwen3.8-max-0902, qwen3.8-flash, qwen3.7-plus, qwen3.7-flash, deepseek-v4.1-flash-1017, glm-5.3, kimi-k3, MiniMax-M2.5) contains no flash-lite entry; OpenCode Zen's Qwen entries are only Qwen3.8 Max, Qwen3.8 Flash, Qwen3.6 Plus, Qwen3.5 Plus.
- **Release / knowledge:** not found.
- **IDs:** none verified. No `qwen3.5-flash-lite`, `qwen-flash-lite`, or equivalent appears in Alibaba Cloud Model Studio's recommended-models catalog or in QwenCloud's complete model-release changelog.
- **Context window:** not verifiable — no model to measure. (The folder's curated meta.json claims 1M total / 65,536 max output, but that claim is not corroborated by any vendor or third-party source.)
- **Modalities:** not verifiable (meta.json claims text/image/video in, text out — uncorroborated).
- **Pricing:** not verifiable (meta.json claims ~$0.10/$0.40 per 1M — uncorroborated).
- **Architecture:** not verifiable (meta.json claims ~35B total / 3B active MoE — uncorroborated; the real Qwen3.5-Flash corresponds to the open-weights Qwen3.5-35B-A3B architecture).

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: no verified public score found (AA returns 404 for this slug).

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found.

#### Verification trail (eight independent sources, all consulted 2026-10-31)

1. **Alibaba Cloud Model Studio — Recommended models** (`https://www.alibabacloud.com/help/en/model-studio/models`, page updated 2026-10-28): text-generation catalog lists qwen3.8-max, qwen3.7-plus, qwen3.8-flash (+ third-party deepseek-v4-pro, glm-5.3, kimi-k3, MiniMax-M2.5). No Qwen 3.5 flash-lite in any category (text, vision, audio, omni, embeddings, decision).
2. **QwenCloud — Model releases changelog** (`https://docs.qwencloud.com/changelog/models`, complete from 2026-03-31 through 2026-10-27): every Qwen release in the window is itemized (qwen3.8-max/-flash/-27b/-2.4T-A95B, qwen3.7-plus/-flash/-max, qwen3.6-flash/-plus/-27b/-35b-a3b, qwen3.5-plus, qwen3.5-livetranslate-flash-realtime, qwen3.5-omni-plus, qwen-flash-character, …). No flash-lite of any generation.
3. **QwenCloud — Text generation models guide** (`https://docs.qwencloud.com/developer-guides/getting-started/text-generation-models`): recommended-model table and built-in-tools list enumerate the full live text lineup; `qwen3.5-flash` appears there, `qwen3.5-flash-lite` does not.
4. **Artificial Analysis** (`https://artificialanalysis.ai/models/qwen-3.5-flash-lite` and `/qwen3.5-flash` variants): 404 — no model page under any spelling.
5. **DuckDuckGo** (3 independent queries: `"Qwen3.5 Flash Lite"`, `"qwen3.5-flash-lite"`, `"Qwen Flash Lite"`): zero results for every spelling.
6. **OpenCode Zen docs** (`https://opencode.ai/docs/zen`): Qwen entries limited to Qwen3.8 Max, Qwen3.8 Flash, Qwen3.6 Plus, Qwen3.5 Plus — no flash-lite ID.
7. **Vals AI**: model pages exist for alibaba_qwen3.5-flash but none for a flash-lite variant (per search-index enumeration of Vals' Alibaba catalog).
8. **General web coverage of the Feb-2026 Qwen3.5 launch** (curateclick, morphllm, apxml, insiderllm roundups): the Qwen3.5 family is consistently Flash / 27B / 35B-A3B / 122B-A10B / 397B-A17B / Omni — no Lite tier in any launch review.

#### Conflict / resolution notes

- No conflicting sources were found — all eight agree independently that no such model exists. The absence spans the vendor's own console catalog, the vendor's release changelog, two independent leaderboards, and three independent catalogs/reviews, which is a stronger negative result than any single source could give.
- The closest real model is `qwen3.5-flash` (native vision-language Flash; open-weights counterpart Qwen3.5-35B-A3B, 262K native context extensible to 1M, Apache 2.0), tracked in this repo as `model/qwen-3.5-flash/`. It must not be silently merged into this folder's numbers — only the ID actually measured may be cited.
- **Surfaced for the orchestrator, not acted on:** this slug appears in `model-queue.md` with a computed Overall, so other raters evidently produced reports for it. Under `RULES.md` a folder is permanent and only a *user* may park a slug. This file therefore makes no parking recommendation and no deletion — it records the negative finding and stops. The same root-cause pattern was observed for `claude-sonnet-5.4` (verified separately on 2026-10-31): both look like repo-side slugs with no vendor product behind them.
- Contrast for calibration: the repo also tracks `gemini-3.5-flash-lite` (Google), which IS a real vendor product — so the "-lite" pattern itself is legitimate; only this Qwen instance lacks any vendor route.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
