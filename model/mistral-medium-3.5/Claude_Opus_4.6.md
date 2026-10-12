# Mistral Medium 3.5 — findings by Claude Opus 4.6

- Source: Mistral AI / Mistral Medium 3.5
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's flagship merged dense model (Apr 2026). 128B parameters combining instruction-following, reasoning, and coding into one architecture. Replaces Medium 3.1 + Magistral + Devstral 2. 40+ language support. Modified MIT license.
- **Provider / access:** Mistral API, OpenRouter, self-hosted (4+ GPUs). Modified MIT license (open weights).
- **Release / knowledge:** 2026-04-29 release.
- **IDs:** `mistral/mistral-medium-3.5`
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image in; text out; function calling; structured JSON output. Configurable reasoning effort. 40+ languages.
- **Pricing (as of 2026-10-12):** $1.50 / $7.50 per 1M tokens (input/output). Self-hosted option.
- **Architecture:** 128B dense parameters. Modified MIT license. Unified model replacing 3 predecessors.

### Raw benchmarks found

- SWE-bench Verified: **~77.6%** (source: Mistral AI reporting)

### Normalized scores (1–100)

- **Tool use: 78/100.** Native function calling. Agentic workflow optimization (Mistral Vibe CLI). Configurable reasoning effort. Missing Terminal-Bench data.
- **Reasoning: 80/100.** Configurable reasoning modes (fast ↔ intensive). Unified model combining reasoning strengths. Missing GPQA/HLE standalone data.
- **Context window: 78/100.** 256K verified (ref: 256K ≈ 78).
- **Multimodal: 55/100.** Text + image in; text out. No audio/video. Basic vision = 50–60 range.
- **Coding: 82/100.** SWE-bench Verified ~77.6% is strong. Replaces Devstral 2 coding capabilities. Missing LiveCodeBench data.
- **Cost efficiency: 82/100.** $1.50/$7.50 is moderate. Modified MIT = self-hosting option. 128B dense requires significant hardware.
- **Overall Score: 75/100.** Mean of (78 + 80 + 78 + 55 + 82) / 5 = 74.6, rounded to 75. Strong unified model combining multiple predecessor strengths; limited multimodal constrains overall.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (Mistral AI docs, benchmark reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
