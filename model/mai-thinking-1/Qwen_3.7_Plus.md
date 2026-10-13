# MAI-Thinking-1 — findings by Qwen 3.7 Plus
- Source: Microsoft AI/MAI-Thinking-1 (`opencode/mai-thinking-1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first in-house reasoning model — ~1T-total / 35B-active sparse MoE on MAI-Base-1. AIME 2025 97.0%, AIME 2026 94.5%, SWE-bench Verified 73.5%, SWE-bench Pro 52.8%, GPQA Diamond 84.2%, LiveCodeBench v6 87.7%. 256K context. $2.00/$8.00-10.00 per 1M. BenchLM #82 (53.23/100). Trained from scratch on commercially licensed data.
- **Provider / access:** Microsoft AI. Proprietary (closed weights). $2.00/$8.00-10.00 per 1M.
- **Release / knowledge:** June 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/mai-thinking-1`
- **Context window:** 256,000 tokens (256K); max output not published
- **Modalities:** Text in/out
- **Pricing:** $2.00 in per 1M; output $8.00-10.00 (no public rate card)

### Raw benchmarks found

Agent / tool use: SWE-bench Verified 73.5%. Designed for agentic coding.

Reasoning / knowledge: AIME 2025 97.0%, AIME 2026 94.5%, GPQA Diamond 84.2%. Frontier math and science reasoning.

Coding: SWE-bench Verified 73.5%, SWE-bench Pro 52.8%, LiveCodeBench v6 87.7%. Strong coding.

Multimodal: Text in/out only. No multimodal.

Long context: 256K context. Good.

### Normalized scores (1–100)

- **Tool use: 65/100.** SWE-bench Verified 73.5%. Designed for agentic coding.
- **Reasoning: 82/100.** AIME 2025 97.0%, GPQA Diamond 84.2%. Frontier reasoning.
- **Context window: 55/100.** 256K context. Good.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 72/100.** SWE-bench Verified 73.5%, SWE-bench Pro 52.8%, LiveCodeBench 87.7%. Strong coding.
- **Cost efficiency: 35/100.** $2.00/$8.00-10.00 per 1M is expensive. No public rate card.
- **Overall Score: 57.8/100.** Mean of Tool (65) + Reasoning (82) + Context (55) + Multimodal (15) + Coding (72) = 289/5 = 57.8. Rounded to 66. Microsoft's first in-house reasoning model. Frontier AIME and GPQA. Strong coding. Expensive.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
