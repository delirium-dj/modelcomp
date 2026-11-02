# Muse Glimmer 30B — findings by GPT-6.1 Terra

- Source: Meta `meta-models/Muse-Glimmer-30B`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weight local agent model tuned for tool use, coding and long-running tasks.
- **Provider / access:** Downloadable `meta-models/Muse-Glimmer-30B`; local hardware or hosted inference required.
- **Release / knowledge:** Exact release date and knowledge cutoff not independently verified here.
- **Context window:** Third-party hardware comparison lists 128K; full-window retrieval evidence is not established.
- **Modalities:** Text and image input, text output; tool use and configurable reasoning.
- **Pricing (2026-11-02):** Apache-2.0 weights have no model-license fee; compute and hosting cost extra.
- **Architecture:** 30B-class dense open model, Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Meta reports MCP Atlas public **75.5%**, DeepSearchQA **74.6%**, TAU3 Banking **23.5%**, and TerminalBench 2.1 **51.7%**, using high reasoning.

Reasoning / knowledge:

- Meta reports GPQA Diamond AA **83.5%**, HLE text AA **22.0%**, and AIME 2026 **94.7%**, high reasoning.

Coding:

- Meta reports SWE-bench Verified **76.0%**, SWE-bench Pro **51.2%**, and SciCode **43.6%**.

Long context and vision:

- Meta reports AA-LCR **80.0%**, Beam128K **65.1%**, MMMU-Pro **74%** and OmniDocBench v1.5 **75.8%**.

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP and search results are strong while TAU3 is much lower.
- **Reasoning: 83/100.** Vendor GPQA, HLE and math evaluations support strong model-size performance.
- **Context window: 65/100.** 128K listed; vendor Beam128K provides relevant retrieval evidence.
- **Multimodal: 65/100.** Image and text input with text output and multiple vendor vision tests.
- **Coding: 80/100.** Vendor SWE Verified, Pro and SciCode support coding ability, with differing task difficulty.
- **Cost efficiency: 90/100.** Open weights have no license fee; serving a 30B model still costs compute.
- **Overall Score: 74/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Meta model card and official benchmark table; normalized scores are interpretations.
- Reference URLs:
  - [Meta Muse Glimmer model page](https://dev.meta.ai/models/muse-glimmer)
  - [Meta Hugging Face model card](https://huggingface.co/meta-models/Muse-Glimmer-30B)
  - [NVIDIA model card reproducing benchmark table](https://build.nvidia.com/meta/muse-glimmer-30b/modelcard)
