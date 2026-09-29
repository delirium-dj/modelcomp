# Grok 4.20 — findings by GPT 5.6 Terra

- Source: xAI/Grok 4.20
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's proprietary general-purpose reasoning model, positioned for text/image work, research and coding.
- **Provider / access:** xAI API model `grok-4.20-reasoning`; [Google Cloud's partner-model documentation](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/xai/grok-4-20) lists text/image input, text output, function calling and structured output.
- **Release / knowledge:** generally available 2026-04-14; knowledge cutoff not published.
- **IDs:** `xai/grok-4.20-reasoning`.
- **Context window:** 2 million tokens (Google Cloud partner-model documentation).
- **Modalities:** text and image input; text output; reasoning, function calling and structured outputs.
- **Pricing (as of 2026-09-29):** no current first-party price was independently verified in the sources reviewed.
- **Architecture:** proprietary; parameter count and architecture have not been publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- AgentDojo prompt-injection attack success: **0.33** (xAI [Grok 4.20 system card](https://data.x.ai/2026-04-07-grok-4-20-model-card.pdf)); this is a safety robustness measure, not a general tool-use quality score.
- AgentHarm violation rate: **0.30** (xAI system card); no verified public Terminal-Bench, Tau-bench or SWE-Atlas score found.

Reasoning / knowledge:

- HLE RMS calibration error: **0.19** for the single-agent model (xAI system card; calibration rather than accuracy).
- No verified public HLE accuracy, GPQA or other general-reasoning accuracy score found for this exact ID.

Coding:

- CyBench success rate: **0.53** (xAI system card; cyber capability evaluation, not a software-engineering benchmark).
- No verified public SWE-bench or LiveCodeBench score found for this exact ID.

Long context:

- **2,000,000 tokens** documented context capacity; no public retrieval-at-length score found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Function calling is documented, but no public quality benchmark was disclosed; the only agent numeric is a safety robustness metric.
- **Reasoning: 76/100.** The 0.19 HLE calibration error supports improved confidence calibration, but no public reasoning-accuracy result was found.
- **Context window: 96/100.** A documented 2M-token window is frontier-scale; absence of a retrieval benchmark prevents a perfect score.
- **Multimodal: 75/100.** Verified text/image input and text output give useful coverage, though no public visual benchmark was found.
- **Coding: 68/100.** The system card documents CyBench 0.53 but provides no SWE-bench/LiveCodeBench result for standard software engineering.
- **Cost efficiency: 65/100.** Proprietary API access with no independently verified current price limits value assessment.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions; attractive chiefly for applications needing a very long documented context window.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
