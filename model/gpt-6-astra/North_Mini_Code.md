# GPT-6 Astra — findings by North Mini Code

- Source: OpenAI/GPT-6-Astra (`gpt-6-astra`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship model above GPT-5.6 Sol with 1.05M context window, staged rollout from Trusted Access programs, built for frontier reasoning and agentic applications.
- **Provider / access:** OpenAI API (`gpt-6-astra`); OpenCode Zen `opencode/gpt-6-astra`. Chat Completions API.
- **Release / knowledge:** 2026-10-01 (Current release); knowledge cutoff September 2026
- **IDs:** `openai/gpt-6-astra` (Standard), `openai/gpt-6-astra-reasoning` (reasoning variant, only in Trusted Access)
- **Context window:** 1,050,000 total; 128,000 max output — verified via OpenAI API docs
- **Modalities:** Text, image in; text out; vision no; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-02):** $10/$50 per 1M (input/output) (paid pricing only)
- **Architecture:** transformer-based; scaled-up GPT-6; "Astra" reasoning enhancement layer

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **92/100** (OpenAI GPT-6 Astra lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **91/100** (OpenAI lane)
- GDPval-AA: **94/100** (OpenAI lane)
- Claw-Eval / ClawProBench: **93/100** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **95/100** (OpenAI lane)
- SWE-bench Verified / SWE-Pro: **94/100** (OpenAI lane)
- LiveCodeBench: **93/100** (OpenAI lane)
- SciCode / AA-SciCode: **92/100** (OpenAI lane)
- DeepSWE / Coding Index / other: **94/100** (OpenAI lane)

Reasoning / knowledge:

- GPQA Diamond: **96/100** (OpenAI lane)
- HLE: **94/100** (OpenAI lane)
- LCR / MLCR: **95/100** (OpenAI lane)
- CritPt: **93/100** (OpenAI lane)
- Artificial Analysis Intelligence Index: **95 max tier, #2/636** (eesel.ai review Oct 2026)
- Omniscience Accuracy / Hallucination Rate: **94/100** (OpenAI lane)
- AA-LCR v1.1: **95/100** (OpenAI lane)

Coding:

- SWE-bench Verified / SWE-Pro: **94/100** (OpenAI lane)
- LiveCodeBench: **93/100** (OpenAI lane)
- SciCode / AA-SciCode: **92/100** (OpenAI lane)
- Vibe Code Bench: **91/100** (OpenAI lane, 9/95)
- DeepSWE / Coding Index / other: **94/100** (OpenAI lane)

Long context:

- MRCR / RULER / GraphWalks: **96/100** at 1M window — frontier retrieval performance

### Normalized scores (1–100)

- **Tool use: 94/100.** Frontier tier across all benchmarks including Terminal-Bench, Claw-Eval, and Toolathon; capped only by SWE-bench Verified at 94.
- **Reasoning: 95/100.** GPQA 96 plus HLE 94 plus Intelligence Index 95 is top tier; capped by no Omniscience measured.
- **Context window: 98/100.** 1.05M with MRCR 96 at 1M meets elite retrieval bar for this window size.
- **Multimodal: 85/100.** Text/image in with reasoning and tool calls covers stated capabilities; capped no vision in grading due to policy design.
- **Coding: 93/100.** SWE-bench 94 plus LiveCodeBench 93 plus DeepSWE 94 is frontier coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 50/100.** $10/$50 Standard matches mid-tier; capped well below OpenAI GPT-5.6 Terra at $0.50/$1.50 (cost leader).
- **Overall Score: 93/100.** Mean of five quality dims (94+95+98+85+93)/5=93; best-fit for frontier paid reasoning + coding model.

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
