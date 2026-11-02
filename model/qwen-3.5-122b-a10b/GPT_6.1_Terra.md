# Qwen3.5-122B-A10B — findings by GPT-6.1 Terra

- Source: Qwen `Qwen/Qwen3.5-122B-A10B`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Qwen's open-weight multimodal mixture-of-experts model for reasoning, coding and agent tasks.
- **Provider / access:** Downloadable post-trained weights `Qwen/Qwen3.5-122B-A10B`; serving API and configuration depend on host.
- **Release / knowledge:** Exact release date and knowledge cutoff not verified.
- **IDs:** `Qwen/Qwen3.5-122B-A10B`.
- **Context window:** 262,144 native, extensible to 1,010,000 tokens according to the model card; extension requires serving configuration.
- **Modalities:** Text, image and video input; text output; reasoning and tools supported by appropriate serving software.
- **Pricing (2026-11-02):** Apache-2.0 weights downloadable without a model-license fee; compute and hosted inference cost extra and vary by provider.
- **Architecture:** 122B total, 10B active parameters; hybrid Gated DeltaNet / gated attention and sparse MoE, Apache-2.0 license.

### Raw benchmarks found

Agent / tool use:

- Qwen reports BFCL v4 **72.2%**, TAU2 **79.5%** with airline-domain fixes, Terminal-Bench 2 **49.4%**, and BrowseComp **63.8%** with a context-folding search-agent setup.

Reasoning / knowledge:

- Qwen reports GPQA Diamond **86.6%**, HLE with chain of thought **25.3%**, and HLE with tools **47.5%**; tool and no-tool settings are distinct.

Coding:

- Qwen reports SWE-bench Verified **72.0%** and LiveCodeBench v6 **78.9%**.

Long context and vision:

- Qwen reports AA-LCR **66.9%** and LongBench v2 **60.2%**; these do not establish retrieval accuracy at the extended 1,010,000-token limit. Its vision table reports MMMU-Pro **76.9%**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vendor BFCL and TAU2 are promising; terminal performance and modified airline setup temper confidence.
- **Reasoning: 85/100.** Vendor GPQA and no-tool HLE support strong reasoning; independent replication is not established here.
- **Context window: 74/100.** 262K native; the longer limit is a configured extension with no verified full-window retrieval result.
- **Multimodal: 70/100.** Text, image and video input with text output; vendor MMMU-Pro supports visual understanding but no native audio generation is documented.
- **Coding: 78/100.** Vendor SWE-bench Verified and LiveCodeBench support coding ability; terminal results are lower.
- **Cost efficiency: 85/100.** Open weights have no model-license fee, but hosting a 122B-parameter model incurs substantial compute cost.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Vendor model card and its disclosed evaluation settings; normalized scores are interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen model card and benchmark tables](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
- Future sources: add a separate signed findings file alongside this one.
