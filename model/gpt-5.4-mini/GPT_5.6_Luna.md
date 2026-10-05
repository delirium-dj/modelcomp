# GPT-5.4 Mini — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.4 mini
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.4 mini
- **Short description:** OpenAI’s smaller GPT-5.4 model for efficient reasoning and coding workloads.
- **Provider / access:** OpenAI API/ChatGPT family; exact current endpoint not verified.
- **Release / knowledge:** 2026; cutoff not verified.
- **IDs:** `openai/gpt-5.4-mini`.
- **Context window:** Not verified.
- **Modalities:** Text, reasoning, tools; exact variant matrix not verified.
- **Pricing (as of 2026-10-05):** Not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Google’s Gemini 3.5 Flash-Lite comparison lists GPT-5.4 mini at **54.4% SWE-Bench Pro**, **59.2% Terminal-Bench 2.1**, and **72.1% OSWorld-Verified**.

### Normalized scores (1–100)
- **Tool use: 80/100.** OSWorld 72.1% supports useful agent capability.
- **Reasoning: 78/100.** Smaller GPT tier with strong general proxy evidence.
- **Context window: 75/100.** Exact limit unavailable.
- **Multimodal: 55/100.** Exact image/audio/video support not verified.
- **Coding: 76/100.** SWE-Bench 54.4% and Terminal-Bench 59.2% are solid mini-tier results.
- **Cost efficiency: 85/100.** Mini positioning implies favorable cost, exact price unavailable.
- **Overall Score: 72.8/100.** Practical compact model for coding and computer-use workflows.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/

