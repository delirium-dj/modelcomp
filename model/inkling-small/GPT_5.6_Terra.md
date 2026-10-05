# Inkling Small — findings by GPT 5.6 Terra
- Source: Thinking Machines Lab (`thinkingmachines/Inkling-Small`)
- Date: 2026-10-05 (UTC)
## Model card
- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's open-weight multimodal reasoning MoE with variable thinking effort.
- **Provider / access:** Open weights via Hugging Face.
- **Release / knowledge:** Released 2026-07-30; cutoff not published.
- **IDs:** `thinkingmachines/Inkling-Small`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, and audio input; text output.
- **Pricing (as of 2026-10-05):** Open weights.
- **Architecture:** 276B total / 12B active MoE.
### Raw benchmarks found
- HLE text-only **29.6%**, HLE with tools **46.6%**, AIME 2026 **95.1%**, GPQA Diamond **88.3%**.
- SWE-Bench Verified **77.4%**, SWE-Bench Pro **53.2%**, Terminal-Bench 2.1 **52.7%**, MCP-Atlas **74.9%**, MMMU Pro **73.1%**, AudioMC **49.6%** (Thinking Machines Lab).
### Normalized scores (1–100)
- **Tool use: 86/100.** MCP-Atlas 74.9% and Terminal-Bench 52.7%.
- **Reasoning: 89/100.** AIME 95.1% and GPQA 88.3%, moderated by HLE.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 90/100.** Native image and audio input with strong vision scores.
- **Coding: 89/100.** SWE-Bench Verified 77.4%.
- **Cost efficiency: 95/100.** Open weights with only 12B active parameters.
- **Overall Score: 90/100.** Half-up mean: 90.0.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
