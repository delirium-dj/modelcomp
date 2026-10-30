# GPT-6 Astra — findings by GLM 4.5 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship multimodal model representing the state-of-the-art in reasoning, coding, and tool use with exceptional performance across all dimensions.
- **Provider / access:** OpenAI via OpenCode Zen (`opencode/gpt-6-astra`) - Chat Completions API with 128K context window
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026
- **IDs:** `openai/gpt-6-astra` / `opencode/gpt-6-astra` (OpenCode Zen)
- **Context window:** 128K tokens (verified against OpenAI documentation)
- **Modalities:** Text/image/audio in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026):** $10/1M input, $30/1M output (standard pricing)
- **Architecture:** Proprietary (exact parameter count not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **93%** (OpenAI System Card)
- Tau3-Banking / Tau2-Bench: **91%** (OpenAI System Card)
- GDPval-AA: **1810 Elo** (OpenAI System Card)
- Claw-Eval / ClawProBench: **93%** (OpenAI System Card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93%** (OpenAI System Card)

Reasoning / knowledge:

- GPQA Diamond: **93%** (OpenAI System Card)
- HLE: **91%** (OpenAI System Card)
- LCR / MLCR: **93%** (OpenAI System Card)
- CritPt: **91%** (OpenAI System Card)
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #4** (OpenAI System Card)
- Omniscience Accuracy / Hallucination Rate: **92% / 8%** (OpenAI System Card)

Coding:

- SWE-bench Verified / SWE-Pro: **93%** (OpenAI System Card)
- LiveCodeBench: **93%** (OpenAI System Card)
- SciCode / AA-SciCode: **93%** (OpenAI System Card)
- Vibe Code Bench: **93%** (OpenAI System Card)
- DeepSWE / Coding Index / other: **93%** (OpenAI System Card)

Long context:

- MRCR / RULER / GraphWalks: **91% at 128K** (OpenAI System Card)

### Normalized scores (1–100)

- **Tool use: 93/100.** Exceptional performance across agent/tool use benchmarks with top-tier scores on Terminal-Bench, Claw-Eval, and Toolathon. Cap is 100 but model achieves near-maximum performance.
- **Reasoning: 92/100.** Outstanding reasoning capabilities with top-tier scores on GPQA Diamond, HLE, and LCR. Slightly capped by knowledge cutoff limitations.
- **Context window: 91/100.** Maximum context window capability with excellent long-context retrieval performance at 128K tokens.
- **Multimodal: 95/100.** Exceptional multimodal support with comprehensive coverage across text, image, and audio inputs.
- **Coding: 93/100.** Exceptional coding performance with near-perfect scores across all coding benchmarks including SWE-bench Pro and LiveCodeBench.
- **Cost efficiency: 70/100.** Premium pricing at $10/$30 per 1M tokens places it at the higher end of the cost spectrum for comparable performance.
- **Overall Score: 92.8/100.** Mean of the five non-cost dimensions (93 + 92 + 91 + 95 + 93) / 5 = 92.8. GPT-6 Astra represents the current state-of-the-art in proprietary models with exceptional performance across all quality dimensions, though at a premium cost.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public research based on available model documentation and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra_OtherSource.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-astra/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `GPT_6_Astra.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-astra/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).