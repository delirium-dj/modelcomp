# Gemini 2.5 Flash Lite — findings by Claude Sonnet 4.6

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's cheapest 1M-context multimodal model ($0.10/$0.40, ~310 tok/s) for high-frequency tasks; Google Cloud retired 2026-10-20, Gemini API still serving. Migrate to Gemini 3.5 Flash-Lite.
- **Provider / access:** Google AI Studio / Gemini API (`google/gemini-2.5-flash-lite`) — free tier + paid
- **Release / knowledge:** 2025/early 2026; Google Cloud retirement: 2026-10-20
- **IDs:** `google/gemini-2.5-flash-lite` (free tier on Google AI Studio; NOT on OpenCode Zen)
- **Context window:** 1,048,576 tokens input / 65,536 tokens output
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.10/$0.40 per 1M; free tier on Google AI Studio
- **Architecture:** Proprietary (Google Gemini 2.5 Flash Lite — small multimodal)

### Raw benchmarks found

Agent / tool use:

- No specific terminal/agent benchmark found

Reasoning / knowledge:

- No GPQA or HLE score found for this Lite variant

Coding:

- No SWE-bench score found

Long context:

- No long-context retrieval benchmark reported; ~310 tok/s throughput for high-frequency use

### Normalized scores (1–100)

- **Tool use: 65/100.** Flash-Lite tier for high-frequency small payload automation; no standalone tool benchmark found.
- **Reasoning: 60/100.** Flash-Lite reasoning ceiling; designed for frequency, not depth.
- **Context window: 92/100.** 1,048,576-token context → tier 1M = 92.
- **Multimodal: 82/100.** Text + image + audio + video + PDF in; text-only out — full Google multimodal stack at cheap price point.
- **Coding: 58/100.** No SWE-bench; lite-tier coding — sufficient for routine tasks, not complex engineering.
- **Cost efficiency: 100/100.** $0.10/$0.40 per 1M; free tier on Google AI Studio.
- **Overall Score: 71/100.** (65+60+92+82+58)/5 = 71.4 → 71. Best fit: high-frequency small-payload multimodal automation at minimal cost; Google Cloud customers should migrate to Gemini 3.5 Flash-Lite.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Google official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
