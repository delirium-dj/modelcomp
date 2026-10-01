# DeepSeek V4 Flash — findings by DeepSeek 4 Flash

- Source: DeepSeek/DeepSeek V4 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's open-weights Flash-tier reasoning model with 1M context and ultra-low pricing; text-only. The 0731 revision predates V4.1 Flash.
- **Provider / access:** DeepSeek API / OpenRouter (`deepseek/deepseek-v4-flash`); OpenCode Zen (`opencode/deepseek-v4-flash`); open weights; no Free ID.
- **Release / knowledge:** V4 Flash 0731 revision; knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek/deepseek-v4-flash`
- **Context window:** 1,048,576 (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text in/out only; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.04186 in / $0.08372 out per 1M.
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (DeepSeek); Vals **67.0%**; Terminal-Bench 2.0 **56.9%**
- BrowseComp **73.2%**; MCP Atlas **69%**; Toolathlon **47.8%** (Verified 70.3%)
- GDPval-AA **1189 Elo** (AA normalized 46.3%); AA Agentic Index **41.7%**
- CyberGym **76.7%**; AutomationBench **25.1%**; Agents' Last Exam **25.2%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **88.1%** (DeepSeek); AA 90.8%; Vals 89.9%
- HLE **34.8%** (AA 38.6%); HLE w/ tools **45.1%**
- MRCR 1M **78.7%**; CorpusQA 1M **60.5%**; AA-LCR **79.7%**; CritPt **16.6%**
- Artificial Analysis Intelligence Index: **34.3%**
- AA-Omniscience Index **−14.3%**; Accuracy / Hallucination Rate **40.4% / 91.7%**
- ARC-AGI-1 **89.0%**, ARC-AGI-2 **61.4%**; HMMT Feb 2026 **94.8%**; IMOAnswerBench **88.4%**
- MMLU-Pro **86.2%**; SimpleQA **34.1%**

Coding:

- SWE-bench Verified **79%** (Vals 88.8%); SWE-bench Pro **52.6%**; SWE Multilingual **73.3%**
- LiveCodeBench Pass@1-COT **91.6%**; Codeforces rating **3052**
- DeepSWE **54.4%**; AA Coding Index **69.1%**; AA-SciCode **50.3%**; NL2Repo **54.2%**

Long context:

- MRCR 1M **78.7%**; CorpusQA 1M **60.5%**; AA-LCR 79.7%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 82.7%, CyberGym 76.7% and AA Agentic Index 41.7% are strong; AutomationBench 25.1% caps it.
- **Reasoning: 76/100.** GPQA 88.1%, HMMT 94.8% and LCR 79.7% are strong; HLE 34.8% and AA Index 34.3% are mid.
- **Context window: 93/100.** 1M input with MRCR 78.7% and CorpusQA 60.5%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 85/100.** SWE Vals 88.8%, Codeforces 3052 and LiveCode COT 91.6% are elite; SWE-Pro 52.6% and DeepSWE 54.4% trail.
- **Cost efficiency: 99/100.** $0.04186/$0.08372 per 1M is among the cheapest frontier-adjacent pricing.
- **Overall Score: 71/100.** Mean of (85 + 76 + 93 + 15 + 85) / 5 = 70.8 → 71. Best-fit: ultra-cheap text-only long-context coding/agent model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, DeepSeek, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
