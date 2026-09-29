# Kimi K2.7 Code — findings by GPT 5.6 Terra
- Source: Moonshot AI/Kimi K2.7 Code
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weight, thinking-first coding and agent model.
- **Provider / access:** `moonshotai/Kimi-K2.7-Code` on [Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.7-Code); API is OpenAI/Anthropic compatible.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.7-Code`.
- **Context window:** 262,144 tokens in the official evaluation protocol.
- **Modalities:** text and experimental video chat; text output; forced thinking.
- **Pricing (as of 2026-09-29):** not independently verified.
- **Architecture:** same architecture as K2.5/K2.6; native INT4 quantization.
### Raw benchmarks found
Agent / tool use:
- MCP Atlas: **76.0%** (Moonshot [model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code), 100-call budget).
- MCPMark Verified: **81.1%**; Kimi Claw 24/7 Bench: **46.9%** (Moonshot card).
Reasoning / knowledge:
- No verified public GPQA/HLE score found for this exact ID.
Coding:
- Kimi Code Bench v2: **62.0**; Program Bench: **53.6**; MLS-Bench Lite: **35.1** (Moonshot card).
Long context:
- **262,144 tokens** in evaluation; no retrieval score found.
### Normalized scores (1–100)
- **Tool use: 87/100.** Strong MCP results; long-horizon Claw 46.9% caps reliability.
- **Reasoning: 75/100.** Thinking is mandatory, but no direct general-reasoning accuracy was published.
- **Context window: 85/100.** Verified 262k context, without a retrieval measurement.
- **Multimodal: 75/100.** Experimental video is supported, but coverage is narrow.
- **Coding: 83/100.** Good agentic-code results, capped by MLS-Bench Lite 35.1.
- **Cost efficiency: 80/100.** Open weights and INT4 help deployment; current API pricing is unverified.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; well suited to MCP coding agents.
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-29
- Method: public internet research; normalized interpretations, not vendor scores.
