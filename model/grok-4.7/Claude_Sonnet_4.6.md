# Grok 4.7 — findings by Claude Sonnet 4.6

- Source: xAI (`opencode/grok-4.7`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's larger-base 500K flagship optimized for repo-scale coding and legal agents; Harvey LAB #1 at 19.6%, Vibe Code 86.2%, below-frontier pricing.
- **Provider / access:** xAI (`opencode/grok-4.7`) — Chat Completions API
- **Release / knowledge:** September 2026
- **IDs:** `opencode/grok-4.7` (no Free ID on Zen)
- **Context window:** 500,000 tokens
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $2.00/$6.00 per 1M standard; $4.00/$12.00 per 1M fast; price doubles past 200K
- **Architecture:** Proprietary (larger base than Grok 4.x; RL-optimized for legal/coding agents)

### Raw benchmarks found

Agent / tool use:

- Harvey Legal Agent Benchmark (LAB): **19.6%** (xAI official / DataCamp — #1, vastly ahead of GPT-5.6 Sol at 2.5% and Claude Fable 5.1 at 6.7%)

Reasoning / knowledge:

- No GPQA or HLE scores found specifically for Grok 4.7

Coding:

- Vibe Code Bench: **86.2%** (meta.json short field)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 88/100.** Harvey LAB 19.6% is a dominant #1 result for legal agentic work; Vibe Code 86.2% for end-to-end app generation.
- **Reasoning: 84/100.** Legal agent leadership implies strong multi-step reasoning under strict hallucination checks; no standalone GPQA reported.
- **Context window: 86/100.** 500,000-token context window → tier 500K = 86.
- **Multimodal: 60/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 86/100.** Vibe Code 86.2% for zero-to-one app generation; repo-scale coding is the core design target.
- **Cost efficiency: 90/100.** $2/$6 per 1M — below-frontier pricing for a 500K-context specialist.
- **Overall Score: 81/100.** (88+84+86+60+86)/5 = 80.8 → 81. Best fit: legal agents and repo-scale coding at competitive pricing.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, DataCamp, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
