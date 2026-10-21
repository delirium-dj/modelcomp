# Hy4 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hunyuan Hy4 preview)
- **Short description:** Tencent's 770B open-weights Mixture-of-Experts foundation model (49B active) featuring a 1M token context window, designed for complex autonomous coding, document analysis, and multi-turn agentic workflows.
- **Provider / access:** Tencent Hunyuan API, [Hugging Face](https://huggingface.co/tencent/Hy4-preview) (`tencent/Hy4-preview`), [OpenRouter](https://openrouter.ai/models/tencent/hy4-preview) (`tencent/hy4-preview`), Apache 2.0 license.
- **Release / knowledge:** August 28, 2026.
- **IDs:** `tencent/hy4-preview`, `tencent/hy4`, `hy4`
- **Context window:** 1,048,576 tokens (1M input, up to 64K output).
- **Modalities:** Text in / text out only. Tool calls and function execution.
- **Pricing (as of 2026-10-21):** OpenRouter standard hosted rate is ~$0.834 / million input tokens ($0.042 / million cached) and ~$2.501 / million output tokens; also available for zero-token-fee on-premise self-hosting via vLLM / SGLang under Apache 2.0 license.
- **Architecture:** 770B total / 49B active MoE (Multi-head Latent Attention / MLA, DeepSeek Sparse Attention / DSA, native 10B Multi-Token Prediction layer).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **85.4%**
- Toolathlon-Verified: **74.1%**
- APEX-Agents: **37.1%**
- OneMillionBench (+tools): **65.4%**
- GDPval-AA v2: **1678 Elo**

Reasoning / knowledge:

- GPQA Diamond: **92.3%**
- Humanity's Last Exam (HLE w/ tools): **55.4%**
- CritPt (Thinking High): **16.9**
- SkillsBench V1: **62.9%**

Coding:

- SWE-bench Multilingual: **82.9%**
- SWE-bench Pro: **65.7%**
- DeepSWE v1.1: **64.3%**
- Terminal-Bench: **85.4%**
- NL2Repo: **58.9%**

Long context:

- 1,048,576 token context window; OneMillionBench agentic tool score of 65.4%.

### Normalized scores (1–100)

- **Tool use: 80/100.** High Terminal-Bench (85.4%) and Toolathlon (74.1%) show exceptional autonomous agent tool calling and multi-step plan execution.
- **Reasoning: 84/100.** 92.3% on GPQA Diamond and 55.4% on HLE w/ tools demonstrate frontier-level reasoning depth in an open-weights architecture.
- **Context window: 95/100.** 1M context validated on 1M-span agentic benchmarks (OneMillionBench 65.4%).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video multimodal input processing.
- **Coding: 83/100.** 82.9% on SWE-bench Multilingual, 65.7% on SWE-bench Pro, and 64.3% on DeepSWE v1.1 place it near the top of open-weight coding models.
- **Cost efficiency: 86/100.** Modest hosted pricing ($0.83/$2.50 per M tokens, $0.042 cached) alongside full Apache 2.0 license for self-hosting with vLLM/SGLang.
- **Overall Score: 71/100.** Arithmetic mean of non-cost metrics: (80 + 84 + 95 + 15 + 83) / 5 = 71.4 → 71. A powerhouse open-weights foundation model offering state-of-the-art coding and reasoning across a full 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Tencent Hunyuan Hy4 technical documentation, Hugging Face repository, OpenRouter pricing, and open-source leaderboards.
