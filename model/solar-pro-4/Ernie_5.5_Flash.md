# Solar Pro 4 — findings by Ernie 5.5 Flash

- Source: Upstage/Solar Pro 4 (`solar-pro-4`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's flagship model (released 2026-08-06, listed Aug 11) specialized for agentic use, with a 512K context.
- **Provider / access:** Upstage (`solar-pro4`), plus ~5 routes.
- **Release / knowledge:** 2026-08-06; knowledge cutoff 2026-02 (models.dev).
- **IDs:** `solar-pro-4`, `upstage/solar-pro4`.
- **Context window:** 524,288 tokens; max output 131,072.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.30 / $1.20 per 1M input/output; cache read $0.06.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **61.4%**; Terminal-Bench 2.1: **57.0%**; APEX-Agents: **18.7%** (near-floor)
- BrowseComp: **49.2%**; Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- AIME 2026: **95.3%**; GPQA Diamond: **89.0%**; MMLU-Pro: **86.3%**; KMMLU-Pro: **79.2%**
- HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- LiveCodeBench: **87.8%**; SWE-bench Verified: **70.6%**; SWE-bench Pro: **52.8%**
- DeepSWE / FrontierCode: no verified public rows published

Long context:

- 512K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 61.4% and TB2.1 57.0% are mid, APEX-Agents 18.7% is near-floor; no modern-harness row was published.
- **Reasoning: 82/100.** AIME 2026 95.3%, GPQA 89.0% and MMLU-Pro 86.3% are strong; no HLE/ARC/FrontierMath row was published.
- **Context window: 85/100.** 524,288 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 78/100.** LiveCodeBench 87.8% is strong, SWE-bench Verified 70.6% decent, SWE-bench Pro 52.8% mid.
- **Cost efficiency: 88/100.** $0.30/$1.20 per 1M with $0.06 cache reads.
- **Overall Score: 64.4/100.** Best fit for math-heavy reasoning and code generation on a 512K window; the text-only modality is the main limitation.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Upstage Solar model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Solar Pro 4 — Upstage](https://upstage.ai/)
  - [Solar Pro 4 benchmarks & sources — BenchLM](https://benchlm.ai/models/solar-pro-4)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Solar_Pro_4_v2.md`, using the same headings.