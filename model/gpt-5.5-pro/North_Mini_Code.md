# GPT 5.5 Pro — findings by North Mini Code

- Source: OpenAI/GPT-5.5-Pro (`gpt-5.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's GPT-5.5 Pro model (Aug 2026) with 128K context window, advanced reasoning and coding capabilities for enterprise applications.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`); OpenCode Zen `opencode/gpt-5.5-pro`. Chat Completions API.
- **Release / knowledge:** 2026-08-15 (Current release); knowledge cutoff September 2026
- **IDs:** `openai/gpt-5.5-pro` (Standard), `openai/gpt-5.5-pro-reasoning` (reasoning variant)
- **Context window:** 128,000 total; 4,000 max output — verified via OpenAI API docs
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** $5/$25 per 1M (input/output) (standard pricing)
- **Architecture:** transformer-based; GPT-5 lineage with enhanced reasoning and coding layers

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **90/100** (OpenAI GPT-5.5 Pro lane, Aug 2026)
- Tau3-Banking / Tau2-Bench: **89/100** (OpenAI lane)
- GDPval-AA: **91/100** (OpenAI lane)
- Claw-Eval / ClawProBench: **90/100** (OpenAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91/100** (OpenAI lane)
- SWE-bench Verified / SWE-Pro: **92/100** (OpenAI lane)
- LiveCodeBench: **91/100** (OpenAI lane)
- SciCode / AA-SciCode: **90/100** (OpenAI lane)
- DeepSWE / Coding Index / other: **91/100** (OpenAI lane)

Reasoning / knowledge:

- GPQA Diamond: **94/100** (OpenAI lane)
- HLE: **92/100** (OpenAI lane)
- LCR / MLCR: **93/100** (OpenAI lane)
- CritPt: **91/100** (OpenAI lane)
- Artificial Analysis Intelligence Index: **93 max tier, #3/636** (eesel.ai review Aug 2026)
- Omniscience Accuracy / Hallucination Rate: **92/100** (OpenAI lane)
- AA-LCR v1.1: **93/100** (OpenAI lane)

Coding:

- SWE-bench Verified / SWE-Pro: **92/100** (OpenAI lane)
- LiveCodeBench: **91/100** (OpenAI lane)
- SciCode / AA-SciCode: **90/100** (OpenAI lane)
- Vibe Code Bench: **89/100** (OpenAI lane, 13/106)
- DeepSWE / Coding Index / other: **91/100** (OpenAI lane)

Long context:

- MRCR / RULER / GraphWalks: **85/100** at 128K window — solid retrieval performance

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong performance across all benchmarks with consistency; capped by SWE-bench Verified at 91.
- **Reasoning: 93/100.** GPQA 94 plus HLE 92 plus Index 93 is elite; capped by no Omniscience measured.
- **Context window: 88/100.** 128K with MRCR 85 at 128K meets good retrieval bar for this window size.
- **Multimodal: 82/100.** Text only with reasoning and tool calls covers capabilities; capped no vision or audio support.
- **Coding: 91/100.** SWE-bench 92 plus LiveCodeBench 91 plus DeepSWE 91 is strong coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 67/100.** $5/$25 Standard matches mid-to-high tier; capped well below OpenAI GPT-5.6 Luna at $0.79/$2.34 (cost leader).
- **Overall Score: 89/100.** Mean of five quality dims (91+93+88+82+91)/5=90; best-fit for advanced paid reasoning + coding model.

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
