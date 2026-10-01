# Claude Sonnet 5 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Sonnet 5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at lower cost than Opus.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-sonnet-5`); no Free Zen ID.
- **Release / knowledge:** Sonnet 5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens / 128K max output — verified from OpenRouter.
- **Modalities:** text/image/file in; text out; reasoning (adaptive thinking) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $10.00 out per 1M (OpenRouter); curated list $3/$15.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic); Vals **74.5%**; Terminal-Bench 3.0 **14.6%**
- BrowseComp **84.7%**; OSWorld-Verified **81.2%**; HLE w/ tools **57.4%**
- GDPval-AA: **1603 Elo** (Anthropic); AA normalized **47.5%**
- AA Agentic Index **44.3%**; ApprenticeBench **16%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (AA); Vals 88.9%
- HLE: **57.4%** w/ tools, **43.2%** w/o tools; HLE-Verified **31.0%**; AA-HLE **41.3%**
- AA-LCR **82.0%**; CritPt **16.9%**; AA Index **38.2%**
- AA-Omniscience Accuracy / Hallucination Rate: **40.1% / 39.4%**
- MMLU-Pro (Vals) **87.5%**; LABBench2 **80.1%**

Coding:

- SWE-bench Verified **85.2%** (Anthropic); Vals **79.6%**; SWE-bench Pro **63.2%**
- SWE Multilingual **78.3%**; SWE Multimodal **28.1%**
- LiveCodeBench (Vals) **82.4%**; AA-SciCode **54.3%**; AA Coding Index **71.5%**
- CursorBench 3.2 **61.5%** / 4.0 **34.1%**; FrontierCode 1.1 Main **42.7%**

Long context:

- AA-LCR 82.0%; no public MRCR full-window number found

Multimodal:

- CharXiv **88.3%** (no tools 77%); AA-MMMU-Pro **77.3%**; Design Arena **1284 Elo**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 80.4%, OSWorld-Verified 81.2% and GDPval 1603 are strong; AA Agentic Index 44.3% and Terminal-Bench 3.0 14.6% cap it.
- **Reasoning: 80/100.** GPQA 91.1% and LCR 82% are good, but AA Index 38.2%, HLE 43.2–57.4% and CritPt 16.9% trail the top tier.
- **Context window: 95/100.** Full 1M input with AA-LCR 82%.
- **Multimodal: 80/100.** Text + image/file in with CharXiv 88.3%; text-only output.
- **Coding: 85/100.** SWE Verified 85.2% and Coding Index 71.5% are good; SWE Multimodal 28.1% and CursorBench 4.0 34.1% drag.
- **Cost efficiency: 72/100.** $2/$10 per 1M (or curated $3/$15) is solid mid-tier value.
- **Overall Score: 86/100.** Mean of (88 + 80 + 95 + 80 + 85) / 5 = 85.6 → 86. Best-fit: affordable agentic coding/document workhorse below Opus.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
