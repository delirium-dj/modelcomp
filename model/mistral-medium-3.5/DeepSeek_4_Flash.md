# Mistral Medium 3.5 — findings by DeepSeek 4 Flash

- Source: Mistral/Mistral Medium 3.5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weight 128B reasoning model for agentic coding and remote agents, with strong TAU tool-use scores but weak knowledge/hallucination metrics (High hallucination rate).
- **Provider / access:** Mistral AI API and open weights (Mistral Medium 3.5 128B); proprietary routing optional.
- **Release / knowledge:** Medium 3.5 (2025–2026 cycle); knowledge cutoff not disclosed.
- **IDs:** `mistral-medium-3.5`
- **Context window:** 256K — verified on BenchLM.
- **Modalities:** text and image in (AA-MMMU-Pro 64.9%); text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** paid; BenchLM lists $7.50/1M output. Input price not independently verified.
- **Architecture:** open-weight 128B (dense/MoE per Mistral family).

### Raw benchmarks found

Agent / tool use:

- Tau3-Bench: **91.4%** (Mistral Vibe remote-agents post); Tau2-Bench **94.2%** (Artificial Analysis)
- GDPval-AA: **12.4%** / 747 Elo (AA)
- Gert Labs: **39.10%**; AA EnterpriseOps-Gym **33.7%**; AA Harvey LAB **69.1%**
- Terminal-Bench Hard **33.3%**; Terminal-Bench 2.1 (Vals) **39.0%**
- AA Agentic Index **9.3%**; AA AutomationBench **6.3%**; AA Tau3-Banking **15.1%**; aaTerminalBench21 **50.6%**; AA Terminal-Bench 4.0 **0.0%**; GDP.pdf **2.8%**

Reasoning / knowledge:

- AA-GPQA Diamond: **74.8%**; GPQA Diamond (Vals) **34.8%**
- AA-HLE: **13.8%**; AA-LCR **69.3%**; CritPt **0.0%**; MLCR-AA **1.7%**
- AA Intelligence Index: **14.2%**; AA-Omniscience Index **−36.8%**; Accuracy / Hallucination **24.7% / 81.6%**
- MMLU-Pro (Vals): **75.3%**; AA-IFBench **68.8%**

Coding:

- SWE-bench Verified: **77.6%** (Mistral post); SWE-bench (Vals) **66.4%**
- AA-SciCode: **40.2%**; AA Coding Index **46.9%**

Multimodal:

- AA-MMMU-Pro: **64.9%** (image input)

Long context:

- AA-LCR 69.3% at 256K

### Normalized scores (1–100)

- **Tool use: 55/100.** Tau3 91.4% / Tau2 94.2% are elite, but GDPval 12.4%, Agentic Index 9.3%, AutomationBench 6.3% and TB-Hard 33.3% show narrow agentic depth.
- **Reasoning: 55/100.** GPQA 74.8% and LCR 69.3% are OK; HLE 13.8%, CritPt 0.0%, Index 14.2% and an 81.6% hallucination rate cap it.
- **Context window: 72/100.** 256K context with AA-LCR 69.3%.
- **Multimodal: 62/100.** Image input (MMMU-Pro 64.9%); text-only output.
- **Coding: 65/100.** SWE-bench Verified 77.6% is solid; Vals 66.4%, SciCode 40.2% and Coding Index 46.9% pull it to the mid-60s.
- **Cost efficiency: 55/100.** $7.50/1M output is on the expensive side for a 128B open model.
- **Overall Score: 62/100.** Mean of (55 + 55 + 72 + 62 + 65) / 5 = 61.8 → 62. Best-fit: self-hosted agentic coding with strong TAU tool calls, poor for factual Q&A.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchLM, Mistral AI, Artificial Analysis, Vals AI, Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
