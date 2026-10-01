# Grok 4.5 — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's Grok 4.5 reasoning model with 500K context, strong GPQA/SWE-Vals coding and mid-tier pricing; superseded by 4.6/4.7.
- **Provider / access:** xAI API / OpenRouter (`x-ai/grok-4.5`); OpenCode Zen (`opencode/grok-4.5`); no Free ID.
- **Release / knowledge:** Grok 4.5 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `x-ai/grok-4.5`
- **Context window:** 500,000 tokens — verified from OpenRouter and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $6.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **83.3%** (xAI); Vals **67.8%**; Terminal-Bench 3.0 **15.7%**
- GDPval-AA **1430 Elo** (AA normalized 43.5%); AA Agentic Index **42.1%**
- Claw-Eval / ClawProBench / Tau3 / OSWorld: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **93.1%** (AA); Vals 92.9%
- HLE (AA): **42.7%**
- AA-LCR **79.3%**; CritPt **15.4%**; AA Index **38.8%**
- AA-Omniscience Index **25.3%**; Accuracy / Hallucination Rate **51.6% / 54.1%**
- ARC-AGI-2 **52.6%**, ARC-AGI-3 **0.3%**; MMLU-Pro (Vals) **89.2%**

Coding:

- SWE-bench Verified (Vals) **86.6%**; SWE-bench Pro **64.7%**; SWE Multilingual **78%**
- LiveCodeBench (Vals) **87.4%**; AA-SciCode **55.0%**; AA Coding Index **72.5%**
- deepSwe **53%**; CursorBench 3.2 **66.7%**; VulcanBench v3 **89.9%**; PostTrainBench v1.1 **23.4%**

Long context:

- AA-LCR 79.3%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **80.4%**; Design Arena **1290 Elo**

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 83.3%, GDPval 1430 and AA Agentic Index 42.1% are strong; TB 3.0 15.7% caps it.
- **Reasoning: 76/100.** GPQA 93.1% is excellent, but AA Index 38.8%, HLE 42.7% and ARC-AGI-2 52.6% are mid.
- **Context window: 85/100.** 500K window with AA-LCR 79.3%.
- **Multimodal: 78/100.** Text + image in with MMMU-Pro 80.4%; text-only output.
- **Coding: 86/100.** SWE Vals 86.6%, Coding Index 72.5% and LiveCode 87.4% are strong; deepSwe 53% and PostTrainBench 23.4% trail.
- **Cost efficiency: 78/100.** $2/$6 per 1M is good value.
- **Overall Score: 82/100.** Mean of (85 + 76 + 85 + 78 + 86) / 5 = 82.0 → 82. Best-fit: cheap frontier-adjacent coding/agent tasks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, xAI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
