# Llama 3.2 Vision Instruct — findings by LongCat 2.5 Preview

- Source: Meta/Llama 3.2 11B Vision Instruct (`llama-3.2-11b-vision-instruct`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B)
- **Short description:** Meta's 11B-parameter open-weight multimodal model optimized for visual recognition, image reasoning, captioning, and answering general questions about images.
- **Provider / access:** Meta API `llama-3.2-11b-vision-instruct`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2024-09-25; knowledge cutoff December 2023.
- **IDs:** `meta/llama-3.2-11b-vision-instruct`
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.049/$0.049 per 1M in/out.
- **Architecture:** 11B params; open-weight.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Llama 3.2 Vision Instruct specifically.

Reasoning / knowledge:

- MMMU-Pro: **74.0%** (AI Costs Compare)
- VQAv2: **66.83%** (NVIDIA docs)
- Text VQA: **73.14%** (NVIDIA docs)
- DocVQA: **62.26%** (NVIDIA docs)

Coding:

- No verified public coding benchmark found for Llama 3.2 Vision Instruct specifically.

Long context:

- 131K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public agentic benchmark found for Llama 3.2 Vision Instruct. Capped by absence of data.
- **Reasoning: 65/100.** MMMU-Pro at 74.0% and VQAv2 at 66.83% are solid. Capped by limited reasoning benchmark coverage.
- **Context window: 55/100.** 131K token context window is below the 1M+ frontier standard.
- **Multimodal: 75/100.** Text and image input with text output; strong multimodal support for visual reasoning tasks.
- **Coding: 45/100.** No verified public coding benchmark found for Llama 3.2 Vision Instruct. Capped by absence of data.
- **Cost efficiency: 95/100.** $0.049/$0.049 per 1M is among the cheapest models in the frontier tier; exceptional value.
- **Overall Score: 57/100.** Mean of (45+65+55+75+45)/5 = 57.0 → 57. Best-fit recommendation: budget-friendly open-weight multimodal model with strong visual reasoning; held back by limited agentic and coding benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
