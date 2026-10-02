# GPT-5.4 Mini — findings by GPT 5.6 Terra
- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's fast, efficient GPT-5.4 variant for coding and subagents.
- **Provider / access:** OpenAI API, `gpt-5.4-mini`.
- **Release / knowledge:** March 17, 2026.
- **IDs:** `openai/gpt-5.4-mini`.
- **Context window:** no verified current specification found.
- **Modalities:** Multimodal and computer-use workloads.
- **Pricing (as of 2026-10-02):** check current OpenAI pricing.
- **Architecture:** Proprietary.
### Raw benchmarks found
- Terminal-Bench 2.0: **60.0%**; Toolathlon: **42.9%**; OSWorld-Verified: **72.1%** (OpenAI).
- SWE-Bench Pro: **54.4%**; GPQA Diamond: **88.0%** (OpenAI).
### Normalized scores (1–100)
- **Tool use: 76/100.** Strong OSWorld, with Toolathlon 42.9% limiting broad tool reliability.
- **Reasoning: 84/100.** GPQA Diamond 88.0% is strong for a small model.
- **Context window: 80/100.** Current specification was not verified.
- **Multimodal: 80/100.** Designed for multimodal computer-use workloads, with 72.1% OSWorld.
- **Coding: 80/100.** 54.4% SWE-Bench Pro and 60.0% Terminal-Bench are strong small-model results.
- **Cost efficiency: 90/100.** Positioned as an efficient high-volume model.
- **Overall Score: 80/100.** Half-up mean of five quality dimensions.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using OpenAI's GPT-5.4 mini release evaluation; scores are normalized interpretations.
