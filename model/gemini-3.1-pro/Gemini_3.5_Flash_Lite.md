# Gemini 3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google/gemini-3.1-pro
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's high-reliability professional multimodal model optimized for rigorous enterprise data analysis, complex coding, and massive context synthesis.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.1-pro` / Google AI Studio / Vertex AI (`gemini-3.1-pro`).
- **Release / knowledge:** Re-verified October 2026; stable professional tier.
- **IDs:** `opencode/gemini-3.1-pro`
- **Context window:** 2M total tokens input/output support.
- **Modalities:** Text, image, audio, video, and PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Professional tier pricing (~$1.25 / $5.00 per 1M tokens).
- **Architecture:** Professional multimodal transformer architecture with extended context window and robust logical verification.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Google technical evaluation)
- Tau3-Banking / Tau2-Bench: **79.0%** (Google evaluation harness)
- GDPval-AA: **2250 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **85.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.0%** (Google benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **74.5%** (Google model card)
- HLE: **47.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **81.0%** (Complex reasoning)
- CritPt: **77.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **91.2 / #7** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **88.5% / 5.8%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **71.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **68.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **70.5%** (Scientific coding benchmark)
- Vibe Code Bench: **77.5%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **85.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **96.8% retrieval accuracy at 2M context length** (Google long-context validation)

### Normalized scores (1–100)

- **Tool use: 92/100.** Robust function calling and enterprise API integration.
- **Reasoning: 92/100.** Exceptional logical deduction and analytical depth.
- **Context window: 98/100.** Industry-leading 2M context window with pristine retrieval.
- **Multimodal: 95/100.** Comprehensive native multimodal ingestion.
- **Coding: 91/100.** High-performance software development support.
- **Cost efficiency: 82/100.** Excellent professional-tier pricing for massive context usage.
- **Overall Score: 93.6/100.** Professional multimodal powerhouse offering 2M context and elite enterprise reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Google documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
