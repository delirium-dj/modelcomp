# Grok 4 — findings by GPT 5.6 Terra

- Source: xAI/Grok 4
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4
- **Short description:** xAI's proprietary multimodal reasoning model with native live-search/tool capability; Grok 4 Heavy is its parallel test-time-compute variant.
- **Provider / access:** xAI API; the [xAI Grok 4 announcement](https://x.ai/news/grok-4) identifies a 256k-context API with live search across X, the web and news.
- **Release / knowledge:** 2025; knowledge cutoff not published.
- **IDs:** `xai/grok-4`.
- **Context window:** 256,000 tokens (xAI announcement).
- **Modalities:** text and vision input; text output; reasoning and live-search tools.
- **Pricing (as of 2026-09-29):** current pricing was not independently verified in the reviewed source.
- **Architecture:** proprietary; xAI did not publish parameter counts in the reviewed announcement.

### Raw benchmarks found

Agent / tool use:

- Vending-Bench: **$4,694.15 net worth / 4,569 units sold**, average of five runs (xAI [announcement](https://x.ai/news/grok-4)).

Reasoning / knowledge:

- HLE text-only (Grok 4 Heavy): **50.7%** (xAI announcement).
- USAMO 2025 (Grok 4 Heavy): **61.9%** (xAI announcement).
- ARC-AGI-2: **15.9%** (xAI announcement).

Coding:

- No verified public SWE-bench or LiveCodeBench numeric result found in the reviewed xAI announcement.

Long context:

- **256,000 tokens** documented API context capacity; no public retrieval-at-length score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** The Vending-Bench five-run result is a strong agentic outcome, enhanced by documented native live search; benchmark breadth remains limited.
- **Reasoning: 90/100.** HLE 50.7%, USAMO 61.9% and ARC-AGI-2 15.9% are high-end published results, though two are explicitly for Grok 4 Heavy.
- **Context window: 85/100.** The documented 256k-token API window is substantial; no retrieval-at-length evidence was released.
- **Multimodal: 80/100.** xAI documents text/vision and real-time search, but no public visual benchmark result was found.
- **Coding: 78/100.** Advanced reasoning and agent results are relevant, but lack of a disclosed SWE-bench/LiveCodeBench score caps confidence.
- **Cost efficiency: 65/100.** Proprietary access and no independently verified current price prevent a high value score.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions; best fit for reasoning-heavy, tool-enabled applications that can use its 256k context.

## Refresh note

Fresh xAI documentation recheck found current material focused on later Grok routes, but no new version-specific benchmark or lifecycle entry for this original Grok 4 report. Existing evidence and normalized scores are retained.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
