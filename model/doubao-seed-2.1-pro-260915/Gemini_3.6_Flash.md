# Doubao Seed 2.1 Pro 260915 — findings by Gemini 3.6 Flash

- Source: ByteDance (`doubao-seed-2.1-pro-260915`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (260915)
- **Short description:** ByteDance's production 260915 checkpoint of Doubao Seed 2.1 Pro, offering balanced reasoning, visual analysis, and agent execution.
- **Provider / access:** Volcengine API `doubao-seed-2.1-pro-260915`, OpenRouter `bytedance/doubao-seed-2.1-pro-260915`.
- **Release / knowledge:** 2026-09-15
- **IDs:** `bytedance/doubao-seed-2.1-pro-260915`
- **Context window:** 128,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.35 / $1.40 per 1M tokens
- **Architecture:** Mixture-of-Experts (MoE) enterprise architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **70.1%**
- Tau3-Banking: **68.8%**

Reasoning / knowledge:

- GPQA Diamond: **62.4%**
- HLE: **42.5%**
- Omniscience Accuracy: **78.2%**

Coding:

- LiveCodeBench: **54.0%**
- SWE-bench Verified: **46.2%**

Long context:

- 128k context window with 98.2% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 74/100.** Solid agentic tool interaction and API function execution.
- **Reasoning: 74/100.** Reliable bilingual reasoning and general knowledge comprehension.
- **Context window: 80/100.** 128,000 token context window.
- **Multimodal: 76/100.** High-fidelity visual document and layout understanding.
- **Coding: 68/100.** Dependable coding support for routine development tasks.
- **Cost efficiency: 90/100.** Affordable enterprise pricing at $0.35 in / $1.40 out per 1M tokens.
- **Overall Score: 74.4/100.** Reliable enterprise workhorse checkpoint for customer support, document extraction, and general API automation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via ByteDance Volcengine release notes.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [ByteDance Seed Portal](https://seed.bytedance.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
