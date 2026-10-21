# Qwen 3.7 Flash — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.7-flash`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's proprietary high-throughput multimodal foundation model designed for cost-sensitive enterprise routing, native 1M context handling, and high-velocity vision processing.
- **Provider / access:** Alibaba Cloud DashScope API (`qwen3.7-flash`), OpenRouter, QwenCloud.
- **Release / knowledge:** 2026 release; proprietary API model; knowledge cutoff mid-2026.
- **IDs:** `qwen/qwen-3.7-flash`, `opencode/qwen-3.7-flash`
- **Context window:** 1,000,000 tokens total (1M context window; up to 32,768 max output tokens).
- **Modalities:** Native multimodal input (text, images, video); text, code, structured JSON output; function calling.
- **Pricing (as of 2026-10-22):** ~$0.03 / 1M input tokens, ~$0.11 / 1M output tokens ($0.006 prompt cache read); ultra-low-cost commercial tier.
- **Architecture:** Lightweight proprietary transformer optimized for extreme throughput and long-context KV cache compression.

### Raw benchmarks found

Agent / tool use:

- Tool Calling Accuracy: **76.5%**
- IFEval: **75.2%**
- Tau-Bench Retail: **68.4%**

Reasoning / knowledge:

- MMLU: **79.5%**
- GPQA Diamond: **61.2%**
- Humanity's Last Exam (HLE): **15.8%**

Coding:

- HumanEval: **87.0%**
- LiveCodeBench: **52.4%**
- SWE-bench Verified: **44.0%**

Long context / vision:

- Multi-task Vision Average: **52.4%** (object recognition, visual classification)
- 1,000,000 token context window with reliable retrieval across high-throughput document and video pipelines.

### Normalized scores (1–100)

- **Tool use: 64/100.** Fast and reliable function calling and API integration evidenced by 76.5% tool calling accuracy and 68.4% on Tau-Bench.
- **Reasoning: 64/100.** Solid general intelligence for a high-speed flash model (79.5% MMLU, 61.2% GPQA Diamond).
- **Context window: 95/100.** Full 1M token context window natively supported at ultra-low latency and pricing.
- **Multimodal: 68/100.** Native text, image, and video input processing; strong general visual recognition and OCR.
- **Coding: 62/100.** Capable code generation and script refactoring evidenced by 87.0% on HumanEval and 52.4% on LiveCodeBench.
- **Cost efficiency: 98/100.** Extreme economic efficiency at ~$0.03 / $0.11 per 1M tokens with prompt caching down to ~$0.006 per 1M tokens.
- **Overall Score: 71/100.** Arithmetic mean of five quality dimensions: (64 + 64 + 95 + 68 + 62) / 5 = 70.6 → 71. Ultra-low-cost, high-throughput 1M-context multimodal workhorse built for high-volume enterprise production.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Alibaba Cloud DashScope documentation, Roboflow vision benchmarks, and OpenRouter API listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
