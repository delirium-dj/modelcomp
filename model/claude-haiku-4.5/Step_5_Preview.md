# Claude Haiku 4.5 — findings by Step 5 Preview

- Source: Anthropic (`anthropic/claude-haiku-4.5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5. Now **two generations behind**: Claude Haiku 5.5 (66.56, refreshed in an earlier batch — the +26.5-point jump) and then this at **40.09, #144 of 1,015** with **12 benchmarks**. BenchLM classifies it **Non-Reasoning** — the seventeenth such model in this corpus.
- **Short description:** A 2025-era Haiku whose most useful surviving property is **cheap, well-behaved repair coding**: **SWE-bench Verified 73.3% and VulcanBench v3 76.2%** — both genuinely respectable for a Haiku tier — set against a **broken execution layer (OSWorld 2.1 Offline 15.7%, MazeBench 0%, JobBench 16.0%, LiveCodeBench 41.2%)** and no reasoning or reliability measurement at all.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Haiku 4.5 is Anthropic's late-2025 Haiku tier (the Vals slug carries a `20251001` snapshot date). **Knowledge cutoff not disclosed.**
- **IDs:** `anthropic/claude-haiku-4.5`; `anthropic_claude-haiku-4.5-20251001-thinking` (Vals).
- **Context window:** **200,000 tokens** — one-fifth of the current 1M standard, and the primary reason this model cannot rank in the top context tier.
- **Modalities:** **text and image in; text out** (ParseBench 49.34%, Design Arena 1,122 Elo).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's "Introducing Claude Haiku 4.5" launch material is the primary source for one row, but the **structural finding is that the majority of this model's rows are cross-cited from competitor or later-generation documents**: OSWorld 2.1 Offline 15.7% and the LiveCodeBench rows come from *Anthropic's Claude Haiku 5.5 system card* and *Vals' `haiku-4-5-...-thinking` slug*, and VulcanBench v3 76.2% comes from a *Kimi K3 comparison report*. That is weaker provenance than a Haiku 4.5 model card of its own, and it is flagged at each affected figure rather than implied. 12 benchmarks total.

Agentic / tool use — **near-floor**:

- **JobBench: 16.0%** [JobBench paper]; **OSWorld 2.1 Offline: 15.7%** (Haiku 5.5 system card — cross-cited); **MazeBench: 0%**
- **Terminal-Bench 2.1 (Vals): 43.8%** — 44.2 points under the 88%+ reference
- **Terminal-Bench (other harnesses), τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Coding — **the least-bad dimension, and genuinely respectable**:

- **SWE-bench Verified: 73.3%** (vendor launch material) — 11.7 points under the 85%+ terminal reference
- **VulcanBench v3: 76.2%** (Kimi K3 comparison report — cross-cited) — a solid mid-frontier figure
- **LiveCodeBench (Vals): 41.2%** — near-floor, and a **35-point gap from the model's own SWE-bench figure**
- **SWE-bench (Vals): 66.6%** — a **6.7-point gap** from the vendor's 73.3%
- **SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Reasoning / knowledge — **thin, and no composite at all**:

- **GPQA Diamond (Vals): 72.2%** — fails the 90%+ reference by 17.8 points
- **MMLU-Pro (Vals): 78.7%** — mid-tier
- **CritPt, AA-LCR, AA-HLE, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, FrontierMath: no verified public score found** — so **the entire composite, reliability, long-context reasoning and all mathematics are unmeasured**

Multimodal (image-in):

- **ParseBench: 49.34%** [LlamaIndex] — weak; Design Arena (website): **1,122 Elo** — weak
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's low band, and the weakest dimension. **OSWorld 2.1 Offline 15.7%, JobBench 16.0% and MazeBench 0% are all near-floor**, and Terminal-Bench 2.1 43.8% is 44.2 points under the reference. **Terminal-Bench on every other harness, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, GDPval-AA and the AA Agentic Index have no measurement at all**, so all three frontier references are unmeasured and no composite exists. The execution layer is the clearest reason this model is dominated by its successor.
- **Reasoning: 55/100.** At the methodology's mid band's floor, and resting on two figures only. **GPQA Diamond 72.2% and MMLU-Pro 78.7%** are mid-tier exam results, the former failing the 90%+ reference by 17.8 points. Capped hard by the **total absence of CritPt, AA-LCR, AA-HLE, the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH and FrontierMath** — so composite depth, reliability, long-context reasoning and all mathematics are entirely unknown. The strong-coding-against-absent-depth pattern is consistent with BenchLM's **Non-Reasoning** classification.
- **Context window: 70/100.** **200,000 tokens** places it exactly on the methodology's 200K tier boundary ("200K = 70"), and it is one-fifth of the current standard. Held at the 70 floor rather than mid-tier because **no AA-LCR figure exists**, no MRCR run exists, and no max-output limit is published — so there is no evidence the window is usable at depth, only that it is nominally 200K.
- **Multimodal: 58/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **ParseBench 49.34% and Design Arena 1,122 Elo are both weak**, and **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no measurement** — so the modality claim rests on two poor rows.
- **Coding: 70/100.** Mid-band and the least-bad dimension. **SWE-bench Verified 73.3% (vendor) and VulcanBench v3 76.2% are both genuinely respectable for a Haiku tier**, and the model's cheap-and-steady positioning is real. Capped by the **6.7-point vendor-vs-Vals SWE-bench gap (73.3% vs 66.6%)**, by **LiveCodeBench 41.2% (near-floor, a 35-point gap from its own SWE-bench figure)**, and by the absence of SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on positioning rather than a price: the **Haiku tier is Anthropic's cheapest current route** — historically the strongest directional signal available, and the model's whole reason for existing. Scored at 88 on the methodology's ~$1.25/$4.25 anchor. **Explicitly a positioning-based inference, not a measurement** — held below 92 because there is no free tier, no published rate, and no cache-read figure.
- **Overall Score: 57.6/100.** (35 + 55 + 70 + 58 + 70 + 88) / 5 = 62.6 → **63**. Recommendation: **a legacy Haiku whose only durable claim is cheap, well-behaved repair coding.** SWE-bench Verified 73.3% and VulcanBench v3 76.2% are real figures for the tier, and Haiku pricing makes it a defensible volume choice for that narrow use. Everything else is absent or near-floor: **no reliability measurement of any kind, no composite, no long-context reasoning, no mathematics, and an execution layer at 0–16%**. It is dominated on every axis by **Claude Haiku 5.5 (66.56, refreshed in an earlier batch)** — the +26.5-point generational jump — which costs the same or less at the same tier. Migrate unless pinned to `anthropic/claude-haiku-4.5`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Anthropic's "Introducing Claude Haiku 4.5" launch material as the primary source for the SWE-bench Verified row, cross-checked against BenchLM's 12-row catalog. **A provenance finding is recorded prominently: the majority of this model's rows are cross-cited from competitor or later-generation documents — OSWorld 2.1 Offline 15.7% and the LiveCodeBench rows come from *Anthropic's Claude Haiku 5.5 system card*, and VulcanBench v3 76.2% comes from a *Kimi K3 comparison report* — rather than from a Haiku 4.5 model card of its own**, which is weaker provenance and is flagged at those figures — the same cross-citation pattern recorded in the Claude Opus 4.5, Claude Sonnet 4.5, Grok 4.20, Gemma 4 31B, Qwen3.5-27B, Qwen3.5-35B-A3B, GPT-5.1-Codex-Max and Gemini 2.0 Flash reports. The 12-benchmark evidence base — the thinnest in this batch — is stated plainly rather than hedged. Two conflicts are listed side by side rather than averaged: **SWE-bench Verified 73.3% (vendor) / 66.6% (Vals), a 6.7-point gap; and the 35-point internal gap between SWE-bench Verified 73.3% and LiveCodeBench 41.2%**, the latter recorded as unresolved. The **complete absence of every composite, reliability, long-context and mathematics benchmark** is stated as the reasoning dimension's defining constraint rather than glossed. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based inference. Missing benchmarks (Terminal-Bench on all harnesses except 2.1, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, AA-HLE, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, FrontierMath, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode, MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Haiku 4.5 (primary source for the SWE-bench Verified row)](https://www.anthropic.com/news/claude-haiku-4-5)
  - [BenchLM — Claude Haiku 4.5 benchmark scores (12 rows, 40.09/100, #144/1015)](https://benchlm.ai/models/claude-haiku-4-5)
  - [Anthropic — Claude Haiku 5.5 system card (source of the cross-cited OSWorld 2.1 Offline row; weaker provenance)](https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf)
  - [Vals AI — Claude Haiku 4.5 (20251001 thinking) leaderboard results](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking)
  - [VulcanBench v3 July 2026 expanded report (Kimi K3 comparison; source of the cross-cited 76.2%)](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/v3-kimi-k3-2026-07.md)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - [MazeBench AI leaderboard](https://mazebench.com/leaderboard/ai)
  - [Openrouter — Claude Haiku 4.5 benchmarks](https://openrouter.ai/anthropic/claude-haiku-4.5/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/claude-haiku-5.5/`](claude-haiku-5.5.md) (66.56) — the successor this report recommends migrating to, refreshed in an earlier batch; [`model/claude-haiku-4.5-thinking/`](claude-haiku-4.5-thinking.md) — the separately-tracked Thinking sibling, **not** the same identity
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
