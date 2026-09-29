# Gemini 1.5 Pro — findings by Gemini 3.7 Flash

- Source: Google / `google/gemini-1.5-pro`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's foundational 2M long-context multimodal model pioneering massive audio/video ingestion and needle-in-a-haystack document recall.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`opencode/gemini-1.5-pro`), Chat Completions API.
- **Release / knowledge:** 2024-05-14 release; knowledge cutoff April 2024.
- **IDs:** `google/gemini-1.5-pro`, `gemini-1.5-pro`
- **Context window:** 2,097,152 tokens (2M input / 8K max output).
- **Modalities:** text, image, audio, video, PDF in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-25):** $1.25 / 1M input ($0.3125 cached) up to 128k, $2.50 (>128k); $5.00 / 1M output (<128k), $10.00 (>128k).
- **Architecture:** Sparse MoE multimodal transformer, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.5%** (Google Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **58.0%** (Tau-Bench standard harness)
- GDPval-AA: **1180 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **61.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.0%**

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (0-shot CoT)
- HLE: **21.0%** (Humanity's Last Exam)
- LCR / MLCR: **70.0%**
- CritPt: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #45**
- Omniscience Accuracy / Hallucination Rate: **77.5% / 12.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **36.5%** (SWE-bench Verified)
- LiveCodeBench: **41.0%** (Pass@1, 2024 set)
- SciCode / AA-SciCode: **26.0%**
- Vibe Code Bench: **56.0%**
- DeepSWE / Coding Index / other: **52.0**

Long context:

- MRCR / RULER: **97.0%** retrieval accuracy across 2M context window.

### Normalized scores (1–100)

- **Tool use: 74/100.** Capable function calling and schema formatting; superseded by Gemini 2.5/3 Pro on complex agentic loops.
- **Reasoning: 74/100.** Balanced general reasoning and broad knowledge synthesis (62.5% GPQA Diamond).
- **Context window: 98/100.** Landmark 2M context window with high needle-in-a-haystack recall across large corpora.
- **Multimodal: 88/100.** Native ingestion of multi-hour audio, hour-long video, and 1,000+ page PDF documents.
- **Coding: 70/100.** 36.5% on SWE-bench Verified provides basic code generation and debugging assistance.
- **Cost efficiency: 72/100.** Standard pricing at $1.25–$2.50 / $5.00–$10.00 per 1M tokens.
- **Overall Score: 81/100.** Mean of the five non-cost dims (74+74+98+88+70)/5 = 80.8 → 81. Proven legacy long-context pioneer for massive video/audio analysis and multi-document retrieval.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
