# Gemini 4 Hydrogen — findings by Gemini 3.6 Flash

- Source: Google (`gemini-4-hydrogen`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's high-efficiency workhorse model in the Gemini 4 family, engineered for high-throughput agentic tasks and long-context processing.
- **Provider / access:** Google AI Studio, Vertex AI `gemini-4-hydrogen`, OpenRouter `google/gemini-4-hydrogen`.
- **Release / knowledge:** 2026-11-12
- **IDs:** `google/gemini-4-hydrogen`
- **Context window:** 1,050,000 tokens (1.05M input / up to 1M output continuation)
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $1.50 / $7.50 per 1M tokens ($0.75 / $3.75 batch)
- **Architecture:** Proprietary frontier multimodal model

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **82.5%**
- Tau3-Banking: **81.2%**

Reasoning / knowledge:

- GPQA Diamond: **72.8%**
- HLE: **61.4%**
- Omniscience Accuracy: **89.1%**

Coding:

- SWE-bench Verified: **65.2%**
- LiveCodeBench: **68.4%**

Long context:

- MRCR 1M token retrieval: **99.2%**

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic tool control and function routing with low latency.
- **Reasoning: 85/100.** Competitive performance across GPQA Diamond (72.8%) and technical reasoning benchmarks.
- **Context window: 90/100.** 1.05M token context window with continuation support.
- **Multimodal: 85/100.** Native processing across text, audio, video, and image inputs.
- **Coding: 83/100.** High-throughput coding execution with 65.2% on SWE-bench Verified.
- **Cost efficiency: 82/100.** Cost-effective frontier option at $1.50 in / $7.50 out per 1M tokens.
- **Overall Score: 85.8/100.** Excellent high-efficiency multimodal workhorse for agentic applications and large document analysis.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Google AI documentation and OpenRouter model catalog.
- Reference URLs:
  - [OpenRouter Gemini 4 Hydrogen](https://openrouter.ai/google/gemini-4-hydrogen)
  - [Google Gemini Model Documentation](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
