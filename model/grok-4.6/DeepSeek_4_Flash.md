# Grok 4.6 — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4.6
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks and knowledge work, with 500K context and strong Tau3/GDPval results.
- **Provider / access:** xAI API / OpenRouter (`x-ai/grok-4.6`); no Free ID.
- **Release / knowledge:** Grok 4.6 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `x-ai/grok-4.6`
- **Context window:** 500,000 tokens — verified from OpenRouter and curated metadata.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $6.00 out per 1M (cached $0.50); doubles above 200K prompt.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1: **78.3%**; Terminal-Bench 3.0 **26.5%**
- APEX-Agents **57.5%**; AA Tau3 Banking **50.7%**; AA EnterpriseOps-Gym **48.3%**
- GDPval-AA: **1643 Elo** (xAI); AA normalized **55.5%**
- AA AutomationBench **66.7%**; AA Agentic Index **53.4%**; CWE-bench v1 **57.0%**; ApprenticeBench **13%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA); Vals 94.7%
- HLE (AA): **42.9%**
- AA-LCR **80.3%**; CritPt **17.1%**; AA Index **44.3%**
- AA-Omniscience Accuracy / Hallucination Rate: **48.2% / 34.3%**
- ARC-AGI-1 **87.0%**, ARC-AGI-2 **67.1%**, ARC-AGI-3 **2.1%**
- MMLU-Pro (Vals) **89.4%**

Coding:

- SWE-bench Verified (Vals) **95.6%**; SWE-bench Pro not separately reported
- DeepSWE **65.9%**; LiveCodeBench (Vals) **88.2%**; AA-SciCode **56.5%**; AA Coding Index **76.8%**
- CursorBench 3.2 **70.8%** / 4.0 **41.4%**; FrontierCode 1.1 Extended **61.3%**; FrontierSWE v2 **25.3%**

Long context:

- AA-LCR 80.3%; no public MRCR full-window number found

Multimodal:

- Design Arena Website **1299 Elo**; text/image input only

### Normalized scores (1–100)

- **Tool use: 91/100.** TB 2.1 78.3%, APEX-Agents 57.5%, AA Tau3 50.7% and GDPval 1643 are strong; ApprenticeBench 13% caps it.
- **Reasoning: 82/100.** GPQA 94.9% and LCR 80.3% are strong; HLE 42.9%, AA Index 44.3% and ARC-AGI-2 67.1% are mid-high.
- **Context window: 85/100.** 500K window with AA-LCR 80.3%.
- **Multimodal: 78/100.** Text + image in; text-only output.
- **Coding: 89/100.** SWE Verified 95.6%, Coding Index 76.8% and LiveCode 88.2% are strong; DeepSWE 65.9% and FrontierSWE 25.3% trail.
- **Cost efficiency: 78/100.** $2/$6 per 1M is good value; >200K prompts double the rate.
- **Overall Score: 85/100.** Mean of (91 + 82 + 85 + 78 + 89) / 5 = 85.0 → 85. Best-fit: frontier coding and real-world agent tasks at mid price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, xAI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
