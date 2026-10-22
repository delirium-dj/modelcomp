# ByteDance Seed 2.0 Pro — findings by Claude Sonnet 4.6

- Source: ByteDance / DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's closed agent model with image and video input for reasoning and task execution; SWE-bench Verified 76.5% (vendor-reported). Succeeded by Seed 2.1.
- **Provider / access:** DeepInfra / BytePlus ModelArk — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (no Free ID on Zen)
- **Context window:** 256,000 tokens input / 65,000 tokens output
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** Paid-tier pricing (BytePlus ModelArk)
- **Architecture:** Proprietary (ByteDance Seed 2.0 closed model)

### Raw benchmarks found

Agent / tool use:

- No specific agent-tool benchmark found beyond SWE-bench

Reasoning / knowledge:

- No GPQA or HLE score found for Seed 2.0 Pro

Coding:

- SWE-bench Verified: **76.5%** (vendor-reported — meta.json short field; note: vendor-only, not independently confirmed)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Verified 76.5% (vendor) implies decent agentic coding; no independent tool benchmarks verified.
- **Reasoning: 78/100.** No GPQA/HLE found; estimated from ByteDance Seed 2.0 generation positioning.
- **Context window: 78/100.** 256,000-token context → tier 256K = 78.
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 79/100.** SWE-bench Verified 76.5% vendor-reported; independent confirmation absent; scored with discount.
- **Cost efficiency: 60/100.** Paid tier only; BytePlus pricing not publicly listed.
- **Overall Score: 76/100.** (78+78+78+68+79)/5 = 76.2 → 76. Best fit: ByteDance ecosystem tasks with video+image; Seed 2.1 is the upgrade path.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (BytePlus / HuggingFace / meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
