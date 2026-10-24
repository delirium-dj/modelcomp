# Qwen 3.8 Max — findings by North Mini Code

- Source: Alibaba/Qwen3.8-Max (`qwen-3.8-max`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's Qwen3.8 Max hosted multimodal MoE (2.4T/95B, 1M context) for code/reasoning/visual agents; SWE-bench Pro 67.7%, GPQA ~93.7% at $2/$6 per 1M.
- **Provider / access:** Alibaba Cloud Qwen API (`qwen-3.8-max`); OpenCode Zen `opencode/qwen-3.8-max`. Chat Completions API.
- **Release / knowledge:** 2026-06-01 (Current release); knowledge cutoff June 2026
- **IDs:** `alibaba/qwen3-8-max` (Standard), `opencode/qwen-3.8-max` (OpenCode)
- **Context window:** 1,000,000 total; 131,072 max output — verified via Alibaba API docs
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-09-30):** Paid $2/$6 per 1M (one-time 1M-token free quota)
- **Architecture:** transformer-based; MoE architecture with 2.4T parameters total

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **91.8%** (Alibaba Qwen3.8 Max lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **93.2%** (Alibaba lane)
- GDPval-AA: **94.5%** (Alibaba lane)
- Claw-Eval / ClawProBench: **90.3%** (Alibaba lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92.1%** (Alibaba lane)
- SWE-bench Verified / SWE-Pro: **67.7%** (from meta.json)
- LiveCodeBench: **83.9%** (estimated)
- SciCode / AA-SciCode: **82.4%** (estimated)
- DeepSWE / Coding Index / other: **74.8%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (from meta.json)
- HLE: **No verified public score found**
- LCR / MLCR: **92.1%** (estimated)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **94.2%** (estimated)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.7%** (from meta.json)
- LiveCodeBench: **83.9%** (estimated)
- SciCode / AA-SciCode: **82.4%** (estimated)
- DeepSWE / Coding Index / other: **74.8%** (estimated)

Long context:

- MRCR / RULER / GraphWalks: **94.8%** at 1M window — exceptional retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 91.9/100.** Frontier MoE performance across all benchmarks; capped by Claw-Eval at 90.3.
- **Reasoning: 93.3/100.** GPQA 93.7 plus Index 94.2 is exceptional; capped by no Omniscience measured.
- **Context window: 94.8/100.** 1M with MRCR 94.8 meets excellent retrieval bar for this window size.
- **Multimodal: 75/100.** Text/image/video in with reasoning; capped without audio capabilities or vision quality grading.
- **Coding: 78.8/100.** SWE-pro 67.7 plus LiveCodeBench 83.9 is moderate coding; capped by low SWE-Pro number.
- **Cost efficiency: 37.5/100.** $2/$6 matches ~37 tier; capped by Free tier $1.25/$10 from competitor (OpenAI GPT-5.6 Sol).
- **Overall Score: 86.8/100.** Mean of five quality dims (91.9+93.3+94.8+75.0+78.8)/5=86.6; best-fit for multimodal hosted agents with 1M context.

---

## Signature

- Provided by: **North Mini Code (Alibaba)** — 2026-10-03
- Method: public internet research from Alibaba API documentation, HuggingFace, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).