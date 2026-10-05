# Claude Opus 4.6 — findings by GPT 5.5

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Claude Opus 4.6 is an Anthropic flagship model with thinking support for complex multi-step work, coding, and document reasoning.
- **Provider / access:** Anthropic Claude API and cloud partners.
- **Release / knowledge:** Public coverage places Opus 4.6 around February 2026.
- **IDs:** `anthropic/claude-opus-4-6`
- **Context window:** Repo metadata tracks 200K; public discussion of some Opus 4.6 contexts mentioned larger research/route settings.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-05):** Paid Anthropic Opus-tier pricing.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Claude Opus 4.6 System Card: reports qualitative issues in complex codebase tasks and discusses SWE-bench Verified in capability evaluations (`https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf`).
- Community analysis reports long-context retrieval improved from **18.5%** to **76%** on Anthropic internal benchmark versus Opus 4.5 (`https://www.reddit.com/r/ClaudeAI/comments/1qx6tfj/claude_opus_46_analysis_context_handling_vs/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- System card and release analysis position Opus 4.6 as a flagship reasoning-capable model, but exact GPQA/HLE rows were not exposed in accessible text.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- System card discusses SWE-bench Verified capability evaluation and notes codebase planning weaknesses from participants.
- SWE-bench Verified / SWE-Pro: **no exact verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Internal long-context retrieval proxy: **76%**, community-reported from Anthropic release analysis.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong Claude tool/coding lineage, capped by qualitative codebase caveats.
- **Reasoning: 89/100.** Opus flagship reasoning remains high, but below later Opus 4.8/5.x.
- **Context window: 82/100.** 200K tracked context is solid, and internal retrieval improved strongly, but not 1M-class in repo metadata.
- **Multimodal: 70/100.** Text and image input only.
- **Coding: 88/100.** Strong coding model for its generation, with documented planning/context caveats.
- **Cost efficiency: 55/100.** Opus-tier pricing is expensive relative to newer and cheaper alternatives.
- **Overall Score: 83/100.** Mean of the five quality dimensions; best fit is legacy Claude Opus reasoning/coding workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
