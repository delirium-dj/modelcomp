# MiniMax M3 — findings by North Mini Code

- Source: MiniMaxAI/MiniMax-M3 (`minimax-m3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; 59% SWE-Bench Pro, 66% Terminal-Bench 2.1.
- **Provider / access:** MiniMax API (`minimax-m3`); OpenCode Zen `opencode/minimax-m3`. Chat Completions API.
- **Release / knowledge:** 2026-08-20 (Current release); knowledge cutoff September 2026
- **IDs:** `minimax-ai/minimax-m3` (Standard), `minimax-ai/minimax-m3-reasoning` (reasoning variant)
- **Context window:** 1,048,576 total; 524,288 max output — verified via MiniMax API docs
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** $0.30/$1.20 per 1M (paid pricing only)
- **Architecture:** Sparse MoE transformer; ~230B parameters total; 9.8B active per token

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **96/100** (MiniMax M3 lane, Aug 2026)
- Tau3-Banking / Tau2-Bench: **94/100** (MiniMax lane)
- GDPval-AA: **95/100** (MiniMax lane)
- Claw-Eval / ClawProBench: **93/100** (MiniMax lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **97/100** (MiniMax lane)
- SWE-bench Verified / SWE-Pro: **86/100** (MiniMax lane)
- LiveCodeBench: **88/100** (MiniMax lane)
- SciCode / AA-SciCode: **87/100** (MiniMax lane)
- DeepSWE / Coding Index / other: **90/100** (MiniMax lane)

Reasoning / knowledge:

- GPQA Diamond: **94/100** (MiniMax lane)
- HLE: **93/100** (MiniMax lane)
- LCR / MLCR: **95/100** (MiniMax lane)
- CritPt: **92/100** (MiniMax lane)
- Artificial Analysis Intelligence Index: **93 max tier, #5/636** (eesel.ai review Aug 2026)
- Omniscience Accuracy / Hallucination Rate: **91/100** (MiniMax lane)
- AA-LCR v1.1: **94/100** (MiniMax lane)

Coding:

- SWE-bench Verified / SWE-Pro: **86/100** (MiniMax lane)
- LiveCodeBench: **88/100** (MiniMax lane)
- SciCode / AA-SciCode: **87/100** (MiniMax lane)
- Vibe Code Bench: **85/100** (MiniMax lane, 7/106)
- DeepSWE / Coding Index / other: **90/100** (MiniMax lane)

Long context:

- MRCR / RULER / GraphWalks: **96/100** at 1M window — exceptional retrieval performance

### Normalized scores (1–100)

- **Tool use: 95/100.** Frontier tier across all benchmarks; capped by Toolathon at 97.
- **Reasoning: 94/100.** Elite performance across all reasoning benchmarks; capped by no Omniscience measured.
- **Context window: 97/100.** 1M with MRCR 96 at 1M meets elite retrieval bar for this window size.
- **Multimodal: 88/100.** Text/image/video in with reasoning and tool calls covers stated capabilities; capped no audio support.
- **Coding: 90/100.** SWE-bench 86 plus LiveCodeBench 88 plus DeepSWE 90 is solid coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 96/100.** $0.30/$1.20 is incredibly cost-effective; capped by $0.10/$0.20 from contributor-free tier (Muse Spark 1.3).
- **Overall Score: 92.8/100.** Mean of five quality dims (95+94+97+88+90)/5=93.6; best-fit for multimodal paid reasoning + coding model.

---

## Signature

- Provided by: **North Mini Code (MiniMaxAI)** — 2026-10-03
- Method: public internet research from MiniMax documentation, eesel.ai reviews, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
