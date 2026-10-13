# Claude Haiku 4.5 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Haiku 4.5 (`opencode/claude-haiku-4.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's October 2025 fastest, cheapest frontier-class model with extended thinking and computer use. Scores 73.3% on SWE-Bench Verified (matches Sonnet 4 on coding at 1/3 the cost), 80.7% on AIME 2025, 83.0% on MMMLU, 83.2% on Tau2 Retail, and 83.0% on Tau2 Telecom. 200K context window (64K max output). Neura Intelligence Index 59.0 (#142). Best for sub-agents and high-volume workloads. Extended thinking and computer use supported. Text and image input.
- **Provider / access:** Anthropic (API, Amazon Bedrock, Vertex AI). Proprietary. Also available via DeepInfra.
- **Release / knowledge:** October 15, 2025. Knowledge cutoff: February 1, 2025.
- **IDs:** `opencode/claude-haiku-4.5`
- **Context window:** 200,000 tokens (200K); 64,000 max output
- **Modalities:** Text, image in; text out
- **Pricing:** $1.00 in / $5.00 out per 1M

### Raw benchmarks found

Agent / tool use: Tau2 Retail 83.2%. Tau2 Telecom 83.0%. Computer use supported. Strong agentic capabilities for a fast/cheap model.

Reasoning / knowledge: AIME 2025 80.7%. MMMLU 83.0%. GPQA ~55-65% (estimated). Neura Intelligence Index 59.0. Good reasoning with extended thinking capability.

Coding: SWE-Bench Verified 73.3%. Matches Sonnet 4 on coding at 1/3 the cost. Strong coding performance.

Multimodal: Text and image input. Basic multimodal capability.

Long context: 200K context window (64K max output). Good long-context support.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 Retail 83.2%, Tau2 Telecom 83.0%. Computer use supported. Strong agentic capabilities for a fast/cheap model.
- **Reasoning: 62/100.** AIME 2025 80.7%, MMMLU 83.0%. GPQA ~55-65% (estimated). Extended thinking capability. Good reasoning for its speed/cost tier.
- **Context window: 60/100.** 200K context is good. 64K max output is solid. Not best-in-class (1M+ models exist) but adequate.
- **Multimodal: 45/100.** Text and image input. Basic multimodal capability. No specific multimodal benchmark scores found.
- **Coding: 68/100.** SWE-Bench Verified 73.3% matches Sonnet 4 on coding at 1/3 the cost. Strong coding performance for a fast/cheap model.
- **Cost efficiency: 75/100.** $1.00/$5.00 per 1M is cheap for frontier-class performance. Matches Sonnet 4 on coding at 1/3 the cost. Good value.
- **Overall Score: 60/100.** Mean of Tool (65) + Reasoning (62) + Context (60) + Multimodal (45) + Coding (68) = 300/5 = 60. Rounded to 61. Fast, cheap frontier-class model with strong coding and agentic capabilities. Excellent value for high-volume workloads and sub-agents.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
