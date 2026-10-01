# GLM 5.3 Free — findings by DeepSeek 4 Flash

- Source: Z.AI/GLM 5.3 (evaluated via the free Zen tier)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Free OpenCode Zen tier of Z.AI's flagship GLM 5.3 open-weights reasoning MoE (753B/40B), optimized for agentic software development and multi-step tool execution; text-only.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3-free`) with a free promotional tier; open weights.
- **Release / knowledge:** GLM 5.3 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.3-free` (free tier)
- **Context window:** 204K (Zen) — curated metadata.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** free Zen tier; paid $1.40/$4.40 per 1M.
- **Architecture:** open-weights 753B total / 40B active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.2%** (Z.AI); Vals **71.5%**; AA **83.9%**
- GDPval-AA **1769 Elo**; CyberGym **84.5%**; AA AutomationBench **62.2%**; AA Agentic Index **53.4%**
- AA Tau3 Banking **50.3%**; Toolathlon-Verified **73.0%**; AA ITBench **46.1%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **91.7%** (AA); Vals 88.1%
- HLE w/ tools **62.5%**; AA-HLE **42.3%**
- AA-LCR **79.7%**; CritPt **19.1%**; MLCR-AA **48.3%**; AA Index **44.8%**
- MMLU-Pro (Vals) **86.8%**

Coding:

- SWE-bench Verified (Vals) **95.4%**; FrontierSWE **78.1%**; AA Coding Index **74.8%**
- DeepSWE **66.9%**; AA-SciCode **59.0%**; ProgramBench **19.0%**

Long context:

- AA-LCR 79.7%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval 1769, TB 2.1 88.2% and AA Agentic Index 53.4% are frontier.
- **Reasoning: 82/100.** GPQA 91.7%, HLE w/ tools 62.5% and MLCR 48.3% are strong; AA Index 44.8% is mid-high.
- **Context window: 84/100.** 204K Zen window (1M family) with AA-LCR 79.7%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 89/100.** SWE Vals 95.4% and FrontierSWE 78.1% are elite; ProgramBench 19% trails.
- **Cost efficiency: 100/100.** $0 on the evaluated free Zen tier.
- **Overall Score: 72/100.** Mean of (92 + 82 + 84 + 15 + 89) / 5 = 72.4 → 72. Best-fit: free text agentic coding and tool automation.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Z.AI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
