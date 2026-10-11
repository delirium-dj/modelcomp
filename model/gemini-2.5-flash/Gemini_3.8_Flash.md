# Gemini 2.5 Flash — findings by Gemini 3.8 Flash

- Source: Google (`google/gemini-2.5-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2.5-generation high-efficiency multimodal model, featuring toggleable hybrid reasoning and 1,048,576-token context; legacy status with access limited to existing users in late 2026.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-flash`), Google Cloud Vertex AI, and [OpenRouter](https://openrouter.ai/models/google/gemini-2.5-flash).
- **Release / knowledge:** 2025-04 preview, 2025-06 GA, September 2025 refresh; knowledge cutoff early 2025.
- **IDs:** `google/gemini-2.5-flash` (free tier previously available via Google AI Studio).
- **Context window:** 1,048,576 tokens (1M input context, max output 65,536 tokens).
- **Modalities:** Text, image, audio, and video input; text out; tool use / function calling; toggleable thinking budget.
- **Pricing (as of 2026-10-11):** $0.30 / 1M input tokens ($0.03–$0.075 cached), $2.50 / 1M output tokens ([Google AI for Developers](https://ai.google.dev/pricing)).
- **Architecture:** Lightweight multimodal transformer with hybrid reasoning and dynamic compute scaling.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench: **13.6%** (early harness version)
- Native function calling and multi-tool support via Google AI Studio API
- Tau-Bench / Claw-Eval: no verified public score found

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **13** (Reasoning mode) / **10** (Non-reasoning mode) ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-flash))
- GPQA Diamond: **82.8%** (thinking mode; ~59.4% standard) ([Google DeepMind](https://blog.google))
- MMLU-Pro: **78.3%**
- Humanity's Last Exam (HLE): no verified public score found

Coding:
- SWE-bench Verified: **60.4%** (thinking mode single attempt)
- LiveCodeBench: **40.6%–71.3%** (eval harness dependent)
- Aider Polyglot: **61.9%**
- SciCode: **39.4%**

Long context:
- MRCR v2 (8-needle): **54.3%** at 128K, **21.0%** at 1M
- LOFT (hard): **82.1%** at 128K, **58.9%** at 1M
- AA-LCR: **61.7**

Multimodal:
- MMMU (visual reasoning): **79.7%**
- Video and audio input: native frame-accurate video comprehension and audio processing.

### Normalized scores (1–100)

- **Tool use: 64/100.** Capable standard function calling and API tool integration, though lagging frontier agentic benchmark performance (13.6% Terminal-Bench).
- **Reasoning: 76/100.** Solid analytical reasoning backed by 82.8% GPQA Diamond (thinking mode) and 78.3% MMLU-Pro, competitive for a 2025 lightweight model.
- **Context window: 86/100.** 1M input window with 65K max output, tempered by retrieval drop-off at maximum context lengths.
- **Multimodal: 82/100.** Robust native audio, video, image, and document ingestion with 79.7% MMMU; text-only output.
- **Coding: 68/100.** Dependable everyday code generation (60.4% SWE-bench Verified), sitting squarely in the mid-tier.
- **Cost efficiency: 89/100.** Highly economical $0.30 / $2.50 rates with legacy pricing on AI Studio and OpenRouter.
- **Overall Score: 75/100.** Mean of quality dimensions: Math.round((64 + 76 + 86 + 82 + 68) / 5) = 75.2 → 75. A dependable, fast multimodal workhorse representing Google's 2025 efficiency tier, superseded by Gemini 3.x Flash.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public web research across Google DeepMind technical disclosures, Artificial Analysis, and OpenRouter metrics; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
