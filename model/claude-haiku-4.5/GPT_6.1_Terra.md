# Claude Haiku 4.5 — findings by GPT-6.1 Terra

- Source: Anthropic `claude-haiku-4-5-20251001`, thinking mode
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's lower-cost multimodal model for fast assistant and coding tasks.
- **Provider / access:** Anthropic Messages API `claude-haiku-4-5-20251001`; results below use Vals thinking mode.
- **Release / knowledge:** Vals lists 2025-10-15; knowledge cutoff not verified.
- **Context window:** Vals lists 200K and 64K maximum output.
- **Modalities:** Text and image input; text output and tool calls.
- **Pricing:** Vals lists $1 input / $5 output per million; caching and service costs are separate.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

- Vals thinking-mode Terminal-Bench 2.1 **43.82% ± 1.95**, Finance Agent v2 **31.01% ± 0.56**.
- Vals GPQA Diamond **72.22% ± 2.47**, MMLU Pro **78.72% ± 0.48**, MMMU Pro **46.07% ± 1.20**.
- Vals LiveCodeBench **41.17% ± 1.11**, SWE-bench **66.60% ± 2.11** (variant unspecified on current model page), Vibe Code v1.1 **11.39% ± 3.13** and Code Migration **7.55% ± 1.06**.
- No verified full-window retrieval result found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Vals terminal and finance-agent results are modest.
- **Reasoning: 72/100.** Independent GPQA and MMLU support competent reasoning.
- **Context window: 70/100.** 200K listed; no full-window retrieval test verified.
- **Multimodal: 65/100.** Image and text input with text output; Vals reports MMMU Pro.
- **Coding: 64/100.** Vals SWE is stronger than LiveCodeBench, migration and Vibe Code.
- **Cost efficiency: 82/100.** $1/$5 per million on evaluated route.
- **Overall Score: 67/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Vals independent evaluation of the dated thinking configuration; normalized scores are interpretations.
- Reference URLs:
  - [Vals dated thinking evaluation](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking)
