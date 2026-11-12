# GPT-5.3 Codex Spark — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.3 Codex Spark (`gpt-5.3-codex-spark`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** A small, fast Codex-tuned GPT (released 2026-02-05) for repository edits, reviews and agentic software work, with a 128K context.
- **Provider / access:** OpenAI API/Responses (`gpt-5.3-codex-spark`), plus ~3 routes.
- **Release / knowledge:** 2026-02-05; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.3-codex-spark`, `openai/gpt-5.3-codex-spark`.
- **Context window:** 128,000 total (100,000 input / 32,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.75 / $14.00 per 1M input/output; cache read $0.175 — the same rate as full Codex despite the smaller window.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM exposes only 1 displayable row for this model.

Agent / tool use:

- MazeBench (visual spatial reasoning): **0%** (near-floor)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for Spark
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published for Spark
- No coding benchmark was published for this tier at all

Long context:

- 128K context (100K in / 32K out); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** MazeBench 0% is the only verified row and it is near-floor; the score is a floor, not a measurement.
- **Reasoning: 55/100.** No verified reasoning row exists; scored conservatively — low confidence.
- **Context window: 50/100.** 128,000 tokens with a 32,000 max output — the smallest window in this batch.
- **Multimodal: 60/100.** Text, image and PDF in; no public multimodal benchmark row.
- **Coding: 60/100.** No coding benchmark was published for Spark; scored conservatively from its positioning — low confidence.
- **Cost efficiency: 45/100.** $1.75/$14 per 1M is full-Codex pricing for a 128K window.
- **Overall Score: 55/100.** Best fit for latency-sensitive code completions inside the Codex harness; the evidence base is one near-floor row, so treat as provisional.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (OpenAI model documentation, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.3 Codex Spark — OpenAI](https://openai.com/index/gpt-5-3-codex-spark/)
  - [GPT-5.3 Codex Spark benchmarks — BenchLM](https://benchlm.ai/models/gpt-5-3-codex-spark)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `GPT_5.3_Codex_Spark_v2.md` next to this file.