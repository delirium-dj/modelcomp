# Gemini 2.5 Pro — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-2.5-pro` (Gemini 2.5 Pro, Google) — folder: `model/gemini-2.5-pro`

## Overall
- **Overall Score: 88.8/100.** Historically strong long-context thinking flagship with 1M input context, broad multimodal inputs, and solid tool/reasoning support, but now deprecated/superseded by Gemini 3.x models with migration implications.

## Scores
- **Tool use: 88/100.** Google docs list support for code execution, context caching, file search, function calling, Google Maps/Search grounding, structured outputs, thinking, and URL context, enabling capable agentic and developer workflows.
- **Reasoning: 86/100.** Designed as a state-of-the-art thinking model for complex code/math/STEM and long-context analysis (repo/meta cites strong AIME/GPQA performance for its generation), though newer Gemini 3.x models surpass it.
- **Context window: 94/100.** 1,048,576-token input context and 65,536-token output limit per Google docs, excellent for large documents/codebases and long reasoning tasks.
- **Multimodal: 90/100.** Accepts audio, images, video, text, and PDF inputs with text output, providing broad multimodal understanding for analysis and coding assistance.
- **Coding: 86/100.** Strong at code reasoning, analysis of large codebases, and tool-assisted development for its era; still useful for compatibility but no longer the leading Gemini coding option.
- **Cost efficiency: 78/100.** Repo/meta indicates $1.25/$10.00 per 1M (<=200K) and $2.50/$15.00 (>200K), reasonable historically but less compelling given deprecation and newer alternatives at similar or better price/performance.
- **Overall Score: 84/100.** Capable long-context multimodal thinking model and important migration baseline, but deprecated and generally outclassed by newer Gemini generations.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://deepmind.google/technologies/gemini/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gemini-2.5-pro/meta.json
field: contextWindow
proposed: 1,048,576 input / 65,536 output tokens (deprecated; API routes to Gemini 3.8 Flash after 2026-12-01 per docs)
source: https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro
```