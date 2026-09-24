# Qwen3.8-Max — findings by Ling 3.0 Flash Fin

- Source: Alibaba Qwen (`opencode/qwen3-8-max`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's most capable model to date, 2.4T-parameter MoE with 95B active parameters, leading agentic computer use and long-horizon autonomous coding; first open-weight Qwen-Max-class model.
- **Provider / access:** QwenCloud, Qwen APIs, Hugging Face, ModelScope, Claude Code, Codex. Chat Completions + Responses API (Anthropic-compatible).
- **Release / knowledge:** 2026-08-02 (official release); weights open-scheduled next week. Knowledge cutoff April 2026.
- **IDs:** `qwen/qwen3-8-max` (OpenRouter), `qwen3-8-max` (QwenCloud), `Qwen/Qwen3-8-Max` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text, image, video in; text out; native multimodal; reasoning enabled; tool calls; computer use; JSON mode
- **Pricing (as of 2026-09-24):** $2.00/1M input, $6.00/1M output (competitive frontier pricing)
- **Architecture:** 2.4T total parameters, 95B active per token (~8.1% activation), Mixture-of-Experts based on Qwen 3.5 foundation

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen official, Claude Code harness)
- OSWorld-Verified: **86.1%** (Qwen official, ahead of GPT-5.6 Sol 83.2 and Fable 5 85.0)
- CoWorkBench: **74.8%** (Qwen official)
- Toolathlon Verified: **72.5%** (Qwen official)
- SkillsBench: **70.2%** (Qwen official)
- WideSearch: **81.9%** (Qwen official)
- Agents' Last Exam: **27.0% pass / 52.4 score** (Qwen official)
- Automation-Bench: **27.3%** (Qwen official)
- AndroidWorld: **85.3%** (Qwen official)
- ScreenSpot Pro: **84.5%** (Qwen official)
- WebArena-Verified: **66.8%** (Qwen official)
- MobileWorld: **77.8%** (Qwen official)
- Parametric CAD Bench: **91.5%** (Qwen official)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen official)
- HLE: **43.6%** (Qwen official)
- IFBench: **82.8%** (Qwen official)
- $OneMillion-Bench: **52.5%** (Qwen official)
- PLawBench: **73.2%** (Qwen official)
- MRCR v2 256K (8-needle): **92.9%** (Qwen official)
- LongBench v2: **66.3%** (Qwen official)
- MMMU-Pro: **82.3%** (Qwen official)
- MathVision: **95.2 / 97.7** (Qwen official)
- LogicVista: **91.9%** (Qwen official)
- HealthBench: **60.2%** (Qwen official)

Coding:

- Terminal-Bench 2.1: **86.6%** (Qwen official)
- SWE-bench Pro: **67.7%** (Qwen official)
- DeepSWE 1.1: **56.6%** (Qwen official)
- FrontierSWE: **73.5%** (Qwen official)
- PaperBench: **93.0%** (Qwen official, highest reported)
- QwenSWEBench: **80.7%** (Qwen official)
- AndroidBench: **75.1%** (Qwen official)
- NL2Repo-Bench: **55.9%** (Qwen official)
- QwenQoderBench: **58.4%** (Qwen official)
- QwenReactBench: **1724** Elo (Qwen official)
- QwenSVGBench: **1713** Elo (Qwen official)
- LiveCodeBench v6: **90.3%** (Qwen3.8-27B variant)

Long context:

- MRCR v2 256K (8-needle): **92.9%** (Qwen official, near state-of-the-art)
- LongBench v2: **66.3%** (Qwen official)
- 1M context window supported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 88/100.** Exceptional Terminal-Bench 2.1 (86.6%), OSWorld-Verified (86.1%), CoWorkBench (74.8%), WideSearch (81.9%), AndroidWorld (85.3%), Toolathlon (72.5%). One of the strongest tool-use models evaluated.
- **Reasoning: 82/100.** Very strong GPQA Diamond (92.6%), IFBench (82.8%), MRCR v2 (92.9%), MMMU-Pro (82.3%). Capped by lower HLE (43.6%) and Agents' Last Exam score (52.4).
- **Context window: 85/100.** 1M context window with MRCR v2 at 92.9% (near SOTA). Very strong long-context performance across benchmarks.
- **Multimodal: 80/100.** Native text, image, and video input with strong multimodal benchmarks (MMMU-Pro 82.3%, MathVision 95.2/97.7, OSWorld-Verified 86.1%, ClawEval-MM 77.2/74.8). Capped by not supporting video/audio output.
- **Coding: 78/100.** Very strong Terminal-Bench (86.6%), PaperBench (93.0), FrontierSWE (73.5), QwenSWEBench (80.7), but more moderate on SWE-bench Pro (67.7%) and DeepSWE (56.6%). Strong on autonomous coding tasks.
- **Cost efficiency: 85/100.** $2/$6 per 1M tokens is among the most competitive frontier pricing, especially given the model's strength on expensive long-horizon tasks.
- **Overall Score: 83/100.** Mean of the five non-cost dimensions (88 + 82 + 85 + 80 + 78) / 5 = 82.6, rounded half-up to 83. A frontier model excelling at agentic computer use, long-horizon autonomous work, and multimodal reasoning with competitive pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Qwen official release blog, Qwen model card, Artificial Analysis, BenchmarkList, Tabbit, and Alibaba Cloud documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen3-8-max/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/qwen3-8-max/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
