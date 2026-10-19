# MAI-Code-1.1-Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Microsoft (`mai-code-1.1-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's coding-specialized reasoning model with SWE-bench Verified 72.6%, 256K context, at unknown pricing.
- **Provider / access:** Microsoft AI Platform; no public API endpoints documented in benchmarks. Limited benchmark coverage.
- **Release / knowledge:** 2026 (estimated); knowledge cutoff not publicly disclosed.
- **IDs:** `microsoft/mai-code-1.1-flash` (estimated). No public provider listings found.
- **Context window:** 256,000 tokens total (256K per BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes; tool calls yes (TB 2.1 implies tool use); JSON mode unknown.
- **Pricing (as of 2026-10-19):** Not publicly disclosed.
- **Architecture:** Proprietary (Microsoft); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (Microsoft AI model card)

Reasoning / knowledge:

- No verified public reasoning benchmarks found

Coding:

- SWE-bench Verified: **72.6%** (Microsoft AI model card)
- Terminal-Bench 2.1: **62.9%** (Microsoft AI model card)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** TB 2.1 62.9% (moderate agentic coding). No TB 2.0/4.0, GDPval, OSWorld, MCP Atlas, Toolathlon, Tau2, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 40/100.** No verified public reasoning benchmarks found (no GPQA, HLE, LCR, CritPt, ARC-AGI, Omniscience, FrontierMath). Capped by complete absence of reasoning benchmark data.
- **Context window: 55/100.** 256K native context; no MRCR/LCR data. Methodology: 200K-500K = 65-84 (at lower end).
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 75/100.** SWE-bench Verified 72.6% (exceeds 70%+), TB 2.1 62.9%. Capped by no SWE-bench Pro/DeepSWE/LiveCodeBench/FrontierCode/CursorBench data.
- **Cost efficiency: 50/100.** Pricing not publicly disclosed. Default midpoint.
- **Overall Score: 48/100.** Half-up mean of (55 + 40 + 55 + 15 + 75) / 5 = 48.0 → 48. Best-fit: coding-specialized model with strong SWE-bench Verified; insufficient public benchmarks for reliable evaluation across dimensions.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across BenchLM and Microsoft AI model card; scores are normalized 1–100 interpretations, not official vendor scores. Note: severely limited benchmark coverage (3 benchmarks only).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.