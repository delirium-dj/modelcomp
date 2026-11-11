# Qwen3.5 Plus — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.5 Plus (`qwen-3.5-plus`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Plus
- **Short description:** Alibaba's Qwen3.5 vision-language model (released 2026-02-16) for visual reasoning, documents and agent tasks — now two Plus generations old.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-plus`), OpenRouter, Vercel, ZenMux, Merge Gateway, Empirio Labs, plus ~17 routes.
- **Release / knowledge:** 2026-02-16; knowledge cutoff 2025-04 (models.dev). BenchLM lists a March 4, 2026 record.
- **IDs:** `qwen3.5-plus`, `alibaba/qwen3.5-plus`, `qwen/qwen3.5-plus`, `opencode-go/qwen3.5-plus`.
- **Context window:** 1,000,000 tokens (983,616 on some gateways); max output 65,536.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.40 / $2.40 per 1M input/output (Merge Gateway lists $0.115/$0.688).
- **Architecture:** proprietary/undisclosed (closed-weight Plus tier).

### Raw benchmarks found

> BenchLM holds only 4 displayable rows for this model — every category below is near-empty.

Agent / tool use:

- JobBench: **18.5%** (near-floor)
- Terminal-Bench / MCP-Atlas / Toolathlon / OSWorld: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Chess Puzzles (Epoch AI): **9.0%**; Mystery Game Puzzles (Epoch AI): **17.0%**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- Vibe Code Bench v1.1: **15.74%** (near-floor)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** JobBench 18.5% is the only verified agentic row and it is near-floor; the score is a floor, not a measurement.
- **Reasoning: 45/100.** Chess Puzzles 9.0% and Mystery Game Puzzles 17.0% are the only verified reasoning rows and both are near-floor for a 2026 model.
- **Context window: 100/100.** 1,000,000 tokens with 65,536 max output.
- **Multimodal: 75/100.** Text, image and video in — the capability the model is named for — but no public multimodal benchmark row was published.
- **Coding: 55/100.** Vibe Code Bench 15.74% is the only verified coding row and it is near-floor.
- **Cost efficiency: 92/100.** $0.40/$2.40 per 1M with a $0.115/$0.688 gateway lane.
- **Overall Score: 65.0/100.** Best fit for legacy Qwen3.5 multimodal pipelines at low cost; the evidence base is four weak rows, so treat this as a floor and run your own evaluation.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.5 Plus — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.5 Plus benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-5-plus)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_Plus_v2.md`, using the same headings.