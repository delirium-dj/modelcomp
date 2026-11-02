# GPT-5.1-Codex — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.1-codex`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's agentic coding variant for Codex-like harnesses, distinct from GPT-5.1-Codex-Max.
- **Provider / access:** OpenAI Responses API `gpt-5.1-codex`; OpenAI now marks this model shut down.
- **Release / knowledge:** OpenAI announced API access 2025-11-13; knowledge cutoff 2024-09-30.
- **Context window:** 400K total and 128K maximum output per OpenAI.
- **Modalities:** Text and image input, text output; reasoning, structured outputs and function calling supported.
- **Pricing (historical OpenAI listing):** $1.25 input / $10 output / $0.125 cached input per million; route is shut down.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI reports Terminal-Bench 2.0 **52.8%** at high effort and SWE-Lancer IC SWE **66.3%**; results depend on the agent harness.

Reasoning / knowledge:

- No verified exact-model GPQA or HLE result found in OpenAI's cited Codex table; standard GPT-5.1 results are not substituted.

Coding:

- OpenAI reports SWE-bench Verified **73.7%** at high effort; the **77.9%** result belongs to Codex-Max xhigh and is excluded.

Long context:

- 400K advertised; no exact-model full-window retrieval result verified.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal and SWE-Lancer evaluations support capable coding-agent workflows.
- **Reasoning: 72/100.** Provisional, as general-science benchmarks for the exact Codex model were not verified.
- **Context window: 80/100.** 400K documented; no full-window retrieval result verified.
- **Multimodal: 65/100.** Text and image input, text output; no native audio or image generation documented.
- **Coding: 79/100.** OpenAI's exact-model SWE and terminal results indicate strong software performance.
- **Cost efficiency: 70/100.** Historical $1.25/$10 per million; the direct route is no longer available.
- **Overall Score: 74/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: OpenAI model documentation and Codex-Max comparison table; exact base Codex column only.
- Reference URLs:
  - [OpenAI GPT-5.1-Codex documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
  - [OpenAI evaluation table](https://openai.com/index/gpt-5-1-codex-max/)
