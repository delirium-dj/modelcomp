# GPT-5.2 Pro — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.2-pro` (GPT-5.2 Pro, OpenAI) — folder: `model/gpt-5.2-pro`

## Overall
- **Overall Score: 86/100.** High-compute OpenAI pro-tier reasoning model for complex professional and research-grade problems, with strong tool support in Responses API and large context, but very high pricing and limited endpoint availability make it a specialized choice.

## Scores
- **Tool use: 86/100.** OpenAI docs list support for Responses API features/tools including function calling, file search, image generation, MCP, and web search (where enabled), suitable for advanced multi-turn/tool-assisted workflows despite Responses-only endpoint support.
- **Reasoning: 90/100.** Designed for tougher problems with configurable reasoning effort (`medium`, `high`, `xhigh`) and reasoning token support; intended for multi-step, high-precision professional tasks where latency/cost are secondary.
- **Context window: 90/100.** 400,000-token context window with 128,000 max output tokens, enabling substantial document/code context and long-form reasoning outputs.
- **Multimodal: 80/100.** Supports text and image inputs with text output, useful for document/screenshot-assisted analysis but not broadly multimodal in generation.
- **Coding: 84/100.** Capable for complex coding/research-grade engineering tasks when used via supported workflows, but not positioned as the newest default coding model and constrained by cost/endpoint access.
- **Cost efficiency: 55/100.** Extremely expensive at $21/$168 per 1M input/output tokens per OpenAI docs, limiting use to high-value problems where correctness and depth justify premium compute.
- **Overall Score: 83/100.** A powerful but costly specialist for difficult reasoning and professional workflows, best reserved for cases where cheaper/newer models are insufficient.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.2-pro
  - https://openai.com/api/pricing/
  - https://developers.openai.com/api/docs/pricing
