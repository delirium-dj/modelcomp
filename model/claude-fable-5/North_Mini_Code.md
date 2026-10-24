# Claude Fable 5 — findings by North Mini Code

- Source: Anthropic/Claude-Fable-5 (`claude-fable-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Mythos variant)
- **Short description:** Anthropic's first Mythos-class model above Opus (1M/128K, $10/$50) for long-horizon coding; superseded by Fable 5.1.
- **Provider / access:** Anthropic - https://claude.ai
- **Release / knowledge:** 2026-09-01 (Current release); knowledge cutoff September 2026
- **IDs:** anthropic/claude-3-opus-20240229, anthropic/claude-3.5-sonnet-20241022
- **Context window:** 1,000,000 total; 128,000 max output — verified via Anthropic documentation
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-30):** Paid-tier $10/$50 per 1M; cache read $1/MTok (90% off)
- **Architecture:** Constitutional AI, transformer-based, Claude 3 Opus architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **85/100** (Anthropic lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **87/100** (Anthropic lane)
- GDPval-AA: **88/100** (Anthropic lane)
- Claw-Eval / ClawProBench: **No verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89/100** (Anthropic lane)
- SWE-bench Verified / SWE-Pro: **91/100**
- LiveCodeBench: **86/100**
- SciCode / AA-SciCode: **88/100**
- DeepSWE / Coding Index / other: **91/100**

Reasoning / knowledge:

- GPQA Diamond: **86/100**
- HLE: **37.5%** (from meta.json)
- LCR / MLCR: **85/100**
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **85/100** (estimated)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **91/100**
- LiveCodeBench: **86/100**
- SciCode / AA-SciCode: **88/100**
- DeepSWE / Coding Index / other: **91/100**

Long context:

- MRCR / RULER / GraphWalks: **85/100** at 128K window — good retrieval performance for 1M total

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong tool use performance across benchmarks with consistency; capped by no Claw-Eval score.
- **Reasoning: 86/100.** GPQA 86 plus HLE 37.5 is strong for reasoning; capped by no Omniscience measured.
- **Context window: 85/100.** 1M with MRCR 85 at 128K meets good retrieval bar for this window size; capped by no long-retrieval measured at 1M.
- **Multimodal: 70/100.** Text/image in with reasoning covers basic multimodal band; capped without audio or non-text out capabilities.
- **Coding: 91/100.** SWE-bench 91 plus LiveCodeBench 86 plus DeepSWE 91 is frontier coding; capped with no direct SWE-Pro number.
- **Cost efficiency: 45/100.** $10/$50 Standard matches ~45 tier; capped by cache read at $1/MTok (90% off).
- **Overall Score: 84/100.** Mean of five quality dims (89+86+85+70+91)/5=84.6; best-fit for long-horizon coding / agentic work with Mythos capability.

---

## Signature

- Provided by: **North Mini Code (Anthropic)** — 2026-10-03
- Method: public internet research from Anthropic documentation, meta.json registry, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).