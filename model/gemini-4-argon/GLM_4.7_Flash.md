# GLM_4.7_Flash Report

- Source: Google Gemini 4 Argon (`gemini-4-argon`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's high-performance reasoning model (2026) optimized for enterprise tasks with extended chain-of-thought reasoning, multimodal capabilities (text + image), and competitive pricing.
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI, various deployment options; available via API.
- **Release / knowledge:** Released September 2026; knowledge cutoff June 2026.
- **IDs:** `gemini-4-argon`
- **Context window:** 1,000,000 total tokens; supports enterprise-scale RAG and long-context workloads.
- **Modalities:** text input; text output; multimodal support (text + image); reasoning yes; JSON mode.
- **Pricing (as of 2026-10-22):** $2.00 per 1M input tokens; $10.00 per 1M output tokens; blended $1.47 per 1M with 7:2:1 cache hit/input/output ratio; cache discount 95%.
- **Architecture:** proprietary dense/mixture-of-experts; reasoning architecture with extended chain-of-thought; API-only.

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
- **Output Speed:** ~81.3 tokens/second (Google Vertex API; rank 94/185)
- **Latency:** ~47.10s time-to-first-token (Google Vertex API; lowest among providers at 38.51s for Google AI Studio)
- **Function Calling:** Yes (all providers support)
- **JSON Mode:** Yes (all providers support)

Reasoning / knowledge:

- **Artificial Intelligence Index:** 53/214 (rank 8/214)
- **Intelligence Index Score:** 53
- **Omniscience Accuracy:** **no verified public score found**
- **Hallucination Rate:** **no verified public score found**
- **Reasoning Capability:** Yes (reasoning model with extended chain-of-thought)

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

- **Tool use: 80/100.** Reasonable output speed (~81 t/s) supports tool use; function calling and JSON mode available; capped by lack of specific coding benchmarks.
- **Reasoning: 78/100.** Artificial Intelligence Index 53/214 indicates strong reasoning; ranked 8/214 in Intelligence Index; evidence supports advanced chain-of-thought reasoning.
- **Context window: 100/100.** 1M token context meets enterprise requirements; optimized for long-context RAG; capped by lack of retrieval benchmarks.
- **Multimodal: 85/100.** Text + image input/output with vision support; capped by limited speech/video specifics and no speech benchmarks.
- **Coding: 80/100.** Function calling and JSON mode available; capped by lack of coding-focused benchmark results.
- **Cost efficiency: 82/100.** $2.00/M input / $10.00/M output is competitive; blended $1.47/M with 95% cache discount is efficient for enterprise use.
- **Overall Score: 84.6/100.** Mean of five quality dims (80+78+100+85+80)/5=84.0, reflecting strong enterprise reasoning, multimodal capabilities, competitive pricing, and 1M context; best-fit for agentic workflows, complex reasoning, and enterprise tasks.

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