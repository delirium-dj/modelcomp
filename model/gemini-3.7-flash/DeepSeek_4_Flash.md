# Gemini 3.7 Flash — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.7 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability Flash model with 1M context and full media input; a fast multimodal agentic/coding workhorse.
- **Provider / access:** Google DeepMind / Gemini API, Vertex AI, OpenRouter (`google/gemini-3.7-flash`); free tier on AI Studio and OpenCode Zen.
- **Release / knowledge:** Gemini 3.7 Flash generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.75 in / $3.75 out per 1M; $0 on the promotional AI Studio/Zen free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google); Vals **77.5%**; Terminal-Bench 3.0 **14.9%**
- OSWorld 2.0 **47.9%**; AutomationBench **30.4%**; Agents' Last Exam **26.3%**
- GDPval-AA: **1525 Elo** (AA); AA normalized **43.6%**
- AA Agentic Index **36.4%**; AA Harvey LAB **90.7%**; AA-AnalystAgent **60.0%**; ApprenticeBench **16%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA); Vals 93.9%
- HLE-Verified **53.6%**; AA-HLE **47.9%**
- AA-LCR **81.7%**; CritPt **14.3%**; AA Index **39.1%**
- AA-Omniscience Accuracy / Hallucination Rate: **55.3% / 64.5%**
- ARC-AGI-1 **95.5%**, ARC-AGI-2 **84.6%**; MMLU-Pro (Vals) **90.1%**

Coding:

- SWE-bench Verified (Vals): **80.8%**
- LiveCodeBench (Vals) **88.7%**; AA-SciCode **57.2%**; AA Coding Index **76.1%**
- DeepSWE **65.3%**; FrontierCode 1.1 Main **43.6%**; FrontierSWE v2 **20.3%**

Long context:

- MRCR v2 64K–128K: **97%**; AA-LCR 81.7%

Multimodal:

- AA-MMMU-Pro **85.5%**; CharXiv **84.5%** (w/ tools 88.7%); LVBench **85.4%**; Design Arena **1312 Elo**

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 85.8% and GDPval 1525 are strong; AA Agentic Index 36.4% and AutomationBench 30.4% hold it mid-high.
- **Reasoning: 84/100.** GPQA 94.5%, HLE 47.9–53.6% and ARC-AGI-2 84.6% are strong; CritPt 14.3% and Index 39.1% cap it.
- **Context window: 95/100.** 1M input with 97% MRCR at 64–128K; no 512K+ retrieval proof.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with MMMU-Pro 85.5% and LVBench 85.4%; text-only output.
- **Coding: 87/100.** LiveCode 88.7%, SWE (Vals) 80.8% and Coding Index 76.1% are strong; DeepSWE 65.3% and FrontierSWE v2 20.3% trail.
- **Cost efficiency: 100/100.** $0 on the evaluated promotional free tier; paid rate $0.75/$3.75.
- **Overall Score: 88/100.** Mean of (82 + 84 + 95 + 92 + 87) / 5 = 88.0 → 88. Best-fit: fast all-media agent/coding with a free tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI, Google); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
