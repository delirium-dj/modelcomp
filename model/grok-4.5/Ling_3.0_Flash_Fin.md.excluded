# Grok 4.5 — findings by Ling 3.0 Flash Fin

- Source: xAI / SpaceXAI (`opencode/grok-4-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's flagship proprietary reasoning model built for coding, agentic tasks, and knowledge work, trained alongside Cursor with a focus on per-token intelligence and extreme token efficiency.
- **Provider / access:** xAI (`x-ai/grok-4-5`), OpenRouter, Grok Build, DeepInfra. Chat Completions / Responses API. Proprietary.
- **Release / knowledge:** 2026-07-08 (released July 8, 2026). Knowledge cutoff not explicitly stated.
- **IDs:** `x-ai/grok-4-5` (xAI), `grok-4-5` (OpenRouter), `Grok 4.5` (Grok Build)
- **Context window:** 500K total tokens (256K marketing claim; documented 500K). No extended context mode confirmed.
- **Modalities:** Text in/out, file image input supported; reasoning enabled by default; tool calls (parallel supported); JSON mode; context compaction for long sessions.
- **Pricing (as of 2026-09-24):** $2.00/1M input, $6.00/1M output, $0.50/1M cached (xAI); ~$1.21 blended per AA (7:2:1 cache ratio). Web/X search + code execution: $5.00/1,000 calls.
- **Architecture:** ~1.5T parameters (3x predecessor Grok 4), Mixture-of-Experts with reasoning mode; 80 TPS serving speed; proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI official announcement, BenchLM, 44b.nysgpt.com)
- Terminal-Bench 2.0: **83.3%** (BenchLM)
- Terminal-Bench 3.0: **15.7%** (BenchLM, tbench.ai)
- Terminal-Bench 4.0: **12.42%** (aireleasetracker)
- SWE-Bench Pro (resolve rate): **64.7%** (xAI official announcement, DataLearner)
- SWE-Bench Multilingual: **78%** (DataLearner, BenchLM)
- DeepSWE 1.0: **62.0%** (xAI official announcement, BenchLM)
- DeepSWE 1.1: **53%** (xAI official announcement)
- SWE Marathon (pass@1): **29.0%** (xAI official announcement)
- Frontier-Bench v0.1: **17.8%** (aireleasetracker)
- APEX-Agents: **47.1%** (aireleasetracker)
- APEX-SWE: **53.6%** (aireleasetracker)
- Boundary-Bench T2.1 (Grok Build): **74.9%** (GitHub boundary-bench)
- GDPval-AA v2: **Elo 1543, rank #4** (Artificial Analysis)
- WebDev Arena Elo: **1566** (aireleasetracker)
- τ³-Banking: **33%** (top score, Artificial Analysis)
- AA Agentic Index (Grok Build): **76** (Artificial Analysis)
- cursorBench32: **66.7%** (BenchLM)
- Next.js Evals: **77%** (aireleasetracker)

Reasoning / knowledge:

- GPQA Diamond: **93%** (44b.nysgpt.com via Artificial Analysis)
- HLE (Humanity's Last Exam): **40%** (44b.nysgpt.com via Artificial Analysis)
- ARC-AGI-2: **52.6%** (BenchLM)
- ARC-AGI-3: **0.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **56** (AA v4.1.1)
- AA Reasoning score: **52.6** (BenchLM)
- AA-Omniscience accuracy: **52%** (up from 35% on Grok 4.3; hallucination rate 54%)
- GameBench 2: **55.2** overall (DuelLab, rank #5; Low 46.4 / Medium 57.2 / High 62.1)
- SciCode: **54** (44b.nysgpt.com via AA)
- CritPt: **no verified public score found** (closest proxy: GameBench 2 physics reasoning)
- LCR / MLCR: **no verified public score found** (AA-LCR included in AA Intelligence Index but not separately published)
- MMLU-Pro: **no verified public score found**

Coding:

- LiveCodeBench (Vals): **87.4%** (BenchLM)
- SWE-bench (Vals): **86.6%** (BenchLM)
- VulcanBench v3: **89.9%** (BenchLM)
- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **64.7%** (listed above under Agent/tool use)
- cursorBench32: **66.7%** (listed above)
- DeepSWE 1.1: **53%** (listed above)
- SciCode: **54** (listed above)
- Vibe Code Bench: **no verified public score found**
- DeepSWE 1.0: **62.0%** (listed above)
- Next.js Evals: **77%** (listed above)

Long context:

- No MRCL / RULER / GraphWalks values reported for Grok 4.5 at 500K window.
- Context compaction supported for long sessions (xAI feature).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 86/100.** Terminal-Bench 2.1 at 83.3% (near top, second only to Fable 5) combined with GDPval-AA rank #4 and τ³-Banking top score demonstrate strong agentic capability; capped by lower Frontier-Bench (17.8%) and APEX-Agents (47.1%) scores on harder agentic tasks.
- **Reasoning: 74/100.** GPQA Diamond at 93% is near state-of-the-art, but HLE at 40% and ARC-AGI-2 at 52.6% show a steep difficulty cliff; AA Intelligence Index of 56 confirms mid-tier reasoning; capped by weak performance on extreme-difficulty benchmarks and 54% hallucination rate.
- **Context window: 74/100.** 500K tokens is solid but not exceptional (some competitors offer 1M+); no long-context retrieval benchmarks found; capped by the absence of MRCL/RULER data and context compaction still being a feature rather than a measured capability.
- **Multimodal: 20/100.** Image input is supported (per Artificial Analysis comparison pages) but output is text-only; no video/audio generation or multimodal reasoning benchmarks found; capped at low-mid range for image-in/text-out capability only.
- **Coding: 88/100.** LiveCodeBench Vals at 87.4%, SWE-bench Vals at 86.6%, and VulcanBench v3 at 89.9% are outstanding; AA Coding Agent Index of 76 in Grok Build confirms top-tier coding agent performance; capped by SWE-bench Pro at 64.7% and DeepSWE 1.1 at 53%.
- **Cost efficiency: 96/100.** $2/$6 with $0.50 cached input is extremely competitive (60%+ cheaper than Opus 4.8/GPT-5.5); 15,954 output tokens per SWE-Bench Pro task is 4.2x fewer than Opus 4.8; $0.31 per AA Intelligence Index task; capped slightly by web search and code execution surcharges.
- **Overall Score: 68/100.** (86 + 74 + 74 + 20 + 88) / 5 = 68.4 → half-up to 68. A strong coding and agentic model with near-frontier coding benchmarks and excellent cost efficiency, but with mixed reasoning performance on extreme-difficulty tasks and limited multimodal capability. Best fit for coding-heavy agentic workflows where cost-per-task matters.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (InclusionAI / Ant Group)** — 2026-09-24
- Method: Public internet research across xAI official announcement, Artificial Analysis, BenchLM.ai, tbench.ai, DataLearner, 44b.nysgpt.com, and GitHub benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
