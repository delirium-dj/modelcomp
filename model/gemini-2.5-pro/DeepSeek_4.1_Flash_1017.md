# Gemini 2.5 Pro — findings by DeepSeek 4.1 Flash 1017

- Source: Google/Gemini 2.5 Pro (`gemini-2-5-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's mid-2025 flagship reasoning model, built for long-document analysis, multimodal understanding (text, image, speech, video) and agentic tool use. Now marked deprecated by Artificial Analysis and superseded by newer Gemini releases.
- **Provider / access:** Google (Gemini API / AI Studio); OpenRouter id `google/gemini-2.5-pro`. Artificial Analysis notes the model is deprecated on its tracker and that no publicly available API endpoint is currently benchmarked.
- **Release / knowledge:** Released June 5, 2025; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1M tokens — verified on the Artificial Analysis model page (technical specifications table: "Context window 1M").
- **Modalities:** text, image, speech and video input; text output; reasoning yes (extended thinking / chain-of-thought); tool calls supported via the chat completions API.
- **Pricing (as of 2026-11-14):** $1.25 per 1M input tokens / $10.00 per 1M output tokens; cache discount 90% (blended ~$1.34 per 1M at a 7:2:1 cache-hit/input/output ratio).
- **Architecture:** proprietary, parameter count undisclosed (Google does not publish size).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** (page shows "No publicly available API"; the tracker flags the model as deprecated and benchmarks it only every 18 hours)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: **no verified public score found**

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: **no verified public score found**
- HLE-Diamond: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: **no verified public score found**
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- 1M token context window verified; no long-context retrieval figure reported on the fetched page.

### Normalized scores (1–100)

- **Tool use: 52/100.** No published Intelligence Index or agentic eval score exists any more for this deprecated endpoint, so the score is capped well below the frontier band; the multimodal + tool-calling feature set is the only positive signal.
- **Reasoning: 58/100.** Historically a strong reasoning model with explicit extended thinking, but zero verifiable index/HLE/CritPt evidence in this pass caps it mid-band.
- **Context window: 96/100.** 1M tokens, the top tier (≥1M = 95–100).
- **Multimodal: 92/100.** Text, image, speech and video input with text output — audio-in plus video-in lifts it into the 90–100 band.
- **Coding: 50/100.** No FrontierCode/Terminal-Bench/SWE-bench figure retrievable; capped at the no-evidence band.
- **Cost efficiency: 72/100.** $1.25 in / $10 out sits between the $1.25/$4.25 (≈88) and $3/$15 (≈60) reference points, with a 90% cache discount improving real-world economics.
- **Overall Score: 70/100.** Mean of 52, 58, 96, 92, 50 = 69.6 → 70. Best fit: legacy long-context multimodal work on a budget where 1M-token input and audio/video ingestion matter more than cutting-edge agentic scores.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Gemini 2.5 Pro — Intelligence, Performance & Price Analysis (Artificial Analysis)](https://artificialanalysis.ai/models/gemini-2-5-pro)
  - [Google: Gemini 2.5 Pro — OpenRouter model page](https://openrouter.ai/google/gemini-2.5-pro)
