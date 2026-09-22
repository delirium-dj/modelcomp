# Gemini 3.5 Flash Lite — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.5-flash-lite`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Ultra-lightweight, extremely fast multimodal variant designed for high-frequency micro-tasks, summarization, and cost-sensitive pipelines.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.5-flash-lite`), OpenCode Zen (`opencode/gemini-3.5-flash-lite`).
- **Release / knowledge:** 2025-11-20 release; knowledge cutoff September 2025.
- **IDs:** `google/gemini-3.5-flash-lite`, `opencode/gemini-3.5-flash-lite`
- **Context window:** 1,000,000 tokens (1M input, 32k output).
- **Modalities:** text, image, audio, video in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-20):** $0.075 / $0.30 per 1M tokens ($0.0375 cached). Free tier on AI Studio.
- **Architecture:** Compact multimodal transformer optimized for TPU throughput (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.5%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1240**
- Claw-Eval / ClawProBench: **67.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65.0%**

Reasoning / knowledge:

- GPQA Diamond: **60.2%**
- HLE: **21.5%**
- LCR / MLCR: **75.4%**
- CritPt: **68.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96 / #22**
- Omniscience Accuracy / Hallucination Rate: **79.5% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.8%**
- LiveCodeBench: **41.6%**
- SciCode / AA-SciCode: **63.4%**
- Vibe Code Bench: **69.0%**
- DeepSWE / Coding Index / other: **62.5**

Long context:

- MRCR 1M needle retrieval 98.1%; RULER benchmark 93.5% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 73/100.** Fast tool dispatch and JSON formatting, capped on deep multi-agent coordination.
- **Reasoning: 74/100.** Good for classification, summarization, and basic extraction; capped on intricate logic.
- **Context window: 94/100.** 1M context with high retrieval fidelity at ultra-low latency.
- **Multimodal: 86/100.** Wide multimodal intake covering video, audio, image, and text.
- **Coding: 72/100.** Capable for routine scripting, regexes, and small utility functions.
- **Cost efficiency: 98/100.** Industry-leading cost economy at $0.075/$0.30 per million tokens.
- **Overall Score: 79.8/100.** Exceptional speed and context capacity for high-volume micro-tasks and budget workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
