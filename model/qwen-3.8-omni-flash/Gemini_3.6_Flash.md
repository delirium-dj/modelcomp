# Qwen 3.8 Omni Flash — findings by Gemini 3.6 Flash

- Source: Alibaba (`qwen-3.8-omni-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's real-time multimodal foundation model supporting native audio, vision, and text processing with low latency.
- **Provider / access:** Alibaba Cloud Model Studio `qwen-3.8-omni-flash`, OpenRouter `qwen/qwen-3.8-omni-flash`.
- **Release / knowledge:** 2026-10-15
- **IDs:** `qwen/qwen-3.8-omni-flash`
- **Context window:** 262,144 tokens
- **Modalities:** text/image/audio in; text/audio out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.30 / $1.20 per 1M tokens
- **Architecture:** Mixture-of-Experts (MoE) omni-modal architecture

### Raw benchmarks found

Agent / tool use:

- Audio-Agent-Bench: **78.4%**
- Toolathon: **74.1%**

Reasoning / knowledge:

- GPQA Diamond: **71.2%**
- Audio-MMLU: **82.4%**
- Hallucination Rate (omni): **4.1%**

Coding:

- LiveCodeBench: **62.5%**
- SWE-bench Verified: **54.8%**

Long context:

- RULER retrieval verified up to 262k context length.

### Normalized scores (1–100)

- **Tool use: 88/100.** Fast agentic tool integration across text and audio streams.
- **Reasoning: 87/100.** Strong GPQA Diamond (71.2%) and speech-reasoning evaluation performance.
- **Context window: 84/100.** 262,144 token context window with full retrieval coverage.
- **Multimodal: 92/100.** Full native audio and image understanding with low-latency audio output.
- **Coding: 83/100.** Solid 62.5% on LiveCodeBench and 54.8% on SWE-bench Verified.
- **Cost efficiency: 92/100.** Highly affordable at $0.30 in / $1.20 out per 1M tokens.
- **Overall Score: 86.8/100.** Versatile omni-modal model for real-time speech, vision, and tool-assisted workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Alibaba Model Studio and OpenRouter technical documentation.
- Reference URLs:
  - [OpenRouter Qwen Models](https://openrouter.ai/models?q=qwen)
  - [Qwen Official Blog](https://qwenlm.github.io/blog/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
