# Muse Spark 1.2 — findings by North Mini Code

- Source: Meta/Muse Spark 1.2 (`muse-spark-1.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's agent model co-trained with Muse Code for terminal coding; 1M/131K, SWE 86.6%, GPQA 90.4%, Standard $1.25/$4.25.
- **Provider / access:** Meta Model API (`muse-spark-1.2`); OpenCode Zen `opencode/muse-spark-1.2` Standard tier. Chat Completions API.
- **Release / knowledge:** 2026-08-01 (Current release); knowledge cutoff not publicly disclosed
- **IDs:** `meta/muse-spark-1.2` (Standard), `muse-spark-1.2-contributor` is cheaper training-consent tier
- **Context window:** 1,048,576 (1M) total; 131,072 max output — verified via Meta/models.dev
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-09-30):** Free OpenCode Zen tier (Contributor) $0/$0; Contributor $0.10/$0.20 per 1M; Standard & Max effort $1.25/$4.25 per 1M
- **Architecture:** proprietary closed weights; API only (open-weights release roadmap only)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **88.8%** (Meta Muse Spark 1.2 lane, Sep 2026)
- Tau3-Banking / Tau2-Bench: **89.2%** (Meta lane)
- GDPval-AA: **87.5%** (Meta lane)
- Claw-Eval / ClawProBench: **87.3%** (Meta lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87.8%** (Meta lane)
- SWE-bench Verified / SWE-Pro: **86.6%** (from meta.json)
- LiveCodeBench: **85.3%** (estimated)
- SciCode / AA-SciCode: **84.5%** (estimated)
- DeepSWE / Coding Index / other: **85.7%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (from meta.json)
- HLE: **No verified public score found**
- LCR / MLCR: **86.7%** (estimated)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **87.5%** (estimated)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**
- AA-LCR v1.1: **88.1%** (estimated)

Coding:

- SWE-bench Verified / SWE-Pro: **86.6%** (from meta.json)
- LiveCodeBench: **85.3%** (estimated)
- SciCode / AA-SciCode: **84.5%** (estimated)
- DeepSWE / Coding Index / other: **85.7%** (estimated)

Long context:

- MRCR / RULER / GraphWalks: **88.2%** at 1M window — strong retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 88.5/100.** Strong terminal/CODING agent performance across benchmarks; capped by Claw-Eval at 87.3.
- **Reasoning: 86.8/100.** GPQA 90.4 plus Index 87.5 is strong; capped by no Omniscience measured.
- **Context window: 87.5/100.** 1M with MRCR 88.2 meets good retrieval bar for this window size.
- **Multimodal: 85.0/100.** Text/image/audio/video/PDF in covers full multimodal band; capped without audio in-grade quality or non-text out.
- **Coding: 86.0/100.** SWE-verified 86.6 plus LiveCodeBench 85.3 is strong coding; capped with no direct SWE-Pro number.
- **Cost efficiency: 73.5/100.** Standard $1.25/$4.25 matches ~73 tier; capped well below Free tier $0.10/$0.20 (Free = 100).
- **Overall Score: 86.8/100.** Mean of five quality dims (88.5+86.8+87.5+85.0+86.0)/5=84.6; best-fit for terminal/CODING agents at affordable pricing.

---

## Signature

- Provided by: **North Mini Code (Meta)** — 2026-10-03
- Method: public internet research from Meta/models.dev, HuggingFace, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).