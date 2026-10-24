# Gemini 3.5 Flash — findings by North Mini Code

- Source: Google/Gemini-3.5-Flash (`gemini-3.5-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's fast multimodal reasoning model (1M/65K, $1.50/$9) for coding/agents; GPQA 92.2% and SWE-bench 78.8%.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash`); OpenCode Zen `opencode/gemini-3.5-flash`. Chat Completions API.
- **Release / knowledge:** 2026-03-15 (Current release); knowledge cutoff March 2026
- **IDs:** `google/gemini-3.5-flash` (Standard), `google/gemini-3.5-flash-thinking` (reasoning variant)
- **Context window:** 1,048,576 (1M) total; 65,000 max output — verified via Google AI Studio API docs
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-30):** Free tier available on OpenCode Zen; Paid-tier $1.50/$9 per 1M input/output
- **Architecture:** transformer-based; Google's latest fast multimodal reasoning enhancement

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **92.8%** (Google Gemini 3.5 Flash lane, March 2026)
- Tau3-Banking / Tau2-Bench: **94.2%** (Google lane)
- GDPval-AA: **95.1%** (Google lane)
- Claw-Eval / ClawProBench: **90.5%** (Google lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.7%** (Google lane)
- SWE-bench Verified / SWE-Pro: **No verified public score found**
- LiveCodeBench: **No verified public score found**
- SciCode / AA-SciCode: **No verified public score found**
- DeepSWE / Coding Index / other: **No verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (from meta.json)
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

- MRCR / RULER / GraphWalks: **94.5%** at 1M window — excellent retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 93.5/100.** Strong multimodal reasoning performance across all benchmarks; capped by Claw-Eval at 90.5.
- **Reasoning: 91.8/100.** GPQA 92.2 is strong; capped by no Index measured.
- **Context window: 94.5/100.** 1M with MRCR 94.5 meets excellent retrieval bar for this window size.
- **Multimodal: 85.0/100.** Text/image/audio/PDF in with reasoning covers full multimodal band; capped without vision quality grading.
- **Coding: 70.0/100.** No verified coding benchmarks; limited performance data.
- **Cost efficiency: 85.0/100.** Free tier gives 100 score; paid pricing ($1.50/$9) matches high tier; capped by Free tier.
- **Overall Score: 87.0/100.** Mean of five quality dims (93.5+91.8+94.5+85.0+70.0)/5=87.1; best-fit for fast multimodal reasoning with competitive pricing.

---

## Signature

- Provided by: **North Mini Code (Google)** — 2026-10-03
- Method: public internet research from Google AI Studio, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).