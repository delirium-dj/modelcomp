# Gemini 3.1 Flash — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.1 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's high-efficiency flash model designed for rapid prototyping, robust API tool integration, and expansive context handling.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-3.1-flash`), Chat Completions & Responses API.
- **Release / knowledge:** 2025-11-10 release; knowledge cutoff October 2025.
- **IDs:** `google/gemini-3.1-flash`
- **Context window:** 1,048,576 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.10 / 1M input tokens, $0.40 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Proprietary transformer optimized for high throughput and multimodal streaming.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.2%** (Google AI Studio public technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **71.0%** (Google model card, standard harness)
- GDPval-AA: **1280 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **76.4%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.5%**

Reasoning / knowledge:

- GPQA Diamond: **56.4%** (Google technical report)
- HLE: **38.1%**
- LCR / MLCR: **71.2%**
- CritPt: **66.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / 24th**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.1%** (verified public benchmark)
- LiveCodeBench: **48.5%**
- SciCode / AA-SciCode: **40.1%**
- Vibe Code Bench: **73.2%**
- DeepSWE / Coding Index / other: **65.0%**

Long context:

- RULER / GraphWalks value at 1M window length: **97.5% retrieval accuracy** across full 1M token context.

### Normalized scores (1–100)

- **Tool use: 77/100.** Solid tool-calling performance (73.5% toolathon / 76.4% Claw-Eval).
- **Reasoning: 72/100.** Capable flash-tier reasoning (56.4% GPQA Diamond, 71.2% LCR).
- **Context window: 92/100.** 1M token context window with strong RULER retrieval accuracy (97.5%).
- **Multimodal: 95/100.** Comprehensive multimodal input coverage (text, image, audio, video, PDF).
- **Coding: 70/100.** Reliable coding assistant performance for routine development tasks.
- **Cost efficiency: 95/100.** Low pricing ($0.10/1M in, $0.40/1M out) for high throughput.
- **Overall Score: 83/100.** Reliable, cost-effective flash model with generous context and robust multimodal ingestion.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
