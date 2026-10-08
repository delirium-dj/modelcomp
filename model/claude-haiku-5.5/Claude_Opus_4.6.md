# Claude Haiku 5.5 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-haiku-5.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest and most cost-efficient model, released October 7, 2026. The first Haiku with effort controls and adaptive thinking. Designed for high-volume production tasks — summarization, classification, terminal sub-agent, and browser automation.
- **Provider / access:** Anthropic API (`claude-haiku-5.5`), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2026-10-07 release; knowledge/training cutoff June 2026.
- **IDs:** `anthropic/claude-haiku-5.5`
- **Context window:** 1,000,000 tokens total; max output 128,000 tokens.
- **Modalities:** Text + image in; text out; adaptive thinking; effort controls; tool calls.
- **Pricing (as of 2026-10-08):** Tiered — under 100K prompt: $0.10 / $0.50 per 1M (input / output); over 100K prompt: $0.50 / $2.50 per 1M. Prompt caching and batch pricing available (up to 90% / 50% reduction).
- **Architecture:** Proprietary; parameter count undisclosed. Fastest tier of the Claude 5.5 generation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: substantial improvement over Haiku 4.5 (Anthropic; exact score not separately confirmed).
- OSWorld 2.1: substantial improvement over Haiku 4.5 (Anthropic; exact score not separately confirmed).
- Effort controls for balancing quality vs. speed in agentic workloads.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- Adaptive thinking for variable reasoning depth.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.

Coding:

- Substantial improvement over Haiku 4.5 in coding benchmarks (Anthropic).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- 1,000,000-token window with 128K output confirmed. No specific MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 80/100.** Substantial improvement on Terminal-Bench 4.0 and OSWorld 2.1 over predecessor. Effort controls and adaptive thinking. Capped by absent exact benchmark scores.
- **Reasoning: 76/100.** Adaptive thinking provides variable reasoning depth. Fast-tier model — not a reasoning flagship. Capped by absent GPQA/HLE data and fast-tier positioning.
- **Context window: 87/100.** 1M-token window with 128K output matches top-tier flagship models. Major upgrade from Haiku 4.5's 200K. Capped by unverified retrieval quality.
- **Multimodal: 65/100.** Text + image input; text-only output. Same modality as predecessor. Capped by vision-only scope.
- **Coding: 78/100.** Substantial coding improvement over Haiku 4.5. Not a coding specialist — fast-tier model. Capped by absent specific scores.
- **Cost efficiency: 95/100.** $0.10/$0.50 for prompts under 100K matches GPT-6 Luna pricing. Prompt caching up to 90% off. Exceptional value for a 1M-context model.
- **Overall Score: 77/100.** Mean of (80 + 76 + 87 + 65 + 78) / 5 = 77.2, rounded to 77. Outstanding cost-efficiency with flagship-class context window in a fast-tier model.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (Anthropic announcements, claude.com, llm-stats.com, aipricing.guru); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
