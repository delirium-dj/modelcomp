# Claude Sonnet 4 — findings by Claude Sonnet 4.6

- Source: Anthropic (`anthropic/claude-sonnet-4`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 Sonnet for balanced coding (200K/64K, $3/$15); SWE-bench Verified 72.7% standard / 80.2% high compute. Retired from Claude API 2026-06-15 (still on Bedrock and Google Cloud).
- **Provider / access:** Anthropic (Bedrock / Google Cloud only) — Claude API retired 2026-06-15
- **Release / knowledge:** May 2025 (retired from Claude API June 2026)
- **IDs:** `anthropic/claude-sonnet-4` (not on OpenCode Zen)
- **Context window:** 200,000 tokens (standard); some trackers cite 1M beta
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $3.00/$15.00 per 1M; $0.30 cached read; $3.75 cached write
- **Architecture:** Proprietary (Anthropic Claude Sonnet 4 — retired from Claude API)

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **72.7%** standard / **80.2%** high compute (Anthropic official)

Reasoning / knowledge:

- No GPQA or HLE score found for Sonnet 4

Coding:

- SWE-bench Verified: **72.7–80.2%** (same as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 76/100.** SWE-bench 72.7% standard / 80.2% high compute — solid agentic coding that anchored early pipelines.
- **Reasoning: 74/100.** Sonnet 4 generation reasoning; no GPQA published; retired API.
- **Context window: 75/100.** 200K context → tier 200K = 75.
- **Multimodal: 62/100.** Text + image in; text-only out — image capable, no audio or video.
- **Coding: 77/100.** SWE-bench 72.7–80.2%; balanced coding for the era; successors surpass on all axes.
- **Cost efficiency: 75/100.** $3/$15 per 1M is same price as successors — no value advantage.
- **Overall Score: 73/100.** (76+74+75+62+77)/5 = 72.8 → 73. Best fit: pinned legacy pipelines on Bedrock/Google Cloud; migrate to Sonnet 4.5+ for new work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Anthropic official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
