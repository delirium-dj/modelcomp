# Pareto 26.10 Preview — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/pareto-26-10-preview (Unbiased: Pareto 26.10 Preview preliminary results, unbiased.ai), Unbiased model card (unbiased.ai/model-card/)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's Pareto 26.10 Preview proprietary reasoning model; preview release; only 3 public benchmark rows available, context window not published (N/A).
- **Provider / access:** Unbiased (unbiased.ai); proprietary. Sibling: Pareto 26.9 (score not computed).
- **Release / knowledge:** Release date not confirmed in fetched sources; knowledge cutoff not stated.
- **IDs:** `pareto-26.10-preview` (benchlm slug); no provider API ID confirmed. No Free ID confirmed.
- **Context window:** Not published (N/A per benchlm.ai).
- **Modalities:** Not confirmed in fetched sources.
- **Pricing (as of 2026-10-16):** Not found.
- **Architecture:** Not confirmed in fetched sources.

### Raw benchmarks found

Only 3 benchmark rows found:

- Terminal-Bench 4.0: **50.80%** (Unbiased preliminary results)
- DeepSWE: **69.9%** (Unbiased preliminary results)
- GPQA-D: **92.4%** (Unbiased preliminary results)

No verified public scores found for all other benchmarks (Agent use beyond Terminal-Bench, HLE, ARC-AGI, MMLU-Pro, SWE-bench, LiveCodeBench, MMMU-Pro, MRCR, OSWorld, etc.).

### Normalized scores (1–100)

Derived from the 3 raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Evidence is extremely thin — most dims rest on a single number each; treat all scores as highly provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 56/100.** Terminal-Bench 4.0 50.80% is the only agentic number found; capped by total absence of other agentic benchmark evidence.
- **Reasoning: 76/100.** GPQA-D 92.4% is strong; capped by absence of HLE/ARC-AGI/CritPt numbers for this exact model.
- **Context window: 50/100.** Context window not published (N/A); no public long-context retrieval score found; scored at midpoint pending confirmation.
- **Multimodal: 50/100.** Modality support not confirmed in fetched sources; no public multimodal benchmark scores found; scored at midpoint pending confirmation.
- **Coding: 71/100.** DeepSWE 69.9% is the only coding number found; capped by total absence of other coding benchmark evidence.
- **Cost efficiency: 50/100.** Pricing not found; scored at midpoint pending confirmation; not counted toward Overall.
- **Overall Score: 61/100.** Half-up mean of (56 + 76 + 50 + 50 + 71) / 5 = 60.6 → 61. Best-fit recommendation: extremely limited public evidence — treat all scores as placeholders pending Unbiased publishing a fuller benchmark suite and context window.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Unbiased preliminary results); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
