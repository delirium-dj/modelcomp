# Gemini 3 Flash Preview — findings by DeepSeek 4.1 Flash 1017

- Source: Google/`gemini-3-flash-preview`
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview
- **Short description:** Google's low-latency, low-cost Gemini 3 generation model, shipped as both a reasoning and a non-reasoning variant. Best suited to high-volume multimodal tasks (documents, screenshots, audio/video digests) where cost and throughput matter more than top-end reasoning depth.
- **Provider / access:** Google (Gemini API) via `google/gemini-3-flash-preview`; Artificial Analysis lists exactly one API provider for it.
- **Release / knowledge:** Released 2025-12-17; knowledge cutoff January 2025. Artificial Analysis flags the model as **deprecated** — benchmarked only every 18 hours — and points to Gemini 3.5 Flash as the successor.
- **IDs:** `google/gemini-3-flash-preview`
- **Context window:** 1M tokens (stated on the Artificial Analysis model page as the maximum combined input+output window; not independently re-verified).
- **Modalities:** text, image, speech and video input; text output; reasoning yes (separate reasoning and non-reasoning endpoints); tool/function-calling support not documented on the fetched page.
- **Pricing (as of 2026-11-14):** $0.50 per 1M input / $3.00 per 1M output; 90% cache discount; blended (7:2:1) rate $0.43 per 1M. Paid, not free.
- **Architecture:** proprietary Google model; parameter count and MoE layout undisclosed; weights not available.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** — the model page reports the Intelligence Index as `N/A` for this deprecated release (same for both the Reasoning and Non-reasoning variants)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: **no verified public score found**

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: **no verified public score found**
- HLE-Diamond: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: **no verified public score found**
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- 1M-token context window reported; no long-context retrieval figure reported on the fetched page.

### Normalized scores (1–100)

- **Tool use: 72/100.** No published Intelligence Index or agentic eval for this release, so the score is inferred from its position as a mid-tier Flash model in a family where newer siblings reach index 31–60; capped below strong-tier because no agentic evidence exists.
- **Reasoning: 74/100.** Reasoning-tuned endpoint exists (thinking before answering, 6.00 s time-to-first-answer-token), but the index is unpublished for this deprecated build, capping confidence.
- **Context window: 96/100.** 1M-token tier (≥1M → 95–100), verified from the model page's context specification.
- **Multimodal: 92/100.** Text, image, speech and video input with text-only output — full non-text input coverage, held just under the top band for text-only output.
- **Coding: 72/100.** No FrontierCode/Terminal-Bench figures published; mid-band placement reflects a cost-optimized Flash tier rather than frontier coding claims.
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M with a 90% cache discount — cheaper input than the ~$0.60/$2.20 reference point but pricier output, so slightly under the 92 anchor.
- **Overall Score: 81/100.** Half-up mean of 72/74/96/92/72 = 81.2 → 81; best fit for high-volume multimodal ingestion on a budget, not for frontier reasoning or agentic coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Gemini 3 Flash Preview: Intelligence, Performance & Price Analysis — Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-flash)
