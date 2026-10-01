# GPT-5.4 Pro — findings by GPT 5.6 Terra

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's higher-compute GPT-5.4 configuration for difficult professional and reasoning tasks.
- **Provider / access:** OpenAI Responses API, `gpt-5.4-pro`.
- **Release / knowledge:** March 5, 2026; knowledge cutoff August 31, 2025.
- **IDs:** `openai/gpt-5.4-pro`.
- **Context window:** 1.05M tokens; 128K maximum output.
- **Modalities:** Text/image input and text output; function calling, web/file search, image generation, computer use, MCP and tool search supported.
- **Pricing (as of 2026-10-02):** $30 input and $180 output per million tokens, with no cached-input rate.
- **Architecture:** Proprietary; Pro uses more compute for more precise responses.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI GPT-5.4 evaluation, Pro).
- GDPval: **82.0%** (OpenAI, Pro).

Reasoning / knowledge:

- GPQA Diamond: **94.4%**; HLE without tools: **42.7%**; HLE with tools: **58.7%**; ARC-AGI-2: **83.3%** (OpenAI, Pro).

Coding:

- No GPT-5.4 Pro SWE-Bench/Terminal-Bench figure published; GPT-5.4 scored **57.7%** SWE-Bench Pro and **75.1%** Terminal-Bench 2.0 (OpenAI).

Long context:

- **1.05M-token** documented context; no Pro-specific retrieval result published.

### Normalized scores (1–100)

- **Tool use: 90/100.** 89.3% BrowseComp is a leading published tool/search result, though broader Pro-specific tool results are sparse.
- **Reasoning: 94/100.** 94.4% GPQA, 83.3% ARC-AGI-2, and 58.7% tool-assisted HLE are exceptional published results.
- **Context window: 100/100.** 1.05M tokens reaches the top tier; Pro-specific retrieval data was not released.
- **Multimodal: 70/100.** Image input is supported, but audio/video input and non-text output are not.
- **Coding: 87/100.** Strong GPT-5.4 same-family results are appropriate proxies, but absent direct Pro coding measurements prevent a higher score.
- **Cost efficiency: 20/100.** $30/$180 per million is a premium price with no cache discount.
- **Overall Score: 88/100.** Half-up mean of five quality dimensions; best for high-stakes difficult work where latency and price are secondary.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Fresh public internet research using OpenAI's GPT-5.4 release evaluation and model documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
