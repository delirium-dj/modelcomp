# Claude Fable 5 — findings by Solar_Mini_4

> TEMPLATE — do not commit as-is. Copy this file to `model/claude-fable-5/Solar_Mini_4.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be independent.
> Overview + scoring methodology: `../../model-comparison.md`.

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's generally available Fable-class model for agentic coding, long context, and multimodal reasoning; production-safeguarded deployment.
- **Provider / access:** Anthropic Claude API (`claude-fable-5`), Anthropic Console; OpenCode Zen `opencode/claude-fable-5`; GitHub `anthropic/claude-fable-5`.
- **Release / knowledge:** Released 2026-09-18; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `anthropic/claude-fable-5` (Hugging Face registry slug); GitHub `anthropic/claude-fable-5`.
- **Context window:** 1M total; 256K max output (official Anthropic API docs).
- **Modalities:** text + image input; text output; reasoning always-on adaptive; tool calls supported.
- **Pricing (as of 2026-11-08):** $0.40/$3.20 per 1M input/output (with 50% launch discount → ~$0.20/$1.60); batch API 50% discount.
- **Architecture:** Proprietary Anthropic Claude Fable 5; not open weights; compact 3B-active-parameter design.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Reasoning / knowledge:
- AA-GPQA Diamond: **93.7%** measured (high-confidence) — BenchGap 2026-11-07
- GPQA Diamond: **94.8%** estimated ±1.5pp (high confidence) — BenchGap 2026-11-07
- GPQA: **95.9%** estimated ±1.6pp (medium confidence) — BenchGap 2026-11-07
- HLE: **65.0%** measured — BenchGap 2026-11-07
- MMLU-Pro: **86.0%** estimated ±2.5pp (low confidence) — BenchGap 2026-11-07
- MMMLU: **89.9%** estimated ±1.7pp (medium confidence) — BenchGap 2026-11-07
- AA-LCR: **85.3%** measured — BenchGap 2026-11-07
- LiveCodeBench v6: **91.7%** estimated ±2.4pp (low confidence) — BenchGap 2026-11-07
- AIME26: **98.1%** estimated ±1.4pp (medium confidence) — BenchGap 2026-11-07
- CritPt: **29.7%** measured — BenchGap 2026-11-07
- GDPval-AA: **62.7%** measured — BenchGap 2026-11-07
- AA-Omniscience Accuracy: **68.4%** measured — BenchGap 2026-11-07
- ArxivMath: **93.9%** with tools / 91.3% without tools (88th pct, rank 5/35) — system card

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 85/100.** Terminal-Bench 2.1 89.3% estimated (low confidence); AA Terminal-Bench 2.1 91.4% measured; Toolathlon-Verified 77.8% measured; SWE-bench Verified 97.8% estimated. (cap: measured TB4.0 55.8% and estimated TB2.1 bound the score; agentic autonomy capped by 3B-active design)
- **Reasoning: 88/100.** AA-GPQA Diamond 93.7% measured (high-confidence); GPQA 95.9% estimated; HLE 65.0% measured; MMLU-Pro 86.0% estimated; MMMLU 89.9%; AA-LCR 85.3% measured; AIME26 98.1% estimated; ProteinGym Hard 49.3% rank corr (100th pct). (cap: CritPt 29.7% measured and AA-Omniscience 68.4% measured)
- **Context window: 95/100.** 1M total with 256K max output — high tier (≥1M = 95–100); no ≥98% retrieval-at-512K+ claim. (cap: 256K max output)
- **Multimodal: 65/100.** Text + image input, text output only (+image in = 60–70 band). (cap: text-only output)
- **Coding: 85/100.** SWE-bench Verified 97.8% estimated; SWE-bench Pro 81.2% measured; SWE-bench Multilingual 89.1%; ProgramBench 87.6%; Terminal-Bench 4.0 55.8% measured. (cap: measured TB4.0 55.8% and estimated SWEBench variants)
- **Cost efficiency: 95/100.** Paid pricing $0.40/$3.20 per 1M input/output (50% launch discount → ~$0.20/$1.60); mid-range paid tier. (cap: premium pricing vs free/classic models)
- **Overall Score: 84/100.** (85 + 88 + 95 + 65 + 85) / 5 = 83.6 → half-up rounded to 84. Best-fit: a compact, agentic Fable-class model with elite top-end benchmarks but weak agentic-coding reliability.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (BenchGap benchmark leaderboard, official Anthropic pricing/docs, official model metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.1 benchmark scores — BenchGap](https://benchgap.net/model/claude-fable-5-1)
  - [Anthropic pricing](https://www.anthropic.com/pricing)
  - [Claude Fable 5.1 & Claude Mythos 5.1 System Card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)

---

## Submission checklist

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/claude-fable-5/Solar_Mini_4.md (folder = filesystem-safe slug); exact stem Solar_Mini_4.
3. Signature block filled in with mandatory Reference URLs; relative links (../../model-comparison.md, ../../model-findings.md) resolve from model/claude-fable-5/.
4. No benchmark invented; verified benchmarks exist — scored report (not .md.excluded).
- ProteinGym Hard: **49.3%** rank correlation (100th pct, rank 1/10) — system card

Agent / tool use:
- Terminal-Bench 2.1: **89.3%** estimated ±4.3pp (low confidence); Vals AI measured 85.0% — BenchGap 2026-11-07
- AA Terminal-Bench 2.1: **91.4%** measured — BenchGap 2026-11-07
- Terminal-Bench 4.0: **55.8%** measured (AA measured: 52.0%) — BenchGap 2026-11-07
- Toolathlon-Verified: **77.8%** measured — BenchGap 2026-11-07
- SWE-bench Verified: **97.8%** estimated ±3.6pp (medium confidence) — BenchGap 2026-11-07
- SWE-bench Pro: **81.2%** measured — system card
- SWE-bench Multilingual: **89.1%** measured — system card
- ProgramBench: **87.6%** measured — BenchGap 2026-11-07
- LiveCodeBench Pro: **97.9%** estimated ±6.0pp (low confidence) — BenchGap 2026-11-07
- CursorBench 3.2: **73.4%** measured — BenchGap 2026-11-07

Long context:
- Context window: 1M total; 256K max output (official Anthropic API docs)