# Gemini 2.5 Pro — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-2.5-pro`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's flagship thinking model integrating native chain-of-thought reasoning, 1M context processing, and industry-leading multimodal comprehension across text, vision, audio, and video.
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI (`google/gemini-2.5-pro`), OpenRouter. GenerateContent and Chat Completions API.
- **Release / knowledge:** June 17, 2025 release (scheduled legacy retirement October 20, 2026); knowledge cutoff April 2025.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens (1M tokens) input / 65,536 max output tokens — verified via Google Cloud documentation.
- **Modalities:** Native multimodal (text, high-res images, native audio speech, video in; text out); built-in thinking reasoning trace; tool calling; JSON schema mode.
- **Pricing (as of October 2026):** $1.25 / 1M input, $10.00 / 1M output ($0.3125 / 1M cached input tokens).
- **Architecture:** Proprietary multimodal Mixture-of-Experts (MoE) transformer with integrated native audio-visual tokenization and thinking process.

### Raw benchmarks found

Agent / tool use:

- Tau-Bench: **62.8%**
- Terminal-Bench 2.0 / 2.1: **34.5%**
- Toolathon / SWE Atlas Codebase QnA: **48.2%**
- GDPval-AA: **1,210**

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (thinking mode enabled)
- AIME 2025: **86.7%**
- Humanity's Last Exam (HLE): **15.4%**
- LMArena: Debuted at #1 upon introduction
- Omniscience Accuracy / Hallucination Rate: **84.5% / 8.2%**

Coding:

- SWE-bench Verified: **59.6%**
- LiveCodeBench: **58.4%**
- SciCode / AA-SciCode: **38.5%**
- Vibe Code Bench: **68.0%**

Long context & Multimodal:

- Video-MME & MMMU: State-of-the-art college-level multi-disciplinary visual and video understanding.
- Audio: Native state-of-the-art Automatic Speech Recognition (ASR) and Audio Speech Translation (AST).
- Needle-in-a-Haystack (NIAH): **99.5%** retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Capable function calling and tool coordination, though trailing newer agent-specialized architectures (62.8% Tau-Bench).
- **Reasoning: 87/100.** Strong mathematical and scientific reasoning powered by native thinking mode (86.4% GPQA Diamond, 86.7% AIME 2025).
- **Context window: 94/100.** Native 1M token context window with 65.5K max output capacity and near-lossless retrieval.
- **Multimodal: 89/100.** Exceptional native omnimodal capabilities spanning video, high-density audio, and technical diagrams.
- **Coding: 83/100.** Solid code generation and multi-file debugging (59.6% SWE-bench Verified).
- **Cost efficiency: 75/100.** Standard commercial enterprise tier pricing ($1.25 / $10.00 per 1M tokens) with prompt caching discounts.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (78 + 87 + 94 + 89 + 83) / 5 = 431 / 5 = 86.2 -> 86/100. Premier multimodal and long-context analysis engine with proven reasoning depth.

---

## Sources

- Google Keyword Gemini 2.5 Pro Announcement & System Card: https://blog.google/technology/ai/gemini-2-5-pro
- Google Cloud Vertex AI Model Lifecycle & Deprecation Schedule: https://cloud.google.com/vertex-ai/docs/generative-ai/learn/model-versions
- Epoch AI & OpenRouter Benchmark Synthesis: https://openrouter.ai/models/google/gemini-2.5-pro

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
