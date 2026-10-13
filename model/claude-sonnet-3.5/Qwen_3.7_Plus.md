# Claude Sonnet 3.5 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Sonnet 3.5 (`anthropic/claude-3-5-sonnet`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation (June 2024, upgraded October 2024). GPQA Diamond 59.4%, SWE-bench Verified 33.4-49%, HumanEval 92.0%. 200K context (64K max output). Text + image input. $3/$15 per 1M. Now deprecated and superseded by Claude 4+ family. BenchLM rank #188 (28.45/100).
- **Provider / access:** Anthropic. Proprietary. Paid $3/$15 per 1M.
- **Release / knowledge:** June 2024 (upgraded October 2024). Now deprecated. Knowledge cutoff early 2024.
- **IDs:** `anthropic/claude-3-5-sonnet`
- **Context window:** 200,000 tokens (200K); 64,000 max output
- **Modalities:** Text + image in, text out
- **Pricing:** $3/$15 per 1M in/out

### Raw benchmarks found

Agent / tool use: Moderate tool use for its era. Now trails current models significantly.

Reasoning / knowledge: GPQA Diamond 59.4%. Moderate reasoning by 2026 standards. Was competitive in mid-2024.

Coding: SWE-bench Verified 33.4% (June 2024) → 49% (October 2024 upgraded). HumanEval 92.0%. Was leading in mid-2024, now trails far behind.

Multimodal: Text + image input. Good multimodal for its era.

Long context: 200K context (64K output). Good for 2024, now moderate.

### Normalized scores (1–100)

- **Tool use: 45/100.** Moderate tool use. Now trails current models significantly.
- **Reasoning: 48/100.** GPQA Diamond 59.4%. Moderate by 2026 standards. Was competitive in mid-2024.
- **Context window: 45/100.** 200K context (64K output). Good for 2024, now moderate.
- **Multimodal: 45/100.** Text + image input. Good for its era, now basic.
- **Coding: 40/100.** SWE-bench Verified 33.4-49%. Was leading in mid-2024, now far behind frontier (90%+).
- **Cost efficiency: 30/100.** $3/$15 per 1M is expensive for a deprecated model. Much better value available from current models.
- **Overall Score: 44.6/100.** Mean of Tool (45) + Reasoning (48) + Context (45) + Multimodal (45) + Coding (40) = 223/5 = 44.6. Rounded to 46. Deprecated mid-2024 model. Was competitive then, now far behind frontier. Expensive for its current capability level.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
