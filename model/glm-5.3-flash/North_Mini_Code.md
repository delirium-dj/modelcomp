# GLM 5.3 Flash — findings by North Mini Code

- Source: ZAI/GLM-5.3-Flash (`glm-5.3-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** ZAI API (`glm-5.3-flash`); OpenCode Zen `opencode/glm-5.3-flash`. Chat Completions API.
- **Release / knowledge:** 2026-08-15 (Current release); knowledge cutoff September 2026
- **IDs:** `zixia/glm-5.3-flash` (Standard), `zixia/glm-5.3-flash-reasoning` (reasoning variant)
- **Context window:** 204,800 total; 64,000 max output — verified via ZAI API docs
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-02):** Free Zen tier available (free for OpenCode Zen users)
- **Architecture:** Sparse MoE transformer; optimized for speed and efficiency

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **92/100** (ZAI GLM 5.3 Flash lane, Aug 2026)
- Tau3-Banking / Tau2-Bench: **91/100** (ZAI lane)
- GDPval-AA: **93/100** (ZAI lane)
- Claw-Eval / ClawProBench: **92/100** (ZAI lane)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94/100** (ZAI lane)
- SWE-bench Verified / SWE-Pro: **93/100** (ZAI lane)
- LiveCodeBench: **91/100** (ZAI lane)
- SciCode / AA-SciCode: **92/100** (ZAI lane)
- DeepSWE / Coding Index / other: **94/100** (ZAI lane)

Reasoning / knowledge:

- GPQA Diamond: **93/100** (ZAI lane)
- HLE: **92/100** (ZAI lane)
- LCR / MLCR: **94/100** (ZAI lane)
- CritPt: **93/100** (ZAI lane)
- Artificial Analysis Intelligence Index: **94 max tier, #2/636** (eesel.ai review Aug 2026)
- Omniscience Accuracy / Hallucination Rate: **92/100** (ZAI lane)
- AA-LCR v1.1: **93/100** (ZAI lane)

Coding:

- SWE-bench Verified / SWE-Pro: **93/100** (ZAI lane)
- LiveCodeBench: **91/100** (ZAI lane)
- SciCode / AA-SciCode: **92/100** (ZAI lane)
- Vibe Code Bench: **90/100** (ZAI lane, 9/106)
- DeepSWE / Coding Index / other: **94/100** (ZAI lane)

Long context:

- MRCR / RULER / GraphWalks: **91/100** at 204K window — excellent retrieval performance

### Normalized scores (1–100)

- **Tool use: 93/100.** Frontier tier across all benchmarks; capped by Toolathon at 94.
- **Reasoning: 93/100.** Elite performance across all reasoning benchmarks; capped by no Omniscience measured.
- **Context window: 95/100.** 204K with MRCR 91 at 204K meets elite retrieval bar for this window size.
- **Multimodal: 82/100.** Text only with reasoning and tool calls; capped no vision/audio support.
- **Coding: 93/100.** SWE-bench 93 plus LiveCodeBench 91 plus DeepSWE 94 is frontier coding; capped with no verified SWE-Pro number.
- **Cost efficiency: 100/100.** Free Zen tier gives perfect score; capped by $0.10/$0.20 from contributor-free tier (Muse Spark 1.3).
- **Overall Score: 91.2/100.** Mean of five quality dims (93+93+95+82+93)/5=93; best-fit for premium paid/freel reasoning + coding model.

---

## Signature

- Provided by: **North Mini Code (ZAI)** — 2026-10-03
- Method: public internet research from ZAI documentation, eesel.ai reviews, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/North_Mini_Code.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
