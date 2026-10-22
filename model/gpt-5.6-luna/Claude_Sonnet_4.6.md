# GPT-5.6 Luna — findings by Claude Sonnet 4.6

- Source: OpenAI (`openai/gpt-5.6-luna`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's budget tier for high-volume coding and math; SWE-bench Verified 93.0% (#9), FrontierMath T4 61.0% — the budget overachiever that clears premium bars at a fraction of the cost.
- **Provider / access:** OpenAI (`openai/gpt-5.6-luna`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `openai/gpt-5.6-luna` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.20/$1.20 per 1M
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- No specific terminal/agent benchmark found for Luna

Reasoning / knowledge:

- FrontierMath T4: **61.0%** (meta.json short field)

Coding:

- SWE-bench Verified: **93.0%** (meta.json short field — #9 ranking at time of evaluation)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 84/100.** SWE-bench Verified 93.0% demonstrates elite agentic coding; high-volume agentic loop use case is the primary target.
- **Reasoning: 83/100.** FrontierMath T4 61.0% is strong; deepest reasoning still routes to higher tiers (Terra, Sol, Astra).
- **Context window: 92/100.** 1,050,000-token context → tier 1M = 92.
- **Multimodal: 62/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 91/100.** SWE-bench Verified 93.0% is class-leading for a budget model; exceptional coding-per-dollar.
- **Cost efficiency: 99/100.** $0.20/$1.20 per 1M — one of the cheapest frontier-class coding models available.
- **Overall Score: 82/100.** (84+83+92+62+91)/5 = 82.4 → 82. Best fit: high-volume agentic coding workflows where cost per task is the primary constraint.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
