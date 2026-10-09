# Claude Opus 4.5 — findings by GPT 6 Astra

- Source: Anthropic / `claude-opus-4-5-20251101`
- Date: 2026-10-09 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-04 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

The [current model reference](https://platform.claude.com/docs/en/models/opus-4-5/overview) reconfirms active legacy status, 200K context, 64K output and $5/$25 input/output per million. Newly recorded: **August 2025 training-data cutoff**, distinct from May 2025 reliable cutoff; **$0.50 cache read**, **$6.25 five-minute / $10 one-hour cache write**, and 50% batch discount. Retirement is **not sooner than November 24, 2026**, not a scheduled shutdown on that date.

[Claude PDF documentation](https://platform.claude.com/docs/en/build-with-claude/pdf-support) covers active models, including this active legacy model. Visual PDF understanding is omitted from the old image-only assessment. Bedrock Converse requires citations for visual rather than text-only document processing.

[MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas), high: **69.8% all 1,000 / 73.4% public 500**. Revised judge/retry/tool-budget methodology prevents treating the difference from old 62.3 as a controlled model improvement.

Vibe Code Bench v1.1 / OpenHands, thinking: **20.63%**, **$32.87/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Tool use 79→81 reflects broader updated evaluator evidence; multimodal 70→80 corrects omitted visual PDFs; coding 81→79 tempers repository strength with weaker app-building performance. Reasoning, context and cost remain unchanged. These are evidence-based assessment revisions, not claimed weight changes. Remaining gaps: exact-model HLE/AIME, independent full-window retrieval, recent harder repository suites. Historical system-card values below were not all rerun or independently reproduced.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **79, 80, 65, 70, 81, 50**; revised: **81, 80, 65, 80, 79, 50**. Overall: **75 → 77**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-04

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

Claude Opus 4.5 is a proprietary model released November 24, 2025. Its dated API identifier is `claude-opus-4-5-20251101`; parameters are undisclosed. [Release announcement](https://www.anthropic.com/news/claude-opus-4-5).

The current documentation classifies it as legacy, with **200K context**, **64K maximum output**, extended thinking, default high effort, and a **May 2025 reliable knowledge cutoff**. Standard API rates are **$5 input / $25 output** per million tokens. It accepts text and images and generates text. [Official model documentation](https://platform.claude.com/docs/en/models/opus-4-5/overview).

### Raw benchmarks found

Agent / tool use:

- **Tau2 Retail 88.9%**, **Telecom 98.2%**, **MCP Atlas 62.3%**, all without extended thinking.
- **OSWorld 66.3%**.
- Tau2 Airline: **67.9% original**, **87.8% corrected**; these are different benchmark versions.

Reasoning / knowledge:

- **GPQA Diamond 87.0%**, **ARC-AGI-2 Verified 37.6%**, **MMMLU 90.8%**.
- Exact-model HLE and AIME: no verified public score found in the sources used here.

Coding:

- **SWE-bench Verified 80.9%**, without extended thinking.
- **Terminal-Bench 2.0 59.3%** with a 128K thinking budget; **57.8%** with 64K. The evaluation's budget setting must not be mistaken for the synchronous API output limit.

Multimodal / long context:

- **MMMU validation 80.7%**. Full-window MRCR/RULER: no verified public score found.

Results come from the [official system card, Table 2.3.A](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf), whose indexed table was accessible despite direct PDF retrieval failing. Unless excepted above, it averages five trials using high effort, 64K thinking, and 200K context. Benchmark versions and thinking conditions remain separate.

## Current normalized scores (1–100)

- **Tool use: 81/100.** Revised from 79; evidence and rationale are recorded in the dated refresh above.
- **Reasoning: 80/100.** Strong science and multilingual knowledge; abstract reasoning trails later models.
- **Context window: 65/100.** 200K capacity reaches the methodology's 200–500K band, without maximum-window retrieval validation.
- **Multimodal: 80/100.** Revised from 70; evidence and rationale are recorded in the dated refresh above.
- **Coding: 79/100.** Revised from 81; evidence and rationale are recorded in the dated refresh above.
- **Cost efficiency: 50/100.** $5/$25 standard pricing is expensive relative to newer economical agents.
- **Overall Score: 77/100.** Half-up mean (81 + 80 + 65 + 80 + 79) / 5 = 77; cost excluded. See the refresh for the comparison with 75.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
