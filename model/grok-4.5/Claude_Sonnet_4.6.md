# Grok 4.5 — findings by Claude Sonnet 4.6

- Source: xAI (`opencode/grok-4.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's 500K-context flagship co-developed with Cursor for token-efficient agentic coding; SWE-bench Verified 86.6%, GPQA 93.1%, SWE Marathon #1 at time of release.
- **Provider / access:** xAI (`opencode/grok-4.5`) — Chat Completions API; also via Cursor integration
- **Release / knowledge:** July 2026
- **IDs:** `opencode/grok-4.5` (no Free ID on Zen)
- **Context window:** 500,000 tokens input; up to 450,000 tokens output
- **Modalities:** Text, image, file in; text out; tool calls
- **Pricing (as of 2026-10-21):** $2.00/$6.00 per 1M; $0.30 cached
- **Architecture:** Proprietary (token-efficiency optimized for Cursor agentic coding)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI official)
- SWE Marathon (Pass@1): **29.0%** (xAI official — #1 at release)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (meta.json / LLM-Stats)

Coding:

- SWE-bench Verified: **86.6%** (meta.json short field)
- SWE-bench Pro: **64.7%** (xAI official / CodingFleet)
- DeepSWE v1.0 (Pass@1): **62.0%** (xAI official)
- DeepSWE v1.1: **53.0%** (xAI official)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 83.3% and SWE Marathon #1 confirm elite agentic tool use; token-efficiency with Cursor is the key differentiator.
- **Reasoning: 90/100.** GPQA Diamond 93.1% places it near the top of frontier reasoning capability.
- **Context window: 86/100.** 500,000-token context → tier 500K = 86.
- **Multimodal: 62/100.** Text + image + file in; text-only out — image-capable, no audio or video.
- **Coding: 88/100.** SWE-bench Verified 86.6%, SWE-bench Pro 64.7%, SWE Marathon #1 — top-tier agentic coding.
- **Cost efficiency: 90/100.** $2/$6 per 1M is competitive for flagship-tier coding capability.
- **Overall Score: 83/100.** (87+90+86+62+88)/5 = 82.6 → 83. Best fit: token-efficient agentic coding with Cursor integration.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, LLM-Stats, CodingFleet); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
