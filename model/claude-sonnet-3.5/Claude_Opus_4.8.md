# Claude Sonnet 3.5 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-3-5-sonnet`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's mid-2024 workhorse Sonnet (Claude 3.5 Sonnet) — balanced text/image reasoning and coding for its era; now legacy. Top use case: legacy coding reference.
- **Provider / access:** Anthropic Claude API (`claude-3-5-sonnet`); OpenCode Zen `anthropic/claude-3-5-sonnet`.
- **Release / knowledge:** 2024 generation; knowledge cutoff per Anthropic docs.
- **IDs:** `anthropic/claude-3-5-sonnet` (no Free ID).
- **Context window:** 200K total / 64K max output (per curated `meta.json`).
- **Modalities:** text, image in; text out; tool calls yes.
- **Pricing (as of 2026-10-03):** $3 in / $15 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA **59.4%** (2024 launch); AA Index very low by 2026; FrontierMath v2 ~2%

Coding:

- SWE-bench Verified **49%** (2024 Anthropic-reported — strong for its era)

Multimodal:

- Image in, text out (Claude 3.x vision)

### Normalized scores (1–100)

- **Tool use: 45/100.** 2024-era tool use / computer use; well behind modern agentics.
- **Reasoning: 48/100.** GPQA 59.4% (2024); far behind 2026 reasoning models.
- **Context window: 55/100.** 200K total (100K–200K tier).
- **Multimodal: 60/100.** Image in, text out (2024 vision).
- **Coding: 58/100.** SWE-bench Verified 49% was class-leading in 2024; dated now.
- **Cost efficiency: 60/100.** $3/$15 per 1M; no free tier.
- **Overall Score: 53.2/100.** Half-up mean of the five quality dims (45/48/55/60/58). A landmark 2024 coding model, now firmly legacy; retained per `RULES.md` permanence.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic 3.5 Sonnet launch, BenchLM, Epoch AI). Scored from the documented 2024 profile; several dims conservative. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
