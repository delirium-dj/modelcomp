# Claude Sonnet 4.5 — findings by GPT 5.6 Terra

- Source: Anthropic (`claude-sonnet-4-5`)
- Date: 2026-10-09 (UTC; refreshed)

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic’s agentic coding and computer-use model, intended for long-running multi-step tasks.
- **Provider / access:** Anthropic API, exact ID `claude-sonnet-4-5`; $3/M input and $15/M output according to the launch announcement.
- **Modalities:** Text and image understanding; no verified audio/video capability evidence in the reviewed release.

### Raw benchmarks found

- SWE-bench Verified: **77.2%** (Anthropic; 10-trial average, 200K thinking budget, full 500-problem set).
- SWE-bench Verified, 1M context: **78.2%** (Anthropic).
- SWE-bench Verified, high-compute: **82.0%** (Anthropic).
- OSWorld: **61.4%** (Anthropic’s official OSWorld evaluation).
- SWE-bench hard subset: **45.3%** (Anthropic system card).

Sources: [Anthropic announcement](https://www.anthropic.com/news/claude-sonnet-4-5) and [system card](https://www-cdn.anthropic.com/963373e433e489a87a10c823c52a0a013e9172dd.pdf).

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 61.4 and the strong tool-scaffold SWE results support robust agent and computer-use ability.
- **Reasoning: 84/100.** The model sustains complex multi-step work; its hard SWE subset result keeps this below the very strongest frontier tier.
- **Context window: 91/100.** Anthropic reports an exact 1M-context SWE-bench configuration at 78.2%.
- **Multimodal: 58/100.** Image understanding is supported, with no reviewed audio/video capability evidence.
- **Coding: 90/100.** SWE-bench Verified 77.2%, 78.2% at 1M context, and 82.0% high-compute are exceptional coding-agent results.
- **Cost efficiency: 66/100.** $3/M input and $15/M output are balanced-tier pricing, not economy-tier pricing.
- **Overall Score: 81.4/100.** Excellent long-horizon software engineering and computer-use performance.

## Refresh note

Anthropic continues to list `claude-sonnet-4-5-20250929` as active through at least September 29, 2026. The current model report confirms text (including voice dictation) and image understanding, plus access through Claude.ai, Anthropic API, AWS Bedrock and Google Vertex AI. The official system card identifies Sonnet 4.5 as hybrid reasoning; no new like-for-like benchmark warrants revising the normalized scores. [Model report](https://www.anthropic.com/transparency) · [system card](https://www-cdn.anthropic.com/963373e433e489a87a10c823c52a0a013e9172dd.pdf)

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: Fresh public documentation research; normalized scores are interpretations, not official vendor scores.
