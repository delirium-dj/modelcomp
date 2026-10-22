# Qwen 3.5 Flash Lite — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.5-flash-lite`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's ultra-efficient Mixture-of-Experts foundation model integrating linear Gated DeltaNet attention with sparse MoE routing (~35B total / ~3B active parameters per token), offering native multimodality and 1M context.
- **Provider / access:** Alibaba Cloud Model Studio API (`qwen-3.5-flash-lite`), OpenRouter, DashScope.
- **Release / knowledge:** 2026 release; commercial API model; knowledge cutoff early 2026.
- **IDs:** `qwen/qwen-3.5-flash-lite`, `opencode/qwen-3.5-flash-lite`
- **Context window:** 1,000,000 tokens total (1M context window; up to 65,536 max output tokens).
- **Modalities:** Native multimodal input (text, images, video); text, code, structured JSON output; function calling.
- **Pricing (as of 2026-10-22):** ~$0.10 / 1M input tokens, ~$0.40 / 1M output tokens ($0.02 prompt cache read).
- **Architecture:** Hybrid Gated DeltaNet linear-attention + sparse MoE (~35B total / 3B active parameters per token) with early-fusion vision encoder.

### Raw benchmarks found

Agent / tool use:

- Tool Calling Accuracy: **78.4%**
- IFEval: **76.2%**
- Tau-Bench Retail: **71.5%**
- Terminal-Bench: **36.0%**

Reasoning / knowledge:

- MMLU: **81.0%**
- GPQA Diamond: **64.5%**
- Humanity's Last Exam (HLE): **17.2%**
- GSM8K: **86.4%**

Coding:

- HumanEval: **88.5%**
- LiveCodeBench: **54.8%**
- SWE-bench Verified: **48.2%**

Long context / multimodal:

- Native text, image, and high-frame video input processing.
- 1,000,000 token context window with linear attention KV-cache compression and low-latency response generation.

### Normalized scores (1–100)

- **Tool use: 66/100.** High-speed tool execution and function calling evidenced by 78.4% tool calling accuracy and 71.5% on Tau-Bench.
- **Reasoning: 66/100.** Solid general reasoning for a 3B active parameter MoE (81.0% MMLU, 64.5% GPQA Diamond).
- **Context window: 95/100.** Full 1M token context capacity natively supported at low cost and rapid token throughput.
- **Multimodal: 70/100.** Native text, image, and video input processing; reliable OCR and visual layout comprehension.
- **Coding: 64/100.** Dependable code generation, debugging, and script writing verified by 88.5% on HumanEval, 54.8% on LiveCodeBench, and 48.2% on SWE-bench Verified.
- **Cost efficiency: 96/100.** Highly economical at ~$0.10 / $0.40 per 1M tokens with prompt caching down to ~$0.02 per 1M tokens.
- **Overall Score: 72/100.** Arithmetic mean of five quality dimensions: (66 + 66 + 95 + 70 + 64) / 5 = 72.2 → 72. Ultra-efficient hybrid linear-attention MoE foundation model delivering 1M context, native vision, and fast agentic execution.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Alibaba Cloud technical releases, DeepLearning.ai architecture analyses, and OpenRouter API listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
