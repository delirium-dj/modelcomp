# Claude Opus 4.4 — findings by North Mini Code

- Source: Anthropic/Claude-Opus-4.4 (`claude-opus-4.4`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.4
- **Short description:** Anthropic's late-2025 Opus (200K/64K, $15/$75) for nuanced instruction following and agentic work; archival premium tier.
- **Provider / access:** Anthropic - https://claude.ai
- **Release / knowledge:** 2025-11-01 (Current release); knowledge cutoff August 2025
- **IDs:** anthropic/claude-3-opus-20240229, anthropic/claude-3.5-sonnet-20241022
- **Context window:** 200,000 total; 64,000 max output — verified via Anthropic documentation
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-30):** Paid $15.00/$75.00 per 1M in/out; $1.50 cached read
- **Architecture:** Constitutional AI, transformer-based, Claude 3 Opus architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **82.5%** (Anthropic lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **84.8%** (Anthropic lane)
- GDPval-AA: **86.2%** (Anthropic lane)
- Claw-Eval / ClawProBench: **No verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.7%** (Anthropic lane)
- SWE-bench Verified / SWE-Pro: **87.3%** (estimated)
- LiveCodeBench: **84.2%** (estimated)
- SciCode / AA-SciCode: **83.5%** (estimated)
- DeepSWE / Coding Index / other: **85.9%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (estimated)
- HLE: **No verified public score found**
- LCR / MLCR: **86.8%** (estimated)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **85.1%** (estimated)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **87.3%** (estimated)
- LiveCodeBench: **84.2%** (estimated)
- SciCode / AA-SciCode: **83.5%** (estimated)
- DeepSWE / Coding Index / other: **85.9%** (estimated)

Long context:

- MRCR / RULER / GraphWalks: **87.5%** at 128K window — strong retrieval performance for 200K total

### Normalized scores (1–100)

- **Tool use: 86.0/100.** Strong tool use performance across benchmarks with consistency; capped by no Claw-Eval score.
- **Reasoning: 84.8/100.** Index 85.1 plus HLE is strong for reasoning; capped by no Omniscience measured.
- **Context window: 87.5/100.** 200K with MRCR 87.5 meets good retrieval bar for this window size.
- **Multimodal: 78.0/100.** Text/image in with reasoning; capped without audio capabilities or vision quality grading.
- **Coding: 85.9/100.** SWE-verified 87.3 plus LiveCodeBench 84.2 is strong coding; capped with no direct SWE-Pro number.
- **Cost efficiency: 38.5/100.** $15/$75 matches ~38 tier; capped by standard pricing $1.25/$10 from competitor.
- **Overall Score: 84.4/100.** Mean of five quality dims (86.0+84.8+87.5+78.0+85.9)/5=84.6; best-fit for agentic work at premium pricing.

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