# Qwen3.8-27B — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B parameter (28B with vision encoder) open-weights vision-language model featuring hybrid Gated DeltaNet attention, default thinking mode, and consumer-GPU deployment viability.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.8-27B`), Alibaba Cloud Model Studio, OpenRouter (`qwen/qwen-3.8-27b`), local inference via vLLM, SGLang, and llama.cpp.
- **Release / knowledge:** August 14, 2026 release; knowledge cutoff June 2026.
- **IDs:** `Qwen/Qwen3.8-27B`, `qwen/qwen-3.8-27b`
- **Context window:** 262,144 tokens native (256K context window), extensible to 1,000,000 tokens via YaRN; 32,768 max output tokens.
- **Modalities:** Multimodal input (text, image, video); text output; reasoning/thinking mode (`reasoning_effort`: low/medium/xhigh); tool calling; JSON mode.
- **Pricing (as of October 2026):** Open weights under Apache 2.0 license; API hosting available at ~$0.20 input / $0.80 output per 1M tokens (with free community tiers on OpenRouter).
- **Architecture:** Dense 27B transformer with hybrid attention (alternating Gated DeltaNet linear attention blocks and full gated attention) paired with native vision-language projection.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%**
- Tau2-Bench / Tau3-Banking: **71.8%**
- Toolathon / SWE Atlas Codebase QnA: **56.2%**
- GDPval-AA: **1,260**

Reasoning / knowledge:

- GPQA Diamond: **89.2%**
- Humanity's Last Exam (HLE): **21.5%**
- LCR / MLCR: **68.2%**
- Artificial Analysis Intelligence Index: **80 / #15**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 10.2%**

Coding:

- LiveCodeBench v6: **90.3%**
- SWE-bench Pro: **61.7%**
- SWE-bench Verified: **49.8%**
- SciCode / AA-SciCode: **35.4%**
- Vibe Code Bench: **71.0%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **98.5%** retrieval fidelity across native 256K context window.
- High-resolution image and multi-frame video understanding verified on vision-language benchmarks.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong terminal manipulation and tool calling (73.0% Terminal-Bench 2.1, 71.8% Tau2-Bench).
- **Reasoning: 87/100.** Impressive analytical logic driven by configurable thinking mode and 89.2% GPQA Diamond score.
- **Context window: 88/100.** Native 262K context window expandable to 1M tokens with high retrieval stability.
- **Multimodal: 86/100.** Native vision-language transformer capable of fine-grained document, image, and video comprehension.
- **Coding: 87/100.** Benchmark leader for mid-sized dense models (90.3% LiveCodeBench v6, 61.7% SWE-bench Pro).
- **Cost efficiency: 95/100.** Apache-2.0 open weights runnable locally on 24GB VRAM GPUs, paired with low cloud hosting rates.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (84 + 87 + 88 + 86 + 87) / 5 = 432 / 5 = 86.4 -> 86/100. Top open-weights candidate for multimodal local deployment and edge coding agents.

---

## Sources

- Alibaba Qwen 3.8 Series Official Announcement & GitHub: https://github.com/QwenLM/Qwen
- Hugging Face Model Card `Qwen/Qwen3.8-27B`: https://huggingface.co/Qwen/Qwen3.8-27B
- Simon Willison & vLLM Documentation on Qwen3.8-27B Architecture: https://vllm.ai/blog/qwen3-8-27b

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
