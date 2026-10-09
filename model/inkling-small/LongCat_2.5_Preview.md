# Inkling Small — findings by LongCat 2.5 Preview

- Source: Thinking Machines Lab/Inkling-Small
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Efficient open-weights multimodal MoE model from Thinking Machines Lab, the smaller sibling of the flagship Inkling (975B/41B-active). 276B total / 12B active parameters with native text, image, and audio input.
- **Provider / access:** Thinking Machines Lab Tinker API (`thinkingmachines/inkling-small`), DeepInfra, OpenRouter, Baseten, Together AI, Vercel AI Gateway. OpenAI-compatible `/v1/chat/completions`.
- **Release / knowledge:** 2026-07-30.
- **IDs:** `thinkingmachines/inkling-small` (also `thinkingmachines/Inkling-Small` on some providers)
- **Context window:** 524,288 tokens (verified via DeepInfra, LLM Stats, models.dev); up to 1,048,576 tokens on some providers (Baseten, OpenRouter).
- **Modalities:** Text, Image, Audio input; Text output. Reasoning: yes (variable thinking effort). Tool calling: yes (function calling, structured outputs, parallel function calling, prompt caching).
- **Pricing (as of 2026-10-09):** ~$0.30–0.50/1M input, ~$1.20/1M output, cached input ~$0.06–0.10/1M (varies by provider). Free tier available on some gateways (Kilo Gateway, OpenRouter). Apache 2.0 license for self-hosting.
- **Architecture:** 276B total / 12B active MoE, multimodal autoregressive transformer. Hierarchical patch encoder for images, discrete token encoding for audio, shared hidden space projection. Trained on NVIDIA GB300 NVL72 systems.

### Raw benchmarks found

Agent / tool use:

- Terminal Bench 2.1: **63.8%** (NVIDIA model card — Inkling family score)
- Function calling: supported (models.dev, Multigrid)
- Structured outputs: supported (models.dev)
- Parallel function calling: supported (CloudPrice)
- MCP Atlas: reported in Thinking Machines evaluation suite
- Agentic (coding) benchmarks: evaluated in Thinking Machines suite

Reasoning / knowledge:

- AA Index v4.1: **40.0%** (Thinking Machines — vs Qwen3.5 397B 34%, MiMo V2.5 37%, Minimax M2.7 38%, DeepSeek V4 Flash 40%, Nemotron 3 Ultra 40%)
- HLE with tools: **47.8%** (Thinking Machines — vs Qwen3.5 397B 48.3%, DeepSeek V4 Flash 45.1%, Inkling 46.0%)
- AIME 2026: **95.5%** (Thinking Machines — vs Inkling 97.1%, DeepSeek V4 Flash 95.8%)
- HMMT Feb 2026: **90.2%** (Thinking Machines — vs Inkling 86.3%, DeepSeek V4 Flash 93.9%)
- GPQA Diamond: **88.3%** (Thinking Machines — vs Inkling 87.2%, DeepSeek V4 Flash 89.5%)
- ARC-AGI-1: **84.0%** (Thinking Machines — vs Inkling 79.5%)
- ARC-AGI-2: **40.1%** (Thinking Machines — vs Inkling 36.5%)
- CritPt: **8.3%** (Thinking Machines — vs Inkling 5.4%)
- Intelligence Index (Command Code): **41.2**

Coding:

- SWEBench Verified: **80.2%** (bash-only harness; vs Qwen3.5 397B 76.4%, DeepSeek V4 Flash 79.0%, Inkling 77.6%)
- SWEBench Pro Public: **53.2%** (vs Inkling 54.3%)
- Coding Index (Command Code): **52.9**

Long context:

- Context window: **524,288 tokens** (verified via DeepInfra, LLM Stats); up to 1M on some providers
- LCR (Long Context Retrieval): **80%** (CloudPrice — #70 rank)

Multimodal:

- MMMU Pro (Standard 10): **73.3%** (NVIDIA model card)
- Audio MC: **54.9%** (Thinking Machines)
- MMAU: **77.0%** (Thinking Machines)
- VoiceBench: **90.1%** (Thinking Machines)

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal Bench 63.8%, function calling + structured outputs + parallel calling. Strong agentic tool use for an open-weights model, though below frontier closed-weight models.
- **Reasoning: 83/100.** AA Index 40%, HLE 47.8%, AIME 95.5%, GPQA 88.3%, ARC-AGI-1 84.0%. Excellent math reasoning, strong general reasoning. Competitive with models 5× its active parameter count.
- **Context window: 82/100.** 524K token context (up to 1M on some providers). Good long-context capability, though not the largest available.
- **Multimodal: 89/100.** Native text, image, and audio input — rare for open-weights models. Strong audio benchmark scores (VoiceBench 90.1%, MMAU 77.0%). No video input.
- **Coding: 78/100.** SWEBench Verified 80.2%, SWEBench Pro 53.2%, Coding Index 52.9%. Solid coding performance, especially for the parameter count and price.
- **Cost efficiency: 93/100.** ~$0.30-0.50/$1.20 per 1M tokens — extremely affordable for a 276B MoE. Apache 2.0 open weights. Free tier on some gateways.
- **Overall Score: 82/100.** Mean of Tool (76), Reasoning (83), Context (82), Multimodal (89), Coding (78) = 408/5 = 81.6 → 82.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
