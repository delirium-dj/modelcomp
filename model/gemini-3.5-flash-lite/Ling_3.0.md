# Gemini 3.5 Flash-Lite — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemini-3.5-flash-lite)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's efficient agentic Flash-Lite model with strong terminal and coding capability at a fraction of the cost of Pro-tier models.
- **Provider / access:** Google — `gemini-3.5-flash-lite` on Gemini API, Google AI Studio, Vertex AI
- **Release / knowledge:** July 21, 2026; knowledge cutoff varies
- **IDs:** google/gemini-3.5-flash-lite
- **Context window:** 1,048,576 tokens (1M)
- **Modalities:** Text, image, video, audio in; text out
- **Pricing (as of 2026-09-23):** $0.30/M input tokens, $1.00/M output tokens (Google AI Studio); no caching discount published
- **Architecture:** Sparse mixture-of-experts (Gemini 3 family); parameter counts undisclosed; configurable thinking (low/medium/high)

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **54.0%** (Google DeepMind model card, Terminus-2 harness)
- OSWorld-Verified: **74.0%** (Google DeepMind model card)
- CoWorkBench: Not separately published for this model
- GDPval-AA v2 Elo: **1140** (Google DeepMind model card)

Reasoning / knowledge:
- GPQA Diamond: **83.8%** (Vals AI independent; Artificial Analysis AA: 83.8%)
- HLE (no tools): **18.8%** (Artificial Analysis)
- MLE-Bench: **39.2%** (Google DeepMind model card)
- GDM-MRCR v2 (8-needle, 128K): **72.2%** (Google DeepMind model card; no peer scored higher)
- GDM-MRCR v2 (1M, pointwise): **21.3%** (Google DeepMind model card)

Coding:
- SWE-bench Pro: **54.2%** (Google DeepMind model card)
- LiveCodeBench: **79.0%** (Vals AI independent)
- SWE-bench (Vals): **75.0%** (independent)
- SciCode: **41.3%** (Artificial Analysis)
- Terminal-Bench 4.0: **1.0%** (independent; very low on harder terminal tasks)

Long context:
- GDM-MRCR v2 (128K): **72.2%** (Google DeepMind; no peer scored higher)
- GDM-MRCR v2 (1M): **21.3%** (significant recall degradation at extreme context)

### Normalized scores (1-100)
- **Tool use: 72/100.** Terminal-Bench 2.1 at 54.0% is mid-tier agentic; OSWorld-Verified at 74.0% shows solid computer-use capability; Terminal-Bench 4.0 at 1.0% reveals weakness on harder general agent tasks; GDPval-AA at 1140 Elo is moderate.
- **Reasoning: 75/100.** GPQA Diamond at 83.8% is strong for the Flash-Lite tier; HLE at 18.8% is low but expected; MLE-Bench at 39.2% shows ML engineering capability; GDM-MRCR at 72.2% at 128K demonstrates excellent long-context retrieval within reasonable range.
- **Context window: 93/100.** Full 1M-token context window is standard for the tier; however, recall degrades significantly beyond 128K (72.2% → 21.3% on MRCR v2); reliable working range within ~128K tokens.
- **Multimodal: 80/100.** Native multimodal support for text, image, video, and audio input; OSWorld-Verified at 74.0% and comprehensive vision benchmarks (not fully enumerated) place this above basic multimodal tier.
- **Coding: 58/100.** SWE-bench Pro at 54.2% and Terminal-Bench 2.1 at 54.0% are mid-tier agentic coding; LiveCodeBench at 79.0% and SWE-bench (Vals) at 75.0% are more competitive on contest-style coding; SciCode at 41.3% is below frontier.
- **Cost efficiency: 95/100.** At $0.30/$1.00 per Mtok, extremely cost-efficient for an agentic-capable model; positioned as the affordable option in the Gemini 3.5 family; excellent price-to-capability ratio for high-volume deployments.
- **Overall Score: 76/100.** Solid reasoning (75), good multimodal (80), excellent cost efficiency (95), adequate context (93), and moderate tool use (72) and coding (58) produce a balanced profile; cost efficiency excluded from Overall per methodology.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-3.5-flash-lite/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
