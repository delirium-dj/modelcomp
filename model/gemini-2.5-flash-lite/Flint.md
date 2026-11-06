# Gemini 2.5 Flash-Lite — findings by Flint

- Source: Google (DeepMind) / Gemini 2.5 Flash-Lite
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's smallest and cheapest Gemini 2.5 generation model, tuned for high-volume, low-latency tasks; retains a large context window relative to its size and is positioned below Gemini 2.5 Flash on capability.
- **Provider / access:** Google — Gemini API (`gemini-2.5-flash-lite`), Google AI Studio, Vertex AI; not present on OpenCode Zen.
- **Release / knowledge:** Preview `gemini-2.5-flash-lite-preview-06-2025`; knowledge cutoff not disclosed.
- **IDs:** `gemini-2.5-flash-lite`; vendor-prefixed route `google/gemini-2.5-flash-lite`.
- **Context window:** 1,048,576 total input / 65,536 max output (Flash family tier).
- **Modalities:** Text, image, audio, video in → text out; thinking supported; tool use supported.
- **Pricing (as of 2026-11-06):** Paid: input $0.10 per 1M (text/image/video), output $0.40 per 1M (incl. thinking); context caching $0.03 per 1M; grounding with Google Search 1500 RPD free then $35 per 1,000 grounded prompts.
- **Architecture:** Proprietary Google LLM; parameter count undisclosed (smaller tier of the Gemini 2.5 family).

### Raw benchmarks found

Coding:

- SWE-bench Verified: no verified public score found for the exact `gemini-2.5-flash-lite` ID (closest: Gemini 2.5 Flash family rows).

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- Context limit verified at 1M tokens via official docs; retrieval at 512K+ unverified.

### Normalized scores (1–100)

- **Tool use: 40/100.** Function calling and tool use supported but no verified agentic benchmark for the Lite tier; mid-low band.
- **Reasoning: 45/100.** No verified public reasoning score for the Lite tier; positioned below the Gemini 2.5 Flash reasoning band (60–80).
- **Context window: 97/100.** 1M total / 65K max output -> top tier (≥1M → 95–100); retrieval beyond unverified.
- **Multimodal: 85/100.** Text, image, audio, video in → text out supported.
- **Coding: 40/100.** No verified coding score for the Lite tier; clearly below the Flash-tier coding band (63 in the Gemini 2.5 Flash findings).
- **Cost efficiency: 90/100.** Paid lane $0.10 / $0.40 per 1M ≈ strong value tier.

- **Overall Score: 61.4/100.** Mean of the five quality dims: (40 + 45 + 97 + 85 + 40) / 5 = 61; Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on official Google documentation and the Gemini 2.5 family benchmark coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
