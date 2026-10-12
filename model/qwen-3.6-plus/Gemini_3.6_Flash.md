# Qwen 3.6 Plus — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`qwen-3.6-plus`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud proprietary hybrid linear-attention Mixture-of-Experts (MoE) foundation model, featuring 1M context, always-on Preserve Thinking chain-of-thought, and native multimodal reasoning across text, images, and video.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen-3.6-plus`), OpenRouter (`qwen/qwen-3.6-plus`). Chat Completions and Responses API.
- **Release / knowledge:** April 2026 release; knowledge cutoff February 2026.
- **IDs:** `qwen-3.6-plus`, `qwen/qwen-3.6-plus`
- **Context window:** 1,000,000 tokens (1M tokens) input / 65,536 max output tokens — verified via Alibaba Cloud Model Studio documentation.
- **Modalities:** Native multimodal (text, high-res images, wireframes, video in; text out); always-on chain-of-thought thinking trace; tool calls; structured JSON mode.
- **Pricing (as of October 2026):** ~$0.325 – $0.40 / 1M input, $1.95 – $2.40 / 1M output ($0.08 / 1M cached input).
- **Architecture:** Closed-weight hybrid architecture combining efficient linear attention with a sparse Mixture-of-Experts routing backbone.

### Raw benchmarks found

Agent / tool use & Spatial Grounding:

- Terminal-Bench 2.0: **61.6%**
- TAU3-Bench: **70.7%**
- 2D Spatial Grounding & UI Navigation: High accuracy for desktop and mobile GUI automation
- Toolathon / SWE Atlas Codebase QnA: **72.5%**

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- Humanity's Last Exam (HLE): **24.5%**
- Artificial Analysis Intelligence Index: **73.0**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 6.1%**

Coding:

- SWE-bench Verified: **78.8%**
- LiveCodeBench v6: **87.1%**
- SciCode / AA-SciCode: **48.2%**
- Vibe Code Bench: **78.0%**

Long context & Multimodal:

- MMMU Pro: **84.2%**
- Needle-in-a-Haystack (NIAH): **99.2%** retrieval accuracy across 1M context window.
- Visual Coding: Converts UI wireframes and design mockups into functional frontend code.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong tool calling and spatial UI grounding (70.7% TAU3-Bench, 61.6% Terminal-Bench 2.0).
- **Reasoning: 87/100.** High-level reasoning supported by always-on Preserve Thinking and 90.4% on GPQA Diamond.
- **Context window: 93/100.** 1M token context window with 65.5K max output capacity and robust long-range recall.
- **Multimodal: 83/100.** High-fidelity document parsing, UI wireframe-to-code generation, and video comprehension (84.2% MMMU Pro).
- **Coding: 86/100.** Solid software engineering throughput (78.8% SWE-bench Verified, 87.1% LiveCodeBench v6).
- **Cost efficiency: 91/100.** Cost-effective enterprise pricing at ~$0.33 / $1.95 per 1M tokens with aggressive prompt caching.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (83 + 87 + 93 + 83 + 86) / 5 = 432 / 5 = 86.4 -> 86/100. High-efficiency multimodal MoE engine delivering strong reasoning, coding, and document analysis.

---

## Sources

- Alibaba Cloud Model Studio Qwen 3.6 Plus Documentation: https://dashscope.aliyun.com/
- OpenRouter Qwen 3.6 Plus Model Specifications: https://openrouter.ai/models/qwen/qwen-3.6-plus
- Serenities AI & Sulat Technical Evaluation Report: https://serenitiesai.com/models/qwen-3.6-plus

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
