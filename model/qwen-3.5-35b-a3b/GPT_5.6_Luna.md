# Qwen3.5-35B-A3B - findings by GPT 5.6 Luna

- Source: Qwen (`Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** An open-weight multimodal Qwen3.5 mixture-of-experts model for reasoning, coding, visual understanding, and agentic tool use.
- **Provider / access:** Hugging Face weights; the official card documents Transformers, vLLM, SGLang, KTransformers, Qwen-Agent, Qwen Code, and Alibaba Cloud Model Studio access.
- **Release / knowledge:** The exact release date and knowledge cutoff were not stated in the verified card.
- **IDs:** `Qwen/Qwen3.5-35B-A3B`
- **Context window:** 262,144 tokens natively; extensible to 1,010,000 with YaRN (official card).
- **Modalities:** Text, image, and video input with text output; thinking mode, tool calls, and visual-agent benchmarks are documented.
- **Pricing (as of 2026-10-23):** No verified hosted per-token price found for the exact checkpoint. Apache-2.0 open weights support local deployment.
- **Architecture:** 35B total / 3B activated MoE parameters with 256 experts, 8 routed plus 1 shared active expert, Apache-2.0.

### Raw benchmarks found

> All figures below are for the exact Qwen3.5-35B-A3B checkpoint and are from the official Qwen Hugging Face model card.

Agent / tool use:

- BFCL-V4: **67.3%**
- TAU2-Bench: **81.2%**
- VITA-Bench: **31.9%**
- DeepPlanning: **22.8%**
- HLE with tool: **47.4%**
- BrowseComp: **61.0%**

Reasoning / knowledge:

- MMLU-Pro: **85.3%**
- GPQA Diamond: **84.2%**
- HLE with CoT: **22.4%**
- HMMT Feb 25: **89.0%**
- SuperGPQA: **63.4%**
- IFEval: **91.9%**

Coding:

- SWE-bench Verified: **69.2%**
- Terminal Bench 2: **40.5%**
- LiveCodeBench v6: **74.6%**
- CodeForces: **2028 Elo**
- OJBench: **36.0%**

Long context:

- AA-LCR: **58.5%**
- LongBench v2: **59.0%**
- Native context: **262,144 tokens**; YaRN extension documented to **1,010,000 tokens**.

Multimodal:

- MMMU: **81.4%**; MMMU-Pro: **75.1%**
- MathVision: **83.9%**; MathVista mini: **86.2%**
- RealWorldQA: **84.1%**; MMBenchEN-DEV: **91.5%**
- VideoMME with subtitles / without subtitles: **86.6% / 82.5%**
- OSWorld-Verified: **54.5%**; AndroidWorld: **71.1%**

### Normalized scores (1-100)

- **Tool use: 80/100.** TAU2-Bench 81.2% and HLE with tool 47.4% are strong, while DeepPlanning 22.8% and VITA-Bench 31.9% cap long-horizon breadth.
- **Reasoning: 84/100.** MMLU-Pro 85.3%, GPQA Diamond 84.2%, and HMMT 89.0% are excellent; HLE 22.4% remains difficult.
- **Context window: 78/100.** Native 262K context is useful and the model reports AA-LCR 58.5% and LongBench v2 59.0%; the 1.01M figure is a YaRN extension, not native retrieval.
- **Multimodal: 81/100.** Strong image and video scores are balanced by moderate visual-agent results, especially OSWorld-Verified at 54.5%.
- **Coding: 73/100.** Codeforces 2028 Elo and LiveCodeBench 74.6% are good, while SWE-bench 69.2%, Terminal Bench 2 40.5%, and OJBench 36.0% limit the score.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and local deployment make the model highly cost-efficient, although hardware cost was not quantified.
- **Overall Score: 79/100.** A strong open multimodal model for reasoning, code, and tool-assisted workflows where local deployment is preferred.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-23
- Method: Official Qwen Hugging Face model card and exact-name web checks; scores are normalized interpretations, not official vendor scores.
