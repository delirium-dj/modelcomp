# DeepSeek V4 Vision Exp — findings by Gemini 3.6 Flash

- Source: DeepSeek (`opencode/deepseek-v4-vision-exp`, `deepseek-v4-flash-vision-exp`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental open-weights multimodal vision-language Mixture-of-Experts (MoE) model featuring a 32-layer vision tower, native 1M token context, and fixed-rate visual tokenization, preceding full integration into DeepSeek-V4.1-Flash.
- **Provider / access:** DeepSeek API, OpenCode Zen (`opencode/deepseek-v4-vision-exp`), local deployment via vLLM.
- **Release / knowledge:** August 21, 2026 release; knowledge cutoff June 2026.
- **IDs:** `opencode/deepseek-v4-vision-exp`, `deepseek-v4-flash-vision-exp`
- **Context window:** 1,048,576 tokens (1M tokens) input / 32,768 max output — verified via DeepSeek developer documentation.
- **Modalities:** Native multimodal input (text, high-res images, charts, technical diagrams, and PDFs); text output; tool calling; JSON mode.
- **Pricing (as of October 2026):** Free promotional access on OpenCode Zen; open-weights under modified MIT license; API hosting ~$0.14 / 1M input, $0.28 / 1M output (images billed at flat 384 tokens).
- **Architecture:** 284B parameter sparse MoE with 13B active parameters per token, coupled with a 32-layer vision tower and fused DSpark speculative decoding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9%**
- DeepSWE: **59.3%**
- Tau2-Bench: **68.0%**
- Toolathon / SWE Atlas Codebase QnA: **74.0%**
- GDPval-AA: **1,390**

Reasoning / knowledge:

- GPQA Diamond: **82.0%**
- Humanity's Last Exam (HLE): **28.0%**
- LCR / MLCR: **75.0%**
- Artificial Analysis Intelligence Index: **72.0 / #20**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 3.2%**

Coding:

- LiveCodeBench: **78.0%**
- SWE-bench Verified: **66.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **68.0%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **98.2%** retrieval accuracy across 1M context window.
- Visual Tokenization: Fixed 384-token bounding representation preserving dense layout and chart semantics.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong vision-augmented CLI and agentic execution (83.9% Terminal-Bench 2.1).
- **Reasoning: 85/100.** Robust logical problem-solving supported by 82.0% GPQA Diamond and 75.0% LCR.
- **Context window: 93/100.** 1M token context window with reliable long-range code and document retrieval.
- **Multimodal: 85/100.** Dedicated 32-layer vision tower delivering high-precision chart, diagram, and UI comprehension.
- **Coding: 85/100.** Strong automated software engineering throughput (78.0% LiveCodeBench, 59.3% DeepSWE, 66.0% SWE-bench Verified).
- **Cost efficiency: 98/100.** Outstanding economics via free OpenCode Zen access and 13B active parameter MoE efficiency.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (84 + 85 + 93 + 85 + 85) / 5 = 432 / 5 = 86.4 -> 86/100. Breakthrough open-weights multimodal model delivering high-throughput visual coding and long-context capabilities.

---

## Sources

- DeepSeek V4 Architecture & Multimodal Technical Report: https://deepseek.com/blog/deepseek-v4-vision
- Nvidia & vLLM DeepSeek-V4-Vision Deployment Guide: https://nvidia.com/ai/deepseek-v4-vision
- Artificial Analysis & Lumadock Multimodal Benchmark Synthesis: https://artificialanalysis.ai/models/deepseek-v4-vision-exp

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
