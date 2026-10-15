# Gemini 3.5 Flash-Lite — findings by GPT 6 Sol

- Source: Google DeepMind (`gemini-3.5-flash-lite`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's July 2026 lower-cost multimodal Flash-Lite for high-volume reasoning, classification and agents, based on 3.1 Flash-Lite and distinct from full 3.5 Flash ([Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- **Provider / access:** Gemini API/AI Studio ID `gemini-3.5-flash-lite`; [OpenCode Console](https://opencode.ai/docs/zen/) lists paid `gemini-3.5-flash-lite` via Google's model endpoint. No current **$0 Zen route** for this exact ID appears in the Console free-model table; the project metadata free-tier note is not proof of one.
- **Release / knowledge:** July 21, 2026; knowledge cutoff generally March 2026, potentially January 2025 for some domains ([Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- **IDs:** `google/gemini-3.5-flash-lite` and Console `opencode/gemini-3.5-flash-lite`; do not substitute the larger 3.5 Flash or later 3.6 model.
- **Context window:** [Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/) up to **1M combined / 64K output**; [Vals](https://www.vals.ai/models/google_gemini-3.5-flash-lite) lists ~66K output on its provider.
- **Modalities:** Native text/image/audio/video/document input → text output ([Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)); host-specific gateway may expose fewer modalities, and no native audio/video generation.
- **Pricing (as of 2026-10-15):** [Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/), [Vals](https://www.vals.ai/models/google_gemini-3.5-flash-lite) and [OpenCode Console](https://opencode.ai/docs/zen/) **$0.30 input / $2.50 output / $0.03 Console cached input per 1M**. A live provider-specific free allowance was not independently confirmed for this exact Console ID.
- **Architecture:** Proprietary 3.1 Flash-Lite-derived model, parameter count unpublished ([Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).

### Raw benchmarks found

Google's [July model-card table](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/) has a **3.5 Flash-Lite column** (separate 3.1 Lite, full Flash, and GPT comparisons); independent [Vals high](https://www.vals.ai/models/google_gemini-3.5-flash-lite) and [AA attributed](https://benchlm.ai/models/gemini-3-5-flash-lite) results are not the same harness. Vals July Index **subsets** should not be substituted for its full benchmark scores.

Agent / tool use:

- [Google TB2.1 **54.0%** Terminus-2, OSWorld-Verified **74.0%**, MLE-Bench **39.2%**, GDPval-AA v2 **1140 Elo**](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/). [Vals TB2.1 **50.19% ±0.99**, Finance Agent v2 **47.44% ±0.51**, Code Migration **6.15% ±1.71**, Harvey Legal Agent **0.00%**, ProgramBench **0.00%**](https://www.vals.ai/models/google_gemini-3.5-flash-lite).
- OSWorld-Verified is not OSWorld 2.0; no verified exact-ID Claw-Eval, MCP Atlas or Toolathlon score found.

Reasoning / knowledge:

- [Vals GPQA Diamond **83.84% ±1.85**, MMLU Pro **85.84% ±0.34**, SAGE **47.30% ±3.38**](https://www.vals.ai/models/google_gemini-3.5-flash-lite); [AA attributed HLE **18.8%**, CritPt **0.0%**, Intelligence Index **22.2**, Omniscience Accuracy **29.5%**](https://benchlm.ai/models/gemini-3-5-flash-lite). These limit hard scientific reasoning despite high GPQA.

Coding:

- [Google SWE-bench Pro Public **54.2%**, TB2.1 **54.0%**](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/); [Vals SWE-bench Verified **75.00%** on full evaluation, LiveCodeBench **79.01% ±1.10**, Vibe Code v1.1 **37.16% ±4.63**](https://www.vals.ai/models/google_gemini-3.5-flash-lite). SWE Verified 75% and SWE-Pro 54.2% are distinct datasets; Vals Index's 68.63% is a *subset* score.

Long context / multimodal:

- [Google GDM-MRCR v2 eight-needle **72.2% average at 128K / 21.3% pointwise at 1M**](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/); usable full-window retrieval is far below capacity. [AA-LCR **76.0%**](https://benchlm.ai/models/gemini-3-5-flash-lite) uses another eval.
- [Google CharXiv **74.5% without tools / 76.5% with tools**](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/); [Vals MMMU-Pro **83.58% ±0.89**](https://www.vals.ai/models/google_gemini-3.5-flash-lite) and [AA MMMU-Pro **79%**](https://benchlm.ai/models/gemini-3-5-flash-lite) are separate visual runs.

### Normalized scores (1–100)

- **Tool use: 70/100.** OSWorld-Verified 74% and TB2.1 ~50–54% support lighter agents; Vals migration 6.15%/Harvey 0% cap complex work.
- **Reasoning: 75/100.** GPQA 83.8%, HLE 18.8% and CritPt 0% describe a fast generalist rather than expert science model.
- **Context window: 88/100.** 1M/64K capacity but only 21.3% pointwise MRCR at 1M.
- **Multimodal: 92/100.** Native text/image/audio/video inputs and MMMU ~79–84%; text-only output and provider exposure limitations.
- **Coding: 74/100.** SWE-Pro 54.2%, SWE Verified 75%, LCB 79%; Vibe Code 37% and ProgramBench 0% constrain autonomy.
- **Cost efficiency: 87/100.** $0.30/$2.50 and cache discount suit volume workloads; no verified current $0 Console tier for this ID.
- **Overall Score: 80/100.** (70 + 75 + 88 + 92 + 74) / 5 = 79.8, half-up 80; useful inexpensive multimodal everyday assistant with full-window retrieval and hard coding tested independently.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh Google primary card and current provider rates compared with independent Vals and attributed AA results; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
