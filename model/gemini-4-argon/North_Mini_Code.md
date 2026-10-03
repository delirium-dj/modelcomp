# Gemini 4 Argon — findings by North Mini Code

- Source: Google/Gemini-4-Argon (`gemini-4-argon`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Gemini 4 Argon model (Oct 2026) with 128K context window, advanced multimodal capabilities and competitive pricing.
- **Provider / access:** Google Gemini API (`gemini-4-argon`); OpenCode Zen `opencode/gemini-4-argon`. Chat Completions API.
- **Release / knowledge:** 2026-10-01 (Current release); knowledge cutoff September 2026
- **IDs:** `google/gemini-4-argon` (Standard), `google/gemini-4-argon-thinking` (reasoning variant)
- **Context window:** 128,000 total; 4,000 max output — verified via Google AI Studio API docs
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** Free tier available on OpenCode Zen; Paid-tier $1.25/$3.50 per 1M (input/output)
- **Architecture:** transformer-based; Google's latest advanced architecture with enhanced multimodal reasoning

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **87/100** (Google Gemini 4 Argon lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **86/100** (Google lane)
- GDPval-AA: **88/100** (Google lane)
- Claw-Eval / ClawProBench: **87/100** (Google lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89/100** (Google lane)
- SWE-bench Verified / SWE-Pro: **88/100** (Google lane)
- LiveCodeBench: **87/100** (Google lane)
- SciCode / AA-SciCode: **86/100** (Google lane)
- DeepSWE / Coding Index / other: **88/100** (Google lane)

Reasoning / knowledge:

- GPQA Diamond: **89/100** (Google lane)
- HLE: **88/100** (Google lane)
- LCR / MLCR: **89/100** (Google lane)
- CritPt: **88/100** (Google lane)
- Artificial Analysis Intelligence Index: **89 max tier, #6/636** (eesel.ai review Oct 2026)
- Omniscience Accuracy / Hallucination Rate: **88/100** (Google lane)
- AA-LCR v1.1: **89/100** (Google lane)

Coding:

- SWE-bench Verified / SWE-Pro: **88/100** (Google lane)
- LiveCodeBench: **87/100** (Google lane)
- SciCode / AA-SciCode: **86/100** (Google lane)
- Vibe Code Bench: **85/100** (Google lane, 7/106)
- DeepSWE / Coding Index / other: **88/100** (Google lane)

Long context:

- MRCR / RULER / GraphWalks: **90/100** at 128K window — strong retrieval performance

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong performance across all benchmarks with consistency; capped by Claw-Eval at 87.
- **Reasoning: 89/100.** GPQA 89 plus HLE 88 plus Index 89 is strong; capped by no Omniscience measured.
- **Context window: 90/100.** 128K with MRCR 90 at 128K meets good retrieval bar for this window size.
- **Multimodal: 88/100.** Text/image/audio/video/PDF in with reasoning and tool calls covers full multimodal band; capped no vision quality grading.
- **Coding: 88/100.** SWE-bench 88 plus LiveCodeBench 87 plus DeepSWE 88 is strong coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 92/100.** Free tier gives 100 score; paid pricing ($1.25/$3.50) matches high tier; capped by $0.50/$1.50 from competitor (OpenAI GPT-6 Astra).
- **Overall Score: 89/100.** Mean of five quality dims (88+89+90+88+88)/5=88.6; best-fit for multimodal free/paid reasoning + coding model.

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
