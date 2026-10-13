# Gemini 3 Flash — findings by GPT 6 Sol

- Source: Google DeepMind (`gemini-3-flash-preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's December 2025 fast, natively multimodal Gemini 3 preview for interactive coding and analysis, distinct from subsequent 3.5/3.6 Flash releases ([Google launch](https://blog.google/products/gemini/gemini-3-flash/)).
- **Provider / access:** Google Gemini API **`gemini-3-flash-preview`** and OpenCode Zen **`opencode/gemini-3-flash`**, which uses the Google Generative AI interface at `https://opencode.ai/zen/v1`, **not** Chat Completions ([Google launch](https://blog.google/products/gemini/gemini-3-flash/), [Zen listing](https://pi.dev/models/opencode/gemini-3-flash)).
- **Release / knowledge:** December 17, 2025 ([Google](https://blog.google/products/gemini/gemini-3-flash/)); [AA's non-reasoning preview](https://artificialanalysis.ai/models/gemini-3-flash) lists January 2025 cutoff, but an exact official cutoff for all configurations was not confirmed here.
- **IDs:** `gemini-3-flash-preview` (first-party preview), `opencode/gemini-3-flash` (Zen route); track version/effort, as AA's **non-reasoning** entry is not Google's highest-thinking-level score.
- **Context window:** [Zen](https://pi.dev/models/opencode/gemini-3-flash) advertises **1,048,576 total / 65,536 max output**; [Vals](https://www.vals.ai/models/google_gemini-3-flash-preview) rounds to 1M / 66K.
- **Modalities:** Google native model accepts text/image/audio/video in → text out ([Google](https://blog.google/products/gemini/gemini-3-flash/), [AA](https://artificialanalysis.ai/models/gemini-3-flash)); Zen advertises only **text/image input**, reasoning and tool use. No native speech/video output for this general model.
- **Pricing (as of 2026-10-13):** [Google launch](https://blog.google/products/gemini/gemini-3-flash/) and [Zen listing](https://pi.dev/models/opencode/gemini-3-flash) quote **$0.50 input / $3 output per 1M**, with [Zen cached input $0.05](https://pi.dev/models/opencode/gemini-3-flash); Google audio-input price **$1/M**. Google Gemini app's free consumer access does **not** demonstrate a free Zen route for this ID.
- **Architecture:** Proprietary model; parameter count undisclosed ([AA](https://artificialanalysis.ai/models/gemini-3-flash)).

### Raw benchmarks found

Google's [December launch](https://blog.google/products/gemini/gemini-3-flash/) reports high-thinking capabilities; [Vals](https://www.vals.ai/models/google_gemini-3-flash-preview) explicitly uses **high reasoning** with `gemini-3-flash-preview`. [AA's visible Gemini 3 Flash page](https://artificialanalysis.ai/models/gemini-3-flash) explicitly says **non-reasoning** and its Intelligence Index **18 is estimated**, so its AI-index/HLE scores should not be treated as high-effort findings. BenchLM's `gemini-3-flash` combines attributed results with differing efforts and is cited only where labeled.

Agent / tool use:

- [Vals Terminal-Bench 2.1 **53.93% ±1.30**, Finance Agent v2 **42.55% ±0.43**, Code Migration **6.39% ±1.09**, SAGE **51.85% ±3.40**, Harvey Legal Agent **0.00%**](https://www.vals.ai/models/google_gemini-3-flash-preview). [Claw-Eval **49.2%**](https://claw-eval.github.io/) is attributed in [BenchLM](https://benchlm.ai/models/gemini-3-flash); check exact agent/harness before comparing.
- No verified public MCP Atlas / Toolathlon / OSWorld-Verified figure found for this exact original preview ID in the reviewed sources; do not import later Flash's scores.

Reasoning / knowledge:

- [Google GPQA Diamond **90.4%** and HLE **33.7% without tools**](https://blog.google/products/gemini/gemini-3-flash/) for the launch's high-thinking configuration; independent [Vals high-effort GPQA **87.88% ±1.64**, MMLU Pro **88.59% ±0.32**](https://www.vals.ai/models/google_gemini-3-flash-preview).
- [AA non-reasoning (different configuration) HLE **15.0%**, CritPt **1.4%**, estimated Intelligence Index **18**](https://benchlm.ai/models/gemini-3-flash). Never compare those directly to Google's high-thinking HLE as if they were repeat trials.

Coding:

- [Google SWE-bench Verified **78%**](https://blog.google/products/gemini/gemini-3-flash/); [Vals SWE-bench **75.00% ±1.94**, LiveCodeBench **85.59% ±1.00**, Vibe Code Bench v1.1 **20.20% ±3.95**, ProgramBench **0.00%**](https://www.vals.ai/models/google_gemini-3-flash-preview). SWE-bench 75–78% does not mean complex greenfield app building will succeed.

Long context / multimodal:

- Native/Zen 1M-token capacity and 65K output are documented ([Zen](https://pi.dev/models/opencode/gemini-3-flash)); full-window MRCR or GraphWalks numeric result for this exact preview **not verified** in reviewed accessible sources. [AA non-reasoning LCR **55.3%**](https://benchlm.ai/models/gemini-3-flash) is a different test/effort setting.
- [Google MMMU-Pro **81.2%**](https://blog.google/products/gemini/gemini-3-flash/); [Vals MMMU-Pro **87.63% ±0.79**](https://www.vals.ai/models/google_gemini-3-flash-preview). Native audio/video input is documented at Google but not advertised in Zen's client manifest.

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 ~54% and Claw-Eval 49.2% show useful basic tools; migration 6.39%, Harvey 0% and missing hard-agent checks cap reliability.
- **Reasoning: 80/100.** Google's high-thinking GPQA 90.4% and HLE 33.7% are good for Flash; AA nonthinking index 18 and CritPt 1.4% reveal effort-sensitive limits.
- **Context window: 90/100.** 1M/65K nominal capacity with no confirmed full-window retrieval benchmark; AA nonthinking LCR 55.3% tempers extrapolation.
- **Multimodal: 94/100.** Native image/audio/video input with MMMU-Pro 81–88%, but Zen only advertises text/image and output is text-only.
- **Coding: 76/100.** SWE Verified 75–78% and LiveCodeBench 85.6% are good; Vibe Code 20.2% and ProgramBench 0% limit autonomous development.
- **Cost efficiency: 85/100.** $0.50/$3 and cached $0.05 on Zen are affordable; no verified free Zen entitlement for the exact route.
- **Overall Score: 82/100.** (72 + 80 + 90 + 94 + 76) / 5 = 82.4, half-up 82; good quick multimodal analysis/short coding when effort and provider modality are clear.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Google announcement and Zen provider specs compared with Vals and AA; non-reasoning vs high effort separated; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
