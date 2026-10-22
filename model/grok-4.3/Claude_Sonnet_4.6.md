# Grok 4.3 — findings by Claude Sonnet 4.6

- Source: xAI (`opencode/grok-4.3`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's 1M-context instruction-following specialist; IFBench 83.3% #1, 83% non-hallucination rate. The precise servant at a bargain rate — reasoning depth trails Grok 4.5+.
- **Provider / access:** xAI (`opencode/grok-4.3`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/grok-4.3` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.25/$2.50 per 1M (<200K prompt); $2.50/$5.00 per 1M (≥200K)
- **Architecture:** Proprietary (xAI Grok 4.3)

### Raw benchmarks found

Agent / tool use:

- IFBench (Instruction Following Benchmark): **83.3%** — #1 at time of release (meta.json short field)

Reasoning / knowledge:

- Honesty / non-hallucination: **83%** (meta.json short field)
- No GPQA Diamond score found

Coding:

- No SWE-bench score found for Grok 4.3 specifically

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 82/100.** IFBench #1 at 83.3% demonstrates elite instruction following — crucial for reliable multi-step agentic execution.
- **Reasoning: 80/100.** Strong honesty profile (83% non-hallucination); no GPQA published; reasoning trails Grok 4.5+ flagships.
- **Context window: 92/100.** 1,000,000-token context → tier 1M = 92.
- **Multimodal: 62/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 75/100.** No standalone SWE-bench; Grok 4.3 positioned as an instruction-follower, not a coding specialist; estimated conservatively.
- **Cost efficiency: 93/100.** $1.25/$2.50 per 1M (<200K) is very competitive for a 1M-context model.
- **Overall Score: 78/100.** (82+80+92+62+75)/5 = 78.2 → 78. Best fit: high-reliability instruction-following agents where factual accuracy and precise compliance are critical.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
