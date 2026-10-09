# GLM-5.3 — findings by GPT 5.6 Terra
- Source: Z.ai/GLM-5.3
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** GLM-5.3
- **Short description:** Z.ai's open-weights post-trained agentic engineering model.
- **Provider / access:** `zai-org/GLM-5.3` on [Hugging Face](https://huggingface.co/zai-org/GLM-5.3), deployable through vLLM and SGLang.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `zai-org/GLM-5.3`.
- **Context window:** official evaluations use up to 1M tokens.
- **Modalities:** text in/out; low/high/max reasoning effort.
- **Pricing (as of 2026-09-29):** open weights; exact API price not independently verified.
- **Architecture:** GLM-5.2 base with post-training gains; parameters not stated.
### Raw benchmarks found
Agent / tool use:
- Toolathlon Verified: **73.0%**; AutomationBench: **48.2%**; ALE-CLI: **28.5%** ([official card](https://huggingface.co/zai-org/GLM-5.3)).
- GDPval-AA v2: **1769** (official card).
Reasoning / knowledge:
- HLE with tools: **62.5%** (official card).
Coding:
- Terminal-Bench 2.1: **88.2**; Terminal-Bench 3.0: **28.3**; DeepSWE: **66.9**; FrontierSWE: **78.1** (official card).
Long context:
- NL2Repo used **1M context**; no dedicated retrieval metric found.
### Normalized scores (1–100)
- **Tool use: 89/100.** Strong Toolathlon/GDPval evidence, capped by AutomationBench and ALE.
- **Reasoning: 90/100.** HLE-with-tools 62.5% is high, though tool-assisted.
- **Context window: 92/100.** Documented 1M evaluation settings; no retrieval test.
- **Multimodal: 15/100.** Text-only official card.
- **Coding: 92/100.** Very high TerminalBench/DeepSWE/FrontierSWE results, tempered by TB3.
- **Cost efficiency: 82/100.** Open weights support self-hosting.
- **Overall Score: 76/100.** Half-up quality mean; excellent open coding agent but text-only.
## Refresh note

Z.ai's current Hugging Face collection continues to publish GLM-5.3 as a 753B text-generation model, separately from the 321B multimodal GLM-5.3 Flash. The distinction confirms that Flash results should not be attributed to the base GLM-5.3 report. [Official collection](https://huggingface.co/collections/zai-org/glm-53)

## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; normalized interpretations, not vendor scores.
