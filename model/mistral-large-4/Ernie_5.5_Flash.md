# Mistral Large 4 — findings by Ernie 5.5 Flash

- Source: Mistral AI/Mistral Large 4 (`mistral-large-4`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's 1T-parameter multimodal MoE (released 2026-10-06) for reasoning, coding and agentic work, with a 1M context — the top of the Mistral Large line.
- **Provider / access:** Mistral AI (`mistral-large-4`), OpenRouter (`mistralai/mistral-large-4-0`), Vercel, LLM Gateway, LowRouter, plus ~12 routes.
- **Release / knowledge:** 2026-10-06; knowledge cutoff not published.
- **IDs:** `mistral-large-4`, `mistralai/mistral-large-4`, `mistralai/mistral-large-4-0`.
- **Context window:** 1,048,576 tokens (524,288 on LowRouter); max output 262,144.
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.70 / $2.10 per 1M input/output; cache read $0.07 (LLM Gateway lists $1.36/$4.18).
- **Architecture:** sparse MoE, ~1T total parameters (Mistral); closed weights.

### Raw benchmarks found

Agent / tool use:

- b3 (Backbone Breaker) Agent Security: **97.1**; Cybench: **93.0**; BrowseComp: **84.5%**
- Finch (FinWorkBench): **73.3**; Finance Agent v2: **54.7%**; CWE-bench v2: **45.6%**
- Cyber Misuse Refusal: **96.6%** (JailbreakBench / StrongREJECT / AgentHarm)
- Terminal-Bench / Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- STEMBench120: **2.50**; NYT Connections: **27.4**; StealthMark: **43.3**; Chess Puzzles: **33.0**
- FrontierPhysics (end-to-end physics research): **0.0%** (near-floor)
- GPQA Diamond / HLE / ARC-AGI: no verified public rows published

Coding:

- Vibe Code Bench v1.1: **78.40%**; FrontierCode 2.0: **19.7%**
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** b3 97.1, Cybench 93.0 and BrowseComp 84.5% are strong security/research-agent rows; but no terminal/OSWorld row was published and FrontierPhysics 0.0% is a floor.
- **Reasoning: 60/100.** STEMBench120 2.50 is mid, NYT Connections 27.4 and StealthMark 43.3 are weak, FrontierPhysics 0.0% near-floor; no GPQA/HLE/ARC row exists.
- **Context window: 100/100.** 1,048,576 tokens with 262,144 max output.
- **Multimodal: 72/100.** Text, image and PDF in, but no public multimodal benchmark rows were published.
- **Coding: 78/100.** Vibe Code Bench 78.4% is the best verified coding row and is good; FrontierCode 2.0 19.7% is very weak and no SWE-bench row exists.
- **Cost efficiency: 92/100.** $0.70/$2.10 per 1M with $0.07 cache reads — a 1T-parameter model at a mid-tier price.
- **Overall Score: 77.6/100.** Best fit for security research agents and enterprise finance/legal workflows with a 1M context; not a general reasoning or repo-coding model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Mistral AI model docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Large 4 — Mistral AI](https://docs.mistral.ai/getting-started/models/models_overview/)
  - [Mistral Large 4 benchmarks & sources — BenchLM](https://benchlm.ai/models/mistral-large-4)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Mistral_Large_4_v2.md`, using the same headings.