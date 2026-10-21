# GPT-6.1 Sol — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-6.1-sol`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's upgraded Sol reasoning model replacing GPT-6 Sol for agentic coding; leads GPT-6 Astra on DeepSWE at ~1/5 the flagship cost. Released at DevDay 2026-09-29.
- **Provider / access:** OpenCode (`opencode/gpt-6.1-sol`) — Chat Completions & Responses API
- **Release / knowledge:** 2026-09-29 (OpenAI DevDay)
- **IDs:** `opencode/gpt-6.1-sol` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $2.00 in / $10.00 out per 1M; cached input $0.10/M; batch/flex 50% below standard; fast mode 2× standard
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **75.2%** — leads GPT-6 Astra at same compute effort (OpenAI official / Emergent.sh)

Reasoning / knowledge:

- AA Intelligence Index: **52** (Artificial Analysis; 1 below GPT-6 Astra at 53)
- GPQA Diamond: no specific published score (trails GPT-6 Astra ~96%)

Coding:

- DeepSWE v1.1: **75.2%** (same metric as above)
- Legacy code migration (COBOL→Rust/C++): **97.9% accuracy** (OpenAI DevDay demo / official blog)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 82/100.** DeepSWE v1.1 75.2% #1 on its leaderboard; strong multi-step agentic execution; capped by lack of broader tool benchmarks.
- **Reasoning: 84/100.** AA Intelligence Index 52; capable reasoning but below GPT-6 Astra ceiling.
- **Context window: 92/100.** 1,050,000-token context window → tier 1M = 92.
- **Multimodal: 60/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 88/100.** DeepSWE v1.1 75.2% leads Astra; 97.9% legacy migration accuracy; top-tier agentic coding.
- **Cost efficiency: 92/100.** $2/$10 per 1M with $0.10 cached; Astra-class coding at ~1/5 flagship cost.
- **Overall Score: 81/100.** (82+84+92+60+88)/5 = 81.2 → 81. Best fit: production agentic coding where cost matters.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, Emergent.sh, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
