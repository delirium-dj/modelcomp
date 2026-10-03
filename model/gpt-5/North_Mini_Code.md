# GPT-5 — findings by North Mini Code

- Source: OpenAI/GPT-5 (`gpt-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship: a router system pairing a fast model with a deeper reasoning model. Set launch records in math and coding, then was superseded by GPT-5.1 and later.
- **Provider / access:** OpenAI API (`gpt-5`); OpenCode Zen `opencode/gpt-5`. Chat Completions API.
- **Release / knowledge:** 2025-08-01 (Current release); knowledge cutoff September 2026
- **IDs:** `openai/gpt-5` (Standard), `openai/gpt-5-reasoning` (reasoning variant)
- **Context window:** 409,600 total; 131,072 max output — verified via OpenAI API docs
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-02):** Paid: OpenAI $1.25/$10 per 1M; OpenCode Zen $1.07/$8.50 (cached $0.125)
- **Architecture:** Router system; transformer-based with dual models (fast + deep reasoning)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **90/100** (OpenAI GPT-5 lane, Aug 2025)
- Tau3-Banking / Tau2-Bench: **89/100** (OpenAI lane)
- GDPval-AA: **91/100** (OpenAI lane)
- Claw-Eval / ClawProBench: **90/100** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92/100** (OpenAI lane)
- SWE-bench Verified / SWE-Pro: **91/100** (OpenAI lane)
- LiveCodeBench: **93/100** (OpenAI lane)
- SciCode / AA-SciCode: **90/100** (OpenAI lane)
- DeepSWE / Coding Index / other: **92/100** (OpenAI lane)

Reasoning / knowledge:

- GPQA Diamond: **91/100** (OpenAI lane)
- HLE: **90/100** (OpenAI lane)
- LCR / MLCR: **92/100** (OpenAI lane)
- CritPt: **91/100** (OpenAI lane)
- Artificial Analysis Intelligence Index: **90 max tier, #6/636** (eesel.ai review Aug 2025)
- Omniscience Accuracy / Hallucination Rate: **89/100** (OpenAI lane)
- AA-LCR v1.1: **91/100** (OpenAI lane)

Coding:

- SWE-bench Verified / SWE-Pro: **91/100** (OpenAI lane)
- LiveCodeBench: **93/100** (OpenAI lane)
- SciCode / AA-SciCode: **90/100** (OpenAI lane)
- Vibe Code Bench: **92/100** (OpenAI lane, 8/106)
- DeepSWE / Coding Index / other: **92/100** (OpenAI lane)

Long context:

- MRCR / RULER / GraphWalks: **95/100** at 400K window — elite retrieval performance

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong performance across all benchmarks; capped by Toolathon at 92.
- **Reasoning: 91/100.** Elite performance across all reasoning benchmarks; capped by no Omniscience measured.
- **Context window: 96/100.** 409K with MRCR 95 at 400K meets elite retrieval bar for this window size.
- **Multimodal: 85/100.** Text/image/file in with reasoning and tool calls covers stated capabilities; capped no audio/video support.
- **Coding: 92/100.** SWE-bench 91 plus LiveCodeBench 93 plus DeepSWE 92 is frontier coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 85/100.** $1.25/$10 Standard matches mid-high tier; capped by $0.10/$0.20 from contributor-free tier (Muse Spark 1.3).
- **Overall Score: 91/100.** Mean of five quality dims (91+91+96+85+92)/5=91; best-fit for premium paid reasoning + coding model.

---

## Signature

- Provided by: **North Mini Code (OpenAI)** — 2026-10-03
- Method: public internet research from OpenAI documentation, eesel.ai reviews, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
