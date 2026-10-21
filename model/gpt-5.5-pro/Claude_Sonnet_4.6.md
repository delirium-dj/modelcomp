# GPT-5.5 Pro — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-5.5-pro`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's extra-compute tier for high-stakes research tasks; think-longer-pay-more reasoning model with massive 1.05M context. Specialist for decisive, difficult research questions.
- **Provider / access:** OpenCode (`opencode/gpt-5.5-pro`) — Chat Completions API
- **Release / knowledge:** 2026 release
- **IDs:** `opencode/gpt-5.5-pro` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image, file in; text out; extended reasoning; tool calls
- **Pricing (as of 2026-10-21):** $30.00 in / $180.00 out per 1M; batch $10.00/$45.00 per 1M
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (Vellum AI leaderboard / meta.json)
- BrowseComp: **90.1%** (meta.json short field)

Reasoning / knowledge:

- GPQA Diamond: **>93%** (OpenRouter leaderboard — extended reasoning mode)

Coding:

- SWE-bench Verified: **74.9–82.6%** (Vellum AI / OpenRouter leaderboard)
- Expert-SWE: **73.1%** (meta.json)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 87/100.** BrowseComp 90.1% and Terminal-Bench 82.7% confirm elite agentic tool use; capped by narrow benchmark coverage.
- **Reasoning: 90/100.** GPQA Diamond >93% with extended reasoning; Expert-SWE 73.1% supports deep multi-step reasoning.
- **Context window: 92/100.** 1,050,000-token context window → tier 1M = 92.
- **Multimodal: 62/100.** Text + image + file in; text-only output → image-capable tier, no audio or video.
- **Coding: 82/100.** SWE-bench Verified 74.9–82.6%; Expert-SWE 73.1%; strong but below flagship ceiling.
- **Cost efficiency: 5/100.** $30/$180 per 1M — extreme cost; specialist tier not suited for routine work.
- **Overall Score: 83/100.** (87+90+92+62+82)/5 = 82.6 → 83. Best fit: high-stakes research where cost is secondary to accuracy.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Vellum AI leaderboard, OpenRouter, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
