# Kimi K2.6 — findings by Ernie 5.5 Flash

- Source: Moonshot AI/Kimi K2.6 (`kimi-k2.6`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight multimodal workhorse (released 2026-04-20) for agent loops, coding tasks and visual context, with a 262K context.
- **Provider / access:** Moonshot AI API (`kimi-k2.6`), NVIDIA NIM (free, rate-limited), OpenRouter, FastRouter, GmiCloud, Empirio Labs, Unorouter, plus ~60 routes. Open weights.
- **Release / knowledge:** 2026-04-20; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `kimi-k2.6`, `moonshotai/kimi-k2.6`, `moonshotai/Kimi-K2.6`, `nvidia/moonshotai/kimi-k2.6`.
- **Context window:** 262,144 tokens (65,536 on the GmiCloud route); max output 262,144.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** ~$0.95 / $4.00 per 1M input/output (Moonshot); the NVIDIA NIM route is free. Gateway rates range $0.75/$3.50 to $1.27/$5.34.
- **Architecture:** open-weight MoE (Moonshot AI).

### Raw benchmarks found

Agent / tool use:

- DeepSearchQA: **92.5%**; BrowseComp: **83.2%**; WideResearch: **80.8%**
- OSWorld-Verified: **73.1%**; Claw-Eval: **62.3%**; MCP Atlas: **55.9%**; Toolathlon: **50%**
- Terminal-Bench 2.0: **66.7%**; Terminal-Bench 2.1 (Vals): **53.6%**; ResearchClawBench: **18.0%**; Gert Labs composite: **56.82**

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for K2.6
- BenchLM ranks Mathematics as its strongest category (#4)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench v6: **89.6%**; LiveCodeBench (Vals AI): **86.8%**; SWE-bench Verified: **80.2%** (Vals **76.2%**)
- SWE-bench Pro: **58.6%**; SWE Multilingual: **76.7%**; SciCode: **52.2%**
- Vibe Code Bench v1.1: **37.89%**; cursorBench31: **47.6%**

Long context:

- 262K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** DeepSearchQA 92.5%, BrowseComp 83.2% and WideResearch 80.8% are strong for research agents, OSWorld-Verified 73.1% decent; MCP Atlas 55.9%, Toolathlon 50% and ResearchClawBench 18.0% are mid/low.
- **Reasoning: 75/100.** No public GPQA/HLE/ARC row exists; the score is derived from its #4 mathematics category rank — low confidence.
- **Context window: 78/100.** 262,144 tokens — the smallest among the Kimi line (K3/K3.1 Pro are 1M).
- **Multimodal: 80/100.** Text, image and video in; no public multimodal benchmark rows were published for K2.6.
- **Coding: 78/100.** LiveCodeBench v6 89.6% and SWE-bench Verified 80.2% are good, SWE Multilingual 76.7% solid; SWE-bench Pro 58.6% and Vibe Code Bench 37.9% are mid.
- **Cost efficiency: 88/100.** ~$0.95/$4.00 per 1M plus a free NIM route and open weights.
- **Overall Score: 76.6/100.** Best fit for research-heavy agents on a small context; K3/K3.1 Pro are better at 1M for a similar price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Moonshot AI model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K2.6 — Moonshot AI / Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Kimi K2.6 benchmarks & sources — BenchLM](https://benchlm.ai/models/kimi-k2-6)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Kimi_K2.6_v2.md`, using the same headings.