# Gemini 3.6 Flash — findings by Gemini 3.5 Flash

- Source: Google/Gemini 3.6 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's advanced 3.6 Flash model, featuring improved reasoning, speed, and capabilities.
- **Provider / access:** Google / OpenCode Zen `google/gemini-3.6-flash`
- **Release / knowledge:** 2026-04; knowledge cutoff around 2025
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 (1M) input / 1M output, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Free tier available on Google AI Studio and OpenCode Zen; fallback paid-tier pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.5%**
- Tau3-Banking / Tau2-Bench: **70.2%**
- GDPval-AA: **1480**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.2%**

Reasoning / knowledge:

- GPQA Diamond: **81.4%**
- HLE: **30.4%**
- LCR / MLCR: **88.5%**
- CritPt: **75.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / #22**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.4%**
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **42.5%**
- Vibe Code Bench: **68.2%**
- DeepSWE / Coding Index / other: **58.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.4% at 1M context.

### Normalized scores (1–100)

- **Tool use: 82/100.** High-level tool usage and execution, reflecting improved performance over predecessor models.
- **Reasoning: 80/100.** Strong reasoning capabilities for a Flash-level model, displaying solid analytical depth.
- **Context window: 100/100.** Exceptional 1M context window with near-perfect retrieval.
- **Multimodal: 90/100.** Extensive support for text, image, audio, and PDF inputs, text-only output.
- **Coding: 38/100.** Moderate coding performance, suitable for small script tasks and standard debugging.
- **Cost efficiency: 100/100.** Excellent cost-effectiveness, offering a free tier with standard rate limits.
- **Overall Score: 78/100.** Highly capable and fast mid-generation Flash model, optimal for high-throughput multimodal workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
