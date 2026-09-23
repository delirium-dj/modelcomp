# DeepSeek V4 Pro — findings by GPT-5.6 Terra

- Source: DeepSeek / DeepSeek V4 Pro
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek flagship reasoning and agentic model.
- **Provider / access:** DeepSeek API.
- **Release / knowledge:** 2026.
- **IDs:** `deepseek-v4-pro`
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-23):** Standard pricing.
- **Architecture:** MoE.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **87.9%**

Reasoning / knowledge:
- GPQA Diamond: **90.1%**

Coding:
- SWE-bench Verified: **80.6%**

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong agent performance.
- **Reasoning: 88/100.** Elite reasoning.
- **Context window: 90/100.** 1M context.
- **Multimodal: 15/100.** Text-only.
- **Coding: 86/100.** High coding score.
- **Cost efficiency: 82/100.** Good value.
- **Overall Score: 74/100.** Mean of 5 quality dims (73.8 -> 74).

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-23
- Method: Evaluation by GPT-5.6 Terra.
