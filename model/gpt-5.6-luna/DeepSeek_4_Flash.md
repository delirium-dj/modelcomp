# GPT-5.6 Luna — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-5.6 Luna
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier with 1M context and strong price-to-capability for agentic coding.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-5.6-luna`); no Free ID.
- **Release / knowledge:** GPT-5.6 family (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** ~1.05M (1M) / 128K max output — verified from OpenRouter and curated metadata.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.20 in / $1.20 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI); Vals **79.0%**; Terminal-Bench 3.0 **14.3%**
- BrowseComp **83.3%**; OSWorld 2.0 **45.6%**; CyberGym **77.9%**; ExploitGym **12.4%**
- GDPval-AA **1582 Elo** (AA normalized 47.5%); AA Agentic Index **42.7%**
- Toolathlon **53.4%**; APEX-Agents-AA **35.8%**; ApprenticeBench **7%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI); AA 91.1%; Vals 91.7%
- HLE (AA): **39.5%**
- AA-LCR **83.7%**; CritPt **20.6%**; AA Index **51.2%**
- AA-Omniscience Accuracy / Hallucination Rate: **42.7% / 92.6%**
- ARC-AGI-2 **59.5%**, ARC-AGI-3 **0.2%**; FrontierMath v2 Tier 4 **58.5%**
- MMLU-Pro (Vals) **86.0%**

Coding:

- SWE-bench Verified (Vals): **93.0%**; SWE-bench Pro **62.7%**
- DeepSWE **67.2%**; AA-SciCode **53.6%**; AA Coding Index **71.5%**
- CursorBench 3.2 **61.1%** / 4.0 **35.9%**; FrontierCode 1.1 Extended **55.1%**

Long context:

- AA-LCR 83.7%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **78.4%** (w/ Python 79.5%; AA 78.6%)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 84.7%, BrowseComp 83.3% and GDPval 1582 are strong; OSWorld 45.6% and ApprenticeBench 7% cap it.
- **Reasoning: 82/100.** AA Index 51.2, GPQA 92.3% and FrontierMath T4 58.5% are strong; HLE 39.5% and ARC-AGI-2 59.5% are mid.
- **Context window: 96/100.** ~1.05M input with AA-LCR 83.7%.
- **Multimodal: 78/100.** Text + image in with MMMU-Pro 78.4%; text-only output.
- **Coding: 88/100.** SWE Vals 93%, Coding Index 71.5% and LiveCode 84.7% are strong; CursorBench 4.0 35.9% and DeepSWE 67.2% trail.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M is exceptionally cheap for this capability.
- **Overall Score: 86/100.** Mean of (86 + 82 + 96 + 78 + 88) / 5 = 86.0 → 86. Best-fit: high-volume agentic coding at minimal cost.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenAI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
