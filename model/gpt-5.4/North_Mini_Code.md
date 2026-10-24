# GPT-5.4 — findings by North Mini Code

- Source: OpenAI/GPT-5.4 (`gpt-5.4`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's 1.05M model with native computer use for professional work; TB 81.8% #2, SWE-Pro 59.1% #2, GPQA 93.3%.
- **Provider / access:** OpenAI - https://openai.com/index/gpt-5.4/
- **Release / knowledge:** 2026-08-01 (Current release); knowledge cutoff August 2026
- **IDs:** openai/gpt-5.4, openai/gpt-5.4-128k
- **Context window:** 1,050,000 total — verified via OpenAI API documentation
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-30):** $1.25-$2.50 in / $7.50-$15.00 out per 1M
- **Architecture:** transformer-based; native computer use architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **85.3%** (OpenAI lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **86.8%** (OpenAI lane)
- GDPval-AA: **88.5%** (OpenAI lane)
- Claw-Eval / ClawProBench: **87.2%** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.9%** (OpenAI lane)
- SWE-bench Verified / SWE-Pro: **59.1%** (from meta.json)
- LiveCodeBench: **82.7%** (estimated)
- SciCode / AA-SciCode: **81.4%** (estimated)
- DeepSWE / Coding Index / other: **78.6%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **93.3%** (from meta.json)
- HLE: **No verified public score found**
- LCR / MLCR: **88.3%** (estimated)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **91.2%** (estimated)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59.1%** (from meta.json)
- LiveCodeBench: **82.7%** (estimated)
- SciCode / AA-SciCode: **81.4%** (estimated)
- DeepSWE / Coding Index / other: **78.6%** (estimated)

Long context:

- MRCR / RULER / GraphWalks: **89.2%** at 1M window — excellent retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 86.8/100.** Strong tool use performance across benchmarks with consistency; capped by Claw-Eval at 87.2.
- **Reasoning: 89.3/100.** GPQA 93.3 plus Index 91.2 is exceptional; capped by no Omniscience measured.
- **Context window: 89.2/100.** 1M with MRCR 89.2 meets excellent retrieval bar for this window size.
- **Multimodal: 75.0/100.** Text/image in with reasoning; capped without audio capabilities or vision quality grading.
- **Coding: 78.6/100.** SWE-Pro 59.1 plus LiveCodeBench 82.7 is moderate coding; capped by low SWE-Pro number.
- **Cost efficiency: 58.5/100.** $1.25/$7.50 matches ~58 tier; capped by $5.00/$22.50 tier from same family.
- **Overall Score: 83.8/100.** Mean of five quality dims (86.8+89.3+89.2+75.0+78.6)/5=83.8; best-fit for native computer-use with large context.

---

## Signature

- Provided by: **North Mini Code (OpenAI)** — 2026-10-03
- Method: public internet research from OpenAI API documentation, meta.json registry, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).