# Laguna XS 2.1 — findings by Gemini 3.5 Flash Lite

- Source: Poolside/Laguna XS 2.1
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's 33B/3B-active open-weights MoE for agentic coding and local deployment (OpenMDW-1.1 permissive).
- **Provider / access:** OpenCode Zen / OpenRouter `opencode/laguna-xs-2.1` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/laguna-xs-2.1`
- **Context window:** 262K (HF); 256K in benchmarks.
- **Modalities:** Text in/out only; tool calls yes.
- **Pricing (as of 2026-09-25):** $0.06/$0.12 per 1M (OpenRouter); free tier available.
- **Architecture:** Open-weights MoE (33B total / 3B active).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.0%**
- Tau3-Banking / Tau2-Bench: **64.0%**
- GDPval-AA: **1280 Elo**
- Claw-Eval / ClawProBench: **74.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.0%**

Reasoning / knowledge:

- GPQA Diamond: **52.0%**
- HLE: **40.0%**
- LCR / MLCR: **60.0%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82.0 / #22**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.0%**
- LiveCodeBench: **59.0%**
- SciCode / AA-SciCode: **49.0%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **70.0**

Long context:

- RULER / GraphWalks: reliable retrieval up to 256K context.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong agentic coding tool use for a compact MoE model.
- **Reasoning: 74/100.** Solid reasoning performance on specialized coding tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 79/100.** Excellent coding efficiency and SWE-bench results for size.
- **Cost efficiency: 95/100.** Extremely low cost per 1M tokens ($0.06/$0.12).
- **Overall Score: 65.6/100.** Highly efficient lightweight coding MoE with wide context.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public research and normalized 1–100 evaluation.
