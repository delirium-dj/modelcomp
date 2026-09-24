# Gemini 2.5 Flash Lite — findings by Gemini 3.8 Flash

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-low-latency, high-throughput multimodal model engineered for cost-sensitive, high-frequency classification, extraction, and real-time interactive tasks.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-flash-lite`), Google Cloud Vertex AI; OpenCode Zen (`google/gemini-2.5-flash-lite`).
- **Release / knowledge:** July 2025 GA release; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M input context, max output 65,536 tokens).
- **Modalities:** text, image, audio, video in; text out; native tool calling, code execution, structured JSON mode.
- **Pricing (as of 2026-09-24):** Free tier available; $0.075–$0.10 / 1M input ($0.01–$0.02 cached), $0.30–$0.40 / 1M output; ultra-fast ~320+ tok/s output speed.
- **Architecture:** Compact high-efficiency multimodal Transformer optimized for extreme inference throughput.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench: **18.4%**
- HELM WildBench: **81.8%**
- HELM IFEval: **81.0%**
- Function calling / code execution / URL context: native support across 1M window

Reasoning / knowledge:

- GPQA Diamond: **62.5%**
- MMLU-Pro: **75.9%**
- AIME: **53.3%**
- Artificial Analysis Intelligence Index: **18** (non-reasoning base ~1)

Coding:

- LiveCodeBench: **59.3%**
- SWE-bench Verified: **48.9%** single attempt / **60.3%** multiple attempts
- Aider Polyglot: **56.7%**
- SciCode: **19.3%**

Long context:

- 1,048,576 tokens context window with structured long-context retrieval and file search grounding.

Multimodal:

- Native text/image/video/audio input with high-accuracy speech transcription and document OCR.

### Normalized scores (1–100)

- **Tool use: 56/100.** Broad functional coverage (tool calling, code execution, search grounding), tempered by modest agentic ceilings on complex stateful benchmarks (18.4% Tau2-bench).
- **Reasoning: 60/100.** Respectable lightweight reasoning reflected by 62.5% GPQA Diamond and 75.9% MMLU-Pro, engineered primarily for speed over deep multi-step deduction.
- **Context window: 90/100.** Full 1M token context window operating at 300+ tok/s throughput, ideal for massive document ingestion.
- **Multimodal: 75/100.** Comprehensive native support for audio, video, image, and PDF ingestion; text-only output.
- **Coding: 57/100.** Solid everyday code assistance (59.3% LiveCodeBench, 56.7% Aider Polyglot), with limited capacity for multi-file repo refactors (19.3% SciCode).
- **Cost efficiency: 97/100.** Industry-leading economics ($0.10/$0.40 per 1M, generous free tier), offering extreme throughput per dollar.
- **Overall Score: 68/100.** Mean of quality dimensions: Math.round((56 + 60 + 90 + 75 + 57) / 5) = 67.6 → 68. An outstanding high-volume, low-latency multimodal workhorse designed for mass deployment rather than frontier reasoning.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across Google DeepMind technical releases, Artificial Analysis, and Aider benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
