# GPT-5.1 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.1` (GPT-5.1, OpenAI) — folder: `model/gpt-5.1`

## Overall
- **Overall Score: 84.8/100.** Deprecated but capable OpenAI coding/agentic model with configurable reasoning effort, 400K context, and solid tool support; generally superseded by GPT-5.2+ for new work.

## Scores
- **Tool use: 86/100.** OpenAI docs show support across key endpoints including Chat Completions, Responses, Assistants workflows, Realtime-related surfaces (where applicable), and tool/function-calling-oriented usage patterns for coding/agentic tasks.
- **Reasoning: 84/100.** Supports configurable reasoning effort (`none` default, `low`, `medium`, `high`) and reasoning tokens, enabling flexible tradeoffs between latency/cost and depth for coding and agent tasks.
- **Context window: 90/100.** 400,000-token context window with 128,000 max output tokens, strong for large coding sessions and long documents though below 1M-context peers.
- **Multimodal: 80/100.** Accepts text and image inputs with text output, useful for screenshot/document-assisted coding and analysis but not broadly multimodal in generation.
- **Coding: 84/100.** Positioned by OpenAI as a flagship coding/agentic model of its release (repo/meta cites SWE-bench Verified 66.0%), effective for many engineering tasks but surpassed by newer GPT models.
- **Cost efficiency: 82/100.** Priced at $1.25/$10.00 per 1M input/output tokens with $0.125 cached input, reasonable for its capability class but less attractive now given deprecation and newer alternatives.
- **Overall Score: 82/100.** A reliable deprecated GPT generation for reproducibility and compatibility, with configurable reasoning and solid coding/agent support but outclassed by successors.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://developers.openai.com/api/docs/models/gpt-5.1
  - https://openai.com/index/gpt-5.1/
  - https://openai.com/api/pricing/