# Qwen3.5-122B-A10B — findings by GPT 6 Sol

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** February 24, 2026 Apache-2.0, open-weight **122B total / 10B active** multimodal MoE, different from the 397B and 35B checkpoints ([Qwen official weights/card](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)).
- **Provider / access:** Self-hosted Qwen weights or Alibaba Cloud Model Studio `qwen3.5-122b-a10b`; reasoning on/off are modes of the **same weights**, not separate models ([Qwen card](https://huggingface.co/Qwen/Qwen3.5-122B-A10B), [Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-122b-a10b)). No verified Zen Free route.
- **Release / knowledge:** February 24, 2026 ([Qwen release log](https://github.com/QwenLM/Qwen3.8)); no exact training cutoff established by reviewed official card.
- **Context window:** **262,144 native**, optional YaRN RoPE scaling to **~1,010,000** with short-input tradeoffs; Alibaba hosted maximum input **260,096** (thinking **258,048**) and output **65,536**. Scaled capacity is not an independently tested 1M recall result ([Qwen](https://huggingface.co/Qwen/Qwen3.5-122B-A10B), [Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-122b-a10b)).
- **Modalities:** Text, image, video input; text output; tool/function calling depends on hosting. [Artificial Analysis's deployment](https://artificialanalysis.ai/models/qwen3-5-122b-a10b) lists only image/text input, whereas Qwen's self-hosted card and Alibaba's service explicitly support video; these are platform differences, not separate weights.
- **Pricing (2026-10-31):** Weights have no license token fee; inference hardware is substantial. Alibaba Singapore **$0.40 input/$3.20 output per 1M**; US/Frankfurt/Beijing short input ≤128K **$0.115/$0.917**, 128K–256K **$0.287/$2.294**. Alibaba explicitly says **no context caching/batch** for this ID ([region rates](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-122b-a10b)).
- **Architecture:** 48-layer Gated DeltaNet/global-attention hybrid, sparse 256 experts with eight routed + one shared, vision encoder; published as 122B/10B rounded ([Qwen](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)).

### Raw benchmarks found

- **Agent/tool use:** [Qwen's thinking-mode table](https://huggingface.co/Qwen/Qwen3.5-122B-A10B) reports **BFCL-v4 72.2%, τ²-Bench 79.5%, BrowseComp 63.8%, OSWorld-Verified 58.0%**. Search-agent scores used history pruning at 256K; τ² airline used published fixes. Independent [HF community evaluation listing](https://huggingface.co/Qwen/Qwen3.5-122B-A10B) repeats Terminal-Bench 2.0 **49.4%** on its particular harness, but the embedded row links to the vendor's results; it is not an independent rerun merely by appearing on HF.
- **Reasoning:** Vendor [GPQA Diamond **86.6%**, MMLU Pro **86.7%**, HLE with CoT **25.3%**, HMMT Feb 2025 **91.4%**](https://huggingface.co/Qwen/Qwen3.5-122B-A10B). The [HF community GPQA submission](https://huggingface.co/Qwen/Qwen3.5-122B-A10B/discussions/24) separately lists **84.85%** with an evaluation artifact; its difference from Qwen's 86.6 is expected under different prompts/samples. [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-122b-a10b) currently reports **N/A v5 Index**, not 0.
- **Coding:** Vendor [SWE-bench Verified **72.0%**, Terminal-Bench 2 **49.4%**, LiveCodeBench v6 **78.9%**](https://huggingface.co/Qwen/Qwen3.5-122B-A10B). Repository/terminal tasks fall short of code-question success; self-host tool parser and prompt protocol affect comparability.
- **Long context / vision:** Vendor [AA-LCR **66.9%**, LongBench v2 **60.2%**, MMMU Pro **76.9%**, VideoMME with subtitles **87.3%**](https://huggingface.co/Qwen/Qwen3.5-122B-A10B). Those long-context tests do not validate YaRN at 1M. Hosted AA profile corroborates Apache-2.0 license and 262K native, but no maintained independent v5 index or comparable video result ([AA](https://artificialanalysis.ai/models/qwen3-5-122b-a10b)).

### Normalized scores (1–100)

- **Tool use: 73/100.** Vendor BFCL 72.2/τ² 79.5 versus Terminal-Bench 49.4; limited independent agent evidence.
- **Reasoning: 77/100.** Vendor GPQA 86.6/HLE 25.3; community GPQA 84.85 at a different setting.
- **Context window: 76/100.** Native 262K and optional 1M scaling, without near-cap recall confirmation.
- **Multimodal: 77/100.** Vendor MMMU Pro 76.9 and video input/VideoMME 87.3; no audio or multimodal output.
- **Coding: 71/100.** Vendor SWE Verified 72/LCB 78.9/TB2 49.4; harness and deployment sensitivity.
- **Cost efficiency: 86/100.** Apache-2.0 10B-active MoE and competitive regional APIs, but 122B resident weights and long-input tariffs.
- **Overall Score: 75/100.** Half-up mean (73 + 77 + 76 + 77 + 71) / 5 = 74.8. Solid open multimodal agent candidate with mostly vendor-run task evidence.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three fresh exact-model searches, official Qwen weight/model card and Alibaba region API, independent HF GPQA artifact and AA coverage. Avoided treating listed vendor evaluation rows as independently rerun; scores interpret available evidence.
- Reference URLs:
  - [Qwen official model card, architecture and per-checkpoint benchmarks](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Alibaba hosted features, limits and regional prices](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-122b-a10b)
  - [HF community GPQA evaluation artifact](https://huggingface.co/Qwen/Qwen3.5-122B-A10B/discussions/24)
  - [Artificial Analysis profile and coverage status](https://artificialanalysis.ai/models/qwen3-5-122b-a10b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
