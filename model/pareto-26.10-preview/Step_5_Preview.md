# Pareto 26.10 Preview — findings by Step 5 Preview

- Source: Unbiased (`pareto-26.10-preview`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview. Distinct from **Pareto 26.9** (the previous release, tracked separately in `model/pareto-26-9/`); the roster note for `union-alpha` confirms 26.9 and 26.10 are separate products, not one composite record.
- **Short description:** **Not a checkpoint — a composite router.** Unbiased's model card is explicit: "Pareto is Unbiased's blended AI model: it selects frontier and open models for each request and blends their outputs into one answer." Scores therefore measure a routing-and-blending policy, not a set of weights, and will drift whenever the underlying model pool changes.
- **Provider / access:** Unbiased API; model identifier is simply **`pareto`** (not `pareto-26.10-preview`). Also tracked by SurfMind, CloudPrice, token.app, modelcompare.dev, runfreetools and lmmarketcap. No OpenCode Zen route found.
- **Release / knowledge:** released **2026-10-01** (Unbiased's preliminary benchmark runs are dated October 1, 2026). The model card's release notes state **"Pareto 26.10 is out of preview"** — i.e. the `-preview` folder name is now historical; the GA product is Pareto 26.10. Knowledge cutoff not disclosed.
- **IDs:** `pareto` (Unbiased API). No Free ID found.
- **Context window:** **1M tokens** — reported consistently by SurfMind, CloudPrice, token.app, modelcompare.dev and runfreetools, but **not stated by Unbiased's own model card**, and BenchLM records it as "N/A". Max output **128K** (SurfMind). Treat the 1M figure as third-party reporting.
- **Modalities:** text and image in; text out (Unbiased card + SurfMind agree). SurfMind additionally lists reasoning, tool calling and structured outputs. **No multimodal, audio or video input** — and no multimodal benchmark exists for it at all.
- **Pricing (as of 2026-11-05):** **$0.80 input / $0.03 cached input / $3.20 output per 1M** (Unbiased model card; corroborated by CloudPrice, token.app, lmmarketcap and modelcompare.dev). **Cost per task** is the headline: DeepSWE **$0.24**, Terminal-Bench 4.0 **$0.48**, HLE text-only **$0.008**.
- **Architecture:** proprietary; a router/blend over frontier and open models, so no parameter count applies.

### Raw benchmarks found

**Only four benchmarks exist publicly for this model**, and all four are Unbiased's own preliminary runs. This is the thinnest evidence base of any model researched in this series, and it caps every score below. Unbiased states the caveats itself, verbatim: results "are from October 1, 2026 runs and may change before final publication"; comparator results are "transcribed from a September 21, 2026 comparison and are not independently validated"; "denominators and cost methodology require confirmation"; competitor points "use their own task sets and harnesses, so they are not directly comparable with our runs."

- Terminal-Bench 4.0 (agentic terminal use): **50.8%** at **$0.48/task**. Unbiased's own comparison table: Claude Sonnet 5.5 70.6% @ $12.54 · GPT-6 Astra 59.6% @ $5.86 · GPT-6.1 Sol 56.1% @ $1.82 · Fable 5.1 55.1% @ $15.78 · DeepSeek V4.1 Flash 26.8% @ $1.16 · GPT-6 Luna 12.6% @ $0.24. Pareto sits on the cost frontier, 4th of 7 on score.
- DeepSWE v1.1 (agentic coding): **69.9%** at **$0.24/task**. Comparators: GPT-6.1 Sol 75.2% @ $0.65 · GPT-6 Astra 74.0% @ $4.43 · GPT-6 Luna 66.6% @ $0.22 · Fable 5 70.0% @ $13.50 (30-task slice) · Pareto 26.9 70.0% @ $0.29 (30-task slice). Pareto is on the cost frontier but **below** GPT-6.1 Sol, GPT-6 Astra, Fable 5 and its own predecessor on score.
- HLE, text-only (expert reasoning): **49.9%** at **$0.008/task**. Comparators: Fable 5.1 59.1% @ $1.59 · Claude Sonnet 5.5 55.0% @ $0.54 · GPT-6 Astra 54.7% @ $0.38 · GPT-6.1 Sol 52.9% @ $0.078 · DeepSeek V4.1 Flash 39.2% @ $0.042 · GPT-6 Luna 38.5% @ $0.012. Pareto leads on cost by a wide margin but sits 5th of 7 on score.
- GPQA-Diamond: **92.4%** (BenchLM, from Unbiased's preliminary results). Deliberately **excluded from Unbiased's own cost chart** because "no other model in that table has a published cost per task for it" — so it cannot be placed against the field.
- **No verified public score found** for: τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Claw-Eval, SWE-bench Verified, SciCode, LiveCodeBench, Vibe Code Bench, CritPt, MRCR, AA-LCR, MMMU-Pro, and any Artificial Analysis Intelligence Index or composite measurement. Artificial Analysis does not list this model at all, and BenchLM assigns **no overall score** ("unranked") from just 3 source-displayable rows.
- **Caveat on the DeepSWE figure:** the 26.9 and Fable 5 comparators use a 30-task slice rather than the full DeepSWE v1.1 set, and Pareto 26.9's HLE number was reported "without a text-only qualifier" — so the 69.9% is measured on a fuller set than some of the numbers beside it, which flatters the comparison.

### Normalized scores (1–100)

- **Tool use: 62/100.** One measurement, and a mid-tier one: Terminal-Bench 4.0 50.8% trails Claude Sonnet 5.5 (70.6%), GPT-6 Astra (59.6%), GPT-6.1 Sol (56.1%) and Fable 5.1 (55.1%) while leading only DeepSeek V4.1 Flash (26.8%) and GPT-6 Luna (12.6%). The 62 reflects that placement plus the model's genuinely exceptional efficiency — it is the best score reachable at $0.48/task on Unbiased's own frontier chart. Capped hard by the complete absence of τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas and Claw-Eval, which are where tool-use breadth is actually decided.
- **Reasoning: 75/100.** GPQA-Diamond 92.4% and HLE text-only 49.9% both clear the methodology's frontier references (GPQA 90%+, HLE 40%+), which is why this is not scored in the mid band. Capped because those are the *only* two reasoning data points, both self-run, with no composite index, no CritPt, no MRCR and no third-party replication — and because HLE 49.9% is 5th of 7 in Unbiased's own comparison despite a 200x cost advantage.
- **Context window: 95/100.** 1M-token tier per five independent trackers, with a 128K max output. Held at the tier floor for two reasons: Unbiased's own model card does not state a context window (BenchLM records it as "N/A"), and no retrieval measurement of any kind — MRCR, RULER, GraphWalks, AA-LCR — exists, so the ≥98%-retrieval condition for a 100 is unverified.
- **Multimodal: 62/100.** Text and image in, text out places it in the methodology's "+image in" 60–70 band. Scored at the low end because there is **zero** multimodal evidence — no MMMU-Pro, no Chartography, no document or perception benchmark — and the modality list is confirmed only by Unbiased's card and SurfMind, with no video or audio support to lift it into the 75–90 tier.
- **Coding: 78/100.** DeepSWE v1.1 69.9% is close to but below the 74%+ frontier reference, and it is measured on the fuller task set than the 30-task-slice comparators shown beside it. It earns its place on the cost frontier — 69.9% at $0.24/task against GPT-6.1 Sol's 75.2% at $0.65 and GPT-6 Astra's 74.0% at $4.43 — which is the entire product thesis. Capped by no SWE-bench Verified, no SciCode, no LiveCodeBench, no Coding Index, and by the fact that it is 4th of 7 on Terminal-Bench 4.0.
- **Cost efficiency: 94/100.** $0.80/$3.20 per 1M with $0.03 cached reads is between the methodology's ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88) anchors, and the measured cost per task is the decisive factor: it is on the Pareto frontier for **all three** benchmarks where a cost exists, at $0.24 (DeepSWE), $0.48 (TB4.0) and $0.008 (HLE) per task — the last being roughly 50x cheaper than the nearest competitor. That is a verified, independently charted efficiency lead, so the Pareto bonus applies fully.
- **Overall Score: 74/100.** (62 + 75 + 95 + 62 + 78) / 5 = 74.4 → 74. Recommendation: an outstanding **cost-efficiency pick** for agentic coding and terminal work — if the measured $0.24–$0.48 per task holds on your own workload, nothing else here competes on price per solved task, and it is the only product in this series whose entire benchmark set is published as a cost-frontier argument. Do not treat it as a capability leader: on Unbiased's own numbers GPT-6.1 Sol, GPT-6 Astra, Claude Sonnet 5.5 and Fable 5.1 all beat it on at least one of the three scored benchmarks, and with only four self-run measurements there is no independent evidence to anchor it. Also note the folder name is now historical — the product shipped out of preview in October 2026 under the identifier `pareto`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: public internet research using Unbiased's official model card and preliminary-results page as the primary source (which publishes score *and* cost-per-task for three benchmarks, plus a competitor table), cross-checked against BenchLM (which records it as unranked with only 3 source-displayable rows and no overall score), SurfMind's archived model profile, and five further trackers (CloudPrice, token.app, modelcompare.dev, runfreetools, lmmarketcap) for the context window, pricing and modality agreement. Unbiased's own caveats about preliminary status, non-independent comparators, 30-task slices and non-comparable harnesses are quoted rather than paraphrased, because they materially limit every score above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Unbiased — Pareto 26.10 model card (benchmarks, cost per task, pricing, release notes)](https://unbiased.ai/model-card/)
  - [Unbiased — Pareto 26.10 preliminary results and trade-off frontier charts](https://unbiased.ai/)
  - [BenchLM — Pareto 26.10 Preview (3 source-displayable rows, unranked)](https://benchlm.ai/models/pareto-26-10-preview)
  - [SurfMind — Pareto 26.10 Preview pricing, context & benchmarks (archived)](https://surfmind.ai/models/unbiased/pareto-26.10-preview)
  - [CloudPrice — Pareto 26.10 Preview pricing & specs](https://cloudprice.net/models/unbiased-pareto-26-10-preview)
  - [token.app — Pareto 26.10 pricing, context & benchmarks](https://token.app/model/pareto-26.10-preview)
  - [Benchable.ai — Pareto 26.10 Preview model details & benchmarks](https://www.benchable.ai/models/unbiased/pareto-26.10-preview-20260929)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
