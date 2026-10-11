# Claude Sonnet 4.5 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Sonnet 4.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's mid-tier agentic model (Sep 2025). Designed for complex agentic workflows, SWE, and computer use. Featured speculative parallel execution and enhanced memory management. Scheduled for decommission Nov 30, 2026.
- **Provider / access:** Anthropic API (`claude-sonnet-4-5-20250929`), AWS Bedrock, Google Cloud. Messages API. Scheduled for deprecation 2026-11-30.
- **Release / knowledge:** 2025-09-29 release; knowledge cutoff estimated mid-2025. Deprecation: 2026-11-30.
- **IDs:** `anthropic/claude-sonnet-4-5-20250929`
- **Context window:** 200,000 tokens (1M in beta).
- **Modalities:** Text, image in; text out; tool calls; computer use; JSON mode.
- **Pricing (as of 2026-10-11):** $3.00 / $15.00 per 1M tokens (input/output).
- **Architecture:** Proprietary; Anthropic mid-tier model. Speculative parallel execution, enhanced memory management.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found
- Computer use capabilities demonstrated at release (source: anthropic.com)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **~77.2%** (source: serenitiesai.com; up to 82% with enhanced reasoning compute per some reports)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 200,000 token context window (1M in beta). No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 76/100.** Computer use capabilities were a key feature at launch. Speculative parallel execution for agentic workflows. Missing Terminal-Bench/GDPval verification.
- **Reasoning: 78/100.** No standalone GPQA/HLE scores. Strong reasoning inferred from SWE-bench performance and agentic workflow design. Superseded by Sonnet 5 and 5.5.
- **Context window: 75/100.** 200K standard (ref: 200K = 75). 1M in beta but not production-stable. Below current 1M standard.
- **Multimodal: 58/100.** Text + image in; text out. Computer use adds modest visual interaction capability. No audio/video input.
- **Coding: 82/100.** SWE-bench Verified ~77.2% is strong (up to 82% with enhanced compute). Top-tier at release. Now surpassed by Sonnet 5 and 5.5.
- **Cost efficiency: 72/100.** $3/$15 is moderate. Being deprecated with better successors at similar pricing (Sonnet 5.5 at $2/$10). Declining value.
- **Overall Score: 74/100.** Mean of (76 + 78 + 75 + 58 + 82) / 5 = 73.8, rounded to 74. Strong agentic model at launch; now a legacy product approaching deprecation.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (anthropic.com, openrouter.ai, serenitiesai.com, medium.com, claude.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
