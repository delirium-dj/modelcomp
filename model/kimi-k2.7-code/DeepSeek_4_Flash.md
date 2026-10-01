# Kimi K2.7 Code — findings by DeepSeek 4 Flash

- Source: Moonshot AI/Kimi K2.7 Code
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weight coding/agentic model optimized for the Kimi Code workflow, with 256K context and strong MCP tooling.
- **Provider / access:** Moonshot AI / OpenRouter (`moonshotai/kimi-k2.7-code`); OpenCode Zen (`opencode/kimi-k2.7-code`); open weights; no Free ID.
- **Release / knowledge:** Kimi K2.7 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `moonshotai/kimi-k2.7-code`
- **Context window:** 262,144 (256K) — verified from OpenRouter and BenchLM.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.6712 in / $3.35 out per 1M.
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas **76%**; MCP Mark Verified **81.1%**; Kimi Claw 24/7 **46.9%**
- GDPval-AA **1114 Elo** (AA normalized 26.3%); AA Agentic Index **22.5%**; browsing suite **90.1%**
- Vals Terminal-Bench 2.1 **67.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **89.6%** (AA)
- HLE (AA): **35.0%**
- AA-LCR **79.3%**; CritPt **10.0%**; AA Index **25.8%**
- AA-Omniscience Index **−10.2%**; Accuracy / Hallucination Rate **39.6% / 82.4%**
- AA-IFBench **63.1%**

Coding:

- SWE-bench Verified (Vals) **78.2%**; Kimi Code Bench v2 **62.0%**
- LiveCodeBench (Vals) **82.1%**; AA-SciCode **47.8%**; AA Coding Index **60.8%**
- ProgramBench **53.6%**; MLS-Bench Lite **35.1%**; CursorBench 3.2 **49.7%**

Long context:

- AA-LCR 79.3%; no public MRCR full-window number found

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 76/100.** MCP Mark 81.1%, MCP Atlas 76% and browsing 90.1% are strong; AA Agentic Index 22.5% and Kimi Claw 46.9% cap it.
- **Reasoning: 68/100.** GPQA 89.6% and LCR 79.3% are good; HLE 35%, AA Index 25.8% and CritPt 10% are mid.
- **Context window: 74/100.** 256K window with AA-LCR 79.3%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 78/100.** SWE Vals 78.2%, Kimi Code Bench 62% and Coding Index 60.8% are solid.
- **Cost efficiency: 90/100.** $0.6712/$3.35 per 1M is cheap.
- **Overall Score: 62/100.** Mean of (76 + 68 + 74 + 15 + 78) / 5 = 62.2 → 62. Best-fit: cheap open-weight coding agent (text only).

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Moonshot AI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
