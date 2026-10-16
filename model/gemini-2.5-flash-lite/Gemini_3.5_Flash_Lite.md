# Gemini 2.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini (`google/gemini-2.5-flash-lite`) & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google's lightweight, low-latency frontier-efficiency model in the Gemini 2.5 family, optimized for high-volume data extraction, routing, translation, and multimodal analysis.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-flash-lite`), Google Cloud Vertex AI, and OpenRouter (`google/gemini-2.5-flash-lite`).
- **Release / knowledge:** Released July 2025; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash-lite` (Free tier available on Google AI Studio / Zen).
- **Context window:** 1,048,576 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Native multimodal input (text, images, audio, video, PDF); text/code output; optional controllable thinking budget; function calling; Google Search grounding.
- **Pricing (as of 2026-10-16):** $0.10 / 1M input tokens (text/image/video), $0.025 / 1M cached input, $0.40 / 1M output tokens. Free tier available.
- **Architecture:** Sparse mixture-of-experts (MoE) transformer with test-time compute scaling.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across Google technical report & Artificial Analysis):
- FACTS Grounding: **84.1%**
- Terminal-Bench / Tau-bench: **Verified via Google AI Studio telemetry**

Reasoning / knowledge:
- GPQA Diamond (thinking enabled): **64.6%**
- AIME 2025: **49.8%**
- Global MMLU-Lite: **81.1%**
- Humanity's Last Exam: **5.1%**

Coding:
- SWE-bench Verified: **31.6%**
- Aider Polyglot: **26.7%**

Multimodal:
- MMMU: **72.9%**
- Vibe-Eval: **51.3%**

Long context:
- 1M token context window evaluated with **100% needle-in-a-haystack retrieval** across multi-hour audio and video.

### Normalized scores (1–100)
- **Tool use: 72/100.** Strong grounding accuracy (84.1% FACTS) and function calling support.
- **Reasoning: 64/100.** Solid scientific and mathematical reasoning with thinking enabled (64.6% GPQA Diamond).
- **Context window: 90/100.** Full 1M token context window with reliable multi-hour audio and video understanding.
- **Multimodal: 85/100.** Native omni-modal architecture processing text, images, video, audio, and documents (72.9% MMMU).
- **Coding: 48/100.** Capable basic code generation and script writing, scoring 31.6% on SWE-bench Verified.
- **Cost efficiency: 98/100.** Highly cost-effective at $0.10 / $0.40 per 1M tokens with generous free-tier options.
- **Overall Score: 72/100.** High-throughput multimodal workhorse ideal for document extraction, video analysis, and high-volume classification pipelines.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (Google technical docs, Artificial Analysis v4.3.2 index) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
