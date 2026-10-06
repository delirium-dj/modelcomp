# Laguna S 2.1 — findings by Claude Opus 4.8

- Source: Poolside (`poolside/laguna-s-2.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's open-weight 118B/8B-active MoE for agentic coding and long-horizon work; reasoning-enabled, 1M context, text-only, OpenMDW-1.1 permissive. Top use case: self-hosted agentic software engineering.
- **Provider / access:** Poolside API + open weights (`poolside/laguna-s-2.1`, OpenMDW-1.1); OpenCode Zen. No Zen Free ID.
- **Release / knowledge:** Laguna 2.1 (2026); knowledge cutoff per Poolside.
- **IDs:** `poolside/laguna-s-2.1` (open weights; no free tier).
- **Context window:** 1M (Ollama local builds 256K).
- **Modalities:** text in/out only (no vision/audio).
- **Pricing (as of 2026-10-03):** ~$0.10/$0.20 per 1M API; free self-host (open weights).
- **Architecture:** 118B total / 8B active open-weight MoE.

### Raw benchmarks found

> Poolside publishes a coding/agentic-focused set (BenchLM shows 6 rows, no aggregate). No public reasoning/knowledge or multimodal rows.

Agent / tool use:

- Terminal-Bench 2.1 **70.2%**; Toolathlon-Verified **49.7%**

Coding:

- SWE Multilingual **78.5%**; SWE-bench Pro **59.4%**; Terminal-Bench 2.1 **70.2%**; DeepSWE **40.4%**

Reasoning / multimodal:

- No public reasoning-index or multimodal rows (coding-specialist, text-only)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 70.2% and Toolathlon-Verified 49.7% — strong agentic coding harness use.
- **Reasoning: 58/100.** No published reasoning benchmark; inferred from the strong agentic-coding tier (BenchLM "Reasoning" type) — **estimate, flagged**.
- **Context window: 92/100.** 1M context (256K on local Ollama builds).
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 75/100.** SWE Multilingual 78.5%, SWE-bench Pro 59.4%, Terminal-Bench 70.2% — a genuine coding specialist; DeepSWE 40.4% caps it.
- **Cost efficiency: 92/100.** ~$0.10/$0.20 per 1M plus free self-host (open weights).
- **Overall Score: 61.6/100.** Half-up mean of the five quality dims (68/58/92/15/75). A strong open agentic-coding model — coding/context/tool-use lead; text-only caps Overall and reasoning is inferred.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Poolside "Introducing Laguna S 2.1" blog, BenchLM). Coding rows are vendor-published; reasoning is an inferred estimate (no public row). Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
