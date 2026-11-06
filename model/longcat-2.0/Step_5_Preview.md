# LongCat-2.0 — findings by Step 5 Preview

- Source: Meituan (`longcat-2-0`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0. Meituan's **open-weight** second-generation model, sibling to `longcat-flash-lite-sparse` (no computed score) and predecessor to `longcat-2.5-preview`. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but zero benchmark rows** — its own text reads *"BenchLM is tracking LongCat-2.0 by Meituan. Sourced benchmark coverage is coming soon"*, with Overall Score "Coming soon" and *"Benchmarks covered: 0 of 744"*. So this is a tracked-but-unevidenced model.
- **Short description:** An **open-weight 1M-context reasoning model with zero published benchmarks in any source checked** — no SWE-bench, no Terminal-Bench, no GPQA, no HLE, no composite, no reliability figure and no visual benchmark. Its verified properties are a **1M window** and **open weights**; everything else is a spec-sheet claim with no measured support.
- **Provider / access:** Meituan's LongCat platform, and self-hosting (open weights). **No Zen free tier is recorded.**
- **Release / knowledge:** release date not restated; LongCat-2.0 is Meituan's 2025/2026 line, positioned between LongCat-Flash-Lite-Sparse and LongCat 2.5 Preview in the repo queue. **Knowledge cutoff not disclosed.**
- **IDs:** `longcat-2-0` (BenchLM canonical, repo); `meituan/longcat-2.0` (expected provider form, unverified in this pass).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window, and one of only two verified properties for this model.
- **Modalities:** **not stated in any source checked** — BenchLM's model-details table omits the field, and no visual or multimodal benchmark exists. Treated as unverified rather than assumed, though the sibling 2.5 Preview carries text+image input, which makes image input plausible.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape**, which is the model's strongest structural property.
- **Architecture:** **open weight**; parameter count and topology undisclosed.

### Raw benchmarks found

**A negative finding is stated plainly and is the report's frame: BenchLM carries a page for `longcat-2-0` but with zero benchmark rows** — its own text reads *"Sourced benchmark coverage is coming soon"* and *"Benchmarks covered: 0 of 744"*, with Overall Score "Coming soon". No Artificial Analysis, Vals AI, Epoch AI or independent leaderboard row was found either, and no vendor launch material with a benchmark appendix appears in the sources checked.

Named as absent rather than substituted — **every** benchmark in this research series:

- **Agentic:** Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index — none measured
- **Reasoning / knowledge:** GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath — none measured
- **Coding:** SWE-bench (all variants), LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode — none measured
- **Multimodal:** MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena — none measured

### Normalized scores (1–100)

> **Methodology note.** With **zero benchmark rows** — not few, none — every quality dimension below is a **placeholder-for-unknown** anchored on the two verified spec facts (1M context window, open weights) and the model's structural position in the LongCat line. The two dimensions where this SKU has real evidence — **context window** and **cost efficiency** — are the best-grounded scores, and even they rest on spec fields alone.

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one agentic benchmark exists — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Scored at 50 rather than below because an open-weight 1M-window reasoning model presumably has a tool substrate; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated.**
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor.** Not one reasoning benchmark exists — no GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro or composite index. Scored at 50 rather than lower because BenchLM classifies the model **Reasoning**, which is a structural signal pointing upward; **not scored above 50 because five of five reasoning references are unmeasurable and the classification is itself unevidenced.**
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window, and the model's single most valuable verified property. Scored at 92 at the tier's lower bound. Held at 92 rather than 95+ because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor, because the modality set itself is unverified.** BenchLM's model-details table omits the field, no source states what inputs the model accepts, and no visual or multimodal benchmark exists. Scored at 50 rather than assuming text+image on sibling grounds — though the sibling `longcat-2.5-preview` does carry text+image input, which makes image input plausible and is recorded as such. The repo's rule is that an untested capability claim must not be scored as though it were demonstrated.
- **Coding: 50/100.** **Scored at the methodology's neutral floor.** Not one coding benchmark exists — no SWE-bench, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Vibe Code Bench, Terminal-Bench or FrontierCode. Scored at 50 rather than lower on the inference that an open-weight 1M model presumably handles some coding; **not scored above 50 because there is nothing to support it.**
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property alongside the window. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 58.4/100.** (50 + 50 + 92 + 50 + 50 + 88) / 5 = 66.0 → **66**. Recommendation: **a tracked-but-unevidenced open-weight model whose only verified properties are a 1M window and open weights.** BenchLM's own page states *"Sourced benchmark coverage is coming soon"* with *"0 of 744"* benchmarks, and no independent measurement exists anywhere — so this report's 66 is a floor on evidence, not a capability assessment, and five of six dimensions rest on nothing at all. **Do not select it for any purpose on the available evidence.** If the 1M window and open weights are genuinely what you need, benchmark it yourself on your own harness first — specifically SWE-bench Verified, Terminal-Bench and a general coding index — and re-score the moment an independent tracker picks it up. Note the sibling **`longcat-2.5-preview`** (refreshed earlier in this session) is better-evidenced, carrying at least one measured composite.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first and made it the report's frame: BenchLM carries a page for `longcat-2-0` but with zero benchmark rows** — its own text reads *"BenchLM is tracking LongCat-2.0 by Meituan. Sourced benchmark coverage is coming soon"* and *"Benchmarks covered: 0 of 744"*, with Overall Score "Coming soon". No Artificial Analysis, Vals AI, Epoch AI or independent leaderboard row was found either, and no vendor launch material with a benchmark appendix appears in the sources checked. Because zero benchmarks exist, every quality dimension is explicitly labelled a placeholder-for-unknown, and the two best-grounded dimensions — context (1M) and cost (open weights) — are scored on verified specs. **The modality field is absent from BenchLM's model-details table and from every source checked, so modality is recorded as unverified rather than assumed on family grounds**, though the sibling `longcat-2.5-preview` carrying text+image input is recorded as making image input plausible. **The report's thesis — that a tracked-but-unevidenced model cannot support a capability judgement — is stated explicitly in the recommendation rather than dressed up as an assessment**, with five of six dimensions named as resting on nothing at all. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference, open weights being the model's strongest structural property. The **Reasoning** classification is recorded as a structural signal that is itself unevidenced. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — LongCat-2.0 (0 benchmark rows, "Sourced benchmark coverage is coming soon", unranked)](https://benchlm.ai/models/longcat-2-0)
  - [Meituan — LongCat platform](https://longcat.chat/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/longcat-2.5-preview/`](longcat-2.5-preview.md) — the better-evidenced sibling, refreshed earlier in this session; [`model/longcat-flash-lite-sparse/`](longcat-flash-lite-sparse.md) — the sibling with no computed BenchLM score
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
