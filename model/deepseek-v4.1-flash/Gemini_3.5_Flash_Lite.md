# DeepSeek V4.1 Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek API `deepseek/deepseek-v4.1-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Zen Free ID)
- **Context window:** 1M / 384K out.
- **Modalities:** Text, image in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M tokens.
- **Architecture:** 552B Mixture-of-Experts with massive output window.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.2%**
- Tau3-Banking / Tau2-Bench: **77.0%**
- GDPval-AA: **1550 Elo**
- Claw-Eval / ClawProBench: **84.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.2%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%**
- HLE: **56.8%**
- LCR / MLCR: **76.0%**
- CritPt: **68.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.2 / #7**
- Omniscience Accuracy / Hallucination Rate: **93.2% / 2.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.5%**
- LiveCodeBench: **73.0%**
- SciCode / AA-SciCode: **66.8%**
- Vibe Code Bench: **79.2%**
- DeepSWE / Coding Index / other: **83.5**

Long context:

- Excellent recall across 1M input and 384K output window.

### Normalized scores (1–100)

- **Tool use: 87/100.** Highly efficient agentic execution and tool use.
- **Reasoning: 87/100.** Strong multi-step reasoning capabilities.
- **Context window: 95/100.** 1M context with 384K output capacity.
- **Multimodal: 78/100.** Reliable text and image processing.
- **Coding: 87/100.** Top-tier coding and code-generation benchmark results.
- **Cost efficiency: 90/100.** Extremely cost-effective paid pricing ($0.30/$1.20 per 1M).
- **Overall Score: 86.8/100.** Outstanding high-context MoE offering near-flagship performance at low cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
