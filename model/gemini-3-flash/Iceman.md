# Gemini 3 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-3-flash` (Gemini 3 Flash preview, Google) — folder: `model/gemini-3-flash`

## Overall
- **Overall Score: 88.6/100.** Fast multimodal Flash preview model with 1M context, strong tool/reasoning support, and good cost/performance for interactive coding and analysis, but limited to 65K output and still a preview SKU.

## Scores
- **Tool use: 90/100.** Google docs indicate support for function calling, code execution, computer use, file search, Google Search/Maps grounding, URL context, and structured outputs, making it well-suited for tool-augmented and agentic workflows.
- **Reasoning: 86/100.** Thinking is supported and the model is positioned for state-of-the-art reasoning in the Flash line for its generation; preview status and later Flash revisions may surpass it for hardest tasks.
- **Context window: 92/100.** 1,048,576-token input context with 65,536 max output tokens per AI Studio model docs, strong for long-input analysis but with a modest output cap for very long generations.
- **Multimodal: 88/100.** Accepts text, image, video, audio, and PDF inputs and outputs text, enabling broad multimodal understanding for interactive analysis and developer workflows.
- **Coding: 87/100.** Positioned for interactive coding and analysis with strong tool integration and reasoning; repo/meta cites high GPQA/SWE-bench class performance, though detailed benchmark breakdowns are not fully listed on the model page.
- **Cost efficiency: 90/100.** Priced at $0.50/$3.00 per 1M input/output tokens (audio input higher per repo metadata/pricing context), offering attractive value for near-Pro analysis at Flash latency.
- **Overall Score: 85/100.** Excellent interactive multimodal coding/analysis model with strong tooling and long context, balanced by preview maturity and limited output length versus newer Gemini Flash generations.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://deepmind.google/technologies/gemini/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/gemini-3-flash/meta.json
field: contextWindow
proposed: 1,048,576 input / 65,536 output tokens
source: https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview
```