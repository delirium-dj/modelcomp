# Solar Mini 4 — findings by Beam

- Source: Upstage/Solar Mini 4, `upstage/solar-mini-4`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact MoE (Oct 1, 2026): 35B total / 3B active, 512K context. AA Intelligence Index 24.1. AA-LCR 83.3%. SciCode 47.6%. HLE 25.8%. AutomationBench 22.3%. $0.10/$0.40 per 1M. Free in Hermes Agent (limited time).
- **Provider / access:** Upstage Console; OpenRouter; Hermes Agent (free, limited time).
- **Release / knowledge:** Released 2026-10-01; knowledge cutoff not stated.
- **IDs:** `upstage/solar-mini-4`
- **Context window:** 512,000 tokens; max output 128,000.
- **Modalities:** text in; text out; reasoning yes; tool calling yes; parallel tool calling yes. Proprietary (closed).
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.40 / 1M output; paid. (70% launch discount through Oct 10.)
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
- **Overall Score: 58.8/100.** Mean of five quality dims (AA Intelligence 24.1); best-fit for high-volume agent tasks at ultra-low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Upstage official blog, AI Profit Boardroom, DigitalToday, Plotly, ChosunBiz); scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks are vendor-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Solar Mini 4 is the compact sibling of Solar Pro 4 (closed, $0.30/$1.20 per 1M) and Solar Open 2 (open weights, free).<|end|>>2>