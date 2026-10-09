# Ling 2.6 1T — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ling-2.6-1T
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's trillion-parameter instant (instruct) MoE model designed for real-world agents requiring fast execution and high efficiency at scale. Uses "fast thinking" mechanism to reduce token cost to ~1/4 of comparable models. Hybrid linear attention (7:1 Lightning Attention + MLA). Apache 2.0 open weights. Superseded by Ling 3.0 Flash.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-2.6-1T` open weights), OpenRouter, Novita AI. OpenAI-compatible API via vLLM/SGLang.
- **Release / knowledge:** 2026-04-23; deprecated 2026-08-24.
- **IDs:** `inclusionAI/Ling-2.6-1T`
- **Context window:** 262,144 tokens (256K) — verified via Hugging Face, CloudPrice, LLMReference; up to 32,768 output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes. Tool calling: yes (JSON/tool use, structured outputs).
- **Pricing (as of 2026-10-09):** $0.075/1M input, $0.625/1M output (OpenRouter). Novita: $0.30/$2.50. Apache 2.0 open weights.
- **Architecture:** 1T total / 63B active MoE, 80 layers, 256 experts with 8 active + 1 shared, hidden size 8192. Hybrid linear attention (7:1 Lightning Attention + MLA). Fast thinking mechanism for reduced token overhead. Production-ready for agent frameworks (Claude Code, OpenClaw, OpenCode, CodeBuddy).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **89.8%** (Temperature2) / **90%** (44B)
- IFBench: **56.9%** (Temperature2) / **57%** (44B)
- Function calling: supported (LLMReference, Hugging Face)
- Structured outputs: supported (LLMReference, Hugging Face)
- Open-source SOTA on BFCL-V4, TAU2-Bench (Hugging Face)

Reasoning / knowledge:

- Intelligence Index (CloudPrice): **17.0 / #189**
- Intelligence Index (44B): **26.1**
- Intelligence Index (PricePerToken): **26.6 / 70th percentile**
- Intelligence Index (Hugging Face): **34** (~16M output tokens)
- GPQA Diamond: **75.2%** (PricePerToken, 66th percentile) / **75%** (44B)
- HLE: **8.7%** (44B) / **8%** (ChinaIDB)
- LongContext Reasoning: **41.7%** (Temperature2)

Coding:

- LiveCodeBench: **61.68%** (ChinaIDB)
- SciCode: **37%** (44B)
- SWE-bench Verified: open-source SOTA (Hugging Face)
- ArtifactsBench: **59.31%** (ChinaIDB)

Long context:

- Context window: **262,144 tokens** (256K) — verified via Hugging Face, CloudPrice, LLMReference
- LongContext Reasoning: **41.7%** (Temperature2)

Multimodal:

- Text input only (CloudPrice, LLMReference)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-Bench 89.8%, function calling + structured outputs. Good agentic tool use, open-source SOTA on BFCL-V4 and TAU2-Bench.
- **Reasoning: 65/100.** Intelligence Index 17-34, GPQA 75.2%. Moderate reasoning, significant variation by source. Fast thinking mode trades some reasoning depth for speed.
- **Context window: 82/100.** 256K token context. Good long-context capability.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 68/100.** LiveCodeBench 61.68%, SWE-bench Verified open-source SOTA. Moderate coding with fast execution.
- **Cost efficiency: 95/100.** $0.075/$0.625 per 1M tokens — exceptional value for a 1T model. Apache 2.0 open weights. Fast thinking reduces token cost to ~1/4.
- **Overall Score: 60/100.** Mean of Tool (72), Reasoning (65), Context (82), Multimodal (15), Coding (68) = 302/5 = 60.4 → 60. Excellent value open-weight model with strong agentic tool use and fast execution, but text-only and moderate reasoning.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
