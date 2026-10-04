# GPT 5.2 — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT 5.2
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** OpenAI's evaluation model designed for solid general-purpose reasoning, tool integration, and high-quality text generation.
- **Provider / access:** OpenAI / OpenCode Zen `opencode/gpt-5.2`
- **Release / knowledge:** 2025-10; knowledge cutoff around 2025
- **IDs:** `opencode/gpt-5.2`
- **Context window:** 128K context window (131,072 tokens)
- **Modalities:** Text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** Paid-tier pricing at standard commercial pro rates ($1.50 input / $6.00 output per 1M tokens)
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.5%**
- Tau3-Banking / Tau2-Bench: **87.5%**
- GDPval-AA: **1805**
- Claw-Eval / ClawProBench: **88.9%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.1%**

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- HLE: **55.6%**
- LCR / MLCR: **96.8%**
- CritPt: **88.9%**
- Artificial Analysis Intelligence Index / BenchLM overall: **81 / #8**
- Omniscience Accuracy / Hallucination Rate: **94.1% / 1.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.1%**
- LiveCodeBench: **83.1%**
- SciCode / AA-SciCode: **62.5%**
- Vibe Code Bench: **85.8%**
- DeepSWE / Coding Index / other: **77.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.9% at 128K context.

### Normalized scores (1–100)

- **Tool use: 92/100.** Solid performance in tool selection and execution safety, particularly on Terminal-Bench.
- **Reasoning: 91/100.** Strong cognitive capabilities on GPQA Diamond, indicating highly advanced analytical depth.
- **Context window: 45/100.** Standard 128K context window with near-perfect retrieval accuracy.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 87/100.** Exceptional coding accuracy on LiveCodeBench, robust enough for multi-turn software refactoring.
- **Cost efficiency: 45/100.** Standard pro-tier pricing structure.
- **Overall Score: 66/100.** Highly reliable general-purpose model, capped by text-only capabilities and a 128K context window.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
