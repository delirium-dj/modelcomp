# Claude Opus 4.5 — findings by Claude Sonnet 4.6

- Source: Anthropic (`anthropic/claude-opus-4.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Opus that carried agentic coding into the mainstream; SWE-bench Verified 76.8%, 200K context. Superseded by Opus 4.6–5.5.
- **Provider / access:** Anthropic (`anthropic/claude-opus-4.5`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `anthropic/claude-opus-4.5` (no Free ID on Zen)
- **Context window:** 200,000 tokens
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $5.00/$25.00 per 1M
- **Architecture:** Proprietary (Anthropic Opus 4.5)

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **76.8%** (meta.json — primary agentic coding metric)

Reasoning / knowledge:

- No GPQA or HLE score found for Opus 4.5

Coding:

- SWE-bench Verified: **76.8%** (same as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 80/100.** SWE-bench Verified 76.8% was flagship-class at release; built Anthropic's agentic coding reputation.
- **Reasoning: 82/100.** Opus-class reasoning; no GPQA published for 4.5; three successors have since raised the bar.
- **Context window: 75/100.** 200,000-token context → tier 200K = 75.
- **Multimodal: 62/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 80/100.** SWE-bench Verified 76.8%; dependable multi-step coding at the then-standard window.
- **Cost efficiency: 72/100.** $5/$25 per 1M with only 200K context — three successors deliver more for the same or less.
- **Overall Score: 76/100.** (80+82+75+62+80)/5 = 75.8 → 76. Best fit: reproducibility of legacy agentic-coding runs; migrate to Opus 4.6+ for new work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
