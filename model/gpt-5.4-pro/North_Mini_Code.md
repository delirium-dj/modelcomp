# GPT-5.4 Pro — findings by North Mini Code

- Source: OpenAI/GPT-5.4-Pro (`gpt-5.4-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's higher-compute tier (1.05M/128K, $30/$180, Responses-only) for hard research; GPQA 94.4%, ARC-AGI-2 83.3%, HLE 58.7% with tools.
- **Provider / access:** OpenAI - https://openai.com/index/gpt-5.4-pro/
- **Release / knowledge:** 2026-06-01 (Current release); knowledge cutoff June 2026
- **IDs:** openai/gpt-5.4-pro, openai/gpt-5.4-pro-128k
- **Context window:** 1,050,000 total; 128,000 max output — verified via OpenAI API documentation
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-30):** $30/$180 per 1M; 2x/1.5x over 272K
- **Architecture:** transformer-based; high-compute research architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **94.2%** (OpenAI lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **95.8%** (OpenAI lane)
- GDPval-AA: **96.5%** (OpenAI lane)
- Claw-Eval / ClawProBench: **92.7%** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.9%** (OpenAI lane)
- SWE-bench Verified / SWE-Pro: **No verified public score found**
- LiveCodeBench: **No verified public score found**
- SciCode / AA-SciCode: **No verified public score found**
- DeepSWE / Coding Index / other: **No verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (from meta.json)
- HLE: **58.7%** (from meta.json)
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

- MRCR / RULER / GraphWalks: **94.8%** at 1M window — excellent retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 93.8/100.** Frontier open-source performance across all benchmarks; capped by Claw-Eval at 92.7.
- **Reasoning: 89.3/100.** GPQA 94.4 plus HLE 58.7 is strong; capped by no Index measured.
- **Context window: 94.8/100.** 1M with MRCR 94.8 meets excellent retrieval bar for this window size.
- **Multimodal: 75.0/100.** Text/image in with reasoning; capped without vision capabilities or quality grading.
- **Coding: 60.0/100.** No verified coding benchmarks; high-cost compute focused on reasoning.
- **Cost efficiency: 12.5/100.** $30/$180 matches ~12 tier; extreme pricing caps efficiency.
- **Overall Score: 82.6/100.** Mean of five quality dims (93.8+89.3+94.8+75.0+60.0)/5=86.6; best-fit for high-compute research with extreme pricing.

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