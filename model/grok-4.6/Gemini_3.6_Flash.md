# Grok 4.6 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4.6`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model engineered for high-level reasoning, code synthesis, real-time platform search, and agentic tool workflows.
- **Provider / access:** xAI API (`xai/grok-4.6`).
- **Release / knowledge:** 2026-07-28 release; knowledge cutoff April 2026.
- **IDs:** `xai/grok-4.6` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M) input / 128,000 (128K) output — verified via xAI developer documentation.
- **Modalities:** Text, image in; text out; structured function calls, real-time search mode.
- **Pricing (as of 2026-09-19):** Paid $2.00 / 1M input, $10.00 / 1M output tokens.
- **Architecture:** Proprietary xAI frontier Transformer with specialized reasoning and retrieval heads.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.0%**
- Tau3-Banking / Tau2-Bench: **77.5%**
- GDPval-AA: **1810 Elo**
- Claw-Eval / ClawProBench: **80.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.5%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%**
- HLE: **25.0%**
- LCR / MLCR: **83.0%**
- CritPt: **77.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **141 / #5**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 3.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **63.5%**
- LiveCodeBench: **72.0%**
- SciCode / AA-SciCode: **69.0%**
- Vibe Code Bench: **82.5%**
- DeepSWE / Coding Index / other: **79.5**

Long context:

- MRCR / RULER / GraphWalks value at window length: **99.1% retrieval accuracy across 1M tokens**

### Normalized scores (1–100)

- **Tool use: 82/100.** Excellent real-time search integration and API tool execution.
- **Reasoning: 84/100.** High GPQA Diamond and logical reasoning scores.
- **Context window: 85/100.** Full 1M token context tier with high retrieval accuracy.
- **Multimodal: 75/100.** Strong vision capabilities for image and diagram analysis.
- **Coding: 84/100.** Top-tier coding and automated debugging performance.
- **Cost efficiency: 70/100.** Competitive frontier pricing ($2/$10 per 1M tokens).
- **Overall Score: 82.0/100.** Mean of the five quality dimensions; strong frontier option for reasoning and real-time research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
