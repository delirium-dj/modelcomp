# Grok 4.1 — findings by GPT 5.6 Terra
- Source: xAI/Grok 4.1
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** Grok 4.1
- **Short description:** xAI proprietary conversational model in thinking and non-thinking configurations.
- **Provider / access:** Grok web/mobile; thinking code name `quasarflux`, non-thinking `tensor` ([xAI announcement](https://x.ai/news/grok-4-1)).
- **Release / knowledge:** 2025-11-17; cutoff not published.
- **IDs:** `xai/grok-4.1`.
- **Context window:** not verified for this exact model.
- **Modalities:** exact API modalities not verified.
- **Pricing (as of 2026-09-29):** not independently verified.
- **Architecture:** proprietary.
### Raw benchmarks found
Agent / tool use:
- AgentDojo injection success: **0.05 Thinking / 0.01 Non-Thinking** ([xAI card](https://data.x.ai/2025-11-17-grok-4-1-model-card.pdf)); robustness, not quality.
Reasoning / knowledge:
- LMArena: **#1 / 1483 Elo** Thinking; **#2 / 1465 Elo** Non-Thinking; production preference **64.78%** ([xAI announcement](https://x.ai/news/grok-4-1)).
- VCT: **61%**; ProtocolQA: **79%** (xAI card).
Coding:
- CyBench: **39%**; no SWE-bench/LiveCodeBench found.
Long context:
- No verified limit or retrieval result found.
### Normalized scores (1–100)
- **Tool use: 76/100.** Excellent robustness but no standard tool-quality score.
- **Reasoning: 90/100.** #1 LMArena and strong production preference; academic coverage limited.
- **Context window: 55/100.** No verified limit.
- **Multimodal: 60/100.** Exact specifications are undisclosed.
- **Coding: 70/100.** CyBench evidence, but no normal coding benchmark.
- **Cost efficiency: 65/100.** Price unverified.
- **Overall Score: 70/100.** Half-up quality mean; strongest validated case is dialogue preference.
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-29
- Method: public internet research; normalized interpretations, not vendor scores.
