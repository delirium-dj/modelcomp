# Pareto 26.10 Preview — findings by Mercury 3

- Source: Unbiased/Pareto 26.10 Preview
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview (successor to Pareto 26.9)
- **Short description:** Unbiased's proprietary reasoning model (2026-10 preview; successor to the Pareto 26.9 composite-record router, tracked separately): preliminary vendor-published rows show strong agentic coding (TB4.0 50.8%, DeepSWE 69.9%) and GPQA 92.4%; sparse independent coverage.
- **Provider / access:** Unbiased platform (`unbiased.ai`); closed proprietary; model card at unbiased.ai/model-card/.
- **Release / knowledge:** 2026-10 preview; knowledge cutoff not published.
- **IDs:** `pareto-26.10-preview` (queue slug; `unbiased/pareto` family on models.dev $2.50/$7.50 for the 26.9-generation row).
- **Context window:** not published (family 262K per models.dev).
- **Modalities:** text input, text output (per family specs); reasoning; tool calls.
- **Pricing (as of 2026-11-03):** not published for this preview (family $2.50/$7.50).
- **Architecture:** proprietary composite/router lineage — no standalone checkpoint identified; flagged.

### Raw benchmarks found

Preliminary (Unbiased-published; BenchLM aggregation):

- Terminal-Bench 4.0: **50.8%**; DeepSWE: **69.9%**; GPQA-D: **92.4%**
- No other verified public rows found in sources reviewed (AA lists no page)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB4.0 50.8% is strong for a composite router; no TB2.x/agentic-index rows — capped by missing evidence.
- **Reasoning: 80/100.** GPQA-D 92.4% strong; no HLE/ARC/II rows — capped by missing evidence.
- **Context window: 72/100.** Family 262K; this preview unpublished — conservative.
- **Multimodal: 55/100.** No verified multimodal support listed — text-only per family.
- **Coding: 83/100.** DeepSWE 69.9% and TB4.0 50.8% strong; no SWE Verified/Pro rows — capped by missing evidence.
- **Cost efficiency: 78/100.** Family $2.50/$7.50 — premium; preview pricing unpublished.
- **Overall Score: 74/100.** Mean of (82+80+72+55+83)/5 = 74.4 → 74. Promising agentic-coder preview with thin public evidence — flag for re-verification when full rows surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Unbiased model card/website via BenchLM, models.dev registry); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: Pareto 26.9 was a composite-record router (alias `union-alpha`); 26.10 is tracked separately per repo rules; all rows are vendor-preliminary, flagged.
- Reference URLs:
  - [Pareto 26.10 Preview — BenchLM benchmark aggregation](https://benchlm.ai/models/pareto-26-10-preview)
  - [Unbiased Pareto model card](https://unbiased.ai/model-card/)
  - [Pareto — models.dev registry (Unbiased, 262K)](https://models.dev/models/unbiased/pareto)
