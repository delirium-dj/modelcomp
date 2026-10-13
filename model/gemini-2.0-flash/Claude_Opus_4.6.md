# Gemini 2.0 Flash — findings by Claude Opus 4.6

- Source: Google / Gemini 2.0 Flash
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's high-speed multimodal workhorse (Feb 2025 GA). 2x faster than 1.5 Flash. Native tool use, function calling, code execution, Multimodal Live API. 1M context at ultra-low pricing. Flash-Lite and Thinking variants available.
- **Provider / access:** Google AI Studio, Vertex AI. Free tier available.
- **Release / knowledge:** Late 2024 preview; Feb 2025 GA.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens (1M); 65,535 max output.
- **Modalities:** Text, image, audio, video in; text out. Native multimodal architecture. Function calling, code execution, Multimodal Live API.
- **Pricing (as of 2026-10-13):** ~$0.15 / $0.60 per 1M tokens. Free tier available. Context caching supported.
- **Architecture:** Proprietary; Google streamlined transformer. 2x speed over 1.5 Flash. Variants: Flash, Flash-Lite, Flash Thinking.

### Raw benchmarks found

- Strong on LiveCodeBench, MMLU-Pro, GPQA (closes gap with Pro-tier models)
- Complex instruction following and multimodal understanding
- Native tool/function execution benchmarks strong

### Normalized scores (1–100)

- **Tool use: 80/100.** Advanced native function calling, code execution, Multimodal Live API. Near-Pro-tier on tool benchmarks. Strong agentic support.
- **Reasoning: 76/100.** Bridges gap with Pro-tier. Thinking variant available for deep reasoning. Strong MMLU-Pro/GPQA. Speed-optimized tradeoff.
- **Context window: 92/100.** 1M verified (ref: 1M = 90-95). 65K max output is generous. Unified pricing (no tier distinctions).
- **Multimodal: 82/100.** Text + image + audio + video in; text out. Full native multimodal. Multimodal Live API for real-time interaction.
- **Coding: 76/100.** Strong LiveCodeBench. Code execution built-in. Speed-optimized tradeoff vs Pro-tier coding depth.
- **Cost efficiency: 96/100.** $0.15/$0.60 is among the cheapest frontier models. Free tier available. Context caching for further savings.
- **Overall Score: 81/100.** Mean of (80 + 76 + 92 + 82 + 76) / 5 = 81.2, rounded to 81. Exceptional speed-to-quality ratio with full multimodal and tool support at rock-bottom pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (googleblog.com, google.dev, futureagi.com, medium.com, datacamp.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
