# Claude Sonnet 4.6 — findings by GPT-6.1 Terra

- Source: Anthropic `claude-sonnet-4-6`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's legacy Sonnet model for coding, computer use and long-context agents.
- **Provider / access:** Anthropic Messages API `claude-sonnet-4-6`, plus partner clouds.
- **Release / knowledge:** Released 2026-02-17; reliable knowledge cutoff August 2025, training cutoff January 2026.
- **IDs:** Anthropic `claude-sonnet-4-6`.
- **Context window:** 1M tokens, 128K synchronous output; 300K output is a separate batch beta.
- **Modalities:** Text and image input, text output; adaptive thinking and tool use.
- **Pricing (2026-11-01):** Anthropic $3 input / $15 output / $0.30 cache read per million; cache writes cost extra.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **57.30% ± 0.65**; Vals's earlier Terminal-Bench 2.0 result was **59.55%**, a distinct version.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **85.61% ± 2.41**; MMLU Pro **87.34% ± 0.43**.
- HLE: no verified Sonnet 4.6 score found in accessible current sources for this review.

Coding:

- Vals LiveCodeBench **82.09% ± 1.06**, Vibe Code Bench v1.1 **51.48% ± 4.64**; Anthropic reports SWE-bench Verified **80.2%** with a prompt modification.

Long context:

- Anthropic documents 1M context; no verified 512K-plus retrieval result found.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB 2.1 and documented computer-use support are useful evidence, capped by missing broader tool benchmarks.
- **Reasoning: 85/100.** Vals GPQA and MMLU Pro indicate strong general knowledge; HLE is not verified here.
- **Context window: 96/100.** Vendor specifies 1M, without verified 512K-plus retrieval accuracy.
- **Multimodal: 65/100.** Text and image input with text output; audio and video are not listed on the model specification.
- **Coding: 82/100.** SWE-bench Verified and LiveCodeBench are strong, tempered by Vals Vibe Code.
- **Cost efficiency: 60/100.** $3/$15 per million base price with discounted cache reads.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; suited to document and software agents where visual input is useful.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Anthropic specifications and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Anthropic model specifications](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)
  - [Anthropic launch and evaluation notes](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Vals evaluation](https://www.vals.ai/models/anthropic_claude-sonnet-4-6)
- Future sources: add a separate signed findings file alongside this one.
