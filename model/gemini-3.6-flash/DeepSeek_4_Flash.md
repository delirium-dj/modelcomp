# Gemini 3.6 Flash — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.6 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's 3.6-generation Flash model with improved reasoning over 3.5 and full media input, positioned as a cheap agentic/multimodal tier.
- **Provider / access:** Google DeepMind / Gemini API, Vertex AI, OpenRouter (`google/gemini-3.6-flash`); free tier on AI Studio and OpenCode Zen.
- **Release / knowledge:** Gemini 3.6 Flash generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.75 in / $3.75 out per 1M; $0 on the promotional AI Studio/Zen free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83%**
- GDPval-AA: **1423 Elo** (AA); AA normalized **38.2%**
- Terminal-Bench 2.1 (Vals) **73.8%**; AA Agentic Index **30.1%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA); Vals 93.4%
- HLE: **40.8%** (AA)
- AA-LCR **80.0%**; CritPt **10.6%**; AA Index **34.0%**
- AA-Omniscience Accuracy / Hallucination Rate: **50.0% / 55.6%**
- ARC-AGI-1 **91.2%**, ARC-AGI-2 **60.4%**
- MMLU-Pro (Vals) **89.3%**

Coding:

- SWE-bench Verified (Vals) **79.6%**
- LiveCodeBench (Vals) **88.1%**; AA-SciCode **53.4%**; AA Coding Index **69.2%**
- DeepSWE **49.0%**; CursorBench 3.2 **53.5%**

Long context:

- AA-LCR 80.0%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **83.2%**; Design Arena **1307 Elo**

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 83% and GDPval 1423 are good; AA Agentic Index 30.1% and TB 2.1 73.8% hold it mid-high.
- **Reasoning: 76/100.** GPQA 92.8% and LCR 80% are strong; AA Index 34%, HLE 40.8% and ARC-AGI-2 60.4% are mid.
- **Context window: 92/100.** 1M input with AA-LCR 80%.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with MMMU-Pro 83.2%; text-only output.
- **Coding: 82/100.** LiveCode 88.1% and SWE (Vals) 79.6% are good; DeepSWE 49% and Coding Index 69.2% trail 3.7/3.8.
- **Cost efficiency: 100/100.** $0 on the evaluated promotional free tier; paid rate $0.75/$3.75.
- **Overall Score: 84/100.** Mean of (80 + 76 + 92 + 92 + 82) / 5 = 84.4 → 84. Best-fit: cheap all-media Flash work with a free tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI, Google); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
