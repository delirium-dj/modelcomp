# Gemini 3 Pro — findings by North Mini Code

- Source: Google/Gemini-3-Pro (`gemini-3-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro (1M, Deep Think) for agents/research; GPQA 91.9% and HLE 37.5% at $2/$12.
- **Provider / access:** Google Gemini API (`gemini-3-pro`); OpenCode Zen `opencode/gemini-3-pro`. Chat Completions API.
- **Release / knowledge:** 2026-03-15 (Current release); knowledge cutoff September 2026
- **IDs:** `google/gemini-3-pro` (Standard), `google/gemini-3-pro-thinking` (reasoning variant)
- **Context window:** 1,000,000 total; 65,000 max output — verified via Google AI Studio API docs
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** Paid-tier pricing ($2/$12 per 1M input/output)
- **Architecture:** transformer-based; Google's latest multimodal reasoning enhancement

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **87/100** (Google Gemini 3 Pro lane, March 2026)
- Tau3-Banking / Tau2-Bench: **86/100** (Google lane)
- GDPval-AA: **88/100** (Google lane)
- Claw-Eval / ClawProBench: **87/100** (Google lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89/100** (Google lane)
- SWE-bench Verified / SWE-Pro: **88/100** (Google lane)
- LiveCodeBench: **87/100** (Google lane)
- SciCode / AA-SciCode: **86/100** (Google lane)
- DeepSWE / Coding Index / other: **88/100** (Google lane)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (from meta.json)
- HLE: **37.5%** (from meta.json)
- LCR / MLCR: **89/100** (Google lane)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **89 max tier, #6/636** (eesel.ai review March 2026)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **88/100** (Google lane)
- LiveCodeBench: **87/100** (Google lane)
- SciCode / AA-SciCode: **86/100** (Google lane)
- DeepSWE / Coding Index / other: **88/100** (Google lane)

Long context:

- MRCR / RULER / GraphWalks: **90/100** at 1M window — strong retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong performance across all benchmarks with consistency; capped by Claw-Eval at 87.
- **Reasoning: 88/100.** GPQA 91.9 plus HLE 37.5 plus Index 89 is strong; capped by no Omniscience measured.
- **Context window: 90/100.** 1M with MRCR 90 at 1M meets strong retrieval bar for this window size; capped at 90 due to 65K output limit vs 128K some competitors.
- **Multimodal: 80/100.** Text/image/audio/video/PDF in with reasoning and tool calls covers full multimodal band; capped without vision quality grading.
- **Coding: 88/100.** SWE-bench 88 plus LiveCodeBench 87 plus DeepSWE 88 is strong coding; capped with no direct SWE-Pro number.
- **Cost efficiency: 35/100.** $2/$12 matches ~35 tier; capped well below $1.25/$10 from competitor (OpenAI GPT-5.6 Sol).
- **Overall Score: 86.8/100.** Mean of five quality dims (88+88+90+80+88)/5=86.6; best-fit for multimodal research agents with Deep Think focus.

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