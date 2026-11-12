# Qwen3.5 Flash — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.5 Flash (`qwen-3.5-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash
- **Short description:** Alibaba's fast Qwen3.5 vision-language model (released 2026-02-23) for visual reasoning, documents and agent tasks, with a 1M context at $0.10/$0.40 per 1M.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-flash`), OpenRouter, Vercel, Merge Gateway, ZenMux, Empirio Labs, plus ~12 routes. Closed weights on the Flash tier (only the Max/27B/122B members are open).
- **Release / knowledge:** 2026-02-23; knowledge cutoff not published.
- **IDs:** `qwen3.5-flash`, `alibaba/qwen3.5-flash`, `qwen/qwen3.5-flash`.
- **Context window:** 1,000,000 tokens (1,020,000 on ZenMux); max output 65,536.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.10 / $0.40 per 1M input/output; cache read $0.01 (Merge Gateway $0.029/$0.287, Empirio $0.09/$0.368).
- **Architecture:** proprietary/undisclosed (closed-weight Flash tier).

### Raw benchmarks found

> BenchLM holds only 7 displayable rows for this model.

Agent / tool use:

- SWE-bench (Vals AI): **64.4%** (the only agentic-adjacent row)
- Terminal-Bench / OSWorld / Toolathlon / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **82.8%**; MMLU-Pro (Vals AI): **84.1%**
- FrontierMath v2 Tiers 1–3: **18.246%** (near-floor)
- Chess Puzzles: **14.0%**; Mystery Game Puzzles: **20.0%**
- HLE / ARC-AGI / CritPt: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **83.3%**; SWE-bench (Vals AI): **64.4%**
- SWE-bench Pro / DeepSWE / FrontierCode: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** SWE-bench (Vals) 64.4% is the only verified agentic-adjacent row; with no TB/OSWorld/Toolathlon publication the score is a low-confidence floor.
- **Reasoning: 65/100.** GPQA Diamond 82.8% and MMLU-Pro 84.1% are respectable, but FrontierMath 18.2%, Chess 14.0% and Mystery 20.0% are near-floor.
- **Context window: 100/100.** 1,000,000 tokens with 65,536 max output.
- **Multimodal: 78/100.** Text, image and video in; no public multimodal benchmark rows were published for the Flash tier.
- **Coding: 72/100.** LiveCodeBench (Vals) 83.3% is decent for the price, SWE-bench (Vals) 64.4% mid.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M with $0.01 cache reads — the cheapest 1M-context Qwen tier.
- **Overall Score: 74.0/100.** Best fit for high-volume document/visual work at 1M context; Qwen3.8 Flash is the better buy on every measured axis.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.5 Flash — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.5 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-5-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_Flash_v2.md`, using the same headings.