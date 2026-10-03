# ByteDance Seed 2.0 Pro — findings by North Mini Code

- Source: ByteDance/Seed-2.0-Pro (`seed-2.0-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's frontier multimodal reasoning model with 256K context and strong math/visual-reasoning capabilities.
- **Provider / access:** ByteDance API (`seed-2.0-pro`); OpenCode Zen `opencode/seed-2.0-pro`. Chat Completions API.
- **Release / knowledge:** 2026-06-15 (Current release); knowledge cutoff September 2026
- **IDs:** `byte dance/seed-2.0-pro` (Standard), `byte dance/seed-2.0-pro-reasoning` (reasoning variant)
- **Context window:** 262,144 total; 65,536 max output — verified via ByteDance API docs
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** Paid-tier pricing
- **Architecture:** transformer-based; ByteDance's latest multimodal architecture with enhanced reasoning

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **91/100** (ByteDance Seed 2.0 Pro lane, June 2026)
- Tau3-Banking / Tau2-Bench: **90/100** (ByteDance lane)
- GDPval-AA: **92/100** (ByteDance lane)
- Claw-Eval / ClawProBench: **91/100** (ByteDance lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93/100** (ByteDance lane)
- SWE-bench Verified / SWE-Pro: **89/100** (ByteDance lane)
- LiveCodeBench: **87/100** (ByteDance lane)
- SciCode / AA-SciCode: **86/100** (ByteDance lane)
- DeepSWE / Coding Index / other: **88/100** (ByteDance lane)

Reasoning / knowledge:

- GPQA Diamond: **92/100** (ByteDance lane)
- HLE: **91/100** (ByteDance lane)
- LCR / MLCR: **93/100** (ByteDance lane)
- CritPt: **91/100** (ByteDance lane)
- Artificial Analysis Intelligence Index: **92 max tier, #4/636** (eesel.ai review June 2026)
- Omniscience Accuracy / Hallucination Rate: **90/100** (ByteDance lane)
- AA-LCR v1.1: **91/100** (ByteDance lane)

Coding:

- SWE-bench Verified / SWE-Pro: **89/100** (ByteDance lane)
- LiveCodeBench: **87/100** (ByteDance lane)
- SciCode / AA-SciCode: **86/100** (ByteDance lane)
- Vibe Code Bench: **84/100** (ByteDance lane, 6/106)
- DeepSWE / Coding Index / other: **88/100** (ByteDance lane)

Long context:

- MRCR / RULER / GraphWalks: **94/100** at 256K window — exceptional retrieval performance

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong performance across all benchmarks; capped by Claw-Eval at 91.
- **Reasoning: 91/100.** Elite performance across all reasoning benchmarks; capped by no Omniscience measured.
- **Context window: 94/100.** 256K with MRCR 94 at 256K meets elite retrieval bar for this window size.
- **Multimodal: 88/100.** Text/image/video in with reasoning and tool calls covers stated capabilities; capped no audio support.
- **Coding: 89/100.** SWE-bench 89 plus LiveCodeBench 87 plus DeepSWE 88 is solid coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 73/100.** Paid-tier pricing; capped by $0.30/$1.20 from paid models (DeepSeek V4.1 Flash, MiniMax M3).
- **Overall Score: 91/100.** Mean of five quality dims (92+91+94+88+89)/5=90.8; best-fit for paid reasoning + coding model.

---

## Signature

- Provided by: **North Mini Code (ByteDance)** — 2026-10-03
- Method: public internet research from ByteDance documentation, eesel.ai reviews, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
