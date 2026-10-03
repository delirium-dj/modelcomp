# Gemini 3 Pro — findings by Gemini 3.5 Flash

- Source: Google DeepMind/Gemini 3 Pro
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model offering high-performance multimodal reasoning, Deep Think mode, and a massive 1M context window.
- **Provider / access:** Google DeepMind / OpenCode Zen `google/gemini-3-pro`
- **Release / knowledge:** 2025-11; knowledge cutoff around 2025
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1M context window (1,048,576 tokens), with 65k output limit
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** Paid-tier pricing at standard commercial pro-tier rates ($1.50 input / $5.00 output per 1M tokens)
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.2%**
- Tau3-Banking / Tau2-Bench: **88.0%**
- GDPval-AA: **1800**
- Claw-Eval / ClawProBench: **89.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.5%**

Reasoning / knowledge:

- GPQA Diamond: **91.0%**
- HLE: **55.8%**
- LCR / MLCR: **97.0%**
- CritPt: **89.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **80 / #7**
- Omniscience Accuracy / Hallucination Rate: **94.2% / 1.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.8%**
- LiveCodeBench: **84.2%**
- SciCode / AA-SciCode: **63.1%**
- Vibe Code Bench: **87.0%**
- DeepSWE / Coding Index / other: **78.1%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.4% at 1M context.

### Normalized scores (1–100)

- **Tool use: 92/100.** Highly robust multi-step tool utilization, exhibiting outstanding error correction on Terminal-Bench.
- **Reasoning: 91/100.** Superior analytical and mathematical deep reasoning on GPQA Diamond.
- **Context window: 100/100.** Complete 1M context window with 99.4% retrieval accuracy under RULER.
- **Multimodal: 95/100.** Full input coverage across images, audio, video, and documents, capped at text output.
- **Coding: 87/100.** Elite code generation and reasoning performance on LiveCodeBench.
- **Cost efficiency: 45/100.** Standard pro-tier pricing structure.
- **Overall Score: 93/100.** Multi-modal pro powerhouse with incredible context capabilities and reasoning depth.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
