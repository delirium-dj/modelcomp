# Gemini 3.5 Flash — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.5 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's 3.5-generation Flash model — fast multimodal workhorse with a full 1M window; strong at short-to-medium context but weak at full-window retrieval.
- **Provider / access:** Google DeepMind / Gemini API, Vertex AI, OpenRouter (`google/gemini-3.5-flash`); free tier on AI Studio and OpenCode Zen.
- **Release / knowledge:** Gemini 3.5 Flash generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.50 in / $9.00 out per 1M; $0 on the promotional AI Studio/Zen free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (Google); Vals **74.2%**
- MCP Atlas **83.6%**; Toolathlon **56.5%**; OSWorld-Verified **78.4%**
- GDPval-AA: **1345 Elo** (AA); AA normalized **42.2%**
- AA Agentic Index **27.3%**; APEX-Agents-AA **47.1%**; Finance Agent v2 **57.9%**; ResearchClawBench **18.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (Google); AA 92.2%; Vals 92.7%
- HLE: **40.2%** (reported) / AA-HLE **42.7%**
- AA-LCR **69.3%**; CritPt **13.1%**; AA Index **50.2%**
- AA-Omniscience Accuracy / Hallucination Rate: **51.9% / 60.7%**
- ARC-AGI-2 **72.1%**; FrontierMath v2 Tier 4 **14.58%**
- MMLU-Pro (Vals) **89.5%**; IFBench **76.3%**

Coding:

- SWE-bench Verified (Vals) **78.8%**; SWE-bench Pro **55.1%**
- LiveCodeBench (Vals) **87.6%**; AA-SciCode **53.9%**; AA Coding Index **70.1%**
- Vibe Code Bench **48.68%**; CursorBench 3.2 **48.8%**

Long context:

- MRCRv2 **77.3%**; MRCR 1M **26.6%** (severe full-window degradation); AA-LCR 69.3%

Multimodal:

- MMMU-Pro **83.6%** (AA 84.3%); CharXiv **84.2%**; Design Arena **1273 Elo**

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 76.2%, MCP Atlas 83.6% and OSWorld-Verified 78.4% are good; AA Agentic Index 27.3% and GDPval 1345 cap it.
- **Reasoning: 76/100.** GPQA 92.2% is strong but AA Index 50.2%, HLE 40.2%, CritPt 13.1% and ARC-AGI-2 72.1% are mid-high.
- **Context window: 88/100.** 1M window but MRCR 1M only 26.6% — effective long-context reliability is limited.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with MMMU-Pro 83.6%; text-only output.
- **Coding: 84/100.** LiveCode 87.6%, SWE (Vals) 78.8% and Coding Index 70.1% are solid; Vibe Code 48.7% is mid.
- **Cost efficiency: 100/100.** $0 on the evaluated promotional free tier; paid rate $1.5/$9.
- **Overall Score: 84/100.** Mean of (80 + 76 + 88 + 92 + 84) / 5 = 84.0 → 84. Best-fit: fast multimodal work at short-to-medium context with a free tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI, Google); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
