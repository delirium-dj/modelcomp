# Claude Sonnet 4 — findings by GPT 6 Sol

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 22, 2025 hybrid fast/extended-thinking model, a historical checkpoint distinct from Sonnet 4.5/4.6; thinking on/off are **modes of the same model**, not new model identities ([Anthropic launch](https://www.anthropic.com/news/claude-4)).
- **Provider / access:** Original API ID `claude-sonnet-4-20250514`, previously also via Bedrock/Vertex; **retired on Anthropic-operated APIs June 15, 2026**, so these are historical performance/price facts, not a deployable current Anthropic endpoint. Partner lifecycle differs ([Anthropic status table](https://platform.claude.com/docs/en/about-claude/model-deprecations)).
- **Release / knowledge:** May 22, 2025; reliable knowledge cutoff not firmly established from the reviewed primary release, so no exact cutoff assigned.
- **Context window:** Historical **200K** tokens with up to **64K output** ([Vals exact-model profile](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking)); not the 1M of later Sonnets. No controlled near-cap retrieval evidence in the reviewed sources.
- **Modalities:** Text/images in, text out; no native audio/video ([Anthropic launch](https://www.anthropic.com/news/claude-4), [Vals](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking)).
- **Pricing:** Historical Anthropic **$3 input/$15 output per 1M**, before caching and tool charges ([launch](https://www.anthropic.com/news/claude-4)). No current first-party tariff: the dated ID has retired.
- **Architecture:** Proprietary, no public parameter count; extended thinking can interleave with tools ([Anthropic](https://www.anthropic.com/news/claude-4)).

### Raw benchmarks found

- **Tool use / agents:** Anthropic's [release](https://www.anthropic.com/news/claude-4) describes parallel tool use, web search during extended thinking and a TAU-bench procedure with a special policy prompt/100-step allowance, **not** a standard default-harness result. Independent [Vals Thinking](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking) TaxEval v2 **72.00% ±0.88**, MortgageTax **49.88% ±0.98**; neither equals general tool reliability. No independently reproduced exact-model TAU score verified in reviewed sources.
- **Reasoning:** Independent [Vals Thinking GPQA Diamond **75.00% ±2.19**, MMLU Pro **83.86% ±0.36**, AIME **76.3%**](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking); the separate [Vals Nonthinking](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514) reports **GPQA 69.44% ±2.31**, AIME **38.5%**. Anthropic itself reports [GPQA **70.0% without extended thinking**](https://www.anthropic.com/news/claude-4). These configurations explain the gap; do not average them as repeated identical tests.
- **Coding:** Anthropic's [SWE-bench Verified **72.7%**](https://www.anthropic.com/news/claude-4) is **without extended thinking** under a simple bash/file-edit scaffold over all 500 tasks. Its **80.2%** *high-compute* result uses parallel attempts, visible-test rejection and an internal reranker; not a single-call pass rate. Independent [Vals Thinking LiveCodeBench **62.39% ±1.13**](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking) tests code questions rather than repository repairs. No independent standard-harness exact-model SWE resolution found in reviewed pages.
- **Vision / context:** Independent [Vals Thinking MMMU Pro **74.93% ±1.04**](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking); Nonthinking [72.39% ±1.07](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514). These corroborate image analysis, not video processing. Historical 200K capacity has no independently verified near-window recall score here.

### Normalized scores (1–100)

- **Tool use: 70/100.** Parallel tools and thinking-with-tools, Vals applied-task results, but no comparable exact-model default TAU replication.
- **Reasoning: 74/100.** Vals GPQA 75/AIME 76.3 thinking versus weaker nonthinking; mode-dependent.
- **Context window: 70/100.** Historical 200K/64K, no near-cap recall evaluation confirmed.
- **Multimodal: 69/100.** Vals MMMU Pro ~75 with images; no native audio/video.
- **Coding: 76/100.** Vendor standard single-scaffold SWE 72.7; high-compute 80.2 not equivalent, Vals LCB 62.39.
- **Cost efficiency: 53/100.** Historical $3/$15 and reasoning latency, with endpoint retired.
- **Overall Score: 72/100.** Half-up mean (70 + 74 + 70 + 69 + 76) / 5 = 71.8. Historically capable coding model, not currently available at the original first-party ID.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01
- Method: Three fresh search queries during native-search outage, Anthropic launch and retirement notice, independent Vals thinking/nonthinking profiles. Separated 500-task single-scaffold from high-compute reranking and thinking from nonthinking; category scores interpret evidence.
- Reference URLs:
  - [Anthropic Claude 4 announcement and evaluation methodology](https://www.anthropic.com/news/claude-4)
  - [Anthropic retirement and API status](https://platform.claude.com/docs/en/about-claude/model-deprecations)
  - [Vals Sonnet 4 thinking evaluation](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking)
  - [Vals Sonnet 4 nonthinking evaluation](https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
