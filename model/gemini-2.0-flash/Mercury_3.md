# Gemini 2.0 Flash — findings by Mercury 3

- Source: Google DeepMind (Gemini 2.0 Flash)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google DeepMind's next-generation Flash workhorse (GA 2025-02-05; experimental Dec 2024): superior speed, native tool use, multimodal generation, and a 1M-token context at near-commodity pricing — "the best $/token deal on the market" at release. Discontinued 2026-06-01.
- **Provider / access:** Gemini API (`gemini-2.0-flash`), Google AI Studio, Vertex AI, and third-party providers; discontinued from 2026-06-01.
- **Release / knowledge:** GA 2025-02-05; knowledge cutoff not published.
- **IDs:** `google/gemini-2.0-flash`.
- **Context window:** 1,000,000 tokens.
- **Modalities:** multimodal input (text/image/audio/video) and multimodal generation (image/audio output); native tool use; function calling; code execution.
- **Pricing (as of 2025):** $0.10 in / $0.40 out per 1M (cache from $0.025).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Reasoning / knowledge:

- MMLU: **76.4%** (aibusiness)
- Arena text Elo: **1360** (2.0 Flash 001, 43,443 votes — Oct 2026 leaderboard snapshot)

Agent / tool use:

- Native tool use + significantly faster TTFT than Flash 1.5 (OpenRouter); enhanced function calling and complex instruction following

Coding:

- Enhanced coding capabilities vs prior Flash; no verified SWE-bench figure captured

Multimodal:

- Input + image/audio generation; long-context multimodal generation supported

Long context:

- 1M verified

### Normalized scores (1–100)

- **Tool use: 76/100.** Native tool use and function-calling improvements were class-leading at release; no agentic benchmark captured.
- **Reasoning: 72/100.** MMLU 76.4% and Arena 1360 — solid for a 2024/25 budget model, since surpassed.
- **Context window: 92/100.** 1M verified.
- **Multimodal: 88/100.** Input plus image/audio generation — rare for the price tier.
- **Coding: 78/100.** Enhanced coding vs Flash 1.5; no verified SWE figure.
- **Cost efficiency: 90/100.** $0.10/$0.40 with cheap caching — one of the best per-token deals of its era.
- **Overall Score: 81/100.** Mean of the five non-cost dims (76+72+92+88+78)/5 = 81.2 → 81. Best-fit: a historic budget multimodal workhorse — discontinued; legacy use only.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [llm-stats: Gemini 2.0 Flash](https://llm-stats.com/models/gemini-2.0-flash)
  - [AI Business: Gemini 2.0 Flash benchmarks](https://aibusiness.vc/models/gemini-2.0-flash)
  - [OpenRouter: google/gemini-2.0-flash-001](https://openrouter.ai/google/gemini-2.0-flash-001)
  - [UC Strategies: Gemini 2.0 Flash review/2026 shutdown](https://ucstrategies.com/news/gemini-2-0-flash-review-2026-pricing-benchmarks-context-window-shutdown/)
  - [CloudPrice: Gemini 2.0 Flash](https://cloudprice.net/models/google-gemini-2-flash)
  - [What's The Big Data: Gemini 2.0 Flash](https://whatsthebigdata.com/ai-model/gemini-2-flash/)
- Future sources: add a new file next to this one using the same headings.
