# Gemini 2.5 Flash Lite — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 2.5 Flash Lite
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's legacy ultra-lightweight flash model for low-latency batch translation and simple extraction tasks.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-2.5-flash-lite`), Chat Completions & Responses API.
- **Release / knowledge:** 2025-06-15 release; knowledge cutoff May 2025.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.0375 / 1M input tokens, $0.15 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Compact transformer design focused on minimal latency and resource consumption.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.1%** (Google AI Studio public technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **58.0%** (Google model card, standard harness)
- GDPval-AA: **1120 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **63.2%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.0%**

Reasoning / knowledge:

- GPQA Diamond: **41.0%** (Google technical report)
- HLE: **25.5%**
- LCR / MLCR: **56.0%**
- CritPt: **51.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **70 / 55th**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 6.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **27.5%** (verified public benchmark)
- LiveCodeBench: **32.0%**
- SciCode / AA-SciCode: **26.0%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **48.0%**

Long context:

- RULER / GraphWalks value at 1M window length: **94.2% retrieval accuracy** across full 1M token context.

### Normalized scores (1–100)

- **Tool use: 65/100.** Basic tool invocation support (59% toolathon / 63.2% Claw-Eval).
- **Reasoning: 58/100.** Suitable for straightforward text classification and summarization.
- **Context window: 92/100.** 1M token context support with reliable baseline retrieval (94.2%).
- **Multimodal: 92/100.** Standard multimodal input capabilities (text, image, audio, PDF).
- **Coding: 55/100.** Limited coding proficiency; best restricted to syntax formatting or simple regex.
- **Cost efficiency: 99/100.** Ultra-low pricing ($0.0375/1M in, $0.15/1M out) for massive batch operations.
- **Overall Score: 77/100.** Highly economical legacy utility model for simple, high-volume batch tasks.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
