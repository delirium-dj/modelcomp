# GPT-5.5 — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-5.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's GPT-5.5 reasoning model; a strong all-round frontier model with a 1M-token window and image/PDF input.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-5.5`); no Free Zen ID.
- **Release / knowledge:** GPT-5.5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.5`
- **Context window:** ~1.05M tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $5.00 in / $30.00 out per 1M (OpenRouter first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.0%**
- BrowseComp: **84.4%**; CyberGym **81.8%**
- OSWorld-Verified **78.7%**; MCP Atlas **75.3%**; Toolathlon **55.6%**; OSWorld 2.0 **13.0%**
- GDPval-AA: **1396 Elo** (AA); AA normalized **41.8%**
- AA Agentic Index **37.3%**; AA ITBench **45.8%**; AA-AnalystAgent **50.0%**; ApprenticeBench **20%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI); AA 93.5%; Vals 93.2%
- HLE: **52.2%** (reported) / **41.4%** w/o tools; AA-HLE **45.8%**
- AA-LCR: **84.3%**; CritPt **27.1%**
- Artificial Analysis Intelligence Index: **38.4%**
- AA-Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%**
- ARC-AGI-2 **85%**, ARC-AGI-3 **0.4%**; FrontierMath v2 Tier 4 **35.4%**
- MMLU-Pro (Vals) **88.1%**; AA-IFBench **75.9%**

Coding:

- SWE-bench Verified (Vals): **82.6%**; SWE-bench Pro **58.6%**
- LiveCodeBench (Vals) **85.3%**; AA-SciCode **55.8%**; AA Coding Index **74.9%**
- Vibe Code Bench **69.85%**; React Native Evals **84.7%**; CursorBench 3.2 **58.4%**; PostTrainBench v1.1 **27.2%**

Long context:

- MRCR v2 64K–128K **83.1%**; MRCR v2 128K–256K **87.5%**; AA-LCR 84.3%

Multimodal:

- MMMU-Pro **81.2%** (w/ Python 83.2%); AA-MMMU-Pro **79.9%**; OfficeQA Pro **54.1%**; Design Arena **1265 Elo**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.0 82%, OSWorld-Verified 78.7% and MCP Atlas 75.3% are strong; Toolathlon 55.6% and OSWorld 2.0 13% cap it.
- **Reasoning: 86/100.** GPQA 93.6%, HLE 52.2% and LCR 84.3% are good; AA Index 38.4% and FrontierMath Tier 4 35.4% are behind the top tier.
- **Context window: 94/100.** 1M input with MRCR 87.5% at 128–256K.
- **Multimodal: 80/100.** Text + image/PDF in; text-only output.
- **Coding: 87/100.** SWE Verified 82.6%, LiveCode 85.3% and Coding Index 74.9% are strong; SWE-Pro 58.6% and FrontierMath/PostTrain trail.
- **Cost efficiency: 48/100.** $5/$30 per 1M is premium; batch reduces it.
- **Overall Score: 86/100.** Mean of (84 + 86 + 94 + 80 + 87) / 5 = 86.2 → 86. Best-fit: general frontier reasoning/agentic use where OpenAI tooling matters.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, OpenAI, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
