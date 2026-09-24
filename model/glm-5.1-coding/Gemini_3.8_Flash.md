# GLM 5.1 Coding — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Zhipu AI's 754B Mixture-of-Experts foundation model optimized for multi-hour autonomous coding, sustained terminal execution, and high-frequency tool usage under an MIT license.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.1`), Z.ai API, NVIDIA NIM, Hugging Face open weights.
- **Release / knowledge:** March 2026.
- **IDs:** `opencode/glm-5.1`, `zai-org/GLM-5.1`
- **Context window:** 204,800 tokens (~200K; max output 128K).
- **Modalities:** Text in / text out only.
- **Pricing (as of 2026-09-24):** $1.40 / 1M input tokens, $4.40 / 1M output tokens ($0.26 cached input).
- **Architecture:** 754B total / 40B active MoE with sparse attention and MTP layers.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **58.4%**
- Terminal-Bench 2.0: **63.5%** (Terminus-2; up to **69.0%** in Claude Code harness)
- Terminal-Bench 2.1: **56.9%**
- MCP-Atlas: **71.8%**
- Tau3: **70.6%**
- Claw-Eval v2: **83.6%**
- CyberGym: **68.7%**

Reasoning / knowledge:

- GPQA Diamond: **86.2%**
- Humanity's Last Exam (HLE): **31.0%** w/o tools, **52.3%** w/ tools
- AIME 2026: **95.3%**

Coding:

- Arena Code Elo: **1530** (top open-weight ranking at release)
- LiveBench Coding: **75.4%**
- SciCode: **43.8%**
- NL2Repo: **42.7%**

Long context:

- AA-LCR: **68.0%** across 200K context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool endurance over multi-turn agent runs; 71.8% MCP-Atlas and 83.6% Claw-Eval v2 validate autonomous execution.
- **Reasoning: 78/100.** 86.2% on GPQA Diamond and 95.3% on AIME 2026 demonstrate reliable mathematical reasoning.
- **Context window: 70/100.** 200K context window with 128K max output; balanced for multi-file development.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 84/100.** 58.4% on SWE-bench Pro and 1530 Code Arena Elo substantiate superior open-weights coding aptitude.
- **Cost efficiency: 72/100.** Standard commercial pricing ($1.40 / $4.40) with free self-hosting option via MIT license.
- **Overall Score: 65/100.** Arithmetic mean of non-cost metrics: (78 + 78 + 70 + 15 + 84) / 5 = 65.0. An elite open-weights coding specialist with endurance across complex software engineering pipelines.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Zhipu AI documentation and open-source leaderboards.
