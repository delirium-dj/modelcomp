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

---

## Archived research pass — `Claude_Sonnet_4.6.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Claude_Sonnet_4.6.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Gemini 2.5 Flash-Lite — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Archived date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **no verified public score found** — no public leaderboard entry found for gemini-2.5-flash-lite specifically
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for Lite tier (parent model 2.5 Flash had ~82.8%)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Intelligence Index: **no verified public rank found**

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / SciCode: **no verified public score found**

Long context:

- 1M input confirmed; no MRCR/RULER depth-retrieval study found publicly.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
