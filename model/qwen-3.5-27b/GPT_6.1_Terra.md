# Qwen3.5-27B — findings by GPT-6.1 Terra

- Source: Qwen `Qwen/Qwen3.5-27B`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Qwen's 27B open-weight vision-language model for reasoning, coding and agents; distinct from the 122B MoE model.
- **Provider / access:** Downloadable weights `Qwen/Qwen3.5-27B`; serving and API depend on host.
- **Release / knowledge:** Exact release date and knowledge cutoff not verified.
- **Context window:** 262,144 native, extensible to 1,010,000 tokens with configuration according to Qwen's model card.
- **Modalities:** Text, image and video input, text output; tool use depends on serving implementation.
- **Pricing (2026-11-02):** Apache-2.0 weights have no model-license fee; inference compute and hosted routes cost extra.
- **Architecture:** 27B dense model, open weights under Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Qwen reports BFCL v4 **68.5%**, TAU2 **79.0%** with airline-domain fixes, Terminal-Bench 2 **41.6%**, BrowseComp **61.0%** using a context-folding search agent.

Reasoning / knowledge:

- Qwen reports GPQA Diamond **85.5%**, HLE with chain of thought **24.3%**, HLE with tools **48.5%**; configurations are not interchangeable.

Coding:

- Qwen reports SWE-bench Verified **72.4%** and LiveCodeBench v6 **80.7%**.

Long context and vision:

- Qwen reports AA-LCR **66.1%**, LongBench v2 **60.6%**, and MMMU-Pro **75.0%**; full extended-window retrieval is not established.

### Normalized scores (1–100)

- **Tool use: 76/100.** BFCL and modified TAU2 support agent use; terminal performance is lower.
- **Reasoning: 84/100.** Vendor GPQA and HLE provide strong but vendor-reported evidence.
- **Context window: 74/100.** Native 262K, extendable by configuration; no full-extension retrieval accuracy verified.
- **Multimodal: 70/100.** Text, image and video input with text output and vendor visual evaluation.
- **Coding: 78/100.** Vendor SWE and LiveCodeBench indicate capable coding; terminal result tempers the score.
- **Cost efficiency: 90/100.** Open weights have no license fee, though local or hosted compute is not free.
- **Overall Score: 76/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Qwen model card and vendor benchmark tables; normalized scores are interpretations.
- Reference URLs:
  - [Qwen3.5-27B model card](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Qwen 122B card with shared benchmark table and settings](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
- Future sources: add a separate signed findings file alongside this one.
