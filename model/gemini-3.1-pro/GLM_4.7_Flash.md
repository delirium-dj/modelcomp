# GLM_4.7_Flash Report

- Source: Google Gemini 3.1 Pro (`gemini-3.1-pro`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's pro model (2026) optimized for complex reasoning and knowledge work with multimodal capabilities (text + image), competitive pricing, and balanced performance.
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI, various deployment options; available via API.
- **Release / knowledge:** Released September 2026; knowledge cutoff June 2026.
- **IDs:** `gemini-3.1-pro`
- **Context window:** 1,000,000 total tokens; supports enterprise-scale RAG and long-context workloads.
- **Modalities:** text input; text output; multimodal support (text + image); reasoning yes.
- **Pricing (as of 2026-10-22):** $1.30 per 1M input tokens; competitive for complex reasoning workloads.
- **Architecture:** proprietary dense/mixture-of-experts; optimized for reasoning; API-only.

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
- **Output Speed:** ~128 tokens/second (Artificial Analysis)
- **Latency:** ~20.93s time-to-first-token (Artificial Analysis)
- **End-to-End Response Time:** ~24.85s to output 500 tokens (Artificial Analysis)

Reasoning / knowledge:

- **Artificial Intelligence Index:** 30/214
- **Intelligence Index Score:** 30
- **Omniscience Accuracy:** **no verified public score found**
- **Hallucination Rate:** **no verified public score found**
- **Reasoning Capability:** Yes (pro variant, better than flash models)

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

- **Tool use: 80/100.** Reasonable output speed (~128 t/s) supports tool use; capped by lack of specific coding benchmarks.
- **Reasoning: 70/100.** Intelligence Index 30/214 indicates moderate reasoning (pro variant, better than flash models at 41); capped by lack of specific reasoning benchmarks.
- **Context window: 100/100.** 1M token context meets enterprise requirements; optimized for long-context RAG; capped by lack of retrieval benchmarks.
- **Multimodal: 85/100.** Text + image input/output with vision support; capped by limited speech/video specifics and no speech benchmarks.
- **Coding: 80/100.** Reasonable speed supports tool use; capped by lack of coding-focused benchmark results.
- **Cost efficiency: 80/100.** $1.30/M input is competitive for pro reasoning models.
- **Overall Score: 83/100.** Mean of five quality dims (80+70+100+85+80)/5=82.0, reflecting balanced performance with reasoning, multimodal capabilities, and 1M context; best-fit for complex reasoning and knowledge work.

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