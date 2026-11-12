# Claude Sonnet 4 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Sonnet 4 (`claude-sonnet-4`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Claude 4 model (released 2025-05-22) for coding, analysis, agent workflows and cost control — the model that introduced the Claude 4 generation, now five Sonnet releases old.
- **Provider / access:** Anthropic API (`claude-sonnet-4-20250514`), Amazon Bedrock, Google Vertex (`claude-sonnet-4@20250514`), OpenCode Zen (`opencode/claude-sonnet-4`), Poe, Abacus, plus ~7 routes.
- **Release / knowledge:** 2025-05-22; knowledge cutoff 2025-03-31 (models.dev).
- **IDs:** `claude-sonnet-4`, `claude-sonnet-4-20250514`, `anthropic/claude-sonnet-4`.
- **Context window:** 200,000 tokens (1,000,000 on the OpenCode route); max output 64,000.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $3.00 / $15.00 per 1M input/output; cache read $0.30.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM has no profile for this checkpoint (404 on both `claude-sonnet-4` and `claude-sonnet-4-20250514`); the rows below are third-party figures labelled with their source.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows found for this checkpoint
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows found for this checkpoint

Coding:

- SWE-bench Verified: **72.7%** (llm-stats model page, citing Anthropic's launch reporting for Claude Sonnet 4)
- LiveCodeBench / DeepSWE / SWE-bench Pro: no verified public rows found

Long context:

- 200K (1M on the OpenCode route); no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 60/100.** No public terminal/OSWorld/Toolathlon row was found for this checkpoint; the score is a conservative inference from its family — low confidence.
- **Reasoning: 68/100.** No public reasoning benchmark was reached for this checkpoint; scored from family reputation and its SWE-bench result — low confidence.
- **Context window: 65/100.** 200,000 tokens with 64,000 max output on the first-party route.
- **Multimodal: 70/100.** Text, image and PDF in; no public multimodal benchmark rows for this checkpoint.
- **Coding: 72/100.** SWE-bench Verified 72.7% was strong for mid-2025 but is now well behind the 85%+ frontier.
- **Cost efficiency: 85/100.** $3/$15 per 1M — the same rate as Sonnet 4.5/4.6, which outscore it.
- **Overall Score: 67.0/100.** Best fit for legacy Claude 4 integrations; every later Sonnet is better at the same or lower price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic Claude 4 announcement, llm-stats model page, models.dev catalog, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude 4 — Anthropic](https://www.anthropic.com/news/claude-4)
  - [Claude Sonnet 4 benchmarks & context — llm-stats](https://llm-stats.com/models/claude-sonnet-4-20250514)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4_v2.md`, using the same headings.