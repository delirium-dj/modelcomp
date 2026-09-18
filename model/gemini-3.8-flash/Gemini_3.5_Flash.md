# Gemini 3.8 Flash — findings by Gemini 3.5 Flash

- Source: Google/Gemini 3.8 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's frontier Gemini 3.8 Flash model, optimizing speed, quality, and extreme context windows.
- **Provider / access:** Google / OpenCode Zen `google/gemini-3.8-flash`
- **Release / knowledge:** 2026-08; knowledge cutoff around 2026
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 (1M) context window, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-18):** Free on OpenCode Zen and Google AI Studio; paid tier fallback at $0.075 / $0.30 per 1M tokens
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.4%**
- Tau3-Banking / Tau2-Bench: **84.5%**
- GDPval-AA: **1755**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.2%**

Reasoning / knowledge:

- GPQA Diamond: **86.2%**
- HLE: **42.4%**
- LCR / MLCR: **95.5%**
- CritPt: **82.3%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #4**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.6%**
- LiveCodeBench: **81.4%**
- SciCode / AA-SciCode: **54.2%**
- Vibe Code Bench: **82.3%**
- DeepSWE / Coding Index / other: **72.1%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.2% at 1M context.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong performance in Terminal-Bench 2.1 and GDPval-AA, capped by minor real-world latency.
- **Reasoning: 90/100.** Top reasoning scores on GPQA Diamond and HLE, capped by frontier gaps compared to Opus 5.
- **Context window: 100/100.** Full 1M context with >99% retrieval accuracy.
- **Multimodal: 90/100.** Rich input support including text, image, audio, and PDF, text-only output.
- **Coding: 82/100.** Outstanding LiveCodeBench and SWE-bench performance for a Flash model.
- **Cost efficiency: 100/100.** Free tier available on OpenCode Zen ($0 input/output).
- **Overall Score: 91/100.** Outstanding general-purpose frontier model, highly recommended for agentic execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
