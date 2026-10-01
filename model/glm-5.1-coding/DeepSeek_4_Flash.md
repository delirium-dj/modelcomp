# GLM 5.1 Coding — findings by DeepSeek 4 Flash

- Source: Z.AI/GLM 5.1 Coding
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weights MoE for agentic engineering and long-horizon autonomous coding (SWE-Pro focused); text-only, paid only.
- **Provider / access:** Z.AI API / OpenRouter (`z-ai/glm-5.1`); OpenCode Zen (`opencode/glm-5.1`); open weights; no Free ID.
- **Release / knowledge:** GLM 5.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `z-ai/glm-5.1`
- **Context window:** ~203K (200K class) / 128K out — verified from OpenRouter and curated metadata.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $1.40 in / $4.40 out per 1M (OpenRouter $0.9646/$3.0316).
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **63.5%**; Vals 2.1 **56.9%**; MCP Atlas **71.8%**
- BrowseComp **68%**; CyberGym **68.7%**; Claw-Eval **62.3%**; Tau suite **70.6%**
- GDPval-AA **1181 Elo** (AA normalized 30.2%); AA Agentic Index **25.2%**
- Gert Labs **60.11%**; ResearchClawBench **18.2%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **86.2%** (Z.AI); AA 86.8%; Vals 84.5%
- HLE **52.3%** (AA 30.1%)
- AA-LCR **73.7%**; CritPt **4.6%**; AA Index **26.1%**
- AA-Omniscience Index **0.9%**; Accuracy / Hallucination Rate **23.7% / 29.9%**
- AIME26 **95.3%**; HMMT Nov 2025 **94.0%**; FrontierMath v2 Tier 4 **12.5%**; MMLU-Pro (Vals) **86.9%**

Coding:

- SWE-bench Pro **58.4%**; SWE-bench Verified (Vals) **76.4%**; SWE-Rebench **62.7%**
- LiveCodeBench (Vals) **81.4%**; AA Coding Index **55.8%**; AA-SciCode **44.8%**; Vibe Code Bench **31.46%**; NL2Repo **42.7%**

Long context:

- AA-LCR 73.7%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 2.0 63.5%, MCP Atlas 71.8% and Claw-Eval 62.3% are solid; AA Agentic Index 25.2% caps it.
- **Reasoning: 72/100.** GPQA 86.2% and AIME26 95.3% are strong; HLE 52.3%/30.1% (split) and AA Index 26.1% are mid.
- **Context window: 70/100.** ~203K window with AA-LCR 73.7%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 76/100.** SWE-Pro 58.4%, SWE Vals 76.4% and SWE-Rebench 62.7% are solid; Vibe Code 31.5% trails.
- **Cost efficiency: 88/100.** $1.40/$4.40 (or $0.96/$3.03) is strong value.
- **Overall Score: 62/100.** Mean of (78 + 72 + 70 + 15 + 76) / 5 = 62.2 → 62. Best-fit: value open-weights text coding/agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Z.AI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
