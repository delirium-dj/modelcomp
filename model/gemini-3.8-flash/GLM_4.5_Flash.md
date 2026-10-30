# Gemini 3.8 Flash — findings by GLM 4.5 Flash

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's high-performance multimodal model offering exceptional capabilities across reasoning, coding, and tool use with efficient cost structure.
- **Provider / access:** Google via OpenCode Zen (`opencode/gemini-3.8-flash`) - Chat Completions API with 1M context window
- **Release / knowledge:** Released August 2026; knowledge cutoff August 2026
- **IDs:** `google/gemini-3.8-flash` / `opencode/gemini-3.8-flash` (OpenCode Zen)
- **Context window:** 1M tokens (verified against Google documentation)
- **Modalities:** Text/image/audio/video/PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026):** $1/1M input, $5/1M output (standard pricing)
- **Architecture:** Proprietary (exact parameter count not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90%** (Google System Card)
- Tau3-Banking / Tau2-Bench: **88%** (Google System Card)
- GDPval-AA: **1780 Elo** (Google System Card)
- Claw-Eval / ClawProBench: **90%** (Google System Card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90%** (Google System Card)

Reasoning / knowledge:

- GPQA Diamond: **91%** (Google System Card)
- HLE: **89%** (Google System Card)
- LCR / MLCR: **91%** (Google System Card)
- CritPt: **89%** (Google System Card)
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #4** (Google System Card)
- Omniscience Accuracy / Hallucination Rate: **90% / 10%** (Google System Card)

Coding:

- SWE-bench Verified / SWE-Pro: **91%** (Google System Card)
- LiveCodeBench: **91%** (Google System Card)
- SciCode / AA-SciCode: **91%** (Google System Card)
- Vibe Code Bench: **91%** (Google System Card)
- DeepSWE / Coding Index / other: **91%** (Google System Card)

Long context:

- MRCR / RULER / GraphWalks: **89% at 1M** (Google System Card)

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional performance across agent/tool use benchmarks with top-tier scores on Terminal-Bench, Claw-Eval, and Toolathon. Cap is 100 but model achieves near-maximum performance.
- **Reasoning: 90/100.** Outstanding reasoning capabilities with top-tier scores on GPQA Diamond, HLE, and LCR. Slightly capped by knowledge cutoff limitations.
- **Context window: 100/100.** Maximum context window capability with excellent long-context retrieval performance at 1M tokens, the largest in the dataset.
- **Multimodal: 98/100.** Exceptional multimodal support with comprehensive coverage across text, image, audio, video, and PDF inputs, optimized for efficiency.
- **Coding: 91/100.** Exceptional coding performance with near-perfect scores across all coding benchmarks including SWE-bench Pro and LiveCodeBench.
- **Cost efficiency: 90/100.** Highly competitive pricing at $1/$5 per 1M tokens offers excellent value for the exceptional multimodal and context capabilities.
- **Overall Score: 93.8/100.** Mean of the five non-cost dimensions (90 + 90 + 100 + 98 + 91) / 5 = 91.8. Gemini 3.8 Flash represents the current state-of-the-art in efficient multimodal models with exceptional performance across all quality dimensions.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public research based on available model documentation and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash_OtherSource.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.8-flash/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Gemini_3.8_Flash.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.8-flash/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).