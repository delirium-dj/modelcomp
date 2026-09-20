# Gemini 3.6 Flash — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.6-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Iterative refinement of Gemini Flash with upgraded tool grounding, improved coding accuracy, and lower error rates on agentic benchmarks.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.6-flash`), OpenCode Zen (`opencode/gemini-3.6-flash`).
- **Release / knowledge:** 2026-01-22 release; knowledge cutoff November 2025.
- **IDs:** `google/gemini-3.6-flash`, `opencode/gemini-3.6-flash`
- **Context window:** 1,000,000 tokens (1M input, 64k max output).
- **Modalities:** text, image, audio, video in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-20):** $0.20 / $0.70 per 1M tokens ($0.10 cached). Free tier on AI Studio.
- **Architecture:** Dense multimodal transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **47.6%**
- Tau3-Banking / Tau2-Bench: **79.5%**
- GDPval-AA: **1320**
- Claw-Eval / ClawProBench: **75.4**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.2%**

Reasoning / knowledge:

- GPQA Diamond: **67.8%**
- HLE: **29.8%**
- LCR / MLCR: **82.7%**
- CritPt: **76.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **108 / #11**
- Omniscience Accuracy / Hallucination Rate: **85.3% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **53.1%**
- LiveCodeBench: **50.8%**
- SciCode / AA-SciCode: **71.6%**
- Vibe Code Bench: **77.2%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- MRCR 1M needle retrieval 99.2%; RULER benchmark 96.1% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Clean API function execution and improved error correction in tool outputs.
- **Reasoning: 82/100.** Dependable reasoning on analytical workflows, capped on extreme edge cases.
- **Context window: 94/100.** 1M context with high retrieval stability across multi-document repositories.
- **Multimodal: 92/100.** Strong multi-turn image, video, and audio interaction.
- **Coding: 82/100.** Reliable full-stack development, refactoring, and bug fixes.
- **Cost efficiency: 95/100.** High-utility performance per dollar at $0.20/$0.70 per million tokens.
- **Overall Score: 86.4/100.** Excellent daily coding and multimodal assistant with extensive context capacity.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
