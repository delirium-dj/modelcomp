# GPT-5 — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's router flagship that began the Instant/Thinking dual-lane era; 400K context, AIME 94.6%, SWE-bench Verified 74.9%. Deprecated with removal scheduled.
- **Provider / access:** OpenAI / OpenCode Zen (`opencode/gpt-5`) — Chat Completions API (deprecated)
- **Release / knowledge:** 2026 (deprecated, removal scheduled)
- **IDs:** `opencode/gpt-5` (no Free ID on Zen; OpenCode Zen $1.07/$8.50)
- **Context window:** 400,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image, file in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.25/$10.00 per 1M (OpenAI); $1.07/$8.50 (OpenCode Zen); $0.125 cached
- **Architecture:** Proprietary (router: Instant/Thinking per request — deprecated)

### Raw benchmarks found

Agent / tool use:

- No specific terminal/agent benchmark found

Reasoning / knowledge:

- AIME 2025: **94.6%** (meta.json short field)

Coding:

- SWE-bench Verified: **74.9%** (meta.json short field)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 76/100.** Routing between Instant and Thinking enables flexible tool use; SWE-bench 74.9% implies decent agentic coding.
- **Reasoning: 85/100.** AIME 94.6% shows strong mathematical reasoning; first routing model — established the baseline.
- **Context window: 82/100.** 400,000-token context → tier 400K = 82.
- **Multimodal: 62/100.** Text + image + file in; text-only out — image-capable, no audio or video.
- **Coding: 78/100.** SWE-bench Verified 74.9%; solid foundation but deprecated.
- **Cost efficiency: 85/100.** $1.07/$8.50 via OpenCode Zen; removal scheduled narrows long-term value.
- **Overall Score: 77/100.** (76+85+82+62+78)/5 = 76.6 → 77. Best fit: reproducibility of historical runs only; migrate to 5.5/6.x.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
