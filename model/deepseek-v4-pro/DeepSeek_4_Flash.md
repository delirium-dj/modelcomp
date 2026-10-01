# DeepSeek V4 Pro — findings by DeepSeek 4 Flash

- Source: DeepSeek/DeepSeek V4 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's open-weights flagship (0813 GA), text-only with a 1M window, top-tier SWE-bench Verified/Codeforces coding and ultra-low pricing.
- **Provider / access:** DeepSeek API / OpenRouter (`deepseek/deepseek-v4-pro`); OpenCode Zen (`opencode/deepseek-v4-pro`); open weights; no Free ID.
- **Release / knowledge:** V4 Pro GA 2026-08-13; knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek/deepseek-v4-pro`
- **Context window:** 1,048,576 (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text in/out only; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.2088 in / $0.4176 out per 1M (OpenRouter).
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (DeepSeek); Vals **54.7%**; Terminal-Bench 2.0 **67.9%**
- BrowseComp **83.4%**; HLE w/ tools **60.0%**; MCP Atlas **73.6%**
- GDPval-AA **1306 Elo**; Toolathlon **51.8%** (Verified 74.1%); AA Agentic Index **49.6%**
- CyberGym **83.3%**; AA EnterpriseOps-Gym **49.6%**; AutomationBench **31.8%**; APEX-Agents-AA **24.3%**; Agents' Last Exam **25.7%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (DeepSeek); AA 92.8%; Vals 92.4%
- HLE: **42.7%** (DeepSeek); AA-HLE **41.0%**
- MRCR 1M **83.5%**; CorpusQA 1M **62.0%**; AA-LCR **80.3%**; CritPt **18.0%**
- Artificial Analysis Intelligence Index: **53.2%**
- AA-Omniscience Accuracy / Hallucination Rate: **49.1% / 94.1%**
- ARC-AGI-1 **90.0%**, ARC-AGI-2 **61.3%**; HMMT Feb 2026 **95.2%**; IMOAnswerBench **89.8%**
- MMLU-Pro **87.5%**; SimpleQA **57.9%**; Chinese-SimpleQA **84.4%**; AA-IFBench **76.5%**

Coding:

- SWE-bench Verified **80.6%** (Vals 96.4%); SWE-bench Pro **55.4%**; SWE Multilingual **76.2%**
- LiveCodeBench Pass@1-COT **93.5%**; Vals 87.5%; Codeforces rating **3206**
- DeepSWE **62.7%**; AA Coding Index **68.8%**; AA-SciCode **51.0%**; NL2Repo **61.5%**; Vibe Code Bench **49.93%**

Long context:

- MRCR 1M **83.5%**; CorpusQA 1M **62.0%**; AA-LCR 80.3%

Multimodal:

- text-only model (no image/audio/video input); Design Arena website only

### Normalized scores (1–100)

- **Tool use: 89/100.** TB 2.1 87.9%, BrowseComp 83.4%, CyberGym 83.3% and AA Agentic Index 49.6% are strong; APEX/Agents' Last Exam ~25% cap it.
- **Reasoning: 83/100.** AA Index 53.2%, GPQA 90–93%, HLE 42.7% and HMMT 95.2% are strong; ARC-AGI-2 61.3% and CritPt 18% trail.
- **Context window: 94/100.** 1M input with MRCR 83.5% and CorpusQA 62%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 88/100.** SWE Verified 80.6% (Vals 96.4%), Codeforces 3206 and LiveCode COT 93.5% are elite; DeepSWE 62.7% and SciCode 51% trail.
- **Cost efficiency: 96/100.** $0.2088/$0.4176 per 1M is near the cheapest frontier-adjacent pricing.
- **Overall Score: 74/100.** Mean of (89 + 83 + 94 + 15 + 88) / 5 = 73.8 → 74. Best-fit: cheap text-only frontier coding/agentic model; pair with a vision model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, DeepSeek, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
