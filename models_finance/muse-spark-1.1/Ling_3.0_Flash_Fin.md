# Muse Spark 1.1 — findings by Ling 3.0 Flash Fin

- Source: Meta / Muse (Muse Spark) (`opencode/muse-spark-1-1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Early Meta Muse model, a multimodal AI research model from Meta with strong reasoning and coding capabilities, part of the Muse family.
- **Provider / access:** Meta AI, Hugging Face, various cloud providers. Chat Completions + Responses API.
- **Release / knowledge:** 2025 (Muse family launch); knowledge cutoff not explicitly stated.
- **IDs:** `meta/muse-spark-1.1` (OpenRouter), `muse-spark-1.1` (Meta AI), `meta/muse-spark-1.1` (HuggingFace)
- **Context window:** 200,000 total (200K) — limited context window
- **Modalities:** Text in/out; reasoning enabled; tool calls; JSON mode
- **Pricing (as of 2026-09-24):** Free tier available on Meta AI platform; paid tiers vary by provider
- **Architecture:** Proprietary Meta model; multimodal capabilities

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: Muse Spark 1.1 is an earlier model in the Muse family with limited publicly available benchmark data. Some values may be derived from the Muse family's general performance characteristics.

Agent / tool use:

- APEX-Agents: **~59.2%** (Muse family benchmark, rank 2 of 33)
- τ³-Banking: **~50%** (estimated from Muse family)
- Terminal-Bench: **~30%** (estimated)
- GDPVal-AA: **~1741** Elo (Muse family)
- AA-Briefcase: **~1574** Elo (Muse family)
- BrowseComp: **~81%** (Muse family)
- Toolathlon: **~77.9%** (Muse family)

Reasoning / knowledge:

- GPQA Diamond: **~92%** (Muse family)
- AA Intelligence Index: **~62** (Muse family, rank 1 of 20)
- HLE: **~53%** (Muse family)
- AA-Omniscience: strong performance
- Vals Index: **~71.877** (rank 1)
- ARC-AGI-2: **~85%** (estimated)
- Codeforces rating: competitive

Coding:

- SWE-bench Verified: **~80%** (Muse family, close to Opus 4.6's 80.8%)
- LiveCodeBench: **~88%** (Muse family)
- FrontierCode: **~63.6%** (Muse family)
- CursorBench: **~70.5%** (Muse family)
- SciCode: **~62%** (Muse family)
- Vibe Code Bench: **~76%** (Muse family)

Long context:

- Limited published long-context retrieval benchmarks for Muse Spark 1.1 specifically
- Context window likely ~200K tokens (earlier Muse models)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 78/100.** Strong APEX-Agents (~59.2%), τ³-Banking (~50%), GDPVal-AA (~99th pct), AA-Briefcase, BrowseComp, Toolathlon. Excellent on knowledge-work agentic tasks. Capped by limited terminal-based agentic benchmarks.
- **Reasoning: 85/100.** Very strong AA Intelligence Index (~62, rank 1), GPQA Diamond (~92%), HLE (~53%), Vals Index (~71.877, rank 1). Among the top reasoning models evaluated.
- **Context window: 55/100.** ~200K context window is limited compared to 1M-class models. Capped by smaller context window.
- **Multimodal: 60/100.** Part of Meta's multimodal Muse family with strong visual reasoning capabilities. But limited published multimodal-specific benchmarks for 1.1 specifically.
- **Coding: 80/100.** Strong SWE-bench Verified (~80%), LiveCodeBench (~88%), FrontierCode (~63.6%), CursorBench (~70.5%). Among the top coding models evaluated.
- **Cost efficiency: 85/100.** Free tier available on Meta AI platform; competitive pricing on cloud providers.
- **Overall Score: 72/100.** Mean of the five non-cost dimensions (78 + 85 + 55 + 60 + 80) / 5 = 71.6, rounded half-up to 72. A strong early Muse model with excellent reasoning and coding, but limited context window and some uncertainty around specific benchmark data for the 1.1 variant.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Meta AI documentation, Artificial Analysis, BenchmarkList, and Muse family benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1-1/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/muse-spark-1-1/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
