# Gemini 3.7 Flash — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's high-capability fast-tier Gemini (predecessor to 3.8 Flash), full multimodal input and 1M context. Top use case: high-volume multimodal + coding work on a free/cheap tier.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.7-flash`), also OpenCode Zen.
- **Release / knowledge:** Gemini 3.7 generation (2026); knowledge cutoff not published.
- **IDs:** `google/gemini-3.7-flash` (Free tier present on AI Studio and Zen).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on Google AI Studio and OpenCode Zen with standard rate limits; low Flash-tier paid pricing beyond quota.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**model card**): **85.8%** (Vals 77.5%); Terminal-Bench 3.0 **14.9%**
- OSWorld 2.0: **47.9%**; GDPval-AA **1525 Elo**; AA Harvey-LAB **90.7%**; AA-AnalystAgent **60.0%**
- AutomationBench **30.4%**; AA Agentic Index **36.4%**; Agents' Last Exam 26.3%; ApprenticeBench 16%

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (Vals 93.9%); MMLU-Pro **90.1%** (Vals); HLE-Verified **53.6%** (AA-HLE 47.9%)
- ARC-AGI-1 **95.5%** / ARC-AGI-2 **84.6%** (ARC Prize); MRCR v2 64K–128K **97%**; AA-LCR **81.7%**
- AA Intelligence Index **39.1**; CritPt **14.3%**; AA-Omniscience Hallucination Rate 64.5%

Coding:

- LiveCodeBench **88.7%** (Vals); SWE-bench **80.8%** (Vals); DeepSWE **65.3%**; Terminal-Bench 2.1 **85.8%**
- AA Coding Index **76.1%**; AA-SciCode **57.2%**; FrontierCode 1.1 Main **43.6%**; FrontierSWE v2 **20.3%**

Multimodal:

- CharXiv **88.7%**; LVBench **85.4%** (video); AA-MMMU-Pro **85.5%**; Design Arena Website **1311 Elo**

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 85.8%, OSWorld 47.9%, GDPval 1525, Harvey-LAB 90.7%; dragged by TB3.0 14.9%, AutomationBench 30.4%, ApprenticeBench 16% — Flash-class agentics.
- **Reasoning: 85/100.** GPQA-D 94.5%, MMLU-Pro 90.1%, ARC-AGI-2 84.6%, AA-LCR 81.7%; AA Index 39.1 and CritPt 14.3% cap it.
- **Context window: 94/100.** 1M total with MRCR 97% at 64K–128K and AA-LCR 81.7%.
- **Multimodal: 89/100.** Image+audio+PDF in with video understanding (LVBench 85.4%, CharXiv 88.7%, MMMU-Pro 85.5%); text-only out.
- **Coding: 85/100.** LiveCodeBench 88.7%, SWE-bench 80.8%, Coding Index 76.1%, DeepSWE 65.3%; FrontierSWE v2 20.3% is the floor.
- **Cost efficiency: 98/100.** Free tier on AI Studio and Zen plus low Flash paid pricing.
- **Overall Score: 86.2/100.** Half-up mean of the five quality dims (78/85/94/89/85). Strong free/cheap multimodal daily driver, a step below 3.8 Flash; escalate hard terminal/agentic work.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google DeepMind model card, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
