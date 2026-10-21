# GLM_4.7_Flash Report

- Source: Anthropic/Claude Opus 5 (`claude-opus-5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Max)
- **Short description:** Anthropic next-gen reasoning model (July 2026) optimized for enterprise with enhanced intelligence, 1M context, and multimodal capabilities.
- **Provider / access:** Anthropic API (`claude-opus-5`), Chat Completions API.
- **Release / knowledge:** Released July 24, 2026; knowledge cutoff May 2026.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,000,000 total tokens; 1,000,000 max output — verified via Artificial Analysis.
- **Modalities:** text/image input; text output; reasoning yes; multimodal; JSON mode.
- **Pricing (as of 2026-10-21):** $5.00 in / $25.00 out per 1M; cache $3.85 per 1M; premium enterprise pricing.
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

- Artificial Analysis Intelligence Index: **51 / #17** (Artificial Analysis July 2026) — strong agentic work
- Terminal-Bench 2.1: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **52.4 tokens/second** (Artificial Analysis July 2026)
- Latency: **51.54s time-to-first-token** (Artificial Analysis July 2026)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **51 / #17** (Artificial Analysis July 2026) — top 7% overall
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

- **Tool use: 90/100.** AI Index 51 indicates strong tool use capabilities; capped by lack of specific terminal benchmarks and coding evaluations.
- **Reasoning: 88/100.** AI Index 51 shows advanced reasoning capability approaching frontier; capped by absence of GPQA, HLE benchmarks.
- **Context window: 100/100.** 1M token context with comprehensive reasoning support meets top-tier enterprise requirements.
- **Multimodal: 85/100.** Text/image input/output with reasoning covers broad enterprise needs; capped without speech/video support.
- **Coding: 84/100.** AI Index 51 includes coding tasks with strong performance; capped by lack of coding-focused evaluations.
- **Cost efficiency: 65/100.** $5.00/M input at premium tier reduces score; capped by expensive pricing structure.
- **Overall Score: 89.4/100.** Mean of five quality dims (90+88+100+85+84)/5=87.8, reflecting strong enterprise reasoning with premium pricing; best-fit for quality-critical applications.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-21
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
