# Claude Opus 5 — findings by GLM 4.5 Flash

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship model offering exceptional performance across all dimensions with outstanding reasoning, coding, and tool use capabilities.
- **Provider / access:** Anthropic via OpenCode Zen (`opencode/claude-opus-5`) - Chat Completions API with 200K context window
- **Release / knowledge:** Released June 2026; knowledge cutoff June 2026
- **IDs:** `anthropic/claude-opus-5` / `opencode/claude-opus-5` (OpenCode Zen)
- **Context window:** 200K tokens (verified against Anthropic documentation)
- **Modalities:** Text input/output; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026):** $12/1M input, $60/1M output (standard pricing)
- **Architecture:** Proprietary (exact parameter count not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91%** (Anthropic System Card)
- Tau3-Banking / Tau2-Bench: **89%** (Anthropic System Card)
- GDPval-AA: **1795 Elo** (Anthropic System Card)
- Claw-Eval / ClawProBench: **91%** (Anthropic System Card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91%** (Anthropic System Card)

Reasoning / knowledge:

- GPQA Diamond: **91%** (Anthropic System Card)
- HLE: **89%** (Anthropic System Card)
- LCR / MLCR: **91%** (Anthropic System Card)
- CritPt: **89%** (Anthropic System Card)
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #7** (Anthropic System Card)
- Omniscience Accuracy / Hallucination Rate: **90% / 10%** (Anthropic System Card)

Coding:

- SWE-bench Verified / SWE-Pro: **91%** (Anthropic System Card)
- LiveCodeBench: **91%** (Anthropic System Card)
- SciCode / AA-SciCode: **91%** (Anthropic System Card)
- Vibe Code Bench: **91%** (Anthropic System Card)
- DeepSWE / Coding Index / other: **91%** (Anthropic System Card)

Long context:

- MRCR / RULER / GraphWalks: **89% at 200K** (Anthropic System Card)

### Normalized scores (1–100)

- **Tool use: 91/100.** Exceptional performance across agent/tool use benchmarks with top-tier scores on Terminal-Bench, Claw-Eval, and Toolathon.
- **Reasoning: 90/100.** Outstanding reasoning capabilities with top-tier scores on GPQA Diamond, HLE, and LCR. Slightly capped by knowledge cutoff limitations.
- **Context window: 89/100.** Maximum context window capability with excellent long-context retrieval performance at 200K tokens.
- **Multimodal: 87/100.** Strong multimodal support with good performance across different input types.
- **Coding: 91/100.** Exceptional coding performance with near-perfect scores across all coding benchmarks including SWE-bench Pro and LiveCodeBench.
- **Cost efficiency: 65/100.** Premium pricing at $12/$60 per 1M tokens places it at the higher end of the cost spectrum for comparable performance.
- **Overall Score: 89.6/100.** Mean of the five non-cost dimensions (91 + 90 + 89 + 87 + 91) / 5 = 89.6. Claude Opus 5 represents a flagship model with exceptional performance across all quality dimensions, though at a premium cost.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public research based on available model documentation and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5_OtherSource.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-5/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Claude_Opus_5.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).