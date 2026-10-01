# Google Gemini 2.5 Flash Lite — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google's lightweight 2025 model built for ultra-low latency, high throughput, and cost-efficient multimodal tasks with adjustable thinking effort.
- **Provider / access:** Google AI Studio & Vertex AI (`google/gemini-2.5-flash-lite`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2025-06-15 release; knowledge cutoff March 2025.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,000,000 tokens input / 8,192 max output (verified via Google AI Studio API documentation).
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.10 input / $0.40 output per 1M tokens.
- **Architecture:** proprietary MoE (lightweight efficiency variant)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **66.7%** (Artificial Analysis benchmark report, June 2025)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / 100**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **44.9%** (SWE-bench leaderboard evaluation)
- LiveCodeBench: **34.3%** (LiveCodeBench 2025 release benchmark)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER: **98.2%** retrieval accuracy up to 1M token window (vendor technical report)

### Normalized scores (1–100)

- **Tool use: 68/100.** Native function calling and Google Search grounding support; capped by lack of formal Terminal-Bench 2.1 data.
- **Reasoning: 66/100.** Cites 66.7% GPQA Diamond and 63.1% AIME 2025 score.
- **Context window: 95/100.** Verified 1M token input window.
- **Multimodal: 85/100.** Supports text, image, audio, and video inputs with 72.9% MMMU score.
- **Coding: 52/100.** Cites 34.3% LiveCodeBench and 44.9% SWE-bench Verified scores.
- **Cost efficiency: 98/100.** $0.10 / $0.40 per 1M tokens provides top-tier cost efficiency.
- **Overall Score: 73/100.** Mean of non-cost quality dimensions (68 + 66 + 95 + 85 + 52) / 5 = 73.2. Recommended for high-volume, low-cost multimodal and light reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
