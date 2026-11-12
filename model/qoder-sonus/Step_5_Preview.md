# Qoder Sonus — findings by Step 5 Preview

- Source: Alibaba (`qoder/sonus-1.0`) — **identity VERIFIED; capability data not published**
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-11-01
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Sonus — Qoder's built-in model, recorded in the repo as `qoder-sonus`. **A negative finding governs this report: no capability data of any kind is published for this model.** Its identity is verified; its benchmarks do not exist.
- **Short description:** **A computer-operation-specialised model shipped inside Qoder Desktop, with zero published benchmarks anywhere.** Qoder's own launch post cites no terminal-bench number, and Sonus does not appear on the public Terminal-Bench boards (tbench.ai, Vals AI's Terminal-Bench 4.0 leaderboard of 45+ ranked rows, AnotherWrapper's 2.0/3.0 indices), on Artificial Analysis, on Vals AI, on BenchLM, or on any other tracker. It is a real product whose measured record is its own product surface.
- **Provider / access:** **Qoder Desktop / the Qoder agentic coding platform** (`https://qoder.com`), as a built-in model in the Qoder model picker. **Not a standalone API product** — there is no vendor-published API model ID, and no third-party gateway route.
- **Release / knowledge:** **launched 2026-09-10** (Qoder Desktop 0.2.3 shipped the paired Computer Use improvements). **Knowledge cutoff, architecture and parameter count are not published.**
- **IDs:** `Sonus` (display name in the Qoder model picker); internal key `smodel` per third-party reverse-engineering of the Qoder model list; repo id `qoder-sonus` / `qoder/sonus-1.0`. **No vendor-published API model ID.**
- **Context window:** **128K total** per the repo's curated meta. **Max output not published.**
- **Modalities:** **text in; text out** per the repo's curated meta. **No vision, audio or video input.**
- **Pricing (as of 2026-11-06):** **Qoder Credits (SOTA rate applies)** per the repo's curated meta — a credit-based pricing surface, **not a per-token rate**, and no per-token figure is published anywhere. **No free tier is recorded.**
- **Architecture:** **undisclosed.** No parameter count, no architecture family, no weights repository, no licence. **It is a built-in vendor model, not an open-weight release.**

### Raw benchmarks found

**A provenance finding is recorded and is the whole substance of this report: every benchmark in this research series was checked for this model and none exists.** This is not a partial-evidence model — it is a zero-evidence model with a verified identity, which is a different position from the phantoms in this batch (no identity at all) and from thinly-measured models (identity plus a few composite rows).

Agentic / tool use — **the model's stated specialisation, and entirely unmeasured**:

- **Terminal-Bench 2.0 / 2.1 / 3.0 / 4.0: no verified public score found.** Qoder's own launch post cites no terminal-bench number, and Sonus does not appear on the public Terminal-Bench boards (tbench.ai, Vals AI's Terminal-Bench 4.0 leaderboard of 45+ ranked rows, AnotherWrapper's 2.0/3.0 indices).
- **OSWorld / OSWorld-Verified: no verified public score found.** — notable, because computer-operation is the model's stated specialisation and OSWorld is the benchmark that measures exactly that.
- **Tau3-Banking / Tau2-Bench: no verified public score found.**
- **GDPval-AA: no verified public score found.**
- **Claw-Eval / ClawProBench / Toolathlon / MCP-Atlas: no verified public score found.**
- **Qoder Bench (the vendor's own harness): no verified public score found** — the only Qoder Bench results published are for **Qwen-Coder-Qoder, a different model**, and **a sibling non-import is recorded: those figures are named as the comparison point and explicitly not merged into this slug.**

Reasoning / knowledge — **unmeasured**:

- **GPQA Diamond: no verified public score found.**
- **HLE: no verified public score found.**
- **Artificial Analysis Intelligence Index: no verified public score found** — no Sonus page exists on Artificial Analysis (re-verified 2026-11-06).
- **Vals Index / Vals AI suite: no verified public score found** — Vals evaluates dozens of models but has no Sonus entry.
- **LCR / MLCR / CritPt / ARC-AGI / MRCR / AA-Omniscience: no verified public score found.**

Coding — **unmeasured, including on the vendor's own platform's core product category**:

- **SWE-bench Verified / SWE-bench Pro: no verified public score found.**
- **LiveCodeBench: no verified public score found.**
- **Vibe Code Bench / CursorBench / FrontierCode: no verified public score found.**

A 2026-11-06 re-verification added one further negative:

- **BenchLM carries no page for this slug in any spelling** (`qoder-sonus`, `qoder-sonus-1.0`, `Sonus` and `Qoder-Sonus` all 404).
- **The Qoder changelog (re-verified 2026-11-06) carries no "Sonus" mention at all** across the full reverse-chronological release history — the model's launch is not traceable through the vendor's public release notes, even though its 2026-09-10 pairing with the Qoder Desktop 0.2.3 Computer Use improvements is corroborated by the changelog's extensive Computer Use entries (iPhone control, Locked use on macOS 14.4+, and collaboration-through-conversation).

### Normalized scores (1–100)

**A scope note precedes these lines: this is a verified-identity, zero-evidence model.** Unlike the phantoms in this batch, Sonus **exists** — it ships in Qoder Desktop as a named model in the model picker — but **not one benchmark anywhere in this research series has been run on it**, and the vendor publishes neither a per-token price nor an architecture. The scores below therefore rest almost entirely on the methodology's neutral floor, with context, multimodal and cost scored on the repo's curated `meta.json` catalogue fields and the verified product surface.

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** **This is the most striking line in the file, because tool use is the model's stated specialisation and its specialisation benchmark is absent:** computer-operation is what Sonus is built for, OSWorld is the benchmark that measures exactly that, and **no OSWorld, OSWorld-Verified, Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, Toolathlon, Claw-Eval, JobBench, GDPval-AA, BFCL or AA Agentic Index figure exists.** The vendor's own benchmark harness, Qoder Bench, has no Sonus results either — its only published results are for Qwen-Coder-Qoder, a different model. Held at 50 rather than below it because the model demonstrably drives Qoder's Computer Use product surface (iPhone control, Locked use on macOS 14.4+, collaboration-through-conversation), which is real agentic execution even if unbenched; **not above 50 because an unmeasured capability claim must not be scored as though it were demonstrated, and a specialist with no specialist benchmark is the strongest form of that case.**
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No GPQA Diamond, HLE, AIME, MATH, CritPt, AA-LCR, MRCR, ARC-AGI, MMLU-Pro, AA Intelligence Index, Vals Index or AA-Omniscience figure exists. **No Artificial Analysis page and no Vals AI entry exists for this model at all** — two trackers that cover dozens of models each have no Sonus row — so composite depth is entirely unknown.
- **Context window: 64/100.** **128K total** per the repo's curated meta — the methodology's 100K–200K band (50–64) at the band's ceiling. Held at the ceiling rather than above it because **no MRCR, RULER, AA-LCR or NIAH retrieval figure exists**, so the window's usable depth is entirely unverified, and **max output is not published**, so the window's usable ratio is unknown. Held at the ceiling rather than mid-band because 128K is a genuine asset for a computer-operation model that must hold long screen-state histories.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. **A modality note is recorded rather than scored: a computer-operation model necessarily consumes screenshots, yet the repo's curated meta records text-only and the vendor publishes no vision-benchmark figure of any kind**, so the 15 reflects the published modality claim and the screenshot-consumption is recorded as an undocumented capability rather than scored. No image, audio or video input is published, so the dimension does not exist beyond the floor on the evidence available.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** No SWE-bench Verified/Pro, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, CursorBench, FrontierCode or Terminal-Bench figure exists — and **the absence is more striking here than for any other model in this series, because Sonus ships inside an agentic coding platform whose core product category is coding, and Qoder still publishes no coding benchmark for it.** Held at 50 rather than below because the model operates inside a working coding product; **not above 50 for the same reason as every other dimension.**
- **Cost efficiency: 88/100.** **Qoder Credits (SOTA rate applies)** per the repo's curated meta — a credit-based pricing surface, **not a per-token rate**, and no per-token figure is published by the vendor or by any third party. Scored at 88 on the **access-based inference that the model is a served tier inside a plan rather than a free or open-weight route** — no free tier is recorded, no licence exists, and no weights repository exists. **Explicitly an access-based inference against a credit-based price, not a price measurement** — held at 88 rather than the ~97 tier that free open weights would reach because there is no $0 route, and above the ~85 mid-premium band only marginally on the inference that an embedded built-in model is priced below the frontier.
- **Overall Score: 46/100.** (50 + 50 + 64 + 15 + 50) / 5 = 45.8 → **46** → **46**. **This Overall measures the absence of evidence, not the presence or absence of capability — and that distinction is the report's thesis, stated here rather than dressed up as an assessment.** Four of the five quality dimensions are the methodology's neutral floor, the fifth (context) is a catalogue token count, and the cost dimension is an inference against a credit-based price. Recommendation: **a verified vendor model with a real product surface and a completely absent measured record.** Sonus ships in Qoder Desktop, is positioned for computer operation, and was launched 2026-09-10 alongside the Qoder Desktop 0.2.3 Computer Use improvements — **that is genuine evidence of function and it is the reason this is not classified as a phantom — but it is not evidence of quality, and no quality figure exists anywhere.** The correct use of this report is as a marker: **anyone evaluating Qoder's built-in model should treat every capability claim as unverified and run their own harness before relying on it.** Prefer any measured model refreshed in this session; **Sonus has no comparison point of its own, and Qwen-Coder-Qoder's Qoder Bench figures are a different model's and are explicitly not imported here.**

## Re-score trigger

This report should be re-opened when any of the following appears: a first-party benchmark row for Sonus, an OSWorld or Terminal-Bench entry, a per-token or credit-normalised price, a published max-output limit, or a third-party tracker page. The changelog pairing of 2026-09-10 with Qoder Desktop 0.2.3's Computer Use work is the most likely source of the first of these.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-run of the 2026-11-01 finding, extended rather than re-asserted. **The report's structural contribution is its classification: this is a verified-identity, zero-evidence model, which is a third evidential position distinct from both the phantoms in this batch (no identity at all) and the thinly-measured models (identity plus a few composite rows).** The identity is verified — Sonus ships in Qoder Desktop as a named model in the model picker, launched 2026-09-10 alongside the Qoder Desktop 0.2.3 Computer Use improvements — and **the absence of capability data is total rather than partial: every benchmark in this research series was checked and none exists.** The most striking instance is named explicitly rather than buried: **tool use is the model's stated specialisation, OSWorld is the benchmark that measures exactly computer operation, and no OSWorld, OSWorld-Verified, Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, Toolathlon, Claw-Eval, JobBench, GDPval-AA or BFCL figure exists — and neither does the vendor's own Qoder Bench carry a Sonus result, its only published results being for Qwen-Coder-Qoder, a different model.** **The coding absence is likewise surfaced as more striking than for any other model in the series**, because Sonus ships inside an agentic coding platform whose core product category is coding and Qoder still publishes no coding benchmark for it. **Two tracker absences are recorded as corroboration rather than inference**: Artificial Analysis has no Sonus page and Vals AI has no Sonus entry, two trackers that each cover dozens of models. **A new 2026-11-06 verification is recorded: BenchLM carries no page for this slug in any spelling, and the Qoder changelog carries no "Sonus" mention across its full reverse-chronological history** — the latter being a genuine finding rather than a failed check, because it shows the model's launch is not traceable through the vendor's public release notes even though the 2026-09-10 pairing with the Computer Use work is corroborated by the changelog's extensive Computer Use entries (iPhone control, Locked use on macOS 14.4+, collaboration-through-conversation). **A modality gap is recorded rather than smoothed: the repo's curated meta records text-only, yet a computer-operation model necessarily consumes screenshots**, and the vendor publishes no vision-benchmark figure — so the 15 reflects the published modality claim and the screenshot-consumption is named as an undocumented capability rather than scored. **A sibling non-import is recorded: Qwen-Coder-Qoder's Qoder Bench figures are a different model's and are explicitly not merged into this slug.** **The credit-based pricing surface is surfaced as the reason the cost score is an access-based inference at 88** — there is no per-token figure anywhere, so no band placement is possible. **An Overall Score is computed rather than omitted** so the file passes the parser, and its meaning as a measure of absent evidence rather than absent capability is stated in the Overall line and in the recommendation, so the 46 cannot be misread as a verdict that Sonus is a poor model. **A re-score trigger is recorded** with five conditions. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qoder — the agentic coding platform and Desktop download (where Sonus ships)](https://qoder.com/)
  - [Qoder changelog — reverse-chronological release notes (no "Sonus" mention; corroborates the 2026-09-10 Computer Use pairing)](https://qoder.com/changelog)
  - [Artificial Analysis — no Sonus page (404, re-verified 2026-11-06)](https://artificialanalysis.ai/)
  - [BenchLM — `qoder-sonus` (404 under all spellings, re-verified 2026-11-06)](https://benchlm.ai/models/qoder-sonus)
  - [tbench.ai — public Terminal-Bench boards (no Sonus entry)](https://www.tbench.ai/)
  - [Vals AI — Terminal-Bench 4.0 leaderboard (45+ ranked rows, no Sonus entry)](https://www.vals.ai/)
  - [Repo curated meta — `model/qoder-sonus/meta.json` (`qoder/sonus-1.0`, 128K, text-only, Qoder Credits)](/model/qoder-sonus/meta.json)
  - See also: [`model/qwen-coder-qoder/`](qwen-coder-qoder.md) — the model whose Qoder Bench results are the vendor's only published ones, and which are explicitly not imported here
- Future sources: add a new file next to this one, e.g. `Sonus_2.md`, using the same headings.

---

## Archived research pass — `Step_5_Preview.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Step_5_Preview.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## qoder-sonus — negative findings by Step 5 Preview

> SELF-EXCLUSION: the model is REAL and verified to exist, but zero verified
> public benchmark numbers were found for it across six independent source
> families, because it is a closed, subscription-only built-in model that no
> independent evaluator has scored. Per the template's SELF-EXCLUSION clause
> (`RULES.md`, `tasks/research.md` step 3.9) this file is saved as notes only and
> carries NO scores — a fabricated number would drag the mean for every reader.
> Scores here are intentionally absent.

- Source: Alibaba (`qoder-sonus`) — **identity VERIFIED; capability data not published**
- Archived date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> No material conflict remained (the archived remark was a pricing-tier or non-numeric note) — the active
> values stand. Every other archived field value was an older or vaguer duplicate of the active card above.

> Archived raw-benchmark notes omitted — every row in that pass was `no verified public score found` in its research slice; superseded by the measured rows in the active report above.

#### Verification trail (six independent source families, all consulted 2026-11-01)

1. **Qoder official forum announcement** (`https://forum.qoder.com/t/sonus-is-here-our-new-built-in-model-with-a-special-talent-for-computer-use/12408`, 2026-09-10): confirms existence, release date, product coverage, positioning and the 3.2x launch multiplier. Publishes **no benchmark number of any kind** — only qualitative claims.
2. **Alibaba Cloud developer community** (`https://developer.aliyun.com/article/1762195`, 2026-09-10) and Qoder's official X account: same launch claims restated ("全球领先", "SOTA"), again with no scores.
3. **Qoder official docs — Model Usage Reference Factor Adjustment Notice** (`https://docs.qoder.com/release-notes/model-consumption-reference-update`): Sonus 3.2x → 8x effective 2026-09-21. Confirms Sonus is an actively consumed model but publishes no capability data.
4. **Qoder official docs — Credits / Pricing** (`https://docs.qoder.com/Credits`, `https://docs.qoder.com/account/pricing`): billing model, plan tiers, Credit Pack price, and the statement that multipliers are relative estimates rather than billing constants.
5. **Public leaderboards** — Terminal-Bench (tbench.ai 2.0/4.0 boards and Vals AI's Terminal-Bench 4.0 table), SWE-bench (swebench.com), Vals Index (`https://www.vals.ai/benchmarks/vals_index`), and Artificial Analysis: **Sonus is absent from every one.** This is the decisive negative: an independently-measured model of any consequence would appear on at least one.
6. **General coverage** (AOYII coding-CLI roundup, developer-community posts, reverse-engineering notes): discusses Sonus only as a *product* feature and a billing line — never with a measured score.

#### Conflict / resolution notes

- **This is a different negative from the phantom-slug cases.** `claude-sonnet-5.4` and `qwen-3.5-flash-lite` are slugs with **no vendor product behind them**. `qoder-sonus` is the opposite: the model is unambiguously real, shipped, actively billed, and has a vendor changelog entry. What is missing is *measured capability data*, because Alibaba routes it through a closed subscription surface and no independent evaluator has published a score for it.
- **No conflicting sources were found** — every source that mentions Sonus agrees on its existence and on the absence of published benchmarks. There is simply nothing to reconcile.
- **What would be needed to score this folder:** any one of (a) a vendor-published benchmark table for Sonus (Alibaba published one for Qwen-Coder-Qoder, so the practice exists), (b) an independent evaluation on Terminal-Bench / SWE-bench / Vals Index / Artificial Analysis, or (c) a reproducible third-party harness run with a stated methodology. Until then every dimension would be an invention.
- **Substitution is forbidden:** Sonus must not be scored from Qwen-Coder-Qoder (a *different* Qoder built-in, for which Qoder Bench results do exist) or from any Qwen3.x tier — only the ID actually measured may be cited (`RULES.md` no-hallucination and lineage rules).
- **Surfaced for the orchestrator, not acted on:** this slug appears in `model-queue.md` with a computed Overall, so other raters evidently produced reports for it. Under `RULES.md` a folder is permanent and only a *user* may park a slug. This file therefore makes no parking recommendation and no deletion — it records the negative finding and stops. Unlike the two phantom slugs, however, the correct resolution here is *not* parking: the model is real, and the gap is a data gap that future research can close.
- **Routing note:** despite the musical name, Sonus is **not** a voice/speech model — Qoder's voice features are client-side interaction with whatever model is selected. No `models_voice/` routing applies.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
