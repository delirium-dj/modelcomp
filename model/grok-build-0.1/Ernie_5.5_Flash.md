# Grok Build 0.1 — findings by Ernie 5.5 Flash

- Source: xAI/Grok Build 0.1 (`grok-build-0.1`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's fast Grok coding model (released 2026-04-16 / listed 2026-05-20) tuned for agentic engineering and iterative edits. `grok-code-fast-1` is a documented alias of this model — never a separate folder.
- **Provider / access:** xAI API (`grok-build-0.1`), FastRouter, LLM Gateway, Merge Gateway, Kenari, plus ~19 routes.
- **Release / knowledge:** 2026-04-16 (models.dev; BenchLM record May 20, 2026); knowledge cutoff not published.
- **IDs:** `grok-build-0.1`, `x-ai/grok-build-0.1`, `grok-code-fast-1` (retired alias, never a folder).
- **Context window:** 256,000 tokens; max output 256,000.
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.00 / $2.00 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM exposes only 1 displayable row for this model — treat every score below as provisional.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Gert Labs composite game benchmark: **49.15**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- No coding benchmark row published for this model (no SWE-bench, LiveCodeBench or DeepSWE row)
- The closest proxy is the Gert Labs composite (49.15), which is game/reasoning-oriented rather than repo-level

Long context:

- 256K context with a 256K max output; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified agentic row exists for this model; the score is a conservative inference from its "agentic engineering" positioning — low confidence.
- **Reasoning: 62/100.** Gert Labs 49.15 is the only verified row and it is mid.
- **Context window: 70/100.** 256,000 tokens with a 256,000 max output.
- **Multimodal: 72/100.** Text, image and PDF in; no public multimodal benchmark row was published.
- **Coding: 65/100.** No coding benchmark was published for this model at all; scored conservatively from its positioning — low confidence.
- **Cost efficiency: 92/100.** $1.00/$2.00 per 1M is very cheap for a 256K-context coding model.
- **Overall Score: 65.8/100.** Best fit for cheap, high-volume iterative edit loops; the one-row evidence base means you should benchmark it on your own repo before trusting it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok Build 0.1 — xAI](https://x.ai/news/grok-build-0-1)
  - [Grok Build 0.1 benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-build-0-1)
  - [Grok code fast 1 alias — docs.x.ai](https://docs.x.ai/docs/models)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_Build_0.1_v2.md`, using the same headings.