# Pareto 26.10 Preview — findings by Ernie 5.5 Flash

- Source: Pareto/Union Alpha composite, Pareto 26.10 Preview (`pareto-26.10-preview`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** The successor to the Pareto 26.9 composite record (`union-alpha`): a routed/composite system rather than a single checkpoint, previewed on 2026-10-01. Successor to the Union Alpha product, not a new base model.
- **Provider / access:** Routed preview release; BenchLM lists it as tracked-but-unranked with no first-party API rate. No models.dev catalog entry.
- **Release / knowledge:** 2026-10-01 (BenchLM model record); knowledge cutoff not published.
- **IDs:** `pareto-26.10-preview`, `pareto-26.10`, `unbiased/pareto` (composite lineage).
- **Context window:** Not announced in any public source found for this preview — treat as unverified.
- **Modalities:** text in / text out (no modality claim published); reasoning and tool use implied by its agentic rows.
- **Pricing (as of 2026-11-11):** no published per-token rate found for the 26.10 preview.
- **Architecture:** composite/router system (Pareto line), not a single checkpoint — per the roster note, `union-alpha` is "a composite router, never a checkpoint", and 26.10 is its separate tracked successor.

### Raw benchmarks found

> BenchLM exposes only 3 sourced rows for this preview.

Agent / tool use:

- Terminal-Bench 4.0: **50.80%**
- Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (best verified GPQA row in this dataset)
- HLE / ARC-AGI / FrontierMath: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **69.9%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- No context window or MRCR / RULER / GraphWalks figure published

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 4.0 50.8% is mid-frontier for a 2026 preview; with no OSWorld/Toolathlon row the score is a single-row estimate.
- **Reasoning: 85/100.** GPQA Diamond 92.4% is the strongest verified GPQA figure in this dataset, but it is the only reasoning row.
- **Context window: 50/100.** No context window is published for this preview — scored at the unverified midpoint pending vendor documentation.
- **Multimodal: 50/100.** No modality claim is published; scored at the unverified midpoint.
- **Coding: 78/100.** DeepSWE 69.9% is good but it is the only coding row and no SWE-bench row exists.
- **Cost efficiency: 50/100.** No published price — scored at the unverified midpoint.
- **Overall Score: 67.0/100.** Best fit for evaluations of a composite routing system; the three-row evidence base and missing context/pricing mean it cannot be recommended for production without vendor documentation.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (BenchLM model profile for Pareto 26.10 Preview, the repo alias-family record for Union Alpha); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Pareto 26.10 Preview benchmarks & sources — BenchLM](https://benchlm.ai/models/pareto-26-10-preview)
  - [Union Alpha / Pareto composite record — model-aliases.generated.md](../../model-aliases.generated.md)
- Future sources: add a new file next to this one, e.g. `Pareto_26.10_Preview_v2.md`, using the same headings.