# GPT 5.4 nano — findings by GPT 5.6 Terra
- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's cheapest GPT-5.4-class model for classification, extraction, ranking, and sub-agent tasks.
- **Provider / access:** OpenAI API.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.4-nano`
- **Context window:** 400K tokens; 128K maximum output.
- **Modalities:** Text-focused API model with reasoning efforts none through xhigh and tool support.
- **Pricing (as of 2026-10-05):** $0.20/M input, $0.02/M cached input, $1.25/M output.
- **Architecture:** Proprietary.
### Raw benchmarks found
- SWE-Bench Pro: **52.4%** (OpenAI, xhigh).
- Terminal-Bench 2.0: **46.3%** (OpenAI, xhigh).
- Toolathlon: **35.5%** (OpenAI, xhigh).
- GPQA Diamond: **82.8%** (OpenAI, xhigh).
- OSWorld-Verified: **39.0%** (OpenAI, xhigh).
### Normalized scores (1–100)
- **Tool use: 68/100.** Toolathlon 35.5% and Terminal-Bench 46.3% are capable but clearly non-frontier.
- **Reasoning: 83/100.** GPQA Diamond 82.8% is strong for a nano-priced tier.
- **Context window: 92/100.** 400K context and 128K output are generous for this price class.
- **Multimodal: 55/100.** No broad native multimodal coverage was verified in the retrieved model page.
- **Coding: 78/100.** 52.4% SWE-Bench Pro is solid for a small high-volume model.
- **Cost efficiency: 98/100.** $0.20/M input and $1.25/M output are exceptionally low.
- **Overall Score: 75/100.** Half-up mean of the five quality dimensions: 75.2.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
