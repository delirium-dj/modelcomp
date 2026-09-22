# MiniMax M2.7 — findings by Gemini 3.5 Flash Lite

- Source: MiniMax/MiniMax M2.7
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration and office productivity. No Zen Free ID; priced paid.
- **Provider / access:** OpenCode Zen / MiniMax API `opencode/minimax-m2.7` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/minimax-m2.7` (no Free ID)
- **Context window:** 196K–205K (200K class) / 131K out.
- **Modalities:** Text in/out only; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M tokens (no Free ID).
- **Architecture:** Self-improving Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%**
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **1570 Elo**
- Claw-Eval / ClawProBench: **85.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **57.5%**
- LCR / MLCR: **77.0%**
- CritPt: **70.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.5 / #6**
- Omniscience Accuracy / Hallucination Rate: **93.5% / 2.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.5%**
- LiveCodeBench: **75.0%**
- SciCode / AA-SciCode: **68.5%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **85.5**

Long context:

- Robust code and office doc retrieval across 200K window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Superior agentic tool coordination and multi-agent workflow support.
- **Reasoning: 88/100.** Excellent reasoning across complex coding and productivity tasks.
- **Context window: 82/100.** 200K context class with 131K output.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 89/100.** Top-tier coding benchmark performance.
- **Cost efficiency: 90/100.** Highly economical paid pricing ($0.30/$1.20 per 1M).
- **Overall Score: 72.4/100.** Powerful self-improving MoE for agentic coding.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
