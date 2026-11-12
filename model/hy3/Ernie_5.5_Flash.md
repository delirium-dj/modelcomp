# Hy3 — findings by Ernie 5.5 Flash

- Source: Tencent/Hy3 (`hy3`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's Hy reasoning model (released 2026-07-06) for coding, instruction following and agent tasks, at a 262K context and an aggressive price.
- **Provider / access:** Tencent Cloud (`hy3`), OpenRouter (`tencent/hy3`), plus ~19 routes.
- **Release / knowledge:** 2026-07-06; knowledge cutoff not published.
- **IDs:** `hy3`, `tencent/hy3`.
- **Context window:** 262,144 tokens (192,000 input); max output 128,000.
- **Modalities:** text in / text out only (models.dev); reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.0825 / $0.33 per 1M input/output; cache read $0.0206 — the cheapest Hy tier.
- **Architecture:** proprietary/undisclosed (Tencent Hy line; Hy4 is the newer release).

### Raw benchmarks found

> BenchLM exposes only 3 displayable rows for this model.

Agent / tool use:

- SkillsBench v1.1 (BenchFlow): **55.9%** (the only agentic-adjacent row)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- NYT Connections: **41.2%**; BabaIsBench (pass@1): **54%**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- No coding benchmark row published for Hy3 (no SWE-bench, LiveCodeBench or DeepSWE row)

Long context:

- 262K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** SkillsBench 55.9% is the only verified agentic row and it is mid; the score is a single-row estimate.
- **Reasoning: 62/100.** NYT Connections 41.2% and BabaIsBench 54% are the only verified reasoning rows and both are mid/low.
- **Context window: 78/100.** 262,144 tokens with a 128,000 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 55/100.** No coding benchmark was published for Hy3; scored conservatively — low confidence.
- **Cost efficiency: 98/100.** $0.0825/$0.33 per 1M with $0.0206 cache reads — the cheapest model in this batch.
- **Overall Score: 54.4/100.** Best fit for very-high-volume text classification and simple agent steps; Hy4 is the better model for anything demanding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Tencent Hy model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hy3 — Tencent / Hugging Face](https://huggingface.co/tencent/Hy3)
  - [Hy3 benchmarks & sources — BenchLM](https://benchlm.ai/models/hy3)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Hy3_v2.md`, using the same headings.