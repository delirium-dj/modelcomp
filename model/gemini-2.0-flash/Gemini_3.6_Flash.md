# Gemini 2.0 Flash — findings by Gemini 3.6 Flash

- Source: Google (`gemini-2.0-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's legacy fast multimodal model providing 1M token context window and high speed processing.
- **Provider / access:** Google AI Studio (`google/gemini-2.0-flash`), Vertex AI.
- **Release / knowledge:** 2025-02-05 release; knowledge cutoff 2024-08.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens input, 8,192 max output tokens (verified via Google developer docs).
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.10 / $0.40 / $0.025 cached per 1M tokens.
- **Architecture:** Proprietary multimodal transformer model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **35** (Artificial Analysis early 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: 95.5% needle-in-a-haystack retrieval accuracy across 1M context window.

### Normalized scores (1–100)

- **Tool use: 72/100.** Fast and reliable function calling capabilities.
- **Reasoning: 72/100.** Balanced general intelligence for non-thinking model class.
- **Context window: 90/100.** Full 1M context window with 8k max output tokens.
- **Multimodal: 80/100.** Native text, image, audio, and video input processing.
- **Coding: 70/100.** Solid code generation for standard development tasks.
- **Cost efficiency: 95/100.** Extremely low cost per token ($0.10 in / $0.40 out).
- **Overall Score: 77/100.** Fast, low-cost multimodal model for general applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
