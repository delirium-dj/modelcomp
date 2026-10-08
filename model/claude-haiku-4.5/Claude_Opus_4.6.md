# Claude Haiku 4.5 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-haiku-4.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast-tier model released October 15, 2025. Designed for high-volume, cost-efficient agentic tasks including coding, computer use, and subagent coordination. Now a legacy model, succeeded by Claude Haiku 5.5 (October 7, 2026).
- **Provider / access:** Anthropic API (`claude-haiku-4.5`), Amazon Bedrock, Google Cloud Vertex AI. Legacy status.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff February 2025 (training data cutoff July 2025).
- **IDs:** `anthropic/claude-haiku-4.5`
- **Context window:** 200,000 tokens total; max output 64,000 tokens.
- **Modalities:** Text + image in; text out; extended thinking support; tool calls; computer use; subagent capable.
- **Pricing (at release):** $1.00 / $5.00 per 1M tokens (input / output).
- **Architecture:** Proprietary; parameter count undisclosed. Fast tier of the Claude 4.5 generation.

### Raw benchmarks found

Agent / tool use:

- Computer use: supported (Anthropic).
- Subagent coordination: designed for (apxml.com).
- Terminal-Bench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- Extended thinking mode supported.
- HLE: no verified public score found.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- Designed for coding and agentic coding tasks.
- LiveCodeBench: no verified public score found.

Long context:

- 200,000-token window confirmed. Below 1M by 2026 standards.

### Normalized scores (1–100)

- **Tool use: 76/100.** Computer use and subagent coordination supported. Extended thinking for agentic tasks. Capped by absent benchmarks and legacy status.
- **Reasoning: 74/100.** Extended thinking mode for reasoning. Fast-tier positioning limits depth. Capped by absent GPQA/HLE data.
- **Context window: 58/100.** 200K tokens with 64K output; well below 2026's 1M standard. Capped by limited context.
- **Multimodal: 65/100.** Text + image input; text-only output. Capped by vision-only modality.
- **Coding: 74/100.** Designed for coding and agentic coding. Fast-tier model. Capped by absent benchmarks and age.
- **Cost efficiency: 72/100.** $1/$5 was competitive at release; surpassed by Haiku 5.5 at $0.10/$0.50. Capped by being outdated pricing.
- **Overall Score: 69/100.** Mean of (76 + 74 + 58 + 65 + 74) / 5 = 69.4, rounded to 69. Capable fast-tier model, now superseded by Haiku 5.5.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (Anthropic docs, apxml.com, claude.com, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
