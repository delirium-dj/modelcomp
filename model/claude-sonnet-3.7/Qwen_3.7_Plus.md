# Claude Sonnet 3.7 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Sonnet 3.7 (`opencode/claude-sonnet-3.7`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's February 2025 first hybrid-reasoning model with fast mode plus visible extended thinking on a configurable budget. Launch-time SWE-bench Verified leader at 62.3-63.2%. Scores 84.8% on GPQA, 86.1% on MMMLU, 96.2% on MATH-500, 93.2% on IFEval, and 81.2% on TAU-bench Retail. 200K context window (128K max output). Extended thinking with up to 64K tokens. Deprecated and superseded by Sonnet 4/4.5/4.6 but still served. Text and image input.
- **Provider / access:** Anthropic (API, Claude.ai, Amazon Bedrock, Google Cloud). Proprietary.
- **Release / knowledge:** February 24, 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/claude-sonnet-3.7`
- **Context window:** 200,000 total; 128,000 max output; 64,000 max for extended thinking
- **Modalities:** Text, image in; text out
- **Pricing:** $3.00 in / $15.00 out per 1M ($0.30 cached input)

### Raw benchmarks found

Agent / tool use: TAU-bench Retail 81.2%. SWE-bench Verified 62.3-63.2% (launch-time state-of-the-art). Strong agentic capabilities for its time.

Reasoning / knowledge: GPQA 84.8%. MMMLU 86.1%. MATH-500 96.2%. IFEval 93.2%. Excellent reasoning with extended thinking capability.

Coding: SWE-bench Verified 62.3-63.2% (launch-time leader). Terminal-Bench: mentioned but specific score not found. Strong coding for Feb 2025.

Multimodal: Text and image input. No specific multimodal benchmark scores found.

Long context: 200K context window with 128K max output. Extended thinking up to 64K tokens.

### Normalized scores (1–100)

- **Tool use: 60/100.** TAU-bench Retail 81.2% is strong. SWE-bench Verified 62.3-63.2% was state-of-the-art at launch (Feb 2025) but has been surpassed by newer models. Extended thinking with tool use.
- **Reasoning: 72/100.** GPQA 84.8%, MMMLU 86.1%, MATH-500 96.2%, IFEval 93.2% are excellent. Extended thinking capability with configurable budget. Hybrid reasoning model.
- **Context window: 65/100.** 200K context is good. 128K max output is solid. Extended thinking up to 64K tokens. Not best-in-class (1M+ models exist) but adequate.
- **Multimodal: 45/100.** Text and image input supported. No specific multimodal benchmark scores found. Basic multimodal capability.
- **Coding: 58/100.** SWE-bench Verified 62.3-63.2% was launch-time leader but has been surpassed. Terminal-Bench mentioned. Good coding for Feb 2025 but now mid-tier.
- **Cost efficiency: 35/100.** $3/$15 per 1M is expensive. Deprecated model superseded by newer versions. No cost advantage over predecessor.
- **Overall Score: 60/100.** Mean of Tool (60) + Reasoning (72) + Context (65) + Multimodal (45) + Coding (58) = 300/5 = 60. Rounded to 56 given deprecated status, expensive pricing, and superseded by Sonnet 4/4.5/4.6. Launch-time SWE-bench leader and strong reasoning scores are notable achievements.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
