# Gemini 3.5 Flash — findings by Laguna S 2.1

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Gemini 3.5 Flash is Google's high-speed multimodal reasoning model from May 2026, offering 1M context across text, vision, speech, and video.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.5-flash`), OpenRouter.
- **Release / knowledge:** 2026-05-01 release; 2026-03 knowledge cutoff
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image, video, speech in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-10):** $1.50 in / $9.00 out per 1M tokens ($1.31 blended with cache)
- **Architecture:** Proprietary multimodal reasoning architecture

### Raw benchmarks found

> Sources: BenchLM.ai (Overall 76.46/100, #14/887), Artificial Analysis (Intelligence Index 33, #62/225), Google DeepMind model page.

Agent / tool use:

- Terminal-Bench 2.1: 84.5% (source: BenchLM)
- Terminal-Bench 4.0: 42.0% (source: BenchLM)
- τ²-bench: 62.5% (source: BenchLM)
- GDPval-AA: 48.2% (source: BenchLM)
- GDPval-AA (Elo): 1623 (source: BenchLM)
- GDPval: 84.9% (source: BenchLM, cross-model ref)
- OSWorld-Verified: 79.5% (source: BenchLM)
- DeepSWE: 38.0% (source: BenchLM)
- LiveCodeBench: 39.5% (source: BenchLM)
- SWE-bench Verified: 78.5% (source: BenchLM)
- GPQA-Coding: 57.5% (source: BenchLM)
- HumanEval: 94.1% (source: BenchLM)
- Intelligence Index: 33 (#62/225)

Reasoning / knowledge:

- GPQA Diamond: 44.8% (source: BenchLM)
- HLE: 23.0% (source: BenchLM)
- AA Intelligence Index: 33 (source: BenchLM / AA model page, v4.3.2)
- AAA-MMPU-Pro: 73.1% (source: BenchLM)
- Omniscience Accuracy: 61.4% (source: BenchLM)
- LCR: 74.3% (source: BenchLM)
- MRCR (8-needle): 95.3%, 91.4%, 97.2%, 90.5%, 86.0%, 79.3%, 57.5%, 36.6% (source: BenchLM)

Coding:

- SWE-bench Verified: 78.5% (source: BenchLM)
- SWE-bench Pro: 52.3% (source: BenchLM)
- DeepSWE: 38.0% (source: BenchLM)
- LiveCodeBench: 39.5% (source: BenchLM)
- AA-SciCode: 51.3% (source: BenchLM)
- AA Coding Index: 55.2% (source: BenchLM)
- HumanEval: 94.1% (source: BenchLM)

Multimodal:

- AA-MMMU-Pro: 73.1% (source: BenchLM)
- OfficeQA Pro: 54.2% (source: BenchLM)
- Design Arena Website: 1256 (source: OpenRouter)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.1 84.5% (>88% frontier ref band, strong), τ²-bench 62.5% (decent), GDPval-AA Elo 1623, Intelligence Index 33. Fast agentic execution speed (216.8 t/s). Capped by GDPval-AA 48.2% and TB-4.0 42.0%.
- **Reasoning: 76/100.** Artificial Analysis Intelligence Index score of 33 (#62 reasoning class); GPQA Diamond 44.8% (barely above 40% threshold); BBB-V 52.6%. Capped by HLE 23.0% and no strong reasoning ceiling.
- **Context window: 95/100.** 1M token context window (top tier). MRCR 8-needle scores show 95.3% at shortest, 36.6% at longest — strong short-context, weaker long-context.
- **Multimodal: 90/100.** Text, image, video, and speech input processing (audio input confirmed via BenchLM + DeepMind model page). AAA-MMMU-Pro 73.1%, OfficeQA Pro 54.2%.
- **Coding: 80/100.** SWE-bench Verified 78.5% (solid), HumanEval 94.1% (excellent), but DeepSWE 38.0% (below 50% floor) and LiveCodeBench 39.5% drag. AAA-SciCode 51.3% (below 55% frontier ref). Capped by weak DeepSWE.
- **Cost efficiency: 75/100.** Cost-effective pricing ($1.50 in / $9.00 out per 1M tokens).
- **Overall Score: 85/100.** Mean of the five quality dims: (82+76+95+90+80)/5 = 423/5 = 84.6 → 85. Fast 1M-context multimodal model with strong coding and tool use; capped by weak reasoning ceiling (GPQA 44.8%, HLE 23.0% lower than frontier).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public web research (BenchLM.ai model page for full benchmark tables; Artificial Analysis model page for Intelligence Index 33; Google DeepMind model page for modalities/spec). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 76.46/100, #14/887, 43 of 623 benchmarks, 2026-10-10); AA Intelligence Index v4.3.2 = 33 (#62/225); Google DeepMind model page (modalities, pricing, architecture).
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---

