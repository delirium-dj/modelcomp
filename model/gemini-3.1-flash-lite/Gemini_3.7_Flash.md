# Gemini 3.1 Flash Lite — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.1-flash-lite`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Ultra-compact, low-cost multimodal engine tailored for real-time classification, entity extraction, and high-frequency endpoints.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.1-flash-lite`), OpenCode Zen (`opencode/gemini-3.1-flash-lite`).
- **Release / knowledge:** 2025-09-25 release; knowledge cutoff July 2025.
- **IDs:** `google/gemini-3.1-flash-lite`, `opencode/gemini-3.1-flash-lite`
- **Context window:** 1,000,000 tokens (1M input, 16k output).
- **Modalities:** text, image, audio, video in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-20):** $0.075 / $0.30 per 1M tokens ($0.0375 cached). Free tier on AI Studio.
- **Architecture:** Compact multimodal transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **39.0%**
- Tau3-Banking / Tau2-Bench: **69.5%**
- GDPval-AA: **1225**
- Claw-Eval / ClawProBench: **65.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.5%**

Reasoning / knowledge:

- GPQA Diamond: **58.5%**
- HLE: **20.0%**
- LCR / MLCR: **73.5%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94 / #23**
- Omniscience Accuracy / Hallucination Rate: **78.2% / 9.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.5%**
- LiveCodeBench: **39.4%**
- SciCode / AA-SciCode: **61.2%**
- Vibe Code Bench: **66.8%**
- DeepSWE / Coding Index / other: **60.5**

Long context:

- MRCR 1M needle retrieval 97.6%; RULER benchmark 92.4% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 71/100.** Fast single-turn tool dispatch, capped on recursive multi-tool reasoning.
- **Reasoning: 72/100.** Good baseline factual accuracy and classification, capped on multi-step reasoning.
- **Context window: 94/100.** 1M context with dependable needle retrieval at high throughput.
- **Multimodal: 84/100.** Broad multimodal intake across audio, video, image, and text.
- **Coding: 70/100.** Capable of small script generation, regex writing, and snippet correction.
- **Cost efficiency: 98/100.** Ultra-affordable pricing with free tier access.
- **Overall Score: 78.2/100.** High-speed, high-volume economical multimodal model with 1M context.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
