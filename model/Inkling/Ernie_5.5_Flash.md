# Inkling — findings by Ernie 5.5 Flash

- Source: Thinking Machines/Inkling (`Inkling`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' multimodal reasoning model (released 2026-07-15) for visual analysis, planning and tool use, with a 524K context.
- **Provider / access:** OpenRouter (`thinkingmachines/inkling`), plus ~19 routes. Open weights.
- **Release / knowledge:** 2026-07-15; knowledge cutoff not published.
- **IDs:** `Inkling`, `thinkingmachines/inkling`.
- **Context window:** 524,288 tokens; max output 471,859.
- **Modalities:** text, image and audio in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.00 / $4.05 per 1M input/output (OpenRouter); cache read $0.17. BenchLM lists $1.87/$4.68.
- **Architecture:** open-weight MoE (Thinking Machines; undisclosed size).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **74.1%**; BrowseComp: **77.1%**; Terminal-Bench 2.1: **63.8%** (Vals **47.6%**)
- CWE-bench v1: **37.0%** (weak)

Reasoning / knowledge:

- BenchLM ranks Mathematics as its strongest category (#9)
- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Inkling
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **85.5%**; SWE-bench Verified: **77.6%** (Vals **77.6%**)
- SWE-bench Pro: **54.3%**; FrontierSWE v2: **4.1%** (near-floor)

Long context:

- 524K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 74.1% and BrowseComp 77.1% are mid, TB2.1 63.8% below the frontier; FrontierSWE v2 4.1% is near-floor.
- **Reasoning: 78/100.** The #9 mathematics rank is the headline; no public GPQA/HLE/ARC row was published.
- **Context window: 85/100.** 524,288 tokens with a 471,859 max output.
- **Multimodal: 78/100.** Text, image and audio in; no public multimodal benchmark row was published.
- **Coding: 75/100.** LiveCodeBench 85.5% and SWE-bench Verified 77.6% are decent, SWE-bench Pro 54.3% mid, FrontierSWE v2 4.1% weak.
- **Cost efficiency: 88/100.** $1.00/$4.05 per 1M with open weights.
- **Overall Score: 77.6/100.** Best fit for self-hosted math/reasoning and multimodal work; Inkling 2 Small is the better-tuned successor.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Thinking Machines model card, BenchLM profile, models.dev, OpenRouter); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inkling — Thinking Machines / OpenRouter](https://openrouter.ai/thinkingmachines/inkling)
  - [Inkling benchmarks & sources — BenchLM](https://benchlm.ai/models/Inkling)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Inkling_v2.md` next to this file.