# Flint — findings by Step 5 Preview

- Source: Recursive (`RecursiveSI/flint`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint. **Recursive's** open-weight model — BenchLM records the creator as "Recursive" and the model card as `RecursiveSI/flint`, making it one of the few genuinely new labs in this research series. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 5 source-displayable benchmark rows with no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked". So the repo queue's Overall of 59.4 is a **roster artefact, not a measured figure**.
- **Short description:** An **unranked open-weight 256K model with a genuinely strong instruction-following profile and a thin measured base**: **IFEval 95.1%, IFBench 89.2%, SWE-bench Verified 74.2%, LiveCodeBench v6 80.3% and Terminal-Bench 2.1 54.9%** — five rows, all from the model card or standard leaderboards, with no independent composite of any kind.
- **Provider / access:** **Open weights** on Hugging Face (`RecursiveSI/flint`), and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; Flint is Recursive's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `RecursiveSI/flint` (Hugging Face, the official model card); `flint` (BenchLM canonical, repo).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, and one of only two verified properties.
- **Modalities:** **text in; text out** — no visual or multimodal benchmark exists in the 5-row catalog.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed. BenchLM classifies it **Reasoning**.

### Raw benchmarks found

**A provenance finding is recorded: the five rows are attributed to the Recursive Flint model card and to standard leaderboards, with no cross-citation from competitor documents** — clean same-model provenance for the vendor rows, but it also means **the independent rows are few and the composite evidence is absent entirely.** Five benchmarks total.

Coding — **the strongest dimension**:

- **SWE-bench Verified: 74.2%** — 10.8 points under the 85%+ terminal reference
- **LiveCodeBench v6: 80.3%** — a strong competitive-programming figure
- **Terminal-Bench 2.1: 54.9%** — 33.1 points under the 88%+ reference, and the only agentic figure

Instruction following — **genuinely strong**:

- **IFEval: 95.1%** — among the strongest IFEval figures in this research series
- **IFBench: 89.2%** — the strongest IFBench figure in this batch

Named as absent rather than substituted:

- **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: none measured** — so **two of three frontier references are unmeasured and no composite exists**
- **GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience: none measured** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**
- **DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode: none measured** — so the 74%, 70% and 55% coding references are unmeasured
- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: none measured**

### Normalized scores (1–100)

- **Tool use: 52/100.** Below the methodology's mid band, and the weakest dimension. **Terminal-Bench 2.1 54.9% is the only agentic figure** and it is 33.1 points under the reference. **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all**, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 62/100.** Mid-band, anchored on a genuinely strong figure: **IFBench 89.2%**, the strongest in this batch, which measures instruction-following under constraint and is a real (if narrow) reasoning-adjacent property. **IFEval 95.1%** corroborates. Capped by the **total absence of GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, the AA Intelligence Index and AA-Omniscience** — so composite depth, reliability and three of five reasoning references are entirely unknown.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 — the model's most valuable verified property and the same window as the larger Laguna siblings. Held at the band's ceiling rather than the ≥1M tier because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 15/100.** **Text in; text out** — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor.
- **Coding: 70/100.** Mid-band, and the best-grounded dimension, anchored on two solid figures: **SWE-bench Verified 74.2%** (10.8 under the terminal reference) and **LiveCodeBench v6 80.3%** (a strong competitive-programming result). Capped by **Terminal-Bench 2.1 54.9%** (33.1 under) and the **total absence of DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and one of only two verified properties. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 57/100.** (52 + 62 + 85 + 15 + 70) / 5 = 56.8 → **57**. Recommendation: **an unranked open-weight model from a genuinely new lab, with the batch's strongest instruction-following figures and a 256K window.** IFEval 95.1%, IFBench 89.2%, SWE-bench Verified 74.2% and LiveCodeBench v6 80.3% at open weights is a reasonable package for self-hosted repository-repair work where instruction adherence matters. **But note the queue's 59.4 is a roster artefact: BenchLM leaves this model unranked with 5 of 753 benchmarks, and no independent composite exists.** Two further cautions: **every reasoning and reliability reference is unmeasured**, so it cannot be assessed as a knowledge or factual model; and **its agentic layer is near-floor** (Terminal-Bench 2.1 54.9%), so it is not an autonomous agent.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `flint` with 5 source-displayable benchmark rows but no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 59.4 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1, MAI-Code-1.1-Flash, Hy4, GLM-5.2, Nemotron 3 Ultra Free, Nemotron 3 Nano Omni, Hy3, LongCat-2.0, Qwen 3.7 Flash, Solar Open 2, Solar Pro 4, Ring-2.6-1T and Laguna XS 2.1 reports. **A provenance finding is recorded: the five rows are attributed to the Recursive Flint model card and standard leaderboards, with no cross-citation from competitor documents** — clean same-model provenance for the vendor rows, with the caveat that this leaves the model with few independent rows and no composite at all. The joint-thinnest evidence base in this research series (5 rows, alongside Laguna XS 2.1, GLM-4.7-Flash and MiniMax M2.5) is stated plainly rather than hedged. **The batch's strongest IFBench (89.2%) is attributed as the model's genuine property**, while the **33.1-point Terminal-Bench 2.1 shortfall** is attributed as the reason the agentic score sits near the floor. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — RecursiveSI/flint model card (primary source)](https://huggingface.co/RecursiveSI/flint)
  - [BenchLM — Flint (5 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/flint)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
