# Gemini 3 Flash — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's original Gemini 3-generation Flash model — a cheap, fast non-reasoning tier with full media input and a 1M window; superseded by 3.5–3.8 Flash.
- **Provider / access:** Google DeepMind / Gemini API, OpenRouter (`google/gemini-3-flash-preview`); OpenCode Zen (`opencode/gemini-3-flash`).
- **Release / knowledge:** Gemini 3 Flash generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-flash-preview`
- **Context window:** 1,048,576 tokens (1M) per OpenRouter/BenchLM (curated listing shows 128K).
- **Modalities:** text/image/audio/video/file in; text out; non-reasoning; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.50 in / $3.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **49.2%**; Gert Labs **56.63%**
- Terminal-Bench 2.1 (Vals): **53.9%**
- Browsing suite: **43.3%**; JobBench **11.4%**
- ClawProBench / GDPval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA); Vals 87.9%
- HLE (AA): **15.0%**
- AA-LCR **55.3%**; CritPt **1.4%**; AA Index **17.9%**
- AA-Omniscience Accuracy / Hallucination Rate: **45.8% / 92.4%** (negative Omniscience Index −4.3)
- MMLU-Pro (Vals) **88.6%**; AA Global-MMLU-Lite **92.7%**; AA-IFBench **55.1%**
- FrontierMath v2 Tier 4 **4.17%**

Coding:

- SWE-bench Verified (Vals): **75.0%**
- LiveCodeBench (Vals) **85.6%**; Vibe Code Bench **20.20%**
- DeepSWE/SciCode/Coding Index: no verified public score found for this ID

Long context:

- AA-LCR 55.3%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **78.6%**; Design Arena **1204 Elo**

### Normalized scores (1–100)

- **Tool use: 60/100.** Claw-Eval 49.2% and TB 2.1 53.9% are mid; JobBench 11.4% shows weak agentic reliability.
- **Reasoning: 45/100.** AA Index 17.9%, HLE 15%, CritPt 1.4% and a 92.4% hallucination rate place it well below reasoning tiers.
- **Context window: 85/100.** 1M window but AA-LCR only 55.3% — weak effective retrieval.
- **Multimodal: 88/100.** text/image/audio/video/file in with MMMU-Pro 78.6%.
- **Coding: 75/100.** LiveCode 85.6% and SWE (Vals) 75% are decent; Vibe Code 20.2% is weak.
- **Cost efficiency: 94/100.** $0.50/$3.00 per 1M is very cheap.
- **Overall Score: 71/100.** Mean of (60 + 45 + 85 + 88 + 75) / 5 = 70.6 → 71. Best-fit: cheap high-throughput drafting/transcription-adjacent multimodal tasks, not deep reasoning.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI, Google); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
