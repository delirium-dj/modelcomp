# Gemini 3.5 Flash Lite — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.5 Flash Lite
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's 3.5 Flash Lite model prioritizing ultra-low latency; full media input and 1M context but weak reasoning/agentic scores.
- **Provider / access:** Google DeepMind / Gemini API, Vertex AI, OpenRouter (`google/gemini-3.5-flash-lite`); free tier on AI Studio and OpenCode Zen.
- **Release / knowledge:** Gemini 3.5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and curated metadata.
- **Modalities:** text/image/audio/PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.30 in / $2.50 out per 1M; $0 on the promotional AI Studio/Zen free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google); Vals **50.2%**
- OSWorld-Verified **74%**; GDPval-AA **1139 Elo** (AA normalized 23.5%); AA Agentic Index **15.9%**
- Claw-Eval / ClawProBench / Tau3: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA); Vals 83.8%
- HLE (AA): **18.8%**
- MRCRv2 **72.2%**; AA-LCR **76.0%**; CritPt **0.0%**; AA Index **22.2%**
- AA-Omniscience Index **5.2%**; Accuracy / Hallucination Rate **29.5% / 34.4%**
- MMLU-Pro (Vals) **85.8%**

Coding:

- SWE-bench Verified (Vals) **75.0%**; SWE-bench Pro **54.2%**
- LiveCodeBench (Vals) **79.0%**; AA-SciCode **41.3%**; AA Coding Index **49.3%**

Long context:

- MRCRv2 72.2%; AA-LCR 76.0%

Multimodal:

- AA-MMMU-Pro **79.0%**

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld-Verified 74% is good; TB 2.1 54%, AA Agentic Index 15.9% and GDPval 1139 are weak.
- **Reasoning: 55/100.** GPQA 83.8% is decent; HLE 18.8%, AA Index 22.2% and CritPt 0% are weak.
- **Context window: 88/100.** 1M window with MRCRv2 72.2%.
- **Multimodal: 85/100.** text/image/audio/PDF in with MMMU-Pro 79%; text-only output.
- **Coding: 70/100.** SWE (Vals) 75% and LiveCode 79% are decent; Coding Index 49.3% and SciCode 41.3% trail.
- **Cost efficiency: 100/100.** $0 on the evaluated promotional free tier; paid $0.30/$2.50.
- **Overall Score: 72/100.** Mean of (62 + 55 + 88 + 85 + 70) / 5 = 72.0 → 72. Best-fit: ultra-low-latency multimodal tasks with a free tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI, Google); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
