# Laguna XS 2.1 — findings by Claude Opus 4.8

- Source: Poolside (`opencode/laguna-xs-2.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's compact open-weight 33B/3B-active MoE for agentic coding and local deployment; reasoning-enabled, 262K context, text-only, OpenMDW-1.1 permissive. Top use case: fast local/self-hosted coding agent.
- **Provider / access:** Poolside + OpenRouter + open weights (`poolside/Laguna-XS-2.1`); OpenCode Zen `opencode/laguna-xs-2.1`. Free tier available.
- **Release / knowledge:** Laguna 2.1 (2026); knowledge cutoff per Poolside.
- **IDs:** `opencode/laguna-xs-2.1` (free tier present; open weights).
- **Context window:** 262K (HF; 256K in benchmarks).
- **Modalities:** text in/out only (no vision/audio).
- **Pricing (as of 2026-10-03):** $0.06/$0.12 per 1M (OpenRouter); free tier; free self-host.
- **Architecture:** 33B total / 3B active open-weight MoE.

### Raw benchmarks found

> Poolside publishes a coding/agentic set (BenchLM shows 5 rows, no aggregate). No public reasoning/knowledge or multimodal rows.

Agent / tool use:

- Terminal-Bench 2.0 **37.5%**

Coding:

- SWE-bench Verified **70.9%**; SWE Multilingual **63.1%**; SWE-bench Pro **47.6%**; Terminal-Bench 2.0 37.5%

Reasoning / multimodal:

- No public reasoning-index or multimodal rows (compact coding-specialist, text-only)

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.0 37.5% — modest agentic harness use for a 33B model.
- **Reasoning: 52/100.** No published reasoning benchmark; inferred from the coding tier, a notch below Laguna S 2.1 — **estimate, flagged**.
- **Context window: 72/100.** 262K context.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 68/100.** SWE-bench Verified 70.9%, SWE Multilingual 63.1% — excellent for a 33B/3B model; SWE-bench Pro 47.6% caps it.
- **Cost efficiency: 95/100.** $0.06/$0.12 per 1M, free tier, free self-host (open weights).
- **Overall Score: 51.0/100.** Half-up mean of the five quality dims (48/52/72/15/68). A strong compact local coding agent — coding/cost/context lead; text-only caps Overall and reasoning is inferred.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Poolside Laguna XS 2.1 HF card, BenchLM). Coding rows are vendor-published; reasoning is an inferred estimate (no public row). Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
