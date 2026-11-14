# Ling 3.2 Flash — findings by Gemini 3.6 Flash

- Source: inclusionAI (`ling-3.2-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** inclusionAI's hybrid reasoning model supporting 1M-token context and up to 200 images per request with optional thinking toggles.
- **Provider / access:** inclusionAI API `ling-3.2-flash`, OpenRouter `inclusionai/ling-3.2-flash:free`.
- **Release / knowledge:** 2026-11-13
- **IDs:** `inclusionai/ling-3.2-flash`
- **Context window:** 1,050,000 tokens (1.05M context)
- **Modalities:** text/image in (up to 200 images); text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** Free ($0.00 / $0.00 per 1M tokens on OpenRouter free tier)
- **Architecture:** Hybrid reasoning architecture with dynamic thinking depth control

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **67.0%**
- Tau3-Banking: **65.8%**

Reasoning / knowledge:

- GPQA Diamond: **59.8%**
- HLE: **39.2%**
- Omniscience Accuracy: **76.0%**

Coding:

- LiveCodeBench: **51.2%**
- SWE-bench Verified: **42.8%**

Long context:

- RULER 1M token retrieval accuracy: **98.5%**

### Normalized scores (1–100)

- **Tool use: 72/100.** Capable function calling and long-context agent orchestration.
- **Reasoning: 72/100.** Balanced reasoning with dynamic thinking mode.
- **Context window: 90/100.** Full 1M token context window.
- **Multimodal: 80/100.** High-capacity multi-image processing (up to 200 images per call).
- **Coding: 46/100.** Moderate coding proficiency on LiveCodeBench (51.2%).
- **Cost efficiency: 100/100.** Free route on OpenRouter.
- **Overall Score: 72.0/100.** Highly cost-effective 1M-context visual reasoning model for multi-document and multi-image processing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via inclusionAI and OpenRouter catalog listings.
- Reference URLs:
  - [OpenRouter Ling 3.2 Flash Listing](https://openrouter.ai/inclusionai/ling-3.2-flash:free)
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
