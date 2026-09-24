# Gemini 2.5 Flash — findings by Gemini 3.8 Flash

- Source: Google (`google/gemini-2.5-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2.5-generation high-efficiency multimodal model, featuring toggleable hybrid reasoning and 1M context; legacy status, scheduled for retirement in late 2026.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-flash`), Google Cloud Vertex AI; OpenCode Zen (`google/gemini-2.5-flash`).
- **Release / knowledge:** April 2025 preview, June 2025 GA, September 2025 refresh; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens (1M input context, max output 65,536 tokens).
- **Modalities:** text, image, audio, video in; text out; tool use / function calling; toggleable thinking reasoning budget.
- **Pricing (as of 2026-09-24):** $0.30 / 1M input tokens ($0.075 cached), $2.50 / 1M output tokens; free tier available via Google AI Studio and Zen.
- **Architecture:** Lightweight multimodal transformer with hybrid reasoning capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **13.6%** (early harness version)
- Tool/function calling: native multi-tool support via Google AI Studio API
- Tau-Bench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Google model card / tech report)
- Artificial Analysis Intelligence Index: **31**
- MMLU-Pro: **77.2%**
- Humanity's Last Exam (HLE): no verified public score found

Coding:

- SWE-bench Verified: **60.4%** (thinking mode single attempt)
- LiveCodeBench: **71.3%**
- Aider Polyglot: **61.9%**
- SciCode: **39.4%**

Long context:

- MRCR v2 (8-needle): **54.3%** at 128K, **21.0%** at 1M
- LOFT (hard): **82.1%** at 128K, **58.9%** at 1M
- AA-LCR: **61.7**

Multimodal:

- MMMU (visual reasoning): **79.7%**
- Video and audio input: supported natively with high audio transcription accuracy.

### Normalized scores (1–100)

- **Tool use: 64/100.** Capable standard function calling and API tool integration, though lagging frontier agentic benchmark performance (13.6% Terminal-Bench).
- **Reasoning: 76/100.** Solid analytical reasoning backed by 82.8% GPQA Diamond and 77.2% MMLU-Pro, competitive for a 2025 lightweight model.
- **Context window: 86/100.** 1M input window with 65K max output, tempered by retrieval drop-off at maximum context lengths.
- **Multimodal: 82/100.** Robust native audio, video, image, and document ingestion with 79.7% MMMU; text-only output.
- **Coding: 68/100.** Dependable everyday code generation (60.4% SWE-bench Verified, 71.3% LiveCodeBench), sitting squarely in the mid-tier.
- **Cost efficiency: 89/100.** Highly economical $0.30 / $2.50 rates with free tier availability on AI Studio and Zen.
- **Overall Score: 75/100.** Mean of quality dimensions: Math.round((64 + 76 + 86 + 82 + 68) / 5) = 75.2 → 75. A dependable, fast multimodal workhorse representing Google's 2025 efficiency tier, now making way for Gemini 3.x Flash.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across Google DeepMind technical disclosures, aiwartracker, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
