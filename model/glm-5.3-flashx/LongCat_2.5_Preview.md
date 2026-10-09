# GLM-5.3 FlashX — findings by LongCat 2.5 Preview

- Source: Z.ai/GLM-5.3-FlashX
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 FlashX
- **Short description:** High-speed variant of Z.ai's GLM-5.3-Flash, a natively multimodal open-weights MoE model. Delivers inference speeds up to 200 tokens/s with a 1M context window. MIT-licensed open weights.
- **Provider / access:** Z.ai API (`z-ai/glm-5.3-flashx`), Alibaba Cloud Model Studio, OpenRouter, 28+ third-party providers. OpenAI-compatible `/v1/chat/completions`.
- **Release / knowledge:** 2026-09-18 (FlashX variant; base GLM-5.3-Flash released 2026-08-26).
- **IDs:** `z-ai/glm-5.3-flashx` (also `zai-org/GLM-5.3-Flash` on Hugging Face for self-hosting)
- **Context window:** 1,048,576 tokens (verified via Aliyun, Tokenator, LMSpeed); up to 131,072 output tokens.
- **Modalities:** Text, Image, Video, File input; Text output. Reasoning: yes. Tool calling: yes (function calling, structured outputs, prefix completion, context caching).
- **Pricing (as of 2026-10-09):** ~$0.15–0.20/1M input, ~$0.30–0.50/1M output (varies by provider; AIMLAPI $0.195/$0.325, Kilo $0.15/$0.50). Extremely cost-efficient. MIT license for self-hosting.
- **Architecture:** 320B total / 18B active MoE, 45 decoder layers, hybrid sparse (11 DeepSeek-style MLA layers) + linear attention (34 KDA layers), 288 routed experts with top-8 routing, 1 MTP layer, native FP8 weights. Pre-trained on 30T-token multimodal corpus.

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6: **48.8** (Z.ai model card — vs Opus 4.8 41.0, DeepSeek-V4-Vision-Exp 38.8)
- Agentic Index: **58** (Artificial Analysis — above Claude Opus 4.8)
- Z.ai Code Bench v1.0 (max effort): **29.0** (vs Claude Opus 4.8 29.5)
- Function calling: supported (Aliyun, AIMLAPI)
- Structured outputs: supported (Aliyun, AIMLAPI)

Reasoning / knowledge:

- Intelligence Index: **57** (Artificial Analysis v4.1.1)
- MMVU: **80.5** (Z.ai model card)
- MMLU: **88.1** (Z.ai base model eval)
- BBH: **86.6** (Z.ai base model eval)

Coding:

- Terminal Bench 2.1: **84.3** (Z.ai model card — vs Opus 4.8 85.0, GPT-5.6 Terra 87.4)
- DeepSWE v1.1: **63.4** (Z.ai model card — vs Opus 4.8 58.0, DeepSeek-V4-Vision-Exp 59.3)
- NL2Repo: **56.3** (Z.ai model card — vs Opus 4.8 69.7)
- LiveCodeBench-Base: **37.6** (Z.ai base model eval)

Long context:

- Context window: **1,048,576 tokens** (verified via Aliyun, Tokenator, LMSpeed)
- Hybrid sparse + linear attention architecture designed for long-context efficiency
- 4.4× smaller KV cache vs GLM-3 flagship

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic Index 58, AutomationBench 48.8, function calling + structured outputs. Capable agentic model but below frontier on complex multi-step automation.
- **Reasoning: 73/100.** Intelligence Index 57, MMVU 80.5, MMLU 88.1. Solid general reasoning, approaching but not matching frontier models.
- **Context window: 92/100.** 1M token context with hybrid attention architecture optimized for long-context serving. Among the largest context windows available.
- **Multimodal: 86/100.** Native text, image, video, and file input. First natively multimodal model in the GLM-5 series. MMVU 80.5 shows strong visual understanding.
- **Coding: 82/100.** Terminal Bench 84.3, DeepSWE 63.4, Code Bench 29.0 (near Opus 4.8). Strong coding for the price tier.
- **Cost efficiency: 96/100.** ~$0.15-0.20/$0.30-0.50 per 1M tokens — among the cheapest frontier-capable models. MIT open weights for self-hosting.
- **Overall Score: 81/100.** Mean of Tool (74), Reasoning (73), Context (92), Multimodal (86), Coding (82) = 407/5 = 81.4 → 81. Exceptional value proposition — near-frontier capability at a fraction of the cost.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
