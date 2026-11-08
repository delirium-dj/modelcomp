# Claude Mythos 5.1 — findings by Solar_Mini_4

> TEMPLATE — do not commit as-is. Copy this file to `model/claude-mythos-5.1/Solar_Mini_4.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be independent.
> Overview + scoring methodology: `../../model-comparison.md`.

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's most powerful vetted-access model (verified through Anthropic's Cyber Verification Program); a trusted-access variant of Claude Fable 5.1 optimized for demanding reasoning and long-horizon agentic work with text and image input.
- **Provider / access:** Anthropic / Google Cloud (Claude Models on Google Cloud), Amazon Bedrock, Microsoft Foundry, Claude API — hosted API, not open weights, no Zen Free ID.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff 2026-06.
- **IDs:** `claude-mythos-5-1` (Claude API); no Free ID on OpenCode Zen.
- **Context window:** 1M total; 128K max output (official card, verified).
- **Modalities:** text + image input; text output; reasoning on; tool calls supported.
- **Pricing (as of 2026-11-08):** $10 per 1M input / $50 per 1M output; cached input $0.25/M; 5m cache write $12.50/M; 1h cache write $20/M; batch 50% discount. Paid — no $0 tier.
- **Architecture:** proprietary, undisclosed param count; "trusted access" deployment of the Claude Fable 5.1 weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 4.0: **60.9%** measured, 90th percentile (rank 5/41) — BenchGap 2026-11-07
- Terminal-Bench 2.1: **89.0%** estimated ±5.4pp (low confidence, AA Vals AI 2026-11-07)
- ExploitBench v8-bench: capability **83.0%** (93rd percentile, rank 2/16) — system card 2026-09-22
- BBQ: **89.9%** disambiguated accuracy (83rd percentile, rank 2/7) — system card

Reasoning / knowledge:
- HLE: **65.0%** with tools / **60.9%** no tools (system card)
- AA-Omniscience Net Score: **0.57** net (75th percentile, rank 3/9) — system card
- ArxivMath: **93.9%** with tools / 91.3% without tools (88th percentile, rank 5/35) — system card
- ProteinGym Hard: **49.3%** rank correlation (100th percentile, rank 1/10) — system card

Coding:
- SWE-bench Pro: **81.2%** — system card
- SWE-bench Multilingual: **89.1%** — system card
- Terminal-Bench 4.0: **60.9%** measured, 90th percentile (BenchGap 2026-11-07)

Long context:
- Context window: 1M total (official card)
### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in model-comparison.md.
> Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 80/100.** Terminal-Bench 2.1 89.0% (estimated ±5.4pp) plus measured Terminal-Bench 4.0 60.9% (90th pct, rank 5/41) and ExploitBench capability 83.0% (93rd pct) support upper-mid agentic tool use; the measured TB4.0 and the estimated TB2.1 bound the score. (cap: no verified GDPval-AA, OSWorld, Claw-Eval)
- **Reasoning: 88/100.** HLE 65.0% with tools / 60.9% no tools, AA-Omniscience net 0.57 (75th pct), ArxivMath 93.9% with tools (88th pct), and ProteinGym Hard 49.3% rank correlation (100th pct, rank 1/10) point to elite reasoning; AA-Omniscience 0.57 net (75th pct) is the binding limit. (cap: AA-Omniscience 0.57 net)
- **Context window: 95/100.** 1M total with 128K max output — high tier (≥1M = 95–100), but 128K max output and no ≥98% retrieval-at-512K+ claim cap the score. (cap: 128K max output)
- **Multimodal: 65/100.** Text + image input, text output only (+image in = 60–70 band); no video/PDF/audio in, no non-text output. (cap: text-only output)
- **Coding: 85/100.** SWE-bench Pro 81.2% (at/above frontier ref 74%+), Terminal-Bench 4.0 60.9% (90th pct, rank 5/41), SWE-bench Multilingual 89.1%, and ArxivMath 93.9% with tools (88th pct) confirm strong coding; measured TB4.0 caps the upper bound. (cap: measured TB4.0)
- **Cost efficiency: 30/100.** Paid pricing $10/$50 per 1M tokens (Anthropic) — the $10/$50 tier maps to ~30.
- **Overall Score: 83/100.** (80 + 88 + 95 + 65 + 85) / 5 = 82.6 → half-up rounded to 83. Best-fit: a strong, expensive, verification-gated frontier-class model with elite reasoning and math, solid coding, and text+image input — no public $0 tier.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official model cards, benchmark aggregators BenchGap/BenchmarkList, llm-stats, official system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5.1 — official model card](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Claude Fable 5.1 & Claude Mythos 5.1 System Card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
  - [Claude Mythos 5.1 benchmark scores — BenchGap](https://benchgap.net/model/claude-mythos-5-1)
  - [Claude Mythos 5.1 Benchmark Scores & Evals — BenchmarkList](https://benchmarklist.com/models/anthropic-claude-mythos-5.1/)
  - [Claude Mythos 5.1 benchmarks, pricing & context — llm-stats](https://llm-stats.com/models/claude-mythos-5-1)

---

## Submission checklist

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/claude-mythos-5.1/Solar_Mini_4.md (folder = filesystem-safe slug); exact stem Solar_Mini_4.
3. Signature block filled in with mandatory Reference URLs; relative links (../../model-comparison.md, ../../model-findings.md) resolve from model/claude-mythos-5.1/.
4. No benchmark invented; verified benchmarks exist — scored report (not .md.excluded).