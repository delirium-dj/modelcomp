# GPT-5.2 Codex — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.2-codex` (GPT-5.2-Codex, OpenAI) — folder: `model/gpt-5.2-codex`

## Overall
- **Overall Score: 86.4/100.** Specialized OpenAI coding model optimized for long-horizon agentic coding in Codex-like environments, with strong reasoning/tool support and 400K context, but now shut down and limited to the Responses API.

## Scores
- **Tool use: 88/100.** OpenAI docs list support for function calling, web search, hosted shell, and skills in the Responses API, making it well suited for agentic software engineering workflows and tool-driven coding tasks.
- **Reasoning: 86/100.** Supports reasoning effort settings (`low`, `medium`, `high`, `xhigh`) and reasoning tokens, enabling deeper multi-step problem solving for complex coding and refactoring tasks.
- **Context window: 90/100.** 400,000-token context window with 272,000 max input tokens and 128,000 max output tokens, strong for large codebase interactions and long coding sessions.
- **Multimodal: 78/100.** Accepts text and image inputs with text output, useful for screenshot/UI-assisted debugging and coding tasks but not broadly multimodal.
- **Coding: 90/100.** Positioned as OpenAI's most intelligent coding model optimized for long-horizon agentic coding at release, with features like structured outputs, prompt caching, and Responses-oriented agent workflows.
- **Cost efficiency: 82/100.** Priced at $1.75/$14.00 per 1M input/output tokens with $0.175 cached input, reasonable for a high-capability coding model, though availability is now limited due to shutdown status.
- **Overall Score: 85/100.** A strong agentic coding specialist with good context and tool support for its generation, but its shut-down status reduces practical value for new deployments.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.2-codex
  - https://developers.openai.com/api/docs/pricing
  - https://openai.com/api/pricing/
