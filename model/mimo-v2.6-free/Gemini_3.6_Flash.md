# MiMo V2.6 Free — findings by Gemini 3.6 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-free`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's omnimodal MiMo V2.6 Flash foundation model accessible via the OpenCode Zen free community tier, featuring native omnimodal reasoning (text, image, video, audio) and 1M token context processing.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2-6-free`), Xiaomi AI API, open weights under MIT license on Hugging Face.
- **Release / knowledge:** September 22, 2026 release; knowledge cutoff July 2026.
- **IDs:** `opencode/mimo-v2-6-free`, `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,048,576 tokens (1M tokens) input / 16,384 max output — verified via Xiaomi platform documentation.
- **Modalities:** Native omnimodal (text, image, video, audio in; text out); agent loops; function/tool calling; structured JSON output.
- **Pricing (as of October 2026):** Free tier ($0.00 / 1M tokens on OpenCode Zen); open weights freely downloadable under MIT license.
- **Architecture:** Sparse Mixture-of-Experts (MoE) with 309B total parameters (activating 15B parameters per token).

### Raw benchmarks found

Agent / tool use:

- Toolathlon-verified: **73.6%**
- Automation Bench v1.0.6: **52.3%**
- Tau2-Bench: **73.0%**
- Terminal-Bench 2.1: **68.0%**
- GDPval-AA: **1,200**

Reasoning / knowledge:

- Agents' Last Exam: **27.6%**
- GPQA Diamond: **71.0%**
- Humanity's Last Exam (HLE): **19.0%**
- Artificial Analysis Intelligence Index: **68.0 / #19**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 5.4%**

Coding:

- SWE-bench Verified: **67.9%**
- MiMo Code Bench: **61.2%**
- LiveCodeBench: **74.0%**
- ProgramBench: **26.0%**
- SciCode / AA-SciCode: **44.0%**

Long context & Omnimodal:

- Needle-in-a-Haystack (NIAH): **98.2%** retrieval accuracy across 1M context window.
- Native multi-stream audio, video, and image comprehension validated across multimodal tasks.

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid agentic tool calling backed by 73.6% on Toolathlon and 52.3% on Automation Bench.
- **Reasoning: 85/100.** Consistent multi-step logical reasoning with 27.6% on Agents' Last Exam.
- **Context window: 93/100.** Full 1M token context window supporting expansive document and codebase ingestion.
- **Multimodal: 87/100.** Truly omnimodal input capabilities spanning text, high-res images, video streams, and audio.
- **Coding: 82/100.** Dependable programming throughput (67.9% SWE-bench Verified, 74.0% LiveCodeBench).
- **Cost efficiency: 100/100.** Unbeatable cost profile with completely free access ($0.00) on OpenCode Zen and MIT-licensed weights.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (85 + 85 + 93 + 87 + 82) / 5 = 432 / 5 = 86.4 -> 86/100. Premier cost-free daily assistant and agent engine offering native omnimodal capabilities and 1M context.

---

## Sources

- Xiaomi MiMo-V2.6 Official Release Blog: https://xiaomi.com/ai/mimo-v2-6
- OpenCode Zen Free Tier Model Documentation: https://opencode.ai/models/mimo-v2-6-free
- Roboflow & Artificial Analysis Omnimodal Evaluation: https://artificialanalysis.ai/models/mimo-v2-6-flash

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
