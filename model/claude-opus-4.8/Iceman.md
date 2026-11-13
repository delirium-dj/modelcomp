# Claude Opus 4.8 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `claude-opus-4.8` (Claude Opus 4.8, Anthropic) — folder: `model/claude-opus-4.8`

## Overall
- **Overall Score: 88.2/100.** Strong Opus-class upgrade with improved benchmark performance, better tool efficiency/judgment, and lower misaligned behavior than Opus 4.7 per Anthropic, but positioned as an incremental release ahead of higher-capability Mythos-class models.

## Scores
- **Tool use: 91/100.** Anthropic and early testers report cleaner/more efficient tool calling, stronger end-to-end task completion, and improved reliability in agentic/computer-use workflows (e.g. dynamic workflows with parallel subagents, high browser-agent performance claims).
- **Reasoning: 90/100.** Described as a stronger collaborator with sharper judgment, better handling of multi-step/long-running work, and improved honesty (flagging uncertainties, fewer unsupported claims) alongside benchmark gains.
- **Context window: 88/100.** Built for long-running agentic work (including dynamic workflows and extended sessions); Anthropic emphasizes sustained context/carryover in complex tasks, while the launch announcement text does not restate an explicit token-window figure.
- **Multimodal: 80/100.** Benchmarks and tester feedback include computer-use/browser and document-oriented agentic scenarios; multimodal capability is present, but the announcement focuses more on coding/agentic reliability than on broad new multimodal modalities.
- **Coding: 92/100.** Anthropic highlights improvements across coding benchmarks and early testers report strong agentic coding, codebase-scale task handling, and fewer missed issues; positioned as a capable coding model in Claude Code workflows.
- **Cost efficiency: 78/100.** Regular pricing remains $5/$25 per million input/output tokens with improved performance; fast mode launched at $10/$50 (cheaper than prior fast-mode pricing), and effort controls allow trading speed/cost/quality.
- **Overall Score: 84/100.** Well-rounded, reliable Opus upgrade for coding and agentic use with good price/performance continuity, but incremental relative to frontier jumps and superseded in ambition by forthcoming Mythos-class releases.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://www.anthropic.com/news/claude-opus-4-8
  - https://www.anthropic.com/claude-opus-4-8-system-card
  - https://en.wikipedia.org/wiki/Claude_(language_model)

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/claude-opus-4.8/meta.json
field: officialUrl
proposed: https://www.anthropic.com/news/claude-opus-4-8
source: https://www.anthropic.com/news/claude-opus-4-8
```