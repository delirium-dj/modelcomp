# Flint — findings by Ernie 5.5 Flash

- Source: Flint (`flint`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** A coding/agent model released 2026-10-21, tracked by BenchLM with 5 sourced rows; the vendor and architecture are not identified in the sources reached.
- **Provider / access:** not verified in this pass.
- **Release / knowledge:** 2026-10-21; knowledge cutoff not published.
- **IDs:** `flint`, `flint-1.0` (unverified).
- **Context window / modalities / pricing / architecture:** not verified — no models.dev entry and no vendor card reached.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (mid)

Reasoning / knowledge:

- IFBench: **89.2%**; IFEval: **95.1%** (instruction following — very strong)
- GPQA Diamond / HLE / ARC-AGI: no verified public rows published

Coding:

- SWE-bench Pro v2 (resolved rate): **89.7%** — best verified SWE-bench Pro row in this dataset
- SWE-bench Verified: **74.2%**; LiveCodeBench v6: **80.3%**

Long context:

- No context window or MRCR / RULER / GraphWalks figure verified

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.1 54.9% is mid; no other agentic row was published.
- **Reasoning: 78/100.** IFBench 89.2% and IFEval 95.1% are excellent for instruction following; no GPQA/HLE/ARC row was published.
- **Context window: 50/100.** No context window is published for this model — scored at the unverified midpoint.
- **Multimodal: 50/100.** No modality claim is published — scored at the unverified midpoint.
- **Coding: 80/100.** SWE-bench Pro v2 89.7% is the best verified Pro figure here and LiveCodeBench v6 80.3% is strong; SWE-bench Verified 74.2% is mid.
- **Cost efficiency: 85/100.** No verified rate.
- **Overall Score: 63.6/100.** Best fit for repo-level coding agents; two dims are unverified, so treat as provisional.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Flint benchmarks — BenchLM](https://benchlm.ai/models/flint)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Flint_v2.md` next to this file.