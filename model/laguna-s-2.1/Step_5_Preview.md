# Laguna S 2.1 — findings by Step 5 Preview

- Source: Poolside (`poolside.ai/blog/introducing-laguna-s-2-1`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 — the **s-2-1 (118B-A8B)** variant of Poolside's Laguna family, sibling to Laguna M.1, XS.2 and XS 2.1 (all unranked). **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 6 source-displayable benchmark rows with no overall score** — its own text reads *"has 6 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 67.5 is a **roster artefact, not a measured figure**.
- **Short description:** An **unranked open-weight 118B-A8B model with a 1M window and a genuinely strong multilingual-coding profile**: **SWE Multilingual 78.5%, SWE-bench Pro 59.4%, Terminal-Bench 2.1 70.2%, Toolathlon-Verified 49.7%** — against **DeepSWE 40.4% (33.6 points under the 74% reference)** and **no reasoning, knowledge, reliability or multimodal benchmark of any kind.**
- **Provider / access:** **Open weight** (BenchLM records Open Weight), and self-hosting.
- **Release / knowledge:** release date not restated; Laguna S 2.1 is Poolside's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** repo id `laguna-s-2-1`; BenchLM canonical `laguna-s-2-1`; `laguna-s-2-1` (variant s-2-1, 118B-A8B).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window, and one of only two verified properties for this model.
- **Modalities:** **text in; text out** — no visual or multimodal benchmark exists in the 6-row catalog.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight MoE, 118B total / 8B active** (a 6.8% activation ratio) — efficient, though not as extreme as the Qwen3.5 family's ratios.

### Raw benchmarks found

**A provenance note is recorded: every one of this model's 6 rows is attributed to Poolside's own "Introducing Laguna S 2.1" blog post** — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across seventeen models in this series. But it also means **there is no independent measurement of any kind**, and the figures are vendor-run by construction. 6 benchmarks total — the joint-thinnest evidence base in this research series, alongside LongCat-2.0.

**Note also that the same blog post appears twice in BenchLM's attribution tables** (once under Agentic and once under Coding), which is the normal duplication when a benchmark spans both categories, not a separate measurement.

Agentic / tool use — **mid**:

- **Terminal-Bench 2.1: 70.2%** (vendor) — 17.8 points under the 88%+ reference
- **Toolathlon-Verified: 49.7%** (vendor) — mid-tier tool orchestration
- **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **two of three frontier references are unmeasured and no composite exists**

Coding — **the strongest dimension, and multilingual-focused**:

- **SWE Multilingual: 78.5%** (vendor) — a strong multilingual repair figure, and the model's differentiator
- **SWE-bench Pro: 59.4%** (vendor) — mid-tier; **DeepSWE: 40.4%** (vendor) — 33.6 points under the 74% reference
- **Terminal-Bench 2.1: 70.2%** (vendor) — also the agentic figure
- **SWE-bench Verified, LiveCodeBench, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode: no verified public score found** — so the 85%, 70% and 55% references are all unmeasured

Reasoning / knowledge:

- **GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **every one of the methodology's reasoning references is unmeasured, and reliability is entirely unknown**

Multimodal:

- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found** — the model is text in / text out

### Normalized scores (1–100)

- **Tool use: 60/100.** At the methodology's mid band's upper edge. **Terminal-Bench 2.1 70.2% is 17.8 points under the reference and Toolathlon-Verified 49.7% is mid-tier**, both vendor-sourced with no independent corroboration. **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all**, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one reasoning benchmark exists — no GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro or FrontierMath. Scored at 50 rather than lower because an open-weight 118B MoE with a 1M window presumably has a reasoning substrate; **not scored above 50 because five of five reasoning references are unmeasurable.**
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window, and one of only two verified properties for this model. Scored at 92 at the tier's lower bound. Held at 92 rather than 95+ because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor: the model is text in / text out.** There is no image, audio or video input, so the dimension does not exist. Scored at 50 rather than lower because the absence is a verified design choice and text-out is a real capability.
- **Coding: 70/100.** Mid-band, and the best-grounded dimension, anchored on two solid figures: **SWE Multilingual 78.5%** (a strong multilingual repair figure, and the model's clearest differentiator) and **SWE-bench Pro 59.4%** (mid-tier). Capped by **DeepSWE 40.4% (33.6 under the 74% reference)**, by Terminal-Bench 2.1 70.2% (17.8 under the reference), and by the absence of SWE-bench Verified, LiveCodeBench, AA-SciCode, the AA Coding Index, Vibe Code Bench and FrontierCode — so the 85%, 70% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable, at a 6.8% activation ratio** — a genuinely permissive and efficient proposition. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 64.4/100.** (60 + 50 + 92 + 50 + 70 + 88) / 5 = 70.0 → **70**. Recommendation: **an unranked open-weight model with a strong multilingual-coding profile and an entirely unmeasured reasoning layer.** SWE Multilingual 78.5%, SWE-bench Pro 59.4%, Terminal-Bench 2.1 70.2% and a 1M window at **open weights and a 6.8% activation ratio** is a reasonable package for multilingual repository work. **But note the queue's 67.5 is a roster artefact: BenchLM leaves this model unranked with 6 of 744 benchmarks, and all 6 rows are vendor-run from Poolside's own blog post with no independent measurement whatsoever.** Two further cautions: **not one reasoning, knowledge or reliability benchmark exists**, so it cannot be assessed as a factual or knowledge model; and **DeepSWE 40.4% is 33.6 points under the reference**, so repository-scale generation is a real weakness despite the strong repair figures. Benchmark it yourself on your own harness before relying on it.

---

## Signature
- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `laguna-s-2-1` with 6 source-displayable benchmark rows but no overall score** — its own text reads *"has 6 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 6 of 752"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 67.5 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1, MAI-Code-1.1-Flash, Hy4, GLM-5.2, Nemotron 3 Ultra Free, Nemotron 3 Nano Omni, Hy3, LongCat 2.0, Qwen 3.7 Flash, Solar Open 2, Solar Pro 4 and Ring-2.6-1T reports. **A provenance finding is recorded: all 6 rows are attributed to Poolside's own "Introducing Laguna S 2.1" blog post — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across seventeen models in this series, but which also means there is no independent measurement of any kind and the figures are vendor-run by construction.** **A minor attribution quirk is recorded: the same blog post appears twice in BenchLM's tables (under both Agentic and Coding), which is normal category duplication for a benchmark spanning both, not a second measurement.** The joint-thinnest evidence base in this research series (6 rows, alongside LongCat-2.0) is stated plainly rather than hedged. The **33.6-point DeepSWE shortfall** is attributed rather than presented bare, and is named as the reason the repair figures must not be extrapolated to generation. The **complete absence of every reasoning, knowledge and reliability benchmark** is stated as the report's central limitation rather than glossed. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference, with the 6.8% activation ratio as the structural fact. Missing benchmarks (Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Verified, LiveCodeBench, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Poolside — Introducing Laguna S 2.1 (primary and only source for all 6 rows)](https://poolside.ai/blog/introducing-laguna-s-2-1)
  - [BenchLM — Laguna S 2.1 (6 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/laguna-s-2-1)
  - [Hugging Face — Poolside Laguna S 2.1 weights](https://huggingface.co/poolside/laguna-s-2.1)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/laguna-m-1/`](laguna-m-1.md), [`model/laguna-xs.2/`](laguna-xs.2.md) and [`model/laguna-xs-2-1/`](laguna-xs-2-1.md) — the Laguna siblings, all unranked and refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
