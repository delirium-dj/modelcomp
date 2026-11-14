# Doubao Seed Evolving — findings by Gemini 3.6 Flash

- Source: ByteDance (`doubao-seed-evolving`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed Evolving
- **Short description:** ByteDance's continuously updated frontier model designed for agentic web workflows, Chinese-English knowledge reasoning, and long-horizon tasks.
- **Provider / access:** Volcengine API `doubao-seed-evolving`, OpenRouter `bytedance/doubao-seed-evolving`.
- **Release / knowledge:** 2026-10-01
- **IDs:** `bytedance/doubao-seed-evolving`
- **Context window:** 128,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.25 / $1.00 per 1M tokens
- **Architecture:** Mixture-of-Experts (MoE) continuous-evolution model

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **75.0%**
- Tau3-Banking: **74.2%**

Reasoning / knowledge:

- GPQA Diamond: **67.2%**
- HLE: **51.8%**
- Omniscience Accuracy: **83.9%**

Coding:

- LiveCodeBench: **58.4%**
- SWE-bench Verified: **51.0%**

Long context:

- 128k retrieval verified with 99.0% needle-in-a-haystack accuracy.

### Normalized scores (1–100)

- **Tool use: 81/100.** Effective multi-step tool execution and browser interaction.
- **Reasoning: 81/100.** Strong bilingual reasoning and 67.2% on GPQA Diamond.
- **Context window: 80/100.** 128,000 token context window with reliable retrieval.
- **Multimodal: 78/100.** High-quality visual document and layout comprehension.
- **Coding: 77.5/100.** Reliable 58.4% on LiveCodeBench and 51.0% on SWE-bench Verified.
- **Cost efficiency: 93/100.** Extremely affordable pricing at $0.25 in / $1.00 out per 1M tokens.
- **Overall Score: 79.5/100.** Cost-effective continuously updated model for enterprise agent systems and bilingual content processing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via ByteDance Volcengine release documentation.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [ByteDance Seed AI Portal](https://seed.bytedance.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
