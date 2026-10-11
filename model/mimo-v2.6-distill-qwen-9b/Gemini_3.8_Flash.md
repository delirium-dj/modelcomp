# MiMo V2.6 Distill Qwen 9B — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi MiMo's MIT-licensed 9B parameter dense agentic supervised fine-tune of Qwen3.5-9B, distilled from the 1.02T parameter MiMo-V2.6-Pro foundation model, offering 262K context window, native multimodal vision perception, and local self-hosted execution.
- **Provider / access:** [Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) open weights (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), self-hosted vLLM / SGLang / Ollama deployments.
- **Release / knowledge:** September 2026.
- **IDs:** `xiaomi/mimo-v2.6-distill-qwen-9b`, `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`
- **Context window:** 262,144 tokens total (262K context window; max output 16,384 tokens).
- **Modalities:** Multimodal input (text, image, and video); text and code output; tool calling and explicit thinking mode toggle (`enable_thinking`).
- **Pricing (as of 2026-10-11):** Free ($0.00) self-hosted under MIT open-weights license; lightweight memory footprint requiring ~5.8 GB VRAM at 4-bit quantization.
- **Architecture:** 9B dense distilled transformer based on Qwen3.5-9B with native multimodal vision projection and agentic trajectory tuning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **37.1%**
- Toolathlon-Verified: **35.2%**
- AutomationBench v1.0.6: **30.3%**
- Tau2-Bench: **68.2%**
- JobBench: **18.3%**

Reasoning / knowledge:

- GPQA Diamond: **48.2%**
- LCR / MLCR: **58.0%**
- Humanity's Last Exam (HLE): **7.5%**
- MiMo Reasoning Parser: integrated chain-of-thought with configurable effort.

Multimodal:

- MiMo Visual Coding: **64.0%**
- Native image and video comprehension.

Coding:

- SWE-bench Verified: **61.1%** (SFT avg@3) / **66.2%** (post-RL)
- SWE-bench Pro: **44.6%**
- LiveCodeBench: **46.5%** pass@1
- MiMo Code: **51.6%**

Long context:

- 262,144 tokens context window evaluated across local single-GPU inference runs.

### Normalized scores (1–100)

- **Tool use: 55/100.** Capable lightweight tool invocation evidenced by 37.1% on Terminal-Bench 2.1, 35.2% on Toolathlon, and 30.3% on AutomationBench.
- **Reasoning: 58/100.** Distilled reasoning and planning logic augmented with native thinking-mode toggles.
- **Context window: 75/100.** Full 262K context window accommodates extensive source files and multimodal prompts locally.
- **Multimodal: 66/100.** Native vision and video understanding demonstrated by 64.0% on MiMo Visual Coding and dense image OCR.
- **Coding: 64/100.** Strong software engineering accuracy for a 9B model, scoring 61.1%–66.2% on SWE-bench Verified and 44.6% on SWE-bench Pro.
- **Cost efficiency: 100/100.** MIT open-weights license allowing completely free local inference in under 6 GB VRAM.
- **Overall Score: 64/100.** Arithmetic mean of non-cost metrics: (55 + 58 + 75 + 66 + 64) / 5 = 63.6 → 64. Outstanding open-weights distilled edge model offering local multimodal inference, solid coding, and tool execution without external API dependencies.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Xiaomi MiMo technical reports, Hugging Face model cards, and open-weights leaderboards.
