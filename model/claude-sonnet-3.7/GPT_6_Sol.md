# Claude 3.7 Sonnet — findings by GPT 6 Sol

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Identity / availability:** February 24, 2025 hybrid standard/extended-thinking release, one checkpoint with selectable thought budget—not two models. **Retired February 19, 2026 on Anthropic-operated APIs**; partners may have different schedules ([Anthropic launch](https://www.anthropic.com/news/claude-3-7-sonnet), [retirement table](https://platform.claude.com/docs/en/about-claude/model-deprecations)). Historical score, not a current first-party offering.
- **Specs:** Historical **200K context** and up to **128K output** under supported API settings; text/image in, text out, no native audio/video. The 128K maximum is from [Anthropic's launch](https://www.anthropic.com/news/claude-3-7-sonnet); [Vals](https://www.vals.ai/models/anthropic_claude-3-7-sonnet-20250219-thinking) reports an **8K** ceiling for its historical *evaluated configuration*, not a contradiction about the maximum possible. October 2024 knowledge cutoff per [AA historical profile](https://artificialanalysis.ai/models/claude-3-7-sonnet-thinking). Weights/parameter count undisclosed.
- **Price:** At release **$3 input/$15 output per million tokens**, including billed thinking tokens ([Anthropic](https://www.anthropic.com/news/claude-3-7-sonnet)); no current first-party tariff for retired ID.

### Raw benchmarks found

- **Tool use / agents:** Anthropic's [TAU-bench evaluation protocol](https://www.anthropic.com/news/claude-3-7-sonnet) added a planning tool and allowed **100 steps** versus 30 ordinarily—an agent setting, not a zero-scaffold win rate. Independent [AA archived nonthinking τ²-Bench **50%**](https://benchlm.ai/models/claude-3-7-sonnet) measures another version/configuration; do not transfer this to thinking mode. [Vals thinking TaxEval v2 **74.04% ±0.86** and MortgageTax **66.85% ±1.80**](https://www.vals.ai/models/anthropic_claude-3-7-sonnet-20250219-thinking) show applied-work ability, not general tool-call completion.
- **Reasoning:** Independent [Vals extended-thinking GPQA Diamond **75.25% ±2.17**, MMLU Pro **82.73% ±0.37**](https://www.vals.ai/models/anthropic_claude-3-7-sonnet-20250219-thinking). [AA's archived *nonthinking* GPQA **65.6%** and HLE **4.2%**](https://benchlm.ai/models/claude-3-7-sonnet) are lower-effort baselines. These configuration differences matter, and AA's current Index **N/A** on the retired profile is *not* zero performance.
- **Coding:** Anthropic reports [SWE-bench Verified **62.3% over all 500** with no extended thinking](https://www.anthropic.com/news/claude-3-7-sonnet) using bash/edit/planning tools in one session; **63.7%** on the **489** locally solvable tasks and **70.3%** with *multiple sampled attempts and a reranker* on the 489-task subset. Do not report the latter as pass@1. Independent [Vals thinking LiveCodeBench **60.44% ±1.14**](https://www.vals.ai/models/anthropic_claude-3-7-sonnet-20250219-thinking) is code-question solving, not repository repair.
- **Context / vision:** Independent [Vals thinking MMMU Pro **75.10% ±1.04**](https://www.vals.ai/models/anthropic_claude-3-7-sonnet-20250219-thinking). [AA archived nonthinking AA-LCR **51.7%**, AA-MMMU-Pro **60.1%**](https://benchlm.ai/models/claude-3-7-sonnet) use a separate effort setting and visual benchmark from Vals. Nominal 200K input has no independently proven near-boundary reliability in these sources.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agent-scaffold support and tax-domain results, but high-step TAU protocol not a standard independent measurement.
- **Reasoning: 72/100.** Vals thinking GPQA 75.25, with nonthinking benchmark gap explicitly segregated.
- **Context window: 68/100.** Historical 200K and high output capacity; limited near-cap retrieval evidence.
- **Multimodal: 68/100.** Image understanding including Vals MMMU 75.10; text output only and no audio/video.
- **Coding: 75/100.** Vendor pass@1 SWE 62.3 and independent LCB 60.44; high-compute reranking not pass@1.
- **Cost efficiency: 48/100.** Historical $3/$15 plus billed thought; first-party model now retired.
- **Overall Score: 71/100.** Half-up mean (70 + 72 + 68 + 68 + 75) / 5 = 70.6; cost excluded.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate official/leaderboard/catalog search queries and primary Anthropic launch/retirement review with independent Vals and archived AA results. Separated thinking modes, 489-task subset and high-compute reranking.
- Reference URLs:
  - [Anthropic Claude 3.7 announcement and benchmark scaffolds](https://www.anthropic.com/news/claude-3-7-sonnet)
  - [Anthropic model retirement dates](https://platform.claude.com/docs/en/about-claude/model-deprecations)
  - [Vals extended-thinking historical results](https://www.vals.ai/models/anthropic_claude-3-7-sonnet-20250219-thinking)
  - [Artificial Analysis retired model profile](https://artificialanalysis.ai/models/claude-3-7-sonnet-thinking)
  - [BenchLM source-linked AA historical archive](https://benchlm.ai/models/claude-3-7-sonnet)
- Future sources: add a new file next to this one using the same headings.
