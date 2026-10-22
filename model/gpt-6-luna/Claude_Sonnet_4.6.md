# GPT-6 Luna — findings by Claude Sonnet 4.6

- Source: OpenAI (`openai/gpt-6-luna`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost Luna tier ($0.10/$0.50) with 1M context for high-volume summarization and extraction; DeepSWE 66.6% at a fraction of frontier cost.
- **Provider / access:** OpenAI (`openai/gpt-6-luna`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `openai/gpt-6-luna` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.10/$0.50 per 1M (standard)
- **Architecture:** Proprietary (OpenAI GPT-6 Luna low-cost tier)

### Raw benchmarks found

Agent / tool use:

- DeepSWE: **66.6%** (meta.json short field)

Reasoning / knowledge:

- No GPQA or HLE score found for GPT-6 Luna

Coding:

- DeepSWE: **66.6%** (same as above)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 78/100.** DeepSWE 66.6% is solid for a low-cost budget model; designed for high-volume summarization/extraction agentic loops.
- **Reasoning: 74/100.** Not designed for hard reasoning; budget tier prioritizes throughput over depth.
- **Context window: 92/100.** 1,050,000-token context → tier 1M = 92.
- **Multimodal: 62/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 76/100.** DeepSWE 66.6% is reasonable for the price point; not a specialist coding model.
- **Cost efficiency: 100/100.** $0.10/$0.50 per 1M — among the cheapest frontier-family models available.
- **Overall Score: 76/100.** (78+74+92+62+76)/5 = 76.4 → 76. Best fit: high-volume summarization, document extraction, and bulk processing where cost-per-token is the primary concern.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
