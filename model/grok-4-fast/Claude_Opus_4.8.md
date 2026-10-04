# Grok 4 Fast — findings by Claude Opus 4.8

- Source: xAI (`opencode/grok-4-fast`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's Grok 4 Fast — a fast/cheap reasoning model with a large (2M) context; very weak coding. Top use case: cheap high-throughput reasoning (legacy).
- **Provider / access:** xAI API (`grok-4-fast-*`); OpenCode Zen `opencode/grok-4-fast`.
- **Release / knowledge:** Grok 4 generation (2025); knowledge cutoff per xAI docs.
- **IDs:** `opencode/grok-4-fast`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 2M — **severely understated; verify.**
- **Modalities:** text, image in; text out (per the 4 Fast line; stub says text-only).
- **Pricing (as of 2026-10-03):** cheap fast tier. Scored provisionally.
- **Architecture:** proprietary (fast tier).

### Raw benchmarks found

Agent / tool use:

- τ²-bench **65.8%**; broader agentic coverage limited

Reasoning / knowledge:

- AA-GPQA Diamond **84.7%**; AA-LCR **73.7%**; AA Intelligence Index **17.9**; AA-HLE **19.1%**; CritPt 2.9%; AA-Omniscience Index -29.9%

Coding:

- Vibe Code Bench **0.00%** (fails end-to-end agentic coding)

Multimodal:

- AA-MMMU-Pro **61.8%**

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 65.8%; narrow coverage.
- **Reasoning: 62/100.** GPQA-D 84.7%, AA-LCR 73.7%; AA Index 17.9, HLE 19.1% and CritPt 2.9% cap it.
- **Context window: 94/100.** 2M (BenchLM) — top-tier window (stub's 128K severely understated).
- **Multimodal: 61/100.** Image-in (MMMU-Pro 61.8%), text-only out.
- **Coding: 30/100.** Vibe Code Bench 0.0% — effectively no agentic coding.
- **Cost efficiency: 85/100.** Cheap fast tier. Scored provisionally.
- **Overall Score: 61.4/100.** Half-up mean of the five quality dims (60/62/94/61/30). A cheap large-window fast model with essentially no coding; `meta.json` needs correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
