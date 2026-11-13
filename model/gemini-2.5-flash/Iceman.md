# Gemini 2.5 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-2.5-flash` (Gemini 2.5 Flash, Google) — folder: `model/gemini-2.5-flash`

## Overall
- **Overall Score: 86.8/100.** High-throughput multimodal Gemini model with 1M context, broad tool/capability support, and strong price-performance for its generation, but deprecated with automatic routing to Gemini 3.5 Flash-Lite after 2026-12-01.

## Scores
- **Tool use: 86/100.** Google docs list support for code execution, context caching, file search, function calling, Google Maps/Search grounding, structured outputs, thinking, and URL context, enabling capable agentic and developer integrations.
- **Reasoning: 82/100.** Includes thinking support and solid general reasoning for high-volume tasks, though newer Gemini 3.x/4 models provide improved capability and efficiency.
- **Context window: 94/100.** 1,048,576-token input context and 65,536-token output limit per Google docs, excellent for large multimodal/document workloads.
- **Multimodal: 90/100.** Accepts text, images, video, and audio inputs with text output, making it effective for multimodal extraction, analysis, and agent workflows.
- **Coding: 82/100.** Strong for fast coding assistance and code-related multimodal tasks at Flash latency/cost, but not the top Gemini option for hardest coding problems compared to newer models.
- **Cost efficiency: 86/100.** Repo metadata indicates paid pricing around $0.30/$2.50 per 1M in/out with free-tier availability on Google AI Studio (subject to access/rate limits), offering good throughput value though migration is required.
- **Overall Score: 83/100.** A capable and efficient legacy Flash workhorse for multimodal long-context tasks, but deprecation and scheduled routing make it a transition/migration target rather than a long-term choice.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://deepmind.google/technologies/gemini/
