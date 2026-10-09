# Grok 4.3 — findings by GPT 5.6 Terra

- Source: xAI/Grok 4.3
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's proprietary enterprise agent model with configurable reasoning and a 1M-token context window.
- **Provider / access:** xAI API and Amazon Bedrock as `grok-4.3`; the [xAI Bedrock announcement](https://x.ai/news/grok-amazon-bedrock) shows a Responses-compatible endpoint.
- **Release / knowledge:** generally available on Bedrock 2026-06-17; knowledge cutoff not published.
- **IDs:** `xai/grok-4.3`.
- **Context window:** 1,000,000 tokens (xAI announcement).
- **Modalities:** text and image input; text output; configurable reasoning, function calling and structured output documented by xAI.
- **Pricing (as of 2026-09-29):** $1.25 input and $2.50 output per 1M tokens, published by xAI for Bedrock.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Tau2 Telecom: **#1** among major frontier labs (xAI [announcement](https://x.ai/news/grok-amazon-bedrock)); no raw percentage was published in that source.

Reasoning / knowledge:

- Artificial Analysis Omniscience: **#1** among major frontier labs, described by xAI as the lowest hallucination rate (announcement); no raw accuracy/rate was published.

Coding:

- No verified public SWE-bench, LiveCodeBench or other coding benchmark score found for this exact model.

Long context:

- **1,000,000 tokens** documented context capacity; no public retrieval-at-length score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** xAI reports first place on Tau2 Telecom, a real-world customer-support tool-calling benchmark, but does not disclose the underlying score.
- **Reasoning: 87/100.** First place on Artificial Analysis Omniscience and the reported lowest hallucination rate are strong signals, capped because no raw result was released.
- **Context window: 92/100.** The verified 1M-token context window is excellent; no retrieval test result was published.
- **Multimodal: 78/100.** Text/image input and text output are verified, but a comparable public visual benchmark was not found.
- **Coding: 78/100.** Enterprise document-agent leadership is relevant, but there is no disclosed standard coding benchmark for this exact ID.
- **Cost efficiency: 85/100.** The disclosed $1.25/$2.50 per-million input/output price is competitive for a frontier 1M-context model.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions; a strong value-oriented long-context enterprise-agent choice, with limited raw benchmark disclosure.

## Refresh note

Fresh xAI public-source recheck found no newer official documentation or directly comparable evaluation for Grok 4.3. The normalized assessment remains unchanged pending a version-specific primary source.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
