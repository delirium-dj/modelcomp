# Claude Sonnet 3.7 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude 3.7 Sonnet (`claude-sonnet-3.7`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's first hybrid reasoning model (released 2025-02-19) with toggleable extended thinking, for coding, analysis and agent workflows. Now six Claude generations old.
- **Provider / access:** Anthropic API (`claude-3-7-sonnet-20250219`), Amazon Bedrock, Google Vertex, Poe, Abacus, plus ~2 routes.
- **Release / knowledge:** 2025-02-19; knowledge cutoff 2024-10-31 (models.dev).
- **IDs:** `claude-sonnet-3.7`, `claude-3-7-sonnet-20250219`, `anthropic/claude-3.7-sonnet`.
- **Context window:** 200,000 tokens (196,608 on Poe); max output 64,000 (128K output claimed at release for the Claude Code surface).
- **Modalities:** text, image and PDF in; text out; extended thinking (toggleable) and tool calls.
- **Pricing (as of 2026-11-11):** $3.00 / $15.00 per 1M input/output (Poe lists $2.60/$13).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM has no profile for this checkpoint (404); the rows below are third-party figures labelled with their source.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows found for this checkpoint
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows found for this checkpoint
- BenchLM lists Claude 3.7 Sonnet under its SWE-bench Verified leaderboard sources, but no 3.7-specific row was reachable

Coding:

- SWE-bench Verified: **62.3%** standard scaffold; **70.3%** with Anthropic's custom scaffold (Anthropic launch post, corroborated by DataCamp and open-source-ai.tech)
- LiveCodeBench / DeepSWE / SWE-bench Pro: no verified public rows found

Long context:

- 200K context; no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 60/100.** No public terminal/OSWorld/Toolathlon row was found for this checkpoint; the score is a conservative inference — low confidence.
- **Reasoning: 70/100.** Extended thinking was the headline feature and it was frontier for early 2025, but no public GPQA/HLE/ARC row was reached for this checkpoint.
- **Context window: 65/100.** 200,000 tokens with 64,000 max output.
- **Multimodal: 70/100.** Text, image and PDF in; no public multimodal benchmark rows for this checkpoint.
- **Coding: 75/100.** SWE-bench Verified 62.3% (70.3% scaffolded) was strong for early 2025 and remains respectable, but it is far behind the 85%+ frontier.
- **Cost efficiency: 85/100.** $3/$15 per 1M — the same rate as Sonnet 4/4.5/4.6, all of which outscore it.
- **Overall Score: 68.0/100.** Best fit for legacy Claude 3.7 integrations; every later Sonnet is better at the same or lower price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic Claude 3.7 Sonnet launch post, DataCamp and open-source-ai.tech benchmark summaries, models.dev catalog, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude 3.7 Sonnet and Claude Code — Anthropic](https://www.anthropic.com/news/claude-3-7-sonnet)
  - [Claude 3.7 Sonnet benchmarks — DataCamp](https://www.datacamp.com/blog/claude-3-7-sonnet)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_3.7_v2.md`, using the same headings.