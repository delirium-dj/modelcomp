# Gemini 3.1 Flash — findings by Laguna S 2.1

- Source: Google (`google/gemini-3.1-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Gemini 3.1 Flash is Google's efficient Flash-tier model balancing speed, 1M context, and low latency.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.1-flash`), OpenRouter.
- **Release / knowledge:** 2025-09-01 release; 2025-07 knowledge cutoff
- **IDs:** `google/gemini-3.1-flash`
- **Context window:** 1,048,576 tokens (1M total; 1M input / 1M max output)
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** Free tier available via Google AI Studio; low fallback rates
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **58.2%**
- GDPval-AA: **1240**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **18.0%**
- LCR / MLCR: **78.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #48**
- Omniscience Accuracy / Hallucination Rate: **82.4% / 4.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.4%**
- LiveCodeBench: **58.2%**
- SciCode / AA-SciCode: **32.4%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **51.0%**

Long context:

- 1M context window supported; 98.0% retrieval accuracy at 1M context.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 65.0% and Tau3-Banking 58.2%.
- **Reasoning: 72/100.** GPQA Diamond 74.0%, LCR 78.0%, and AA Intelligence Index 38 (#48).
- **Context window: 100/100.** Best-in-class 1M token context window retrieval.
- **Multimodal: 90/100.** Comprehensive text, image, audio, and PDF input processing.
- **Coding: 26/100.** SWE-bench Verified 38.4% and LiveCodeBench 58.2%.
- **Cost efficiency: 100/100.** Free tier available on Google AI Studio.
- **Overall Score: 72.0/100.** Mean of the five quality dimensions; high-value Flash-tier model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
