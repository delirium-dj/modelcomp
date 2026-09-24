# Gemini 1.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 1.5 Pro (`google/gemini-1.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 1.5-generation legacy flagship with 2M-token context and native multimodal input (text, image, audio, video).
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-1.5-pro`), Chat Completions-style API (legacy/retired).
- **Release / knowledge:** 2024 release; knowledge cutoff ~Nov 2023.
- **IDs:** `google/gemini-1.5-pro` (no Free ID on Zen).
- **Context window:** 2,000,000 input tokens total.
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls yes.
- **Pricing (historical):** Paid equivalent ~$1.25 in / $5.00 out per 1M.
- **Architecture:** Proprietary sparse MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **59.1%**
- HLE: **~4.0%**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **~10.0**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **34.2%**
- LiveCodeBench: **no verified official score**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- Needle-in-a-haystack: near-perfect recall to 1M+ input tokens.

### Normalized scores (1–100)

- **Tool use: 45/100.** Basic function calling support; lacks modern agentic benchmark data.
- **Reasoning: 58/100.** GPQA 59.1% and legacy reasoning benchmarks reflecting earlier generation capabilities.
- **Context window: 96/100.** 2M input context window with near-perfect retrieval up to 1M+.
- **Multimodal: 90/100.** Native audio, video, image, and text input support.
- **Coding: 58/100.** SWE-bench Verified 34.2%.
- **Cost efficiency: 80/100.** Mid-tier pricing for its era.
- **Overall Score: 69/100.** Arithmetic mean of the five quality dimensions (45 + 58 + 96 + 90 + 58) / 5 = 69.4 → 69.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: Independent public research and normalized 1–100 evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
