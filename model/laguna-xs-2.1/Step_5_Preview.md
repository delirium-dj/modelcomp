# Laguna XS 2.1 — findings by Step 5 Preview

- Source: Poolside (`poolside/Laguna-XS-2.1`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1 — the **XS** variant of Poolside's Laguna family, sibling to Laguna S 2.1 (refreshed earlier in this session), Laguna M.1 and Laguna XS.2. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 4 source-displayable benchmark rows with no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked". So the repo queue's Overall of 60.7 is a **roster artefact, not a measured figure**.
- **Short description:** An **unranked open-weight 262K model with exactly four benchmark rows and no vendor attribution at all** — every row is attributed to the model's own HF card or to Poolside, so this is a **fully vendor-evidenced model with zero independent measurement** (the reverse of the clean-provenance pattern recorded across eighteen models in this series). Its profile is genuinely modest: **SWE-bench Verified 70.9%, LiveCodeBench-adjacent figures absent, SWE-bench Pro 47.6% and Terminal-Bench 2.0 37.5%**.
- **Provider / access:** **Open weight** (BenchLM records Open Weight), and self-hosting.
- **Release / knowledge:** release date not restated; Laguna XS 2.1 is Poolside's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `poolside/Laguna-XS-2.1` (Hugging Face, the official model card); `laguna-xs-2-1` (BenchLM canonical, repo).
- **Context window:** **262,000 tokens** — a quarter of the current 1M standard, and one of only two verified properties.
- **Modalities:** **text in; text out** — no visual or multimodal benchmark exists in the 4-row catalog.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed. The "XS" tier implies the smallest Laguna.

### Raw benchmarks found

**A provenance finding is recorded: all four rows are attributed to Poolside's own Laguna XS 2.1 model card**, which is clean *same-model* provenance but means **there is no independent measurement of any kind**, and the figures are vendor-run by construction. Four benchmarks total — the joint-thinnest evidence base in this research series, alongside LongCat-2.0 and MiniMax M2.5.

Coding — **the only measured dimension**:

- **SWE-bench Verified: 70.9%** (vendor card) — 14.1 points under the 85%+ terminal reference
- **SWE-bench Pro: 47.6%** (vendor card) — 7.4 points under the 55%+ reference
- **SWE Multilingual: 63.1%** (vendor card) — mid-tier

Agentic / tool use:

- **Terminal-Bench 2.0: 37.5%** (vendor card) — on the *older* harness, and 50.5 points under the 88%+ reference

Named as absent rather than substituted:

- **LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench 2.1/4.0, FrontierCode: none measured**
- **GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience: none measured** — so **every one of the methodology's reasoning references is unmeasured and reliability is entirely unknown**
- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: none measured**

### Normalized scores (1–100)

- **Tool use: 42/100.** Below the methodology's mid band, and the weakest dimension. **Terminal-Bench 2.0 37.5% is the only agentic figure** — on the older harness and 50.5 points under the reference. **Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one reasoning benchmark exists — no GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro or composite index. Scored at 50 rather than lower because an open-weight 262K model presumably has a reasoning substrate; **not scored above 50 because five of five reasoning references are unmeasurable.**
- **Context window: 85/100.** **262,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 — the model's most valuable verified property and the same window as its larger sibling Laguna S 2.1. Held at the band's ceiling rather than the ≥1M tier because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 15/100.** **Text in; text out** — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor.
- **Coding: 62/100.** Mid-band, and the only measured dimension, anchored on one solid figure: **SWE-bench Verified 70.9%** (14.1 under the terminal reference). Supported by **SWE-bench Pro 47.6%** (7.4 under) and **SWE Multilingual 63.1%** (mid-tier). Capped by Terminal-Bench 2.0 37.5% and by the **total absence of LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench 2.1/4.0 and FrontierCode** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and one of only two verified properties. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 50.8/100.** (42 + 50 + 85 + 15 + 62 + 88) / 5 = 67.4 → **67**. Recommendation: **an unranked XS-tier Laguna with four vendor-sourced benchmarks and a 262K window.** SWE-bench Verified 70.9% at open weights and a 262K window is a reasonable base for self-hosted repository-repair work, and the window is the model's genuine asset. **But note the queue's 60.7 is a roster artefact: BenchLM leaves this model unranked with 4 of 753 benchmarks, all four of them vendor-run from Poolside's own card with no independent measurement whatsoever.** Two further cautions: **every reasoning and reliability reference is unmeasured**, so it cannot be assessed as a knowledge or factual model; and **its agentic layer is near-floor** (Terminal-Bench 2.0 37.5%), so it is not an autonomous agent. Prefer its larger sibling **Laguna S 2.1 (refreshed earlier in this session)** unless the XS footprint is decisive.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `laguna-xs-2-1` with 4 source-displayable benchmark rows but no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked" and *"Benchmarks covered"* in single digits. **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 60.7 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1, MAI-Code-1.1-Flash, Hy4, GLM-5.2, Nemotron 3 Ultra Free, Nemotron 3 Nano Omni, Hy3, LongCat-2.0, Qwen 3.7 Flash, Solar Open 2, Solar Pro 4 and Ring-2.6-1T reports. **A provenance finding is recorded and is the reverse of the series' usual pattern: all four rows are attributed to Poolside's own Laguna XS 2.1 model card, which is clean same-model provenance but means there is no independent measurement of any kind and the figures are vendor-run by construction** — the opposite of the fully-independently-evidenced models recorded elsewhere, and flagged as such because it changes how much weight the four rows carry. The joint-thinnest evidence base in this research series (4 rows, alongside LongCat-2.0 and MiniMax M2.5) is stated plainly rather than hedged, and the report's thesis — that four vendor rows cannot support a capability judgement — is stated in the recommendation rather than dressed up as an assessment. The **262K window** is attributed as the model's most valuable verified property and the same window as its larger sibling. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — poolside/Laguna-XS-2.1 model card (primary and only source for all 4 rows)](https://huggingface.co/poolside/Laguna-XS-2.1)
  - [BenchLM — Laguna XS 2.1 (4 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/laguna-xs-2-1)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/laguna-s-2.1/`](laguna-s-2.1.md) — the larger sibling this report recommends preferring, refreshed earlier in this session; [`model/laguna-m-1/`](laguna-m-1.md), [`model/laguna-xs.2/`](laguna-xs.2.md) — the rest of the Laguna family
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
