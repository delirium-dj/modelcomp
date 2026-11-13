# Gemini 4 Hydrogen — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-4-hydrogen` (Gemini 4 Hydrogen, Google) — folder: `model/gemini-4-hydrogen`

## Overall
- **Overall Score: 90.8/100.** Fast, efficient multimodal Gemini 4 model with very large unified context/output capabilities, strong tooling support, and configurable thinking levels, but performance can drop at lower thinking settings for complex agentic coding.

## Scores
- **Tool use: 90/100.** Google docs list support for function calling, code execution, computer use, file search, Google Search/Maps grounding, URL context, and structured outputs, making it well-equipped for agentic and developer workflows.
- **Reasoning: 87/100.** Supports thinking with four levels (`low`, `medium`, `high`, `xhigh`) to trade speed/cost for depth; suited to everyday coding/agentic tasks, with the caveat (per repo metadata) that complex work benefits from higher thinking effort.
- **Context window: 97/100.** Unified 1,048,576-token context window with default 65,536 max output and up to 1,048,576 output via long decode, enabling very large-context and long-output use cases.
- **Multimodal: 92/100.** Accepts text, image, video, audio, and PDF inputs with text output per Google model docs, providing broad multimodal understanding for developer and document workflows.
- **Coding: 88/100.** Positioned for everyday coding and agentic workflows with fast/efficient generation, strong tool integration, and code execution/computer-use capabilities; detailed public benchmark numbers are not fully listed on the model page.
- **Cost efficiency: 84/100.** Priced at $1.50/$7.50 per 1M input/output tokens with cached input at $0.075 (per repo metadata/pricing context), offering solid efficiency for its capability tier though not the cheapest option.
- **Overall Score: 86/100.** Strong all-around multimodal and tool-using model with exceptional context/output headroom and speed, with best results on complex tasks requiring higher thinking configurations.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen
  - https://ai.google.dev/docs/whats-new-gemini-4-hydrogen
  - https://deepmind.google/technologies/gemini/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gemini-4-hydrogen/meta.json
field: officialUrl
proposed: https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen
source: https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen
```