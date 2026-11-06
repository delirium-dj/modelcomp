# Solar Pro 4 — findings by Step 5 Preview

- Source: Upstage (`solar-pro-4`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4. Upstage's **proprietary pro-tier** model, sibling to Solar Pro 3 (31.08) and Solar Pro 2 (30.32) and alongside the open-weight Solar Open 2 (unranked, refreshed in this same batch). **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 18 source-displayable benchmark rows with no overall score** — its own text reads *"has 18 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 69.5 is a **roster artefact, not a measured figure**.
- **Short description:** An **unranked proprietary 512K model with a strong knowledge/reasoning profile and a weak execution layer.** Its best figures are **AIME26 95.3%, GPQA-D 89.0%, AA-GPQA Diamond 89.1%, MMLU-Pro 86.3%, LiveCodeBench 87.8% and AA-LCR 71.0%** — against **Terminal-Bench 2.1 57.0%, APEX-Agents 18.7%, BrowseComp 49.2%, GDPval-AA 30.3% normalized and CritPt 6.3%**. It also carries a **Korean benchmark figure (KMMLU-Pro 79.2%)**, continuing Upstage's Korean-language specialisation.
- **Provider / access:** Upstage's own API (proprietary), and OpenRouter. **Closed weights — no self-hosting escape.**
- **Release / knowledge:** release date not restated; Solar Pro 4 is Upstage's current pro line, positioned above Solar Pro 3 (31.08) and Solar Pro 2 (30.32). **Knowledge cutoff not disclosed.**
- **IDs:** `solar-pro-4` (BenchLM canonical, repo, Openrouter); `upstage/solar-pro4` (Openrouter's slug form).
- **Context window:** **512,000 tokens** (BenchLM) — half the current 1M standard, and the largest window in the Solar line.
- **Modalities:** **text and image in; text out** (Design Arena 1,176 Elo is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Upstage's own Solar Pro 4 launch post is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis and Openrouter supplying independent rows. 18 benchmarks total.

**A provenance note is recorded: the vendor rows come from Upstage's own launch post, which is clean same-model provenance, while the independent rows (GDPval-AA, CritPt, AA-GPQA Diamond, AA-HLE, AA-SciCode) come from Artificial Analysis. But there is no cross-citation from competitor documents, which is cleaner than most of this batch.**

Agentic / tool use — **weak at execution**:

- **Terminal-Bench 2.1: 57.0%** (vendor) — 31 points under the 88%+ reference
- **MCP Atlas: 61.4%** (vendor); **BrowseComp: 49.2%** (vendor) — weak browsing
- **APEX-Agents: 18.7%** (vendor) — near-floor; **GDPval-AA: 30.3% normalized** [AA]
- **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, AA ITBench: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **genuinely strong, and the best-sourced cluster here**:

- **GPQA-D: 89.0%** (vendor) / **AA-GPQA Diamond 89.1%** [AA] — **the two agree within 0.1 points**, and both are only 0.9–1.0 points under the 90%+ frontier reference
- **MMLU-Pro: 86.3%** (vendor) — a strong exam figure
- **AA-HLE: 29.8%** [AA] — fails the 40%+ reference by 10.2 points
- **AA-LCR: 71.0%** (vendor); **CritPt: 6.3%** [AA] — near-floor
- **KMMLU-Pro: 79.2%** (vendor) — Upstage's Korean specialisation, continuing the Solar Open 2 pattern
- **AIME26: 95.3%** (vendor) — an excellent competition-maths figure
- **HLE, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, MATH, FrontierMath, HMMT: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding — **solid, with one strong figure**:

- **LiveCodeBench: 87.8%** (vendor) — the strongest coding figure
- **SWE-bench Verified: 70.6%** (vendor) — 14.4 points under the 85%+ terminal reference
- **AA-SciCode: 48.0%** [AA] — 7 points under the 55%+ reference
- **SWE-bench Pro, DeepSWE, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,176 Elo** — the only row, and a weak one
- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 48/100.** Below the methodology's mid band, and the weakest dimension. **MCP Atlas 61.4% is mid-tier, Terminal-Bench 2.1 57.0% is 31 points under the reference, BrowseComp 49.2% is weak, APEX-Agents 18.7% is near-floor and GDPval-AA is 30.3% normalized.** **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench and the AA Agentic Index have no figure at all**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 70/100.** Mid-band, and the strongest dimension. **GPQA-D 89.0% (vendor) and AA-GPQA Diamond 89.1% [AA] agree within 0.1 points — the tightest vendor-vs-independent agreement in this batch — and both are only ~1 point under the 90%+ frontier reference.** MMLU-Pro 86.3% and AIME26 95.3% corroborate. Capped by **AA-HLE 29.8% (10.2 under the 40% reference), CritPt 6.3% (near-floor), AA-LCR 71.0%, and the total absence of the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, MATH and FrontierMath** — so composite depth, reliability and three of five reasoning references are unknown.
- **Context window: 90/100.** **512,000 tokens** places it in the methodology's 500K–1M tier (85–94) — the largest window in the Solar line and half the current standard. Scored at 90, in the tier's upper-middle, because **AA-LCR is 71.0%**, which is decent long-context reasoning. Held at 90 rather than the tier ceiling because no MRCR or GraphWalks figure exists and no max-output limit is published.
- **Multimodal: 58/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **Design Arena 1,176 Elo is the only visual figure and it is weak** (the second-lowest in this batch), and **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no measurement** — so the modality claim rests on a single poor row.
- **Coding: 68/100.** Mid-band. **LiveCodeBench 87.8% is a strong competitive-programming figure and SWE-bench Verified 70.6% is solid mid-frontier repair**, with AA-SciCode 48.0% corroborating weakly. Capped by SWE-bench sitting 14.4 points under the frontier reference, **AA-SciCode 7 points under the 55%+ reference**, and the absence of SWE-bench Pro, DeepSWE, the AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary pro-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — and note it is **strictly disadvantaged on access** against its own open-weight sibling **Solar Open 2**, which carries open weights and a 1M window. Held at 60 rather than lower because no free tier is recorded but the pro tier's price is at least unverified in either direction.
- **Overall Score: 66.8/100.** (48 + 70 + 90 + 58 + 68 + 60) / 5 = 64.8 → **65**. Recommendation: **an unranked proprietary pro tier with a strong knowledge profile and a weak execution layer.** GPQA-D 89.0%/89.1%, MMLU-Pro 86.3%, AIME26 95.3%, LiveCodeBench 87.8% and a 512K window are genuinely respectable figures, and the **tightest vendor-vs-independent GPQA agreement in this batch** is a real confidence signal. **But note the queue's 69.5 is a roster artefact: BenchLM leaves this model unranked with 18 of 744 benchmarks.** Two further cautions: **its execution layer is weak** (Terminal-Bench 2.1 57.0%, APEX-Agents 18.7%, no composite agentic index), so it is a reasoner rather than an autonomous agent — the same protocol-fluency-without-execution pattern seen across the Solar line; and **it is closed-source with no self-hosting escape, unlike its own sibling Solar Open 2** which carries open weights and a larger 1M window. Prefer Solar Open 2 unless the 512K window and pro-tier reliability are decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `solar-pro-4` with 18 source-displayable benchmark rows but no overall score** — its own text reads *"has 18 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 18 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 69.5 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1, MAI-Code-1.1-Flash, Hy4, GLM-5.2, Nemotron 3 Ultra Free, Nemotron 3 Nano Omni, Hy3, LongCat 2.0, Qwen 3.7 Flash, Solar Open 2 and DiffusionGemma reports. **A provenance note is recorded: the vendor rows come from Upstage's own launch post (clean same-model provenance) and the independent rows from Artificial Analysis, with no cross-citation from competitor documents** — cleaner than most of this batch. **The tightest vendor-vs-independent agreement in this batch (GPQA-D 89.0% vendor / AA-GPQA Diamond 89.1%, a 0.1-point gap) is recorded as a confidence signal** rather than presented bare. The **Korean KMMLU-Pro 79.2%** figure is attributed as continuing Upstage's Korean-language specialisation established in the Solar Open 2 report. The near-floor **CritPt (6.3%)** and **APEX-Agents (18.7%)** are attributed rather than glossed. The unpublished rate card is surfaced with the closed-source no-self-hosting constraint recorded as a genuine disadvantage against the open-weight sibling. Missing benchmarks (Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, AA ITBench, HLE, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, MATH, FrontierMath, HMMT, SWE-bench Pro, DeepSWE, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage — Solar Pro 4 launch post (primary source; source of the vendor rows)](https://www.upstage.ai/blog/en/solar-pro-4)
  - [BenchLM — Solar Pro 4 (18 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/solar-pro-4)
  - [Artificial Analysis — Solar Pro 4](https://artificialanalysis.ai/models/solar-pro4)
  - [Artificial Analysis — gpqa-diamond leaderboard (source of the 89.1%)](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Openrouter — Solar Pro 4 benchmarks](https://openrouter.ai/upstage/solar-pro4/benchmarks)
  - See also: [`model/solar-open-2/`](solar-open-2.md) — the open-weight sibling this report recommends preferring, refreshed in this same batch; [`model/solar-pro-3/`](solar-pro-3.md) (31.08) and [`model/solar-pro-2/`](solar-pro-2.md) (30.32) — the previous pro generations
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
