# Qwen3 Max — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3 Max (`qwen-3-max`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's flagship Qwen3 model (released 2025-09-23) for coding agents, complex reasoning and tool use — the pre-Qwen3.5/3.8 Max generation.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3-max`), OpenRouter, plus ~14 routes.
- **Release / knowledge:** 2025-09-23; knowledge cutoff 2025-04 (models.dev).
- **IDs:** `qwen-3-max`, `alibaba/qwen3-max`, `qwen/qwen3-max`.
- **Context window:** 262,144 tokens; max output 65,536.
- **Modalities:** text in / text out only; tool calls; reasoning off (models.dev: `reasoning: false`).
- **Pricing (as of 2026-11-11/12):** $1.20 / $6.00 per 1M input/output (no cache rate published).
- **Architecture:** proprietary/undisclosed (closed-weight Max tier).

### Raw benchmarks found

> BenchLM holds only 4 displayable rows for this model.

Agent / tool use:

- CompileBench (building real projects from source, pass@1): **53.3%** (the only agentic-adjacent row)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- Gert Labs composite: **43.74**; Mystery Game Puzzles (Epoch AI): **5.0%** (near-floor)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- Vibe Code Bench v1.1: **3.51%** (near-floor)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 262K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** CompileBench 53.3% is the only verified agentic-adjacent row and it is mid; the score is a single-row estimate.
- **Reasoning: 55/100.** Gert Labs 43.74 is mid and Mystery Game Puzzles 5.0% is near-floor; no GPQA/HLE/ARC row was published.
- **Context window: 78/100.** 262,144 tokens with 65,536 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 45/100.** Vibe Code Bench 3.51% is near-floor and no SWE-bench row was published — the weakest coding evidence in this batch.
- **Cost efficiency: 85/100.** $1.20/$6.00 per 1M.
- **Overall Score: 49.6/100.** Best fit for legacy Qwen3 Max integrations; every Qwen3.5/3.7/3.8 tier beats it at a similar or lower price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3 Max — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3 Max benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-max)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3_Max_v2.md`, using the same headings.