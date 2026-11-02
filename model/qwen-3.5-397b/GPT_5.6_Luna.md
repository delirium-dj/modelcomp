# Qwen 3.5 397B A17B — findings by GPT 5.6 Luna

- Source: Qwen / `Qwen3.5-397B-A17B`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B A17B
- **Short description:** Qwen's open-weight native vision-language foundation model for reasoning, coding, agents, document work, image understanding, and video understanding. `Qwen3.5-Plus` is the corresponding hosted product with extra production features, but its service limits are not substituted for the released weights here.
- **Provider / access:** Qwen open weights through Hugging Face, ModelScope, vLLM, SGLang, and other serving stacks; Alibaba Cloud Model Studio provides the corresponding hosted Qwen3.5-Plus route.
- **Release / knowledge:** Open-source release 2026-02-16; knowledge cutoff was not published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`; hosted counterpart `Qwen3.5-Plus` is recorded as a provider product, not a second folder identity.
- **Context window:** 262,144 native tokens; Qwen documents extension to about 1,010,000 with YaRN. The hosted Plus service's 1M default is not treated as the native weight limit.
- **Modalities:** Text, image, and video input; text output; thinking enabled by default with an instruct/non-thinking mode; tool/function calling through Qwen-Agent and compatible serving frameworks.
- **Pricing (as of 2026-11-02):** Open weights have no model-level API price; hosting and GPU cost vary. Any Alibaba Cloud price for Qwen3.5-Plus applies to the hosted counterpart, not directly to the downloaded weights.
- **Architecture:** Causal language model with vision encoder; 397B total / 17B activated sparse MoE with Gated DeltaNet and gated attention; Apache-2.0 license.

### Raw benchmarks found

> Exact model-card rows are distinguished from Qwen comparison-table and provider rows. The Qwen3.5-Plus service is not substituted for the open-weight `Qwen3.5-397B-A17B` identity.

Agent / tool use:

- BFCL v4 **72.9%**, τ²-Bench **86.7%**, VITA-Bench **49.7%**, DeepPlanning **34.3%**, Tool Decathlon **38.3%**, MCPMark **46.1%**, and BrowseComp **69.0% / 78.6%** under two context-management strategies (Qwen model-card comparison table).
- OSWorld-Verified **62.2%**, QwenClawBench **51.8%**, Claw-Eval **56.8%**, and Terminal-Bench 2.0 **52.5%** (model card/provider comparison rows).
- BenchLM composite: **55.47/100**, rank **#71/1004**, with 71/724 benchmarks covered; its coverage is explicitly partial.

Reasoning / knowledge:

- GPQA **88.4%**, HLE **28.7%**, LongBench v2 **63.2%**, AA-LCR **77.3%**, and CritPt **1.7%** (Qwen model card and Artificial Analysis).
- MMLU-Pro **87.8%**, MMLU-Redux **94.9%**, SuperGPQA **70.4%**, and AIME26 **93.3%** (Qwen comparison table).

Coding:

- SWE-bench Verified **76.4%**, SWE-bench Multilingual **69.3%**, LiveCodeBench v6 **83.6%**, and Terminal-Bench 2.0 **52.5%** (Qwen model-card/provider rows).
- BenchLM lists SWE-bench Verified **76.2%**, SWE-bench Pro **50.9%**, AA-SciCode **44.8%**, and Terminal-Bench 2.0 **52.5%**; these external rows remain labelled separately.

Multimodal:

- Exact model-card rows include MMMU **85.0%**, RealWorldQA **83.9%**, OmniDocBench 1.5 **90.8%**, Video-MME with/without subtitles **87.5% / 83.7%**, and OSWorld-Verified **62.2%**.
- MMMU-Pro **79.0%**, MathVision **88.6%**, DynaMath **86.3%**, and MMLongBench-Doc **61.5%** are also reported in Qwen's comparison table.

Long context:

- Native context: **262,144 tokens**; Qwen documents an extensible ~1.01M mode using YaRN. AA-LCR **77.3%** and LongBench v2 **63.2%** are measurable proxies, not proof of native 1M retrieval.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench 86.7%, BFCL 72.9%, MCPMark 46.1%, and strong agent support are good, while DeepPlanning 34.3%, Tool Decathlon 38.3%, and VITA 49.7% show uneven autonomous execution.
- **Reasoning: 81/100.** GPQA 88.4%, MMLU-Pro 87.8%, and AIME26 93.3% are strong, but HLE 28.7%, CritPt 1.7%, and LCR 77.3% cap broad reasoning confidence.
- **Context window: 82/100.** Native 262K is substantial and YaRN can extend it toward 1M, but long-context extension is not equivalent to a native 1M guarantee.
- **Multimodal: 90/100.** Native vision-language and video input plus MMMU 85%, OmniDocBench 90.8%, and Video-MME 87.5% establish unusually broad visual/document capability; output remains text.
- **Coding: 84/100.** SWE-bench Verified 76.4%, LiveCodeBench 83.6%, and Terminal-Bench 52.5% are strong, while SWE-Pro 50.9% and AA-SciCode 44.8% cap production-agent confidence.
- **Cost efficiency: 90/100.** Open Apache-2.0 weights and sparse 17B activation are attractive, but serving a 397B model still has substantial hardware and throughput costs.
- **Overall Score: 83.8/100.** Mean of the five quality dimensions `(82 + 81 + 82 + 90 + 84) / 5 = 83.8`; best fit is self-hosted or controlled multimodal agent work where vision breadth matters more than minimal deployment cost.

## Evidence notes

- Qwen3.5-397B-A17B's 262K native context and local-weight benchmarks are kept separate from the hosted Qwen3.5-Plus service, which advertises a 1M context and additional built-in tools.
- BenchLM's 55.47 composite is partial external coverage; the normalized Overall above excludes Cost efficiency and is not a replacement for the BenchLM rank.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Qwen/Hugging Face model card and Alibaba release information, BenchLM's October 29 profile, and the labelled Qwen comparison/provider rows. Open-weight versus hosted-product identity, native versus extended context, and benchmark source/version differences were preserved; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-397B-A17B model card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Alibaba Qwen3.5 release](https://www.alibabagroup.com/document-1960233590314762240)
  - [BenchLM Qwen3.5 397B profile](https://benchlm.ai/models/qwen3-5-397b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
