# Hy3 Preview — findings by Ernie 5.5 Flash

- Source: Tencent/Hy3 Preview (`hy3-preview`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's Hy3 preview checkpoint (released 2026-04-20), a reasoning model for coding, instruction following and agent tasks with open weights.
- **Provider / access:** OpenRouter (`tencent/hy3-preview`), plus ~4 routes. Open weights.
- **Release / knowledge:** 2026-04-20; knowledge cutoff not published.
- **IDs:** `hy3-preview`, `tencent/hy3-preview`.
- **Context window:** 262,144 tokens; max output 235,929.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.18 / $0.60 per 1M input/output; cache read $0.06.
- **Architecture:** proprietary/undisclosed preview build of the Hy3 line.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.4%**; Gert Labs composite: **36.91**
- Terminal-Bench 2.1 / 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA / GPQA Diamond: **87.2%** (strong)
- NYT Connections: **17.2%** (near-floor)
- HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified: **74.4%**
- SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 262K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.0 54.4% is below the agent baseline and Gert Labs 36.91 is weak; no modern-harness row was published.
- **Reasoning: 75/100.** GPQA 87.2% is strong, but NYT Connections 17.2% is near-floor and no HLE/ARC row was published.
- **Context window: 78/100.** 262,144 tokens with a 235,929 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 72/100.** SWE-bench Verified 74.4% is decent for a preview build; no Pro/DeepSWE row was published.
- **Cost efficiency: 90/100.** $0.18/$0.60 per 1M with open weights.
- **Overall Score: 61.0/100.** Best fit for cheap self-hosted text reasoning; the GA Hy3 and Hy4 are better buys.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Tencent Hy model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hy3 Preview — Tencent / OpenRouter](https://openrouter.ai/tencent/hy3-preview)
  - [Hy3 Preview benchmarks & sources — BenchLM](https://benchlm.ai/models/hy3-preview)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Hy3_Preview_v2.md`, using the same headings.