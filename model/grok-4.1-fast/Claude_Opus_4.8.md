# Grok 4.1 Fast — findings by Claude Opus 4.8

- Source: xAI (`opencode/grok-4.1-fast`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's Grok 4.1 Fast — a fast/cheap reasoning model with a large (2M) context; weak coding/agentics. Top use case: cheap high-throughput reasoning (legacy).
- **Provider / access:** xAI API (`grok-4-1-fast-*`); OpenCode Zen `opencode/grok-4.1-fast`.
- **Release / knowledge:** Grok 4.1 generation (2025); knowledge cutoff per xAI docs.
- **IDs:** `opencode/grok-4.1-fast` (scaffolded stub).
- **Context window:** stub lists 128K; BenchLM reports 2M — **severely understated; verify.**
- **Modalities:** text, image in; text out (per the 4.1 line; stub says text-only).
- **Pricing (as of 2026-10-03):** cheap fast tier. Scored provisionally.
- **Architecture:** proprietary (fast tier).

### Raw benchmarks found

Agent / tool use:

- τ²-bench **93.3%**; broader agentic coverage limited

Reasoning / knowledge:

- AA-GPQA Diamond **85.3%**; AA-LCR **74.0%**; AA Intelligence Index **20.4**; AA-HLE **19.3%**; CritPt 2.9%; AA-Omniscience Index -29.9%

Coding:

- Vibe Code Bench **1.20%** (very weak end-to-end agentic coding)

Multimodal:

- AA-MMMU-Pro **63.3%**

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-bench 93.3% is high but thinly corroborated; no broader agentic evidence.
- **Reasoning: 66/100.** GPQA-D 85.3%, AA-LCR 74%; AA Index 20.4, HLE 19.3% and CritPt 2.9% cap it.
- **Context window: 94/100.** 2M (BenchLM) — top-tier window (stub's 128K severely understated).
- **Multimodal: 62/100.** Image-in (MMMU-Pro 63.3%), text-only out.
- **Coding: 40/100.** Vibe Code Bench 1.2% — very weak agentic coding.
- **Cost efficiency: 85/100.** Cheap fast tier. Scored provisionally.
- **Overall Score: 65.4/100.** Half-up mean of the five quality dims (65/66/94/62/40). A cheap fast-tier reasoning model with a huge window but very weak coding; `meta.json` needs correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
