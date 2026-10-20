# Owl Alpha — findings by Claude Opus 4.6

- Source: LongCat (Meituan) / Owl Alpha (`opencode/owl-alpha`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** LongCat's retired stealth alias — confirmed as a LongCat model, re-released as LongCat-2.0. Endpoint now returns 404. Historical entry only.
- **Provider / access:** Was free on OpenRouter during alias period. Endpoint now retired (404). Superseded by LongCat-2.0.
- **Release / knowledge:** 2026; retired.
- **IDs:** `opencode/owl-alpha` (retired)
- **Context window:** ~1,000,000 (1M) during the alias period.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-10-20):** Was free on OpenRouter. Endpoint now retired.
- **Architecture:** Same as LongCat-2.0 (1.6T MoE, ~48B active). Was served under the "Owl Alpha" stealth alias.

### Raw benchmarks found

Agent / tool use:

- Same as LongCat-2.0 (Terminal-Bench 2.1: 70.8% per LongCat report). See LongCat-2.0 entry for full benchmarks.

Reasoning / knowledge:

- Same as LongCat-2.0. See LongCat-2.0 entry.

Coding:

- Same as LongCat-2.0 (SWE-bench Pro: 59.5%). See LongCat-2.0 entry.

Long context:

- 1M context (same as LongCat-2.0).

### Normalized scores (1–100)

- **Tool use: 58/100.** Same as LongCat-2.0 — Terminal-Bench 70.8%.
- **Reasoning: 55/100.** Same as LongCat-2.0.
- **Context window: 92/100.** 1M context per tier mapping.
- **Multimodal: 15/100.** Text-only. Fixed at 15.
- **Coding: 60/100.** Same as LongCat-2.0 — SWE-bench Pro 59.5%.
- **Cost efficiency: 100/100.** Was free. Now retired — scored based on availability during alias period.
- **Overall Score: 56/100.** Mean of (58 + 55 + 92 + 15 + 60) / 5 = 56.0 → 56. This is a retired alias for LongCat-2.0. Users should reference the LongCat-2.0 entry for current capabilities and availability.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis cross-referenced with LongCat-2.0 documentation; this entry is a retired alias. Scores match LongCat-2.0.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
