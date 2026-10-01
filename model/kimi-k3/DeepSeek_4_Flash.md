# Kimi K3 — findings by DeepSeek 4 Flash

- Source: Moonshot AI/Kimi K3
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship with 1M-token input/output, frontier document/math-vision reasoning and terminal-agent coding; proprietary and premium priced.
- **Provider / access:** Moonshot AI / OpenRouter (`moonshotai/kimi-k3`); no Free Zen ID.
- **Release / knowledge:** K3 flagship (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 (1M) input / 1M output — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/video/document in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** OpenRouter $0.66 in / $10.00 out per 1M; curated Moonshot list $3.00/$15.00 ($0.30 cached).
- **Architecture:** proprietary 2.8T-parameter mixture-of-experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot); AA **85%**, Vals **80.9%**
- BrowseComp: **91.2%**; DeepSearchQA **95.0%**
- MCP Atlas **84.2%**; Toolathlon-Verified **73.2%**; APEX-Agents **37.6%**
- GDPval-AA: **1524 Elo** (AA); AA normalized **51.2%**
- AA Agentic Index **50.6%**; AA Harvey LAB **94.6%**; AA ITBench **47.7%**; AutomationBench **30.8%**; ApprenticeBench **18%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA); Vals 92.9%
- HLE: **56%** (reported); AA-HLE **46.9%**
- AA-LCR: **88.7%** (best-in-class long context); MLCR-AA **38.3%**
- CritPt: **23.4%**
- Artificial Analysis Intelligence Index: **43.6%**
- AA-Omniscience Accuracy / Hallucination Rate: **47.6% / 53.2%**
- ARC-AGI-1 **94.5%**, ARC-AGI-2 **60.4%**
- MMLU-Pro (Vals) **88.0%**

Coding:

- SWE-bench Verified (Vals): **93.4%**; sweMarathon **42%**
- DeepSWE: **67.5%**; FrontierSWE **81.2%**; AA-SciCode **59.5%**
- Kimi Code Bench v2 **72.9%**; ProgramBench **77.8%**; AA Coding Index **76.2%**
- LiveCodeBench (Vals) **87.2%**; CursorBench 3.2 **60.8%**; FrontierSWE v2 **25.9%**

Long context:

- AA-LCR 88.7%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **81.6%** (w/ Python 83.4%); CharXiv **84.8%** / w/ tools **91.3%**; MathVision **94.3%** (w/ Python 97.8%); OmniDocBench **91.1%**; AA-MMMU-Pro **80.5%**; Design Arena **1345 Elo**

### Normalized scores (1–100)

- **Tool use: 91/100.** TB 2.1 88.3%, BrowseComp 91.2%, MCP Atlas 84.2% and DeepSearchQA 95% are frontier; APEX-Agents 37.6% and AutomationBench 30.8% cap it.
- **Reasoning: 84/100.** GPQA 93.5% and LCR 88.7% are strong, but AA Index 43.6% and ARC-AGI-2 60.4% are notably behind top peers.
- **Context window: 96/100.** 1M input and output with best-in-class AA-LCR 88.7%.
- **Multimodal: 88/100.** Text/image/video/document in with MathVision 94.3% and OmniDocBench 91.1%; text-only output.
- **Coding: 89/100.** SWE Verified 93.4%, FrontierSWE 81.2% and Coding Index 76.2% are strong; DeepSWE 67.5% and FrontierSWE v2 25.9% lag.
- **Cost efficiency: 85/100.** OpenRouter $0.66/$10 per 1M is very cheap input with moderate output; curated $3/$15 is premium.
- **Overall Score: 90/100.** Mean of (91 + 84 + 96 + 88 + 89) / 5 = 89.6 → 90. Best-fit: cheap-input multimodal document/math and long-context agentic work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, Moonshot AI, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
