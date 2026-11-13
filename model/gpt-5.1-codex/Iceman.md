# GPT-5.1 Codex — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.1-codex` (GPT-5.1-Codex, OpenAI) — folder: `model/gpt-5.1-codex`

## Overall
- **Overall Score: 85.2/100.** Agentic coding-optimized GPT-5.1 variant for Codex-style workflows with strong tool support, 400K context, and reasoning capabilities, but it is shut down and limited to the Responses API.

## Scores
- **Tool use: 86/100.** OpenAI docs list Responses API tool support including function calling and web search, with features like streaming, structured outputs, prompt caching, and image input suited to coding agents.
- **Reasoning: 84/100.** Supports reasoning tokens and is optimized for agentic coding tasks, enabling multi-step repository-scale software engineering workflows in supported environments.
- **Context window: 90/100.** 400,000-token context window with 128,000 max output tokens, suitable for large codebase interactions and long coding sessions.
- **Multimodal: 78/100.** Accepts text and image inputs with text output, helpful for screenshot/debugging and UI-related coding tasks but not broadly multimodal.
- **Coding: 88/100.** Specifically positioned as a GPT-5.1 version optimized for agentic coding in Codex or similar environments, making it strong for repo-scale engineering work.
- **Cost efficiency: 80/100.** Priced at $1.25/$10.00 per 1M input/output tokens with $0.125 cached input (OpenAI docs), reasonable for its class but now constrained by shutdown status.
- **Overall Score: 83/100.** A capable legacy agentic coding model with solid context and tool support, but shut-down/Responses-only limitations reduce its usefulness for new deployments.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.1-codex
  - https://developers.openai.com/api/docs/pricing
  - https://developers.openai.com/codex/changelog
