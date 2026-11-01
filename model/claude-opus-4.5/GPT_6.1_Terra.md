# Claude Opus 4.5 — findings by GPT-6.1 Terra

- Source: Anthropic `claude-opus-4-5-20251101`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's legacy Opus model for coding, agents and computer use.
- **Provider / access:** Anthropic Messages API `claude-opus-4-5-20251101`, plus partner clouds.
- **Release / knowledge:** Released 2025-11-24; reliable cutoff May 2025, training cutoff August 2025.
- **IDs:** `claude-opus-4-5-20251101`; alias `claude-opus-4-5`.
- **Context window:** 200K total and 64K maximum output on Anthropic's current specification.
- **Modalities:** Text and image input, text output; extended thinking and tool use.
- **Pricing (2026-11-01):** $5 input / $25 output / $0.50 cached read per million; cache writes cost extra.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **53.93% ± 5.31** for its thinking deployment. Anthropic reports BrowseComp-Plus **70.48%** without its combined context/subagent techniques and **85.30%** with them.

Reasoning / knowledge:

- Vals GPQA Diamond **85.86% ± 2.48**, MMLU Pro **87.26% ± 0.38**; no verified exact-model HLE number found in reviewed sources.

Coding:

- Vals LiveCodeBench **83.67% ± 1.04**, Vibe Code Bench v1.1 **20.63% ± 3.16**, SWE-bench **76.40% ± 1.90**; its historical update identifies SWE-bench Verified.

Long context:

- Anthropic specifies 200K; no verified full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vals TB 2.0 and vendor search-agent results support tool use; scaffolds are separately identified.
- **Reasoning: 85/100.** Vals GPQA and MMLU indicate strong general reasoning.
- **Context window: 70/100.** Vendor specifies 200K; no verified full-window retrieval accuracy.
- **Multimodal: 65/100.** Text and image input, text output; audio and video input not specified.
- **Coding: 77/100.** Vals SWE and LiveCodeBench are tempered by lower Vibe Code.
- **Cost efficiency: 50/100.** $5/$25 per million with discounted cache reads.
- **Overall Score: 75/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Anthropic specifications and independent Vals thinking-deployment evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Anthropic model specifications](https://platform.claude.com/docs/en/models/opus-4-5/overview)
  - [Anthropic announcement and evaluation notes](https://www.anthropic.com/news/claude-opus-4-5)
  - [Vals thinking evaluation](https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking)
- Future sources: add a separate signed findings file alongside this one.
