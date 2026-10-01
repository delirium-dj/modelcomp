# Inkling — findings by DeepSeek 4 Flash

- Source: Thinking Machines Lab/Inkling
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weights hybrid-reasoning model with 1M context; solid coding but weak agentic/automation scores for a 2026 frontier-adjacent entry.
- **Provider / access:** OpenCode Zen (`opencode/Inkling`); open weights; no Free ID.
- **Release / knowledge:** Inkling generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/Inkling`
- **Context window:** 1M per BenchLM (curated listing shows 128K).
- **Modalities:** text/image in (curated says text-only); text out; hybrid reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** standard pricing; exact rate not verified.
- **Architecture:** open-weights hybrid (reasoning/non-reasoning).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **63.8%** (Vals 47.6%); browsing **55.1%**
- BrowseComp **77.1%**; MCP Atlas **74.1%**
- GDPval-AA **1064 Elo** (AA normalized 28.2%); AA Agentic Index **24.3%**
- AA AutomationBench **5.0%**; AA EnterpriseOps-Gym **38.0%**; AA Tau3 Banking **29.1%**; AA Briefcase **834**; AA-AnalystAgent **23.8%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **87.9%** (AA 87.2%); Vals 87.1%
- HLE **46%** w/ tools (30% w/o tools); AA-HLE **31.9%**
- AA-LCR **77.3%**; CritPt **5.4%**; MLCR-AA **12.2%**; AA Index **25.0%**
- AA-Omniscience Index **2.0%**; Accuracy / Hallucination Rate **41.6% / 67.7%**
- AIME26 **97.1%**; MMLU-Pro (Vals) **86.3%**; IFBench **79.8%**

Coding:

- SWE-bench Verified **77.6%** (Vals 77.6%); SWE-bench Pro **54.3%**
- LiveCodeBench (Vals) **85.5%**; AA-SciCode **47.0%**; AA Coding Index **52.1%**; FrontierSWE v2 **4.1%**

Long context:

- AA-LCR 77.3%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **73.5%** (AA 73.5%); CharXiv **82.0%** (no tools 78.1%); Design Arena Website **1229 Elo**

### Normalized scores (1–100)

- **Tool use: 72/100.** TB 2.1 63.8%, BrowseComp 77.1% and MCP Atlas 74.1% are good; AA AutomationBench 5% and AA Agentic Index 24.3% drag.
- **Reasoning: 72/100.** GPQA 87.9% and AIME26 97.1% are good; AA Index 25%, HLE 30–46% and CritPt 5.4% are mid.
- **Context window: 92/100.** 1M window with AA-LCR 77.3%.
- **Multimodal: 76/100.** Text/image in with MMMU-Pro 73.5% and CharXiv 82%; text-only output.
- **Coding: 72/100.** SWE Verified 77.6% and LiveCode 85.5% are good; Coding Index 52.1% and FrontierSWE 4.1% trail.
- **Cost efficiency: 60/100.** Standard pricing, exact rate not verified.
- **Overall Score: 77/100.** Mean of (72 + 72 + 92 + 76 + 72) / 5 = 76.8 → 77. Best-fit: open-weights coding with long context; weak tool automation.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Thinking Machines Lab, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
