# Claude Sonnet 4.5 — findings by GPT 6 Astra

## Research refresh — 2026-10-09

Compared with the 2026-10-04 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

The [current official reference](https://platform.claude.com/docs/es/models/sonnet-4-5/overview) confirms 200K context, 64K output, $3/$15 input/output, $0.30 cache read and extended thinking. It remains functional but deprecated since September 30, with scheduled retirement **November 30, 2026**. No newer Sonnet specifications or 1M entitlement are substituted.

The [PDF guide](https://platform.claude.com/docs/en/build-with-claude/pdf-support) documents Claude visual PDF processing, including the older Bedrock integration. This corrects the earlier image-only scope; Bedrock Converse requires citations to enable visual PDF analysis. Native audio/video generation remains unverified.

[MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas), thinking: **59.5% all 1,000 / 62.0% public 500**. This revised methodology is distinct from the old 43.8 vendor comparison; it is not evidence of changing weights.

Vibe Code Bench v1.1 / OpenHands, thinking: **22.62%**, **$6.66/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Tool use 71→75 incorporates the independent MCP result; multimodal 70→80 recognizes visual PDFs; coding 78→76 tempers strong repository repair with limited app-building success. Reasoning, context and cost remain unchanged. Remaining gaps: Claw-Eval, full-window retrieval, current harder repository/coding suites and exact benchmark snapshot dates. Deprecated availability must not be confused with retirement or an automatic replacement-model alias.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **71, 75, 70, 70, 78, 60**; revised: **75, 75, 70, 80, 76, 60**. Overall: **73 → 75**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-04

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

Anthropic's proprietary `claude-sonnet-4-5-20250929` (alias `claude-sonnet-4-5`) launched September 29, 2025. Current documentation lists 200K context / 64K output, text/image input, text output and extended thinking. Reliable knowledge cutoff January 2025; training-data cutoff July 2025. Deprecated September 30, 2026, but functional until scheduled retirement November 30, 2026.

USD per million: $3 input / $15 output / $0.30 cache read; cache writes $3.75 for five minutes or $6 for one hour. Batch halves input/output rates. [Current official specifications](https://platform.claude.com/docs/es/models/sonnet-4-5/overview). Tools and computer use are documented in the [release announcement](https://www.anthropic.com/news/claude-sonnet-4-5). The historical 1M configuration is not treated as today's default context entitlement.

### Raw benchmarks found

Anthropic's launch SWE-bench Verified: 77.2%, ten-trial average, bash/file-edit scaffold, 200K thinking budget; 82.0% uses parallel attempts and candidate selection and is not a single-attempt result. OSWorld Verified: 61.4%, 100 steps, four runs. [Launch methodology](https://www.anthropic.com/news/claude-sonnet-4-5).

Sonnet 4.5 column in Anthropic's later comparison, Table 2.1.A:
- Terminal-Bench 2.0: 51.0%.
- Tau2 retail/telecom: 86.2% / 98.0%; MCP-Atlas: 43.8%.
- GPQA Diamond: 83.4%; HLE: 17.7% without tools / 33.6% with tools.
- ARC-AGI-2 Verified: 13.6%; MMMU-Pro: 63.4% without tools / 68.9% with tools.
[System-card comparison](https://www-cdn.anthropic.com/bbd8ef16d70b7a1665f14f306ee88b53f686aa75/Claude%20Sonnet%204.6%20System%20Card.pdf).

Vendor comparisons have harness differences; Sonnet 4.6 settings are not automatically attributed to 4.5. Exact-snapshot Claw-Eval and full-window retrieval: no verified public score found here.

## Current normalized scores (1–100)

- **Tool use: 75/100.** Revised from 71; evidence and rationale are recorded in the dated refresh above.
- **Reasoning: 75/100.** Strong GPQA, but HLE and abstract reasoning below current frontier.
- **Context window: 70/100.** Current documented 200K standard capacity.
- **Multimodal: 80/100.** Revised from 70; evidence and rationale are recorded in the dated refresh above.
- **Coding: 76/100.** Revised from 78; evidence and rationale are recorded in the dated refresh above.
- **Cost efficiency: 60/100.** $3/$15 paid pricing is relatively costly today.
- **Overall Score: 75/100.** Half-up mean (75 + 75 + 70 + 80 + 76) / 5 = 75.2; cost excluded. See the refresh for the comparison with 73.

[Methodology](../../model-comparison.md) · [Signed log](../../model-findings.md)

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09

Method: independent fresh public research; normalized interpretations.

