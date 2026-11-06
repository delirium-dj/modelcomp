# Ember-1 — findings by Step 5 Preview

- Source: Fireworks AI (`fireworks/ember-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1 (Fireworks AI). A **Research Preview** variant — BenchLM records the variant string `base (Research Preview)`, which matters: it is not a GA model, and Fireworks labels it as such.
- **Short description:** A research-preview model with **only five measured benchmarks, all vendor-published, and no composite index, no multimodal row and no long-context row anywhere**. Its headline claim is strong — **SWE-bench Verified 92.2%**, which would place it among the strongest verified coding figures in this research series — but it is unverifiable on that evidence alone, and BenchLM assigns it **no overall score and no rank** ("unranked"). Treat this as a capability claim with a launch post behind it, not a measured model.
- **Provider / access:** Fireworks AI's own API (`fireworks/ember-1`) and its Research surfaces. **No OpenCode Zen route** appears in Zen's current model list, and no open weights are released.
- **Release / knowledge:** release date not restated on the model page; Fireworks' research-preview positioning suggests a recent 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `fireworks/ember-1` (Fireworks API). **No Free ID found.**
- **Context window:** **1.04M tokens** (BenchLM) — one of the larger windows in this research series, though no retrieval measurement exists for it.
- **Modalities:** not stated by the model page or the launch post in the sources checked. **No multimodal benchmark exists for this ID**, so image/video/audio coverage is entirely unverified.
- **Pricing (as of 2026-11-05):** **not published in the sources checked** — Fireworks' page is indexed by BenchLM for capability only, and no rate card appears in the launch post or the model page. Scored conservatively and flagged as unverified rather than assumed.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**Only five benchmarks exist for this model across all trackers checked**, all from Fireworks' own Ember-1 launch post (so all are **vendor-published, with no independent replication**). BenchLM's coverage note is blunt: "no public overall score is assigned."

Coding — the only measured dimension:

- **SWE-bench Verified: 92.2%** (vendor) — the strongest single figure, and the one that would justify the queue's 87.0 if independently verified
- DeepSWE: **75.2%** (vendor) — clears the 74% frontier reference
- **Terminal-Bench 2.1: 82.0%** (vendor) — 6 points under the 88%+ reference, and joint-second in this batch behind GLM-5.3-Flash's 84.3%... [see note]

Agent / tool use:

- **τ²-bench Airline: 66.0%** (vendor) — the only service-workflow figure in existence for this model
- **Terminal-Bench 2.1: 82.0%** (doubles as the tool-use indicator)
- **τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, Claw-Eval, GDPval-AA, JobBench, MazeBench, ALE, Terminal-Bench 4.0: no verified public score found** — so two of three frontier references are entirely unmeasured

Reasoning / knowledge:

- **GPQA Diamond, HLE, CritPt, SciCode, ARC-AGI, FrontierMath, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience: no verified public score found** — **every single reasoning, knowledge and reliability reference is absent for this model.**

Multimodal:

- **No verified public score found for any multimodal benchmark.** Modality coverage is undocumented.

Long context:

- **No verified public score found.** The 1.04M window is asserted by BenchLM with no retrieval measurement of any kind.

### Normalized scores (1–100)

- **Tool use: 55/100.** Scored on two vendor-published figures. Terminal-Bench 2.1 82.0% is 6 points under the 88%+ reference but respectable; τ²-bench Airline 66.0% is the only service-workflow number in existence. **Two of three frontier references (τ³-Banking, GDPval-AA) have no figure at all, and there is no MCP-Atlas, OSWorld, BrowseComp, Toolathlon, Claw-Eval or ALE measurement.** Scored mid-band on the two existing numbers rather than lower because SWE-bench Verified 92.2% and DeepSWE 75.2% imply a strong underlying harness substrate.
- **Reasoning: 45/100.** Well below the methodology's mid band, and this is the report's central finding. **Not one reasoning, knowledge or reliability benchmark exists for this model** — no GPQA Diamond, no HLE, no CritPt, no SciCode, no ARC-AGI, no FrontierMath, no AA-LCR, no MRCR, no composite index and no hallucination figure. Scored at 45 rather than the 50 floor because DeepSWE 75.2% and SWE-bench Verified 92.2% both require reasoning capability to achieve, so the substrate is demonstrably present even though no frontier reference can be checked. **This is a floor imposed by missing evidence, not a measurement.**
- **Context window: 95/100.** 1.04M-token tier at the tier floor: the window is asserted by BenchLM, but **no MRCR, GraphWalks or AA-LCR figure exists at any length**, and no max-output limit is published. The window's size is vendor-adjacent; its usable depth is entirely unmeasured.
- **Multimodal: 45/100.** **Modality coverage is undocumented by Fireworks and no multimodal benchmark exists for this ID.** Scored mid-band rather than at the 10–20 text-only floor because nothing states it is text-only either, and the strong coding results are consistent with a model that reads code and tests rather than only text. **Explicitly a placeholder for unknown, not an inference** — if Fireworks documents image input this would move to 60–70; if it confirms text-only, this drops to 10–20.
- **Coding: 80/100.** The strongest dimension and the model's actual case. **SWE-bench Verified 92.2%** would be among the highest verified figures in this research series (behind Claude Opus 5's 96–97%, level with GLM-5.3-Flash's 92.0%), **DeepSWE 75.2% clears the 74% reference**, and Terminal-Bench 2.1 82.0% is respectable. Capped by Terminal-Bench 2.1 being under the 85% reference, and by the total absence of AA-SciCode, the AA Coding Index, LiveCodeBench, SWE-bench Pro and any replication of the 92.2% by a third party. **All three strong figures are vendor-published from a single launch post.**
- **Cost efficiency: 55/100.** **No rate card is published in any source checked** — Fireworks' page and launch post carry no pricing, and there is no Zen, Openrouter or gateway listing. Scored conservatively at 55, between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors, on the assumption that a research-preview API model would sit in that band. **Explicitly an estimate, not a measurement** — verify against Fireworks' pricing before relying on it. No free tier and no open weights.
- **Overall Score: 64/100.** (55 + 45 + 95 + 45 + 80) / 5 = 64 → **64**. Recommendation: **a research-preview capability claim, not a deployable model choice.** The evidence for its headline strength — SWE-bench Verified 92.2%, DeepSWE 75.2% — rests entirely on Fireworks' own launch post, with no independent replication, no composite index, no multimodal row, no reasoning row and no published price. The 64 is therefore a floor on missing evidence across two whole dimensions, not a capability judgement. Re-score it the moment a third party (Artificial Analysis, Vals, Epoch, ARC) measures it, or Fireworks publishes a rate card and a modality statement.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Fireworks' Ember-1 launch post and model page as the primary source (via BenchLM's 5-row catalog, which attributes all five figures to "Fireworks Research: Ember-1 launch post"), cross-checked against BenchLM's model-details entry for the research-preview designation, 1.04M context and unranked status. **The dominant finding of this report is an evidence gap, not a capability judgement**: five benchmarks total, all vendor-published, with BenchLM explicitly assigning no overall score, and no composite index, multimodal, reasoning, knowledge, reliability or long-context figure anywhere. Multimodal, cost-efficiency and reasoning scores are explicitly labelled as placeholders-for-unknown or estimates rather than measurements, and the missing-benchmark list is exhaustive. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Fireworks Research — Ember-1 launch post (source of all five measured figures)](https://fireworks.ai/blog/ember-1)
  - [Fireworks — Ember-1 model page](https://fireworks.ai/models/fireworks/ember-1)
  - [BenchLM — Ember-1 (5 source-displayable rows, unranked)](https://benchlm.ai/models/ember-1)
  - [OpenCode Zen — model list and Console pricing (no Ember-1 route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
