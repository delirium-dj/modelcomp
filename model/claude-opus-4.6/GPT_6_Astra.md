# Claude Opus 4.6 — findings by GPT 6 Astra

- Source: Anthropic / `claude-opus-4-6`
- Date: 2026-10-09 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-04 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

[Current specifications](https://platform.claude.com/docs/en/models/opus-4-6/overview) reconfirm 1M context, 128K standard output and $5/$25 input/output per million. A separately documented **300K output Batch API beta** is newly recorded and must not replace the synchronous cap. Active legacy status and retirement **not sooner than February 5, 2027** are verified. Cache read is **$0.50/M**, cache writes **$6.25/M for five minutes / $10/M for one hour**; batch halves base input/output rates.

[PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support) adds visual document processing to the earlier image-only assessment. On Bedrock Converse, citations must be enabled for visual PDF analysis.

[MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas), max: **76.8% all 1,000 / 79.0% public 500**. Its updated judge, retry handling and tool budget matter when comparing vendor launch tables.

Vibe Code Bench v1.1 / OpenHands: nonthinking **57.57%, $8.69/test**; thinking **53.50%, $8.28/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Those configurations must remain separate; this one result does not imply thinking generally reduces coding quality. Tool use 82→84 gains independent MCP evidence; multimodal 70→80 corrects omitted PDFs; coding 84→83 reflects the mixed end-to-end evidence. Other dimensions stay unchanged. Remaining gaps: exact-model current AA reasoning metrics, ClawProBench, full-window near-perfect retrieval and immutable run provenance. Historical launch/system-card comparisons remain snapshots, not newly reproduced tests.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **82, 89, 95, 70, 84, 50**; revised: **84, 89, 95, 80, 83, 50**. Overall: **84 → 86**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-04

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

Claude Opus 4.6 is Anthropic's proprietary reasoning model released February 5, 2026, for coding, analysis, and computer-assisted work. Its API ID is `claude-opus-4-6`. Current documentation lists a 1M-token context, 128K output, adaptive thinking with high default effort, text/image input, and text output. The reliable knowledge cutoff is May 2025; the training-data cutoff is August 2025. These are different claims. Parameter counts and downloadable weights are not disclosed. [Official model documentation](https://platform.claude.com/docs/en/models/opus-4-6/overview).

Standard API prices are $5 input/$25 output per million tokens. The full 1M window is now generally available at standard pricing; launch-era beta and long-context surcharges are outdated for the Claude Platform. Hosted access and Claude subscriptions have separate billing and limits. No perpetual free API or free Zen ID was verified. [Context availability and pricing update](https://claude.com/blog/1m-context-ga).

### Raw benchmarks found

Agent / tool use:

- Anthropic reports **OSWorld 72.7%** and **BrowseComp 83.7%**, with benchmark-specific agent tools and harnesses.
- **Terminal-Bench 2.0: 65.4%**, evaluated with adaptive thinking at max effort. This must not be relabeled Terminal-Bench 2.1 or 4.0.
- Exact-model Tau3-Banking, ClawProBench, and SWE Atlas Codebase QnA: no verified public score found in the sources used here.

Reasoning / knowledge:

- Anthropic's comparison reports **GPQA Diamond 91.3%**, **HLE without tools 40.0%**, and **HLE with tools 53.3%**. Tool-assisted and unassisted HLE are separate operating conditions.
- Exact-model CritPt, Omniscience accuracy/hallucination rate, and a fully measured current AA index: no verified public score found in the sources used here.

Coding:

- **SWE-bench Verified 80.8%**, **SWE-bench Pro 53.4%**, and **SWE-bench Multilingual 77.8%** are reported in Anthropic's later comparison table for Opus 4.6.
- Exact-model LiveCodeBench, SciCode, and Vibe Code Bench: no verified public score found in the sources used here.

These results are vendor measurements, sourced from the [Opus 4.6 system card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf) and its explicitly labeled column in the [Opus 4.7 system card](https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf). Later comparison tables can reflect evaluation updates; they do not establish a controlled improvement over launch results.

Long context:

- **MRCR v2, eight needles at 1M tokens: 76%**, according to the [launch report](https://www.anthropic.com/news/claude-opus-4-6). This supports useful long-context retrieval but falls well below a near-perfect retrieval claim. No exact-model RULER score was verified here.

## Current normalized scores (1–100)

- **Tool use: 84/100.** Revised from 82; evidence and rationale are recorded in the dated refresh above.
- **Reasoning: 89/100.** Strong GPQA and unassisted HLE; tool-assisted gains are kept distinct.
- **Context window: 95/100.** Verified 1M window, capped below 100 by imperfect measured retrieval.
- **Multimodal: 80/100.** Revised from 70; evidence and rationale are recorded in the dated refresh above.
- **Coding: 83/100.** Revised from 84; evidence and rationale are recorded in the dated refresh above.
- **Cost efficiency: 50/100.** $5/$25 is costly relative to newer alternatives despite removal of the long-context premium.
- **Overall Score: 86/100.** Half-up mean (84 + 89 + 95 + 80 + 83) / 5 = 86.2; cost excluded. See the refresh for the comparison with 84.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
