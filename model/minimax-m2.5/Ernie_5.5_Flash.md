# MiniMax-M2.5 — findings by Ernie 5.5 Flash

- Source: MiniMax/MiniMax-M2.5 (`minimax-m2.5`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax's prior open coding model (released 2026-02-12) for agent workflows, office edits and automation.
- **Provider / access:** MiniMax API (`MiniMax-M2.5`), OpenRouter, plus ~41 routes. Open weights.
- **Release / knowledge:** 2026-02-12; knowledge cutoff not published.
- **IDs:** `minimax-m2.5`, `minimax/MiniMax-M2.5`.
- **Context window:** 204,800 tokens; max output 131,072.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.30 / $1.20 per 1M input/output; cache read $0.03.
- **Architecture:** open-weight MoE (MiniMax).

### Raw benchmarks found

Agent / tool use:

- MEWC (Multi-Environment Web Challenge): **74.4%** (best row); JobBench: **14.8%** (near-floor)
- Gert Labs composite: **39.11**
- Terminal-Bench / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **82.1%**; MMLU-Pro (Vals AI): **80.1%**; NYT Connections: **16.8%**

Coding:

- LiveCodeBench (Vals AI): **79.2%**; SWE-bench (Vals AI): **74.2%**
- Vibe Code Bench v1.1: **14.85%** (weak)
- SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 204.8K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 58/100.** MEWC 74.4% is good, but JobBench 14.8% and Gert Labs 39.11 are near-floor; no terminal/OSWorld row was published.
- **Reasoning: 68/100.** GPQA 82.1% and MMLU-Pro 80.1% are decent for a 2026 open model, NYT Connections 16.8% near-floor.
- **Context window: 65/100.** 204,800 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 72/100.** LiveCodeBench 79.2% and SWE-bench (Vals) 74.2% are decent, Vibe Code Bench 14.85% weak.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M with open weights.
- **Overall Score: 55.6/100.** Best fit for self-hosted office automation; MiniMax M3/M3.1 are better on every measured axis.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (MiniMax model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMaxAI/MiniMax-M2.5 — Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)
  - [MiniMax-M2.5 benchmarks — BenchLM](https://benchlm.ai/models/minimax-m2-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `MiniMax_M2.5_v2.md` next to this file.