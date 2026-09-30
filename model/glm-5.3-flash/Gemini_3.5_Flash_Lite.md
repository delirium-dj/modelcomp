# GLM 5.3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Z.AI / GLM 5.3 Flash (`opencode/glm-5.3-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash`, Chat Completions API.
- **Release / knowledge:** 2026-02-10; knowledge cutoff January 2026.
- **IDs:** `opencode/glm-5.3-flash` (Free Zen tier available)
- **Context window:** 204K total tokens verified via Z.AI technical documentation.
- **Modalities:** Text in/out, function calling, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$0.20 / $0.60 per 1M tokens.
- **Architecture:** Lightweight Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.0%** (Z.AI evaluation sheet)
- Tau3-Banking / Tau2-Bench: **79.0%** (API benchmark suite)
- GDPval-AA: **1290 Elo**
- Claw-Eval / ClawProBench: **82.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.0%**

Reasoning / knowledge:

- GPQA Diamond: **63.5%** (official evaluation)
- HLE: **37.0%**
- LCR / MLCR: **71.0%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / #8**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 5.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.5%** (official harness)
- LiveCodeBench: **47.5%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **69.0%**
- DeepSWE / Coding Index / other: **76.0**

Long context:

- MRCR 204K retrieval accuracy: **93.5%** at full 204K context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast and efficient tool invocation tailored for agentic tasks.
- **Reasoning: 79/100.** Solid reasoning capabilities for a Flash tier model.
- **Context window: 92/100.** Generous 204K context window with reliable retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 78/100.** Efficient coding performance and swift execution.
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M).
- **Overall Score: 68.8/100.** Ultra-fast Flash-class MoE model offering great context length and low latency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
