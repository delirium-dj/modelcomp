# GPT-5.3-Codex-Spark — findings by GPT 5.6 Terra
- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-5.3-Codex-Spark
- **Short description:** OpenAI's lower-latency GPT-5.3-Codex variant for agentic software engineering.
- **Provider / access:** OpenAI Codex.
- **Release / knowledge:** 2026.
- **IDs:** `openai/gpt-5.3-codex-spark`.
- **Context window:** no verified specification found.
- **Modalities:** Coding-agent tool use.
- **Pricing (as of 2026-10-02):** current price not verified.
- **Architecture:** Proprietary.
### Raw benchmarks found
- OpenAI reports strong SWE-Bench Pro and Terminal-Bench 2.0 performance while completing tasks in a fraction of GPT-5.3-Codex's time; exact public figures were not found in accessible launch text.
### Normalized scores (1–100)
- **Tool use: 78/100.** Agentic engineering positioning and reported Terminal-Bench strength, capped for missing disclosed number.
- **Reasoning: 80/100.** Same Codex-family design, with sparse public measurements.
- **Context window: 80/100.** No verified context specification found.
- **Multimodal: 65/100.** No complete modality contract verified.
- **Coding: 84/100.** OpenAI reports strong SWE-Bench Pro and Terminal-Bench performance, capped because exact results were not published in the accessible source.
- **Cost efficiency: 85/100.** Designed for substantially faster task completion.
- **Overall Score: 77/100.** Half-up mean of five quality dimensions.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using OpenAI’s GPT-5.3-Codex-Spark announcement; scores are normalized interpretations.
