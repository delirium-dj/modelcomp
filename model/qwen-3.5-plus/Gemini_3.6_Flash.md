# Qwen 3.5 Plus — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`qwen-3.5-plus`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's hosted flagship multimodal Mixture-of-Experts (MoE) foundation model based on the Qwen 3.5-397B-A17B backbone, featuring 1M token context, native image/video comprehension, and adaptive tool calling.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen-3.5-plus`), OpenRouter (`qwen/qwen-3.5-plus`).
- **Release / knowledge:** February 15, 2026 release; knowledge cutoff January 2026.
- **IDs:** `qwen-3.5-plus`, `qwen/qwen-3.5-plus`
- **Context window:** 1,000,000 tokens (1M tokens) input / 16,384 max output tokens — verified via Alibaba Cloud Model Studio documentation.
- **Modalities:** Native multimodal (text, image, video in; text out); built-in chain-of-thought reasoning; adaptive tool calls (web search, code execution); JSON mode.
- **Pricing (as of October 2026):** ~$0.40 – $0.50 / 1M input, $2.00 – $2.40 / 1M output ($0.08 / 1M cached input).
- **Architecture:** 397B parameter sparse Mixture-of-Experts (MoE) activating 17B parameters per token, with hybrid attention mechanisms.

### Raw benchmarks found

Agent / tool use:

- Toolathon / SWE Atlas Codebase QnA: **73.5%**
- Adaptive Tool Calling & Web Grounding: High fidelity API orchestration
- GDPval-AA: **1,250**

Reasoning / knowledge:

- GPQA Diamond: **88.4%**
- MMLU-Pro: **87.8%**
- Humanity's Last Exam (HLE): **22.5%**
- Artificial Analysis Intelligence Index: **72.0 / #21**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 5.5%**

Coding:

- LiveCodeBench v6: **83.6%**
- SWE-bench Verified: **76.4%**
- SciCode / AA-SciCode: **46.0%**
- Vibe Code Bench: **75.2%**

Long context & Multimodal:

- RULER / Needle-in-a-Haystack: **99.2%** retrieval accuracy across 1M context window.
- MMMU & VideoMME: Strong multi-discipline perception across documents, diagrams, and video clips.

### Normalized scores (1–100)

- **Tool use: 84/100.** Reliable tool calling, web search integration, and multi-step agent execution.
- **Reasoning: 87/100.** High-level reasoning supported by 88.4% GPQA Diamond and 87.8% MMLU-Pro across 397B MoE.
- **Context window: 94/100.** Verified 1M token context window with 99.2% retrieval accuracy.
- **Multimodal: 82/100.** Native text, image, and video comprehension verified across MMMU and VideoMME.
- **Coding: 85/100.** Solid automated software engineering performance (83.6% LiveCodeBench v6, 76.4% SWE-bench Verified).
- **Cost efficiency: 90/100.** Highly economical enterprise pricing ($0.40 / $2.00 per 1M tokens) with prompt caching discounts.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (84 + 87 + 94 + 82 + 85) / 5 = 432 / 5 = 86.4 -> 86/100. High-performance 1M context multimodal flagship for enterprise production and agentic pipelines.

---

## Sources

- Alibaba Cloud Model Studio Qwen 3.5 Plus Documentation: https://dashscope.aliyun.com/
- OpenRouter Model Specifications & Pricing: https://openrouter.ai/models/qwen/qwen-3.5-plus
- DataCamp & Segmind Qwen 3.5 Architecture Evaluation: https://datacamp.com/blog/qwen-3-5-plus-review

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
