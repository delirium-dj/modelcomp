# Grok 4.1 Fast — findings by GPT 6 Astra

- Source: xAI / Grok 4.1 Fast
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-03 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

The [retirement notice](https://docs.x.ai/developers/migration/may-15-retirement) still redirects the reasoning ID to Grok 4.3 low, and the nonreasoning ID to Grok 4.3 none. Replacement billing remains $1.25/$2.50 per million input/output tokens. The historical model's context and price must not be represented as current endpoint behavior.

Vibe Code Bench v1.1 / OpenHands, reasoning: **1.20%**, **$0.21/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

This fills the previously missing published app-building result, but its row does not establish an immutable checkpoint or execution date. In particular, today's leaderboard date does not resolve whether an API alias was measured before redirection. Retain coding 60 as provisional rather than attributing this result unconditionally to the original weights or converting one benchmark directly to a normalized score. All six dimensions remain unchanged. Historical vendor/AA results below remain historical observations, not a newly reproduced evaluation.

Remaining gaps: original output ceiling, cutoff, immutable evaluation provenance, original-weight SWE-bench/LiveCodeBench and full-window retrieval. No replacement-model measurements were imported.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **82, 62, 95, 70, 60, 94**; revised: **82, 62, 95, 70, 60, 94**. Overall: **74 → 74**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-03

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

- **Name:** Grok 4.1 Fast, reasoning variant evaluated here.
- **Short description:** Historically inexpensive tool-calling model; original first-party deployment is retired.
- **Provider / access:** Original xAI API, including Agent Tools API. Since May 15, 2026, its IDs redirect to Grok 4.3 with low/none effort rather than the original weights. [Retirement notice](https://docs.x.ai/developers/migration/may-15-retirement).
- **Release / knowledge:** November 19, 2025; cutoff not verified.
- **IDs:** `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`; no verified current Free Zen ID.
- **Context window:** Original model 2 million tokens; output cap unverified. Redirect model has different specifications.
- **Modalities:** Text/image input, text output; reasoning and nonreasoning variants, tool calls. Exact historical JSON contract unverified. [AA release specifications](https://artificialanalysis.ai/models/releases/grok-4-1-fast).
- **Pricing (as of 2026-10-03):** Historical $0.20 input / $0.50 output / $0.05 cached per million; tool fees additional. Redirects instead cost $1.25/$2.50. [Original launch](https://x.ai/news/grok-4-1-fast), retirement notice above.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vendor launch: Tau2-Bench Telecom **100%**, BFCL v4 **72%**, Research-Eval Reka **63.9%**, FRAMES **87.6%** with Agent Tools API. Tool/scaffold-dependent results: [launch evaluation](https://x.ai/news/grok-4-1-fast).
- Terminal-Bench 2.1, Tau3, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found in reviewed sources.

Reasoning / knowledge:

- AA reasoning variant: HLE **19%**, CritPt **3%**, AA-Omniscience **−30 index points**, estimated Intelligence Index **20** (asterisk in source). [AA comparison](https://artificialanalysis.ai/models/comparisons/grok-4-1-fast-reasoning-vs-gpt-oss-120b).
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found in reviewed primary sources.

Coding:

- SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE and Coding Index: no verified public number found in reviewed primary sources. Secondary aggregators were insufficient to establish an exact harness result.

Long context:

- AA-LCR v1.1 **74%**, same AA comparison; this does not establish near-perfect retrieval across 2M tokens.

## Current normalized scores (1–100)

- **Tool use: 82/100.** Strong Telecom, BFCL and search results support specialized agents; missing broad terminal evidence caps generality.
- **Reasoning: 62/100.** HLE 19%, CritPt 3% and negative Omniscience show substantial limits against later frontier models.
- **Context window: 95/100.** Original 2M capacity meets the highest size tier; retrieval evidence does not justify 100.
- **Multimodal: 70/100.** Image understanding is supported, without verified native audio/video or nontext output.
- **Coding: 60/100.** Provisional historical assessment; a published Vals result is now recorded, but original-weight provenance remains unresolved.
- **Cost efficiency: 94/100.** Historical $0.20/$0.50 was highly economical; this score is archival and does not describe current redirects.
- **Overall Score: 74/100.** Half-up mean (82 + 62 + 95 + 70 + 60) / 5 = 73.8; cost excluded. See the refresh for the comparison with 74.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Coding is provisional; retired-model facts are separated from replacement service behavior.
- Future sources: Add a separate signed findings file alongside this report.
