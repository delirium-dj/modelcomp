# Claude 3.5 Sonnet — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude 3.5 Sonnet (`claude-sonnet-3.5`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic's balanced Claude 3.5 model (released 2024-10-22, the "upgraded" 3.5 checkpoint) for coding, analysis and agent workflows — the model that reset SWE-bench Verified expectations in late 2024.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20241022`), Amazon Bedrock, Google Vertex, Poe, plus legacy routes.
- **Release / knowledge:** 2024-10-22; knowledge cutoff 2024-04-30 (models.dev).
- **IDs:** `claude-sonnet-3.5`, `claude-3-5-sonnet-20241022`, `anthropic/claude-3.5-sonnet`.
- **Context window:** 189,096 tokens (~200K); max output 8,192 (models.dev).
- **Modalities:** text, image and PDF in; text out; tool calls; reasoning off (models.dev: `reasoning: false`).
- **Pricing (as of 2026-11-11/12):** $2.60 / $13.00 per 1M input/output on the catalogued route; Anthropic's list was $3/$15.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM has no profile for this checkpoint (404); the rows below are the primary Anthropic figures plus aggregator confirmations, labelled with their source.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for this checkpoint
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this checkpoint

Coding:

- SWE-bench Verified: **49%** (Anthropic engineering post, agent scaffold; widely quoted as 49.3% in leaderboard compilations)
- LiveCodeBench / DeepSWE / SWE-bench Pro: no verified public rows published

Long context:

- ~200K context (189,096 catalogued) with an 8,192 max output; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** No public terminal/OSWorld/Toolathlon row was found for this checkpoint; the score is a conservative inference — low confidence.
- **Reasoning: 60/100.** No public reasoning benchmark was reached for this checkpoint; scored from family and its SWE-bench result — low confidence.
- **Context window: 60/100.** ~200K context with only an 8,192 max output — the smallest output cap in this batch.
- **Multimodal: 70/100.** Text, image and PDF in; no public multimodal benchmark rows for this checkpoint.
- **Coding: 65/100.** SWE-bench Verified 49% was state of the art in October 2024 but is now far behind the 85%+ frontier.
- **Cost efficiency: 80/100.** $2.60/$13 per 1M — mid, for a model that is two years old.
- **Overall Score: 61.0/100.** Best fit for legacy Claude 3.5 integrations; every current Sonnet beats it on every measured axis.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Anthropic engineering post "Raising the bar on SWE-bench Verified with Claude 3.5 Sonnet", SWE-bench leaderboard compilations, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Raising the bar on SWE-bench Verified with Claude 3.5 Sonnet — Anthropic](https://www.anthropic.com/research/swe-bench-sonnet)
  - [SWE-bench Verified leaderboard](https://www.swebench.com/verified.html)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_3.5_v2.md`, using the same headings.