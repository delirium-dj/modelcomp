# Gemini 1.5 Pro — findings by Gemini 3.8 Flash

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's pioneering 2M-token multimodal architecture (1.5 generation); landmark model for massive repository analysis, video understanding, and audio reasoning, now superseded by Gemini 2.x and 3.x lines.
- **Provider / access:** Google AI Studio / Gemini API and Google Cloud Vertex AI (`gemini-1.5-pro`, `gemini-1.5-pro-002`). Retired/legacy status.
- **Release / knowledge:** February 2024 preview, September 2024 (002 update); knowledge cutoff November 2023.
- **IDs:** `google/gemini-1.5-pro` (no Zen Free ID, scored on historical paid rate)
- **Context window:** 2,097,152 tokens (2M input context, max output 8,192 tokens).
- **Modalities:** text, image, audio, video, PDF in; text out; native tool/function calling; JSON mode.
- **Pricing (as of 2024-10-01 historical):** $1.25 / 1M input and $5.00 / 1M output (prompts <=128K); $2.50 / $10.00 (prompts >128K).
- **Architecture:** Sparse Mixture-of-Experts Transformer architecture optimized for long-sequence multimodal retrieval.

### Raw benchmarks found

Agent / tool use:

- Function calling / Tool use: supported natively via Google AI Studio and Vertex SDKs
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **58.9%** (Artificial Analysis / Vals AI)
- Humanity's Last Exam (HLE): **4.6%** (Scale AI / CAIS)
- MMLU-Pro: **75.8%** (Gemini 1.5 technical report)
- MATH: **67.7%** (Google technical report)
- BIG-Bench Hard: **89.2%**

Coding:

- LiveCodeBench: **41.7%** (Vals AI)
- SciCode: **29.5%** (BenchmarkList)
- HumanEval: **84.1%**
- MBPP+: **74.6%**
- SWE-bench Verified: no verified public score found

Long context:

- Needle-in-a-haystack: **99.7%** recall across 1M tokens, **99.2%** recall across 2M tokens.
- MRCR: **82.6%** (TechBriefly aggregate / arXiv:2403.05530).

Multimodal:

- Video-MME: **78.6%**
- MathVista: **63.9%**
- DocVQA / ChartQA: SOTA benchmarks at launch (Gemini 1.5 Pro report).

### Normalized scores (1–100)

- **Tool use: 48/100.** Baseline native function calling and structured JSON output, lacking modern autonomous agent scaffold and terminal evaluations.
- **Reasoning: 64/100.** Capable general and mathematical reasoning backed by 58.9% GPQA Diamond and 75.8% MMLU-Pro, trailing current reasoning frontier.
- **Context window: 98/100.** Historic 2M token input window with verified 99.7% needle recall, limited only by the 8,192 output token generation ceiling.
- **Multimodal: 88/100.** True native multimodal ingestion handling audio, video, high-resolution imagery, and PDFs seamlessly; text-only output.
- **Coding: 57/100.** Sound procedural code generation (84.1% HumanEval, 74.6% MBPP+), though subdued on modern competitive tests (41.7% LiveCodeBench).
- **Cost efficiency: 84/100.** Historically attractive $1.25 in / $5.00 out pricing; legacy status with no active free tier on Zen.
- **Overall Score: 71/100.** Mean of quality dimensions: Math.round((48 + 64 + 98 + 88 + 57) / 5) = 71.0. A legendary long-context multimodal pioneer serving as a high-context benchmark baseline.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across Google DeepMind technical publications (arXiv:2403.05530), Artificial Analysis, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
