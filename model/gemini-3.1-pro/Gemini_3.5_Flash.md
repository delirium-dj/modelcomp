# Gemini 3.1 Pro — findings by Gemini 3.5 Flash

- Source: Google/Gemini 3.1 Pro
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's high-performance frontier model, delivering exceptional multimodal reasoning, tool usage, and a massive 2M context window.
- **Provider / access:** Google / OpenCode Zen `google/gemini-3.1-pro`
- **Release / knowledge:** 2026-02; knowledge cutoff around 2026
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2M context window (2,097,152 tokens), with 64k output limit
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** Free tier available on OpenCode Zen and Google AI Studio; paid tiers at $1.25 input / $5.00 output per 1M tokens
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.4%**
- Tau3-Banking / Tau2-Bench: **88.2%**
- GDPval-AA: **1810**
- Claw-Eval / ClawProBench: **89.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.8%**

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- HLE: **56.3%**
- LCR / MLCR: **97.1%**
- CritPt: **89.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #6**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 1.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.2%**
- LiveCodeBench: **84.5%**
- SciCode / AA-SciCode: **63.4%**
- Vibe Code Bench: **87.2%**
- DeepSWE / Coding Index / other: **78.4%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.5% at 2M context.

### Normalized scores (1–100)

- **Tool use: 93/100.** Highly robust tool calling and multi-step action execution on Terminal-Bench.
- **Reasoning: 92/100.** Exceptional scientific, math, and logical capability on GPQA Diamond.
- **Context window: 100/100.** Industry-leading 2M context window with 99.5% retrieval accuracy on RULER.
- **Multimodal: 95/100.** State-of-the-art native multimodal parsing (text, image, audio, video, PDF) with text-only outputs.
- **Coding: 88/100.** Strong LiveCodeBench and SWE-bench performance, excellent for complex code generation.
- **Cost efficiency: 100/100.** Free tier available on OpenCode Zen ($0 input/output).
- **Overall Score: 94/100.** Premium multimodal reasoning powerhouse with unmatched context window capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
