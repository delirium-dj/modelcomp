# Claude Sonnet 5 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `claude-sonnet-5` (Claude Sonnet 5, Anthropic) — folder: `model/claude-sonnet-5`

## Overall
- **Overall Score: 89.8/100.** Highly capable agentic Sonnet model with strong coding/computer-use focus, large 1M context beta and high output limit, and solid cost/performance positioning at Sonnet pricing, though it has been succeeded by Claude Sonnet 5.5.

## Scores
- **Tool use: 92/100.** Anthropic positions Claude Sonnet 5 as its most agentic Sonnet yet, emphasizing planning, tool use (including browsers/computers), and sustained multi-step work; designed for agentic coding and computer-use workflows.
- **Reasoning: 88/100.** Built for complex agentic tasks and long-horizon execution with strong benchmark claims in Anthropic's announcement context (e.g. coding, agentic, and reasoning evaluations), while Anthropic notes newer Sonnet 5.5 improves further.
- **Context window: 93/100.** Anthropic announcement states a 1M-token context window (beta) and 128K max output tokens, enabling large codebase/document workflows.
- **Multimodal: 84/100.** Supports text and image/file inputs with text output in Anthropic's product line (per repo metadata); announcement emphasizes computer/browser interaction and agentic use rather than broad generative multimodality.
- **Coding: 92/100.** Strong coding and agentic software-engineering focus; Anthropic highlights top-tier Sonnet-class performance for coding/agents/computer use (repo/meta references SWE-bench Verified 85.2% class positioning) making it effective for developer workflows.
- **Cost efficiency: 86/100.** Priced at $3/$15 per 1M input/output tokens per Anthropic (with caching/batch/fast-mode options described), delivering strong capability at Sonnet-tier pricing though not as cheap as small/flash models.
- **Overall Score: 88/100.** Excellent agentic coding/computer-use model with large context and strong practical capability, balanced by being a prior-generation Sonnet now succeeded by Sonnet 5.5.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://www.anthropic.com/news/claude-sonnet-5
  - https://www.anthropic.com/pricing
  - https://docs.anthropic.com/en/docs/about-claude/models

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/claude-sonnet-5/meta.json
field: pricingNote
proposed: Paid $3/$15 per 1M (verify against current Anthropic pricing page)
source: https://www.anthropic.com/news/claude-sonnet-5
```