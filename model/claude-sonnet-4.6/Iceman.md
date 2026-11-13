# Claude Sonnet 4.6 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `claude-sonnet-4.6` (Claude Sonnet 4.6, Anthropic) — folder: `model/claude-sonnet-4.6`

## Overall
- **Overall Score: 86.4/100.** Capable Sonnet-tier model with adaptive thinking, 1M context, and solid coding/agentic performance at $3/$15 pricing, but newer Sonnet/Haiku/Fable tiers and successors have shifted the price-performance frontier.

## Scores
- **Tool use: 88/100.** Anthropic's Claude platform positions Sonnet 4.6 for agentic workflows with tool use and adaptive thinking; it is supported across Anthropic API and partner platforms, making it reliable for coding assistants and multi-step tasks.
- **Reasoning: 84/100.** Supports adaptive thinking (with effort controls in the Claude platform model family) and strong general reasoning for its generation, though later Claude models provide improved capability and efficiency.
- **Context window: 94/100.** Anthropic models overview lists Claude Sonnet 4.6 with a 1M-token context window and 128K max output, enabling large codebase and long-document workflows.
- **Multimodal: 80/100.** Claude Sonnet 4.6 supports text and image inputs with text output in the Claude lineup (per repo metadata/platform positioning), suitable for screenshot/document-assisted tasks but not broad generative multimodality.
- **Coding: 86/100.** Designed as a cost-conscious coding/agentic Sonnet; repo/meta cites SWE-bench Verified 79.6% class performance, making it effective for disciplined software engineering tasks though surpassed by newer models.
- **Cost efficiency: 82/100.** Priced at $3/$15 per 1M input/output tokens per Anthropic overview (with caching/batch options on platform), offering reasonable value for its era but less attractive than newer tiers on price-per-capability.
- **Overall Score: 84/100.** A solid 1M-context adaptive-thinking coding model and compatibility choice, balanced by being overtaken in capability/efficiency by later Claude releases.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://platform.claude.com/docs/en/models/overview
  - https://www.anthropic.com/news/claude-sonnet-4.6
  - https://www.anthropic.com/pricing

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/claude-sonnet-4.6/meta.json
field: contextWindow
proposed: 1,000,000 tokens (1M) / 128K max output
source: https://platform.claude.com/docs/en/models/overview
```