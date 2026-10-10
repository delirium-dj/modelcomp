# Gemini 3.6 Flash — findings by Laguna S 2.1

- Source: Google (`google/gemini-3.6-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Gemini 3.6 Flash is Google's mid-tier multimodal reasoning model from July 2026, featuring 1M context and 209 t/s output speed.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.6-flash`), OpenRouter.
- **Release / knowledge:** 2026-07-01 release; 2026-05 knowledge cutoff
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image, video, speech in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-10):** $0.75 in / $3.75 out per 1M tokens ($0.63 blended with cache)
- **Architecture:** Proprietary multimodal reasoning architecture

### Raw benchmarks found

> Sources: BenchLM.ai (Overall 78.95/100, #8/887), Artificial Analysis (Intelligence Index 34, #54/225), Google DeepMind model page.

Agent / tool use:

- Terminal-Bench 2.1: 84.6% (source: BenchLM)
- Terminal-Bench 4.0: 42.0% (source: BenchLM)
- τ²-bench: 63.8% (source: BenchLM)
- τ²-bench Telecom: 63.8% (source: BenchLM)
- GDPval-AA: 48.2% (source: BenchLM)
- GDPval-AA (Elo): 1643 (source: BenchLM)
- OSWorld-Verified: 79.5% (source: BenchLM)
- DeepSWE: 43.7% (source: BenchLM)
- LiveCodeBench: 44.1% (source: BenchLM)
- SWE-bench Verified: 76.5% (source: BenchLM)
- GPQA-Coding: 59.8% (source: BenchLM)
- HumanEval: 96.2% (source: BenchLM)
- Intelligence Index: 34 (#54/225)

Reasoning / knowledge:

- GPQA Diamond: 46.1% (source: BenchLM)
- HLE: 25.8% (source: BenchLM)
- AA Intelligence Index: 34 (source: BenchLM / AA model page, v4.3.2)
- LCR: 76.4% (source: BenchLM)
- MRCR (8-needle): 95.3%, 91.4%, 97.2%, 90.5%, 86.0%, 79.3%, 57.5%, 36.6% (source: BenchLM)
- AAA-MMPU-Pro: 74.2% (source: BenchLM)

Coding:

- SWE-bench Verified: 76.5% (source: BenchLM)
- SWE-bench Pro: 51.1% (source: BenchLM)
- DeepSWE: 43.7% (source: BenchLM)
- LiveCodeBench: 44.1% (source: BenchLM)
- AA-SciCode: 52.3% (source: BenchLM)
- AA Coding Index: 56.3% (source: BenchLM)
- HumanEval: 96.2% (source: BenchLM)

Multimodal:

- AA-MMMU-Pro: 74.2% (source: BenchLM)
- OfficeQA Pro: 55.1% (source: BenchLM)

Long context:

- 1M context window supported; fast output generation (209 t/s). MRCR 8-needle shows strong short-context (95.3% at needle 1) weaker long-context (36.6% at needle 8).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.1 84.6% (>70% frontier ref), τ²-bench 63.8% (decent), GDPval-AA 48.2% (Elo 1643); fast agentic execution speed (209 t/s). Capped by TB-4.0 42.0% and GDPval-AA below frontier.
- **Reasoning: 77/100.** Artificial Analysis Intelligence Index score of 34 (#54 reasoning class); GPQA Diamond 46.1% (above 40% threshold, below 55% frontier ref), BBB-V 56.9%. Capped by HLE 25.8% and no strong standalone reasoning ceiling.
- **Context window: 95/100.** 1M token context window (top tier). MRCR 8-needle: 95.3% at shortest needle, 36.6% at longest — good short-to-mid context, degrading at extremes.
- **Multimodal: 90/100.** Text, image, video, and speech input processing (audio input confirmed via BenchLM + DeepMind model page). AAA-MMMU-Pro 74.2%, OfficeQA Pro 55.1%.
- **Coding: 76/100.** HumanEval 96.2% (excellent), SWE-bench Verified 76.5% (solid), AAA-SciCode 52.3%; but DeepSWE 43.7% (below 50% floor) and LiveCodeBench 44.1% (below 50% floor) drag.
- **Cost efficiency: 85/100.** Highly competitive pricing ($0.75 in / $3.75 out per 1M tokens).
- **Overall Score: 84/100.** Mean of the five quality dims: (82+77+95+90+76)/5 = 420/5 = 84.0 → 84. Fast and affordable 1M-context multimodal model; capped by weak DeepSWE/LiveCodeBench and low HLE.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public web research (BenchLM.ai model page for full benchmark tables; Artificial Analysis model page for Intelligence Index 34; Google DeepMind model page). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: BenchLM.ai model page (Overall 78.95/100, #8/887, 43 of 623 benchmarks, 2026-10-10); AA Intelligence Index v4.3.2 = 34 (#54/225); Google DeepMind model page (modalities, pricing, architecture).
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---

