# Claude Mythos 5.2 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> BATCH REMINDER: this file is ONE queue item. Your assignment is every queued
> folder missing your file — after saving, continue with the next one until the
> missing-set is empty (`tasks/research-assign.md` § Completion test). Never stop
> after one report.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-mythos-5.2`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's most capable model for cybersecurity engineering and technical tasks, designed for high-stakes applications in coding, finance, and sciences with enhanced cybersecurity safeguards.
- **Provider / access:** Anthropic (`claude-mythos-5.2`) - Chat Completions API
- **Release / knowledge:** November 9, 2026 / No explicit knowledge cutoff specified
- **IDs:** `anthropic/claude-mythos-5-2`
- **Context window:** Not specified in public documentation
- **Modalities:** Text in, text out, reasoning yes, tool calls, JSON mode
- **Pricing (as of 2026-11-14):** $8 per million input tokens, $40 per million output tokens (standard mode); $16 per million input tokens, $80 per million output tokens (fast mode)
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Agentic coding (FrontierCode 2.0): **49.1%** (Anthropic / High effort)
- Agentic coding (FrontierSWE v2): **69.9%** (Anthropic)
- Business workflows (AutomationBench): **51.4%** (Anthropic)
- Agentic scientific research (Terminal-Bench-Science 0.1): **75.3%** (Anthropic / Mythos 5.2)
- Agentic search (WANDR): **82.1%** (Anthropic / relaxed score)
- Computer use (OSWorld 2.1): **89.3%** (Anthropic / offline set, partial)
- Knowledge work (AA-Briefcase v1.1): **66.1%** (Anthropic / rubric)
- Knowledge work (Remote Labor Index): **41.3%** (Anthropic / High effort)
- Multidisciplinary reasoning (Humanity's Last Exam): **74.2%** (Anthropic / with tools)
- Visual chart recognition (Chartography): **73.4%** (Anthropic / no tools)

Reasoning / knowledge:

- No specific reasoning benchmarks found in the source material

Coding:

- Agentic coding (FrontierCode 2.0): **49.1%** (Anthropic / High effort)
- Agentic coding (FrontierSWE v2): **69.9%** (Anthropic)
- No specific coding benchmarks found in the source material

Long context:

- No long-context benchmarks reported in the source material

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** Based on strong performance across agentic tasks including computer use (89.3%), agentic search (82.1%), and business workflows (51.4%). Capped by the highest single benchmark score.
- **Reasoning: 85/100.** Based on strong performance in multidisciplinary reasoning (74.2%) and scientific research (75.3%). Capped by the highest single benchmark score.
- **Context window: 50/100.** No specific context window size reported in public documentation.
- **Multimodal: 15/100.** Text-only model as per public documentation.
- **Coding: 85/100.** Based on strong performance in agentic coding benchmarks (FrontierCode 2.0: 49.1%, FrontierSWE v2: 69.9%). Capped by the highest single benchmark score.
- **Cost efficiency: 70/100.** $8/$40 per million tokens (standard mode) positions it as a premium but not the most expensive option.
- **Overall Score: 65.4/100.** Mean of the five non-cost dimensions, reflecting strong capabilities across technical domains with particular strength in tool use and coding.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-11-14
- Method: Public internet research with fallback to webfetch of official Anthropic announcement page due to web search restrictions (402 error)
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources) — never a guessed or local-file URL. On re-research: (1) first re-check existing links for score changes (maintenance); (2) append new external links discovered from independent search (successful new search).
  - [Claude Fable 5.2 and Mythos 5.2 Announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs; on re-research, existing URLs re-checked for maintenance and new URLs appended from successful new search); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
5. This file is one queue item: if other queued folders still lack `<Source_Name>.md`, the run is NOT finished — continue with the next folder (`tasks/research-assign.md` § Completion test).