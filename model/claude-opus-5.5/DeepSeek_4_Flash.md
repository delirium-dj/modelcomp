# Claude Opus 5.5 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's frontier Opus workhorse with adaptive thinking and 1M context, aimed at enterprise agentic, coding and knowledge work.
- **Provider / access:** Anthropic API and OpenRouter (`anthropic/claude-opus-5.5`); batch variant offered. No Free Zen ID.
- **Release / knowledge:** Opus 5.5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 1,000,000 tokens / 128K max output — verified from OpenRouter and BenchLM.
- **Modalities:** text + image in; text out; reasoning (adaptive thinking) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $4.00 in / $20.00 out per 1M (OpenRouter first-party); batch ~$2/$10.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic); AA variant **59.6%**
- Terminal-Bench-Science 0.1: **58.7%**
- GDPval-AA: **1846 Elo** (Anthropic); AA normalized **67.3%**
- AutomationBench: **69.5%** (AA); Anthropic raw **40.0%**
- OSWorld 2.0: **48.7%**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon-Verified: **77.8%** (pass@3 82.4%); AA Harvey LAB **91.2%**; AA ITBench **38.2%**; AA Briefcase **1822**; Lab all-pass (Harvey) 8.3%

Reasoning / knowledge:

- GPQA Diamond: (AA not listed for 5.5); HLE w/o tools **64.4%**; AA-HLE **61.4%**
- AA-LCR: **84.7%**; MLCR-AA **66.7%**
- CritPt: **31.7%**
- Artificial Analysis Intelligence Index: **57.6%** (top-tier)
- AA-Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%**
- ARC-AGI-1 **97.5%**, ARC-AGI-2 **91.7%** (ARC Prize verified)
- GMMLU **94.3%**; MILU **93.1%**; ArXivMath Aug 2026 (tools) **96.9%**

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card); SWE Multilingual **93.9%**
- DeepSWE: **74.2%**
- AA-SciCode: **66.9%**
- CursorBench 4.0 **57.8%**; ProgramBench **91.2%**; FrontierCode 1.1 Main **54.4%** / Extended **63.6%**; FrontierSWE v2 **62.3%**; PostTrainBench v1.1 **49.3%**

Long context:

- GraphWalks BFS 256K–1M: **66.8%**; AA-LCR 84.7%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **87.7%**; Chartography (tools) **89.0%** / (no tools) **64.4%**; BenchCAD Vision2Code (tools) **0.962**; OfficeQA Pro **67.7%**; Design Arena **1360 Elo**

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval 1846 Elo, AutomationBench 69.5%, TB 4.0 66.4% and Toolathlon 77.8% are frontier; OSWorld 48.7% is the only soft spot.
- **Reasoning: 97/100.** AA Index 57.6 is near the top of the field; HLE 61–64%, ARC-AGI-2 91.7% and LCR 84.7% confirm frontier reasoning.
- **Context window: 97/100.** Full 1M input with strong LCR; GraphWalks 66.8% shows some long-window degradation.
- **Multimodal: 85/100.** Text + image in with best-in-class MMMU-Pro/Chartography; no audio/video input and text-only output.
- **Coding: 97/100.** SWE-Pro 89.9%, SWE Multilingual 93.9%, DeepSWE 74.2% and SciCode 66.9% are all frontier-class.
- **Cost efficiency: 55/100.** $4/$20 per 1M is premium paid pricing between the ~$3/$15 (60) and mid references; batch halves it.
- **Overall Score: 94/100.** Mean of (96 + 97 + 97 + 85 + 97) / 5 = 94.4 → 94. Best-fit: top enterprise agentic/coding model when budget allows and vision-but-not-audio input suffices.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (Anthropic system card and launch post, Artificial Analysis, BenchLM, OpenRouter, ARC Prize, Collinear, Proximal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
