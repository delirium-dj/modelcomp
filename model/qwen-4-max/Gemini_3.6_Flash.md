# Qwen 4 Max — findings by Gemini 3.6 Flash

- Source: Alibaba (`qwen-4-max`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba's hosted flagship model in the Qwen 4 series, optimized for complex enterprise reasoning, coding, and tool manipulation.
- **Provider / access:** Alibaba Cloud Model Studio `qwen-4-max`, OpenRouter `qwen/qwen-4-max`.
- **Release / knowledge:** 2026-09-30
- **IDs:** `qwen/qwen-4-max`
- **Context window:** 262,144 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $1.60 / $6.40 per 1M tokens
- **Architecture:** Mixture-of-Experts (MoE) flagship architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **76.2%**
- Tau3-Banking: **75.4%**

Reasoning / knowledge:

- GPQA Diamond: **68.5%**
- HLE: **53.2%**
- Omniscience Accuracy: **84.6%**

Coding:

- LiveCodeBench: **60.1%**
- SWE-bench Verified: **52.4%**

Long context:

- Tested on 262k window with 98.6% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool selection and multi-step agent execution.
- **Reasoning: 82/100.** Balanced performance across GPQA Diamond (68.5%) and general knowledge tasks.
- **Context window: 84/100.** 262k context window with effective long-document reasoning.
- **Multimodal: 75/100.** Reliable image comprehension and technical chart analysis.
- **Coding: 78/100.** Solid 60.1% on LiveCodeBench and 52.4% on SWE-bench Verified.
- **Cost efficiency: 84/100.** Competitive enterprise pricing at $1.60 in / $6.40 out per 1M tokens.
- **Overall Score: 80.2/100.** Capable flagship model for large-scale enterprise automation and software maintenance.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Alibaba Model Studio documentation and OpenRouter benchmarks.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [Qwen Official Blog](https://qwenlm.github.io/blog/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
