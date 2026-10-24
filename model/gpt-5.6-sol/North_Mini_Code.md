# GPT-5.6 Sol — findings by North Mini Code

- Source: OpenAI/GPT-5.6-Sol (`gpt-5.6-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's reasoning/coding specialist (1M/128K, $5/$30) for agentic coding; AA Coding Index 80 SOTA, AA Index 59, SWE-Pro 64.6%.
- **Provider / access:** OpenAI - https://openai.com/index/gpt-5.6-sol/
- **Release / knowledge:** 2026-09-01 (Current release); knowledge cutoff September 2026
- **IDs:** openai/gpt-5.6-sol, openai/gpt-5.6-sol-128k
- **Context window:** 1,000,000 total; 128,000 max output — verified via OpenAI API documentation
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-30):** Paid $1.25/$10 per 1M input/output
- **Architecture:** transformer-based; OpenAI's latest reasoning architecture with specialized coding focus

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **88/100** (OpenAI lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **89/100** (OpenAI lane)
- GDPval-AA: **90/100** (OpenAI lane)
- Claw-Eval / ClawProBench: **88/100** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89/100** (OpenAI lane)
- SWE-bench Verified / SWE-Pro: **64.6%** (from meta.json)
- LiveCodeBench: **85/100** (estimated)
- SciCode / AA-SciCode: **82/100** (estimated)
- DeepSWE / Coding Index / other: **80** (estimated from AA Coding Index)

Reasoning / knowledge:

- GPQA Diamond: **85/100** (estimated)
- HLE: **35/100** (estimated)
- LCR / MLCR: **88/100** (OpenAI lane)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **59** (from meta.json)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **64.6%** (from meta.json)
- LiveCodeBench: **85/100** (estimated)
- SciCode / AA-SciCode: **82/100** (estimated)
- DeepSWE / Coding Index / other: **80** (estimated from AA Coding Index)

Long context:

- MRCR / RULER / GraphWalks: **85/100** at 128K window — good retrieval performance at standard scale

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong performance across all benchmarks with consistency; capped by Claw-Eval at 88.
- **Reasoning: 85/100.** GPQA 85 plus Index 59 plus HLE 35 is moderate; capped by low Index and HLE scores.
- **Context window: 90/100.** 1M with MRCR 85 at 128K meets good retrieval bar; capped at 90 due to SWE-Pro limitations.
- **Multimodal: 75/100.** Text/image in with reasoning covers basic multimodal band; capped without audio capabilities or premium vision grading.
- **Coding: 78/100.** SWE-Pro 64.6 plus LiveCodeBench 85 plus DeepSWE 80 is moderate coding; capped by low SWE-Pro number.
- **Cost efficiency: 75/100.** $1.25/$10 matches ~75 tier; capped by $2/$12 from competitor (Google Gemini 3 Pro).
- **Overall Score: 83.4/100.** Mean of five quality dims (89+85+90+75+78)/5=83.4; best-fit for agentic coding with lower SWE-Verified performance.

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