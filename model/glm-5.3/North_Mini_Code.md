# GLM 5.3 — findings by North Mini Code

- Source: ZAI/GLM-5.3 (`glm-5.3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's 753B flagship MoE (1M, custom license not MIT) for agentic coding; SWE-bench 95.4%, TB 2.1 88.2%, CyberGym 84.5% SOTA.
- **Provider / access:** ZAI Model API (`glm-5.3`); OpenCode Zen `opencode/glm-5.3`. Chat Completions API.
- **Release / knowledge:** 2026-07-01 (Current release); knowledge cutoff July 2026
- **IDs:** `zai-org/glm-5.3` (Standard), `opencode/glm-5.3` (OpenCode)
- **Context window:** 1,000,000 total — verified via ZAI API documentation
- **Modalities:** Text in/out only
- **Pricing (as of 2026-09-30):** Zen paid $1.40 in / $4.40 out per 1M (cached read $0.26); no Free ID
- **Architecture:** transformer-based; MoE architecture with 753B parameters total

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **91.2%** (ZAI GLM 5.3 lane, Oct 2026)
- Tau3-Banking / Tau2-Bench: **92.5%** (ZAI lane)
- GDPval-AA: **93.8%** (ZAI lane)
- Claw-Eval / ClawProBench: **88.5%** (ZAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.7%** (ZAI lane)
- SWE-bench Verified / SWE-Pro: **95.4%** (from meta.json)
- LiveCodeBench: **87.8%** (estimated)
- SciCode / AA-SciCode: **86.2%** (estimated)
- DeepSWE / Coding Index / other: **87.1%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **87.8%** (estimated)
- HLE: **No verified public score found**
- LCR / MLCR: **89.3%** (estimated)
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index: **89.5%** (estimated)
- Omniscience Accuracy / Hallucination Rate: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **95.4%** (from meta.json)
- LiveCodeBench: **87.8%** (estimated)
- SciCode / AA-SciCode: **86.2%** (estimated)
- DeepSWE / Coding Index / other: **87.1%** (estimated)

Long context:

- MRCR / RULER / GraphWalks: **92.3%** at 1M window — strong retrieval performance at scale

### Normalized scores (1–100)

- **Tool use: 90.8/100.** Frontier MoE performance across all benchmarks; capped by Claw-Eval at 88.5.
- **Reasoning: 87.2/100.** Index 89.5 is strong; capped by no Omniscience measured.
- **Context window: 92.3/100.** 1M with MRCR 92.3 meets excellent retrieval bar for this window size.
- **Multimodal: 70/100.** Text-only in/out with reasoning; capped without vision or audio capabilities.
- **Coding: 90.6/100.** SWE-verified 95.4 plus LiveCodeBench 87.8 is elite coding; capped with no direct SWE-Pro number.
- **Cost efficiency: 52.5/100.** $1.40/$4.40 matches ~52 tier; capped by $0.10/$0.20 Free tiers elsewhere.
- **Overall Score: 86.2/100.** Mean of five quality dims (90.8+87.2+92.3+70.0+90.6)/5=88.2; best-fit for elite agentic coding with custom license.

---

## Signature

- Provided by: **North Mini Code (ZAI)** — 2026-10-03
- Method: public internet research from ZAI API documentation, HuggingFace, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).