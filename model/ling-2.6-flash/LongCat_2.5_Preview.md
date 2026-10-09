# Ling 2.6 Flash — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ling-2.6-flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's efficient instant (instruct) MoE model with 104B total / 7.4B active parameters. Hybrid linear attention (1:7 MLA + Lightning Linear) for high inference speed. Optimized for token-efficient agent workloads. Apache 2.0 open weights. Superseded by Ling 3.0 Flash.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-2.6-flash` open weights), OpenRouter, Novita AI, 13+ providers. OpenAI-compatible API via vLLM/SGLang.
- **Release / knowledge:** 2026-04-21; deprecated 2026-08-24.
- **IDs:** `inclusionai/ling-2.6-flash`
- **Context window:** 262,144 tokens (256K) — verified via LLMReference, CloudPrice, Opper; up to 32,768 output tokens.
- **Modalities:** Text input; Text output. Reasoning: no (instruct model). Tool calling: yes (function calling, structured outputs).
- **Pricing (as of 2026-10-09):** $0.01/1M input, $0.03/1M output, $0.002/1M cache read (OpenRouter). Apache 2.0 open weights.
- **Architecture:** 104B total / 7.4B active MoE, hybrid linear attention (1:7 MLA + Lightning Linear). Up to 340 tok/s on 4x H20. 15M tokens for full AI evaluation (86% cost reduction vs peers).

### Raw benchmarks found

Agent / tool use:

- TAU2-bench: **86.0%** (AIFlashReport)
- BFCL-V4: strong (Opper)
- PinchBench: strong (Opper)
- Function calling: supported (CloudPrice, LLMReference)
- Structured outputs: supported (CloudPrice, LLMReference)

Reasoning / knowledge:

- Intelligence Index (CloudPrice): **9.7 / #304**
- Intelligence Index (Ant Group): **26** (with 15M output tokens)
- GPQA Diamond: **59.3%** (AIFlashReport, 40th percentile)
- HLE: **6.2%** (AIFlashReport)

Coding:

- SWE-bench Verified: **61.2%** (Opper)
- LiveCodeBench Reasoning: **25.0%** (AIFlashReport)
- SciCode: **27.1%** (AIFlashReport)
- TerminalBench-Hard: **21.2%** (AIFlashReport)
- Coding Index (CloudPrice): **25.3 / #131**

Long context:

- Context window: **262,144 tokens** (256K) — verified via LLMReference, CloudPrice, Opper
- LCR (CloudPrice): below average

Multimodal:

- Text input only (CloudPrice, LLMReference)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling + structured outputs. TAU2 86%, BFCL-V4 strong. Good agentic tool use for an instruct model.
- **Reasoning: 58/100.** Intelligence Index 9.7-26, GPQA 59.3%. Below average reasoning, instruct model without extended thinking.
- **Context window: 82/100.** 256K token context. Good long-context capability.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 62/100.** SWE-bench Verified 61.2%, LiveCodeBench 25%. Moderate coding, optimized for token efficiency over raw capability.
- **Cost efficiency: 95/100.** $0.01/$0.03 per 1M tokens — among the cheapest capable models. Apache 2.0 open weights. 340 tok/s on 4x H20.
- **Overall Score: 58/100.** Mean of Tool (72), Reasoning (58), Context (82), Multimodal (15), Coding (62) = 289/5 = 57.8 → 58. Excellent value instruct model with strong agentic tool use, but below average reasoning and text-only.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
