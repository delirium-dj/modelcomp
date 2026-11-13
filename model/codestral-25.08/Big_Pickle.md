# Codestral 25.08 - findings by Big Pickle

- Source: Mistral AI/Codestral 25.08
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral's IDE-focused code-completion model (model code `codestral-2508`), built for low-latency fill-in-the-middle (FIM), tab-complete and code correction across 80+ languages. It is the completion specialists of the Mistral coding stack — not an agentic coder.
- **Provider / access:** Mistral AI La Plateforme (`codestral-2508`), plus Bedrock/Azure AI Foundry/Vertex AI managed hosting; dedicated `/v1/fim/completions` endpoint and `/v1/chat/completions` with function calling and structured outputs. No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2025-07-30 (v25.08); knowledge cutoff ~2025-05, not formally published.
- **IDs:** `mistral/codestral-2508`
- **Context window:** 128,000 tokens (Mistral docs model page). Some aggregators list 256K/262K, but the vendor docs and independent reviewers confirm 128K; max output 8,192 (CorX) to 16K (TopReviewed) — the vendor publishes no explicit output cap.
- **Modalities:** Text and code in; text and code out. No image/audio/video. Tool calling and structured outputs supported; no reasoning mode.
- **Pricing (as of 2026-11-13):** $0.30 / 1M input, $0.90 / 1M output, $0.03 / 1M cached input; batch tier ~$0.15/$0.45.
- **Architecture:** Proprietary Premier/closed-weight dense code transformer; parameter count undisclosed for this checkpoint (the 2024 Codestral was 22B, and a separate "Codestral 2" carries Apache 2.0 weights — neither establishes this model's size or license).

### Raw benchmarks found

> Two independent sources exist: Mistral's HumanEval figure and CrucibleMark's
> multi-module production-style benchmark. No SWE-bench/LiveCodeBench rows were
> published for this completion model.

Agent / tool use:

- CrucibleMark ToolUse Score: **68.83**
- CrucibleMark Tool Execution: **83.33**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- CrucibleMark Logical Reasoning: **64.11**
- CrucibleMark Total Score: **65.48**, rank **#97**
- CrucibleMark Routine: **39.92** / Reasoning: **25.56**
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- HumanEval pass@1: **86.6%** (Mistral, rank 19 of 46 reporting models per CorX)
- CrucibleMark Code Quality: **66.28**
- CrucibleMark CLI Benchmark: **84.34**
- CrucibleMark Documentation: **62.72**
- CrucibleMark Synthesis Quality: **56.67**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks result; the 128K window is a serving spec. CrucibleMark reports 192 tok/s output, 3.8s average task duration, 11.64s P95 latency.

### Normalized scores (1-100)

- **Tool use: 70/100.** CrucibleMark ToolUse 68.83 with Tool Execution 83.33 shows competent single-tool execution, but a completion model with no agent loop and no Terminal-Bench/Tau3 evidence caps it at 70.
- **Reasoning: 45/100.** CrucibleMark Reasoning 25.56 and Total 65.48 (rank #97) reflect a narrow code model; Logical Reasoning 64.11 is the only offset.
- **Context window: 58/100.** Verified 128K window sits in the 100K-200K tier (50-64), just below the 200K = 70 anchor.
- **Multimodal: 15/100.** Text-only in and out — the methodology floor.
- **Coding: 76/100.** HumanEval 86.6% is a strong completion signal, reinforced by Code Quality 66.28 and CLI 84.34; the absence of SWE-bench/DeepSWE and a 56.67 synthesis score prevent a higher placement.
- **Cost efficiency: 96/100.** $0.30/$0.90 (with $0.03 cached and half-price batch) beats the ~$0.60/$2.20 (~92) anchor.
- **Overall Score: 53/100.** Half-up mean of (70 + 45 + 58 + 15 + 76) / 5 = 52.8. Best fit: in-IDE FIM autocomplete at high call volume; poor fit for agentic or conversational coding.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (Mistral docs and launch post, CorX Labs benchmark table, CrucibleMark independent report, TopReviewed fact-check); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI docs — Codestral (codestral-2508)](https://docs.mistral.ai/models/codestral-25-08)
  - [Mistral AI — Announcing Codestral 25.08](https://mistral.ai/news/codestral-25-08/)
  - [CrucibleMark — Codestral 25.08 benchmark report](https://www.cruciblemark.com/reports/codestral-2508/)
  - [CorX Labs — Codestral 25.08 specs, pricing and benchmarks](https://corx-labs.com/benchmarks/models/codestral-2508/)
- Future sources: add a new file next to this one, e.g. `Codestral_25.08.md`, using the same headings.
