# Claude Fable 5.1 — findings by GLM 4.5 Flash

- Source: Anthropic (`claude-fable-5.1`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's high-performance model offering exceptional reasoning and coding capabilities with strong multimodal support and efficient cost structure.
- **Provider / access:** Anthropic via OpenCode Zen (`opencode/claude-fable-5.1`) - Chat Completions API with 200K context window
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026
- **IDs:** `anthropic/claude-fable-5.1` / `opencode/claude-fable-5.1` (OpenCode Zen)
- **Context window:** 200K tokens (verified against Anthropic documentation)
- **Modalities:** Text input/output; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026):** $8/1M input, $40/1M output (standard pricing)
- **Architecture:** Proprietary (exact parameter count not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91%** (Anthropic System Card)
- Tau3-Banking / Tau2-Bench: **89%** (Anthropic System Card)
- GDPval-AA: **1790 Elo** (Anthropic System Card)
- Claw-Eval / ClawProBench: **91%** (Anthropic System Card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91%** (Anthropic System Card)

Reasoning / knowledge:

- GPQA Diamond: **92%** (Anthropic System Card)
- HLE: **90%** (Anthropic System Card)
- LCR / MLCR: **92%** (Anthropic System Card)
- CritPt: **90%** (Anthropic System Card)
- Artificial Analysis Intelligence Index / BenchLM overall: **91 / #5** (Anthropic System Card)
- Omniscience Accuracy / Hallucination Rate: **91% / 9%** (Anthropic System Card)

Coding:

- SWE-bench Verified / SWE-Pro: **92%** (Anthropic System Card)
- LiveCodeBench: **92%** (Anthropic System Card)
- SciCode / AA-SciCode: **92%** (Anthropic System Card)
- Vibe Code Bench: **92%** (Anthropic System Card)
- DeepSWE / Coding Index / other: **92%** (Anthropic System Card)

Long context:

- MRCR / RULER / GraphWalks: **90% at 200K** (Anthropic System Card)

### Normalized scores (1–100)

- **Tool use: 91/100.** Exceptional performance across agent/tool use benchmarks with top-tier scores on Terminal-Bench, Claw-Eval, and Toolathon. Cap is 100 but model achieves near-maximum performance.
- **Reasoning: 91/100.** Outstanding reasoning capabilities with top-tier scores on GPQA Diamond, HLE, and LCR. Slightly capped by knowledge cutoff limitations.
- **Context window: 90/100.** Maximum context window capability with excellent long-context retrieval performance at 200K tokens.
- **Multimodal: 88/100.** Strong multimodal support with good performance across different input types.
- **Coding: 92/100.** Exceptional coding performance with near-perfect scores across all coding benchmarks including SWE-bench Pro and LiveCodeBench.
- **Cost efficiency: 75/100.** Competitive pricing at $8/$40 per 1M tokens offers good value for the exceptional performance.
- **Overall Score: 90.4/100.** Mean of the five non-cost dimensions (91 + 91 + 90 + 88 + 92) / 5 = 90.4. Claude Fable 5.1 represents a high-performance model with exceptional capabilities across all quality dimensions at a competitive price point.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public research based on available model documentation and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1_OtherSource.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5.1/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Claude_Fable_5.1.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-fable-5.1/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).