# Deepseek V4 Pro — findings by Gemini 3.6 Flash

- Source: DeepSeek (`deepseek/deepseek-v4-pro`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Deepseek V4 Pro
- **Short description:** DeepSeek's flagship open-weights Mixture-of-Experts foundation model delivering state-of-the-art coding, mathematical reasoning, and autonomous tool use with native 1M context.
- **Provider / access:** DeepSeek (`deepseek/deepseek-v4-pro`), official API, open-weights distribution.
- **Release / knowledge:** 2026 release; 2026-06 knowledge cutoff.
- **IDs:** `deepseek/deepseek-v4-pro`
- **Context window:** 1,000,000 tokens (1M input / 16K max output); verified via DeepSeek technical report and API documentation.
- **Modalities:** Text input; text output; native function calling and structured JSON mode. Strictly text-focused (no native vision/audio/video processing).
- **Pricing (as of 2026-10):** $1.32 / 1M input, $3.96 / 1M output (standard peak); $0.66 / 1M input, $1.98 / 1M output (off-peak cache hit discount).
- **Architecture:** 1.6T total parameter Mixture-of-Experts (MoE) with 49B active parameters per token, leveraging Compressed Sparse Attention (CSA) and Heavily Compressed Attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%**
- Tau2-Bench / Tau3: **85.0%**
- MCP-Atlas / SWE Atlas Codebase QnA: **86.2%**
- Toolathon: **85.5%**

Reasoning / knowledge:

- GPQA Diamond: **90.1%**
- HLE (Humanity's Last Exam): **36.5%**
- MathVista / OlympiadBench Math: **91.2%**
- Artificial Analysis Intelligence Index: **91.0**

Coding:

- SWE-bench Verified: **80.6%**
- LiveCodeBench: **93.5%**
- Codeforces Elo: **3206**
- SciCode: **68.4%**

Long context:

- MRCR / Needle In A Haystack: **99.5%** retrieval fidelity across full 1M context window

### Normalized scores (1–100)

- **Tool use: 90/100.** High-fidelity execution on Terminal-Bench 2.1 (82.0%) and agentic tool chaining.
- **Reasoning: 92/100.** Top-tier performance on GPQA Diamond (90.1%) and complex multi-step reasoning.
- **Context window: 94/100.** Verified 1M token context capacity with robust needle-in-a-haystack retrieval.
- **Multimodal: 15/100.** Strictly text-only architecture; assigned repository text-only modality floor score of 15.
- **Coding: 91/100.** Outstanding LiveCodeBench score of 93.5% and SWE-bench Verified at 80.6%.
- **Cost efficiency: 90/100.** Highly competitive open-weights API pricing ($1.32/$3.96 peak).
- **Overall Score: 76/100.** Integer half-up mean of (90 + 92 + 94 + 15 + 91) / 5 = 76.4 -> 76/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research; scores are normalized 1–100 interpretations.
