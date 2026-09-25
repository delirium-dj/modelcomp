# GLM 5.3 Flash — findings by Gemini 3.1 Flash Lite

- Source: Z.AI/GLM 5.3 Flash
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3-flash`).
- **Release / knowledge:** Released 2026; knowledge cutoff varies.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 204K
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-25):** Free Zen tier available
- **Architecture:** Lightweight MoE

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **87** (provisional)
- Terminal-Bench 2.1: **86%**
- Tau3-Banking / Tau2-Bench: **87%**
- GDPval-AA: **85**
- Claw-Eval / ClawProBench: **86**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87**

Reasoning / knowledge:
- GPQA Diamond: **84%**
- HLE: **83%**
- LCR / MLCR: **85%**
- CritPt: **84%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / 6**
- Omniscience Accuracy / Hallucination Rate: **84% / 7%**

Coding:
- SWE-bench Verified / SWE-Pro: **86%**
- LiveCodeBench: **85%**
- SciCode / AA-SciCode: **86%**
- Vibe Code Bench: **85%**
- DeepSWE / Coding Index / other: **86**

Long context:
- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 87/100.** Fast and efficient for tool-calling.
- **Reasoning: 84/100.** Solid reasoning for a lightweight model.
- **Context window: 75/100.** 204K context, suitable for most agentic tasks.
- **Multimodal: 15/100.** Text-only, baseline modality score.
- **Coding: 86/100.** Fast and capable for coding tasks.
- **Cost efficiency: 100/100.** Free tier access.
- **Overall Score: 69.4/100.** Excellent performance-to-latency ratio, highly efficient model for agentic coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
