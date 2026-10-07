# Gemini 3.1 Flash Lite — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.1 Flash Lite, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite (Google lightweight 3.1)
- **Short description:** Google's lightweight, ultra-low-latency 3.1 model (363 tok/s) engineered for high-frequency lightweight tasks at $0.25/$1.50 per 1M.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.1-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-03-03 release (DeepMind model card); knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.1-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, video, PDF in (model card); text out; reasoning yes (light); tool calls yes (BFCL 76.5%)
- **Pricing (as of 2026-10-07):** $0.25 in / $1.50 out per 1M, no caching (DeepMind model card); free tier via AI Studio/Zen; 363 tok/s output speed (fastest in its comparison set)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

> Re-researched 2026-10-07: the 2026-03-03 DeepMind model card plus BenchLM/Vals/LayerLens third-party rows fill the previously zero-data file. Card numbers are vendor runs (high effort); harness variants listed separately.

Agent / tool use:

- Terminal-Bench 2.1: **34.1% Vals lane** (BenchLM third-party row — fills prior gap; weak next-gen row)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Function calling: **76.5% BFCL v3** (LayerLens independent run — exceeds the 70% production-viability threshold)

Reasoning / knowledge:

- GPQA Diamond: **86.9% no-tools** (DeepMind model card, vs 2.5 Flash 82.8%, GPT-5 mini 82.3%, Grok 4.1 Fast 84.3%); **72.2%** (LayerLens independent run, 198 items — harness differs, both listed)
- HLE: **16.0% no-tools, full text+MM set** (model card, vs 2.5 Flash 11.0%, GPT-5 mini 16.7%, Grok 4.1 Fast 17.6%)
- MMLU-Pro: **83.0%** (LayerLens, 2,000 items); **87.7% BigBench-Hard, 85.6% MATH-500** (LayerLens); **88.9% MMMLU multilingual** (model card)
- SimpleQA Verified: **43.3%** (model card, leads its comparison set); **40.6% FACTS suite** (model card)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **62.8% SWE-bench Vals** (BenchLM third-party row — fills prior gap)
- LiveCodeBench: **72.0%** (model card, vs 2.5 Flash 62.6%, GPT-5 mini 80.4%); **80.1% Vals lane** (BenchLM); **69.9%** (LayerLens, 1,055 items — harness differs, all listed)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **0.00% Vibe v1.1** (BenchLM Vals row — measured zero)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **MRCR v2 (8-needle): 60.1% @128K average, 12.3% @1M pointwise** (model card — fills prior gap; steep falloff at the full window caps the tier)

### Normalized scores (1–100)

- **Tool use: 66/100.** BFCL 76.5% clears the production-viability bar for lightweight tool use; capped by the weak TB2.1 Vals lane (34.1%) and zero Tau/GDPval/Claw numbers.
- **Reasoning: 70/100.** GPQA 86.9 (card) plus MMLU-Pro 83.0, MATH-500 85.6 and MMMLU 88.9 show solid lightweight reasoning; capped by HLE 16.0 and the LayerLens GPQA 72.2 variant.
- **Context window: 84/100.** 1M verified, but measured MRCR collapses to 12.3% at 1M pointwise (60.1% @128K) — usable long-ish, not true 1M.
- **Multimodal: 85/100.** Broad text/image/audio/video/PDF input with MMMU-Pro 76.8 and Video-MMMU 84.8 measured; capped as outputs remain text.
- **Coding: 68/100.** LiveCode ~70–80 and SWE-bench 62.8 show viable lightweight coding; capped by the Vibe 0.00 row and zero DeepSWE/SciCode numbers.
- **Cost efficiency: 98/100.** Free tier plus cheapest Lite fallback ($0.25/$1.50) at 363 tok/s.
- **Overall Score: 75/100.** Mean of the five non-cost dims (66+70+84+85+68)/5 = 74.6 → 75; best-fit cheapest high-frequency 3.1 Lite pick — first verified data replaces the zero-evidence profile.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 re-research pass (DeepMind 3.1 Flash-Lite model card, Vals model page, BenchLM rows, LayerLens independent 12-benchmark run, gradually.ai/LLM-Pulse compilations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
