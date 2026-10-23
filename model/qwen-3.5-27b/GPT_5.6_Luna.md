# Qwen3.5-27B - findings by GPT 5.6 Luna

- Source: Qwen (`Qwen/Qwen3.5-27B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** An open-weight multimodal Qwen3.5 model for reasoning, coding, visual understanding, and agentic tool use.
- **Provider / access:** Hugging Face weights; the official card documents Transformers, vLLM, SGLang, KTransformers, Qwen-Agent, Qwen Code, and DashScope-compatible serving.
- **Release / knowledge:** The exact release date and knowledge cutoff were not stated in the verified card.
- **IDs:** `Qwen/Qwen3.5-27B`
- **Context window:** 262,144 tokens natively; extensible to 1,010,000 with YaRN (official card).
- **Modalities:** Text, image, and video input with text output; thinking mode, tool calls, and visual-agent benchmarks are documented.
- **Pricing (as of 2026-10-23):** No verified hosted per-token price found for the exact checkpoint. Apache-2.0 open weights support local deployment.
- **Architecture:** 27B causal language model with vision encoder, gated DeltaNet/gated-attention hybrid, Apache-2.0.

### Raw benchmarks found

> All figures below are for the exact Qwen3.5-27B checkpoint and are from the official Qwen Hugging Face model card.

Agent / tool use:

- BFCL-V4: **68.5%**
- TAU2-Bench: **79.0%**
- VITA-Bench: **41.9%**
- DeepPlanning: **22.6%**
- BrowseComp: **61.0%**

Reasoning / knowledge:

- MMLU-Pro: **86.1%**
- GPQA Diamond: **85.5%**
- HLE with CoT: **24.3%**
- HMMT Feb 25: **92.0%**
- SuperGPQA: **65.6%**

Coding:

- SWE-bench Verified: **72.4%**
- Terminal-Bench 2: **41.6%**
- LiveCodeBench v6: **80.7%**
- OJBench: **40.1%**

Long context:

- AA-LCR: **66.1%**
- LongBench v2: **60.6%**
- Native context: **262,144 tokens**; YaRN extension documented to **1,010,000 tokens**.

Multimodal:

- MMMU: **82.3%**; MMMU-Pro: **75.0%**
- MathVision: **86.0%**; MathVista mini: **87.8%**
- RealWorldQA: **83.7%**; MMBenchEN-DEV: **92.6%**
- VideoMME with subtitles / without subtitles: **87.0% / 82.8%**
- OSWorld-Verified: **56.2%**; AndroidWorld: **64.2%**

### Normalized scores (1-100)

- **Tool use: 78/100.** BFCL-V4 68.5% and TAU2-Bench 79.0% are strong, while DeepPlanning 22.6% limits long-horizon reliability.
- **Reasoning: 86/100.** MMLU-Pro 86.1%, GPQA Diamond 85.5%, and HMMT 92.0% are excellent; HLE 24.3% caps the score.
- **Context window: 82/100.** Native 262K context plus strong AA-LCR 66.1% and LongBench v2 60.6% provide useful long-context evidence; the 1.01M figure is an extension, not a native measurement.
- **Multimodal: 82/100.** Strong image and video scores across MMMU, MathVista, MMBench, and VideoMME are balanced by more modest visual-agent results.
- **Coding: 76/100.** LiveCodeBench 80.7% and SWE-bench Verified 72.4% are strong, with Terminal-Bench 2 at 41.6% showing weaker end-to-end terminal performance.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and local deployment make the model highly cost-efficient, although hardware cost was not quantified.
- **Overall Score: 80.8/100.** A strong open multimodal model for coding, reasoning, and tool workflows where local deployment and broad modality support matter.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-23
- Method: Official Qwen Hugging Face model card and exact-name web checks; scores are normalized interpretations, not official vendor scores.
