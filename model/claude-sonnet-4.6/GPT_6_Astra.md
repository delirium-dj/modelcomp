# Claude Sonnet 4.6 — findings by GPT 6 Astra

- Source: Anthropic / `claude-sonnet-4-6`
- Date: 2026-10-10 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Research refresh — 2026-10-10

Compared with 2026-10-04. Sources accessed today; access dates are not evaluation execution dates. This section supersedes conflicting statements or missing-data claims in the preserved snapshot. No local model benchmark was run.

[Official specifications](https://platform.claude.com/docs/en/models/sonnet-4-6/overview) reconfirm 1M context, 128K synchronous output, separate 300K batch-output beta, $3/$15 per million, and active legacy status. Retirement remains no sooner than February 17, 2027, not a scheduled date. No specification change was established.

[PDF documentation](https://platform.claude.com/docs/en/build-with-claude/pdf-support) confirms visual PDF processing for active models. Bedrock Converse requires citations for visual analysis. The old image-only assessment omitted this capability.

[MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas) reports **69.5% all 1,000 / 72.8% public 500**, versus the old vendor-table 61.3%. The evaluator changed judge, retries and tool budget; this is not a controlled improvement in weights.

Vibe Code Bench v1.1: OpenHands **51.48%, $5.91/test**; Claude Code **55.77%, $7.35/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Tool use 80→82 gains independent evidence; multimodal 70→80 corrects omitted PDFs. Other scores stay unchanged. Remaining gaps: exact current AA reasoning suite, ClawProBench, independent full-window retrieval. Historical system-card values below are retained, not represented as newly rerun tests.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **80, 85, 95, 70, 81, 60**; current: **82, 85, 95, 80, 81, 60**. Overall: **82 → 85**. Changes reflect revised evidence, not necessarily changed model weights.

## Prior research snapshot — 2026-10-04

Preserved for comparison; current corrections are above.

### Model card

Claude Sonnet 4.6 is a proprietary model released February 17, 2026, now active legacy, with retirement no sooner than February 17, 2027. The dateless API ID identifies a fixed snapshot. It provides **1M context**, **128K synchronous output**, text/image input and text output. Adaptive thinking defaults to high effort; extended thinking is deprecated. Reliable knowledge cutoff is **August 2025**, while training data extends through January 2026. Parameters are undisclosed. [Official specifications](https://platform.claude.com/docs/en/models/sonnet-4-6/overview).

Standard rates per million tokens are **$3 input / $15 output**, **$0.30 cache read**, with $3.75 five-minute and $6 one-hour cache writes. Batch input/output receive a 50% discount; the 300K batch-output allowance is beta and separate from synchronous limits. [Pricing and limits](https://platform.claude.com/docs/en/models/sonnet-4-6/overview).

### Raw benchmarks found

Agent / tool use:

- **Tau2 Retail 91.7%**, **Telecom 97.9%**, **MCP-Atlas 61.3%**, **OSWorld-Verified 72.5%**, launch **GDPval-AA 1633**.

Reasoning / knowledge:

- **GPQA Diamond 89.9%**, **ARC-AGI-2 58.3%**, **HLE 33.2% without tools / 49.0% with tools**.
- **AIME 2025 95.6%**, without tools; Anthropic explicitly raises possible contamination.

Coding:

- **SWE-bench Verified 79.6%**, **Terminal-Bench 2.0 59.1%**.

Multimodal / long context:

- **MMMU-Pro 74.5% without tools / 75.6% with tools**.
- **MRCR v2 eight-needle 90.3%**, max adaptive effort, 128K–256K prompt bin.

Source: [official system card, Tables 2.1.A and 2.16.A](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf). Most evaluations use adaptive thinking/max effort, with task-specific contexts and exceptions. The terminal section describes no thinking budget. SWE trial counts differ between summary footnote and detailed prose; the common reported score is preserved. Launch GDPval is not current GDPval-AA v2.1.

## Current normalized scores (1–100)

- **Tool use: 82/100.** Independent MCP evidence supplements vendor service and computer-use results.
- **Reasoning: 85/100.** Strong science and abstract reasoning; mathematics contamination caveat retained.
- **Context window: 95/100.** 1M capacity; shorter-bin retrieval does not prove perfect full-window recall.
- **Multimodal: 80/100.** Visual PDF and image understanding; text output.
- **Coding: 81/100.** Repository and app-building evidence support capable but harness-dependent coding.
- **Cost efficiency: 60/100.** Unchanged $3/$15 standard pricing with cache/batch discounts.
- **Overall Score: 85/100.** Half-up mean (82 + 85 + 95 + 80 + 81) / 5; cost excluded. Previous overall 82.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-10
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
