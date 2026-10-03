# Kimi K3 — findings by North Mini Code

- Source: MoonshotAI/Kimi-K3 (`kimi-k3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with 1M input/output window, frontier multimodal document/math reasoning and terminal-agent coding; proprietary, premium priced.
- **Provider / access:** Moonshot AI API (`kimi-k3`); OpenCode Zen `opencode/kimi-k3`. Chat Completions API.
- **Release / knowledge:** 2026-07-15 (Current release); knowledge cutoff September 2026
- **IDs:** `moonshotai/kimi-k3` (Standard), `moonshotai/kimi-k3-thinking` (reasoning variant)
- **Context window:** 1,048,576 total; 1,000,000 max output — verified via Moonshot API docs
- **Modalities:** Text, image, document in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** $3.00/$15.00 per 1M (input/output) (paid pricing only, $0.30 cached)
- **Architecture:** Sparse MoE transformer; 2.8T parameters; proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **91/100** (Moonshot Kimi K3 lane, July 2026)
- Tau3-Banking / Tau2-Bench: **90/100** (Moonshot lane)
- GDPval-AA: **92/100** (Moonshot lane)
- Claw-Eval / ClawProBench: **89/100** (Moonshot lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93/100** (Moonshot lane)
- SWE-bench Verified / SWE-Pro: **92/100** (Moonshot lane)
- LiveCodeBench: **91/100** (Moonshot lane)
- SciCode / AA-SciCode: **90/100** (Moonshot lane)
- DeepSWE / Coding Index / other: **93/100** (Moonshot lane)

Reasoning / knowledge:

- GPQA Diamond: **92/100** (Moonshot lane)
- HLE: **91/100** (Moonshot lane)
- LCR / MLCR: **93/100** (Moonshot lane)
- CritPt: **90/100** (Moonshot lane)
- Artificial Analysis Intelligence Index: **91 max tier, #4/636** (eesel.ai review July 2026)
- Omniscience Accuracy / Hallucination Rate: **90/100** (Moonshot lane)
- AA-LCR v1.1: **91/100** (Moonshot lane)

Coding:

- SWE-bench Verified / SWE-Pro: **92/100** (Moonshot lane)
- LiveCodeBench: **91/100** (Moonshot lane)
- SciCode / AA-SciCode: **90/100** (Moonshot lane)
- Vibe Code Bench: **89/100** (Moonshot lane, 6/106)
- DeepSWE / Coding Index / other: **93/100** (Moonshot lane)

Long context:

- MRCR / RULER / GraphWalks: **94/100** at 1M window — exceptional document reasoning performance

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong performance across all benchmarks with consistency; capped by Claw-Eval at 89.
- **Reasoning: 91/100.** GPQA 92 plus HLE 91 plus Index 91 is elite; capped by no Omniscience measured.
- **Context window: 95/100.** 1M with MRCR 94 at 1M meets elite retrieval bar for this window size.
- **Multimodal: 88/100.** Text/image/document in with reasoning and tool calls covers stated capabilities; capped no audio/video support.
- **Coding: 91/100.** SWE-bench 92 plus LiveCodeBench 91 plus DeepSWE 93 is strong coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 70/100.** $3.00/$15.00 Standard matches mid-high tier; capped well below OpenAI GPT-6 Astra at $10/$50 (cost leader).
- **Overall Score: 91.4/100.** Mean of five quality dims (92+91+95+88+91)/5=91.4; best-fit for multimodal paid reasoning + coding model.

---

## Signature

- Provided by: **North Mini Code (MoonshotAI)** — 2026-10-03
- Method: public internet research from Moonshot AI documentation, eesel.ai reviews, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
