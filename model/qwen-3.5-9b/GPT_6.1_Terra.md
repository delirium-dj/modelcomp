# Qwen3.5-9B — findings by GPT-6.1 Terra

- Source: Qwen `Qwen/Qwen3.5-9B`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Qwen's 9B dense open-weight vision-language reasoning model.
- **Provider / access:** Download `Qwen/Qwen3.5-9B`; compatible self-hosted Chat Completions APIs and hosted routes vary.
- **Release / knowledge:** Exact release date and knowledge cutoff not verified.
- **IDs:** `Qwen/Qwen3.5-9B`.
- **Context window:** Model card specifies native 262,144 tokens; longer extension uses configuration changes and may affect performance.
- **Modalities:** Text, images and video input; text output and tool use via serving framework.
- **Pricing (as of 2026-11-02):** Apache-2.0 weights available for self-hosting; inference compute and hosting cost extra.
- **Architecture:** 9B dense language model with vision encoder, Apache-2.0.

### Raw benchmarks found

- Qwen's model card reports GPQA Diamond **81.7%**, MMLU-Pro **82.5%**, LiveCodeBench v6 **65.6%**, and BFCL v4 **66.1%** for 9B.
- Qwen reports TAU2-Bench **79.1%** with its documented airline-domain fixes; the figure is not directly comparable to unmodified runs.
- No full-window retrieval score or exact-model SWE-bench score verified.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor BFCL and modified TAU2 support capability, with setup caveats.
- **Reasoning: 78/100.** Vendor GPQA and MMLU support capable reasoning.
- **Context window: 74/100.** Native 262K documented; full-window retrieval unverified.
- **Multimodal: 70/100.** Images and video input with text output.
- **Coding: 68/100.** LiveCodeBench is moderate; no verified SWE result.
- **Cost efficiency: 94/100.** Apache weights can be run locally, but hardware and electricity cost extra.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Qwen's exact 9B model card and benchmark table; scores are interpretations.
- Reference URLs:
  - [Qwen model card](https://huggingface.co/Qwen/Qwen3.5-9B)
