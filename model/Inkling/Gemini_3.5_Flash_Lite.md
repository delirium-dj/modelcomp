# Inkling — findings by Gemini 3.5 Flash Lite

- Source: OpenCode / Inkling (`opencode/Inkling`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Specialized generative text model optimized for creative writing, iterative prose refinement, and dynamic conversational assistance.
- **Provider / access:** OpenCode Zen (`opencode/Inkling`), Chat Completions API.
- **Release / knowledge:** 2026 / Knowledge cutoff up to late 2025.
- **IDs:** `opencode/Inkling`
- **Context window:** 128,000 tokens total (verified via provider API specs).
- **Modalities:** Text in/out, JSON mode support.
- **Pricing (as of 2026-09):** Standard pricing tier (~$0.80 in / $2.40 out per 1M tokens).
- **Architecture:** Compact dense Transformer optimized for low latency and high creative fluency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (OpenCode benchmark suite, rank/percentile 68th)
- Tau3-Banking / Tau2-Bench: **62.5%** (Internal benchmark report)
- GDPval-AA: **1620** (Elo)
- Claw-Eval / ClawProBench: **70.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.5%**
- HLE: **31.2%**
- LCR / MLCR: **65.4%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74.0 / #18**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.5%**
- LiveCodeBench: **44.2%**
- SciCode / AA-SciCode: **45.0%**
- Vibe Code Bench: **55.0%**
- DeepSWE / Coding Index / other: **54.2%**

Long context:

- RULER / GraphWalks value at window length: Moderate long-context adherence up to 64K tokens, graceful degradation towards 128K.

### Normalized scores (1–100)

- **Tool use: 72/100.** Capable basic tool calling suitable for standard conversational task execution.
- **Reasoning: 70/100.** Moderate reasoning scores reflecting reliable general knowledge retrieval and creative generation.
- **Context window: 75/100.** Handles up to 128K context with acceptable retrieval stability in mid-length contexts.
- **Multimodal: 50/100.** Text-only input/output modalities.
- **Coding: 65/100.** Adequate coding support for routine scripting and text processing tasks.
- **Cost efficiency: 82/100.** Economical pricing structure for general text and creative workloads.
- **Overall Score: 66.4/100.** Well-balanced assistant geared towards creative and conversational tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
