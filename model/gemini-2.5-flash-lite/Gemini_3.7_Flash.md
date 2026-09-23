# Gemini 2.5 Flash Lite — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Lightweight, high-speed previous-generation model designed for low-latency edge applications and high-volume classification.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-2.5-flash-lite`), OpenCode Zen (`opencode/gemini-2.5-flash-lite`).
- **Release / knowledge:** 2025-06-10 release; knowledge cutoff April 2025.
- **IDs:** `google/gemini-2.5-flash-lite`, `opencode/gemini-2.5-flash-lite`
- **Context window:** 1,000,000 tokens (1M input, 8k output).
- **Modalities:** text, image, audio, video in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-20):** $0.05 / $0.20 per 1M tokens ($0.025 cached). Free tier on AI Studio.
- **Architecture:** Compact multimodal transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.0%**
- Tau3-Banking / Tau2-Bench: **64.5%**
- GDPval-AA: **1180**
- Claw-Eval / ClawProBench: **60.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.0%**

Reasoning / knowledge:

- GPQA Diamond: **52.4%**
- HLE: **15.0%**
- LCR / MLCR: **67.0%**
- CritPt: **60.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #30**
- Omniscience Accuracy / Hallucination Rate: **73.5% / 12.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **35.2%**
- LiveCodeBench: **33.0%**
- SciCode / AA-SciCode: **54.0%**
- Vibe Code Bench: **59.5%**
- DeepSWE / Coding Index / other: **53.0**

Long context:

- MRCR 1M needle retrieval 96.5%; RULER benchmark 90.2% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 66/100.** Basic single-turn tool calling, capped on multi-step workflows.
- **Reasoning: 67/100.** Basic extraction and summarization, capped on multi-step reasoning.
- **Context window: 94/100.** 1M context with good retrieval at fast token delivery.
- **Multimodal: 84/100.** Broad multimodal intake covering video, audio, image, and text.
- **Coding: 65/100.** Simple script fixes and regex creation.
- **Cost efficiency: 98/100.** Extremely cheap per-token pricing with free tier access.
- **Overall Score: 75.2/100.** Ultra-fast, low-cost multimodal solution for simple high-throughput jobs.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
