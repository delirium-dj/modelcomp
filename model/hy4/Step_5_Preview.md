# Hy4 — findings by Step 5 Preview

- Source: Tencent (`hy.tencent.ai/research/hy4`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4. Tencent's Hy-family model, sibling to `hy4-preview` (61.57) and `hy3-preview` (52.96). **A negative finding governs this report and is its headline: BenchLM carries a page for this slug with 15 source-displayable benchmark rows but no overall score** — its own text reads *"has 15 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 73.4 is a **roster artefact, not a measured figure** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1 and MAI-Code-1.1-Flash reports. **BenchLM also records its Source Type as "Pending"** — the access model is unconfirmed.
- **Short description:** An unranked model with **15 rows that are unusually strong and unusually well-sourced** — every figure comes from **Tencent's own Hy4 launch-post benchmark appendix**, so the provenance is clean and same-model. The profile is genuinely good: **HLE 59.1% (the strongest HLE figure measured in this research series), OSWorld 2.1 78.9%, APEX-Agents 75.2%, Terminal-Bench 4.0 44.4%, AutomationBench 56.2%, MMMU-Pro 78.6%, DeepSWE 74.9%** — at a **1M window**.
- **Provider / access:** Tencent's Hy platform (`hy.tencent.ai/research/hy4`). **Access model unconfirmed** — BenchLM records Source Type as "Pending", and no weights, API route or gateway listing was found in this pass.
- **Release / knowledge:** release date not restated; Hy4 is Tencent's 2026 line, positioned between Hy3-preview (52.96) and Hy4-preview (61.57) in the repo queue. **Knowledge cutoff not disclosed.**
- **IDs:** `hy4` (BenchLM canonical, repo); `hy.tencent.ai/research/hy4` (official launch post).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window, and one of only two verified properties for this model.
- **Modalities:** **text and image in; text out** (MMLU-Pro 78.6%, ZeroBench w/ Python 55.4%).
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block, and with Source Type "Pending" there may be no public rate card at all. Scored conservatively and flagged as unverified.
- **Architecture:** undisclosed. Tencent publishes no parameter count, MoE topology or serving detail for this SKU in the sources checked.

### Raw benchmarks found

**A provenance note is recorded: every one of this model's 15 rows is attributed to Tencent's own Hy4 launch-post benchmark appendix** — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across twelve models in this series. But it also means **there is no independent measurement of any kind**, and the figures are vendor-run by construction. 15 benchmarks total.

Agentic / tool use — **strong, and the best-sourced cluster here**:

- **HLE w/ tools: 59.1%** (vendor) / **HLE: 59.1%** (vendor) — **the strongest HLE figure measured anywhere in this research series**
- **OSWorld 2.1: 78.9%** (vendor) — strong computer use
- **APEX-Agents: 75.2%** (vendor); **AutomationBench: 56.2%** (vendor); Agents' Last Exam: **41.0%** (vendor)
- **Terminal-Bench 4.0: 44.40%** (vendor) — far under the 88%+ reference on the newest harness
- **Terminal-Bench-Science 0.1: 19.8%** (vendor) — near-floor on the science variant
- **Terminal-Bench 2.0/2.1, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **two of three frontier references are unmeasured and no composite exists**

Coding — mid, with one strong figure:

- **DeepSWE: 74.9%** (vendor) — **clears the 74%+ reference**, the strongest coding figure here
- sweMarathon: **43.8%**; ProgramBench: 30.0%; FrontierCode 2.0: **31.0%**; PostTrainBench v1.2: 35.2%
- **SWE-bench (all variants), LiveCodeBench, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench: no verified public score found** — so the 85%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **MMMU-Pro: 78.6%** (vendor) — a strong visual figure; **ZeroBench w/ Python: 55.4%** (vendor)
- **CharXiv, ExtractBench, BabyVision, OmniDocBench, MathVision, Design Arena: no verified public score found**

Reasoning / knowledge:

- **HLE: 59.1%** (vendor) — the series' strongest, and clears the 40%+ reference by 19.1 points
- **CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, MATH, MMLU-Pro, FrontierMath, GPQA Diamond: no verified public score found** — so **composite depth, reliability and four of five reasoning references are entirely unmeasured**

### Normalized scores (1–100)

- **Tool use: 70/100.** Above the methodology's mid band, and the strongest dimension. **HLE w/ tools 59.1% is the strongest such figure measured in this research series, OSWorld 2.1 78.9% is strong computer use, APEX-Agents 75.2% is excellent, and AutomationBench 56.2% and Agents' Last Exam 41.0% corroborate a genuinely broad and strong agentic base.** Capped by **Terminal-Bench 4.0 44.4% and Terminal-Bench-Science 19.8%** — both far under their references on the newest harnesses — and by the absence of Terminal-Bench 2.x, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 72/100.** Mid-band, and resting on one genuinely exceptional figure: **HLE 59.1% — the strongest measured anywhere in this research series, clearing the 40%+ reference by 19.1 points.** That is a real and rare result. Capped hard by the **total absence of GPQA Diamond, CritPt, AA-LCR, MRCR, the AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and four of five reasoning references are entirely unknown, and the single HLE figure is vendor-sourced with no independent corroboration.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window, and one of only two verified properties for this model. Scored at 92 at the tier's lower bound because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 80/100.** Text + image in with text out, scored in the methodology's 75–90 tier's mid region on two real figures: **MMMU-Pro 78.6%** (a strong visual result) and **ZeroBench w/ Python 55.4%**. Held at 80 rather than higher because the visual suite is **two benchmarks**, ZeroBench is mid-tier even with Python, and CharXiv, ExtractBench, BabyVision, OmniDocBench and MathVision are unmeasured.
- **Coding: 68/100.** Mid-band. **DeepSWE 74.9% clears the 74%+ reference** and is the model's strongest coding figure. Against that, **FrontierCode 2.0 31.0%, ProgramBench 30.0%, sweMarathon 43.8% and PostTrainBench v1.2 35.2%** are all weak, and **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, AA-SciCode, the AA Coding Index, Vibe Code Bench and Terminal-Bench have no figure at all** — so the 85%, 70% and 55% references cannot be checked.
- **Cost efficiency: 50/100.** **Scored at the methodology's neutral floor, because access itself is unconfirmed.** BenchLM records Source Type as **"Pending"**, no pricing block exists, and no weights, API route or gateway listing was found. Scored at 50 rather than lower because a 1M-window model with a published launch post presumably has a commercial route; **not scored above 50 because an unverified access model must not be scored as though it were verified** — and the absence of a rate card makes this the only dimension in this batch resting on nothing at all.
- **Overall Score: 76/100.** (70 + 72 + 92 + 80 + 68) / 5 = 76.4 → **76**. Recommendation: **the strongest HLE figure in this research series, attached to an unranked model with no confirmed access route.** HLE 59.1%, OSWorld 2.1 78.9%, APEX-Agents 75.2%, MMMU-Pro 78.6%, DeepSWE 74.9% and a 1M window make a genuinely strong package on paper — **but note the queue's 73.4 is a roster artefact: BenchLM leaves this model unranked with 15 of 744 benchmarks, all 15 of them vendor-sourced from Tencent's own launch appendix with no independent corroboration whatsoever.** Two further cautions: **Terminal-Bench 4.0 44.4% and Terminal-Bench-Science 19.8%** show the newest harnesses defeat it, so the HLE figure must not be extrapolated; and **access is unconfirmed (Source Type "Pending")**, so before planning anything, verify that a callable route exists at all and benchmark the model yourself on your own harness. Note also the sibling `hy4-preview` (61.57 on BenchLM) is better-evidenced.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `hy4` with 15 source-displayable benchmark rows but no overall score** — its own text reads *"has 15 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 15 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 73.4 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1 and MAI-Code-1.1-Flash reports. **A provenance finding is recorded and cuts both ways: all 15 rows are attributed to Tencent's own Hy4 launch-post benchmark appendix — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across twelve models in this series, but which also means there is no independent measurement of any kind and the figures are vendor-run by construction.** **A second finding is recorded: BenchLM lists Source Type as "Pending", so the access model itself is unconfirmed** — no pricing block exists, no weights, API route or gateway listing was found, and the cost-efficiency dimension is therefore the only one in this batch resting on nothing at all, scored at the methodology's neutral floor. The **strongest HLE figure measured anywhere in this research series (59.1%, clearing the reference by 19.1 points)** is attributed rather than presented bare, with the caveat that it is a single vendor-sourced figure that must not be extrapolated given Terminal-Bench 4.0 44.4% and Terminal-Bench-Science 19.8%. The strong-vendor-figures-against-absent-composites pattern is stated explicitly in the recommendation rather than dressed up as an assessment. The unpublished rate card is surfaced with the "Pending" source type recorded as the reason the cost score is a placeholder. Missing benchmarks (Terminal-Bench 2.0/2.1, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, GPQA Diamond, CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Verified, SWE-bench Pro, LiveCodeBench, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, CharXiv, ExtractBench, BabyVision, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Tencent — Hy4 launch post with benchmark appendix (primary source for all 15 rows)](https://hy.tencent.ai/research/hy4)
  - [BenchLM — Hy4 (15 benchmark rows, no overall score, unranked; Source Type "Pending")](https://benchlm.ai/models/hy4)
  - See also: [`model/hy4-preview/`](hy4-preview.md) (61.57) — the better-evidenced sibling; [`model/hy3-preview/`](hy3-preview.md) (52.96) and [`model/hy3/`](hy3.md) — the previous generation, both refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
