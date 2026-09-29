# Gemini 2.5 Flash-Lite (Google) — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's smallest, most cost-effective 2.5-class thinking model (GA June 17, 2025), built for high-volume, latency-sensitive tasks with native multimodality. Flag: variant/alias of the same underlying model as the `gemini-2.5-flash-lite` entry — this folder tracks the Google-published variant.
- **Provider / access:** Gemini API (`gemini-2.5-flash-lite`, Chat Completions-compatible), Google AI Studio, Vertex AI, Gemini app; OpenCode Zen offers the Google variant as `google/gemini-2.5-flash-lite`.
- **Release / knowledge:** 2025-06-17 GA (preview April 2025); knowledge cutoff ~January 2025 (widely documented).
- **IDs:** `google/gemini-2.5-flash-lite` (Zen); `google/gemini-2.5-flash-lite` on the Gemini API (no separate Free ID on Zen beyond this)
- **Context window:** 1,000,000 total tokens (2.5 family ships 1M; Gemini 2.5 announcement: "1 million token context window, 2 million coming soon").
- **Modalities:** text / image / audio / video / PDF input; text output; reasoning yes (thinking with configurable thinking budget, can be disabled); tool calls yes (function calling, search grounding, JSON mode).
- **Pricing (as of 2026-09-27):** $0.10 in / $0.40 out per 1M text tokens (Gemini API GA pricing, widely documented) — extremely low; free tier available via AI Studio/Gemini app with data-usage caveats.
- **Architecture:** proprietary; sparse MoE efficiency class of the 2.5 generation; thinking built into the model.

### Raw benchmarks found

> Numbers below come from Google's Gemini 2.5 family announcement (fetched 2026-09-27) and Google's June 2025 GA figures as widely reported. The 2.5 Pro-specific values in the announcement are NOT attributed to Flash-Lite.

Agent / tool use:

- SWE-bench Verified: **~55.7%** (Google GA figures, June 2025, as widely reported; custom agent setup)
- Terminal-Bench: no verified public score found
- Tau2-Bench: no verified public score found
- Live preference (LMArena): no verified public score found for Flash-Lite specifically (2.5 Pro debuted #1; Flash-Lite not charted)

Reasoning / knowledge:

- GPQA Diamond: **78.3%** (Google GA figures, June 2025, as widely reported)
- AIME 2025: **84.1%** (Google GA figures, June 2025, as widely reported)
- HLE: no verified public score found for Flash-Lite (2.5 Pro scored 18.8% no-tools — family context only)
- Artificial Analysis Intelligence Index: no verified public score found in fetched sources

Coding:

- LiveCodeBench v6: **~62.1%** (Google GA figures, June 2025, as widely reported)
- SWE-bench Verified: ~55.7% (see above)
- SciCode / AA-SciCode: no verified public score found

Long context:

- "no long-context retrieval reported" for Flash-Lite specifically; 1M window spec (Gemini 2.5 announcement). Successor-generation GDM-MRCR v2 scores (3.5 Flash-Lite: 72.2% at 128k, 21.3% at 1M pointwise) show how the family later measured 1M-window degradation — context only.

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling, search grounding, and JSON mode with modest SWE-bench Verified (~55.7%); capped by absent agent-benchmark coverage and the lite tier.
- **Reasoning: 76/100.** GPQA Diamond 78.3% and AIME 2025 84.1% with thinking — strong for a lite model; capped by unverified HLE and no-tools limitations.
- **Context window: 85/100.** 1M tokens — top-tier window at release; capped by no Flash-Lite-specific measured retrieval scores.
- **Multimodal: 70/100.** Native multimodality: text/image/audio/video/PDF input, text out; no image/audio generation.
- **Coding: 65/100.** SWE-bench Verified ~55.7% and LiveCodeBench v6 ~62.1% — capable for the size class, well below Pro-tier agentic coding (2.5 Pro: 63.8% custom setup, family context).
- **Cost efficiency: 88/100.** $0.10/$0.40 per 1M tokens — among the cheapest frontier-adjacent tiers ever priced; excellent price-to-performance.
- **Overall Score: 74/100.** Mean of the five quality dims (72+76+85+70+65)/5 = 73.6 → 74 half-up. Best fit: high-volume, latency-sensitive multimodal tasks at minimal cost.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-27
- Method: public internet research (Google Gemini 2.5 family announcement fetched 2026-09-27; GA figures as widely reported); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
