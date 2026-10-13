# Ring-2.6-1T — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ring-2.6-1T (`opencode/ring-2.6.1t`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's (Ant Group) trillion-parameter open-weight reasoning flagship (1T total / 63B active, MIT). AIME 26: 95.83 (xhigh), GPQA Diamond 85.7%. 128K native (256K with YaRN). Adjustable Reasoning Effort (high/xhigh). ~$0.30/$2.50 per 1M. Free OpenRouter endpoint. Strong agent execution and hard reasoning.
- **Provider / access:** InclusionAI (Ant Group). Open weights (MIT). ~$0.30/$2.50 per 1M. Free OpenRouter endpoint.
- **Release / knowledge:** May 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/ring-2.6.1t`
- **Context window:** 128K native (256K with YaRN); 262,144 served
- **Modalities:** Text in/out
- **Pricing:** ~$0.30/$2.50 per 1M; free OpenRouter endpoint

### Raw benchmarks found

Agent / tool use: Strong agent execution. Designed for real-world agent workflows. Adjustable reasoning effort.

Reasoning / knowledge: AIME 26: 95.83 (xhigh), GPQA Diamond 85.7%. Frontier reasoning.

Coding: Strong coding for agentic workflows. Specific SWE-bench scores not found.

Multimodal: Text in/out only. No multimodal.

Long context: 128K native (256K with YaRN). Good.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong agent execution. Adjustable reasoning effort. Designed for agent workflows.
- **Reasoning: 82/100.** AIME 26: 95.83, GPQA Diamond 85.7%. Frontier reasoning.
- **Context window: 50/100.** 128K native (256K with YaRN). Good.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 65/100.** Strong coding for agentic workflows. Specific scores not found.
- **Cost efficiency: 80/100.** ~$0.30/$2.50 per 1M. MIT open weights. Free OpenRouter endpoint. Good value.
- **Overall Score: 56/100.** Mean of Tool (68) + Reasoning (82) + Context (50) + Multimodal (15) + Coding (65) = 280/5 = 56. Rounded to 66. 1T-parameter thinking model. Frontier AIME and GPQA. MIT open weights. Adjustable reasoning effort.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
