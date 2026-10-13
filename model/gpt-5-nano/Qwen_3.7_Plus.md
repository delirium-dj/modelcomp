# GPT-5 Nano — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-5 Nano (`opencode/gpt-5-nano`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's August 2025 fastest, cheapest GPT-5 tier for high-volume summarization, classification, and device automation. 400K context (128K output). Text + image input. Reasoning and tool calls. $0.05/$0.40 per 1M ($0.005 cached). Legacy — OpenAI steers new work to GPT-5.6 Luna.
- **Provider / access:** OpenAI. Proprietary. $0.05/$0.40 per 1M.
- **Release / knowledge:** August 2025. Now legacy (superseded by GPT-5.6 Luna). Knowledge cutoff mid-2025.
- **IDs:** `opencode/gpt-5-nano`
- **Context window:** 400,000 tokens (400K); 128,000 max output
- **Modalities:** Text, image in; text out; reasoning; tool calls
- **Pricing:** $0.05/$0.40 per 1M ($0.005 cached)

### Raw benchmarks found

Agent / tool use: Tool calls supported. Reasoning mode. Designed for device automation.

Reasoning / knowledge: Smallest GPT-5 tier. Lower reasoning than full GPT-5. Legacy model.

Coding: Lower coding than full GPT-5 (SWE-bench Verified 74.9% for full GPT-5). Nano variant lower.

Multimodal: Text + image input. Basic multimodal.

Long context: 400K context (128K output). Excellent.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calls supported. Reasoning mode. Designed for automation.
- **Reasoning: 42/100.** Smallest GPT-5 tier. Lower reasoning. Legacy model.
- **Context window: 65/100.** 400K context (128K output). Excellent.
- **Multimodal: 35/100.** Text + image input. Basic multimodal.
- **Coding: 38/100.** Lower coding than full GPT-5. Nano variant for simple tasks.
- **Cost efficiency: 92/100.** $0.05/$0.40 per 1M. $0.005 cached. Extremely cheap. Excellent value.
- **Overall Score: 46/100.** Mean of Tool (50) + Reasoning (42) + Context (65) + Multimodal (35) + Coding (38) = 230/5 = 46. Rounded to 52. Legacy nano model. Extremely cheap. Superseded by GPT-5.6 Luna for speed-tier work.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
