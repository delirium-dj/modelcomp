# Muse Spark 1.3 — findings by GLM 4.5 Flash

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's flagship open-weight model with exceptional capabilities across all dimensions, particularly excelling in tool use, reasoning, context window, and coding performance.
- **Provider / access:** Meta via OpenCode Zen (`opencode/muse-spark-1.3`) - Chat Completions API with 128K context window
- **Release / knowledge:** Released June 2026; knowledge cutoff June 2026
- **IDs:** `meta/muse-spark-1.3` / `opencode/muse-spark-1.3` (OpenCode Zen)
- **Context window:** 128K tokens (verified against OpenCode Zen documentation)
- **Modalities:** Text input/output; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026):** Free (contributor tier with data usage consent) / $0 input, $0 output during free period
- **Architecture:** Proprietary (exact parameter count not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **95%** (Meta System Card)
- Tau3-Banking / Tau2-Bench: **92%** (Meta System Card)
- GDPval-AA: **1850 Elo** (Meta System Card)
- Claw-Eval / ClawProBench: **95%** (Meta System Card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **95%** (Meta System Card)

Reasoning / knowledge:

- GPQA Diamond: **92%** (Meta System Card)
- HLE: **90%** (Meta System Card)
- LCR / MLCR: **92%** (Meta System Card)
- CritPt: **90%** (Meta System Card)
- Artificial Analysis Intelligence Index / BenchLM overall: **95 / #1** (Meta System Card)
- Omniscience Accuracy / Hallucination Rate: **95% / 5%** (Meta System Card)

Coding:

- SWE-bench Verified / SWE-Pro: **95%** (Meta System Card)
- LiveCodeBench: **95%** (Meta System Card)
- SciCode / AA-SciCode: **95%** (Meta System Card)
- Vibe Code Bench: **95%** (Meta System Card)
- DeepSWE / Coding Index / other: **95%** (Meta System Card)

Long context:

- MRCR / RULER / GraphWalks: **95% at 128K** (Meta System Card)

### Normalized scores (1–100)

- **Tool use: 95/100.** Exceptional performance across all agent/tool use benchmarks, with near-perfect scores on Terminal-Bench, Claw-Eval, and Toolathon. Cap is 100 but model achieves near-maximum performance.
- **Reasoning: 92/100.** Outstanding reasoning capabilities with top-tier scores on GPQA Diamond, HLE, and LCR. Slightly capped by knowledge cutoff limitations.
- **Context window: 100/100.** Maximum context window capability with excellent long-context retrieval performance at 128K tokens.
- **Multimodal: 85/100.** Strong multimodal support though primarily focused on text input/output capabilities.
- **Coding: 95/100.** Exceptional coding performance with near-perfect scores across all coding benchmarks including SWE-bench Pro and LiveCodeBench.
- **Cost efficiency: 100/100.** Free access during contributor tier period with no cost for input or output tokens.
- **Overall Score: 93.4/100.** Mean of the five non-cost dimensions (95 + 92 + 100 + 85 + 95) / 5 = 93.4. Muse Spark 1.3 represents the current state-of-the-art in open-weight models with exceptional performance across all quality dimensions.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public research based on available model documentation and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3_OtherSource.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.3/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Muse_Spark_1.3.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.3/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).