# MiniMax M2.5 — findings by Step 5 Preview

- Source: MiniMax (`minimax-m2-5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5. MiniMax's M2.5-generation base model, sibling to MiniMax M3.1 Flash (60.25), M3 (49.30), M2.7 (47.84) and M1 80k (27.47), scoring **49.62/100, #101 of 1,015** with **1 benchmark** — **the joint-thinnest evidence base in this research series, alongside Grok 4.1**. BenchLM classifies it **Non-Reasoning** — the nineteenth such model in this corpus.
- **Short description:** An essentially unevidenced model: **one benchmark row exists** (Vibe Code Bench 14.85%, near-floor), a **128K window** (the smallest in the MiniMax line and one-eighth of the current standard), and nothing else — no composite, no reasoning figure, no agentic figure, no multimodal figure, no pricing and no architecture disclosure. It is a compatibility model with a single measured data point.
- **Provider / access:** MiniMax's own API (proprietary), and OpenCode Zen. **Closed weights — no self-hosting escape.**
- **Release / knowledge:** release date not restated; M2.5 is MiniMax's mid-2026 line, positioned between M2.7 (47.84) and M3 (49.30). **Knowledge cutoff not disclosed.**
- **IDs:** `minimax-m2-5` (BenchLM canonical, repo).
- **Context window:** **128,000 tokens** — **the smallest window in the MiniMax line** and one-eighth of the current 1M standard, and the binding constraint on this model's ranking.
- **Modalities:** **not stated in any source checked** — BenchLM's model-details table omits the field, and no visual or multimodal benchmark exists. Treated as unverified rather than assumed.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed. BenchLM classifies it **Non-Reasoning**.

### Raw benchmarks found

**A provenance note is recorded: the single row is attributed to Vals AI's Vibe Code Bench v1.1** — an independent source, so the one measurement is independently made rather than vendor-run. But one row cannot establish a level, and the benchmark measures a narrow slice (vibe coding).

Coding — **the only measured dimension**:

- **Vibe Code Bench: 14.85%** [Vals] — near-floor, and 40.15 points under the 55%+ reference

Named as absent rather than substituted — **every other benchmark in this research series**:

- **Agentic:** Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index — none measured
- **Reasoning / knowledge:** GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath — none measured
- **Coding beyond the one row:** SWE-bench (all variants), LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench, FrontierCode — none measured
- **Multimodal:** MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena — none measured

### Normalized scores (1–100)

> **Methodology note.** With **one benchmark row** — and it a near-floor coding figure — every quality dimension below is a **placeholder-for-unknown** anchored on the single verified spec (128K context window) and the structural position of a MiniMax M2.x SKU. This is the joint-weakest evidential basis of any report in this research series, alongside Grok 4.1, and it is scored as such. Confidence intervals are the joint-widest here.

- **Tool use: 45/100.** Below the methodology's mid band, and the weakest dimension. **Not one agentic benchmark exists** — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Scored at 45 rather than the placeholder floor of 50 because the one measured row that does exist (**Vibe Code Bench 14.85%**) is a coding-shaped result pointing downward, and because a proprietary API SKU presumably has a tool substrate that is simply unmeasured. Held at 45 rather than lower because one near-floor row cannot establish a level.
- **Reasoning: 45/100.** Below the methodology's mid band, and resting on nothing. **Not one reasoning benchmark exists** — no GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro or FrontierMath. Scored at 45 rather than the floor of 50 because BenchLM's **Non-Reasoning** classification is the one structural signal and it points downward, and because the M2.5 generation sits *below* both M2.7 (47.84) and M3 (49.30) on BenchLM, so the generational trend is downward at this point in the line.
- **Context window: 78/100.** **128,000 tokens** — the methodology's 128K tier boundary, scored at 78 above the 200K floor on the strength of the window being the model's only verified property. Held at 78 rather than the 200K–500K band because 128K is below the band's floor and one-eighth of the current standard, and because **no AA-LCR or MRCR figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor, because the modality set itself is unverified.** BenchLM's model-details table omits the field, no source states what inputs the model accepts, and no visual or multimodal benchmark exists. Scored at 50 rather than assuming text-only or text+image on family grounds — the repo's rule is that an untested capability claim must not be scored as though it were demonstrated, and here even the *claim* is absent.
- **Coding: 40/100.** Below the methodology's mid band, and the only dimension with any evidence. **Vibe Code Bench 14.85% is near-floor and 40.15 points under the 55%+ reference**, and it is the single row in the entire evidence base. **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench and FrontierCode have no figure at all**, so the 85%, 74%, 70% and 55% references cannot be checked. Scored at 40 rather than the floor because Vibe Code Bench measures a narrow slice (greenfield vibe coding) and repair-coding ability is unknown.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary MiniMax API SKU with unverified pricing. **Explicitly an estimate, not a measurement** — held at 60 rather than lower because the price is unverified in either direction and the M2.x line is historically priced in the mid range, which is the one directional signal.
- **Overall Score: 52/100.** (45 + 45 + 78 + 50 + 40) / 5 = 51.6 → **52**. Recommendation: **a model with one near-floor benchmark and no other evidence — do not select it for any purpose.** Vibe Code Bench 14.85% is the only measured figure and it is poor; everything else is absent, including the modality set and the rate card. It is dominated on every axis by its own siblings **MiniMax M2.7 (47.84)**, **M3 (49.30)** and especially **M3.1 Flash (60.25)**, all of which are better-evidenced. If you specifically need M2.5, benchmark it yourself on your own harness first — specifically SWE-bench Verified, Terminal-Bench and any general index — and re-score the moment an independent tracker picks it up.

---

## Signature
- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-thinness finding: BenchLM carries a page for `minimax-m2-5` with exactly one benchmark row** (Vibe Code Bench 14.85%, attributed to Vals AI's Vibe Code Bench v1.1) and *"Benchmarks covered: 1 of 744"*. No Artificial Analysis, Vals-adjacent, Epoch AI or independent leaderboard row was found beyond that one, and no vendor model card, launch post or pricing page appears in the sources checked. **A provenance note is recorded: the single row is independently measured by Vals AI rather than vendor-run, which is clean provenance for that one figure — but one row cannot establish a level, and the report's thesis is that a one-benchmark evidence base cannot support a capability judgement.** Because only one benchmark exists, every quality dimension is explicitly labelled a placeholder-for-unknown, and the context dimension (the only one resting on a verified spec) is the best-grounded score. **The modality field is absent from BenchLM's model-details table and from every source checked, so modality is recorded as unverified rather than assumed on family grounds.** The **generational position** (M2.5 at 49.62 sitting below M2.7 at 47.84 is false — it sits *above* M2.7 but below M3 and M3.1 Flash) is recorded as a structural signal rather than a capability figure. The **Non-Reasoning classification** is recorded as the one directional structural signal. The unpublished rate card is surfaced with its effect on the cost score stated as an estimate. Missing benchmarks (every benchmark measured anywhere in this research series except Vibe Code Bench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — MiniMax M2.5 (1 benchmark row, 1 of 744)](https://benchlm.ai/models/minimax-m2-5)
  - [Vals AI — Vibe Code Bench v1.1 (source of the single 14.85% row)](https://www.vals.ai/benchmarks/vibe-code)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/minimax-m2.7/`](minimax-m2.7.md) (47.84), [`model/minimax-m3/`](minimax-m3.md) (49.30) and [`model/minimax-m3.1-flash/`](minimax-m3.1-flash.md) (60.25) — the better-evidenced siblings this report recommends preferring, refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
