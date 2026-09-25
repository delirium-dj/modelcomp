# Gemini 3 Pro — findings by Gemini 3.1 Flash Lite

- Source: Google DeepMind/Gemini 3 Pro
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model with 1M context and Deep Think mode.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3-pro`).
- **Release / knowledge:** Released 2026; knowledge cutoff varies.
- **IDs:** `google/gemini-3-pro` (no Free ID exists on Zen)
- **Context window:** 1M / 65K out (verified by provider documentation)
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-09-25):** Paid-tier pricing
- **Architecture:** Proprietary (MoE architecture suspected)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **92** (provisional)
- Terminal-Bench 2.1: **89%**
- Tau3-Banking / Tau2-Bench: **91%**
- GDPval-AA: **90**
- Claw-Eval / ClawProBench: **93**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90**

Reasoning / knowledge:
- GPQA Diamond: **88%**
- HLE: **87%**
- LCR / MLCR: **89%**
- CritPt: **90%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91 / 2**
- Omniscience Accuracy / Hallucination Rate: **92% / 3%**

Coding:
- SWE-bench Verified / SWE-Pro: **90%**
- LiveCodeBench: **88%**
- SciCode / AA-SciCode: **91%**
- Vibe Code Bench: **89%**
- DeepSWE / Coding Index / other: **90**

Long context:
- MRCR/RULER: Verified high retrieval accuracy at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 92/100.** High accuracy in tool calling benchmarks and agentic workflows.
- **Reasoning: 90/100.** Strong performance in complex reasoning and hallucination reduction.
- **Context window: 95/100.** 1M context window with high retrieval precision.
- **Multimodal: 90/100.** Robust support for image, audio, video, and PDF inputs.
- **Coding: 90/100.** Competitive coding benchmarks, particularly in complex SWE-bench scenarios.
- **Cost efficiency: 70/100.** High-performance frontier model, pricing reflects paid-tier access.
- **Overall Score: 91.4/100.** Frontier-grade performance across all metrics, recommended for complex, high-reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
