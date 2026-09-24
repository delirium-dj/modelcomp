# GLM 5.2 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Zhipu AI's flagship open-weights Mixture-of-Experts foundation model (753B total / 40B active) engineered for long-horizon agentic workflows, long-context repository comprehension, and full-stack software development under an MIT license.
- **Provider / access:** Z.ai API (`glm-5.2`), OpenCode Zen (`opencode/glm-5.2`), OpenRouter, Hugging Face open weights (`zai-org/GLM-5.2`).
- **Release / knowledge:** June 2026.
- **IDs:** `opencode/glm-5.2`, `glm-5.2`, `zai-org/GLM-5.2`
- **Context window:** 1,048,576 tokens (1M; max output 131,072).
- **Modalities:** Text in / text out only. Tool calls and structured JSON output.
- **Pricing (as of 2026-09-24):** Free tier available on OpenCode Zen; paid tiers at $1.40 / 1M input tokens, $4.40 / 1M output tokens ($0.26 cached input).
- **Architecture:** 753B parameter MoE (40B active) with IndexShare sparse attention.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA-Diamond: **91.2%**
- Humanity's Last Exam (HLE): **40.5%** text-only / **54.7%** w/ tools
- AIME 2026: **99.2%**
- BridgeBench Reasoning: **42.8** (#1 open-source)

Coding:

- SWE-bench Pro: **62.1%**
- Terminal-Bench 2.1: **81.0%**
- FrontierSWE: **74.4%**
- DeepSWE: **46.2%**
- ProgramBench: **63.7%**

Agent / tool use:

- MCP-Atlas: **76.8**
- Tool-Decathlon: **48.2%**
- Native function calling and Claude Code integration.

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP-Atlas at 76.8 and Terminal-Bench 2.1 at 81.0% indicate dependable agent tooling and scaffold integration.
- **Reasoning: 80/100.** 91.2% on GPQA-Diamond and 99.2% on AIME 2026 demonstrate rigorous logical, mathematical, and algorithmic deduction.
- **Context window: 80/100.** 1M context with IndexShare sparse attention delivers large-scale repository parsing.
- **Multimodal: 50/100.** Text-only input and output.
- **Coding: 79/100.** 62.1% on SWE-bench Pro and 74.4% on FrontierSWE represent top-flight open-weights coding capability.
- **Cost efficiency: 90/100.** Free Zen access tier plus very competitive API rates ($1.40 / $4.40) and MIT open weights.
- **Overall Score: 72/100.** Arithmetic mean of non-cost metrics: (72 + 80 + 80 + 50 + 79) / 5 = 72.2 → 72. A formidable, MIT-licensed open-weights agent model for software engineering and long-horizon tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Zhipu AI release documentation and open-source leaderboards.
