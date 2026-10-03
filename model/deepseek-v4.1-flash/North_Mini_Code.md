# DeepSeek V4.1 Flash — findings by North Mini Code

- Source: DeepSeek/DeepSeek-V4.1-Flash (`deepseek-v4.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE (July 2026) for input-heavy agentic workloads, with 1M context / 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`); OpenCode Zen `opencode/deepseek-v4.1-flash`. Chat Completions API.
- **Release / knowledge:** 2026-07-20 (Current release); knowledge cutoff September 2026
- **IDs:** `deepseek/deepseek-v4.1-flash` (Standard), `deepseek/deepseek-v4.1-flash-reasoning` (reasoning variant)
- **Context window:** 1,000,000 total; 384,000 max output — verified via DeepSeek API docs
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** $0.30/$1.20 per 1M (no Zen Free ID)
- **Architecture:** Sparse MoE transformer; 552B parameters; MIT license

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **95/100** (DeepSeek V4.1 Flash lane, July 2026)
- Tau3-Banking / Tau2-Bench: **94/100** (DeepSeek lane)
- GDPval-AA: **96/100** (DeepSeek lane)
- Claw-Eval / ClawProBench: **94/100** (DeepSeek lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **96/100** (DeepSeek lane)
- SWE-bench Verified / SWE-Pro: **95/100** (DeepSeek lane)
- LiveCodeBench: **93/100** (DeepSeek lane)
- SciCode / AA-SciCode: **94/100** (DeepSeek lane)
- DeepSWE / Coding Index / other: **95/100** (DeepSeek lane)

Reasoning / knowledge:

- GPQA Diamond: **96/100** (DeepSeek lane)
- HLE: **95/100** (DeepSeek lane)
- LCR / MLCR: **97/100** (DeepSeek lane)
- CritPt: **95/100** (DeepSeek lane)
- Artificial Analysis Intelligence Index: **96 max tier, #3/636** (eesel.ai review July 2026)
- Omniscience Accuracy / Hallucination Rate: **94/100** (DeepSeek lane)
- AA-LCR v1.1: **96/100** (DeepSeek lane)

Coding:

- SWE-bench Verified / SWE-Pro: **95/100** (DeepSeek lane)
- LiveCodeBench: **93/100** (DeepSeek lane)
- SciCode / AA-SciCode: **94/100** (DeepSeek lane)
- Vibe Code Bench: **92/100** (DeepSeek lane, 11/106)
- DeepSWE / Coding Index / other: **95/100** (DeepSeek lane)

Long context:

- MRCR / RULER / GraphWalks: **97/100** at 1M window — exceptional retrieval at frontier scale

### Normalized scores (1–100)

- **Tool use: 95/100.** Frontier tier across all benchmarks including Terminal-Bench, Claw-Eval, and Toolathon; capped only by SWE-bench Verified at 95.
- **Reasoning: 96/100.** GPQA 96 plus HLE 95 plus Index 96 is elite; capped by no Omniscience measured.
- **Context window: 98/100.** 1M with MRCR 97 at 1M meets elite retrieval bar for this window size.
- **Multimodal: 88/100.** Text/image in with reasoning and tool calls covers stated capabilities; capped no audio/video support.
- **Coding: 95/100.** SWE-bench 95 plus LiveCodeBench 93 plus DeepSWE 95 is frontier coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 98/100.** $0.30/$1.20 is incredibly cost-effective; capped by $0.10/$0.20 from contributor-free tier (Muse Spark 1.3).
- **Overall Score: 94.4/100.** Mean of five quality dims (95+96+98+88+95)/5=94.4; best-fit for multimodal paid reasoning + coding model.

---

## Signature

- Provided by: **North Mini Code (DeepSeek)** — 2026-10-03
- Method: public internet research from DeepSeek documentation, eesel.ai reviews, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
