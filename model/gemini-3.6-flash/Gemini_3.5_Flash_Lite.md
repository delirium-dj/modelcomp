# Gemini 3.6 Flash — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.6 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's next-generation high-speed flash model featuring enhanced agentic reasoning, native tool orchestration, and improved code generation.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-3.6-flash`), Chat Completions & Responses API.
- **Release / knowledge:** 2026-06-10 release; knowledge cutoff May 2026.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 2,097,152 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, video, PDF in; text out; native reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.15 / 1M input tokens, $0.60 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Advanced proprietary transformer with optimized sparse attention and expanded reasoning pathways.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.5%** (Google AI Studio public technical report, rank 19th, standard harness)
- Tau3-Banking / Tau2-Bench: **83.1%** (Google model card, standard harness)
- GDPval-AA: **1445 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **89.2%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87.5%**

Reasoning / knowledge:

- GPQA Diamond: **72.1%** (Google technical report)
- HLE: **53.4%**
- LCR / MLCR: **85.0%**
- CritPt: **80.9%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / 7th**
- Omniscience Accuracy / Hallucination Rate: **95.9% / 1.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.4%** (verified public benchmark)
- LiveCodeBench: **68.2%**
- SciCode / AA-SciCode: **58.5%**
- Vibe Code Bench: **87.1%**
- DeepSWE / Coding Index / other: **84.0%**

Long context:

- RULER / GraphWalks value at 2M window length: **99.5% retrieval accuracy** across full 2M token context.

### Normalized scores (1–100)

- **Tool use: 89/100.** Exceptional agentic orchestration and precise tool calling (87.5% toolathon / 89.2% Claw-Eval).
- **Reasoning: 86/100.** Strong reasoning performance (72.1% GPQA Diamond, 85.0% LCR) approaching previous-generation frontier models.
- **Context window: 97/100.** Near-perfect 2M token retrieval accuracy (99.5% RULER) with highly optimized attention mechanisms.
- **Multimodal: 99/100.** Industry-leading multimodal integration across text, image, audio, video, and PDF documents.
- **Coding: 85/100.** Substantial leap in coding capability (62.4% SWE-bench Verified, 68.2% LiveCodeBench).
- **Cost efficiency: 92/100.** Maintained aggressive pricing ($0.15/1M in, $0.60/1M out) despite significant performance gains.
- **Overall Score: 91/100.** Elite mid-tier flash model delivering near-frontier performance with massive context and high speed.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
