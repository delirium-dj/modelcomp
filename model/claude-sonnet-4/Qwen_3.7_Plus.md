# Claude Sonnet 4 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Sonnet 4 (`anthropic/claude-sonnet-4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model that matched Opus 4 on SWE-bench Verified (72.7%) at $3/$15. Achieves 80.2% on SWE-bench (high compute), 70.0% on GPQA Diamond (no thinking), 85.4% on MMMLU (no thinking), 72.6% on MMMU (no thinking), and 33.1% on AIME (no thinking). 200K context window. Hybrid reasoning model with extended thinking + tool use (beta). 65% less likely to engage in shortcut/loophole behavior than Sonnet 3.7. Legacy tier superseded by Sonnet 4.5/4.6/5 but still served.
- **Provider / access:** Anthropic (API, Claude.ai, Amazon Bedrock, Vertex AI). Proprietary.
- **Release / knowledge:** May 22, 2025. Knowledge cutoff not specified.
- **IDs:** `anthropic/claude-sonnet-4`
- **Context window:** 200,000 tokens (200K)
- **Modalities:** Text, image in; text out
- **Pricing:** $3.00 in / $15.00 out per 1M

### Raw benchmarks found

Agent / tool use: SWE-bench Verified 72.7% (matched Opus 4). SWE-bench high compute 80.2%. Extended thinking with tool use (beta). Parallel tool execution. 65% less shortcut/loophole behavior than Sonnet 3.7.

Reasoning / knowledge: GPQA Diamond 70.0% (no thinking) · MMMLU 85.4% (no thinking) · AIME 33.1% (no thinking). Higher scores with extended thinking.

Coding: SWE-bench Verified 72.7% (matched Opus 4). SWE-bench high compute 80.2%. State-of-the-art at launch.

Multimodal: MMMU 72.6% (no thinking). Text and image input.

Long context: 200K context window.

### Normalized scores (1–100)

- **Tool use: 55/100.** SWE-bench Verified 72.7% (matched Opus 4) is outstanding. SWE-bench high compute 80.2% is excellent. Extended thinking with tool use. No τ²-bench or Terminal-bench reported for Sonnet 4.
- **Reasoning: 55/100.** GPQA Diamond 70.0% and MMMLU 85.4% are solid. AIME 33.1% is low. Higher scores with extended thinking. Hybrid reasoning model.
- **Context window: 60/100.** 200K context is moderate. Not best-in-class (1M+ models exist).
- **Multimodal: 50/100.** MMMU 72.6% is moderate. Text and image input. No standard multimodal benchmarks beyond MMMU.
- **Coding: 68/100.** SWE-bench Verified 72.7% matched Opus 4 (world's best at launch). SWE-bench high compute 80.2% is outstanding. State-of-the-art coding at launch.
- **Cost efficiency: 35/100.** $3/$15 per 1M is expensive. Legacy tier superseded by newer models. No cost advantage over predecessor.
- **Overall Score: 57.6/100.** Mean of Tool (55) + Reasoning (55) + Context (60) + Multimodal (50) + Coding (68) = 288/5 = 57.6. Rounded to 56 given legacy status, expensive pricing, and low AIME (33.1%). SWE-bench performance matching Opus 4 is the standout achievement.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
