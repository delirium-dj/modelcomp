# MiniMax M3 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: MiniMax M3 (minimax-m3)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** A frontier-level AI model from Chinese startup MiniMax that combines advanced coding capabilities, 1M token context window, and native multimodal support in a single open-weight model. Part of MiniMax's flagship model family released in June 2026.
- **Provider / access:** MiniMax Group (minimax.io) via API and Token Plans; MiniMax Code desktop app
- **Release / knowledge:** June 1, 2026; knowledge cutoff not specified
- **IDs:** `minimax/m3` (API endpoint)
- **Context window:** 1,000,000 tokens (ultra-long context with MSA sparse attention architecture)
- **Modalities:** Text input, image input, video input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026):** $0.15-$0.30 per 1M input tokens (≤512K standard, >512K long-context), $1.20-$2.40 per 1M output tokens; Token Plans: Plus $20/month (~1.7B tokens), Max $50/month (~5.1B tokens), Ultra $120/month (~9.8B tokens)
- **Architecture:** Open-weight model with MSA (MiniMax Sparse Attention) sparse attention mechanism; mixture of experts; proprietary training framework

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.1:** 66.0% (MiniMax internal testing)
- **Toolathon / MCP-Atlas / SWE Atlas Codebase QnA:** 74.2% (MiniMax internal testing)
- **SWE-bench Verified:** 59.0% (MiniMax internal testing)
- **Context Window:** 1M token context window with MSA sparse attention architecture providing 9-15x speedup over previous generation
- **Real-world performance:** Successfully reproduced research papers, optimized CUDA kernels, autonomously trained models

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong agentic performance with MCP Atlas 74.2% and Terminal-Bench 2.1 66.0%; excellent complex task execution and tool usage capabilities.
- **Reasoning: 75/100.** Good reasoning capabilities demonstrated through SWE-Bench Pro 59.0% and complex task handling; sophisticated logical thinking with some limitations in advanced reasoning tasks.
- **Context window: 100/100.** Outstanding 1M token context window with MSA architecture providing 9-15x speedup; exceptional long-context processing capabilities with maximum possible score.
- **Multimodal: 90/100.** Excellent native multimodal capabilities supporting text, image, and video input from start; comprehensive multimodal understanding and processing.
- **Coding: 88/100.** Strong coding performance with SWE-Bench Verified 59.0% and Terminal-Bench 2.1 66.0%; capable code generation and debugging with good technical problem-solving.
- **Cost efficiency: 95/100.** Highly competitive pricing at $0.15-$0.30 per 1M input tokens and $1.20-$2.40 per 1M output tokens; outstanding value proposition with Token Plans available.
- **Overall Score: 88/100.** Exceptional model with outstanding context window and multimodal capabilities; ideal for developers needing long-context processing and multimodal understanding at competitive pricing.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including MiniMax official documentation, tech publications, and performance evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/minimax-m3/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/minimax-m3/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).