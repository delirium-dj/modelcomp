# Claude Opus 5 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Opus 5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding/research runs, with 1M context.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-opus-5`); no Free Zen ID.
- **Release / knowledge:** Opus 5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,000,000 tokens / 128K max output — verified from OpenRouter.
- **Modalities:** text/image/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $5.00 in / $25.00 out per 1M (OpenRouter first-party); batch ~$2.50/$12.50.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **42.7%**; Terminal-Bench 2.1 (Vals) **84.6%**
- BrowseComp: **90.8%** (10-agent 93.6%); DeepSearchQA **95.0%**
- OSWorld 2.0: **70.6%**; MCP Atlas **85.8%**
- GDPval-AA: **1862 Elo** (Anthropic); AA normalized **60.4%**
- Toolathlon-Verified **80.6%**; AA Agentic Index **56.2%**; AA Harvey LAB **93.5%**; DRACO **88.6%**; LAB criterion-pass (Harvey) **94.1%**; AutomationBench **26.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (AA); Vals 93.4%
- HLE: **64.7%** w/ tools, **56.3%** w/o tools; HLE-Verified **54.4%**; AA-HLE **54.9%**
- AA-LCR: **79.3%**; MLCR-AA **55.6%**
- CritPt: **29.1%**
- Artificial Analysis Intelligence Index: **50.8%**
- AA-Omniscience Accuracy / Hallucination Rate: **60.9% / 60.8%**
- ARC-AGI-1 **97.5%**, ARC-AGI-2 **90.4%**, ARC-AGI-3 **30.2%**; IMO 2026 **42/42**; RiemannBench (tools) **79%**
- GMMLU **92.5%**; MILU **92.1%**; INCLUDE **89.8%**

Coding:

- SWE-bench Verified: **96%** (AA) / **97.0%** (Vals); SWE-bench Pro **79.2%**
- SWE Multilingual **89.5%**; SWE Multimodal **59.4%**
- DeepSWE: **68.8%**; AA Coding Index **78.0%**; AA-SciCode **56.4%**
- ProgramBench **93.0%**; CursorBench 3.2 **70.0%** / 4.0 **46.6%**; FrontierSWE v2 **52.0%**; PostTrainBench v1.1 **35.0%**

Long context:

- AA-LCR 79.3%; no public MRCR/RULER full-window number found

Multimodal:

- AA-MMMU-Pro **84.7%**; GDP.pdf (tools) **85.5%**; OfficeQA Pro **66.9%**; Chartography (tools) **83.0%**; Design Arena **1318 Elo**

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval 1862 Elo, Toolathlon 80.6%, MCP Atlas 85.8%, BrowseComp 90.8% and OSWorld 70.6% are frontier; raw AutomationBench 26% is weak.
- **Reasoning: 95/100.** AA Index 50.8, HLE 64.7% w/ tools, GPQA 93.2%, ARC-AGI-2 90.4% and a perfect IMO 2026 run are top-tier.
- **Context window: 96/100.** Full 1M input, but AA-LCR 79.3% is below the top long-context set.
- **Multimodal: 85/100.** Text + image + PDF in with MMMU-Pro 84.7%; text-only output.
- **Coding: 95/100.** SWE-bench Verified 96–97%, SWE-Pro 79.2% and Coding Index 78% lead; DeepSWE 68.8% trails Fable/Opus 5.5.
- **Cost efficiency: 48/100.** $5/$25 per 1M sits between the ~$3/$15 (60) and higher-premium bands; batch halves it.
- **Overall Score: 93/100.** Mean of (96 + 95 + 96 + 85 + 95) / 5 = 93.4 → 93. Best-fit: elite agentic/coding and research model when depth matters more than price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, Anthropic, OpenRouter, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
