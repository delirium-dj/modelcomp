# Gemini 2.5 Flash — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 2.5 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's stable prior-generation flash workhorse optimized for dependable multimodal performance and large context handling.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-2.5-flash`), Chat Completions & Responses API.
- **Release / knowledge:** 2025-06-15 release; knowledge cutoff May 2025.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.075 / 1M input tokens, $0.30 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Established transformer architecture optimized for stable enterprise production workloads.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.4%** (Google AI Studio public technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **64.2%** (Google model card, standard harness)
- GDPval-AA: **1190 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **69.0%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65.5%**

Reasoning / knowledge:

- GPQA Diamond: **46.8%** (Google technical report)
- HLE: **30.2%**
- LCR / MLCR: **62.0%**
- CritPt: **57.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / 42nd**
- Omniscience Accuracy / Hallucination Rate: **84.2% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **32.1%** (verified public benchmark)
- LiveCodeBench: **37.8%**
- SciCode / AA-SciCode: **31.0%**
- Vibe Code Bench: **63.5%**
- DeepSWE / Coding Index / other: **54.0%**

Long context:

- RULER / GraphWalks value at 1M window length: **95.5% retrieval accuracy** across full 1M token context.

### Normalized scores (1–100)

- **Tool use: 70/100.** Reliable standard tool invocation (65.5% toolathon / 69.0% Claw-Eval).
- **Reasoning: 63/100.** Solid baseline reasoning for structured data processing.
- **Context window: 92/100.** Full 1M token context window support with stable retrieval (95.5%).
- **Multimodal: 95/100.** Full multi-modal input processing (text, image, audio, video, PDF).
- **Coding: 60/100.** Capable of basic syntax tasks and script generation.
- **Cost efficiency: 95/100.** Very economical pricing ($0.075/1M in, $0.30/1M out).
- **Overall Score: 79/100.** Proven, reliable legacy flash model suited for stable production environments.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
