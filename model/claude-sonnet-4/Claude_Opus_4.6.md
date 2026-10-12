# Claude Sonnet 4 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Sonnet 4
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's mid-tier model (May 2025). First model to make "Claude Code" a professional-grade tool. Improved agentic reliability and multi-step instruction following. Now legacy; superseded by Sonnet 4.5, 4.6, 5, and 5.5.
- **Provider / access:** Anthropic API (`claude-sonnet-4-20250514`), AWS Bedrock, Google Cloud. Messages API. Legacy.
- **Release / knowledge:** 2025-05-22 release. Now legacy.
- **IDs:** `anthropic/claude-sonnet-4-20250514`
- **Context window:** 200,000 tokens.
- **Modalities:** Text, image in; text out; tool calls; JSON mode. Max 16K output tokens.
- **Pricing (as of 2026-10-11):** $3.00 / $15.00 per 1M tokens (input/output). Legacy pricing.
- **Architecture:** Proprietary; Anthropic mid-tier model. Improved agentic reliability.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found (pre-TB 2.0 era)
- Improved agentic reliability and instruction following (source: claudefa.st)

Reasoning / knowledge:

- GPQA Diamond: **~75.4%** (source: aireleasetracker.com)
- HLE: no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **72.7%** (source: surge45.com, aireleasetracker.com, fast.io)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 200,000 token context window. Max 16K output. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 72/100.** Pre-TB 2.0 era. Improved agentic reliability made Claude Code professional-grade. 16K output limit constrains complex agent loops.
- **Reasoning: 76/100.** GPQA Diamond ~75.4% was solid for mid-2025 but now below frontier (90%+). Missing HLE/ARC-AGI data.
- **Context window: 75/100.** 200K verified (ref: 200K = 75). 16K max output is restrictive. Below 1M standard.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic multimodal = 50–60 range.
- **Coding: 78/100.** SWE-bench Verified 72.7% was strong for mid-2025. Professional-grade Claude Code integration. Now surpassed by newer Sonnet versions.
- **Cost efficiency: 72/100.** $3/$15 is moderate. Better successors now available at same or lower cost (Sonnet 5.5: $2/$10).
- **Overall Score: 71/100.** Mean of (72 + 76 + 75 + 55 + 78) / 5 = 71.2, rounded to 71. Historic milestone for Claude Code; now outclassed across all dimensions.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (anthropic.com, vals.ai, aireleasetracker.com, claudefa.st, surge45.com, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
