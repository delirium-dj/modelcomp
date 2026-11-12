# MiniMax-M2.7 — findings by Ernie 5.5 Flash

- Source: MiniMax/MiniMax-M2.7 (`minimax-m2.7`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.7
- **Short description:** MiniMax's open flagship (released 2026-03-18) for coding agents, office automation and complex environments, at a 204.8K context.
- **Provider / access:** MiniMax API (`MiniMax-M2.7`), OpenRouter, plus ~42 routes. Open weights.
- **Release / knowledge:** 2026-03-18; knowledge cutoff not published.
- **IDs:** `minimax-m2.7`, `minimax/MiniMax-M2.7`.
- **Context window:** 204,800 tokens; max output 131,072.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.30 / $1.20 per 1M input/output; cache read $0.06.
- **Architecture:** open-weight MoE (MiniMax).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **57.0%**; SWE-Rebench: **51.9%**; Multi-SWE Bench: **52.7%**
- Terminal-Bench 4.x / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for M2.7
- BenchLM ranks Instruction Following as its strongest category (#14)

Coding:

- LiveCodeBench (Vals AI): **79.9%**; SWE-bench Verified (mini-swe-agent-v2): **75.4%**
- SWE-bench Pro: **56.2%**; SWE Multilingual: **76.5%**; NL2Repo: **39.8%**
- VIBE-Pro: **55.6%**; Vibe Code Bench v1.1: **27.04%**

Long context:

- 204.8K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.0 57.0% and SWE-Rebench 51.9% are mid, Multi-SWE 52.7% mid; no modern-harness row was published.
- **Reasoning: 60/100.** No public reasoning benchmark was published; the score is derived from its #14 instruction-following rank — low confidence.
- **Context window: 65/100.** 204,800 tokens with 131,072 max output — below the 1M open-flagship tier.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 72/100.** LiveCodeBench 79.9% and SWE-bench Verified 75.4% are decent for an open model, SWE Multilingual 76.5% solid; NL2Repo 39.8% and Vibe Code Bench 27.0% are weak.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M with open weights.
- **Overall Score: 55.4/100.** Best fit for self-hosted office automation and coding agents at a small context; the text-only modality and missing reasoning rows keep it well behind MiniMax M3/M3.1.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (MiniMax model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMaxAI/MiniMax-M2.7 — Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)
  - [MiniMax-M2.7 benchmarks & sources — BenchLM](https://benchlm.ai/models/minimax-m2-7)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MiniMax_M2.7_v2.md`, using the same headings.