# Qwen 3.7 Plus — findings by Gemini 3.6 Flash

- Source: Alibaba (`qwen/qwen-3.7-plus`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Cloud proprietary multimodal agent model optimized for GUI interaction, computer use, CLI automation, and high-volume autonomous workflows.
- **Provider / access:** Alibaba Cloud DashScope (`qwen3.7-plus`), OpenRouter (`qwen/qwen-3.7-plus`). OpenAI- and Anthropic-compatible endpoints.
- **Release / knowledge:** June 2026 release; knowledge cutoff April 2026.
- **IDs:** `qwen3.7-plus`, `qwen/qwen-3.7-plus`
- **Context window:** 1,000,000 tokens (1M tokens) input / 16,384 max output — verified via DashScope API documentation.
- **Modalities:** Native multimodal (text, image, video in; text out); agent loops; function/tool calling; structured JSON output.
- **Pricing (as of October 2026):** ~$0.40 input / $1.20 output per 1M tokens (varies slightly by regional DashScope endpoint).
- **Architecture:** Proprietary Mixture-of-Experts (MoE) agent foundation model.

### Raw benchmarks found

Agent / tool use & GUI navigation:

- ScreenSpot (Pro): **79.0** (outperforms GPT-5.4's 67.4 and Claude Opus 4.6's 49.5 in GUI localization)
- Tau2-Bench: **93.0** (high multi-step autonomous tool execution)
- Terminal-Bench 2.0 / 2.1: **70.3** (v2.0) / **52.8%** (v2.1)
- Toolathon / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **90.0%**
- HLE (Humanity's Last Exam): **34.2%**
- LCR / MLCR: **81.5%**
- Omniscience Accuracy / Hallucination Rate: **85.6% / 5.8%**
- Artificial Analysis Intelligence Index: **86 / #9**

Coding:

- SWE-bench Verified: **66.7%**
- LiveCodeBench: **87.5%**
- SciCode / AA-SciCode: **41.2%**
- Vibe Code Bench: **79.4%**
- DeepSWE / Coding Index: **82.1**

Long context:

- MRCR 1M window retrieval accuracy: **98.2%**

### Normalized scores (1–100)

- **Tool use: 84/100.** High-caliber agentic tool calling and GUI interaction (79.0 on ScreenSpot Pro, 93.0 on Tau2-Bench).
- **Reasoning: 86/100.** Strong reasoning supported by 90.0% GPQA Diamond and 34.2% HLE, trailing only the Max tier on frontier STEM tests.
- **Context window: 94/100.** Native 1M token context window with 98.2% MRCR long-range retrieval fidelity.
- **Multimodal: 86/100.** Excellent visual perception and screen-grounding across images and video feeds.
- **Coding: 85/100.** Dependable coding and autonomous debugging (87.5% LiveCodeBench, 66.7% SWE-bench Verified).
- **Cost efficiency: 90/100.** Outstanding value at ~$0.40/$1.20 per 1M tokens (~6× cheaper than Qwen 3.7 Max).
- **Overall Score: 87/100.** Arithmetic mean of quality dimensions: (84 + 86 + 94 + 86 + 85) / 5 = 435 / 5 = 87/100. Cost-effective, high-throughput multimodal agent engine for production workloads.

---

## Sources

- Alibaba Cloud DashScope Qwen 3.7 Plus Documentation: https://dashscope.aliyun.com/
- Venice AI & OpenRouter Model Overview: https://venice.ai/models/qwen-3.7-plus
- VentureBeat Agentic & Computer-Use Evaluation Report: https://venturebeat.com/ai/qwen-3-7-plus-benchmarks

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web research & benchmark analysis; normalized scores 1–100.
