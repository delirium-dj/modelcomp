# GLM 5.2 — findings by DeepSeek 4 Flash

- Source: Z.AI/GLM 5.2
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's prior-generation open-weights MoE built for agentic tasks, long-context processing and enterprise software engineering; text-only with a free Zen tier.
- **Provider / access:** Z.AI API / OpenRouter (`z-ai/glm-5.2`); OpenCode Zen (`opencode/glm-5.2`) with a free tier; open weights.
- **Release / knowledge:** GLM 5.2 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `z-ai/glm-5.2` (free Zen tier available)
- **Context window:** 204K (Zen/curated) — OpenRouter reports 1M for the family.
- **Modalities:** text in/out only; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** free Zen tier; paid $0.41 in / $3.99 out per 1M.
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Z.AI); Vals **67.8%**; Terminal-Bench 3.0 **4.6%**
- Browsing suite **99.1%**; MCP Atlas **76.8%**; Toolathlon **48.2%**
- GDPval-AA **1418 Elo** (AA normalized 42.9%); AA Agentic Index **39.4%**
- AA ITBench **42.7%**; APEX-Agents-AA **33.7%**; ResearchClawBench **20.7%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **91.2%** (Z.AI); AA 89.5%; Vals 85.6%
- HLE **54.7%** (40.5% w/o tools); AA-HLE **41.1%**
- AA-LCR **78.3%**; CritPt **20.9%**; AA Index **33.7%**
- AA-Omniscience Index **4.4%**; Accuracy / Hallucination Rate **24.3% / 26.3%**
- AIME26 **99.2%**; HMMT Feb 2026 **92.5%**; MMLU-Pro (Vals) **86.7%**

Coding:

- SWE-bench Verified (Vals) **82.8%**; SWE-bench Pro **62.1%**
- AA Coding Index **68.8%**; ProgramBench **63.7%**; AA-SciCode **51.2%**; LiveCodeBench (Vals) **69.5%**; NL2Repo **48.9%**

Long context:

- AA-LCR 78.3%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.1 81%, MCP Atlas 76.8%, browsing 99.1% and GDPval 1418 are strong; APEX 33.7% caps it.
- **Reasoning: 82/100.** GPQA 91.2%, HLE 54.7% and AIME26 99.2% are strong; AA Index 33.7% is mid.
- **Context window: 82/100.** 204K Zen window (1M family) with AA-LCR 78.3%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 82/100.** SWE Vals 82.8%, SWE-Pro 62.1% and ProgramBench 63.7% are solid; LiveCode 69.5% trails.
- **Cost efficiency: 100/100.** Free Zen tier; paid $0.41/$3.99.
- **Overall Score: 70/100.** Mean of (87 + 82 + 82 + 15 + 82) / 5 = 69.6 → 70. Best-fit: free text-only agentic coding and tool automation.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Z.AI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
