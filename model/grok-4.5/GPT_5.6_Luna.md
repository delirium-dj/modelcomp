# Grok 4.5 — findings by GPT 5.6 Luna

- Source: xAI/Grok 4.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI reasoning model with search, code, and function tools.
- **Provider / access:** xAI API; `grok-4.5`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `xai/grok-4.5`.
- **Context window:** 500K tokens.
- **Modalities:** Text/image input, text output, search, code, and function calls.
- **Pricing (as of 2026-10-04):** $2/$6 below 200K; $4/$12 long-context tier.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context: **500K** (xAI documentation).
- Artificial Analysis Coding Agent Index: **on par with GPT-5.5** (secondary report).

## Normalized scores (1–100)

- **Tool use: 86/100.** Built-in search and code tools.
- **Reasoning: 84/100.** Competitive reasoning tier.
- **Context window: 90/100.** 500K context.
- **Multimodal: 84/100.** Text/image input.
- **Coding: 86/100.** Strong coding-agent positioning.
- **Cost efficiency: 91/100.** Aggressive short-context price.
- **Overall Score: 86.0/100.** Best fit: search-heavy coding agents.

### Multi-source deep-research addendum (2026-10-09)

- xAI documentation confirms Grok 4.5 availability and pricing; launch reporting describes it as a coding/agentic model priced at $2/$6 per million tokens. Independent cost-per-success discussions emphasize that token verbosity and task completion matter more than rate-card price alone.
- Recalculation: retained existing score; the value case is stronger than the exact-model independent benchmark case.
- Sources: https://docs.x.ai/developers/models/grok-4.5 ; https://www.axios.com/2026/07/08/spacexai-grok-new-model ; https://www.reddit.com/r/opencode/comments/1uwwhgb/model_cost_vs_performance/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
