# Gemini 2.5 Flash Lite — findings by Qwen 3.8 Flash

- Source: Google / Gemini 2.5 Flash-Lite (`google/gemini-2.5-flash-lite`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (efficiency tier)
- **Short description:** Google's ultra-low-latency, ultra-cheap tier — a 1M-token multimodal-input model (text/image/audio/video/PDF in, text out) at ~$0.10 / $0.40 per 1M and ~390 tok/s, with an optional thinking budget (AIME 63.1%). It is a speed/cost play, not a quality one: LiveCodeBench ~34%, SimpleQA ~11% (weak grounding), and it lacks fine-tuning/batch. Galileo agent reads: Tool Selection 0.84 (good routing), Action Completion 0.47 (mid).
- **Source provenance:** **BenchLM has no dedicated `gemini-2.5-flash-lite` page** (the slug redirects to the base `gemini-2.5-flash`, a different, higher-scoring variant — its numbers are *not* borrowed here). Scores are drawn from Galileo's Flash-Lite model-hub (citing Artificial Analysis, Google DeepMind and the Gemini 2.5 tech report, arXiv:2507.06261) plus curated `meta.json`, which agree on 1M window and multimodal input.
- **Provider / access:** Google AI Studio / Gemini API / Vertex AI (`gemini-2.5-flash-lite`); OpenCode Zen. Free tier available.
- **Release / knowledge:** Gemini 2.5 Flash-Lite GA; knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-2.5-flash-lite`.
- **Context window:** 1,048,576 (1M) in / 65,535 (64K) out (curated meta and Galileo agree).
- **Modalities:** Text, image, audio, video, PDF in; **text out only** (curated meta). No image/audio generation.
- **Pricing (as of 2026-10-02):** ~$0.10 in / $0.40 out per 1M (blended ~$0.17); free tier with rate limits.
- **Architecture:** proprietary sparse-MoE, hosted only; thinking budget toggle; search-augmentation + code-execution grounding.

### Raw benchmarks found

> Flash-Lite-specific figures from Galileo's model hub (citing Artificial Analysis, Google DeepMind, Gemini 2.5 tech report) fetched 2026-10-02; **no BenchLM 618-row normalisation exists for this variant**, so coverage is thin and mostly vendor/secondary.

Reasoning / knowledge:

- AIME **63.1%** with thinking budget; FACTS ~**84%** correct but SimpleQA only **~11%** — retrieval/verification essential; base tier leans non-reasoning
- Galileo agent evals: Conversation efficiency 0.78, Tool Selection 0.84, Action Completion 0.47

Coding:

- **LiveCodeBench ~34%** (0.34 pass) — the only coding read; no SWE-bench published for this tier

Multimodal / long context:

- Text+image+audio+video+PDF input; **text-only output** (no generation benchmarks)
- 1M input window / 64K output ceiling; no ≥98% MRCR reported for the Lite tier
- Speed: ~390–392.8 tok/s, 0.29s time-to-first-token (throughput, not a quality dim)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Thin/vendor-secondary coverage → evidence-limited dims scored conservatively.

- **Tool use: 50/100.** Galileo Tool Selection 0.84 shows good single-decision routing, but Action Completion 0.47 (and the base-2.5-Flash τ² signal being weak) mean multi-step agentic workflows fall short — a routing/classification tool-caller, not an autonomous agent.
- **Reasoning: 48/100.** The thinking budget lifts AIME to 63.1% (respectable for a lite tier), but FACTS ~84% vs SimpleQA ~11% exposes very weak unaided factual recall, and the base model leans non-reasoning — a genuinely limited reasoning core.
- **Context window: 86/100.** A real 1M input window (curated meta + Galileo agree) is in the ≥1M band, but the 64K output ceiling and no demonstrated ≥98% MRCR for the Lite tier keep it below the top of that band.
- **Multimodal: 80/100.** Very broad multimodal **input** (text+image+audio+video+PDF) puts it high in the +video/PDF tier (75–90), but **text-only output** and no published modality-quality benchmarks for this tier cap the credit.
- **Coding: 40/100.** LiveCodeBench ~34% is the only coding read and it is weak; no SWE-bench/agentic-code coverage, so an evidence-limited conservative score for an efficiency model not built for coding.
- **Cost efficiency: 98/100.** ~$0.10 / $0.40 per 1M with a free tier is among the cheapest capable multimodal APIs available — the model's whole reason to exist. Cost is excluded from Overall.
- **Overall Score: 61/100.** Mean of Tool 50, Reasoning 48, Context 86, Multimodal 80, Coding 40 = 60.8 → 61. Best fit: high-volume, latency/cost-critical pipelines — routing, classification, extraction, summarisation and simple multimodal ingest (audio/video/PDF) over huge contexts at ~10× lower cost; not for complex reasoning, factual answers (SimpleQA ~11%) or coding — pair it with retrieval/verification or a heavier model when accuracy matters.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Galileo Flash-Lite model hub citing Artificial Analysis, Google DeepMind and the Gemini 2.5 tech report; curated `meta.json`). **BenchLM has no `gemini-2.5-flash-lite` page** — the base 2.5 Flash variant's numbers were deliberately not reused; scores are 1–100 interpretations with elevated uncertainty.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash_Lite.md`, using the same headings.
