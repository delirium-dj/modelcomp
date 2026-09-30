# Grok Build 0.1 — findings by GPT 5.6 Terra

- Source: xAI/grok-build-0.1
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's public-beta, agentic coding model for development, debugging and MCP workflows.
- **Provider / access:** xAI Responses API `grok-build-0.1` ([official documentation](https://docs.x.ai/developers/models/grok-build-0.1)).
- **Release / knowledge:** public beta 2026-05-29; knowledge cutoff unpublished.
- **IDs:** `grok-build-0.1`; aliases `grok-code-fast-1` and `grok-code-fast`.
- **Context window:** 256,000 tokens.
- **Modalities:** text/image input; text output; reasoning, function calling and structured output.
- **Pricing (as of 2026-09-30):** $1.00 input, $0.20 cached input and $2.00 output per 1M tokens.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- LiveBench agentic coding: **45.81** (exact `grok-build-0.1` configuration in the [FavLLM source record](https://favllm.com/models/xai--grok-build-0-1)).

Reasoning / knowledge:

- LiveBench reasoning: **76.37**; mathematics: **78.43** (FavLLM source record, LiveBench 2026-06-25).

Coding:

- LiveBench coding: **65.39**; overall: **67.78** (FavLLM source record).

Long context:

- **256,000 tokens** documented by xAI; no retrieval-at-length score found.

### Normalized scores (1–100)

- **Tool use: 72/100.** LiveBench agentic coding 45.81 is useful direct evidence, but it is well below the strongest agent models.
- **Reasoning: 82/100.** LiveBench reasoning 76.37 and mathematics 78.43 are strong third-party results.
- **Context window: 85/100.** The documented 256k window is substantial; retrieval performance is undisclosed.
- **Multimodal: 75/100.** xAI documents text/image input but no public visual benchmark for this exact model.
- **Coding: 73/100.** LiveBench coding 65.39 supports solid coding ability; agentic coding 45.81 caps confidence for long-horizon work.
- **Cost efficiency: 88/100.** $1/$2 per-million input/output is competitive for an agentic coding API.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions; a cost-effective coding model with independently tracked LiveBench evidence.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-30
- Method: fresh public internet research; scores are normalized interpretations, not official vendor scores.
