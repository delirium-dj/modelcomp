# Solar Mini 4 — findings by GPT-6 Luna

- Source: Upstage/Solar Mini 4, `upstage/solar-mini-4`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's Sep 2026 compact reasoning MoE (35B total/3B active, 512K, text-only): AA Intelligence Index 24, AA-LCR 83.3%, 121 tok/s — proprietary, with a listed $0.10/$0.40 rate after the $0.05/$0.20 promotion ended.
- **Provider / access:** Upstage Console; OpenRouter; Hermes Agent (free, limited time).
- **Release / knowledge:** Released 2026-10-01; knowledge cutoff not stated.
- **IDs:** `upstage/solar-mini4` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 524,288 total (131,072 max output; AA states 1M)
- **Modalities:** Text in/out only; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** List $0.10/$0.40 per 1M ($0.01 cached); the collected $0.05/$0.20 promotion ended 2026-10-23 — proprietary, no weights.
- **Architecture:** MoE, 35B total / 3B active, 512K context. Proprietary.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM not computed)
- τ³-Banking: **47.2%** (Upstage official)
- AutomationBench-AA: **22.3%** (Upstage official, via AI Profit Boardroom)
- Tool calling: supported (parallel tool calling)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- AA Intelligence Index: **24.1** (Upstage official, Artificial Analysis)
- AA-LCR: **83.3%** (Upstage official)
- HLE: **25.8%** (Upstage official, via AI Profit Boardroom)
- SciCode: **47.6%** (Upstage official, via AI Profit Boardroom)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SciCode: **47.6%** (Upstage official)
- Plotly data analytics exam: **49%** (21/43) (Plotly)

Long context:

- 512K window; AA-LCR **83.3%** (Upstage official); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ³-Banking 47.2%, AutomationBench 22.3%; caps at AutomationBench 22.3%.
- **Reasoning: 62/100.** AA Intelligence 24.1, AA-LCR 83.3%, HLE 25.8%; caps at HLE 25.8%.
- **Context window: 72/100.** 512K window; AA-LCR 83.3%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 58/100.** SciCode 47.6%, Plotly 49%; caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 96/100.** Very cheap $0.10/$0.40 per 1M.
- **Overall Score: 58.8/100.** Half-up mean of the five non-cost quality dimensions: (62 + 62 + 72 + 40 + 58) / 5 = 58.8. Cost efficiency is excluded. best-fit for high-volume agent tasks at ultra-low cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://console.upstage.ai/docs/models/solar-mini-4)
  - [Source 2](https://openrouter.ai/upstage/solar-mini4)
  - [Source 3](https://artificialanalysis.ai/models/solar-mini4)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
