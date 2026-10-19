# Pareto 26.10 Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: Unbiased (`pareto-26.10-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's preview reasoning model with strong coding (DeepSWE 69.9%) and GPQA Diamond 92.4%, limited public benchmark coverage as a preview release.
- **Provider / access:** Unbiased Platform; no public API endpoints documented in benchmarks. Preview status suggests limited access.
- **Release / knowledge:** 2026-10-26 (preview); knowledge cutoff not publicly disclosed.
- **IDs:** `unbiased/pareto-26.10-preview` (estimated). No public provider listings found.
- **Context window:** Not publicly disclosed; no benchmark data for context window.
- **Modalities:** Text in; text out; reasoning yes; tool calls yes (TB 4.0 implies tool use); JSON mode unknown.
- **Pricing (as of 2026-10-19):** Not publicly disclosed; preview status.
- **Architecture:** Proprietary (Unbiased); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **50.80%** (Unbiased Pareto 26.10 Preview preliminary results)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Unbiased Pareto 26.10 Preview preliminary results)

Coding:

- DeepSWE: **69.9%** (Unbiased Pareto 26.10 Preview preliminary results)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** TB 4.0 50.8% (moderate agentic coding). No TB 2.1, GDPval, OSWorld, MCP Atlas, Toolathlon, Tau2, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 75/100.** GPQA Diamond 92.4% (exceeds 90%+ frontier). No HLE, LCR, CritPt, ARC-AGI, Omniscience, FrontierMath data. Capped by minimal reasoning benchmark coverage.
- **Context window: 50/100.** Not publicly disclosed; no MRCR/LCR data. Conservative estimate for unknown context.
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 75/100.** DeepSWE 69.9% (near 74%+ frontier). No SWE-bench, LiveCodeBench, FrontierCode, CursorBench, TB 2.1 data. Capped by minimal coding benchmark coverage.
- **Cost efficiency: 50/100.** Pricing not publicly disclosed; preview status prevents evaluation. Default midpoint.
- **Overall Score: 55/100.** Half-up mean of (60 + 75 + 50 + 15 + 75) / 5 = 55.0 → 55. Best-fit: preview model with promising GPQA and DeepSWE; insufficient public benchmarks for reliable evaluation; await GA release.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across BenchLM and Unbiased preview page; scores are normalized 1–100 interpretations, not official vendor scores. Note: severely limited benchmark coverage (3 benchmarks only).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.