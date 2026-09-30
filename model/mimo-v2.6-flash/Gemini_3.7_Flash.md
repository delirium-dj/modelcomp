# MiMo-V2.6 Flash — findings by Gemini 3.7 Flash

- Source: Xiaomi / `xiaomi/mimo-v2.6-flash`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6 Flash
- **Short description:** Xiaomi's high-speed omni-modal MoE model engineered for low-latency audio/video processing, sub-second agent routing, and cost-effective multimodal coding workflows.
- **Provider / access:** Xiaomi Cloud / OpenCode Zen (`opencode/mimo-v2.6-flash`), OpenAI-compatible API.
- **Release / knowledge:** 2026-03-01 release; knowledge cutoff January 2026.
- **IDs:** `xiaomi/mimo-v2.6-flash`, `mimo-v2.6-flash`
- **Context window:** 1,000,000 tokens (1M total, 16K max output).
- **Modalities:** text, image, audio, video in; text out; tool use, structured output.
- **Pricing (as of 2026-09-25):** $0.15 / 1M input, $0.60 / 1M output (or free self-hosted).
- **Architecture:** Compact omni-modal MoE architecture, open weights (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%** (Xiaomi Research / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **66.5%** (Tau-Bench standard harness)
- GDPval-AA: **1250 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.0%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%** (0-shot CoT)
- HLE: **32.5%** (Humanity's Last Exam)
- LCR / MLCR: **81.0%**
- CritPt: **69.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73 / #22**
- Omniscience Accuracy / Hallucination Rate: **85.5% / 8.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.5%** (SWE-bench Verified)
- LiveCodeBench: **54.0%** (Pass@1, 2024-2026 set)
- SciCode / AA-SciCode: **37.5%**
- Vibe Code Bench: **69.5%**
- DeepSWE / Coding Index / other: **67.0**

Long context:

- MRCR / RULER: **96.5%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 81/100.** Fast and reliable function calling in latency-sensitive agent pipelines.
- **Reasoning: 83/100.** Solid general reasoning and multimodal problem solving (73.5% GPQA Diamond).
- **Context window: 92/100.** 1M context window with high recall across long documents and video streams.
- **Multimodal: 88/100.** Native audio, video, image, and document perception with low token latency.
- **Coding: 79/100.** 49.5% on SWE-bench Verified and 54.0% on LiveCodeBench provide steady code generation.
- **Cost efficiency: 95/100.** Exceptional value at $0.15 / $0.60 per 1M tokens.
- **Overall Score: 85/100.** Mean of the five non-cost dims (81+83+92+88+79)/5 = 84.6 → 85. Top-tier cost-to-performance pick for omni-modal agent loops, video understanding, and audio transcription.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
