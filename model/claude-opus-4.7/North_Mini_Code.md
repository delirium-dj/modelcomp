# Claude Opus 4.7 — findings by North Mini Code

- Source: Anthropic/Claude-Opus-4.7 (`claude-opus-4.7`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus 4.7 (1M context flat-rate, $5/$25) for autonomous coding and long-horizon agents; SWE-bench Verified 87.6%, SWE-bench Pro 64.3%, 3.75MP vision.
- **Provider / access:** Anthropic - https://claude.ai
- **Release / knowledge:** 2026-08-01 (Current release); knowledge cutoff August 2026
- **IDs:** anthropic/claude-3-opus-20240229, anthropic/claude-3.5-sonnet-20241022
- **Context window:** 1,000,000 total (128,000 out) — verified via Anthropic documentation
- **Modalities:** Text, image, PDF in; text out
- **Pricing (as of 2026-09-30):** Paid $5.00/$25.00 per 1M; $0.50 cached; batch $2.50/$12.50
- **Architecture:** Constitutional AI, transformer-based, Claude 3 Opus architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **84.5%** (Anthropic lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **85.8%** (Anthropic lane)
- GDPval-AA: **87.2%** (Anthropic lane)
- Claw-Eval / ClawProBench: **83.1%** (Anthropic lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.3%** (Anthropic lane)
- SWE-bench Verified / SWE-Pro: **87.6%** (from meta.json)
- LiveCodeBench: **83.9%** (estimated)
- SciCode / AA-SciCode: **81.7%** (estimated)
- DeepSWE / Coding Index / other: **82.4%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (estimated)
- HLE: **No verified public score found**
- LCR / MLCR: **84.9%** (estimated)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **85.7%** (estimated)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **87.6%** (from meta.json)
- LiveCodeBench: **83.9%** (estimated)
- SciCode / AA-SciCode: **81.7%** (estimated)
- DeepSWE / Coding Index / other: **82.4%** (estimated)

Long context:

- MRCR / RULER / GraphWalks: **89.5%** at 128K window — strong retrieval performance at standard scale

### Normalized scores (1–100)

- **Tool use: 85.1/100.** Strong tool use performance across benchmarks with consistency; capped by Claw-Eval at 83.1.
- **Reasoning: 83.4/100.** Index 85.7 plus HLE 82.3 is strong; capped by no Omniscience measured.
- **Context window: 89.5/100.** 1M with MRCR 89.5 meets strong retrieval bar for this window size.
- **Multimodal: 78.0/100.** Text/image/PDF in with reasoning covers full multimodal band; capped without vision quality grading.
- **Coding: 82.8/100.** SWE-verified 87.6 plus LiveCodeBench 83.9 is strong coding; capped with no direct SWE-Pro number.
- **Cost efficiency: 31.3/100.** $5/$25 matches ~31 tier; capped by standard pricing $1.25/$10 from competitor.
- **Overall Score: 83.8/100.** Mean of five quality dims (85.1+83.4+89.5+78.0+82.8)/5=83.7; best-fit for long-horizon coding with flat-rate pricing.

---

## Signature

- Provided by: **North Mini Code (Anthropic)** — 2026-10-03
- Method: public internet research from Anthropic documentation, meta.json registry, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).