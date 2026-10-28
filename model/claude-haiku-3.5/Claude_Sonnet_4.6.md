# Claude Haiku 3.5 — findings by Claude Sonnet 4.6

- Source: Anthropic (`anthropic/claude-3-5-haiku-20241022`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's October 2024 small/fast model (200K/8K, $0.80/$4.00); SWE-bench Verified 40.6%, GPQA 41.6%, tau-bench Retail 51.0%. Retired 2026-02-19.
- **Provider / access:** Anthropic (retired 2026-02-19)
- **Release / knowledge:** October 2024 (retired February 2026)
- **IDs:** `anthropic/claude-3-5-haiku-20241022` (not on OpenCode Zen)
- **Context window:** 200,000 tokens input / 8,192 tokens output
- **Modalities:** Text, image, PDF in; text out (text-only at launch); tool calls
- **Pricing (as of 2026-10-21):** Retired — final rate $0.80/$4.00 per 1M; $0.08 cached read
- **Architecture:** Proprietary (Anthropic Claude Haiku 3.5 — retired)

### Raw benchmarks found

Agent / tool use:

- tau-bench Retail: **51.0%** (meta.json — tool-call retail benchmark)
- SWE-bench Verified: **40.6%** (meta.json)

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (meta.json)

Coding:

- SWE-bench Verified: **40.6%** (same as above)

Long context:

- No long-context retrieval benchmark reported; 8,192 output cap is very limiting

### Normalized scores (1–100)

- **Tool use: 60/100.** tau-bench Retail 51.0% shows functional tool use; SWE-bench 40.6% was small-model competitive at launch.
- **Reasoning: 52/100.** GPQA 41.6% is well below frontier; small fast model designed for speed not depth.
- **Context window: 75/100.** 200,000-token input → tier 200K = 75 (8K output cap is a significant constraint).
- **Multimodal: 65/100.** Text + image + PDF in; text-only out — image and PDF capable.
- **Coding: 58/100.** SWE-bench 40.6%; retired and superseded by Haiku 4.5 on every axis.
- **Cost efficiency: 35/100.** Retired — no active pricing; $0.80/$4.00 final rate with very short 8K output.
- **Overall Score: 62/100.** (60+52+75+65+58)/5 = 62.0. Best fit: legacy compatibility only; Haiku 4.5 or Haiku 5.5 for new work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
