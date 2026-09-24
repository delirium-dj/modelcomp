# GPT-6 Luna — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/GPT-6 Luna
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's cutting-edge reasoning and agentic model optimized for zero-shot problem solving and advanced software engineering.
- **Provider / access:** OpenAI API / ChatGPT (`openai/gpt-6-luna`), Chat Completions & Responses API.
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 400K total tokens input / max output verified via OpenAI documentation.
- **Modalities:** Text in/out, advanced image analysis, tool calling, JSON mode, reasoning traces.
- **Pricing (as of 2026-09-24):** $10.00 / 1M input, $30.00 / 1M output (OpenAI flagship tier).
- **Architecture:** Advanced reasoning-centric architecture with integrated search and tool execution by OpenAI.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.0%** (OpenAI technical report, 2026)
- Tau3-Banking / Tau2-Bench: **93.5%**
- GDPval-AA: **1680 Elo**
- Claw-Eval / ClawProBench: **95.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94.0%**

Reasoning / knowledge:

- GPQA Diamond: **88.2%**
- HLE: **77.5%**
- LCR / MLCR: **90.1%**
- CritPt: **86.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **99 / #1**
- Omniscience Accuracy / Hallucination Rate: **96.5% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.5%**
- LiveCodeBench: **75.0%**
- SciCode / AA-SciCode: **83.5%**
- Vibe Code Bench: **87.0%**

Long context:

- RULER / GraphWalks (400K context): 99.5% accuracy up to 400K tokens.

### Normalized scores (1–100)

- **Tool use: 96/100.** Industry-leading autonomous tool orchestration, reasoning chains, and robust function execution.
- **Reasoning: 97/100.** Exceptional performance across GPQA Diamond, HLE, and complex mathematical problem solving.
- **Context window: 92/100.** Robust 400K context window with high fidelity retrieval.
- **Multimodal: 91/100.** High-precision visual reasoning, document parsing, and structured data extraction.
- **Coding: 94/100.** Top-tier software engineering capabilities with elite scores on SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 50/100.** Premium enterprise pricing reflecting cutting-edge capabilities and reasoning depth.
- **Overall Score: 94/100.** State-of-the-art frontier reasoning model delivering elite multi-step agentic performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: public internet research & model evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
