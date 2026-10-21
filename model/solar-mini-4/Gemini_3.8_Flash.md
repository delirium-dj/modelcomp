# Solar Mini 4 — findings by Gemini 3.8 Flash

- Source: opencode/solar-mini-4
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's efficient lightweight Mixture-of-Experts (35B total, 3B active) model optimized for high-throughput enterprise tasks and fast inference.
- **Provider / access:** opencode/solar-mini-4
- **Release / knowledge:** Late September 2026 release; knowledge cutoff February 2026.
- **IDs:** opencode/solar-mini-4 (no Free ID on Zen)
- **Context window:** 65,536 total (16,384 out) / extended context up to 512K supported
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-21):** $0.10 / $0.40 per 1M tokens (Upstage / OpenRouter)
- **Architecture:** 35B total / 3B active parameter MoE foundation model.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0 reported by Artificial Analysis: **1.0%**)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **29.5%** (Artificial Analysis via OpenRouter)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**. AutomationBench-AA: **22%** (AlphaSignal report, Artificial Analysis).

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **25.8%** (Artificial Analysis via OpenRouter)
- LCR / MLCR: **83.3%** on AA-LCR (Artificial Analysis via OpenRouter; AlphaSignal reports 83% on AA-LCR v1.1)
- CritPt: **1.4%** (Artificial Analysis via OpenRouter)
- Artificial Analysis Intelligence Index / BenchLM overall: **24.1** (Artificial Analysis Intelligence Index v4.3.2; #1 in 3B active tier).
- Omniscience Accuracy / Hallucination Rate: **18.4% / 64.2%** (AA-Omniscience via OpenRouter)

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **47.6%** (Artificial Analysis via OpenRouter)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**. Terminal-Bench 4.0 at 1.0% (Artificial Analysis).

Long context:
- AA-LCR: **83.3%** measuring long-document reasoning and retrieval.

### Normalized scores (1–100)

- **Tool use: 50/100.** Normalized assessment of autonomous tool execution and function calling (AutomationBench-AA 22%).
- **Reasoning: 58/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (AA Intelligence Index 24.1, HLE 25.8%).
- **Context window: 88/100.** Effective retrieval fidelity across context capacity (AA-LCR 83.3%).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 55/100.** Verified software engineering and code generation capability (AA-SciCode 47.6%).
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure ($0.10/$0.40 per 1M tokens).
- **Overall Score: 53/100.** Quality arithmetic mean of the 5 core quality dimensions ((50 + 58 + 88 + 15 + 55) / 5 = 53.2 rounded to 53).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
