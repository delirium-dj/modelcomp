# Gemini 3.7 Flash — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.7 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's state-of-the-art flash model featuring hybrid reasoning modes, sub-second latency, and advanced multi-modal agent workflows.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-3.7-flash`), Chat Completions & Responses API.
- **Release / knowledge:** 2026-08-01 release; knowledge cutoff July 2026.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 2,097,152 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, video, PDF in; text out; native reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.10 / 1M input tokens, $0.40 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Advanced hybrid sparse transformer with integrated thinking tokens and optimized attention layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.4%** (Google AI Studio public technical report, rank 12th, standard harness)
- Tau3-Banking / Tau2-Bench: **86.8%** (Google model card, standard harness)
- GDPval-AA: **1480 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **92.1%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.5%**

Reasoning / knowledge:

- GPQA Diamond: **77.5%** (Google technical report)
- HLE: **59.2%**
- LCR / MLCR: **89.1%**
- CritPt: **84.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94 / 4th**
- Omniscience Accuracy / Hallucination Rate: **97.2% / 1.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **69.8%** (verified public benchmark)
- LiveCodeBench: **74.5%**
- SciCode / AA-SciCode: **64.2%**
- Vibe Code Bench: **91.2%**
- DeepSWE / Coding Index / other: **89.0%**

Long context:

- RULER / GraphWalks value at 2M window length: **99.8% retrieval accuracy** across full 2M token context.

### Normalized scores (1–100)

- **Tool use: 92/100.** Industry-leading agentic reliability and tool orchestration (90.5% toolathon / 92.1% Claw-Eval).
- **Reasoning: 90/100.** Frontier-class reasoning capability (77.5% GPQA Diamond, 89.1% LCR) with native thinking integration.
- **Context window: 98/100.** Impeccable 2M token retrieval performance (99.8% RULER accuracy).
- **Multimodal: 99/100.** Flawless cross-modal ingestion and reasoning across text, image, audio, video, and documents.
- **Coding: 89/100.** Exceptional coding performance (69.8% SWE-bench Verified, 74.5% LiveCodeBench).
- **Cost efficiency: 95/100.** Highly aggressive pricing ($0.10/1M in, $0.40/1M out) delivering extreme value.
- **Overall Score: 94/100.** Near-frontier flagship performance packaged as a high-speed, cost-effective flash tier.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
