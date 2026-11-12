# Laguna XS 2.1 — findings by Ernie 5.5 Flash

- Source: Poolside/Laguna XS 2.1 (`laguna-xs-2.1`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's XS-class agentic coding model (released 2026-07-02) built for local deployment, with a 262K context and a small 16K output cap.
- **Provider / access:** NVIDIA NIM (`nvidia/poolside/laguna-xs-2.1`), plus ~3 routes. Open weights.
- **Release / knowledge:** 2026-07-02; knowledge cutoff not published.
- **IDs:** `laguna-xs-2.1`, `poolside/laguna-xs-2.1`.
- **Context window:** 262,144 tokens; max output 16,384.
- **Modalities:** text in / text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** catalogue shows $0/$0 (free NIM route); no metered rate.
- **Architecture:** open-weight (Poolside; XS size class).

### Raw benchmarks found

> BenchLM exposes 5 sourced rows for this model.

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (below the agent baseline)
- Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for Laguna XS 2.1
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **70.9%**; SWE Multilingual: **63.1%**; SWE-bench Pro: **47.6%**
- DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 262K context with a 16,384 max output; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 37.5% is below the baseline; no other agentic row was published.
- **Reasoning: 55/100.** No public reasoning benchmark was published; the score is a conservative inference — low confidence.
- **Context window: 78/100.** 262,144 tokens with a 16,384 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 65/100.** SWE-bench Verified 70.9% is decent for an XS model, but SWE-bench Pro 47.6% and SWE Multilingual 63.1% are mid.
- **Cost efficiency: 98/100.** Free NIM route and open weights.
- **Overall Score: 53.6/100.** Best fit for local, cost-zero code completion; not an agent.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Poolside model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Laguna XS 2.1 — Poolside / NVIDIA NIM](https://build.nvidia.com/poolside/laguna-xs-2-1)
  - [Laguna XS 2.1 benchmarks — BenchLM](https://benchlm.ai/models/laguna-xs-2-1)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Laguna_XS_2.1_v2.md` next to this file.