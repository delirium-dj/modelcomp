# Gemini 3.1 Flash — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.1-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Early 3.x generation high-speed multimodal model engineered for low latency, high concurrency, and long document handling.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.1-flash`), OpenCode Zen (`opencode/gemini-3.1-flash`).
- **Release / knowledge:** 2025-09-15 release; knowledge cutoff July 2025.
- **IDs:** `google/gemini-3.1-flash`, `opencode/gemini-3.1-flash`
- **Context window:** 1,000,000 tokens (1M input, 32k output).
- **Modalities:** text, image, audio, video in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-20):** $0.15 / $0.60 per 1M tokens ($0.075 cached). Free tier on AI Studio.
- **Architecture:** Dense multimodal transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%**
- Tau3-Banking / Tau2-Bench: **73.5%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **69.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.5%**

Reasoning / knowledge:

- GPQA Diamond: **62.0%**
- HLE: **23.5%**
- LCR / MLCR: **77.0%**
- CritPt: **70.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **100 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.5%**
- LiveCodeBench: **44.0%**
- SciCode / AA-SciCode: **65.8%**
- Vibe Code Bench: **71.2%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- MRCR 1M needle retrieval 98.4%; RULER benchmark 94.2% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 75/100.** Fast tool calling with solid error rates, capped on complex multi-turn recovery.
- **Reasoning: 75/100.** Solid everyday logic, capped on multi-step scientific problem solving.
- **Context window: 94/100.** Full 1M token context window with reliable retrieval.
- **Multimodal: 88/100.** Native image, audio, and video ingestion with good temporal alignment.
- **Coding: 74/100.** Capable of standard application code generation and bug fixes.
- **Cost efficiency: 96/100.** Economical pricing with free tier availability on AI Studio.
- **Overall Score: 81.2/100.** Dependable low-cost multimodal solution with massive context window.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
