# MiMo-V2.5 Free — findings by Fledge Alpha

- Source: Xiaomi (free alias of `mimo-v2.5`: `mimo-v2.5-free`, `mimo-v2-5:free`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5 Free
- **Short description:** Free-tier alias of Xiaomi's April 2026 omnimodal V2.5 model — same weights as `mimo-v2.5`, exposed with $0 pricing on several free tiers.
- **Provider / access:** OpenCode Zen (`mimo-v2.5-free`), Kenari (`mimo-v2-5:free`), LMAPI free routes.
- **Release / knowledge:** 2026-04-22 (parent model); free aliases have existed since at least May 2026.
- **IDs:** `mimo-v2.5-free`, `mimo-v2-5:free`
- **Context window:** 1,000,000 tokens; 131K max output.
- **Modalities:** Text, vision, audio, video in; text out (same omni-modal surface as V2.5-Pro).
- **Pricing (as of 2026-10-02):** $0/$0 inside the free-tier windows (OpenCode Zen free, Kenari free, LMAPI free); the paid V2.5 alias is $0.14/$0.28 off-peak.
- **Architecture:** Same V2.5 checkpoint as the paid tier (omnimodal MoE on the V2.5-Pro stack) — free routes gate via rate limits, not separate weights.

### Raw benchmarks found

Free aliases carry the parent's published numbers; no distinct capability ladder is marketed.

Agent / tool use:

- AA Agentic Index: **15.8** (parent V2.5 row); τ²-Bench Telecom: **90.6%** on shared AA table
- Claw-Eval general subset: **62.3** (parent-tier marketing row)

Reasoning / knowledge:

- GPQA Diamond: **~84.9–85.0%** (AA/vals class)
- HLE: **27.2%** (AA, non-thinking runs around 25–27%)
- AA Intelligence Index: ~37.2 (parent row class)
- AA-LCR: 73.0%; CritPt 3.7%; SciCode 43.9%

Coding:

- SWE-bench Verified: **71.0%** (parent row, #60 / 155 at epoch snapshots)
- SWE-bench Pro: **56.1%** (parent row)
- AA Coding Index: **56.8**

Multimodal: Omni-modal surface shared with V2.5-Pro; MMMU/Video-class rows exist on the parent but not separated for the Free alias.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-Telecom 90.6% carries the row; Agentic Index 15.8 trails.
- **Reasoning: 70/100.** GPQA 85% and HLE 27.2% — middling for a 2026 tier.
- **Context window: 92/100.** Full 1M window inherited from the parent tier.
- **Multimodal: 85/100.** Omni-modal parity with V2.5-Pro.
- **Coding: 68/100.** SWE-bench Verified 71.0% and Pro 56.1% on the parent row.
- **Cost efficiency: 100/100.** $0/$0 inside the free-tier windows; paid fallback ($0.14/$0.28) is already in the cheap tier.
- **Overall Score: 78/100.** Mean of the five quality dims.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (allaimodel.com, llmprice, modelbenchmark.io, easy-benchmarks, OpenRouter parent rows); free-tier rows inherit the parent V2.5 benchmark set because no distinct evaluation has been published.
- Future sources: add a new file next to this one using the same headings.
