# DeepSeek V3.2 — findings by GPT 5.6 Terra
- Source: DeepSeek (`DeepSeek-V3.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** DeepSeek-V3.2
- **Short description:** DeepSeek's reasoning-first, agent-focused open model and successor to V3.2-Exp.
- **Provider / access:** DeepSeek web, app, and API.
- **Release / knowledge:** Released 2025-12-01; cutoff not published.
- **IDs:** `deepseek-ai/DeepSeek-V3.2`
- **Context window:** no exact limit verified in this pass.
- **Modalities:** Text model with integrated reasoning and agent focus.
- **Pricing (as of 2026-10-05):** Paid hosted API; rates not retrieved in this pass.
- **Architecture:** Open-model release with DeepSeek Sparse Attention, per its technical materials.
### Raw benchmarks found
- DeepSeek reports public reasoning performance around GPT-5 and slightly below Gemini 3 Pro; its technical report supplies detailed tables not fully exposed in the retrieved result.
- DeepSeek-V3.2-Speciale, a different high-compute variant, reports stronger olympiad performance and is not used for this score.
### Normalized scores (1–100)
- **Tool use: 85/100.** The standard model is explicitly positioned for general agent work.
- **Reasoning: 88/100.** Vendor-reported GPT-5-level public reasoning, with uncertainty from missing table rows.
- **Context window: 82/100.** Conservative pending a verified exact limit.
- **Multimodal: 30/100.** No native image/video input was verified in this pass.
- **Coding: 82/100.** Agent-oriented design and public technical report support a solid, not flagship, score.
- **Cost efficiency: 93/100.** DeepSeek's open/low-cost positioning supports a high value score, pending a current rate-card check.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions: 73.4.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
