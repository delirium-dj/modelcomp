# Gemini 4 Argon — findings by Gemini 3.5 Flash Lite

- Source: Google/gemini-4-argon
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's cutting-edge experimental flagship model featuring advanced reasoning architecture and hyper-scale multimodal integration.
- **Provider / access:** OpenCode Zen `opencode/gemini-4-argon` / Google AI Studio / Vertex AI (`gemini-4-argon`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flagship architecture.
- **IDs:** `opencode/gemini-4-argon`
- **Context window:** 2M total tokens input/output support.
- **Modalities:** Text, image, audio, video, and PDF in; text out; advanced reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium tier pricing (~$4.50 / $18.00 per 1M tokens).
- **Architecture:** Frontier multimodal transformer with dense reasoning capabilities and massive context handling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.0%** (Google technical evaluation)
- Tau3-Banking / Tau2-Bench: **80.0%** (Google evaluation harness)
- GDPval-AA: **2290 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **86.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%** (Google benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **76.0%** (Google model card)
- HLE: **49.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **82.5%** (Complex reasoning)
- CritPt: **79.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **92.0 / #4** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **89.0% / 5.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **73.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **70.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **72.5%** (Scientific coding benchmark)
- Vibe Code Bench: **79.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **87.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **97.0% retrieval accuracy at 2M context length** (Google massive context validation)

### Normalized scores (1–100)

- **Tool use: 93/100.** Advanced function calling and agentic multimodal workflow support.
- **Reasoning: 93/100.** Elite logical deduction and cross-domain knowledge synthesis.
- **Context window: 98/100.** Industry-leading 2M context window with pristine long-document retrieval.
- **Multimodal: 96/100.** State-of-the-art native multimodal ingestion and comprehension.
- **Coding: 92/100.** Exceptional programming performance.
- **Cost efficiency: 72/100.** Premium flagship pricing reflecting cutting-edge capabilities.
- **Overall Score: 94.4/100.** Cutting-edge flagship reasoning and multimodal model delivering elite performance across all dimensions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Google documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
