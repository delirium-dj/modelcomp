# GPT-5.3-Codex — findings by GPT 5.6 Terra
- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI agentic coding model for long-running software work.
- **Provider / access:** OpenAI Codex/API.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `openai/gpt-5.3-codex`.
- **Context window:** no verified current specification found.
- **Modalities:** Computer use and coding-agent tools.
- **Pricing (as of 2026-10-02):** $1.75 input/$14 output per million tokens.
- **Architecture:** Proprietary.
### Raw benchmarks found
- Terminal-Bench 2.0: **77.3%**; GDPval: **70.9%**; OSWorld-Verified: **64.7%** (OpenAI).
- SWE-Bench Pro: **56.8%**; SWE-Lancer IC Diamond: **81.4%** (OpenAI).
### Normalized scores (1–100)
- **Tool use: 88/100.** Terminal-Bench and OSWorld show strong execution.
- **Reasoning: 85/100.** GDPval 70.9% supports capable professional reasoning.
- **Context window: 80/100.** No verified current context specification found.
- **Multimodal: 70/100.** Computer-use vision is documented; coverage is incomplete.
- **Coding: 90/100.** 77.3% Terminal-Bench and 81.4% SWE-Lancer are strong, with 56.8% SWE-Bench Pro capping the score.
- **Cost efficiency: 83/100.** $1.75/$14 is competitive for this capability tier.
- **Overall Score: 83/100.** Half-up mean of five quality dimensions.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using OpenAI's GPT-5.3-Codex release evaluation; scores are normalized interpretations.
