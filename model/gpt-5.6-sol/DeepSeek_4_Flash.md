# GPT-5.6 Sol — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning and coding specialist tier in the GPT-5.6 family, tuned for hard math, science and terminal-agent coding.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-5.6-sol`); no Free Zen ID.
- **Release / knowledge:** GPT-5.6 family (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** ~1.05M tokens / 128K max output — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.25 in / $10.00 out per 1M (curated) — $2/$10 on OpenRouter; batch halves.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI); Vals **85.8%**
- Terminal-Bench 3.0: **34.6%**; terminalBenchHard **65.9%**
- BrowseComp: **92.2%**; CyberGym **84.5%**; ExploitGym **33.7%**
- OSWorld 2.0: **62.6%**; Toolathlon **58%**
- GDPval-AA: **1735 Elo** (AA); AA normalized **54.4%**
- AA Agentic Index **50.5%**; AA ITBench **56.2%**; AA-AnalystAgent **47.5%**; ApprenticeBench **26%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI); Vals 95.2%
- HLE-Verified: **54.5%**; AA-HLE **49.5%**
- AA-LCR: **84.0%**; CritPt **32.3%**
- Artificial Analysis Intelligence Index: **58.9%** (top of field)
- AA-Omniscience Accuracy / Hallucination Rate: **59.4% / 92.2%** (high hallucination rate)
- ARC-AGI-2 **92.5%**, ARC-AGI-3 **7.8%**
- FrontierMath v2 Tiers 1-3 **89%**, Tier 4 **83%** (legacy FrontierMath 89%)
- MMLU-Pro (Vals) **89.1%**; AA-IFBench **72.7%**; LABBench2 **82.1%**

Coding:

- SWE-bench Verified (Vals): **96.2%**; SWE-bench Pro **64.6%**
- DeepSWE: **72.7%**; AA Coding Index **77.4%**; AA-SciCode **57.1%**
- LiveCodeBench (Vals) **82.6%**; CursorBench 3.2 **67.2%** / 4.0 **41.7%**; FrontierCode 1.1 Extended **60.6%**; PostTrainBench v1.1 **36.2%**

Long context:

- AA-LCR 84.0%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **83%** (w/ Python 84.6%); AA-MMMU-Pro **83.4%**

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 2.1 91.9%, BrowseComp 92.2%, CyberGym 84.5% and GDPval 1735 are frontier; Toolathlon 58% and Terminal-Bench 3.0 34.6% cap it.
- **Reasoning: 96/100.** AA Index 58.9 leads the field; GPQA 94.6%, FrontierMath T4 83% and ARC-AGI-2 92.5% are elite. A 92.2% hallucination rate is a caveat, not a reasoning deduction.
- **Context window: 97/100.** ~1.05M input with AA-LCR 84%.
- **Multimodal: 80/100.** Text + image/PDF in with MMMU-Pro 83%; text-only output.
- **Coding: 93/100.** SWE Verified 96.2%, TB 2.1 91.9% and Coding Index 77.4% lead; SWE-Pro 64.6% and CursorBench 4.0 trail Opus 5.5.
- **Cost efficiency: 82/100.** $1.25/$10 per 1M is strong value for frontier reasoning/coding.
- **Overall Score: 92/100.** Mean of (92 + 96 + 97 + 80 + 93) / 5 = 91.6 → 92. Best-fit: best price-per-frontier-intelligence for math, science and agentic coding.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, OpenAI, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
