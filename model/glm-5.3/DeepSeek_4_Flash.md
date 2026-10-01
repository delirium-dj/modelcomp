# GLM 5.3 — findings by DeepSeek 4 Flash

- Source: Z.AI/GLM 5.3
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's flagship open-weights reasoning MoE (753B total / 40B active) with 1M context, elite tool use and strong agentic coding — text-only.
- **Provider / access:** Z.AI API / OpenRouter (`z-ai/glm-5.3`); OpenCode Zen (`opencode/glm-5.3`); open weights; no Free ID.
- **Release / knowledge:** GLM 5.3 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `z-ai/glm-5.3`
- **Context window:** 1M total — verified from OpenRouter and curated metadata.
- **Modalities:** text in/out only; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** Zen $1.40 in / $4.40 out per 1M (cached $0.26); OpenRouter $0.22/$3.39.
- **Architecture:** open-weights 753B total / 40B active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.AI); Vals **71.5%**; AA **83.9%**; terminalBench3 **28.3%**
- GDPval-AA: **1769 Elo** (Z.AI); AA normalized **57.2%**; AA Briefcase **1511**
- CyberGym **84.5%**; AA AutomationBench **62.2%**; AA Agentic Index **53.4%**; AA ITBench **46.1%**
- AA Tau3 Banking **50.3%**; Toolathlon-Verified **73.0%**; AA EnterpriseOps-Gym **36.4%**; Agents' Last Exam **28.5%**; ExploitGym **15.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA); Vals 88.1%
- HLE w/ tools **62.5%**; AA-HLE **42.3%**
- AA-LCR **79.7%**; CritPt **19.1%**; MLCR-AA **48.3%**; AA Index **44.8%**
- AA-Omniscience Index **14.3%**; Accuracy / Hallucination Rate **33.9% / 29.6%**
- MMLU-Pro (Vals) **86.8%**

Coding:

- SWE-bench Verified (Vals) **95.4%**; sweMarathon **42.5%**
- DeepSWE **66.9%**; FrontierSWE **78.1%**; Coding Index **74.8%**; AA-SciCode **59.0%**
- NL2Repo **58%**; ProgramBench **19.0%**; FrontierSWE v2 **30.2%**

Long context:

- AA-LCR 79.7%; MLCR-AA 48.3%

Multimodal:

- text-only model (no image/audio/video input)

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval 1769, TB 2.1 88.2%, CyberGym 84.5% and AA Agentic Index 53.4% are frontier; ExploitGym 15% is the limit.
- **Reasoning: 82/100.** GPQA 91.7%, HLE w/ tools 62.5% and MLCR 48.3% are strong; AA Index 44.8% is mid-high.
- **Context window: 95/100.** 1M input with AA-LCR 79.7%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 89/100.** SWE Vals 95.4% and FrontierSWE 78.1% are elite; DeepSWE 66.9% and ProgramBench 19% trail.
- **Cost efficiency: 88/100.** Zen $1.40/$4.40 (or OpenRouter $0.22/$3.39) is strong value.
- **Overall Score: 75/100.** Mean of (92 + 82 + 95 + 15 + 89) / 5 = 74.6 → 75. Best-fit: top open-weights text agentic coder; needs a separate vision model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Z.AI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
