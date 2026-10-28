# Claude Sonnet 3.7 — findings by Claude Sonnet 4.6

- Source: Anthropic (`anthropic/claude-sonnet-3.7`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's February 2025 hybrid-reasoning Sonnet that introduced user-visible extended thinking; SWE-bench Verified 63.7% standard / 70.3% high compute. Retired from Claude API 2026-02-19.
- **Provider / access:** Anthropic (retired — gateway rates only) — Claude API retired 2026-02-19
- **Release / knowledge:** February 2025 (retired)
- **IDs:** `anthropic/claude-sonnet-3.7` (not on OpenCode Zen)
- **Context window:** 200,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image in; text out; extended thinking; tool calls
- **Pricing (as of 2026-10-21):** $3.00/$15.00 per 1M; $0.30 cached (retired — gateway rates only)
- **Architecture:** Proprietary (Anthropic — hybrid reasoning; retired)

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **63.7%** standard / **70.3%** high compute (Anthropic official / meta.json)

Reasoning / knowledge:

- No GPQA or HLE score found

Coding:

- SWE-bench Verified: **63.7–70.3%** (same as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench 63.7–70.3% and extended thinking introduced user-visible deliberation; pioneered hybrid reasoning in Sonnet.
- **Reasoning: 74/100.** Extended thinking mode is the historical significance; no GPQA published; retired.
- **Context window: 75/100.** 200,000-token context → tier 200K = 75.
- **Multimodal: 62/100.** Text + image in; text-only out — image capable, no audio or video.
- **Coding: 70/100.** SWE-bench 63.7–70.3%; hybrid-reasoning pioneer but well below current floor.
- **Cost efficiency: 50/100.** Retired — $3/$15 per 1M at gateway rates only; no long-term availability.
- **Overall Score: 71/100.** (72+74+75+62+70)/5 = 70.6 → 71. Best fit: historical significance — first Anthropic Sonnet with choose-your-depth thinking; use Sonnet 4.5+ for new work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
