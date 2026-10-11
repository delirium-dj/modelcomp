# Gemini 1.5 Pro — findings by Gemini 3.8 Flash

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's pioneering 2,097,152-token multimodal architecture (1.5 generation); landmark model for massive repository analysis, hour-long video understanding, and audio reasoning, now transitioned to legacy status behind Gemini 2.5 and 3.x lines.
- **Provider / access:** Google AI Studio / Gemini API and Google Cloud Vertex AI (`gemini-1.5-pro`, `gemini-1.5-pro-002`), [OpenRouter](https://openrouter.ai/models/google/gemini-pro-1.5).
- **Release / knowledge:** 2024-02 preview, September 2024 (002 update); knowledge cutoff late 2023.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 2,097,152 tokens (2M input context, max output 8,192 tokens).
- **Modalities:** Text, image, audio, video, and PDF input; text output; native tool/function calling; JSON mode.
- **Pricing (as of 2026-10-11):** $1.25 / 1M input tokens and $5.00 / 1M output tokens (prompts <=128K); $2.50 / $10.00 (prompts >128K) ([Google AI Studio](https://aistudio.google.com/)).
- **Architecture:** Sparse Mixture-of-Experts (MoE) transformer architecture optimized for long-sequence multimodal retrieval.

### Raw benchmarks found

Agent / tool use:
- Function calling / Tool use: supported natively via Google AI Studio and Vertex SDKs
- Terminal-Bench / Tau-bench: no verified public score found on modern agent suites

Reasoning / knowledge:
- GPQA Diamond: **58.9%** ([Vals AI / Artificial Analysis](https://vals.ai))
- Humanity's Last Exam (HLE): **4.6%**
- MMLU-Pro: **75.8%** ([Google DeepMind Technical Report](https://blog.google))
- MATH: **67.7%**
- BIG-Bench Hard: **89.2%**

Coding:
- LiveCodeBench: **41.7%**
- HumanEval: **84.1%**
- MBPP+: **74.6%**
- SciCode: **29.5%**

Long context:
- Needle-in-a-haystack: **99.7%** recall across 1M tokens, **99.2%** recall across 2M tokens.
- MRCR: **82.6%** (TechBriefly aggregate / arXiv:2403.05530).

Multimodal:
- Video-MME: **78.6%**
- MathVista: **63.9%**
- DocVQA / ChartQA: SOTA benchmarks at launch for dense document retrieval.

### Normalized scores (1–100)

- **Tool use: 48/100.** Baseline native function calling and structured JSON output, lacking modern autonomous agent scaffold and terminal evaluations.
- **Reasoning: 64/100.** Capable general and mathematical reasoning backed by 58.9% GPQA Diamond and 75.8% MMLU-Pro, trailing current reasoning frontier.
- **Context window: 98/100.** Historic 2M token input window with verified 99.7% needle recall, limited only by the 8,192 output token generation ceiling.
- **Multimodal: 88/100.** True native multimodal ingestion handling audio, hour-long video, high-resolution imagery, and PDFs seamlessly; text-only output.
- **Coding: 57/100.** Sound procedural code generation (84.1% HumanEval, 74.6% MBPP+), though subdued on modern competitive tests (41.7% LiveCodeBench).
- **Cost efficiency: 84/100.** Historically attractive $1.25 in / $5.00 out pricing; legacy status.
- **Overall Score: 71/100.** Mean of quality dimensions: Math.round((48 + 64 + 98 + 88 + 57) / 5) = 71.0 → 71. A legendary long-context multimodal pioneer serving as a high-context benchmark baseline.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public web research across Google DeepMind technical publications (arXiv:2403.05530), Artificial Analysis, and OpenRouter model cards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
