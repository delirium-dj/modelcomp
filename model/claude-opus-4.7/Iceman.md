# Claude Opus 4.7 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `claude-opus-4.7` (Claude Opus 4.7, Anthropic) — folder: `model/claude-opus-4.7`

## Overall
- **Overall Score: 90.8/100.** High-end Opus model with strong gains in advanced software engineering, instruction following, vision, and long-horizon reliability per Anthropic, but released with cautious cyber safeguards and later surpassed by newer Opus/Fable/Mythos generations.

## Scores
- **Tool use: 92/100.** Anthropic and early testers report improved autonomous execution on complex long-running workflows, better tool/error handling, and stronger multi-step agent behavior (including coding, debugging, and computer-use scenarios).
- **Reasoning: 91/100.** Positioned as a notable upgrade over Opus 4.6 on difficult tasks, with better planning, self-verification, instruction following, and stronger benchmark performance across coding, knowledge work, and reasoning evaluations.
- **Context window: 88/100.** Emphasizes long-running, multi-session work and improved memory/file-system memory use; the announcement highlights sustained coherence over long tasks, though it does not specify a distinct new token limit in the text.
- **Multimodal: 90/100.** Substantially better vision than prior Claude models, including support for higher-resolution images (up to 2,576 px on the long edge / ~3.75 MP per announcement) and improved multimodal/document/diagram understanding.
- **Coding: 93/100.** Anthropic reports notable gains in advanced software engineering and difficult coding tasks, with strong tester feedback on autonomy, code quality, bug-finding/fixing, and benchmark improvements over Opus 4.6.
- **Cost efficiency: 72/100.** Pricing remained $5/$25 per million input/output tokens (same as Opus 4.6) with improved capability, but tokenizer/effort changes can increase token usage in some workloads and high-effort modes raise cost.
- **Overall Score: 86/100.** Excellent coding, reasoning, and multimodal upgrade with strong real-world feedback, balanced by operational token-cost considerations and cybersecurity safeguard constraints for some use cases.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://www.anthropic.com/news/claude-opus-4-7
  - https://www.anthropic.com/claude-opus-4-7-system-card
  - https://en.wikipedia.org/wiki/Claude_(language_model)

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/claude-opus-4.7/meta.json
field: officialUrl
proposed: https://www.anthropic.com/news/claude-opus-4-7
source: https://www.anthropic.com/news/claude-opus-4-7
```