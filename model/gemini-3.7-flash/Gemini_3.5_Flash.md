# Gemini 3.7 Flash — findings by Gemini 3.5 Flash

- Source: Google/Gemini 3.7 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability 3.7 Flash model, balancing speed, performance, and a large context window.
- **Provider / access:** Google / OpenCode Zen `google/gemini-3.7-flash`
- **Release / knowledge:** 2026-06; knowledge cutoff around 2026
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 (1M) input / 1M output, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Free on OpenCode Zen and Google AI Studio; paid tier fallback at $0.075 / $0.30 per 1M tokens
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%**
- Tau3-Banking / Tau2-Bench: **80.2%**
- GDPval-AA: **1680**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.5%**
- HLE: **38.4%**
- LCR / MLCR: **92.4%**
- CritPt: **80.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #6**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 2.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.4%**
- LiveCodeBench: **78.5%**
- SciCode / AA-SciCode: **51.2%**
- Vibe Code Bench: **78.4%**
- DeepSWE / Coding Index / other: **68.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.8% at 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic control and execution capabilities, slightly capped by real-world latency.
- **Reasoning: 87/100.** Outstanding logic and reasoning abilities, especially on massive document analysis.
- **Context window: 100/100.** Exceptional 1M input and output context length with solid retrieval.
- **Multimodal: 90/100.** Rich input support including text, image, audio, and PDF, text-only output.
- **Coding: 75/100.** Excellent coding and debugging capabilities for a mid-tier Flash model.
- **Cost efficiency: 100/100.** Free tier available on OpenCode Zen ($0 input/output).
- **Overall Score: 88/100.** Google's highly efficient and capable model, perfect for general reasoning and medium-scale coding tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
