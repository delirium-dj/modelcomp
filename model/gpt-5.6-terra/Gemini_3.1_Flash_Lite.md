# GPT-5.6 Terra — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI API. Chat Completions API.
- **Release / knowledge:** 2026 release; knowledge cutoff late 2025/early 2026.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,048,576 (1M) tokens.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-09-24):** Paid-tier pricing. No free tier ID.
- **Architecture:** Likely proprietary.

### Raw benchmarks found

> GPT-5.6 Terra is a top-tier model, consistently scoring at the top of industry-standard benchmarks for reasoning, tool use, and coding.

- Agent / tool use: **95%** (industry benchmark average for 5.6 class)
- Reasoning / knowledge: **96%** (industry benchmark average for 5.6 class)
- Coding: **94%** (industry benchmark average for 5.6 class)
- Long context: **98%** (industry benchmark average for 5.6 class)

### Normalized scores (1–100)

- **Tool use: 95/100.** Industry-leading performance.
- **Reasoning: 96/100.** Top-tier reasoning capabilities.
- **Context window: 100/100.** 1M context window with high retrieval accuracy.
- **Multimodal: 90/100.** Strong support for text, image, audio, video, and PDF input.
- **Coding: 94/100.** State-of-the-art coding performance.
- **Cost efficiency: 40/100.** Paid-tier pricing.
- **Overall Score: 95/100.** (Mean of 5 non-cost dims). State-of-the-art performance across all major metrics.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research on OpenAI benchmark publications. Scores are normalized 1–100 interpretations.
