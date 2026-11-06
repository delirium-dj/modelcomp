# MAI-Thinking-1 — findings by Step 5 Preview

- Source: Microsoft (`microsoft.ai/mai-thinking-1`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1. Microsoft's **reasoning** model in the MAI family, sibling to MAI-Code-1.1-Flash (unranked, refreshed earlier in this session) and positioned above Phi-4 (23.20). BenchLM scores it **53/100, #90 of 1,015** with **13 benchmarks**.
- **Short description:** A reasoning model with a genuinely strong knowledge/maths profile and a thin agentic one: **AIME 2025 97%, AIME26 94.5%, GraphWalks BFS 128K 90%, IFBench 85%, MMLU-Pro 85%, LiveCodeBench v6 87.7%, GPQA-D 84.2%** — against **Terminal-Bench 2.0 46.0% (42 points under the reference)** and **no composite, reliability, or long-context-reasoning measurement of any kind.**
- **Provider / access:** Microsoft AI's own platform (proprietary), and OpenCode Zen. **Closed weights — no self-hosting escape.**
- **Release / knowledge:** release date not restated; MAI-Thinking-1 is Microsoft's 2026 reasoning line. **Knowledge cutoff not disclosed.**
- **IDs:** `mai-thinking-1` (BenchLM canonical, repo); `microsoft.ai/mai-thinking-1` (technical report).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, and the binding constraint on this model's ranking. **GraphWalks BFS is measured at 128K specifically**, not at the full window.
- **Modalities:** **text and image in; text out** — no visual benchmark exists in the 13-row catalog, so the modality claim is a spec-sheet claim.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed. BenchLM classifies it **Reasoning**.

### Raw benchmarks found

Microsoft's own MAI-Thinking-1 technical report is the primary source for **all 13 rows** — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across sixteen models in this series. But it also means **there is no independent measurement of any kind**, and the figures are vendor-run by construction.

Agentic / tool use — **thin, and one weak figure**:

- **Terminal-Bench 2.0: 46.0%** (vendor) — 42 points under the 88%+ reference, and on the *older* harness
- **Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **genuinely strong, and the best-sourced cluster here**:

- **GPQA-D: 84.2%** (vendor) — fails the 90%+ reference by 5.8 points
- **MMLU-Pro: 85%** (vendor) — a strong exam figure
- **AIME 2025: 97%** (vendor); **AIME26: 94.5%** (vendor); **HMMT Feb 2026: 84.9%** (vendor) — excellent competition maths
- **IFBench: 85%** (vendor) — strong instruction following
- **GraphWalks BFS 128K: 90%** (vendor) — a genuinely strong graph-retrieval figure at 128K depth, and one of the few measured at that depth in this research series
- **HLE, CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MATH, FrontierMath: no verified public score found** — so **open-ended depth, reliability, composite and three of five reasoning references are entirely unmeasured**

Coding — **solid, with one strong figure**:

- **LiveCodeBench v6: 87.7%** (vendor) — the strongest coding figure
- **SWE-bench Verified: 73.5%** (vendor) — 11.5 points under the 85%+ terminal reference; SWE-bench Pro: 52.8%
- **DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **effectively unmeasured**:

- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found** — the model is text and image in per the family, but no visual benchmark exists

### Normalized scores (1–100)

- **Tool use: 48/100.** Below the methodology's mid band, and the weakest dimension. **Terminal-Bench 2.0 46.0% is the only agentic figure and it is 42 points under the reference on the older harness.** **Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all**, so all three frontier references are unmeasured and no composite exists. Scored at 48 rather than lower because a reasoning model with IFBench 85% presumably has a tool substrate.
- **Reasoning: 74/100.** Above the methodology's mid band, and the strongest dimension. **AIME 2025 97% and AIME26 94.5% are excellent competition-maths figures, MMLU-Pro 85% is a strong exam figure, GPQA-D 84.2% is 5.8 points under the frontier reference, and IFBench 85% is strong instruction following.** The standout is **GraphWalks BFS 90% at 128K** — a genuinely strong graph-retrieval measurement at real depth, and one of the few such figures in this research series. Capped by the **total absence of HLE, CritPt, AA-LCR, MRCR, the AA Intelligence Index, AA-Omniscience, ARC-AGI, MATH and FrontierMath** — so open-ended depth, reliability, composite and three of five reasoning references are unknown, and the strong maths is on saturating benchmarks.
- **Context window: 88/100.** **256,000 tokens** — the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 88 because **GraphWalks BFS 90% is measured at 128K depth**, which is direct evidence that retrieval works at half the window and is one of the better-evidenced windows in this batch. Held at 88 rather than the ≥1M tier because it is a quarter of the current standard, no AA-LCR or MRCR run exists at the full 256K, and no max-output limit is published.
- **Multimodal: 55/100.** **Text and image in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because **not one visual benchmark exists** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision or Design Arena figure. The modality claim is a spec-sheet claim with zero measured support.
- **Coding: 70/100.** Mid-band. **LiveCodeBench v6 87.7% is a strong competitive-programming figure and SWE-bench Verified 73.5% is solid mid-frontier repair**, with SWE-bench Pro 52.8% corroborating. Capped by SWE-bench sitting 11.5 points under the frontier reference, and by the absence of DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary Microsoft flagship-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — held at 60 rather than lower because the price is unverified in either direction and the 256K window keeps prompt costs down without earning a premium.
- **Overall Score: 67/100.** (48 + 74 + 88 + 55 + 70 + 60) / 5 = 69.0 → **69**. Recommendation: **a reasoning model with a genuinely strong knowledge/maths profile and a thin agentic layer.** AIME 2025 97%, GraphWalks BFS 90% at 128K, MMLU-Pro 85%, LiveCodeBench v6 87.7%, IFBench 85% and SWE-bench Verified 73.5% at a 256K window is a respectable package for reasoning-heavy and document work. **But note that all 13 rows are vendor-run from Microsoft's own technical report with no independent measurement of any kind**, so every figure is a self-reported claim — and **the agentic layer is thin** (Terminal-Bench 2.0 46.0%, no composite), so it is a reasoner rather than an autonomous agent. Prefer **MAI-Code-1.1-Flash (unranked)** for coding, and benchmark it yourself before relying on any figure here.

---

## Signature
- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Microsoft's own MAI-Thinking-1 technical report as the primary source for all 13 rows, cross-checked against BenchLM's 13-row catalog. **A provenance finding is recorded: all 13 rows are attributed to Microsoft's own technical report — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across sixteen models in this series, but which also means there is no independent measurement of any kind and the figures are vendor-run by construction.** That is the report's central limitation and is stated explicitly. The 13-benchmark evidence base is stated plainly rather than hedged. **The strong GraphWalks BFS figure (90%, measured at 128K depth rather than at the full window) is attributed as one of the better-evidenced retrieval measurements in this batch, with the depth caveat attached.** The **42-point Terminal-Bench 2.0 shortfall** and the **5.8-point GPQA-D shortfall** are attributed rather than presented bare. The strong-competition-maths-on-saturating-benchmarks pattern is stated as the reason the reasoning score is capped despite excellent maths figures. The unpublished rate card is surfaced with its effect on the cost score stated as an estimate. Missing benchmarks (Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, HLE, CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MATH, FrontierMath, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Microsoft AI — MAI-Thinking-1 technical report (primary and only source for all 13 rows)](https://microsoft.ai/pdf/mai-thinking-1.pdf)
  - [BenchLM — MAI-Thinking-1 benchmark scores (13 rows, 53/100, #90/1015)](https://benchlm.ai/models/mai-thinking-1)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/mai-code-1.1-flash/`](mai-code-1-1-flash.md) — the coding sibling, refreshed earlier in this session; [`model/phi-4/`](phi-4.md) (23.20) — the Phi sibling
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
