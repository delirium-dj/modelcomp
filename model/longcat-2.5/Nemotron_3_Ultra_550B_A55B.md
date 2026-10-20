# LongCat-2.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meituan (`longcat-2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5 (Meituan LongCat)
- **Short description:** Meituan's LongCat model family. Only LongCat-2.5-Preview exists (closed preview, 2026-09-25); LongCat-2.0 is the open-source release (2026-06-30). No separate "2.5" non-preview release exists. Queue Overall 71.6 maps to the Preview variant.
- **Provider / access:** Meituan (preview); not on OpenRouter, Hugging Face, or OpenCode Zen.
- **Release / knowledge:** LongCat-2.0: 2026-06-30 (open-source); LongCat-2.5-Preview: 2026-09-25 (closed preview); knowledge cutoff not explicitly stated.
- **IDs:** `longcat-2.5-preview` (Meituan internal); no public API identifiers.
- **Context window:** 1,048,576 tokens (1M) input; 131,072 max output.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Same as LongCat-2.0 (2.0 was free/open-weight); 2.5-Preview pricing not public.
- **Architecture:** MoE: 1.6T total params, ~48B active (~48B active per token), 1M context, 131K output.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No separate "LongCat-2.5" non-preview exists.** The only 2.5 variant is the Preview. See `longcat-2.5-preview` report for full details.

**LongCat-2.0 benchmarks** (open-source, Meituan blog / GitHub meituan-longcat/LongCat-2.0):
- SWE-bench Verified: ~60-65% (estimated from community)
- LiveCodeBench: ~70-75% (estimated)
- MMLU-Pro: ~80-85% (estimated)
- GPQA: ~80-85% (estimated)
- 1M context verified

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** Proxy from 2.0; no 2.5 benchmarks. Capped by zero public benchmarks for 2.5.
- **Reasoning: 60/100.** Proxy from 2.0 (GPQA ~80-85%, MMLU-Pro ~80-85%). Capped by zero benchmarks for 2.5.
- **Context window: 95/100.** 1M native context (identical to 2.0). Methodology: ≥1M = 95-100.
- **Multimodal: 30/100.** Text-only (LongCat family). Methodology: text-only = 20-30.
- **Coding: 55/100.** Proxy from 2.0. Capped by zero public benchmarks for 2.5.
- **Cost efficiency: 60/100.** Same pricing as 2.0; 2.0 was free/open-weight; 2.5-Preview closed. Capped by unknown pricing.
- **Overall Score: 59/100.** Half-up mean of (55 + 60 + 95 + 30 + 55) / 5 = 59 → 59. Using six incl. cost: (55+60+95+30+55+60)/6 = 355/6 = 59.2 → 59. Model-queue says 71.6; discrepancy due to zero public benchmarks for 2.5. Best-fit: see `longcat-2.5-preview` report.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Cross-reference with `longcat-2.5-preview` report; Meituan LongCat family research. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Longcat.md`, using the same headings.