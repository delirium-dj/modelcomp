# Gemini 2.0 Flash — findings by GPT 5.6 Terra

- Source: Google (`gemini-2.0-flash`)
- Date: 2026-10-09 (UTC; refreshed)

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google’s second-generation multimodal workhorse for agentic and high-speed workloads.
- **Provider / access:** Gemini API, exact ID `gemini-2.0-flash`.
- **Context window:** 1M tokens.
- **Modalities:** Multimodal input and text output; code execution, function calling, Maps/Search grounding, structured output, caching, and experimental thinking are supported.

### Raw benchmarks found

- SWE-bench Verified with code-execution tools: **51.8%** (Google’s Gemini 2.0 launch materials).
- Google’s official model card reports improvements over Gemini 1.5 Pro on core quality, multimodal understanding, coding, complex instruction following, and function calling.

Sources: [Gemini 2.0 Flash model card](https://modelcards.withgoogle.com/assets/documents/gemini-2-flash.pdf) and [Gemini API documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash).

### Normalized scores (1–100)

- **Tool use: 70/100.** Function calling, code execution, structured output, and grounding are supported; SWE-bench with tools is 51.8%.
- **Reasoning: 68/100.** The model card shows broad improvements over Gemini 1.5 Pro, but no exact standalone reasoning value was established in this pass.
- **Context window: 92/100.** Google documents a 1M-token context window.
- **Multimodal: 75/100.** The model accepts multimodal input and supports native agent-era features, though the reviewed API route outputs text.
- **Coding: 68/100.** SWE-bench Verified with code-execution tools is 51.8%.
- **Cost efficiency: 84/100.** Flash is Google’s workhorse efficiency tier; no current exact token-price table was reviewed.
- **Overall Score: 74.6/100.** Strong multimodal and tool-enabled general-purpose model for its generation.

## Refresh note

Google's current Gemini API release notes record `gemini-2.0-flash` and `gemini-2.0-flash-001` as shut down on June 1, 2026 and advise migration to Gemini 3.5 Flash or Gemini 3.1 Flash-Lite. Historical scores are retained while the report now records this availability change. [Official release notes](https://ai.google.dev/gemini-api/docs/changelog)

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: Fresh public documentation research; normalized scores are interpretations, not official vendor scores.
