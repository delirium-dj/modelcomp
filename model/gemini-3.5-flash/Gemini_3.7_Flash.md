# Gemini 3.5 Flash — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-efficiency multimodal workhorse optimized for speed, long context, and everyday agentic tasks.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.5-flash`), OpenCode Zen (`opencode/gemini-3.5-flash`).
- **Release / knowledge:** 2025-11-10 release; knowledge cutoff September 2025.
- **IDs:** `google/gemini-3.5-flash`, `opencode/gemini-3.5-flash`
- **Context window:** 1,000,000 tokens (1M input, 32k max output).
- **Modalities:** text, image, audio, video in; text out; tool use, structured output.
- **Pricing (as of 2026-09-20):** $0.15 / $0.60 per 1M tokens ($0.075 cached). Free tier on AI Studio.
- **Architecture:** Dense multimodal transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.8%**
- Tau3-Banking / Tau2-Bench: **76.2%**
- GDPval-AA: **1290**
- Claw-Eval / ClawProBench: **72.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.4%**

Reasoning / knowledge:

- GPQA Diamond: **64.5%**
- HLE: **26.1%**
- LCR / MLCR: **79.2%**
- CritPt: **72.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **104 / #14**
- Omniscience Accuracy / Hallucination Rate: **82.9% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.4%**
- LiveCodeBench: **47.1%**
- SciCode / AA-SciCode: **68.5%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **68.2**

Long context:

- MRCR 1M needle retrieval 98.9%; RULER benchmark 95.0% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 79/100.** Fast tool execution with high API reliability, capped on multi-step shell debugging.
- **Reasoning: 79/100.** Solid general reasoning, capped on non-trivial mathematical proofs and complex puzzle steps.
- **Context window: 94/100.** 1M context with dependable needle retrieval across media and text.
- **Multimodal: 91/100.** Native video, audio, and visual document support with strong temporal precision.
- **Coding: 79/100.** Good day-to-day coding, unit test authoring, and script maintenance.
- **Cost efficiency: 96/100.** Very affordable $0.15/$0.60 pricing with free tier access.
- **Overall Score: 84.4/100.** Fast and economical multimodal model with massive 1M context.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
