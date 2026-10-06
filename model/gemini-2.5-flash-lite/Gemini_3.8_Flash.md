# Gemini 2.5 Flash Lite — findings by Gemini 3.8 Flash

- Source: Google / Gemini (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's lightweight, low-latency frontier-efficiency model in the Gemini 2.5 family, optimized for high-volume data extraction, routing, translation, and multimodal analysis.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-flash-lite`), Google Cloud Vertex AI, and OpenRouter (`google/gemini-2.5-flash-lite`).
- **Release / knowledge:** 2025-06-17 release (preview), 2025-07-22 (GA); knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash-lite`. Free tier available on Google AI Studio / Zen.
- **Context window:** 1,048,576 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Native multimodal input (text, images, audio, video, PDF); text/code output; optional controllable thinking budget; function calling; Google Search grounding.
- **Pricing (as of 2025-07):** $0.10 / 1M input tokens (text/image/video), $0.025 / 1M cached input, $0.40 / 1M output tokens (audio input $0.30 / 1M).
- **Architecture:** Sparse mixture-of-experts (MoE) transformer with optional test-time compute scaling.

### Raw benchmarks found

Agent / tool use:

- FACTS Grounding: **84.1%** (Google Technical Report / AI/TLDR, 2025)
- Google Search Grounding and Python code execution supported natively.
- Terminal-Bench / Tau-bench: no verified public score found
- Ported from sibling 2026-09-24 report (same weights): Tau2-bench **18.4%**; HELM WildBench **81.8%**; HELM IFEval **81.0%**.

Reasoning / knowledge:

- GPQA Diamond (thinking enabled): **64.6%** (Google Technical Report, Jul 2025)
- AIME 2025: **49.8%** (Google Technical Report, Jul 2025)
- Global MMLU-Lite: **81.1%** (Google Technical Report, Jul 2025)
- SimpleQA: **10.7%** (Google Technical Report, Jul 2025)
- Humanity's Last Exam: **5.1%** (Google Technical Report, Jul 2025)
- Ported from sibling 2026-09-24 report (same weights): MMLU-Pro **75.9%**; AIME **53.3%** (Artificial Analysis avg@10).

Multimodal:

- MMMU: **72.9%** (Google Technical Report, Jul 2025)
- Vibe-Eval: **51.3%** (Google Technical Report, Jul 2025)

Coding:

- SWE-bench Verified: **31.6%** resolved (Google Technical Report, Jul 2025)
- Aider Polyglot: **26.7%** correct (Google Technical Report, Jul 2025)
- LiveCodeBench: no verified public score found
- Ported from sibling 2026-09-24 report (same weights): LiveCodeBench **59.3%** (LLMLearner, thinking variant); SciCode **19.3%** (Artificial Analysis).

Long context:

- 1M token context window evaluated with 100% needle-in-a-haystack retrieval across video, audio, and text.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong grounding accuracy (84.1% FACTS) and function calling, but limited on complex multi-step autonomous coding agent loops.
- **Reasoning: 64/100.** Moderate scientific and mathematical reasoning with thinking enabled (64.6% GPQA Diamond, 49.8% AIME 2025), trailing flagship frontier models.
- **Context window: 90/100.** Full 1M token context window with reliable multi-hour audio and video understanding.
- **Multimodal: 85/100.** Native omni-modal architecture processing text, images, video, audio, and documents (72.9% MMMU).
- **Coding: 48/100.** Basic code generation and simple script writing, scoring 31.6% on SWE-bench Verified.
- **Cost efficiency: 98/100.** Exceptionally affordable at $0.10 / $0.40 per 1M tokens with generous free-tier options.
- **Overall Score: 72/100.** High-throughput multimodal workhorse ideal for document extraction, video analysis, and high-volume classification pipelines.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into Google DeepMind's official Gemini 2.5 technical report and developer documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
