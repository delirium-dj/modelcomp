# Gemini 2.5 Flash Lite — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-2.5-flash-lite` (Gemini 2.5 Flash-Lite, Google) — folder: `model/gemini-2.5-flash-lite`

## Overall
- **Overall Score: 83/100.** Low-cost, high-throughput multimodal Gemini model with 1M context and broad tool support, well suited for lightweight extraction/classification and high-frequency workloads, though access is limited for some users and newer Flash-Lite models are preferred for new projects.

## Scores
- **Tool use: 84/100.** Google docs list support for code execution, context caching, file search, function calling, Google Maps/Search grounding, structured outputs, thinking, and URL context, enabling practical agentic and automation workflows.
- **Reasoning: 74/100.** Supports thinking and is capable for straightforward tasks, but it is optimized for speed/cost and lightweight workloads rather than deep, complex reasoning.
- **Context window: 94/100.** 1,048,576-token input context and 65,536-token output limit per Google docs, strong for large-document and multimodal processing pipelines.
- **Multimodal: 88/100.** Accepts text, image, video, audio, and PDF inputs with text output, making it versatile for multimodal ingestion, transcription-assisted flows, and document understanding.
- **Coding: 75/100.** Adequate for simple coding assistance, transformations, and automation scripts, but not the best choice for difficult software engineering compared with larger or newer Gemini models.
- **Cost efficiency: 95/100.** Positioned as Google’s most cost-efficient multimodal model for high-frequency tasks (repo metadata notes ~$0.10/$0.40 per 1M in/out with free-tier availability in Google AI Studio), offering excellent value for bulk workloads.
- **Overall Score: 80/100.** Excellent price/performance for fast, large-context multimodal processing and simple tool-using tasks, with tradeoffs in reasoning depth and evolving access/migration guidance.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://deepmind.google/technologies/gemini/
