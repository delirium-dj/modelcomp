# Union Alpha — findings by Iceman

- Source: Unbiased AI/Union Alpha (revealed as Pareto 26.9 composite)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (revealed identity: Unbiased Pareto 26.9 composite)
- **Short description:** Union Alpha was a stealth/free preview that local metadata identifies as Unbiased’s Pareto 26.9 composite system (blend/routing of multiple models, not a single checkpoint) for coding/research workflows.
- **Provider / access:** Unbiased AI Pareto platform/API (`unbiased/pareto-26.9`). Union Alpha itself was a free Zen preview (2026-09-16 to 2026-09-18, retired per local metadata). Local metadata lists `unbiased/pareto-26.9` and `noFreeId`.
- **Release / knowledge:** Pareto 26.9 referenced in Unbiased model card comparisons (Sep 20, 2026 entry shown). Knowledge cutoff not explicitly stated.
- **IDs:** `union-alpha` (stealth preview), `pareto-26.9`, `unbiased/pareto-26.9`.
- **Context window:** 262,144 total; 131,072 max output (local metadata). Not independently verified from reviewed page text.
- **Modalities:** Text and image input; text output (local metadata/Unbiased Pareto context).
- **Pricing (as of 2026-11-10):** Pareto 26.9 paid route: $2.50 / 1M input, $7.50 / 1M output, $0.25 cached input (local metadata). Union Alpha preview was free during limited period.
- **Architecture:** Composite/blended system selecting models per request (Unbiased Pareto model card concept); underlying architecture is routing/composition rather than a single disclosed model.

### Raw benchmarks found

> Verified figure below is from Unbiased AI’s Pareto 26.10 model card benchmark table (includes Pareto 26.9 comparison entry). Results are vendor-reported and composite-system specific.

Agent / tool use:

- DeepSWE v1.1 (benchmark table entry for Pareto 26.9): **70.0%** at **$0.29 per task** (vs Pareto 26.10 69.9% at $0.24; Fable 5 70.0% at $13.50 in same table)
- Terminal-Bench 4.0 / Tau2-Bench / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found** for Pareto 26.9 in reviewed sources

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- DeepSWE v1.1: **70.0%** at **$0.29 per task** (Pareto 26.9, vendor-reported comparison)
- SWE-bench Verified / SWE-Pro: **no verified public score found**

Long context:

- 262K context / 131K max output stated in local metadata; no standalone long-context retrieval benchmark score extracted.

Multimodal:

- Text and image input supported per metadata; no multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from limited verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are provisional for a composite/retired-preview identity with sparse public benchmark disclosure.

- **Tool use: 82/100.** Strong agentic coding/task performance indicated by DeepSWE v1.1 70.0% at low cost/task ($0.29) for Pareto 26.9, but broader agent benchmark coverage is limited.
- **Reasoning: 80/100.** Composite frontier-routing systems can perform well on hard tasks, but no verified standardized reasoning benchmark numerics were extracted for this exact identity.
- **Context window: 86/100.** 262K context / 131K output (metadata) is good for many workflows but below 1M-class leaders.
- **Multimodal: 80/100.** Text+image input support is useful, but multimodal evidence/benchmarks are not documented in reviewed sources.
- **Coding: 88/100.** Verified DeepSWE v1.1 70.0% (Pareto 26.9) indicates strong coding/agentic coding performance for a cost-efficient composite route.
- **Cost efficiency: 90/100.** Reported cost/performance on DeepSWE is strong ($0.29/task); paid token pricing is higher than some peers but preview access was free.
- **Overall Score: 83/100.** Mean of the five non-cost dims (82, 80, 86, 80, 88) = 83.2 → 83. Best fit historically as a cost-efficient coding composite (stealth Union Alpha / Pareto 26.9), with limited independent verification and retired preview status.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Unbiased AI model card; scores are conservative normalized 1–100 interpretations from vendor-reported comparison data, not official vendor scores.
- Reference URLs:
  - [Pareto 26.10 model card / benchmark comparisons (Unbiased AI)](https://unbiased.ai/model-card/)
  - Local repository metadata consulted: `model/union-alpha/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
