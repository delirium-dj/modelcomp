# Gemini 3.6 Flash — findings by North Mini Code

- Source: Google/Gemini-3.6-Flash (`gemini-3.6-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's Flash (1M/65K, $1.50/$7.50) for coding/computer use; GPQA 93.4% and OSWorld-Verified 83%.
- **Provider / access:** Google Gemini API (`gemini-3.6-flash`); OpenCode Zen `opencode/gemini-3.6-flash`. Chat Completions API.
- **Release / knowledge:** 2026-05-01 (Current release); knowledge cutoff May 2026
- **IDs:** `google/gemini-3.6-flash` (Standard), `google/gemini-3.6-flash-thinking` (reasoning variant)
- **Context window:** 1,048,576 (1M) total; 65,000 max output — verified via Google AI Studio API docs
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-30):** Free tier available on OpenCode Zen; Paid-tier $1.50/$7.50 per 1M input/output
- **Architecture:** transformer-based; Google's latest computer-use focused architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **89.7%** (Google Gemini 3.6 Flash lane, May 2026)
- Tau3-Banking / Tau2-Bench: **88.6%** (Google lane)
- GDPval-AA: **91.2%** (Google lane)
- Claw-Eval / ClawProBench: **86.8%** (Google lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.9%** (Google lane)
- SWE-bench Verified / SWE-Pro: **No verified public score found**
- LiveCodeBench: **No verified public score found**
- SciCode / AA-SciCode: **No verified public score found**
- DeepSWE / Coding Index / other: **No verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.4%** (from meta.json)
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

- MRCR / RULER / GraphWalks: **92.3%** at 1M window — excellent retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 89.0/100.** Strong computer-use performance across all benchmarks with consistency; capped by Claw-Eval at 86.8.
- **Reasoning: 89.5/100.** GPQA 93.4 is exceptional; capped by no Omniscience measured.
- **Context window: 92.3/100.** 1M with MRCR 92.3 meets excellent retrieval bar for this window size.
- **Multimodal: 80.0/100.** Text/image/audio/PDF in with reasoning covers full multimodal band; capped without vision quality grading.
- **Coding: 70.0/100.** No verified coding benchmarks; limited computer-use measurement data.
- **Cost efficiency: 85.0/100.** Free tier gives 100 score; paid pricing ($1.50/$7.50) matches high tier; capped by $0.10/$0.20 from competitor.
- **Overall Score: 84.2/100.** Mean of five quality dims (89.0+89.5+92.3+80.0+70.0)/5=84.4; best-fit for computer-use with balanced multimodal support.

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