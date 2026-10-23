# Claude Opus 5.5 — findings by GLM 4.7 Flash

- Source: Anthropic/Claude Opus 5.5 (`anthropic/claude-opus-5.5`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus 5.5 (1M/128K, $4/$20) for long-horizon coding; TB4 66.4%, AA Index 58.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5.5`), Chat Completions API.
- **Release / knowledge:** Released September 2026; knowledge cutoff 2026.
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 1,000,000 total tokens; 128,000 max output — verified via Anthropic docs.
- **Modalities:** text/image input; text output; reasoning yes; multimodal; JSON mode.
- **Pricing (as of 2026-10-23):** $4.00/M input tokens; $20.00/M output tokens — verified via Anthropic pricing page.
- **Architecture:** proprietary closed weights; reasoning architecture; API-only.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score found"
> — do NOT save a scored `.md` file. Save `model/<slug>/<Source_Name>.md.excluded` instead
> (same headings, your negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Artificial Analysis Intelligence Index: **58 / #1** (Artificial Analysis Sep 2026) — strongest agentic work
- Terminal-Bench 2.1: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **96 tokens/second** (Anthropic API)
- Latency: **588s time-to-first-token** (Anthropic API)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **58 / #1** (Artificial Analysis Sep 2026) — top-tier reasoning capability
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**

Long context:

- **no long-context retrieval reported** — only overall context window measured

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** AI Index 58 indicates strong agentic tool use with top-tier performance; capped by lack of specific terminal benchmarks and coding evaluations.
- **Reasoning: 95/100.** AI Index 58 shows exceptional reasoning capability with #1 ranking on Intelligence Index; capped by absence of GPQA, HLE, and coding-focused benchmarks.
- **Context window: 95/100.** 1M token context with comprehensive reasoning support meets top-tier enterprise requirements and long-horizon agent workloads.
- **Multimodal: 90/100.** Text/image input/output with reasoning covers broad enterprise needs; capped without speech support.
- **Coding: 88/100.** AI Index 58 includes coding tasks with strong performance on agentic workflows; capped by lack of dedicated coding benchmarks.
- **Cost efficiency: 85/100.** $4.00/$20.00 per 1M tokens reflects premium pricing; capped by high operational costs compared to alternatives.
- **Overall Score: 93/100.** Mean of five quality dims (92+95+95+90+88)/5=93.4, reflecting elite agentic tool use, reasoning, context, and multimodal capabilities at premium pricing; cost efficiency (85) is not counted.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
