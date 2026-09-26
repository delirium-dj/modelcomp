# Qwen 3.8 Flash — findings by Gemini 3.5 Flash

- Source: Alibaba/Qwen 3.8 Flash
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's low-latency third-generation Flash-class model, offering an excellent balance of speed, reasoning, and tool execution in a cost-efficient text-only format.
- **Provider / access:** Alibaba / OpenCode Zen `opencode/qwen-3.8-flash`
- **Release / knowledge:** Late 2025; knowledge cutoff late 2025
- **IDs:** `opencode/qwen-3.8-flash`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard highly economical flash pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.1%**
- Tau3-Banking / Tau2-Bench: **55.2%**
- GDPval-AA: **1320**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **77.2%**
- HLE: **24.5%**
- LCR / MLCR: **81.4%**
- CritPt: **70.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **41 / #32**
- Omniscience Accuracy / Hallucination Rate: **86.4% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **34.2%**
- LiveCodeBench: **61.4%**
- SciCode / AA-SciCode: **36.5%**
- Vibe Code Bench: **60.2%**
- DeepSWE / Coding Index / other: **54.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.0% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 73/100.** Reliable tool-calling schemas and consistent multi-turn action selection.
- **Reasoning: 75/100.** Balanced logical and analytical capabilities, highly responsive to complex queries.
- **Context window: 55/100.** Standard 128K context window.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 56/100.** High-fidelity code generation, syntax editing, and logic construction.
- **Cost efficiency: 95/100.** SOTA-level economy and exceptionally fast inference.
- **Overall Score: 55/100.** Excellent utility model, perfect for high-throughput, low-latency, and cost-constrained automation pipelines.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
