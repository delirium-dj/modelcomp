# Gemini 2.0 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-2.0-flash` (Gemini 2.0 Flash, Google) — folder: `model/gemini-2.0-flash`

## Overall
- **Overall Score: 81.2/100.** Historically significant 1M-context multimodal Flash model that brought fast tool-using multimodal workflows into the mainstream, but it is deprecated and shut down, making it a historical reference rather than a current option.

## Scores
- **Tool use: 82/100.** Google docs list support for code execution, context caching, function calling, Google Maps/Search grounding, and structured outputs, with native tool-use positioning in its generation.
- **Reasoning: 74/100.** Offered solid fast reasoning for general and multimodal tasks in its era (with experimental thinking noted in docs), but it is well behind newer Gemini 2.5/3.x/4 models.
- **Context window: 88/100.** 1,048,576-token input context window, though max output is limited to 8,192 tokens per Google docs, constraining long-form generation compared to newer models.
- **Multimodal: 86/100.** Accepts audio, images, video, and text inputs with text output, enabling broad multimodal understanding for its time.
- **Coding: 76/100.** Capable for fast coding assistance and tool-augmented tasks, but superseded by newer Flash/Pro models with better reasoning and output capacity.
- **Cost efficiency: 40/100.** Historically inexpensive (repo metadata cites ~$0.10/$0.40 per 1M on AI Studio historically), but it is shut down (2026-06-01 per docs) and unavailable for new use.
- **Overall Score: 72/100.** A strong historical multimodal workhorse with good tool support and long context, but deprecated/shut down status makes it unsuitable for new deployments.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://cloud.google.com/vertex-ai/generative-ai/pricing
