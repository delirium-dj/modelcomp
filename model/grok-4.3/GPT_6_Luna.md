# Grok 4.3 — findings by GPT-6 Luna

- Source: xAI/Grok 4.3
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI reasoning model for tool-using agents, long-document work, and enterprise productivity. It supports configurable reasoning effort and structured/function calling.
- **Provider / access:** xAI API model ID `grok-4.3`; also available through Amazon Bedrock as `xai.grok-4.3` and other cloud platforms. Chat Completions and Responses interfaces are supported.
- **Release / knowledge:** Launched 2026-06-15; knowledge cutoff not verified.
- **IDs:** `xai/grok-4.3` (catalog); API `grok-4.3`.
- **Context window:** 1,000,000 tokens; xAI applies higher pricing when prompts reach 200K tokens.
- **Modalities:** Text and image input, text output; function calling, structured output, and configurable reasoning. Bedrock lists broader multimodal endpoints, but core xAI API documentation verifies text/image in and text out.
- **Pricing (as of 2026-10-28):** xAI global API below 200K prompt tokens: $1.25 input, $0.20 cached input, $2.50 output per 1M tokens; at/above 200K: $2.50/$0.40/$5.00. Regional/provider rates can differ.
- **Architecture:** Proprietary; parameter count and architecture undisclosed.

### Raw benchmarks found

xAI and Amazon describe comparative results; third-party Artificial Analysis values below are from a model aggregation page and are identified as such.

Agent / tool use:

- τ²-Bench: **97.7%** (third-party model listing; task variant not fully documented there).
- Artificial Analysis Tau2 Telecom: xAI says **#1 among major frontier labs**, without publishing the exact score in the announcement.
- Vals AI Case Law and Corporate Finance: xAI claims leading results; exact scores were not found.
- No exact official Terminal-Bench or Toolathlon result was verified in the sources reviewed.

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (third-party model listing).
- Artificial Analysis Intelligence Index: **24.9** (third-party listing; endpoint snapshot not stated).
- xAI reports #1 Artificial Analysis Omniscience among major frontier models but does not give the exact score in the launch announcement.

Coding:

- SciCode: **48.3%** (third-party listing).
- Artificial Analysis Coding Index: **42.2%** (third-party listing).
- No verified SWE-bench result found in the sources reviewed.

Long context:

- 1M token context is documented; no MRCR/RULER/GraphWalks retrieval score verified.

### Normalized scores (1–100)

- **Tool use: 88/100.** τ²-Bench 97.7% and xAI's reported Tau2 Telecom leadership support strong tool use; capped for limited disclosed benchmark details and no verified coding-agent benchmark.
- **Reasoning: 83/100.** GPQA Diamond 90.1% and AA Index 24.9 are solid, but third-party listing details and exact official evaluation configuration are limited.
- **Context window: 90/100.** 1M capacity reaches the top tier, but no retrieval accuracy score supports a near-perfect rating.
- **Multimodal: 65/100.** Image input is documented, but audio/video input and non-text output are not verified for the core xAI API model.
- **Coding: 78/100.** SciCode 48.3 and Coding Index 42.2 indicate useful coding performance; no SWE-bench or stronger agentic coding evidence was verified.
- **Cost efficiency: 85/100.** $1.25/$2.50 per million is moderate for the reported capability; long-context pricing doubles above the prompt threshold.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions; strongest evidence is in tool-oriented enterprise work, with coding and long-context retrieval less independently documented.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research; xAI's qualitative claims and third-party numerical listings are explicitly distinguished. Normalized scores are independent interpretations.
- Sources: [xAI Grok 4.3 API documentation](https://docs.x.ai/developers/models/grok-4.3); [Amazon Bedrock model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-xai-grok-4-3.html); [xAI launch announcement](https://x.ai/news/grok-amazon-bedrock); [Artificial Analysis model listing](https://artificialanalysis.ai/models/grok-4.3).
