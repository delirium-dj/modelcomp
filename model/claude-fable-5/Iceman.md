# Claude Fable 5 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `claude-fable-5` (Claude Fable 5, Anthropic) — folder: `model/claude-fable-5`

## Overall
- **Overall Score: 86.8/100.** Capable Mythos-class model made generally available with strong safeguards and long-horizon/agentic strengths per Anthropic, but the base Fable 5 release provides limited extractable public numeric benchmark tables, had cautious fallback/safeguard tradeoffs at launch, and was quickly superseded by Fable 5.1/5.2.

## Scores
- **Tool use: 88/100.** Anthropic describes state-of-the-art software engineering, long-running autonomous work, and agentic behavior (e.g. long-horizon coding/migrations, memory-assisted multi-step tasks) as core strengths of Fable 5.
- **Reasoning: 89/100.** Positioned as a Mythos-class model above Opus with leading performance on complex analytical/knowledge-work and long-context tasks in Anthropic's launch materials, though detailed public numeric breakdowns are limited in the base announcement.
- **Context window: 85/100.** Launched as a long-context, long-horizon model with emphasis on staying focused across millions of tokens in long-running tasks; Anthropic materials highlight long-context/memory behavior but the base announcement text does not specify an exact token window figure.
- **Multimodal: 82/100.** Anthropic reports strong vision capabilities, including state-of-the-art vision-task performance and vision-only task completion examples (e.g. rebuilding app source from screenshots, vision-only game play).
- **Coding: 90/100.** Reported as state-of-the-art in software engineering/agentic coding with high performance on coding evaluations (e.g. FrontierCode at medium effort noted as highest among frontier models in the announcement) and strong real-world migration/coding feedback from early testers.
- **Cost efficiency: 45/100.** Priced at $10 per million input tokens and $50 per million output tokens at launch (less than Mythos Preview), but expensive in absolute terms and paired with staged/subscription access constraints during rollout.
- **Overall Score: 60/100.** Evidence supports high capability in coding, reasoning, and tool-using agentic work, but scoring is constrained by limited verifiable public numeric metrics for the base model, safeguard-driven fallbacks for some queries, and rapid supersession.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://www.anthropic.com/news/claude-fable-5-mythos-5
  - https://www.anthropic.com/glasswing
  - https://en.wikipedia.org/wiki/Claude_(language_model)

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/claude-fable-5/meta.json
field: officialUrl
proposed: https://www.anthropic.com/news/claude-fable-5-mythos-5
source: https://www.anthropic.com/news/claude-fable-5-mythos-5
```
