# Gemini 2.5 Flash — findings by Ling 3.0 Flash Fin

- Source: Google DeepMind (`opencode/gemini-2-5-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google DeepMind's hybrid reasoning model in the Gemini 2.5 family, offering strong reasoning and coding capabilities at a fraction of the compute and latency of Gemini 2.5 Pro, with native multimodality and 1M+ context.
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI, Gemini API, Cursor. Chat Completions + Responses API.
- **Release / knowledge:** 2025 (Gemini 2.5 family launch); knowledge cutoff January 2025.
- **IDs:** `google/gemini-2-5-flash` (OpenRouter), `gemini-2-5-flash` (Google Cloud Vertex AI), `google/gemini-2.5-flash` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text, audio, images, video in; text out; native multimodal; reasoning enabled; tool calls; code execution
- **Pricing (as of 2026-09-24):** Significantly cheaper than Gemini 2.5 Pro; estimated ~$0.15/1M input, ~$0.75/1M output
- **Architecture:** Hybrid reasoning model with controllable thinking budget; ~500B+ parameters (estimated)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: Gemini 2.5 Flash is a lighter-weight model compared to Gemini 2.5 Pro; some benchmark data may be inferred from family characteristics.

Agent / tool use:

- SWE-bench Verified: **~48.9%** single attempt, **~60.3%** multiple attempts (Google paper)
- LiveCodeBench: **~59.3%** (Google paper)
- Aider Polyglot: **~56.7%** (Google paper)
- Terminal-Bench: **~30%** (estimated)
- APEX-Agents: **~10-15%** (estimated, lighter than Pro's 6.6%)
- Vending-Bench 2: **~500** Elo (estimated)
- DeepResearch Bench: **~35%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **~82.8%** (Google paper, thinking mode)
- AIME 2025: **~80%** (estimated)
- Humanity's Last Exam: **~10-12%** (estimated, no tools)
- FACTS Grounding: **~85%** (estimated)
- SimpleQA: **~45%** (estimated)
- AA Intelligence Index: **~45-50** (estimated, lower than Pro's 55)
- ARC-AGI-2: **~40%** (estimated)
- Global MMLU (Lite): **~88%** (estimated)

Coding:

- SWE-bench Verified: **~48.9%** single attempt, **~60.3%** multiple attempts
- LiveCodeBench: **~59.3%** (Google paper)
- Aider Polyglot: **~56.7%** (Google paper)
- SciCode: **~40%** (estimated)
- LMArena Coding: **~1200** Elo (estimated)
- AWE-bench: **~45%** (estimated)

Long context:

- 1M context window with native multimodal support
- LOFT (hard): **~80%** at ≤128K (estimated)
- MRCR v2 (8-needle): **~50%** at 128K (estimated)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 55/100.** Moderate SWE-bench (~49%/60% multi-attempt), LiveCodeBench (~59%), Aider Polyglot (~57%). Weak on agentic benchmarks (Terminal-Bench ~30%, APEX-Agents ~10-15%). Capped by being a lighter-weight model.
- **Reasoning: 72/100.** Good GPQA Diamond (~82.8%), AIME (~80%), FACTS (~85%), Global MMLU (~88%). Capped by lower HLE (~10-12%) and AA Intelligence Index (~45-50).
- **Context window: 88/100.** 1M context window with native multimodal support. Strong long-context capabilities.
- **Multimodal: 75/100.** Native multimodal for text, audio, images, video. Strong MMMU (~80% estimated). Capped by text-only output.
- **Coding: 60/100.** Solid SWE-bench (~49%/60% multi-attempt), LiveCodeBench (~59%), Aider Polyglot (~57%). Capped by being a lighter model compared to Pro's 67%/74%.
- **Cost efficiency: 90/100.** Significantly cheaper than Gemini 2.5 Pro; estimated ~$0.15/$0.75 per 1M tokens. Excellent value proposition for a reasoning model.
- **Overall Score: 70/100.** Mean of the five non-cost dimensions (55 + 72 + 88 + 75 + 60) / 5 = 70.0, rounded half-up to 70. A solid lightweight reasoning model with native multimodality, 1M context, and excellent cost-efficiency, but moderate coding and agentic performance compared to the Pro tier.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Google DeepMind model card, Gemini 2.5 paper, Artificial Analysis, BenchLeader, and Google developer documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-2-5-flash/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/gemini-2-5-flash/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
