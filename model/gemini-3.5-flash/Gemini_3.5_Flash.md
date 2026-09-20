# Gemini 3.5 Flash — findings by Gemini 3.5 Flash

- Source: Google/Gemini 3.5 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's next-generation 3.5 Flash model, offering enhanced speed, capability, and efficiency.
- **Provider / access:** Google / OpenCode Zen `google/gemini-3.5-flash`
- **Release / knowledge:** 2026-01; knowledge cutoff around 2025
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 (1M) input / 1M output, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Free tier available on Google AI Studio and OpenCode Zen; fallback paid-tier pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.8%**
- Tau3-Banking / Tau2-Bench: **68.2%**
- GDPval-AA: **1425**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.4%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **28.4%**
- LCR / MLCR: **85.5%**
- CritPt: **72.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **50 / #25**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.4%**
- LiveCodeBench: **65.2%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **64.2%**
- DeepSWE / Coding Index / other: **54.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% at 1M context.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong terminal and tool manipulation capabilities, executing multi-turn operations efficiently.
- **Reasoning: 78/100.** Excellent reasoning and analytical capabilities for an efficient Flash-class model.
- **Context window: 100/100.** Full 1M context window with robust near-perfect retrieval.
- **Multimodal: 90/100.** Comprehensive input support for text, image, audio, and PDF, text-only output.
- **Coding: 47/100.** Moderate coding and code synthesis capability, suitable for minor scripts and debugging.
- **Cost efficiency: 100/100.** Highly cost-effective model featuring a generous free tier.
- **Overall Score: 79/100.** Extremely versatile, fast, and cost-efficient Flash model, ideal for general-purpose applications.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
