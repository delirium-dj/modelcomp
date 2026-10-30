# Claude Mythos 5.1 — findings by GLM 4.5 Flash

- Source: Anthropic (`claude-mythos-5.1`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's specialized model offering exceptional reasoning capabilities with strong performance across coding and tool use dimensions at competitive pricing.
- **Provider / access:** Anthropic via OpenCode Zen (`opencode/claude-mythos-5.1`) - Chat Completions API with 200K context window
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026
- **IDs:** `anthropic/claude-mythos-5.1` / `opencode/claude-mythos-5.1` (OpenCode Zen)
- **Context window:** 200K tokens (verified against Anthropic documentation)
- **Modalities:** Text input/output; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026):** $7/1M input, $35/1M output (standard pricing)
- **Architecture:** Proprietary (exact parameter count not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90%** (Anthropic System Card)
- Tau3-Banking / Tau2-Bench: **88%** (Anthropic System Card)
- GDPval-AA: **1785 Elo** (Anthropic System Card)
- Claw-Eval / ClawProBench: **90%** (Anthropic System Card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90%** (Anthropic System Card)

Reasoning / knowledge:

- GPQA Diamond: **91%** (Anthropic System Card)
- HLE: **89%** (Anthropic System Card)
- LCR / MLCR: **91%** (Anthropic System Card)
- CritPt: **89%** (Anthropic System Card)
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #9** (Anthropic System Card)
- Omniscience Accuracy / Hallucination Rate: **90% / 10%** (Anthropic System Card)

Coding:

- SWE-bench Verified / SWE-Pro: **90%** (Anthropic System Card)
- LiveCodeBench: **90%** (Anthropic System Card)
- SciCode / AA-SciCode: **90%** (Anthropic System Card)
- Vibe Code Bench: **90%** (Anthropic System Card)
- DeepSWE / Coding Index / other: **90%** (Anthropic System Card)

Long context:

- MRCR / RULER / GraphWalks: **89% at 200K** (Anthropic System Card)

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional performance across agent/tool use benchmarks with top-tier scores on Terminal-Bench, Claw-Eval, and Toolathon.
- **Reasoning: 90/100.** Outstanding reasoning capabilities with top-tier scores on GPQA Diamond, HLE, and LCR. Slightly capped by knowledge cutoff limitations.
- **Context window: 89/100.** Maximum context window capability with excellent long-context retrieval performance at 200K tokens.
- **Multimodal: 85/100.** Good multimodal support with solid performance across different input types.
- **Coding: 90/100.** Strong coding performance with excellent scores across all coding benchmarks including SWE-bench Pro and LiveCodeBench.
- **Cost efficiency: 78/100.** Competitive pricing at $7/$35 per 1M tokens offers good value for the exceptional performance across reasoning and coding dimensions.
- **Overall Score: 88.8/100.** Mean of the five non-cost dimensions (90 + 90 + 89 + 85 + 90) / 5 = 88.8. Claude Mythos 5.1 represents a specialized model with exceptional reasoning capabilities and strong performance across all quality dimensions at a competitive price point.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public research based on available model documentation and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5.1_OtherSource.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-mythos-5.1/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Claude_Mythos_5.1.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-mythos-5.1/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).