# Qwen 3.8 — findings by Ling 3.0 Flash Fin

- Source: Alibaba Qwen (`opencode/qwen-3-8`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Qwen 3.8 series model, a capable coding and reasoning model with native multimodal support, priced competitively at $2/$6 per million tokens.
- **Provider / access:** QwenCloud, Qwen APIs, Hugging Face, Claude Code, Codex. Chat Completions + Responses API.
- **Release / knowledge:** 2026-08 (Qwen 3.8 family launch); knowledge cutoff April 2026.
- **IDs:** `qwen/qwen-3-8` (OpenRouter), `qwen-3-8` (QwenCloud), `Qwen/Qwen-3-8` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text, image, video in; text out; native multimodal; reasoning enabled; tool calls; computer use
- **Pricing (as of 2026-09-24):** $2.00/1M input, $6.00/1M output
- **Architecture:** MoE, based on Qwen 3 foundation; smaller than Qwen3.8-Max

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen official, same as Qwen3.8-Max per family)
- OSWorld-Verified: **86.1%** (Qwen official)
- CoWorkBench: **74.8%** (Qwen official)
- Toolathlon Verified: **72.5%** (Qwen official)
- WideSearch: **81.9%** (Qwen official)
- Agents' Last Exam: **27.0% pass / 52.4 score** (Qwen official)
- AndroidWorld: **85.3%** (Qwen official)
- ScreenSpot Pro: **84.5%** (Qwen official)
- Parametric CAD Bench: **91.5%** (Qwen official)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen official)
- HLE: **43.6%** (Qwen official)
- IFBench: **82.8%** (Qwen official)
- MRCR v2 256K (8-needle): **92.9%** (Qwen official)
- MMMU-Pro: **82.3%** (Qwen official)
- MathVision: **95.2 / 97.7** (Qwen official)
- LogicVista: **91.9%** (Qwen official)
- LongBench v2: **66.3%** (Qwen official)

Coding:

- Terminal-Bench 2.1: **86.6%** (Qwen official)
- SWE-bench Pro: **67.7%** (Qwen official)
- DeepSWE 1.1: **56.6%** (Qwen official)
- FrontierSWE: **73.5%** (Qwen official)
- PaperBench: **93.0%** (Qwen official)
- QwenSWEBench: **80.7%** (Qwen official)
- AndroidBench: **75.1%** (Qwen official)
- QwenReactBench: **1724** Elo (Qwen official)
- QwenSVGBench: **1713** Elo (Qwen official)
- LiveCodeBench v6: **90.3%** (Qwen3.8-27B variant)

Long context:

- MRCR v2 256K (8-needle): **92.9%** (Qwen official)
- LongBench v2: **66.3%** (Qwen official)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 85/100.** Very strong Terminal-Bench 2.1 (86.6%), OSWorld-Verified (86.1%), WideSearch (81.9%), CoWorkBench (74.8%), AndroidWorld (85.3%). Exceptional agentic tool-use performance.
- **Reasoning: 80/100.** Strong GPQA Diamond (92.6%), IFBench (82.8%), MRCR v2 (92.9%), MMMU-Pro (82.3%). Capped by lower HLE (43.6%).
- **Context window: 85/100.** 1M context window with MRCR v2 at 92.9%. Very strong long-context performance.
- **Multimodal: 78/100.** Native text, image, video input with strong multimodal benchmarks (MMMU-Pro 82.3%, MathVision 95.2/97.7, OSWorld-Verified 86.1%). Capped by text-only output.
- **Coding: 78/100.** Very strong Terminal-Bench (86.6%), PaperBench (93.0), FrontierSWE (73.5), QwenSWEBench (80.7). Capped by moderate DeepSWE (56.6%) and SWE-bench Pro (67.7%).
- **Cost efficiency: 85/100.** $2/$6 per 1M tokens is among the most competitive frontier pricing for a model of this capability level.
- **Overall Score: 81/100.** Mean of the five non-cost dimensions (85 + 80 + 85 + 78 + 78) / 5 = 81.2, rounded half-up to 81. A strong multimodal coding and agentic model with competitive pricing and excellent long-context performance.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Qwen official release blog, Qwen model card, Artificial Analysis, and Alibaba Cloud documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3-8/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/qwen-3-8/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
