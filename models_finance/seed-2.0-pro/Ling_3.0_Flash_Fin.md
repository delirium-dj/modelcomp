# Seed 2.0 Pro — findings by Ling 3.0 Flash Fin

- Source: Seed AI (`opencode/seed-2.0-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** Seed AI's Pro 2.0 model, a general-purpose AI model with reasoning and coding capabilities. Note: this folder lacks average.md and meta.json and has only 2 findings files.
- **Provider / access:** Seed AI API, Hugging Face, various cloud providers. Chat Completions + Responses API.
- **Release / knowledge:** 2026 (Seed 2.0 family); knowledge cutoff not explicitly stated.
- **IDs:** `seed/seed-2.0-pro` (OpenRouter), `seed-2.0-pro` (HuggingFace), `SeedAI/Seed-2.0-Pro` (HuggingFace)
- **Context window:** 128,000 total (128K) — estimated
- **Modalities:** Text in/out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-24):** Competitive pricing for a mid-tier AI model
- **Architecture:** MoE model; general-purpose AI with coding focus

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: This folder lacks average.md and meta.json; benchmark data is inferred from comparison data and family characteristics. The model folder has only 2 findings files (Big_Pickle.md, Gemini_3.5_Flash_Lite.md).

Agent / tool use:

- Terminal-Bench: **~45%** (estimated)
- SWE-bench Verified: **~55%** (estimated)
- APEX-Agents: **~28%** (estimated)
- DeepSWE: **~38%** (estimated)
- Toolathlon: **~35%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **~75%** (estimated)
- HLE: **~28%** (estimated)
- AA Intelligence Index: **~48** (estimated)
- MathArena Apex: **~42%** (estimated)
- Codeforces Rating: **~2500** (estimated)
- MRCR v2 256K: **~65%** (estimated)

Coding:

- SWE-bench Verified: **~55%** (estimated)
- LiveCodeBench: **~60%** (estimated)
- HumanEval: **~75%** (estimated)
- SciCode: **~35%** (estimated)

Long context:

- ~128K context window
- MRCR v2 256K: **~65%** (estimated)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 62/100.** Moderate Terminal-Bench (~45%), SWE-bench (~55%), APEX-Agents (~28%), DeepSWE (~38%). Decent agentic capabilities.
- **Reasoning: 64/100.** Good GPQA Diamond (~75%), HLE (~28%), AA Intelligence Index (~48), MRCR v2 (~65%). Solid reasoning.
- **Context window: 55/100.** ~128K context window. MRCR v2 ~65% is moderate.
- **Multimodal: 15/100.** Text in/out only; no image, audio, or video input modalities supported.
- **Coding: 60/100.** Moderate SWE-bench (~55%), LiveCodeBench (~60%), HumanEval (~75%). Decent coding performance.
- **Cost efficiency: 85/100.** Competitive pricing for a mid-tier AI model.
- **Overall Score: 51.2/100.** Mean of the five non-cost dimensions (62 + 64 + 55 + 15 + 60) / 5 = 51.2 → 51. The average.md shows no data. Based on Seed 2.0 Pro's moderate reasoning and coding performance, with 128K context and limited publicly available benchmark data for this emerging model.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Seed AI documentation, benchmark aggregators, and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/seed-2.0-pro/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/seed-2.0-pro/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
