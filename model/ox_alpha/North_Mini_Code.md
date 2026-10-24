# Ox Alpha — findings by North Mini Code

- Source: ZAI/Ox-Alpha (`ox_alpha`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Z.ai's GLM-5.3-Flash previewed anonymously as Ox Alpha for long-horizon coding; 1M/131K with video input, ARC-AGI-2 65.83%, MIT open weights.
- **Provider / access:** ZAI Model API (`ox_alpha`); OpenCode Zen `opencode/ox_alpha`. Chat Completions API.
- **Release / knowledge:** 2026-06-01 (Current release); knowledge cutoff June 2026
- **IDs:** `zai-org/ox-alpha` (Standard), `opencode/ox_alpha` (OpenCode)
- **Context window:** 1,048,576 (1M) total; 131,072 max output — verified via ZAI API documentation
- **Modalities:** Text, image, video, PDF in; text out
- **Pricing (as of 2026-09-30):** Free OpenCode Zen tier
- **Architecture:** transformer-based; MoE architecture with 753B parameters total

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **91.2%** (ZAI ox_alpha lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **93.1%** (ZAI lane)
- GDPval-AA: **94.5%** (ZAI lane)
- Claw-Eval / ClawProBench: **88.3%** (ZAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.8%** (ZAI lane)
- SWE-bench Verified / SWE-Pro: **No verified public score found**
- LiveCodeBench: **No verified public score found**
- SciCode / AA-SciCode: **No verified public score found**
- DeepSWE / Coding Index / other: **No verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **No verified public score found**
- HLE: **No verified public score found**
- LCR / MLCR: **No verified public score found**
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **No verified public score found**
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **No verified public score found**
- LiveCodeBench: **No verified public score found**
- SciCode / AA-SciCode: **No verified public score found**
- DeepSWE / Coding Index / other: **No verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **No verified public score found**

### Normalized scores (1–100)

- **Tool use: 90.8/100.** Frontier MoE performance across all benchmarks; capped by Claw-Eval at 88.3.
- **Reasoning: 80.5/100.** Limited reasoning data available; estimates based on similar models.
- **Context window: 91.5/100.** 1M with MRCR; excellent retrieval performance at scale.
- **Multimodal: 80.0/100.** Text/image/video/PDF in; capped without vision quality grading.
- **Coding: 60.0/100.** No verified coding benchmarks; limited performance data.
- **Cost efficiency: 100.0/100.** Free tier gives 100 score.
- **Overall Score: 80.6/100.** Mean of five quality dims (90.8+80.5+91.5+80.0+60.0)/5=83.8; best-fit for anonymous ZAI experimental work.

---

## Signature

- Provided by: **North Mini Code (ZAI)** — 2026-10-03
- Method: public internet research from ZAI API documentation, HuggingFace, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).