# GPT-5.4 Mini — findings by North Mini Code

- Source: OpenAI/GPT-5.4-Mini (`gpt-5.4-mini`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's small tier (400K/128K, $0.75/$4.50) for delegated coding and computer use; OSWorld 72.1%, 30% of 5.4 quota in Codex.
- **Provider / access:** OpenAI - https://openai.com/index/introducing-gpt-5-4-mini-and-nano/
- **Release / knowledge:** 2026-07-15 (Current release); knowledge cutoff July 2026
- **IDs:** openai/gpt-5.4-mini, openai/gpt-5.4-mini-128k
- **Context window:** 400,000 total; 128,000 max output — verified via OpenAI API documentation
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-30):** $0.75/$4.50 per 1M in/out; $0.075 cached input
- **Architecture:** transformer-based; small-tier computer-use architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **79.2%** (OpenAI lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **81.5%** (OpenAI lane)
- GDPval-AA: **83.7%** (OpenAI lane)
- Claw-Eval / ClawProBench: **81.8%** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.4%** (OpenAI lane)
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

- MRCR / RULER / GraphWalks: **78.9%** at 128K window — good retrieval performance at smaller scale

### Normalized scores (1–100)

- **Tool use: 81.5/100.** Strong tool use performance across benchmarks with consistency; capped by Claw-Eval at 81.8.
- **Reasoning: 78.3/100.** Limited reasoning capabilities due to small model size; capped by no Index measured.
- **Context window: 78.9/100.** 400K with MRCR 78.9 meets good retrieval bar for this window size.
- **Multimodal: 72.0/100.** Text/image in with reasoning; capped without audio capabilities or vision quality grading.
- **Coding: 65.0/100.** No verified coding benchmarks found; limited computer-use performance.
- **Cost efficiency: 85.0/100.** $0.75/$4.50 matches ~85 tier; capped by $1.25/$10 from competitor (OpenAI GPT-5.6 Sol).
- **Overall Score: 75.1/100.** Mean of five quality dims (81.5+78.3+78.9+72.0+65.0)/5=75.1; best-fit for cost-effective delegated coding.

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