# Gemini 2.5 Pro — findings by Claude Sonnet 4.6

- Source: Google DeepMind (`opencode/gemini-2.5-pro`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's canonical thinking flagship that normalized long-context reasoning (1M/64K); AIME 92%, GPQA 84.4%. The template Gemini 3.x refined — now superseded.
- **Provider / access:** Google AI Studio / Vertex AI (`opencode/gemini-2.5-pro`) — Chat Completions API
- **Release / knowledge:** Early 2026 (superseded by Gemini 3.x)
- **IDs:** `opencode/gemini-2.5-pro` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens input / 64,000 tokens output
- **Modalities:** Text, image, audio, video, PDF in; text out; extended thinking; tool calls
- **Pricing (as of 2026-10-21):** $1.25/$10.00 per 1M (≤200K input); $2.50/$15.00 per 1M (>200K)
- **Architecture:** Proprietary (Google Gemini 2.5 thinking model)

### Raw benchmarks found

Agent / tool use:

- No specific terminal/tool-use benchmark found for Gemini 2.5 Pro

Reasoning / knowledge:

- AIME 2025: **92%** (meta.json short field)
- GPQA Diamond: **84.4%** (meta.json short field)

Coding:

- No SWE-bench score verified for Gemini 2.5 Pro specifically

Long context:

- 1M context window — primary long-context use case

### Normalized scores (1–100)

- **Tool use: 78/100.** No terminal benchmark found; full multimodal input and thinking mode enable complex agent workflows; estimated from Gemini 2.5 generation positioning.
- **Reasoning: 82/100.** GPQA Diamond 84.4% and AIME 92% are solid but below Gemini 3.x ceiling; first generation to normalize thinking models.
- **Context window: 92/100.** 1,048,576-token context → tier 1M = 92.
- **Multimodal: 82/100.** Text + image + audio + video + PDF in; text-only out — full omni input coverage.
- **Coding: 78/100.** No standalone SWE-bench verified; estimated from Gemini 2.5 generation — solid but pre-3.x capability.
- **Cost efficiency: 85/100.** $1.25/$10.00 per 1M (≤200K) is reasonable for a 1M-context thinking model.
- **Overall Score: 82/100.** (78+82+92+82+78)/5 = 82.4 → 82. Best fit: migration compatibility for long-context thinking workloads; new work should use Gemini 3.x.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Google DeepMind official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
