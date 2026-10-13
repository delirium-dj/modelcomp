# GPT-5.4 Nano — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-5.4 Nano (`opencode/gpt-5.4-nano`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's March 2026 smallest, cheapest GPT-5.4 member (API-only) for classification, extraction, ranking, and coding subagents. Scores 81.7% on GPQA Diamond, 76.0% on τ²-Bench, and 56.1% on Coding Index. 400K context window (128K max output). Text and image input. Optimized for speed-critical and high-volume tasks. $0.20/$1.25 per 1M (cached $0.02).
- **Provider / access:** OpenAI (API-only). Proprietary.
- **Release / knowledge:** March 17, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/gpt-5.4-nano`
- **Context window:** 400,000 tokens (400K); 128,000 max output
- **Modalities:** Text, image in; text out
- **Pricing:** $0.20 in / $1.25 out per 1M (cached $0.02)

### Raw benchmarks found

Agent / tool use: τ²-Bench 76.0%. Strong agentic capability for a nano model.

Reasoning / knowledge: GPQA Diamond 81.7%. Intelligence Index 11.7. Good reasoning for its size.

Coding: Coding Index 56.1%. SWE-Bench Pro mentioned but specific score not found. Moderate coding.

Multimodal: Text and image input. No specific multimodal benchmarks.

Long context: 400K context window (128K max output). Good.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-Bench 76.0%. Strong agentic capability for a nano model.
- **Reasoning: 62/100.** GPQA Diamond 81.7%. Good reasoning for its size/cost tier.
- **Context window: 65/100.** 400K context with 128K max output. Good.
- **Multimodal: 40/100.** Text and image input. No benchmarks. Basic multimodal.
- **Coding: 50/100.** Coding Index 56.1%. Moderate coding for a nano model.
- **Cost efficiency: 88/100.** $0.20/$1.25 per 1M is very cheap. Cached input $0.02. Excellent value.
- **Overall Score: 55.4/100.** Mean of Tool (60) + Reasoning (62) + Context (65) + Multimodal (40) + Coding (50) = 277/5 = 55.4. Rounded to 57. Smallest, cheapest GPT-5.4 member with strong GPQA and good agentic capability. Excellent cost efficiency.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
