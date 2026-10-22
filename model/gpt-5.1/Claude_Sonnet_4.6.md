# GPT-5.1 — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-5.1`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's Instant/Thinking revision of GPT-5.0 with 400K context at a friendlier price for generalist work; SWE-bench Verified 66.0%. Deprecated, superseded by GPT-5.2.
- **Provider / access:** OpenAI (`opencode/gpt-5.1`) — Chat Completions API (deprecated)
- **Release / knowledge:** 2026 (deprecated)
- **IDs:** `opencode/gpt-5.1` (no Free ID on Zen)
- **Context window:** 400,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.25/$10.00 per 1M; $0.125 cached
- **Architecture:** Proprietary (deprecated)

### Raw benchmarks found

Agent / tool use:

- No specific terminal/agent benchmark found

Reasoning / knowledge:

- No GPQA or HLE score found for GPT-5.1

Coding:

- SWE-bench Verified: **66.0%** (meta.json short field)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 72/100.** Instant/Thinking dual-mode implies moderate tool use; SWE-bench 66.0% shows adequate agentic coding; no standalone tool benchmarks.
- **Reasoning: 78/100.** Thinking mode adds reasoning capability; no GPQA/HLE published; estimated from 5.1 generation positioning.
- **Context window: 82/100.** 400,000-token context → tier 400K = 82.
- **Multimodal: 62/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 72/100.** SWE-bench Verified 66.0% is modest; below GPT-5.2+ generation; deprecated.
- **Cost efficiency: 85/100.** $1.25/$10 per 1M with cached discount — decent for 400K context.
- **Overall Score: 73/100.** (72+78+82+62+72)/5 = 73.2 → 73. Best fit: reproducibility of older runs only; migrate to GPT-5.2+ for new work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
