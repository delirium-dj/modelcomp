# GPT-5.1-Codex-Max — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.1-codex-max`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's long-running agentic coding model, distinct from GPT-5.1-Codex.
- **Provider / access:** OpenAI Responses API `gpt-5.1-codex-max`; OpenAI now marks it shut down.
- **Release / knowledge:** Announced November 2025; cutoff 2024-09-30.
- **Context window:** 400K total, 128K maximum output. Task compaction across windows is not one continuous model window.
- **Modalities:** Text and image input, text output; function calling and reasoning.
- **Pricing:** Historical OpenAI listing $1.25 input / $10 output / $0.125 cached per million.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

- OpenAI xhigh Codex harness: Terminal-Bench 2.0 **58.1%**, SWE-Lancer IC SWE **79.9%**, SWE-bench Verified **77.9%** with compaction enabled.
- Vals high reasoning: LiveCodeBench **83.56% ± 1.05** and Vibe Code v1.1 **22.17% ± 3.84**; independent setup differs.
- No exact-model GPQA or full-window retrieval result verified; standard GPT-5.1 scores are not substituted.

### Normalized scores (1–100)

- **Tool use: 79/100.** Vendor terminal and SWE-Lancer show capable agentic coding.
- **Reasoning: 73/100.** Provisional without an exact-model general-science benchmark.
- **Context window: 80/100.** 400K documented; compaction across windows is not a larger native window.
- **Multimodal: 65/100.** Text and image input with text output.
- **Coding: 80/100.** Vendor SWE and Vals LiveCodeBench are tempered by Vibe Code.
- **Cost efficiency: 70/100.** Historical $1.25/$10 per million; direct route is shut down.
- **Overall Score: 75/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: OpenAI documentation and benchmark table, independently supplemented by Vals.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
  - [OpenAI evaluation table](https://openai.com/index/gpt-5-1-codex-max/)
  - [Vals evaluation](https://www.vals.ai/models/openai_gpt-5.1-codex-max)
