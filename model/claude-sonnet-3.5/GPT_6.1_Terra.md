# Claude 3.5 Sonnet — findings by GPT-6.1 Terra

- Source: Anthropic `claude-3-5-sonnet-20241022`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic's October 2024 upgraded snapshot, distinct from the June release.
- **Provider / access:** Historical Anthropic Messages API `claude-3-5-sonnet-20241022`; retired on the Claude API.
- **Release / knowledge:** 2024-10-22; April 2024 knowledge cutoff.
- **IDs:** `claude-3-5-sonnet-20241022`.
- **Context window:** 200K; Vals lists 8,192 output tokens.
- **Modalities:** Text and image input, text output and tool calls.
- **Pricing (as of 2026-11-02):** Vals lists historical $3 input / $15 output per million; retired direct route.
- **Architecture:** Proprietary, parameters undisclosed.

### Raw benchmarks found

- Anthropic reports TAU-bench **69.2% retail / 46.0% airline**, GPQA Diamond **65.0%** zero-shot chain-of-thought, and SWE-bench Verified **49.0%** for the upgraded model.
- Independent Vals reports GPQA Diamond **59.34% ± 2.47**, LiveCodeBench **49.63% ± 1.14**, MMLU Pro **78.40% ± 0.40**, and MMMU Pro **68.80% ± 1.11**. Settings differ from Anthropic's.
- No full-window retrieval result verified.

### Normalized scores (1–100)

- **Tool use: 65/100.** TAU results vary substantially by domain.
- **Reasoning: 63/100.** Vendor and Vals GPQA indicate moderate science reasoning.
- **Context window: 70/100.** 200K listed without verified full-window retrieval.
- **Multimodal: 65/100.** Image and text input with text output; Vals evaluates vision.
- **Coding: 64/100.** SWE Verified and Vals LiveCodeBench show moderate historical performance.
- **Cost efficiency: 60/100.** Historical $3/$15 per million; direct snapshot retired.
- **Overall Score: 65/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Anthropic October addendum and independent Vals snapshot; scores are interpretations.
- Reference URLs:
  - [Anthropic model card addendum](https://www-cdn.anthropic.com/c7822cdc35ad788ec87e14b3a9d45010f1f86c38.pdf)
  - [Vals dated model evaluation](https://www.vals.ai/models/anthropic_claude-3-5-sonnet-20241022)
  - [Snapshot retirement and historical specs](https://ai-tldr.dev/models/claude-3-5-sonnet-v2)
