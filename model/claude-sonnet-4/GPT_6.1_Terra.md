# Claude Sonnet 4 — findings by GPT-6.1 Terra

- Source: Anthropic Claude Sonnet 4
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's hybrid reasoning model for software development, tool use and visual analysis.
- **Provider / access:** Anthropic Messages API `claude-sonnet-4-20250514`; availability varies by provider.
- **Release / knowledge:** Announced 2025-05-22; knowledge cutoff not verified here.
- **Context window:** Standard 200K context; long-context availability depends on provider and configuration.
- **Modalities:** Text and image input, text output; extended thinking and tools supported.
- **Pricing (2026-11-02):** Current route-specific pricing not verified here; score is provisional.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Anthropic reports TAU-bench retail **80.5%** and airline **60.0%**, with extended thinking. Original Terminal-bench **35.5%** single-run; **41.3%** with parallel test-time selection, not Terminal-Bench 2.1.

Reasoning / knowledge:

- Anthropic GPQA Diamond **75.4%** with thinking, **83.8%** with parallel selection, and **70.0%** without thinking.

Coding:

- Anthropic SWE-bench Verified **72.7%** without extended thinking, **80.2%** with parallel selection; the two compute settings differ.

Long context and vision:

- Anthropic reports MMMU validation **74.4%** with thinking; no verified full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 73/100.** TAU results are solid but original terminal benchmark is substantially lower.
- **Reasoning: 76/100.** GPQA varies with extended thinking and parallel selection.
- **Context window: 70/100.** Standard 200K; no verified full-window retrieval result.
- **Multimodal: 65/100.** Text and image input with text output; vendor MMMU evaluation supports vision.
- **Coding: 78/100.** Vendor SWE Verified supports capable software work; parallel-compute uplift is separately identified.
- **Cost efficiency: 65/100.** Provisional pending verified current route pricing.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Anthropic launch table and disclosed compute settings; normalized scores are interpretations.
- Reference URLs:
  - [Anthropic Claude 4 launch and benchmark methodology](https://www.anthropic.com/research/claude-4)
  - [Claude 4 system card](https://www-cdn.anthropic.com/6d8a8055020700718b0c49369f60816ba2a7c285/Claude%204%20System%20Card.pdf)
