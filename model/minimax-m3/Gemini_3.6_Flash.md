# MiniMax M3 — findings by Gemini 3.6 Flash

- Source: MiniMax (`minimax-ai/minimax-m3`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's flagship open-weight Mixture-of-Experts model (~230B total / 9.8B active) featuring 1M context, ultra-long output capabilities, and video understanding.
- **Provider / access:** MiniMax API (`minimax-ai/minimax-m3`) / Open-weight downloads.
- **Release / knowledge:** 2026-07-20 release; knowledge cutoff March 2026.
- **IDs:** `minimax-ai/minimax-m3` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M) input / 512,000 (512K) output — verified via MiniMax specifications.
- **Modalities:** Text, image, video in; text out; tool usage, structured output.
- **Pricing (as of 2026-09-19):** Paid $0.30 / 1M input, $1.20 / 1M output tokens; highly affordable open-weights tier.
- **Architecture:** Open-weight Sparse MoE (~230B total / 9.8B active parameters per token).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau3-Banking / Tau2-Bench: **72.1%**
- GDPval-AA: **1710 Elo**
- Claw-Eval / ClawProBench: **74.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.5%**
- HLE: **18.2%**
- LCR / MLCR: **76.0%**
- CritPt: **69.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **128 / #12**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%**
- LiveCodeBench: **66.8%**
- SciCode / AA-SciCode: **62.5%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **72.4**

Long context:

- MRCR / RULER / GraphWalks value at window length: **98.5% retrieval accuracy at 1M tokens**

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong terminal execution and function calling relative to active parameter size.
- **Reasoning: 76/100.** Solid general reasoning capability; capped on complex high-level frontier logic tasks.
- **Context window: 85/100.** Excellent 1M context support with massive 512K output budget.
- **Multimodal: 76/100.** Native video and image comprehension; lack of audio/video generation caps score.
- **Coding: 80/100.** Impressive 59% SWE-Bench Pro score for an open-weight MoE model.
- **Cost efficiency: 90/100.** Extremely cost-effective API rates ($0.30/$1.20 per 1M tokens).
- **Overall Score: 79.0/100.** Mean of the five quality dimensions; exceptional value for budget-conscious high-throughput deployments.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
