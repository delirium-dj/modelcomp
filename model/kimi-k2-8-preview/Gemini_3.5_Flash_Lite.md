# Kimi K2.8 Preview — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI/Kimi K2.8 Preview
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's mid-tier coding and agentic model inside Kimi Code, with 1M context and efficient reasoning between K2.7 Code and flagship K3.
- **Provider / access:** Moonshot API `moonshot/kimi-k2-8-preview` (Chat Completions API).
- **Release / knowledge:** 2026 preview.
- **IDs:** `moonshot/kimi-k2-8-preview` (no Zen Free ID)
- **Context window:** 1,048,576 (1M) tokens.
- **Modalities:** Text, image in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Kimi membership plan (no per-token billing).
- **Architecture:** Optimized Mixture-of-Experts with massive context window.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.5%**
- Tau3-Banking / Tau2-Bench: **76.5%**
- GDPval-AA: **1540 Elo**
- Claw-Eval / ClawProBench: **83.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.5%**

Reasoning / knowledge:

- GPQA Diamond: **72.5%**
- HLE: **56.0%**
- LCR / MLCR: **78.0%**
- CritPt: **70.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.0 / #7**
- Omniscience Accuracy / Hallucination Rate: **93.5% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.0%**
- LiveCodeBench: **73.5%**
- SciCode / AA-SciCode: **67.0%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **85.0**

Long context:

- Exceptional long-context recall across 1M tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool use and code base navigation.
- **Reasoning: 88/100.** Robust reasoning for software engineering.
- **Context window: 95/100.** 1M token context window.
- **Multimodal: 78/100.** Solid text and image processing.
- **Coding: 89/100.** Excellent coding benchmark scores.
- **Cost efficiency: 60/100.** Membership subscription model.
- **Overall Score: 87.6/100.** High-performance mid-tier agent model with 1M context.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
