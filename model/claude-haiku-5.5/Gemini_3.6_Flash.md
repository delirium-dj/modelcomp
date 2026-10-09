# Claude Haiku 5.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-haiku-5-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest Claude 5.5-family small model with adjustable reasoning effort for high-volume tasks.
- **Provider / access:** Anthropic API (`anthropic/claude-haiku-5-5`), OpenCode Zen (`opencode/claude-haiku-5.5`). Messages API with extended output support.
- **Release / knowledge:** 2026-06 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-haiku-5-5`, `opencode/claude-haiku-5.5`
- **Context window:** 1,000,000 tokens total (128K max output); verified via Anthropic documentation.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $0.10 / 1M input, $0.50 / 1M output (prompts ≤100K); $0.50 / $2.50 above 100K.
- **Architecture:** Lightweight proprietary transformer optimized for ultra-low latency inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.2%**
- Tau3-Banking / Tau2-Bench: **81.5%**
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.4%**

Reasoning / knowledge:

- GPQA Diamond: **78.2%**
- HLE: **29.8%**
- LCR / MLCR: **82.6%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #10**
- Omniscience Accuracy / Hallucination Rate: **89.4% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.5%**
- LiveCodeBench: **58.2%**
- SciCode / AA-SciCode: **50.4%**
- Vibe Code Bench: **82.8%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.6% needle retrieval accuracy across full 1M context window length.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-speed agentic tool execution with 81.5% Tau2-Bench and 44.2% Terminal-Bench 2.1.
- **Reasoning: 88/100.** Excellent efficiency reasoning capacity with 78.2% GPQA Diamond and 86 Artificial Analysis Index.
- **Context window: 97/100.** 1M context window with 128K output generation depth.
- **Multimodal: 85/100.** Native image and PDF document understanding capabilities.
- **Coding: 85/100.** High-volume fast coding performance with 60.5% SWE-bench Verified and 58.2% LiveCodeBench.
- **Cost efficiency: 94/100.** Exceptionally economical sub-dollar pricing tier at $0.10/$0.50 per 1M tokens.
- **Overall Score: 89/100.** Arithmetic mean of non-cost dimensions (88 + 88 + 97 + 85 + 85) / 5 = 88.6 -> 89. Ideal choice for high-volume agentic workflows, long-context document analysis, and real-time coding tools.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
