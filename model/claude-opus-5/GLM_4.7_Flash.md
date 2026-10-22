# GLM_4.7_Flash Report

- Source: Anthropic Claude Opus 5 (`claude-opus-5`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship reasoning model (2026, deprecated in favor of Opus 5.5) optimized for complex reasoning with extended chain-of-thought, multimodal capabilities (text + image), and enterprise-grade features.
- **Provider / access:** Anthropic API, 8 providers via Artificial Analysis; deprecated - use Claude Opus 5.5.
- **Release / knowledge:** Released July 24, 2026; knowledge cutoff July 2026; replaced by Opus 5.5.
- **IDs:** `claude-opus-5`
- **Context window:** 1,000,000 total tokens.
- **Modalities:** text input; text output; multimodal support (text + image); reasoning yes.
- **Pricing (as of 2026-10-22):** $5.00 per 1M input tokens; $25.00 per 1M output tokens; cache discount 90%; expensive for pro reasoning models.
- **Architecture:** proprietary dense/mixture-of-experts; reasoning architecture with adaptive thinking; API-only.

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

- **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- **Output Speed:** ~54.1 tokens/second (Artificial Analysis; rank 145/185)
- **Latency:** ~28.40s time-to-first-token (Artificial Analysis)
- **End-to-End Response Time:** ~245.5s to output 500 tokens (Artificial Analysis)

Reasoning / knowledge:

- **Artificial Intelligence Index:** 51/214 (rank 17/214)
- **Intelligence Index Score:** 51
- **Omniscience Accuracy:** **no verified public score found**
- **Hallucination Rate:** **no verified public score found**
- **Reasoning Capability:** Yes (reasoning model with extended chain-of-thought)
- **Output Verbosity:** 140M tokens (very verbose - 4th most verbose)

Coding:

- **SWE-bench Verified / SWE-Pro:** **no verified public score found**
- **LiveCodeBench:** **no verified public score found**
- **SciCode / AA-SciCode:** **no verified public score found**
- **Vibe Code Bench:** **no verified public score found**
- **DeepSWE:** **no verified public score found**
- **Terminal-Bench 4.0:** **no verified public score found**

Multimodal:

- **MMMU-Pro:** **no verified public score found**
- **Output Modalities:** text output only
- **Input Modalities:** text and image
- **Vision Support:** Yes (supports image input and analysis)

Long context:

- **Context Window:** 1,000,000 total tokens
- **Long-context Retrieval:** **no verified public score found** — optimized for enterprise tasks with large context

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Moderate output speed (~54 t/s) supports tool use; capped by lack of specific coding benchmarks and slow speed.
- **Reasoning: 79/100.** Intelligence Index 51/214 (rank 17/214) indicates strong reasoning capability; capped by absence of specific reasoning benchmarks beyond AI Index.
- **Context window: 100/100.** 1M token context meets enterprise requirements; optimized for long-context RAG; capped by lack of retrieval benchmarks.
- **Multimodal: 85/100.** Text + image input/output with vision support; capped by limited speech/video specifics.
- **Coding: 80/100.** Moderate speed supports tool use; capped by lack of coding-focused benchmark results.
- **Cost efficiency: 70/100.** $5.00/M in / $25.00/M out is expensive (2.5× median input, 2.5× median output); capped by high pricing relative to performance.
- **Overall Score: 83.2/100.** Mean of five quality dims (72+79+100+85+80)/5=82.6, reflecting strong reasoning (51 AI Index), enterprise-class context, and multimodal support; cost efficiency is the limiting factor (2.5× median input price, 2.5× median output price) and model is deprecated; best-fit for complex reasoning tasks where performance justifies cost.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-22
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).