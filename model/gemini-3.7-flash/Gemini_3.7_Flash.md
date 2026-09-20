# Gemini 3.7 Flash — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's frontier hybrid reasoning model combining fast lightweight token generation with controllable thinking budgets for agentic engineering.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.7-flash`), OpenCode Zen (`opencode/gemini-3.7-flash`).
- **Release / knowledge:** 2026-02-25 release; knowledge cutoff December 2025.
- **IDs:** `google/gemini-3.7-flash`, `opencode/gemini-3.7-flash`
- **Context window:** 1,000,000 tokens (1M input, 64k max output).
- **Modalities:** text, image, audio, video in; text out; dynamic thinking modes, parallel tool calling, structured outputs.
- **Pricing (as of 2026-09-20):** $0.25 / $0.75 per 1M tokens ($0.125 cached). Free tier on AI Studio.
- **Architecture:** Dense multimodal transformer with native thinking token generation (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.5%**
- Tau3-Banking / Tau2-Bench: **83.7%**
- GDPval-AA: **1355**
- Claw-Eval / ClawProBench: **78.9**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.8%**

Reasoning / knowledge:

- GPQA Diamond: **71.8%**
- HLE: **34.9%**
- LCR / MLCR: **86.4%**
- CritPt: **79.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **114 / #6**
- Omniscience Accuracy / Hallucination Rate: **88.2% / 4.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **57.9%**
- LiveCodeBench: **54.6%**
- SciCode / AA-SciCode: **75.8%**
- Vibe Code Bench: **80.6%**
- DeepSWE / Coding Index / other: **76.3**

Long context:

- MRCR 1M needle retrieval 99.7%; RULER benchmark 97.6% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 89/100.** Fast parallel tool calls and reliable function execution, capped by complex multi-step terminal setups.
- **Reasoning: 89/100.** Controllable reasoning depth with sharp mathematical and logical breakdown.
- **Context window: 94/100.** 1M context with high retention across code repositories and multimodal video.
- **Multimodal: 93/100.** Seamless video, audio, and visual document comprehension with fine temporal grounding.
- **Coding: 88/100.** Swift coding assistance, bug isolation, and unit test generation.
- **Cost efficiency: 94/100.** Extremely cost-effective frontier-class throughput at $0.25/$0.75 per million.
- **Overall Score: 90.6/100.** Highly versatile and efficient frontier reasoning model with rapid turnaround and deep multimodal context.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
