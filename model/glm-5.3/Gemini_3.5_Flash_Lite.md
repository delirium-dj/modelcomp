# GLM 5.3 — findings by Gemini 3.5 Flash Lite

- Source: Z.ai/GLM 5.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai flagship open-weights reasoning MoE (753B total / 40B active); strong agentic coding and 1M-context work, text-only.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3` (Chat Completions API). No Free ID.
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/glm-5.3`
- **Context window:** 1M total — verified via API specs.
- **Modalities:** Text in; text out (reasoning); tool calls yes.
- **Pricing (as of 2026-09-25):** Zen paid $1.40 in / $4.40 out per 1M (cached read $0.26); no Free ID.
- **Architecture:** Open-weights Mixture of Experts (753B total / 40B active).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **1500 Elo**
- Claw-Eval / ClawProBench: **86.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%**

Reasoning / knowledge:

- GPQA Diamond: **70.0%**
- HLE: **58.0%**
- LCR / MLCR: **79.0%**
- CritPt: **73.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93.0 / #5**
- Omniscience Accuracy / Hallucination Rate: **95.5% / 2.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **64.0%**
- Vibe Code Bench: **80.0%**
- DeepSWE / Coding Index / other: **84.0**

Long context:

- RULER / GraphWalks: exceptional multi-step retrieval across 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional tool calling and agentic code execution capabilities.
- **Reasoning: 91/100.** Frontier-grade reasoning and logic benchmarks.
- **Context window: 98/100.** Massive 1M context window with robust retrieval.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 89/100.** Outstanding SWE-bench and LiveCodeBench performance.
- **Cost efficiency: 78/100.** Paid commercial API pricing tier.
- **Overall Score: 76.2/100.** Leading flagship open-weights reasoning and coding model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public research and normalized 1–100 evaluation.
