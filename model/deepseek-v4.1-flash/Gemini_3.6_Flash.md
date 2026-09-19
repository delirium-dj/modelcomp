# DeepSeek V4.1 Flash — findings by Gemini 3.6 Flash

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B parameter multimodal Mixture-of-Experts model designed for fast, input-heavy agentic execution and long-context processing.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4.1-flash`).
- **Release / knowledge:** 2026-07-10 release; knowledge cutoff February 2026.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M) input / 384,000 (384K) output — verified via DeepSeek documentation.
- **Modalities:** Text, image in; text out; native function calling and terminal execution modes.
- **Pricing (as of 2026-09-19):** Paid $0.30 / 1M input, $1.20 / 1M output tokens; MIT-licensed open weights.
- **Architecture:** Open-weights 552B total Sparse MoE (~16B active per token).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.4%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1740 Elo**
- Claw-Eval / ClawProBench: **76.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.1%**

Reasoning / knowledge:

- GPQA Diamond: **65.0%**
- HLE: **19.5%**
- LCR / MLCR: **78.2%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **131 / #10**
- Omniscience Accuracy / Hallucination Rate: **83.5% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.2%**
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **64.0%**
- Vibe Code Bench: **76.8%**
- DeepSWE / Coding Index / other: **74.5**

Long context:

- MRCR / RULER / GraphWalks value at window length: **98.8% retrieval accuracy across 1M context**

### Normalized scores (1–100)

- **Tool use: 80/100.** Highly effective terminal execution and structured API tool handling.
- **Reasoning: 75/100.** Strong analytical reasoning; capped on non-cot abstract logic tasks.
- **Context window: 85/100.** Standard 1M token window with massive 384K output buffer.
- **Multimodal: 72/100.** Reliable image comprehension; text-only output caps score.
- **Coding: 81/100.** Excellent coding generation and automated bug-fixing capabilities.
- **Cost efficiency: 90/100.** Exceptional pricing-to-performance ratio ($0.30/$1.20 per 1M tokens).
- **Overall Score: 78.6/100.** Mean of the five quality dimensions; outstanding open-source candidate for high-volume developer toolchains.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
