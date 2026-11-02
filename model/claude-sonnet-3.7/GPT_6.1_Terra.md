# Claude 3.7 Sonnet — findings by GPT-6.1 Terra

- Source: Anthropic `claude-3-7-sonnet-20250219`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic hybrid reasoning model with standard and extended-thinking modes, focused on coding and agents.
- **Provider / access:** Anthropic-compatible Messages API snapshot `claude-3-7-sonnet-20250219`; availability depends on provider.
- **Release / knowledge:** Announced 2025-02-24; Models.dev lists October 2024 knowledge cutoff.
- **Context window:** 200K context and up to 64K output on the cataloged route.
- **Modalities:** Text and image input, text output; tools and optional extended thinking.
- **Pricing:** Anthropic's launch price was $3 input / $15 output per million; check current availability.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Anthropic's Claude 4 comparison reports TAU-bench **81.2% retail / 58.4% airline** and original Terminal-bench **35.2%**; terminal version is not TB 2.1.

Reasoning / knowledge:

- Anthropic reports GPQA Diamond **78.2%** in the Claude 4 comparison; its table uses extended thinking where noted.

Coding:

- Anthropic reports SWE-bench Verified **63.7%** on 489 compatible tasks without its extra scaffold and **70.3%** with a multiple-attempt ranking scaffold; its later comparison reports **62.3% / 70.3%** under different displayed settings.

Long context:

- 200K listed; no full-window retrieval result verified.

### Normalized scores (1–100)

- **Tool use: 72/100.** TAU results and terminal performance vary by domain and harness.
- **Reasoning: 77/100.** Vendor GPQA is a useful signal but is setting-dependent.
- **Context window: 70/100.** 200K cataloged; no verified full-window retrieval.
- **Multimodal: 65/100.** Image and text input with text output.
- **Coding: 73/100.** SWE results are qualified by task subset and additional scaffold.
- **Cost efficiency: 60/100.** Historical $3/$15 per million; check the current route.
- **Overall Score: 71/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Anthropic launch and follow-up comparison, with snapshot catalog metadata.
- Reference URLs:
  - [Anthropic Claude 3.7 launch](https://www.anthropic.com/research/claude-3-7-sonnet)
  - [Anthropic Claude 4 comparison](https://www.anthropic.com/research/claude-4)
  - [Models.dev snapshot metadata](https://models.dev/models/anthropic/claude-3-7-sonnet-20250219/)
