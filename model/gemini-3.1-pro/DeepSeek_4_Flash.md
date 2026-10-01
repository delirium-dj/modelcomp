# Gemini 3.1 Pro — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.1 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Pro-tier multimodal reasoning model for high-performance long-context work; a strong generalist with very large context and full media input.
- **Provider / access:** Google DeepMind / Gemini API and Vertex AI; also OpenRouter (`google/gemini-3.1-pro-preview`) and Vals AI. Chat Completions-style.
- **Release / knowledge:** Gemini 3.1 Pro generation (2026); knowledge cutoff not publicly disclosed. Free tier available on Google AI Studio and OpenCode Zen.
- **IDs:** `google/gemini-3.1-pro-preview` (OpenRouter); free tier on Zen.
- **Context window:** ~1.05M tokens verified via OpenRouter/BenchLM; curated listings show up to 2M — treat 1M as the verified working window.
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $12.00 out per 1M (OpenRouter preview); $0 on the promotional AI Studio/Zen free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **70.8%**
- Claw-Eval: **57.8%** (Claw-Eval leaderboard)
- Tau2-Bench: **95.6%** (older harness; Meta comparison chart)
- GDPval-AA: **904 Elo** (AA); AA normalized **13.8%**
- AA Agentic Index: **10.3%**; APEX-Agents-AA **32.0%**; DeepSearchQA **69.7%**
- ResearchClawBench **13.3%**; Gert Labs **56.87%**

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Meta chart); AA 94.1%; Vals 95.5%
- HLE (no tools): **45.4%** (Meta chart); AA-HLE **47.0%**
- AA-LCR: **82.0%**; AA index **29.7%**
- CritPt: **17.7%**
- AA-Omniscience Accuracy / Hallucination Rate: **54.9% / 50.9%**
- ARC-AGI-2 **77.1%**, ARC-AGI-3 **0.4%** (Google/ARC Prize)
- MMLU-Pro (Vals) **91.0%**; AA-IFBench **77.1%**; AA Global-MMLU-Lite **93.2%**

Coding:

- SWE-bench Verified (Vals): **78.8%**
- LiveCodeBench (Vals): **88.5%**; LiveCodeBench Pro **82.9%**
- AA-SciCode: **58.7%**; AA Coding Index **68.8%**
- Vibe Code Bench **32.03%**; React Native Evals **78.9%**; PostTrainBench v1.1 **22.0%**

Long context:

- AA-LCR 82.0%; no public MRCR/RULER full-window number found

Multimodal:

- MMMU-Pro **83.9%** (Meta); AA-MMMU-Pro **82.4%**; CharXiv **80.2%**; ScreenSpot Pro **84.4%**; MedXpertQA (MM) **81.3%**; Design Arena **1260 Elo**

### Normalized scores (1–100)

- **Tool use: 74/100.** TB 2.1 70.8% and Tau2 95.6% are good, but GDPval 904 Elo and AA Agentic Index 10.3% sit in the mid band; Claw-Eval 57.8% is solid.
- **Reasoning: 72/100.** GPQA 94.3% is frontier, but AA Index 29.7% and CritPt 17.7% place overall reasoning in the mid-high band; HLE ~45%.
- **Context window: 95/100.** ~1M verified input (listings up to 2M) with AA-LCR 82%; no ≥98% full-window retrieval proof, so not 100.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with MMMU-Pro 82–84% and strong chart/screen scores; text-only output.
- **Coding: 84/100.** LiveCode 88.5% and SciCode 58.7% are strong; SWE (Vals) 78.8% and Coding Index 68.8% are good, Vibe Code 32% drags.
- **Cost efficiency: 100/100.** $0 on the evaluated promotional AI Studio/Zen free tier (time-limited, data caveats apply); paid rate is $2/$12 per 1M.
- **Overall Score: 83/100.** Mean of (74 + 72 + 95 + 92 + 84) / 5 = 83.4 → 83. Best-fit: long-context multimodal analysis and drafting when a free Pro tier is available.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI, Meta comparison chart, Google blog, ARC Prize, Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
