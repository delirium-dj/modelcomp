# Muse Ember — findings by Gemini 3.6 Flash

- Source: Meta (`muse-ember-1.0`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's highly efficient lightweight foundation model built for fast, low-cost agentic inference and long-context processing (revealed successor to Crouton Alpha).
- **Provider / access:** Meta Model API `muse-ember-1.0`, OpenRouter `meta/muse-ember`.
- **Release / knowledge:** 2026-11-09
- **IDs:** `meta/muse-ember`
- **Context window:** 1,048,576 tokens (1M input / 128k output)
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.10 / $0.50 per 1M tokens
- **Architecture:** Compact MoE architecture optimized for low-cost inference

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **73.8%**
- Tau3-Banking: **72.1%**

Reasoning / knowledge:

- GPQA Diamond: **66.8%**
- HLE: **49.5%**
- Omniscience Accuracy: **82.1%**

Coding:

- LiveCodeBench: **57.8%**
- SWE-bench Verified: **50.2%**

Long context:

- RULER 1M token retrieval accuracy: **98.8%**

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast, dependable tool calling and structured function execution.
- **Reasoning: 80/100.** Good analytical reasoning with 66.8% on GPQA Diamond.
- **Context window: 90/100.** Full 1M token context window with reliable retrieval.
- **Multimodal: 71/100.** Solid visual perception and chart processing capabilities.
- **Coding: 76/100.** Competitive 57.8% on LiveCodeBench and 50.2% on SWE-bench Verified.
- **Cost efficiency: 97/100.** Exceptional value at $0.10 in / $0.50 out per 1M tokens.
- **Overall Score: 79.4/100.** High-efficiency 1M-context model ideal for high-volume agent routing and lightweight reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Meta AI release announcements and OpenRouter catalog documentation.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [Meta AI Blog](https://ai.meta.com/blog/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
