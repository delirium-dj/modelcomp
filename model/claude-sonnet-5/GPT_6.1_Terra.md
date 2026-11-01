# Claude Sonnet 5 — findings by GPT-6.1 Terra

- Source: Anthropic `claude-sonnet-5`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's prior-generation Sonnet model for coding, reasoning and agents; now a legacy model.
- **Provider / access:** Anthropic Messages API `claude-sonnet-5`, also available via partner clouds.
- **Release / knowledge:** Released 2026-06-30; reliable knowledge cutoff January 2026.
- **IDs:** Anthropic `claude-sonnet-5`; no Zen Free ID independently verified.
- **Context window:** 1M context, 128k synchronous output; batch beta can offer 300k output.
- **Modalities:** Text and image input, text output; tools and adaptive thinking supported.
- **Pricing (2026-11-01):** Anthropic $2 input / $10 output per million, $0.20 cache reads; cache writes charged separately.
- **Architecture:** Proprietary, undisclosed parameters.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **74.53%**, high effort across three runs; Terminal-Bench 4.0 **10.61% ± 1.51** is a distinct and harder benchmark version.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **88.89% ± 2.22**, ProofBench v1.1 **77.00% ± 4.23**.
- HLE and CritPt: no verified public score found in accessible sources.

Coding:

- Vals Vibe Code Bench v1.1 **81.33% ± 3.05**, LiveCodeBench **82.43% ± 1.09**. Vals's release update reports SWE-bench Verified **75.49%**; effort and subsets can differ across results.

Long context:

- Anthropic documents 1M context; no verified 512K-plus retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 is strong, while TB 4.0 is lower; version and harness differences limit comparisons.
- **Reasoning: 87/100.** Vals GPQA and ProofBench support strong reasoning, without verified HLE here.
- **Context window: 96/100.** Documented 1M context but no verified long-context retrieval result.
- **Multimodal: 65/100.** Text and image input, text output; audio or video input is not documented in this model specification.
- **Coding: 86/100.** Vals coding results support capable agentic development, with different evaluation subsets noted.
- **Cost efficiency: 70/100.** Anthropic's $2/$10 per million is paid mid-tier pricing with cache discounts.
- **Overall Score: 83/100.** Half-up mean of five quality dimensions; suited to general coding and visual-document agents.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Vendor specifications and independent Vals evaluations; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Anthropic model specifications](https://platform.claude.com/docs/en/models/sonnet-5/overview)
  - [Anthropic launch](https://www.anthropic.com/news/claude-sonnet-5)
  - [Vals evaluation](https://www.vals.ai/models/anthropic_claude-sonnet-5)
- Future sources: add a separate signed findings file alongside this one.
