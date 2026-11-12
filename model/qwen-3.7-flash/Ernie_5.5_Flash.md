# Qwen3.7 Flash — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.7 Flash (`qwen-3.7-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Flash
- **Short description:** Alibaba's lightweight multimodal Qwen model (released 2026-07-15) for high-throughput text, image and video tasks at $0.03 per 1M input.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-flash`), OpenRouter, plus ~12 routes.
- **Release / knowledge:** 2026-07-15; knowledge cutoff not published.
- **IDs:** `qwen-3.7-flash`, `alibaba/qwen3.7-flash`, `qwen/qwen3.7-flash`.
- **Context window:** 1,000,000 tokens (991,808 input); max output 131,072 (64K per the vendor profile).
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.03 / $0.13 per 1M input/output; cache read $0.006 — the cheapest route in this batch.
- **Architecture:** proprietary/undisclosed (closed-weight Flash tier).

### Raw benchmarks found

> BenchLM exposes only 3 displayable rows for this model.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **19.298%**; NYT Connections: **43.8%**; Mystery Game Puzzles: **15.0%**
- GPQA Diamond / HLE / ARC-AGI: no verified public rows published

Coding:

- No coding benchmark row published for Qwen3.7 Flash (no SWE-bench, LiveCodeBench or DeepSWE row)

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified agentic row exists; the score is a conservative inference from the Flash positioning — low confidence.
- **Reasoning: 55/100.** FrontierMath 19.3% is near-floor and NYT Connections 43.8% is mid; no GPQA/HLE/ARC row was published.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output.
- **Multimodal: 80/100.** Text, image and video in — the capability the model is named for — but no public multimodal benchmark row was published.
- **Coding: 55/100.** No coding benchmark was published; scored conservatively — low confidence.
- **Cost efficiency: 98/100.** $0.03/$0.13 per 1M with $0.006 cache reads.
- **Overall Score: 68.6/100.** Best fit for very-high-volume multimodal preprocessing (image/video tagging, classification); not a reasoning or coding model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.7 Flash — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.7 Flash benchmarks & context — BenchLM](https://benchlm.ai/models/qwen3-7-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Flash_v2.md`, using the same headings.