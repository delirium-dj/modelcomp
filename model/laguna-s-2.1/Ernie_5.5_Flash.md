# Laguna S 2.1 — findings by Ernie 5.5 Flash

- Source: Poolside/Laguna S 2.1 (`laguna-s-2.1`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's agentic coding model (released 2026-07-21) in the XS/S size class, built for local deployment with a 1M-token context.
- **Provider / access:** Poolside (`laguna-s-2.1`), Vercel AI Gateway, plus ~3 routes. Open weights.
- **Release / knowledge:** 2026-07-21; knowledge cutoff not published.
- **IDs:** `laguna-s-2.1`, `poolside/laguna-s-2.1`.
- **Context window:** 1,000,000 tokens; max output 131,072.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.09 / $0.18 per 1M input/output; cache read $0.009.
- **Architecture:** open-weight (Poolside; size class not published).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (best row); Toolathlon-Verified: **49.7%**
- Terminal-Bench 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for Laguna S 2.1
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE Multilingual: **78.5%**; SWE-bench Pro: **59.4%**; DeepSWE: **40.4%**
- SWE-bench Verified / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 68/100.** TB2.1 70.2% is mid, Toolathlon 49.7% below the agent baseline; no modern-harness row was published.
- **Reasoning: 65/100.** No public reasoning benchmark was published; the score is derived from its coding/agent rows — low confidence.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 72/100.** SWE Multilingual 78.5% is decent, SWE-bench Pro 59.4% mid, DeepSWE 40.4% weak.
- **Cost efficiency: 95/100.** $0.09/$0.18 per 1M — the cheapest agentic-coding route in this batch.
- **Overall Score: 64.0/100.** Best fit for cheap, local, long-context coding agents; verify on your own repo before trusting it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Poolside model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Laguna S 2.1 — Poolside](https://poolside.ai/)
  - [Laguna S 2.1 benchmarks — BenchLM](https://benchlm.ai/models/laguna-s-2-1)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Laguna_S_2.1_v2.md` next to this file.