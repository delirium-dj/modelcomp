# GPT-5 Nano — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5 Nano
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's ultra-compact model from the GPT-5 family (Aug 2025). Designed for extreme affordability — $0.05/$0.40 per 1M tokens. 400K context, 128K max output. Text + image input. Ideal for high-volume classification, extraction, and lightweight agentic loops.
- **Provider / access:** OpenAI API, Azure Foundry. Active.
- **Release / knowledge:** 2025-08-07 release. Knowledge cutoff May 2024.
- **IDs:** `openai/gpt-5-nano` (snapshot: `gpt-5-nano-2025-08-07`)
- **Context window:** 400,000 tokens; 128,000 max output.
- **Modalities:** Text, image in; text out; tool calling; structured outputs. Prompt caching support.
- **Pricing (as of 2026-10-13):** $0.05 / $0.40 per 1M tokens. Cached: $0.005 input.
- **Architecture:** Proprietary lightweight multimodal transformer. Undisclosed parameters.

### Raw benchmarks found

- Key Information Extraction: ~84.7 on IDP benchmarks (source: openai.com)
- High token throughput, low TTFT latency (source: openrouter.ai, azure.com)
- Below mid-tier GPT-5 Mini on complex reasoning/math/code (source: vals.ai)

### Normalized scores (1–100)

- **Tool use: 65/100.** Basic tool calling and structured outputs. Lightweight agentic loops. Not designed for complex multi-step agent tasks.
- **Reasoning: 58/100.** Trades reasoning depth for speed. Below GPT-5 Mini on complex tasks. Good for simple classification/extraction.
- **Context window: 88/100.** 400K input is generous (ref: 400K ≈ 85-88). 128K max output is very large.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video. Basic vision = 50-60.
- **Coding: 55/100.** Lightweight model. Behind mid-tier on deep code generation. Adequate for simple code tasks and extraction.
- **Cost efficiency: 99/100.** $0.05/$0.40 is among the cheapest frontier-family models ever. $0.005 cached. Exceptional volume economics.
- **Overall Score: 64/100.** Mean of (65 + 58 + 88 + 55 + 55) / 5 = 64.2, rounded to 64. Purpose-built for high-volume, low-cost tasks; not a reasoning or coding model.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (openai.com, openrouter.ai, vals.ai, roboflow.com, azure.com, apxml.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
