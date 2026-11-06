# MAI-Code-1.1-Flash — findings by Step 5 Preview

- Source: Microsoft (`microsoft.ai/MAI-Code-1.1-Flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash. Microsoft's **code-specialised Flash** tier in the MAI-Code family. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 3 source-displayable benchmark rows with no overall score** — its own text reads *"has 3 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 73.8 is a **roster artefact, not a measured figure** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash and Grok Build 0.1 reports.
- **Short description:** A **3-row unranked code SKU with an unusually clean provenance story**: all three rows come from **Microsoft's own model card** (a vendor source), and they are respectable for a Flash tier — **SWE-bench Verified 72.6% and Terminal-Bench 2.1 62.9%** — but the evidence base is far too thin to support a capability judgement, and there is **no independent measurement of any kind**.
- **Provider / access:** Microsoft AI's own platform, and OpenCode Zen. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; MAI-Code-1.1-Flash is Microsoft's 2026 code-Flash line, sibling to MAI-Thinking-1 (53.0). **Knowledge cutoff not disclosed.**
- **IDs:** `mai-code-1.1-flash` (BenchLM canonical, Zen); `microsoft.ai/MAI-Code-1.1-Flash` (official model card).
- **Context window:** **256,000 tokens** (BenchLM) — a quarter of the current 1M standard, and one of only two verified properties for this model.
- **Modalities:** **text in; text out** — code SKUs in this family are text-focused; no visual or multimodal benchmark exists.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed. The "Flash" tier implies a cost/throughput-optimised build.

### Raw benchmarks found

**A provenance note is recorded prominently: all three of this model's rows are attributed to Microsoft's own MAI-Code-1.1-Flash model card** — a vendor source, and a same-model card, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across ten other models in this series. But it also means **there is no independent measurement of any kind**, which is the report's central limitation. Three benchmarks total — the joint-thinnest evidence base in this research series, alongside Grok 4.1's zero-with-one-row.

Specific to this model (all vendor-sourced):

- **SWE-bench Verified: 72.6%** (Microsoft model card) — 12.4 points under the 85%+ terminal reference
- **Terminal-Bench 2.1: 62.9%** (Microsoft model card) — 25.1 points under the 88%+ reference

Named as absent rather than substituted:

- **Agentic:** Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index — none measured
- **Reasoning:** GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath — none measured
- **Coding beyond the two rows:** SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode — none measured
- **Multimodal:** every visual and document benchmark — none measured

### Normalized scores (1–100)

> **Methodology note.** With three benchmark rows, all vendor-sourced and none independently corroborated, every quality dimension below is a placeholder-for-unknown anchored on those three figures and the single verified structural property (256K window). The two dimensions where this SKU has real evidence — **coding** and, partially, **context** — are the best-grounded scores in this report. Confidence intervals are the joint-widest in this research series.

- **Tool use: 55/100.** Anchored at the mid band as a placeholder, with one real figure: **Terminal-Bench 2.1 62.9%** (vendor) — a mid-tier terminal result, 25.1 points under the reference. Held at 55 rather than higher because it is the *only* agentic row, it is vendor-sourced with no independent corroboration, and **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one reasoning or knowledge benchmark exists — no GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro or FrontierMath. Scored at 50 rather than lower because a code-specialised model with SWE-bench Verified 72.6% must reason adequately to achieve that; **not scored above 50 because five of five reasoning references are unmeasured and an unmeasured capability claim must not be scored as though it were demonstrated.**
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 — the model's most valuable verified property, and a full quarter of the current standard. Held at the band's ceiling rather than the ≥1M tier because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor, because the modality set itself is unverified.** BenchLM's model-details table omits the field, no source states what inputs the model accepts, and no visual or multimodal benchmark exists. Scored at 50 rather than assuming text-only on family grounds — the repo's rule is that an untested capability claim must not be scored as though it were demonstrated, and here even the *claim* is absent, though the code-SKU positioning makes text-only the likely case.
- **Coding: 70/100.** Mid-band and the best-grounded quality dimension, anchored on two real figures: **SWE-bench Verified 72.6%** (solid mid-frontier repair, 12.4 points under the 85%+ terminal reference) and **Terminal-Bench 2.1 62.9%** (mid-tier terminal work). Capped by both falling short of their references, by the **total absence of SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode**, and by the fact that both figures are vendor-sourced with no independent corroboration.
- **Cost efficiency: 76/100.** **No rate card is published in any source checked** — BenchLM's row carries no pricing block at all, which is weaker evidence than a missing price field on a page that otherwise has one. Scored at 76, above the ~$3/$15 (≈60) anchor, on the inference that a **Flash**-tier code SKU sits meaningfully below the flagship MAI tiers. **Explicitly a positioning-based inference, not a measurement** — held below 88 because there is no free tier, no published rate, no cache-read figure, and the model is **closed-source with no self-hosting escape**.
- **Overall Score: 62/100.** (55 + 50 + 85 + 50 + 70) / 5 = 62 → **62**. Recommendation: **a 3-row unranked code SKU whose evidence base cannot support a capability judgement.** SWE-bench Verified 72.6% and Terminal-Bench 2.1 62.9% are respectable for a Flash tier, and the 256K window is a genuine asset — **but note the queue's 73.8 is a roster artefact: BenchLM leaves this model unranked with 3 of 744 benchmarks, and all three rows are vendor-sourced with no independent corroboration.** Benchmark it yourself on your own harness — specifically Vals AA runs for SWE-bench and Terminal-Bench, plus any independent coding index — before relying on it. Note also that **sibling MAI-Thinking-1 (53.0 on BenchLM)** is better-evidenced, and **GPT-5.3 Codex (62.92, refreshed earlier this session)** carries SWE-bench Verified 85% and OSWorld-Verified 64.7% from its own system card.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding rather than a capability level: BenchLM carries a page for `mai-code-1-1-flash` with 3 source-displayable benchmark rows but no overall score** — its own text reads *"has 3 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 3 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 73.8 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash and Grok Build 0.1 reports. **A provenance finding is recorded and cuts both ways: all three rows are attributed to Microsoft's own model card — a same-model card, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across ten models in this series, but which also means there is no independent measurement of any kind.** That is the report's central limitation and is stated explicitly. The joint-thinnest evidence base in this research series (3 rows, alongside Grok 4.1's zero-with-one-row) is stated plainly rather than hedged, and the report's thesis — that 3 vendor-sourced rows cannot support a capability judgement — is stated in the recommendation rather than dressed up as an assessment. The **12.4-point SWE-bench shortfall** and the **25.1-point Terminal-Bench shortfall** are attributed rather than presented bare. The **modality field is absent from BenchLM's model-details table and from every source checked, so modality is recorded as unverified rather than assumed on family grounds.** The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based inference, and the closed-source access is recorded as a genuine disadvantage. Missing benchmarks (Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, and every visual and document benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Microsoft AI — MAI-Code-1.1-Flash model card (primary source for all three rows)](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)
  - [BenchLM — MAI-Code-1.1-Flash (3 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/mai-code-1-1-flash)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/mai-thinking-1/`](mai-thinking-1.md) (53.0) — the better-evidenced sibling; [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.92) — the better-evidenced Codex this report names as the alternative, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
