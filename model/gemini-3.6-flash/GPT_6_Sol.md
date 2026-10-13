# Gemini 3.6 Flash — findings by GPT 6 Sol

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July 2026 multimodal Flash reasoning model, based on 3.5 Flash but improved for coding, computer use and efficiency ([Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-6-flash/)).
- **Provider / access:** Google Gemini API/AI Studio `gemini-3.6-flash`; [OpenCode Zen `opencode/gemini-3.6-flash`](https://pi.dev/models/opencode/gemini-3-6-flash) uses the **Google Generative AI** API at `https://opencode.ai/zen/v1`, not OpenAI Chat Completions. Zen publishes paid pricing; a currently free Zen tier for this specific ID was **not verified**.
- **Release / knowledge:** July 21, 2026; Google states general cutoff March 2026, some domains only January 2025 ([Google card](https://deepmind.google/models/model-cards/gemini-3-6-flash/)).
- **IDs:** `google/gemini-3.6-flash` and `opencode/gemini-3.6-flash`; not 3.5 Flash or later 3.7/3.8 versions.
- **Context window:** Up to ~1M input context and **65,536 output** ([Google card](https://deepmind.google/models/model-cards/gemini-3-6-flash/), [Zen model listing: 1,048,576](https://pi.dev/models/opencode/gemini-3-6-flash)).
- **Modalities:** Google's native service accepts text, documents, image, audio and video → text output ([Google card](https://deepmind.google/models/model-cards/gemini-3-6-flash/)); Zen's client manifest advertises only text/image input. Reasoning and tool use supported; no native generated speech/video from this model.
- **Pricing (as of 2026-10-13):** [Google card](https://deepmind.google/models/model-cards/gemini-3-6-flash/) and [Zen listing](https://pi.dev/models/opencode/gemini-3-6-flash) show **$1.50 input / $7.50 output / $0.15 Zen cache read per 1M**. [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-6-flash) instead quotes **$0.75/$3.75** on the Google API listing: provider/date-specific pricing must be checked before billing. No verified zero-dollar Zen tier for this version.
- **Architecture:** Proprietary 3.5 Flash-derived model; weights/parameter count unpublished ([Google card](https://deepmind.google/models/model-cards/gemini-3-6-flash/)).

### Raw benchmarks found

Google's [July model-card table](https://deepmind.google/models/model-cards/gemini-3-6-flash/) uses specified harnesses/long-input checkpoints. Independent [Vals](https://www.vals.ai/models/google_gemini-3.6-flash) runs temperature 1/high reasoning; [AA](https://artificialanalysis.ai/models/gemini-3-6-flash) labels high effort and currently shows Index **34** under v4.3.2; [BenchLM](https://benchlm.ai/models/gemini-3-6-flash) aggregates attributed third-party results, not an extra independent test.

Agent / tool use:

- [Google card Terminal-Bench 2.1 **78.0%** (Terminus-2), OSWorld-Verified **83.0%**, GDPval-AA v2 **1421 Elo**, MLE-Bench **63.9%**](https://deepmind.google/models/model-cards/gemini-3-6-flash/); [Vals TB2.1 **73.78% ±1.63**, Finance Agent v2 **56.30% ±0.18**, Code Migration **30.93% ±4.07**, Harvey Legal Agent **3.33%**](https://www.vals.ai/models/google_gemini-3.6-flash).
- OSWorld-Verified is not OSWorld 2.0; Vals' legal and migration benchmarks indicate uneven performance on professional autonomy. No verified Tau3/Claw-Eval result for this exact model ID.

Reasoning / knowledge:

- [Vals GPQA Diamond **93.43% ±1.33**, MMLU Pro **89.28% ±0.30**, LegalBench **86.70% ±0.41**](https://www.vals.ai/models/google_gemini-3.6-flash); [AA GPQA **92.8%**, HLE **40.8%**, CritPt **10.6%**](https://benchlm.ai/models/gemini-3-6-flash) from the AA-attributed benchmark index.
- [ARC Prize verified ARC-AGI-1 **91.2%**, ARC-AGI-2 **60.4%**](https://arcprize.org/results/gemini-3-6-flash) as attributed in BenchLM; methods differ from GPQA/HLE and later model versions.

Coding:

- [Google card SWE-bench Pro (Public) **58.7%**, DeepSWE v1.1 **49.0%**, TB2.1 **78.0%**](https://deepmind.google/models/model-cards/gemini-3-6-flash/). [Vals SWE-bench **79.60% ±1.80**, LiveCodeBench **88.08% ±0.94**, Vibe Code Bench v1.1 **64.00% ±4.29**, ProgramBench **0.00%**](https://www.vals.ai/models/google_gemini-3.6-flash). SWE-bench Pro and SWE-bench Verified are separate datasets.

Long context / multimodal:

- [Google GDM-MRCR v2 eight-needle **91.8% average at 128K**, but **54.0% pointwise at 1M**](https://deepmind.google/models/model-cards/gemini-3-6-flash/): markedly improved over 3.5 Flash, still not faultless at full capacity.
- [Google CharXiv **85.2% without tools / 89.4% with tools**](https://deepmind.google/models/model-cards/gemini-3-6-flash/); [Vals MMMU-Pro **88.38% ±0.77**](https://www.vals.ai/models/google_gemini-3.6-flash) and [AA MMMU-Pro **83.2%**](https://benchlm.ai/models/gemini-3-6-flash) reflect distinct visual evaluation harnesses.

### Normalized scores (1–100)

- **Tool use: 81/100.** TB2.1 73.78–78%, OSWorld-Verified 83% and MLE-Bench 63.9% support agents; Harvey 3.33% and migration 30.93% limit professional autonomy.
- **Reasoning: 84/100.** GPQA 92–93%, ARC-AGI-2 60.4% and HLE 40.8% are strong for Flash; CritPt 10.6% prevents frontier-level extrapolation.
- **Context window: 92/100.** Million-token capacity and 64K output with 91.8% MRCR at 128K, but only 54% at 1M pointwise.
- **Multimodal: 95/100.** Native image/audio/video/document input and strong chart/vision results; Zen advertises only image/text and native output is text-only.
- **Coding: 82/100.** SWE-Pro 58.7%, LiveCodeBench 88%, DeepSWE 49%; ProgramBench 0% caps autonomous codebase reliability.
- **Cost efficiency: 72/100.** Good quality at Zen $1.50/$7.50 with cache discount; AA publishes a cheaper Google API rate, and no free Zen route is verified.
- **Overall Score: 87/100.** (81 + 84 + 92 + 95 + 82) / 5 = 86.8, half-up 87; a strong multimodal and coding-oriented generalist when full-window retrieval and provider pricing are checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Google primary model card and provider listing checked against Vals, AA and attributed ARC results; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
