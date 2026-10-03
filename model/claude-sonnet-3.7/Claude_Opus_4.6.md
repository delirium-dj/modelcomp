# Claude Sonnet 3.7 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-sonnet-3.7`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's first hybrid reasoning model, released February 25, 2025. Featured extended thinking mode for step-by-step reflection. Now a legacy/deprecated model, succeeded by Claude 4.x and 5.x series.
- **Provider / access:** Deprecated. Was available via Anthropic API, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-02-25 release; knowledge cutoff October 1, 2024.
- **IDs:** `anthropic/claude-3.7-sonnet`
- **Context window:** 200,000 tokens total; max output not separately confirmed for standard mode.
- **Modalities:** Text + image in; text out; extended thinking mode (visible step-by-step reflection); tool calls.
- **Pricing (at release):** $3.00 / $15.00 per 1M tokens (input / output, inclusive of thinking tokens).
- **Architecture:** Proprietary; parameter count undisclosed. First hybrid reasoning Claude model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found (predates Terminal-Bench 4.0).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- Extended thinking mode pioneered visible step-by-step reasoning.
- HLE: no verified public score found.

Coding:

- Strong HumanEval and MMLU results at release (exact scores not separately confirmed).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- 200,000-token window confirmed. Significantly below 1M+ by 2026 standards.

### Normalized scores (1–100)

- **Tool use: 72/100.** Introduced extended thinking for tool-assisted reasoning. Capped by legacy status and absent tool benchmarks.
- **Reasoning: 76/100.** Pioneer of hybrid reasoning with extended thinking. Strong at release but surpassed by all later models. Capped by age.
- **Context window: 55/100.** 200K tokens was competitive in early 2025 but far below 1M+ standard of 2026. Capped by limited context.
- **Multimodal: 65/100.** Text + image input; text-only output. Capped by limited modality.
- **Coding: 75/100.** Strong coding improvements over 3.5 Sonnet at release. Capped by age and absent verified scores.
- **Cost efficiency: 60/100.** $3/$15 was mid-tier at release; now expensive compared to current models with better performance.
- **Overall Score: 69/100.** Mean of (72 + 76 + 55 + 65 + 75) / 5 = 68.6, rounded to 69. Historically important as first hybrid reasoning model, now significantly outdated.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Anthropic docs, claudefa.st, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
