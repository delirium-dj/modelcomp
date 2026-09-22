# Gemini 2.5 Flash — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-2.5-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Fast and lightweight previous-generation multimodal model built for general developer tasks and long document processing.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-2.5-flash`), OpenCode Zen (`opencode/gemini-2.5-flash`).
- **Release / knowledge:** 2025-05-15 release; knowledge cutoff March 2025.
- **IDs:** `google/gemini-2.5-flash`, `opencode/gemini-2.5-flash`
- **Context window:** 1,000,000 tokens (1M input, 8k output).
- **Modalities:** text, image, audio, video in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-20):** $0.10 / $0.40 per 1M tokens ($0.05 cached). Free tier on AI Studio.
- **Architecture:** Dense multimodal transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.4%**
- Tau3-Banking / Tau2-Bench: **68.2%**
- GDPval-AA: **1210**
- Claw-Eval / ClawProBench: **64.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.5%**

Reasoning / knowledge:

- GPQA Diamond: **56.8%**
- HLE: **18.4%**
- LCR / MLCR: **71.5%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #25**
- Omniscience Accuracy / Hallucination Rate: **77.2% / 9.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **39.5%**
- LiveCodeBench: **37.8%**
- SciCode / AA-SciCode: **59.2%**
- Vibe Code Bench: **64.8%**
- DeepSWE / Coding Index / other: **58.0**

Long context:

- MRCR 1M needle retrieval 97.5%; RULER benchmark 92.1% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Competent basic tool invocation, capped by higher failure rates in nested multi-step calling.
- **Reasoning: 69/100.** Capable standard reasoning, capped on advanced math and intricate logic puzzles.
- **Context window: 94/100.** 1M context with dependable needle retrieval across long texts.
- **Multimodal: 86/100.** Native audio, video, image, and text understanding.
- **Coding: 68/100.** Adequate for routine scripts, HTML/CSS generation, and standard code assistance.
- **Cost efficiency: 97/100.** Very affordable pricing with generous free tier access.
- **Overall Score: 77.0/100.** Dependable low-cost multimodal workhorse for high-volume legacy applications.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
