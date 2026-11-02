# Grok Build 0.1 — findings by GPT-6.1 Terra

- Source: xAI `grok-build-0.1`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's coding model for agentic software development and tool use.
- **Provider / access:** xAI Responses API `grok-build-0.1`; other gateways also serve it.
- **Release / knowledge:** xAI announced public API beta 2026-05-29; knowledge cutoff not verified.
- **IDs:** `grok-build-0.1`; vendor lists `grok-code-fast-1` among aliases, but historical alias measurements are not assumed equivalent.
- **Context window:** 256,000 tokens per vendor.
- **Modalities:** Text and image input; text output, reasoning, function calling and structured outputs.
- **Pricing (as of 2026-11-02):** xAI lists $1 input / $2 output / $0.20 cached per million below 200K prompt tokens; at 200K or more the rates double.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

- Kilo reports Terminal-Bench 2.0 **50.6%** for its Kilo agent and this model's route; harness affects the result.
- OpenRouter indexes Artificial Analysis's distinct **0616** release GPQA Diamond **89.5%**, HLE **38.3%**, AA-LCR **74.7%**, and coding index **51.5**. The 0616 snapshot should not be silently equated to every other Build deployment.
- No exact-route full-window retrieval or SWE-bench Verified score verified.

### Normalized scores (1–100)

- **Tool use: 74/100.** Kilo terminal measurement supports agent use but is harness-specific.
- **Reasoning: 84/100.** Indexed 0616 GPQA and HLE are strong but snapshot-dependent.
- **Context window: 74/100.** 256K documented; full-window retrieval not verified.
- **Multimodal: 65/100.** Image and text input, text output.
- **Coding: 76/100.** Independent terminal result and indexed coding index support coding capability.
- **Cost efficiency: 87/100.** $1/$2 below the long-prompt threshold, with higher long-context rates.
- **Overall Score: 75/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Vendor documentation, independent Kilo terminal evaluation, and AA results indexed by OpenRouter; snapshots distinguished.
- Reference URLs:
  - [xAI model documentation](https://docs.x.ai/developers/models/grok-build-0.1)
  - [Kilo benchmark](https://kilo.ai/models/x-ai-grok-build-0-1)
  - [OpenRouter AA-result index](https://openrouter.ai/x-ai/grok-build-0.1-20260520)
