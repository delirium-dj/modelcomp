# Claude Opus 4.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's earlier flagship model for coding, reasoning, and agentic work.
- **Provider / access:** Claude API and cloud partners.
- **Release / knowledge:** 2025 release; May 2025 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4-5`.
- **Context window:** 200K tokens; 64K maximum output (Anthropic documentation).
- **Modalities:** Text/image input, text output, extended thinking, and tools.
- **Pricing (as of 2026-10-04):** $5 input / $25 output per 1M tokens.
- **Architecture:** Proprietary; parameters undisclosed.

## Raw benchmarks found

- Claude Opus 4.5 system-card benchmark: **37.6%** with a 64K thinking budget.
- Vending-Bench 2 was evaluated, but no exact comparable score was available in the reviewed search results.

## Normalized scores (1–100)

- **Tool use: 86/100.** Strong agent and coding heritage.
- **Reasoning: 88/100.** System-card results support high reasoning capability.
- **Context window: 78/100.** 200K is useful but below current 1M-context models.
- **Multimodal: 84/100.** Image input is supported; output is text.
- **Coding: 88/100.** Flagship coding orientation at release.
- **Cost efficiency: 70/100.** $5/$25 is expensive relative to newer mid-tier models.
- **Overall Score: 84.8/100.** Best fit: established Anthropic coding workflows where compatibility matters.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
