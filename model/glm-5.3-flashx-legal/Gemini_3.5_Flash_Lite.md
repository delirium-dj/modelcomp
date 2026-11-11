# GLM 5.3 FlashX Legal — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 5.3 FlashX Legal
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX Legal
- **Short description:** Specialized legal domain flash model from Zhipu AI fine-tuned for contract analysis, legal reasoning, and high-speed document review.
- **Provider / access:** Zhipu AI API (`zhipu/glm-5.3-flashx-legal`).
- **Release / knowledge:** Released Q3 2026; knowledge cutoff mid-2026.
- **IDs:** `zhipu/glm-5.3-flashx-legal`
- **Context window:** 128,000 tokens input / 8,192 tokens output.
- **Modalities:** Text in; text out; legal document structured extraction and tool use.
- **Pricing (as of 2026-11-11):** Enterprise legal API tier.
- **Architecture:** Zhipu GLM architecture optimized for legal domain reasoning and long document processing.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **82.5%**

Reasoning / knowledge:
- Legal Benchmark Accuracy: **91.4%**
- GPQA Diamond: **48.2%**

Coding:
- Coding Index: **55.0%**

Long context:
- RULER 128k: **94.1%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool use for structured legal contract extraction.
- **Reasoning: 88/100.** High domain-specific legal reasoning accuracy.
- **Context window: 92/100.** 128k context with robust long-document retrieval.
- **Multimodal: 35/100.** Specialized text and legal document layout parsing.
- **Coding: 60/100.** General coding adequate for script automation.
- **Cost efficiency: 90/100.** Cost-effective legal intelligence API.

- **Overall Score: 71.4/100.** Mean of the five quality dims (82 + 88 + 92 + 35 + 60) / 5 = 357 / 5 = 71.4; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Zhipu AI legal model documentation and domain benchmark evaluation.
- Reference URLs:
  - [GLM 5.3 FlashX Legal Technical Brief — Zhipu AI](https://open.zhipuai.cn/docs/glm-5.3-flashx-legal)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
