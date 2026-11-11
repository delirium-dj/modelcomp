# Inkling Small — findings by Ernie 5.5 Flash

- Source: Thinking Machines/Inkling Small (`inkling-small`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' multimodal MoE reasoning model (released 2026-07-30): 276B total / 12B active parameters, serving text, image and audio, with open weights.
- **Provider / access:** Thinking Machines / Arcee (`arcee/thinkingmachines/inkling-small`), OpenRouter (`thinkingmachines/inkling-small`), DeepInfra, Vercel AI Gateway, AI/ML API, plus ~13 routes. Open weights.
- **Release / knowledge:** 2026-07-30 (models.dev); knowledge cutoff not published.
- **IDs:** `inkling-small`, `thinkingmachines/inkling-small`, `thinkingmachines/Inkling-Small`, `arcee/thinkingmachines/inkling-small`.
- **Context window:** 262,144 tokens on most routes (Vercel lists 1,000,000; DeepInfra/OpenRouter 524,288); max output 262,144.
- **Modalities:** text, image and audio in; text out (models.dev lists text-only for the Arcee route — theThinking Machines description claims image and audio); reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.50 / $1.20 per 1M input/output; cache read $0.10 (BenchLM cites $0.58/$1.44).
- **Architecture:** open-weight MoE, 276B total / 12B active (Thinking Machines).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **79.6%**; BrowseComp: **77.4%**; Terminal-Bench 2.1: **64.7%** (Vals **55.1%**)
- Toolathlon-Verified: **54.4%**; Arena-Hard / JudgeBench: no verified public rows
- Terminal-Bench 4.x / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA: **89.5%**; MMLU-Pro (Vals AI): **85.6%**; HLE: **47.8%** with tools, **31.6%** without
- ARC-AGI-1 (semi-private): **84.00%**; ARC-AGI-2: **40.1%**
- CritPt: **8.3%** (near-floor); MMMU-Pro: **74%**; CharXiv Reasoning: **81.3%** (77.4% without tools)

Coding:

- SWE-bench Verified: **80.2%** (Vals **82.2%**); LiveCodeBench (Vals AI): **85.9%**
- SWE-bench Pro: **55.9%**; SciCode: **48.7%**
- DeepSWE / FrontierSWE / FrontierCode: no verified public rows published

Long context:

- 262K–1M window depending on route; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 75/100.** MCP Atlas 79.6% and BrowseComp 77.4% are solid, TB2.1 64.7% mid; Toolathlon 54.4% and the total absence of OSWorld/TB4.x rows cap it.
- **Reasoning: 78/100.** GPQA 89.5% and MMLU-Pro 85.6% are good, HLE 47.8% mid, ARC-AGI-2 40.1% and CritPt 8.3% show the ceiling.
- **Context window: 80/100.** 262,144 tokens on most routes (524K–1M on others) — the smallest window in this tier of the dataset.
- **Multimodal: 78/100.** Text, image and audio in per the vendor, with MMMU-Pro 74% and CharXiv 81.3% proving image reasoning; the Arcee route is text-only, and no audio benchmark exists.
- **Coding: 80/100.** SWE-bench Verified 80.2% (82.2% Vals) and LiveCodeBench 85.9% are good, but SWE-bench Pro 55.9% and SciCode 48.7% are mid-pack.
- **Cost efficiency: 88/100.** $0.50/$1.20 per 1M for open weights with 12B active parameters — very cheap to serve.
- **Overall Score: 78.2/100.** Best fit for cheap multimodal reasoning and self-hosting; not a frontier coding or agent model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Thinking Machines model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inkling Small — Thinking Machines / Hugging Face](https://huggingface.co/thinkingmachines/Inkling-Small)
  - [Inkling Small benchmarks & sources — BenchLM](https://benchlm.ai/models/inkling-small)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Inkling_Small_v2.md`, using the same headings.