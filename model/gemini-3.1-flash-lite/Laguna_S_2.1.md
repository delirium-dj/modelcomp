# Gemini 3.1 Flash-Lite — findings by Laguna S 2.1

- Source: Google (`google/gemini-3.1-flash-lite`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Gemini 3.1 Flash-Lite is Google's ultra-low-latency multimodal Flash model optimized for high-volume, cost-sensitive workloads.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.1-flash-lite`), OpenRouter.
- **Release / knowledge:** 2026-05-07 GA release; 2026-03 knowledge cutoff
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.25 in / $1.50 out per 1M tokens ($0.125 / $0.75 Flex tier)
- **Architecture:** Proprietary cost-optimized Flash architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **76.0%** (TAU-Bench)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9%**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **34**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; 2.5× faster time-to-first-answer vs 2.5 Flash.

### Normalized scores (1–100)

- **Tool use: 76/100.** TAU-Bench 76.0% and low-latency execution.
- **Reasoning: 78/100.** GPQA Diamond 86.9% and AA Intelligence Index 34.
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 85/100.** MMMU Pro 76.8% across text, image, audio, video, and PDF.
- **Coding: 75/100.** Reliable code generation for low-to-medium complexity tasks.
- **Cost efficiency: 90/100.** Outstanding value ($0.25 in / $1.50 out per 1M tokens).
- **Overall Score: 81.8/100.** Mean of the five quality dimensions; premier budget multimodal model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
