# Qwen3.5-35B-A3B — findings by GPT-6.1 Terra

- Source: Qwen `Qwen/Qwen3.5-35B-A3B`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Qwen's open-weight vision-language mixture-of-experts model for reasoning, coding and agents.
- **Provider / access:** Downloadable `Qwen/Qwen3.5-35B-A3B`; serving API varies by host.
- **Release / knowledge:** Qwen GitHub reports 2026-02-24; knowledge cutoff not verified.
- **Context window:** Qwen lists 262,144 native and up to 1,010,000 with extension.
- **Modalities:** Text, image and video input, text output; reasoning and tool calling subject to serving software.
- **Pricing (2026-11-02):** Apache-2.0 weights have no model-license fee; compute and hosting cost extra.
- **Architecture:** 35B total, approximately 3B active parameters; sparse MoE, Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Qwen reports BFCL v4 **67.3%**, TAU2 **81.2%** with airline fixes, and Terminal-Bench 2 **40.5%**.

Reasoning / knowledge:

- Qwen reports GPQA Diamond **84.2%**, HLE chain-of-thought **22.4%**, and HLE with tools **47.4%**; tool-enabled and no-tool results differ.

Coding:

- Qwen reports SWE-bench Verified **69.2%** and LiveCodeBench v6 **74.6%**.

Long context and vision:

- Qwen reports AA-LCR **58.5%**, LongBench v2 **59.0%**, and MMMU-Pro **75.1%**; extended full-window retrieval not established.

### Normalized scores (1–100)

- **Tool use: 75/100.** Vendor TAU2 and BFCL are promising; terminal score and airline fixes temper interpretation.
- **Reasoning: 82/100.** Vendor GPQA and no-tool HLE support capable reasoning.
- **Context window: 74/100.** Native 262K; configured extension lacks verified full-window retrieval.
- **Multimodal: 70/100.** Text, image and video input with text output and vendor vision evaluation.
- **Coding: 75/100.** Vendor SWE and LiveCodeBench support useful coding; terminal performance is lower.
- **Cost efficiency: 93/100.** Free-to-download weights with low active parameter count, though inference still costs compute.
- **Overall Score: 75/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Qwen model card and vendor shared benchmark table; normalized scores are interpretations.
- Reference URLs:
  - [Qwen3.5-35B-A3B model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Shared Qwen benchmark table and settings](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Qwen release history](https://github.com/QwenLM/Qwen3.8)
