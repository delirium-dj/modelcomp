# Qwen 3.5 Flash — findings by Gemini 3.6 Flash

- Source: Alibaba (`qwen-3.5-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's high-speed, cost-optimized language and vision model for fast API completions and high-throughput agent workflows.
- **Provider / access:** Alibaba Cloud Model Studio `qwen-3.5-flash`, OpenRouter `qwen/qwen-3.5-flash`.
- **Release / knowledge:** 2026-02-23
- **IDs:** `qwen/qwen-3.5-flash`
- **Context window:** 128,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.10 / $0.40 per 1M tokens
- **Architecture:** Mixture-of-Experts (MoE) lightweight architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **72.5%**
- Tau3-Banking: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **65.4%**
- HLE: **48.1%**
- Omniscience Accuracy: **81.5%**

Coding:

- LiveCodeBench: **56.5%**
- SWE-bench Verified: **48.9%**

Long context:

- 128k context window with 98.5% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 79/100.** High-speed tool invocation and reliable JSON formatting.
- **Reasoning: 79.5/100.** Solid general knowledge and GPQA Diamond performance (65.4%).
- **Context window: 80/100.** 128,000 token context window.
- **Multimodal: 78/100.** Dependable vision input and visual document extraction.
- **Coding: 77/100.** Good coding completion scores (56.5% LiveCodeBench).
- **Cost efficiency: 97/100.** Ultra-low pricing at $0.10 in / $0.40 out per 1M tokens.
- **Overall Score: 78.7/100.** Fast, economical model for real-time web agents, summarization, and high-volume utility pipelines.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Alibaba Model Studio documentation.
- Reference URLs:
  - [OpenRouter Qwen Models](https://openrouter.ai/models?q=qwen)
  - [Qwen Official Blog](https://qwenlm.github.io/blog/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
