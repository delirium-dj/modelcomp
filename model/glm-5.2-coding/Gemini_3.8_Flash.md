# GLM 5.2 Coding — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Zhipu AI's specialized open-weights coding and agentic MoE model (753B total / 40B active), tuned for autonomous software engineering, terminal execution, and drop-in Claude Code workflows.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.2-coding`), Z.ai API, Hugging Face open weights (`zai-org/GLM-5.2`).
- **Release / knowledge:** June 2026.
- **IDs:** `opencode/glm-5.2-coding`, `z-ai/glm-5.2`
- **Context window:** 131,072 tokens (128K on the evaluated Zen coding SKU; base architecture supports up to 1M).
- **Modalities:** Text in / text out only. Tool calls and structured JSON output.
- **Pricing (as of 2026-09-24):** $1.40 / 1M input tokens, $4.40 / 1M output tokens ($0.26 cached input).
- **Architecture:** 753B parameter Mixture-of-Experts (40B active) with IndexShare attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%**
- MCP-Atlas: **77.0%**
- FrontierSWE: **74.4%**
- Tool-Decathlon: **48.2%**
- PostTrainBench: **34.3%**
- Code Arena: **#2 globally** for long-horizon agentic programming

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- Humanity's Last Exam (HLE): **40.5%** w/o tools, **54.7%** w/ tools
- AIME 2026: **99.2%**
- HMMT Feb 2026: **92.5%**

Coding:

- SWE-bench Pro: **62.1%** (ranked #1 open-weights at release)
- DeepSWE: **46.2%**
- ProgramBench: **63.7%**
- NL2Repo: **48.9%**

### Normalized scores (1–100)

- **Tool use: 81/100.** High Terminal-Bench 2.1 (81.0%) and MCP-Atlas (77.0%) substantiate outstanding terminal navigation and agentic integration.
- **Reasoning: 83/100.** 91.2% on GPQA Diamond and 99.2% on AIME 2026 demonstrate exceptional algorithmic and mathematical problem solving.
- **Context window: 58/100.** Zen coding SKU context is limited to 128K, restricting deep codebase retention compared to full 1M endpoints.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 81/100.** SWE-bench Pro 62.1% and Terminal-Bench 81.0% provide elite open-weights programming capabilities.
- **Cost efficiency: 88/100.** Very cost-effective at $1.40 / $4.40 per 1M tokens with MIT open-weights availability.
- **Overall Score: 64/100.** Arithmetic mean of non-cost metrics: (81 + 83 + 58 + 15 + 81) / 5 = 63.6 → 64. A top-flight open-weights coding agent, constrained in overall score primarily by text-only input and the 128K Zen gateway limit.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Zhipu AI releases and independent coding leaderboards.
