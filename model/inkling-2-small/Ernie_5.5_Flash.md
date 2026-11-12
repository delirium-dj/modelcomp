# Inkling 2 Small — findings by Ernie 5.5 Flash

- Source: Thinking Machines/Inkling 2 Small (`inkling-2-small`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling 2 Small
- **Short description:** The production model derived from the Fledge Alpha evaluation runs (revealed 2026-11-10): a 594B-total / 17B-active multimodal MoE for coding, research and long-context agent work.
- **Provider / access:** Thinking Machines (`inkling-2-small`), OpenRouter, DeepInfra, Vercel, Arcee, plus ~13 routes. Open weights.
- **Release / knowledge:** 2026-11-10 (revealed); knowledge cutoff not published.
- **IDs:** `inkling-2-small`, `thinkingmachines/inkling-2-small`, `Inkling_2_Small` (canonical stem; the stealth-era `Fledge_Alpha` stem is retired and never recreated).
- **Context window:** 262,144–1,048,576 depending on route (DeepInfra/OpenRouter 524,288; Vercel 1,000,000); max output 262,144.
- **Modalities:** text, image and audio in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.30 / $1.00 per 1M input/output; cache read $0.10 (Arcee route).
- **Architecture:** open-weight MoE, 594B total / 17B active (Thinking Machines).

### Raw benchmarks found

Agent / tool use:

- DeepSearchQA: **90.9%**; BrowseComp: **90.2%** (both best-in-class for an open model)
- MCP Atlas: **85%**; Terminal-Bench 2.1: **85.1%**; JobBench: **70.5%**
- Terminal-Bench 4.x / OSWorld / Toolathlon: no verified public rows published

Reasoning / knowledge:

- CharXiv Reasoning: **87.7%**; LongBench v2: **70.6%**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for Inkling 2 Small

Coding:

- SWE-bench Verified: **82.2%**; SWE Multilingual: **81.2%**; DeepSWE: **72.1%**
- sweMarathon: **38.8%**; FrontierCode 2.0: **22.6%**; PostTrainBench v1.2: **31.9%**

Long context:

- LongBench v2: **70.6%** — solid; 262K–1M window depending on route

### Normalized scores (1–100)

- **Tool use: 80/100.** DeepSearchQA 90.9%, BrowseComp 90.2%, MCP Atlas 85% and TB2.1 85.1% form the strongest verified open-model agentic cluster in this dataset; FrontierCode 2.0 22.6% is the weak row.
- **Reasoning: 78/100.** CharXiv 87.7% is strong for document reasoning and LongBench v2 70.6% solid; no GPQA/HLE/ARC/FrontierMath row was published.
- **Context window: 80/100.** 262,144–1,048,576 depending on route (Vercel 1M, DeepInfra 524K).
- **Multimodal: 80/100.** Text, image and audio in with CharXiv 87.7% and ScreenSpot Pro 83.8% proving visual/GUI work; no public audio row.
- **Coding: 80/100.** SWE-bench Verified 82.2% and SWE Multilingual 81.2% are strong for an open model, DeepSWE 72.1% good; FrontierCode 2.0 22.6% and sweMarathon 38.8% cap it.
- **Cost efficiency: 90/100.** $0.30/$1.00 per 1M with open weights.
- **Overall Score: 79.6/100.** Best fit for self-hosted research agents, deep-web search and document/GUI work; the best open-weight agent in this dataset on the evidence available.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Thinking Machines model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inkling 2 Small — Thinking Machines / Hugging Face](https://huggingface.co/thinkingmachines/Inkling-2-Small)
  - [Inkling 2 Small benchmarks & sources — BenchLM](https://benchlm.ai/models/inkling-2-small)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small_v2.md`, using the same headings.