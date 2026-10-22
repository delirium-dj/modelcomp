# Pareto 26.10 Preview — findings by Claude Sonnet 4.6

- Source: Unbiased AI (`opencode/pareto-26.10-preview`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's composite multimodal preview (1M context / 131K out) assembling research, coding, and agent skills; DeepSWE 69.9% at $0.24/task. Preview status — limited independent verification.
- **Provider / access:** Unbiased AI (`opencode/pareto-26.10-preview`) — Chat Completions API
- **Release / knowledge:** October 2026 (preview)
- **IDs:** `opencode/pareto-26.10-preview` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens input / 131,000 tokens output
- **Modalities:** Text + image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.80/$3.20 per 1M; cached $0.03; ~$0.24/agentic task
- **Architecture:** Composite / proprietary (Unbiased AI)

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **69.9%** (meta.json short field — Unbiased AI; note: vendor-reported, limited independent verification)

Reasoning / knowledge:

- No GPQA or HLE score found with independent verification

Coding:

- DeepSWE v1.1: **69.9%** (same metric as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 83/100.** DeepSWE 69.9% is a strong agentic coding result if verified; scored with caution for vendor-only status.
- **Reasoning: 80/100.** No GPQA/HLE independently verified; composite architecture implies frontier-class reasoning; estimated conservatively.
- **Context window: 92/100.** 1,000,000-token context → tier 1M = 92.
- **Multimodal: 63/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 82/100.** DeepSWE 69.9% vendor-reported; competitive if independently confirmed; scored with preview discount.
- **Cost efficiency: 95/100.** $0.80/$3.20 per 1M and $0.24/agentic task — very cost-effective if performance holds.
- **Overall Score: 80/100.** (83+80+92+63+82)/5 = 80.0. Best fit: experimental research and agentic coding at budget pricing — verify independently before production use.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Unbiased AI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
