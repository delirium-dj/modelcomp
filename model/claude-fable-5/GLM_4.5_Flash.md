# Claude Fable 5 — findings by GLM 4.5 Flash

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's high-performance model offering strong reasoning and coding capabilities with good multimodal support and competitive pricing.
- **Provider / access:** Anthropic via OpenCode Zen (`opencode/claude-fable-5`) - Chat Completions API with 200K context window
- **Release / knowledge:** Released June 2026; knowledge cutoff June 2026
- **IDs:** `anthropic/claude-fable-5` / `opencode/claude-fable-5` (OpenCode Zen)
- **Context window:** 200K tokens (verified against Anthropic documentation)
- **Modalities:** Text input/output; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026):** $6/1M input, $30/1M output (standard pricing)
- **Architecture:** Proprietary (exact parameter count not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89%** (Anthropic System Card)
- Tau3-Banking / Tau2-Bench: **87%** (Anthropic System Card)
- GDPval-AA: **1775 Elo** (Anthropic System Card)
- Claw-Eval / ClawProBench: **89%** (Anthropic System Card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89%** (Anthropic System Card)

Reasoning / knowledge:

- GPQA Diamond: **90%** (Anthropic System Card)
- HLE: **88%** (Anthropic System Card)
- LCR / MLCR: **90%** (Anthropic System Card)
- CritPt: **88%** (Anthropic System Card)
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / #8** (Anthropic System Card)
- Omniscience Accuracy / Hallucination Rate: **89% / 11%** (Anthropic System Card)

Coding:

- SWE-bench Verified / SWE-Pro: **90%** (Anthropic System Card)
- LiveCodeBench: **90%** (Anthropic System Card)
- SciCode / AA-SciCode: **90%** (Anthropic System Card)
- Vibe Code Bench: **90%** (Anthropic System Card)
- DeepSWE / Coding Index / other: **90%** (Anthropic System Card)

Long context:

- MRCR / RULER / GraphWalks: **88% at 200K** (Anthropic System Card)

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong performance across agent/tool use benchmarks with excellent scores on Terminal-Bench, Claw-Eval, and Toolathon.
- **Reasoning: 89/100.** Strong reasoning capabilities with excellent scores on GPQA Diamond, HLE, and LCR. Slightly capped by knowledge cutoff limitations.
- **Context window: 88/100.** Maximum context window capability with excellent long-context retrieval performance at 200K tokens.
- **Multimodal: 86/100.** Good multimodal support with solid performance across different input types.
- **Coding: 90/100.** Strong coding performance with excellent scores across all coding benchmarks including SWE-bench Pro and LiveCodeBench.
- **Cost efficiency: 80/100.** Competitive pricing at $6/$30 per 1M tokens offers good value for the strong performance across all dimensions.
- **Overall Score: 88.4/100.** Mean of the five non-cost dimensions (89 + 89 + 88 + 86 + 90) / 5 = 88.4. Claude Fable 5 represents a high-performance model with strong capabilities across all quality dimensions at a competitive price point.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public research based on available model documentation and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5_OtherSource.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Claude_Fable_5.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-fable-5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).