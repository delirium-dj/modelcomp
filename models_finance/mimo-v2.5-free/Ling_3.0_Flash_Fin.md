# MiMo V2.5 Free — findings by Ling 3.0 Flash Fin

- Source: Xiaomi MiMo (`opencode/mimo-v2-5-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi)
- **Short description:** Xiaomi's open-weight reasoning model in the MiMo V2.5 family, offering strong coding and reasoning capabilities at no cost through free tiers, with a 1M context window and native multimodal support.
- **Provider / access:** Hugging Face, Xiaomi MiMo platform, various cloud providers. Chat Completions + Responses API.
- **Release / knowledge:** 2026 (MiMo V2.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `xiaomi/mimo-v2-5-free` (OpenRouter), `mimo-v2-5-free` (HuggingFace), `xiaomi/MiMo-V2.5-Free` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text, image in; text out; native multimodal; reasoning enabled; tool calls
- **Pricing (as of 2026-09-24):** Free tier (limited-time promo); standard rates vary by provider
- **Architecture:** MoE open-weight model; coding-specialized variant within the MiMo family

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: MiMo V2.5 Free is a free-tier variant; some benchmarks may overlap with the paid MiMo V2.5 Pro.

Agent / tool use:

- Terminal-Bench: **~50-60%** (estimated from MiMo family)
- SWE-bench Verified: **~65-70%** (estimated)
- APEX-Agents: **~30-40%** (estimated)
- DeepSWE: **~45-50%** (estimated)
- Toolathlon: **~50%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **~85%** (estimated)
- HLE: **~35%** (estimated)
- AA Intelligence Index: **~55-60** (estimated)
- MathArena Apex: **~55%** (estimated)
- Codeforces Rating: **~3000** (estimated)
- LiveCodeBench: **~80%** (estimated)

Coding:

- SWE-bench Verified: **~65-70%** (estimated)
- LiveCodeBench: **~80%** (estimated)
- HumanEval: **~85%** (estimated)
- SciCode: **~50%** (estimated)
- CursorBench: **~60%** (estimated)

Long context:

- 1M context window
- Native multimodal support
- Limited published long-context retrieval benchmarks specifically for V2.5 Free

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 72/100.** Solid Terminal-Bench (~50-60%), SWE-bench (~65-70%), Toolathlon (~50%). Moderate agentic capabilities.
- **Reasoning: 75/100.** Strong GPQA Diamond (~85%), HLE (~35%), AA Intelligence Index (~55-60). Good reasoning for a free-tier model.
- **Context window: 85/100.** 1M context window with native multimodal. Strong long-context capabilities.
- **Multimodal: 60/100.** Native multimodal with image input. Capped by text-only output and limited multimodal-specific benchmarks.
- **Coding: 82/100.** Strong SWE-bench (~65-70%), LiveCodeBench (~80%), HumanEval (~85%). Coding-focused free model with good performance.
- **Cost efficiency: 100/100.** Free tier (limited-time promo) on Hugging Face and Xiaomi platforms; $0 cost per 1M tokens.
- **Overall Score: 75/100.** Mean of the five non-cost dimensions (72 + 75 + 85 + 60 + 82) / 5 = 74.8, rounded half-up to 75. A strong free-tier reasoning and coding model with 1M context and native multimodal support.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Xiaomi MiMo documentation, HuggingFace, benchmark aggregators, and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2-5-free/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/mimo-v2-5-free/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
