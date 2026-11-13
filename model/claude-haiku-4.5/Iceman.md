# Claude Haiku 4.5 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `claude-haiku-4.5` (Claude Haiku 4.5, Anthropic) — folder: `model/claude-haiku-4.5`

## Overall
- **Overall Score: 80.4/100.** Fast, low-cost Claude model with 200K context, 64K output, solid coding/tool-use performance for its tier, and strong value for subagents and high-throughput tasks, though now legacy and superseded by Haiku 5.5.

## Scores
- **Tool use: 82/100.** Anthropic positions Haiku 4.5 for coding, agents, and computer-use workflows; it supports practical agentic/tool-calling use cases and is widely used for orchestrator/worker patterns where speed and cost matter.
- **Reasoning: 78/100.** Delivers capable reasoning for everyday coding and analysis tasks and Anthropic cites strong benchmark performance for its size/cost class (e.g. SWE-bench Verified and other results in launch materials), but it trails newer/larger Claude models on harder problems.
- **Context window: 84/100.** 200,000-token context window with up to 64,000-token max output per Anthropic docs, suitable for substantial codebases and documents but below 1M-context class models.
- **Multimodal: 76/100.** Supports text and image inputs with text output (per repo metadata/docs context), useful for screenshots and visual context in coding/support tasks, but not a broad multimodal generation model.
- **Coding: 82/100.** Anthropic highlights near-frontier coding quality for its generation at much higher speed/lower cost, making it effective for implementation, refactors, and agentic coding assistance.
- **Cost efficiency: 90/100.** Priced at $1/$5 per 1M input/output tokens with prompt caching options (Anthropic pricing/docs), offering strong throughput-to-cost for production assistants and subagents.
- **Overall Score: 81/100.** A high-value legacy fast model for coding and agent workflows, but newer Haiku 5.5 provides a more current option with improved capabilities/pricing/context in Anthropic's lineup.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://platform.claude.com/docs/en/models/haiku-4-5/overview
  - https://www.anthropic.com/news/claude-haiku-4-5
  - https://www.anthropic.com/pricing
