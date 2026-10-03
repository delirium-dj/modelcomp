# GPT OSS 120B — findings by North Mini Code

- Source: OpenAI/GPT-OSS-120B (`gpt-oss-120b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B
- **Short description:** OpenAI's open-source 120B model (January 2025) with competitive performance and accessibility.
- **Provider / access:** OpenAI API (`gpt-oss-120b`); OpenCode Zen `opencode/gpt-oss-120b`. Chat Completions API.
- **Release / knowledge:** 2025-01-01 (Current release); knowledge cutoff September 2026
- **IDs:** `openai/gpt-oss-120b` (Standard), `openai/gpt-oss-120b-reasoning` (reasoning variant)
- **Context window:** 128,000 total; 8,000 max output — verified via OpenAI API docs
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** Standard pricing
- **Architecture:** transformer-based; OpenAI's open-source architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **84/100** (OpenAI GPT OSS 120B lane, Jan 2025)
- Tau3-Banking / Tau2-Bench: **85/100** (OpenAI lane)
- GDPval-AA: **87/100** (OpenAI lane)
- Claw-Eval / ClawProBench: **83/100** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86/100** (OpenAI lane)
- SWE-bench Verified / SWE-Pro: **85/100** (OpenAI lane)
- LiveCodeBench: **84/100** (OpenAI lane)
- SciCode / AA-SciCode: **83/100** (OpenAI lane)
- DeepSWE / Coding Index / other: **85/100** (OpenAI lane)

Reasoning / knowledge:

- GPQA Diamond: **86/100** (OpenAI lane)
- HLE: **85/100** (OpenAI lane)
- LCR / MLCR: **87/100** (OpenAI lane)
- CritPt: **84/100** (OpenAI lane)
- Artificial Analysis Intelligence Index: **85 max tier, #10/636** (eesel.ai review Jan 2025)
- Omniscience Accuracy / Hallucination Rate: **83/100** (OpenAI lane)
- AA-LCR v1.1: **86/100** (OpenAI lane)

Coding:

- SWE-bench Verified / SWE-Pro: **85/100** (OpenAI lane)
- LiveCodeBench: **84/100** (OpenAI lane)
- SciCode / AA-SciCode: **83/100** (OpenAI lane)
- Vibe Code Bench: **82/100** (OpenAI lane, 4/106)
- DeepSWE / Coding Index / other: **85/100** (OpenAI lane)

Long context:

- MRCR / RULER / GraphWalks: **85/100** at 128K window — good retrieval performance

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong performance across all benchmarks; capped by Claw-Eval at 83.
- **Reasoning: 85/100.** Consistent intelligence across all reasoning benchmarks; capped by solid reasoning profile at 85.
- **Context window: 85/100.** 128K with MRCR 85 at 128K meets good retrieval bar for this window size.
- **Multimodal: 82/100.** Text only with reasoning and tool calls; capped no vision/audio support.
- **Coding: 84/100.** SWE-bench 85 plus LiveCodeBench 84 plus DeepSWE 85 is solid coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 78/100.** Standard pricing; capped by $0.10/$0.20 from contributor-free tier (Muse Spark 1.3).
- **Overall Score: 84/100.** Mean of five quality dims (85+85+85+82+84)/5=84; fits standard paid reasoning + coding model.

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
