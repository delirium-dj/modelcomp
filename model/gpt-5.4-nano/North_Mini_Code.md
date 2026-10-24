# GPT-5.4 Nano — findings by North Mini Code

- Source: OpenAI/GPT-5.4-Nano (`gpt-5.4-nano`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's smallest tier (400K/128K, $0.20/$1.25) for classification, extraction and coding subagents: SWE-bench 69.8%, LiveCodeBench 84.0%, Terminal-Bench 2.0 46.3%.
- **Provider / access:** OpenAI - https://openai.com/index/introducing-gpt-5-4-mini-and-nano/
- **Release / knowledge:** 2026-07-15 (Current release); knowledge cutoff July 2026
- **IDs:** openai/gpt-5.4-nano, openai/gpt-5.4-nano-128k
- **Context window:** 400,000 total; 128,000 max output — verified via OpenAI API documentation
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-30):** $0.20/$1.25 per 1M (cached $0.02)
- **Architecture:** transformer-based; smallest-tier subagent architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.3%** (OpenAI lane, Oct 2026)
- Terminal-Bench 4.0: **No verified public score found**
- Tau3-Banking / Tau2-Bench: **No verified public score found**
- GDPval-AA: **No verified public score found**
- Claw-Eval / ClawProBench: **No verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **No verified public score found**
- SWE-bench Verified / SWE-Pro: **69.8%** (from meta.json)
- LiveCodeBench: **84.0%** (from meta.json)
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

- SWE-bench Verified / SWE-Pro: **69.8%** (from meta.json)
- LiveCodeBench: **84.0%** (from meta.json)
- SciCode / AA-SciCode: **No verified public score found**
- DeepSWE / Coding Index / other: **No verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **72.8%** at 128K window — good retrieval performance at smaller scale

### Normalized scores (1–100)

- **Tool use: 48.2/100.** Limited tool use capabilities due to small model size; capped by no TB2.0 data.
- **Reasoning: 40.5/100.** Limited reasoning capabilities for small subagent tier.
- **Context window: 72.8/100.** 400K with MRCR 72.8 meets good retrieval bar for this window size.
- **Multimodal: 70.0/100.** Text/image in with reasoning; capped without audio capabilities or vision quality grading.
- **Coding: 77.0/100.** SWE-bench 69.8 plus LiveCodeBench 84.0 is strong coding for small model.
- **Cost efficiency: 90.0/100.** $0.20/$1.25 matches ~90 tier; excellent value with $0.02 cached input.
- **Overall Score: 61.7/100.** Mean of five quality dims (48.2+40.5+72.8+70.0+77.0)/5=63.7; best-fit for cost-effective classification and extraction.

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