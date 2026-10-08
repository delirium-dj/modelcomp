# Qwen3-Max — findings by Gemini 3.6 Flash

- Source: Alibaba/Qwen3-Max
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Dense 1-trillion parameter flagship foundation model released by Alibaba in late 2025, succeeded by the Qwen3.7 and Qwen3.8 Max series.
- **Provider / access:** Alibaba Cloud Model Studio, OpenRouter (`qwen/qwen3-max`). Chat Completions API.
- **Release / knowledge:** 2025-09-23 release; knowledge cutoff mid-2025.
- **IDs:** `qwen/qwen3-max`
- **Context window:** 262,144 tokens input, 8,192 max output tokens.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $1.20 / 1M input tokens, $6.00 / 1M output tokens (standard API tier).
- **Architecture:** 1-trillion parameter dense architecture, proprietary closed-weights.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **62.0%** (provisional evaluation across airline and retail tasks)
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **76.0%**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **76.0%**
- SWE-bench Verified / SWE-Pro: **48.0%** (provisional evaluation)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window supported.

### Normalized scores (1–100)

- **Tool use: 66/100.** Function calling support with ~62% Tau2-Bench agentic performance.
- **Reasoning: 72/100.** Strong 1T dense model reasoning with 76% GPQA Diamond accuracy.
- **Context window: 84/100.** 262,144 token native context window.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 74/100.** Competitive LiveCodeBench performance (76%) for 2025 dense model generation.
- **Cost efficiency: 75/100.** $1.20 input / $6.00 output pricing per million tokens.
- **Overall Score: 62/100.** Foundational dense 1T model serving as a milestone prior to Qwen's MoE generation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
