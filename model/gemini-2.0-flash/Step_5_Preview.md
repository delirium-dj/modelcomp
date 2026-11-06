# Gemini 2.0 Flash — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-2.0-flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug with 15 source-displayable benchmark rows but no overall score** — its own text reads *"has 15 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)" and *"Benchmarks covered: 15 of 744"*. BenchLM classifies it **Non-Reasoning** — the sixteenth such model in this corpus. So the repo queue's Overall of 77.4 is a **roster artefact, not a measured figure** — the same discrepancy documented in the Grok 4.1 and Grok 4.7 reports.
- **Short description:** An unranked 2025-era Flash with **15 rows that are, unusually, genuinely usable** — Google's Gemini 2.5 technical report supplies a same-family baseline (SWE-bench Verified 21.4%, MMMU 69.3%, GPQA 65.2%, AIME 2025 29.7%), and Artificial Analysis supplies the composite and reliability rows. The profile is poor on essentially every axis: **AA-HLE 4.3%, CritPt 0.0%, AA-LCR 31.3%, AA Coding Index absent but SWE-bench Verified 21.4%, AA-Omniscience index −42.5 with 86.2% hallucination, AA Intelligence Index 8.9%.**
- **Provider / access:** Gemini API, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Gemini 2.0 Flash is Google's early-2025 Flash tier. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-2.0-flash` (Gemini API, Zen, BenchLM canonical); `google/gemini-2.0-flash` (Openrouter). Note the separately-tracked `Gemini 2.0 Flash-Lite` sibling has no computed BenchLM score.
- **Context window:** **1M tokens** (BenchLM) — a full frontier window, and one of only two verified properties for this model.
- **Modalities:** **text and image in; text out** (MMMU 69.3% is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**A provenance note is recorded prominently: four of this model's figures — SWE-bench Verified 21.4%, MMMU 69.3%, GPQA 65.2% and AIME 2025 29.7% — are attributed to *Google DeepMind's Gemini 2.5 technical report, Table 3*, i.e. a later generation's report rather than a Gemini 2.0 model card of its own.** That is weaker provenance than a same-model card, and it means those baseline rows describe how the 2.5 report characterised the 2.0 model. The remaining rows are attributed to Artificial Analysis. 15 benchmarks total.

Agentic / tool use:

- **τ²-bench: 29.5%** [AA] — near-floor, and the only agentic figure in the entire evidence base
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge:

- **AA-GPQA Diamond: 62.3%** [AA] / **GPQA 65.2%** (Gemini 2.5 tech report) — fails the 90%+ reference by ~25–28 points
- **AA-HLE: 4.3%** [AA] — **the second-lowest AA-HLE measured anywhere in this research series**, behind only Gemini 1.5 Pro's 4.6% is false — in fact it is *lower*, making it **the lowest**
- **CritPt: 0.0%** [AA] — **ties the lowest CritPt measured in this research series** (with GPT-5 medium and Gemini 3.5 Flash-Lite), within 0.3 points of Claude Opus 4.5's 0.3%
- **AA-LCR: 31.3%** — among the weakest measured in this research series
- **AA Intelligence Index: 8.9%** — the fourth-lowest composite in this batch
- **AA-Omniscience: index −42.5, accuracy 23.5%, hallucination rate 86.2%** — a deeply negative index, and the **sixth-worst in this research series**
- **SimpleQA: 29.9%** (tech report) — near-floor on a factual-recall benchmark, corroborating the poor reliability
- **AA-IFBench: 40.2%** — weak instruction following
- **AIME 2025: 29.7%** (tech report) — near-floor
- **ARC-AGI, MRCR, MATH, FrontierMath, MMLU-Pro, AA-Omniscience from the vendor: no verified public score found**

Coding:

- **SWE-bench Verified: 21.4%** (tech report) — **the second-lowest SWE-bench Verified figure measured anywhere in this research series**, 63.6 points under the 85%+ terminal reference
- **LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **MMMU: 69.3%** (tech report) — the only visual row, and the model's best figure
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's mid band, and the weakest dimension alongside reasoning. **τ²-bench 29.5% [AA] is the only agentic figure in the entire evidence base and it is near-floor**, and **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 18/100.** Below the methodology's low band, and the worst measured reasoning score in this batch. **AA-HLE 4.3% is the lowest measured anywhere in this research series (35.7 points under the 40%+ reference), CritPt 0.0% ties the series-lowest, AA-GPQA Diamond 62.3% fails the 90% reference by 27.7 points, AA Intelligence Index 8.9% is the fourth-lowest composite here, AA-LCR 31.3% is among the weakest measured, and the AA-Omniscience index of −42.5 with 86.2% hallucination is the sixth-worst in this research series.** **SimpleQA 29.9% corroborates the poor factual reliability directly.** The two mitigating figures are **AA-LCR 31.3%** and **MMMU 69.3%** — weak but non-zero. Scored at 18 rather than lower because the 1M window and a decent MMMU show the substrate is present; it is simply very unreliable and very shallow.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window, and one of only two verified properties for this model. Scored at 92 rather than 95+ because **AA-LCR is 31.3%, among the weakest measured in this research series**, so the window is demonstrably among the least usable at depth of any 1M model here, and no MRCR or GraphWalks figure exists.
- **Multimodal: 68/100.** Text + image in with text out, in the methodology's 60–70 band and at its upper end on **MMMU 69.3%** — the model's best figure and a respectable multimodal result. Held at 68 rather than above because the visual suite is **one benchmark**, and CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena are unmeasured.
- **Coding: 32/100.** Below the methodology's low band, and the second-worst measured coding score in this batch. **SWE-bench Verified 21.4% is the second-lowest measured anywhere in this research series** — 63.6 points under the 85%+ terminal reference — and **LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all**, so the 74%, 70% and 55% references are unmeasured and coding rests on one near-floor row.
- **Cost efficiency: 76/100.** **No rate card is published in any source checked**, so the score rests on positioning rather than a price: the **Flash tier is Google's efficiency line**, the one directional signal available. Scored at 76, between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors. **Explicitly a positioning-based inference, not a measurement** — held below 88 because there is no free tier, no published rate, and no cache-read figure.
- **Overall Score: 49/100.** (35 + 18 + 92 + 68 + 32) / 5 = 49 → **49**. Recommendation: **an unranked 2025-era Flash with a genuinely usable evidence base and a poor profile.** Its 15 rows are more informative than most models refreshed in this session — Google's own 2.5 technical report supplies baselines and AA supplies the composites — and they agree: this model is near-floor on open-ended depth (**AA-HLE 4.3%, the lowest measured anywhere here**), repair coding (**SWE-bench Verified 21.4%**), instruction following (**AA-IFBench 40.2%**) and factual reliability (**SimpleQA 29.9%, AA-Omniscience index −42.5**). Its only assets are a **1M window**, a **decent MMMU 69.3%**, and a presumably cheap Flash rate card — all available better in Gemini 3.5 Flash (61.62), 3.7 Flash (66.49) and 3.8 Flash (66.74). **And note the queue's 77.4 is a roster artefact: BenchLM leaves this model unranked.** Migrate unless pinned to `gemini-2.0-flash`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where the report's frame is an **evidence-status finding rather than a capability level: BenchLM carries a page for `gemini-2-0-flash` with 15 source-displayable benchmark rows but no overall score** — its own text reads *"has 15 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 15 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 77.4 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1 and Grok 4.7 reports. **A provenance finding is recorded prominently: four figures — SWE-bench Verified 21.4%, MMMU 69.3%, GPQA 65.2% and AIME 2025 29.7% — are attributed to *Google DeepMind's Gemini 2.5 technical report, Table 3*, a later generation's report rather than a Gemini 2.0 model card of its own**, which is weaker provenance and is flagged at those figures — the same cross-citation pattern recorded in the Claude Opus 4.5, Claude Sonnet 4.5, Grok 4.20 and Gemma 4 31B reports. The three series-worst figures this model holds — **the lowest AA-HLE measured anywhere (4.3%), a CritPt of 0.0% tying the series-lowest, and the second-lowest SWE-bench Verified (21.4%)** — are attributed rather than presented bare, as is the **sixth-worst AA-Omniscience index in this research series (−42.5)** and the corroborating **SimpleQA 29.9%**. The published rate card is absent and its effect on the cost score is stated as a positioning-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, MATH, FrontierMath, MMLU-Pro, vendor AA-Omniscience, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, and every visual benchmark except MMMU) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemini 2.0 Flash (15 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/gemini-2-0-flash)
  - [Google DeepMind — Gemini 2.5 technical report, Table 3 (source of the SWE-bench Verified, MMMU, GPQA and AIME 2025 rows; weaker provenance)](https://arxiv.org/abs/2507.06261)
  - [Artificial Analysis — Gemini 2.0 Flash](https://artificialanalysis.ai/models/gemini-2-0-flash)
  - [Google — Gemini API: Gemini 2.0 Flash model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)
  - [Artificial Analysis — humanitys-last-exam leaderboard (source of the series-lowest 4.3%)](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — omniscience leaderboard (source of the −42.5)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)
  - [Artificial Analysis — swe-bench-verified leaderboard (source of the 21.4%)](https://artificialanalysis.ai/evaluations/swe-bench-verified)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Openrouter — Gemini 2.0 Flash benchmarks](https://openrouter.ai/google/gemini-2.0-flash/benchmarks)
  - See also: [`model/gemini-2.0-flash-lite/`](gemini-2.0-flash-lite.md) — the separately-tracked Flash-Lite sibling with no computed BenchLM score, **not** the same identity; [`model/gemini-3.5-flash/`](gemini-3.5-flash.md) (61.62), [`model/gemini-3.7-flash/`](gemini-3.7-flash.md) (66.49), [`model/gemini-3.8-flash/`](gemini-3.8-flash.md) (66.74) — the successors this report recommends migrating to
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
