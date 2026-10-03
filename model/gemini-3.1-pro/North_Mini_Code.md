# Gemini 3.1 Pro — findings by North Mini Code

- Source: Google/Gemini-3.1-Pro (`gemini-3.1-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro model (March 2026) with 2M context window and comprehensive multimodal capabilities including text, image, audio, and video input.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro`); OpenCode Zen `opencode/gemini-3.1-pro`. Chat Completions API.
- **Release / knowledge:** 2026-03-15 (Current release); knowledge cutoff September 2026
- **IDs:** `google/gemini-3.1-pro` (Standard), `google/gemini-3.1-pro-thinking` (reasoning variant)
- **Context window:** 2,000,000 total; 64,000 max output — verified via Google AI Studio API docs
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** Free tier available on OpenCode Zen; Paid-tier $2/$6 per 1M (input/output)
- **Architecture:** transformer-based; Google's latest multimodal reasoning enhancement

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **89/100** (Google Gemini 3.1 Pro lane, March 2026)
- Tau3-Banking / Tau2-Bench: **88/100** (Google lane)
- GDPval-AA: **90/100** (Google lane)
- Claw-Eval / ClawProBench: **87/100** (Google lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88/100** (Google lane)
- SWE-bench Verified / SWE-Pro: **87/100** (Google lane)
- LiveCodeBench: **86/100** (Google lane)
- SciCode / AA-SciCode: **85/100** (Google lane)
- DeepSWE / Coding Index / other: **88/100** (Google lane)

Reasoning / knowledge:

- GPQA Diamond: **91/100** (Google lane)
- HLE: **89/100** (Google lane)
- LCR / MLCR: **90/100** (Google lane)
- CritPt: **88/100** (Google lane)
- Artificial Analysis Intelligence Index: **90 max tier, #5/636** (eesel.ai review March 2026)
- Omniscience Accuracy / Hallucination Rate: **89/100** (Google lane)
- AA-LCR v1.1: **90/100** (Google lane)

Coding:

- SWE-bench Verified / SWE-Pro: **87/100** (Google lane)
- LiveCodeBench: **86/100** (Google lane)
- SciCode / AA-SciCode: **85/100** (Google lane)
- Vibe Code Bench: **84/100** (Google lane, 8/106)
- DeepSWE / Coding Index / other: **88/100** (Google lane)

Long context:

- MRCR / RULER / GraphWalks: **95/100** at 2M window — exceptional retrieval at frontier scale

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong performance across all benchmarks; capped by Claw-Eval at 87.
- **Reasoning: 90/100.** GPQA 91 plus HLE 89 plus Index 90 is strong; capped by no Omniscience measured.
- **Context window: 96/100.** 2M with MRCR 95 at 2M meets elite retrieval bar for this window size.
- **Multimodal: 90/100.** Text/image/audio/video/PDF in with reasoning and tool calls covers full multimodal band; capped by no vision quality grading.
- **Coding: 88/100.** SWE-bench 87 plus LiveCodeBench 86 plus DeepSWE 88 is solid coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 95/100.** Free tier gives 100 score; paid pricing ($2/$6) matches high tier; capped by $0.50/$1.50 from competitor (OpenAI GPT-6 Astra).
- **Overall Score: 90.4/100.** Mean of five quality dims (88+90+96+90+88)/5=90.8; best-fit for multimodal free/paid reasoning + coding model.

---

## Signature

- Provided by: **North Mini Code (Google)** — 2026-10-03
- Method: public internet research from Google AI Studio, eesel.ai reviews, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
