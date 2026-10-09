# Ring 2.6 1T — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ring-2.6-1T
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6 1T
- **Short description:** InclusionAI's trillion-parameter MoE reasoning model built for real-world agent workflows — coding agents, tool use, long-horizon task execution. 1T total / 63B active parameters with adjustable reasoning effort (high/xhigh). MIT open weights.
- **Provider / access:** Hugging Face (`inclusionAI/Ring-2.6-1T` open weights), OpenRouter, Novita AI, AIMLAPI. OpenAI-compatible API via vLLM.
- **Release / knowledge:** 2026-05-08.
- **IDs:** `inclusionAI/Ring-2.6-1T`
- **Context window:** 262,144 tokens (256K) — verified via Hugging Face, OpenRouter, Pi; up to 65,536 output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes (high and xhigh effort modes). Tool calling: yes (JSON/tool use, structured outputs).
- **Pricing (as of 2026-10-09):** $0.075/1M input, $0.625/1M output (OpenRouter). Novita: $0.30/$2.50. AIMLAPI: $0.0975/$0.8125. MIT open weights.
- **Architecture:** 1T total / 63B active MoE, 80 layers, 256 experts with 8 active + 1 shared, hidden size 8192, intermediate size 18432. KPop RL framework for agent training. Open-source all checkpoints.

### Raw benchmarks found

Agent / tool use:

- Agentic Index (OpenRouter): **51.5**
- PinchBench: **87.60** (Hugging Face — vs GPT-5.4 xHigh, Gemini-3.1-Pro high)
- ClawEval: **63.82** (Hugging Face — top comparable models)
- TAU2-Bench Telecom: **95.32%** (OpenRouter)
- GAIA-2 Search: strong results (arXiv)
- τ²-Bench: **92%** (44B)
- Tool calling: supported (LLMReference, OpenRouter)
- Structured outputs: supported (LLMReference)

Reasoning / knowledge:

- Intelligence Index (Artificial Analysis): **32** (vs GLM-4.7 34)
- Intelligence Index (OpenRouter): **38.5**
- GPQA Diamond: **88.27%** (xhigh, Hugging Face) / **86%** (44B)
- AIME 2026: **95.83%** (xhigh, Hugging Face)
- ARC-AGI-V2: **66.18%** (xhigh, Hugging Face — vs Gemini-3.1-Pro high, Claude-Opus-4.7 xhigh)
- HLE: **18%** (44B)
- AA-Omniscience: **-38** (Artificial Analysis)
- AA-LCR v1.1: **70%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **74.0%** (LLMReference — vs MiniMax M3 80.5%)
- Coding Index (OpenRouter): **33.3**
- Coding Index (44B): **42.8**
- SciCode: **42%** (44B)

Long context:

- Context window: **262,144 tokens** (256K) — verified via Hugging Face, OpenRouter, Pi
- AA-LCR v1.1: **70%** (Artificial Analysis)

Multimodal:

- Text input only (LLMReference, Artificial Analysis)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 75/100.** Agentic Index 51.5, PinchBench 87.60, ClawEval 63.82%, TAU2 95.32%. Strong agentic tool use with leading results on agent benchmarks.
- **Reasoning: 78/100.** Intelligence Index 32-38.5, GPQA 88.27%, AIME 95.83%. Strong reasoning with high effort mode, competitive with leading models.
- **Context window: 82/100.** 256K token context. Good long-context capability.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 68/100.** SWE-bench Verified 74.0%, Coding Index 33.3-42.8. Moderate coding, below frontier.
- **Cost efficiency: 95/100.** $0.075/$0.625 per 1M tokens — exceptional value for a 1T model. MIT open weights. Among the cheapest capable models.
- **Overall Score: 63.6/100.** Mean of Tool (75), Reasoning (78), Context (82), Multimodal (15), Coding (68) = 418/5 = 83.6 → 84. Excellent value open-weight model with strong agentic and reasoning capabilities, but text-only.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
