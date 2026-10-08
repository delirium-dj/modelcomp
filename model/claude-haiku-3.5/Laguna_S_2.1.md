# Claude Haiku 3.5 — findings by Laguna S 2.1

- Source: Anthropic / Claude Haiku 3.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's October 2024 small/fast model — a drop-in upgrade to Claude 3 Haiku that beat Claude 3 Opus on several knowledge benchmarks at release. Retired February 2026, replaced by Claude Haiku 4.5.
- **Provider / access:** Retired; no first-party access remains. `opencode/claude-haiku-3.5`
- **Release / knowledge:** Released October 2024; retired February 19, 2026
- **IDs:** `opencode/claude-haiku-3.5` (no Free ID on Zen per meta.json)
- **Context window:** 200,000 total (8,192 max output) — per meta.json
- **Modalities:** Text in/out; image + PDF input (added Feb 2025)
- **Pricing (as of 2026-10-08):** Retired; final rate $0.80/$4.00 per 1M
- **Architecture:** Proprietary; small model in the Claude 3.5 family

### Raw benchmarks found

> BenchLM Overall 41.55/100, #127/887 models. 11 of 623 benchmarks covered.

Agent / tool use:

- JobBench: **16.0%** (source: JobBench paper)
- Terminal-Bench 2.1 (Vals): **43.8%** (source: Vals AI)

Coding:

- SWE-bench Verified: **73.3%** (source: Anthropic)
- VulcanBench v3: **76.2%** (source: VulcanBench)
- LiveCodeBench (Vals): **41.2%** (source: Vals AI)
- SWE-bench (Vals): **66.6%** (source: Vals AI)

Knowledge:

- GPQA Diamond (Vals): **72.2%** (source: Vals AI)
- MMLU-Pro (Vals): **78.7%** (source: Vals AI)

Mathematics:

- FrontierMath v2 (Tiers 1-3): **5.903%** (source: Epoch AI)
- FrontierMath v2 (Tier 4): **2.083%** (source: Epoch AI)

### Normalized scores (1–100)

- **Tool use: 45/100.** JobBench 16.0% is low; Terminal-Bench 2.1 43.8% is moderate. Retired model with limited benchmark coverage.
- **Reasoning: 47/100.** GPQA 72.2% and MMLU-Pro 78.7% are solid; no AA Intelligence Index score. Inferred from coding and knowledge benchmarks.
- **Context window: 60/100.** 200K tokens places it in 200K tier.
- **Multimodal: 25/100.** Supports image + PDF input but is primarily text-focused; 25 per methodology for partial multimodal.
- **Coding: 62/100.** SWE-bench 73.3% and VulcanBench 76.2% are strong; LiveCodeBench 41.2% is weaker; SWE-bench (Vals) 66.6%.
- **Cost efficiency: 45/100.** $0.80/$4.00 is moderate; retired model, pricing no longer available.
- **Overall Score: 47.8/100.** Mean of five quality dims (45+47+60+25+62)/5 = 48.0, rounds to 49. Best-fit use case: legacy small-model tasks; retired and no longer recommended.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via BenchLM and Vals AI sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
