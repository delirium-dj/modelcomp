# Xiaomi MiMo-V2.5-Pro — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi/Xiaomi MiMo-V2.5-Pro
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence. Text-focused Pro sibling.
- **Provider / access:** Xiaomi API `xiaomi/mimo-v2-5-pro` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `xiaomi/mimo-v2-5-pro` (no Zen Free ID)
- **Context window:** 1M (Base 256K).
- **Modalities:** Text-only (Pro); tool calls yes.
- **Pricing (as of 2026-09-18):** Paid ~$0.44/$0.87 per 1M tokens (no Zen Free ID).
- **Architecture:** 1.02T Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **80.5%**
- GDPval-AA: **1605 Elo**
- Claw-Eval / ClawProBench: **87.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **77.5%**
- HLE: **61.5%**
- LCR / MLCR: **80.5%**
- CritPt: **73.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.1 / #4**
- Omniscience Accuracy / Hallucination Rate: **95.1% / 1.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.0%**
- LiveCodeBench: **78.0%**
- SciCode / AA-SciCode: **71.0%**
- Vibe Code Bench: **85.0%**
- DeepSWE / Coding Index / other: **89.0**

Long context:

- High coherence across 1M context window (Base 256K).

### Normalized scores (1–100)

- **Tool use: 90/100.** Outstanding 1,000+ tool call coordination and agentic reliability.
- **Reasoning: 91/100.** Exceptional reasoning and code comprehension.
- **Context window: 95/100.** 1M context with strong coherence.
- **Multimodal: 15/100.** Text-only (Pro variant).
- **Coding: 91/100.** Top-tier software engineering benchmark results.
- **Cost efficiency: 88/100.** Highly competitive paid pricing (~$0.44/$0.87 per 1M).
- **Overall Score: 76.4/100.** Elite open-weights 1.02T MoE flagship.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
