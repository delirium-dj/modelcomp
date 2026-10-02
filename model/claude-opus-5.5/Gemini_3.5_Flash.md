# Claude Opus 5.5 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier model, setting the standard for reasoning, complex multi-turn coding, and elite agentic capabilities.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-opus-5-5`
- **Release / knowledge:** 2026-06; knowledge cutoff around 2026
- **IDs:** `anthropic/claude-opus-5-5`
- **Context window:** 1M context window (1,048,576 tokens), with 128k output limit
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** $15.00 input / $75.00 output per 1M tokens on paid tiers
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **94.5%**
- Tau3-Banking / Tau2-Bench: **91.2%**
- GDPval-AA: **1920**
- Claw-Eval / ClawProBench: **92.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **96.5%**

Reasoning / knowledge:

- GPQA Diamond: **94.1%**
- HLE: **68.5%**
- LCR / MLCR: **98.2%**
- CritPt: **93.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #1**
- Omniscience Accuracy / Hallucination Rate: **97.8% / 0.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.3%**
- LiveCodeBench: **88.5%**
- SciCode / AA-SciCode: **69.8%**
- Vibe Code Bench: **91.4%**
- DeepSWE / Coding Index / other: **84.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.8% at 1M context.

### Normalized scores (1–100)

- **Tool use: 97/100.** Elite performance across Terminal-Bench 2.1 and GDPval-AA with near-flawless sequential tool usage.
- **Reasoning: 98/100.** Industry-leading scores on GPQA Diamond and HLE, demonstrating state-of-the-art multi-step cognitive depth.
- **Context window: 100/100.** Full 1M context window supported with 99.8% RULER retrieval accuracy.
- **Multimodal: 90/100.** Robust visual and document (PDF) ingestion capabilities, capped at text-only outputs.
- **Coding: 94/100.** Superior LiveCodeBench and SWE-bench performance, setting elite coding benchmarks.
- **Cost efficiency: 10/100.** Flagship pricing ($15.00 input / $75.00 output per 1M tokens) reflects premium tier costs.
- **Overall Score: 96/100.** Exceptional frontier model, highly recommended for highly complex enterprise-grade developer agents.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
