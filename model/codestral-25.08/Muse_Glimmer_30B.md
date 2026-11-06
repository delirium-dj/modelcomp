# Codestral 25.08 — findings by Muse Glimmer 30B

- Source: Mistral AI (`mistral/codestral-25.08`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's production code-completion model released July 2025, optimized for low-latency fill-in-the-middle / IDE autocomplete and fast chat mode. Code-first specialist, not a general reasoning model.
- **Provider / access:** Mistral API (`codestral-2508` Chat Completions & FIM `/v1/fim/completions`), Mistral Code IDE plugin, OpenRouter `mistralai/codestral-2508`. Self-hosted / VPC / on-prem enterprise deployment offered. No Free OpenCode Zen ID.
- **Release / knowledge:** 2025-07-30 announced; versioned 25.08. Knowledge cutoff not published.
- **IDs:** `codestral-2508`, `mistralai/codestral-2508`
- **Context window:** 128K total tokens verified on model page 2026-11-06.
- **Modalities:** Text / code in → text / code out; fill-in-the-middle, structured outputs, function calling, predicted outputs, batching, Document QnA. Text-only, no image/audio/video input.
- **Pricing (as of 2026-11-06):** $0.30 per 1M input tokens / $0.90 per 1M output tokens via Mistral API and OpenRouter standard route; EU in-region $0.33/$0.99. No free tier.
- **Architecture:** Proprietary dense auto-regressive transformer for code FIM; parameter count, MoE topology and training data not published.

### Raw benchmarks found

> All figures are from public leaderboards as of 2026-11-06. Relative vendor claims of +30% accepted completions / +10% retained code are production telemetry, not public benchmarks.

Agent / tool use:

- no verified public score found for Terminal-Bench 2.1, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA

Reasoning / knowledge:

- ObviousBench (intelligence, answer pass³): **41.0%**, rank 258/275 (6th percentile), format pass³ 100% (BenchmarkList)
- LisanBench (reasoning word-chain): Difficulty-weighted **13.15**, path length 44, validity **3.6%**, rank 115/126 (9th percentile) (BenchmarkList)
- ORCFLO Index 2026-05-10, 32-model cohort: Overall quality **71.09** #32/32; Analysis **52.5** #32, Extraction 78.0 #29, Summarization 85.5 #24, Writing 68.2 #32, Hallucination 72.0 #32, Instruction Following **81.5** #30, Refusal Calibration 56.9 #31, Output Consistency 74.1 #31
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- ALE-Bench (coding, AtCoder heuristic): Performance **137.78** Self-Refine x1, rank **83/83** (0th percentile); Self-Refine x16 340.65 rank 81 (BenchmarkList)
- TeXFix-Bench (document / markup repair): **77.5** score, rank **2/78** (83rd percentile), compile among API-ok 77.6% (BenchmarkList)
- Design Arena (design/web-app Elo): **1065** Elo, win rate **45.4%**, 202W/243L, rank 288/343 (16th percentile) (BenchmarkList)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Long-context retrieval not separately reported; 128K window is the verified limit.

### Normalized scores (1–100)

- **Tool use: 38/100.** Function calling and structured outputs documented, but zero verified agentic/tool benchmarks (Terminal-Bench, Tau2/3, GDPval, Claw-Eval, MCP-Atlas) exist; ORCFLO Instruction Following 81.5 ranks #30/32.
- **Reasoning: 40/100.** ObviousBench 41% at 6th percentile, LisanBench validity 3.6% at 9th percentile, ORCFLO Analysis 52.5 dead last #32/32. Completion-specialist profile caps reasoning.
- **Context window: 56/100.** 128K total sits in the 100K–200K band; 50–64 mapping interpolated to 56.
- **Multimodal: 15/100.** Text/code in/out only.
- **Coding: 52/100.** TeXFix-Bench 77.5 rank 2/78 is a strong niche for document repair, offset by ALE-Bench 137.78 rank 83/83 last place and absent SWE-bench/LiveCodeBench numbers; vendor FIM improvements are telemetry, not public benchmarks.
- **Cost efficiency: 92/100.** $0.30/$0.90 per 1M is near bottom of market commercial pricing, with fast 2.4 s average response.
- **Overall Score: 40/100.** Mean of five quality dims (38+40+56+15+52)/5 = 40.2. Best-fit: cheap, very fast inline-completion utility for high-volume human-reviewed coding flows; not suitable for autonomous reasoning, agentic tool use, or benchmark-grade coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-06
- Method: Public internet research across Mistral docs, launch blog, BenchmarkList, ORCFLO Index and llm-benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Docs — Codestral model page](https://docs.mistral.ai/models/codestral-25-08)
  - [Mistral Blog — Announcing Codestral 25.08 (2025-07-30)](https://mistral.ai/news/codestral-25-08)
  - [BenchmarkList — Mistral: Codestral 2508](https://benchmarklist.com/models/mistralai-codestral-2508)
  - [ORCFLO Index — Codestral 2508 May 10 2026](https://orcflo.com/orcflo-index/benchmarks/codestral-2026-05-10)
  - [OpenRouter — mistralai/codestral-2508](https://openrouter.ai/mistralai/codestral-2508)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
