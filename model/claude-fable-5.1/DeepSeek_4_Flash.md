# Claude Fable 5.1 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5, built for the most demanding reasoning and long-horizon agentic work, with 1M context and 128K output.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-fable-5.1`); no Free Zen ID.
- **Release / knowledge:** Fable 5.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-fable-5.1`
- **Context window:** 1,000,000 tokens / 128K max output — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $10.00 in / $50.00 out per 1M (OpenRouter first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic); AA variant **52.0%**
- Terminal-Bench 2.1: AA **91.4%**, Vals **85.0%**
- GDPval-AA: **1735 Elo** (AA); AA normalized **61.7%**
- AutomationBench: **31.4%** (Anthropic) / AA **59.4%**
- Toolathlon-Verified **77.8%**; AA Harvey LAB **93.0%**; AA Tau3 Banking **47.2%**; AA Agentic Index **58.0%**; OSWorld 2.0 **41.7%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (AA); Vals 93.4%
- HLE: **65%** (reported); HLE w/o tools **60.9%**; AA-HLE **59.1%**
- AA-LCR: **85.3%**; MLCR-AA **71.1%**
- CritPt: **29.7%**
- Artificial Analysis Intelligence Index: **53.4%**
- AA-Omniscience Accuracy / Hallucination Rate: **67.2% / 72.6%**
- ARC-AGI-1 **97.5%**, ARC-AGI-2 **90%**; MMLU-Pro (Vals) **92.4%**

Coding:

- SWE-bench Pro: **81.2%**; SWE Multilingual **89.1%**; SWE Multimodal **54.7%**
- DeepSWE: **67.4%**
- LiveCodeBench (Vals): **90.5%**; AA-SciCode **63.1%**; AA Coding Index **81.6%**
- CursorBench 3.2 **73.4%** / 4.0 **51.8%**; ProgramBench **87.6%**; FrontierSWE v2 **56.3%**; PostTrainBench v1.1 **40.2%**

Long context:

- GraphWalks BFS 256K–1M: **65.0%**; AA-LCR 85.3%; no public MRCR full-window number found

Multimodal:

- Design Arena Website **1319 Elo**; no public MMMU-Pro number for Fable 5.1 found

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval 1735 Elo, AA Agentic Index 58%, TB 2.1 85–91% and Toolathlon 77.8% are frontier; OSWorld 41.7% and raw AutomationBench 31.4% cap it.
- **Reasoning: 94/100.** AA Index 53.4, HLE 59–65%, GPQA 93.7%, LCR 85.3% and ARC-AGI-2 90% are all strong; CritPt 29.7% is not top.
- **Context window: 96/100.** Full 1M input with 85.3% LCR; GraphWalks 65% shows long-window degradation.
- **Multimodal: 80/100.** Text + image + PDF input (per provider metadata); no audio/video and text-only output.
- **Coding: 93/100.** Coding Index 81.6% and SWE-Pro 81.2% lead; DeepSWE 67.4% and SWE Multimodal 54.7% temper it.
- **Cost efficiency: 30/100.** $10/$50 per 1M maps to the premium reference band; capability-only justification.
- **Overall Score: 91/100.** Mean of (93 + 94 + 96 + 80 + 93) / 5 = 91.2 → 91. Best-fit: Anthropic's top-tier agentic/reasoning model above Opus 5.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, Anthropic, OpenRouter, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
