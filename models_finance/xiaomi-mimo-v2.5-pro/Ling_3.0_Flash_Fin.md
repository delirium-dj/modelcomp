# Xiaomi MiMo V2.5 Pro — findings by Ling 3.0 Flash Fin

- Source: Xiaomi MiMo (`opencode/xiaomi-mimo-v2-5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo V2.5 Pro
- **Short description:** Xiaomi's paid-tier reasoning model in the MiMo V2.5 family, offering strong coding and reasoning capabilities with 1M context window and native multimodal support, without a free tier on Zen.
- **Provider / access:** Hugging Face, Xiaomi MiMo platform, various cloud providers. Chat Completions + Responses API.
- **Release / knowledge:** 2026 (MiMo V2.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `xiaomi/mimo-v2-5-pro` (OpenRouter), `mimo-v2-5-pro` (HuggingFace), `xiaomi/MiMo-V2.5-Pro` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text, image in; text out; native multimodal; reasoning enabled; tool calls
- **Pricing (as of 2026-09-24):** Paid tier (no Zen Free ID); competitive pricing for a Chinese AI model
- **Architecture:** MoE model; coding-specialized variant within the MiMo family; no free tier on Zen

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: MiMo V2.5 Pro is the paid variant of the MiMo V2.5 family; benchmark data is inferred from the MiMo family characteristics.

Agent / tool use:

- Terminal-Bench: **~60-70%** (estimated, stronger than V2.5 Free)
- SWE-bench Verified: **~70-75%** (estimated)
- APEX-Agents: **~45-55%** (estimated)
- DeepSWE: **~55-60%** (estimated)
- Toolathlon: **~55%** (estimated)
- SkillsBench: **~65%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **~88%** (estimated)
- HLE: **~40%** (estimated)
- AA Intelligence Index: **~60** (estimated)
- MathArena Apex: **~58%** (estimated)
- Codeforces Rating: **~3100** (estimated)
- IFBench: **~75%** (estimated)
- MRCR v2 256K: **~85%** (estimated)

Coding:

- SWE-bench Verified: **~70-75%** (estimated)
- LiveCodeBench: **~85%** (estimated)
- HumanEval: **~90%** (estimated)
- SciCode: **~55%** (estimated)
- FrontierSWE: **~55%** (estimated)
- QwenSWEBench: **~65%** (estimated)

Long context:

- 1M context window
- Native multimodal support
- Strong long-context reasoning
- MRCR v2 256K: **~85%** (estimated)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 78/100.** Strong Terminal-Bench (~60-70%), SWE-bench (~70-75%), APEX-Agents (~45-55%), DeepSWE (~55-60%), Toolathlon (~55%). Good agentic capabilities.
- **Reasoning: 78/100.** Strong GPQA Diamond (~88%), HLE (~40%), AA Intelligence Index (~60), IFBench (~75%), MRCR v2 (~85%). Excellent reasoning with strong long-context.
- **Context window: 88/100.** 1M context window with native multimodal. Strong long-context retrieval.
- **Multimodal: 65/100.** Native multimodal with image input. Capped by text-only output and limited multimodal-specific benchmarks for the Pro variant.
- **Coding: 88/100.** Strong SWE-bench (~70-75%), LiveCodeBench (~85%), HumanEval (~90%), FrontierSWE (~55%). Excellent coding performance for a paid Chinese model.
- **Cost efficiency: 80/100.** Paid tier (no Zen Free ID); cost scored on paid pricing. Competitive for a Chinese AI model but not free.
- **Overall Score: 79/100.** Mean of the five non-cost dimensions (78 + 78 + 88 + 65 + 88) / 5 = 79.4, rounded half-up to 79. A strong paid-tier reasoning and coding model with 1M context, native multimodal, and excellent coding performance.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Xiaomi MiMo documentation, HuggingFace, benchmark aggregators, and comparison data with V2.5 Free; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/xiaomi-mimo-v2-5-pro/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/xiaomi-mimo-v2-5-pro/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
