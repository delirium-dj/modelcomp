# GPT-5.6 Terra — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship GPT-5.6-generation model optimized for ground-up agentic research, tool usage, long-context reasoning and code synthesis.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-5.6-terra`); no Free Zen ID.
- **Release / knowledge:** GPT-5.6 family (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** ~1.05M tokens (1M) — verified from OpenRouter.
- **Modalities:** text/image/audio/video/PDF in (curated); OpenRouter lists text/image/file; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $12.00 out per 1M (OpenRouter first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI); Vals **77.5%**; Terminal-Bench 3.0 **20.8%**
- BrowseComp **87.5%**; OSWorld 2.0 **50.2%**; CyberGym **81.8%**; ExploitGym **23.2%**
- GDPval-AA: **1583 Elo** (AA); AA normalized **46.6%**
- AA Agentic Index **43.7%**; Toolathlon **53.1%**; AA ITBench **51.0%**; APEX-Agents-AA **38.9%**; ApprenticeBench **16%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI); Vals 90.9%
- HLE-Verified **51.1%**; AA-HLE **42.9%**
- AA-LCR **83.0%**; CritPt **30.0%**
- Artificial Analysis Intelligence Index: **55.0%**
- AA-Omniscience Accuracy / Hallucination Rate: **46.8% / 87.9%**
- ARC-AGI-2 **83.9%**, ARC-AGI-3 **0.8%**; FrontierMath v2 Tier 4 **68.3%**
- MMLU-Pro (Vals) **86.7%**; AA-IFBench **71.2%**; LABBench2 **81.2%**

Coding:

- SWE-bench Verified (Vals): **95.4%**; SWE-bench Pro **63.4%**
- DeepSWE **69.6%**; LiveCodeBench (Vals) **85.9%**; AA-SciCode **55.0%**; AA Coding Index **76.7%**
- CursorBench 3.2 **64.9%** / 4.0 **41.3%**; FrontierCode 1.1 Extended **55.8%**

Long context:

- AA-LCR 83.0%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **80.7%** (w/ Python 82%); AA-MMMU-Pro **80.7%**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 87.4%, BrowseComp 87.5%, CyberGym 81.8% and GDPval 1583 are strong; Toolathlon 53.1% and OSWorld 50.2% cap it.
- **Reasoning: 92/100.** AA Index 55, GPQA 92.9%, CritPt 30% and FrontierMath T4 68.3% are top-tier; ARC-AGI-2 83.9% and an 87.9% hallucination rate are caveats.
- **Context window: 96/100.** ~1.05M input with AA-LCR 83%.
- **Multimodal: 90/100.** Full media input per curated metadata (text/image/audio/video/PDF), MMMU-Pro 80.7%; text-only output.
- **Coding: 90/100.** SWE Verified 95.4% and Coding Index 76.7% lead; DeepSWE 69.6% and SWE-Pro 63.4% trail Sol/Opus.
- **Cost efficiency: 70/100.** $2/$12 per 1M is mid-tier.
- **Overall Score: 91/100.** Mean of (88 + 92 + 96 + 90 + 90) / 5 = 91.2 → 91. Best-fit: all-media agentic research and code synthesis.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, OpenAI, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
