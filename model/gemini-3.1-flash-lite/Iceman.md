# Gemini 3.1 Flash Lite — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-3.1-flash-lite` (Gemini 3.1 Flash-Lite, Google) — folder: `model/gemini-3.1-flash-lite`

## Overall
- **Overall Score: 83.8/100.** Stable, low-latency and cost-effective 1M-context multimodal model optimized for high-frequency lightweight tasks and structured extraction, with broad tool support but limited depth on difficult reasoning and a scheduled API shutdown.

## Scores
- **Tool use: 84/100.** Google docs list support for code execution, context caching, file search, function calling, Google Maps/Search grounding, structured outputs, thinking, and URL context, making it suitable for lightweight agentic pipelines and routing/extraction workflows.
- **Reasoning: 76/100.** Supports thinking but is explicitly optimized for straightforward, high-volume tasks; repo metadata notes weak 1M retrieval in some evaluations and it is not intended for the hardest reasoning workloads.
- **Context window: 94/100.** 1,048,576-token input context and 65,536-token output limit per Google docs, enabling large document/audio/video/PDF processing for bulk workflows.
- **Multimodal: 88/100.** Accepts text, image, video, audio, and PDF inputs with text output, providing strong multimodal ingestion coverage for transcription, translation, classification, and extraction use cases.
- **Coding: 77/100.** Adequate for simple coding help, transformations, and automation tasks, but less capable than larger Gemini models for complex software engineering or deep multi-step debugging.
- **Cost efficiency: 92/100.** Priced for high-volume efficiency (Google pricing shows low input/output rates, with AI Studio free tier availability per metadata/docs context), making it attractive for scale-sensitive applications.
- **Overall Score: 81/100.** Excellent value for fast, large-context multimodal processing and simple agentic tasks, balanced by lower reasoning depth and a planned stable API shutdown (2027-05-07 per metadata).

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/
