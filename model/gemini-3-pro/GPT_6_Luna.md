# Gemini 3 Pro

## Model Card

- **Name:** Gemini 3 Pro (preview snapshot)
- **Provider:** Google DeepMind
- **Tracked catalog ID:** `google/gemini-3-pro`
- **Google API model code:** `gemini-3-pro-preview`
- **Release:** November 18, 2025
- **Lifecycle:** Google lists the Gemini API preview as shut down on March 9, 2026, with Gemini 3.1 Pro Preview as its replacement. This report evaluates the retired Gemini 3 Pro snapshot only; it does not transfer results from 3.1 Pro.
- **Inputs / outputs:** Text, image, video, audio, and PDF in; text out.
- **Limits:** 1,048,576 input tokens; 65,536 output tokens.
- **Architecture / access:** Proprietary sparse mixture-of-experts model, available via hosted Google services; weights and parameter count are not public.
- **Launch pricing:** $2 / $12 per million input/output tokens for prompts up to 200K tokens; $4 / $18 above 200K. These are historical launch rates, not a claim that the shut-down API remains purchasable.

**Identity resolution:** Google’s launch materials call the model Gemini 3 Pro, while its contemporaneous Gemini API and evaluation-methodology pages identify the exact model code as `gemini-3-pro-preview`. The catalog ID here omits the upstream `-preview` suffix; the November 18, 2025 release date, product name, specifications, and benchmark snapshot match that single historical model. The separately named Gemini 3.1 Pro Preview is not treated as the same snapshot.

## Raw Benchmarks

Google’s November 2025 evaluation used the Gemini API model code `gemini-3-pro-preview` with default sampling unless stated otherwise. Google reports pass@1 and distinguishes tool-assisted runs from no-tool runs. Its methodology also flags which scores it computed itself and which came from public leaderboards or benchmark publishers.

| Area | Benchmark / setting | Result | Source / notes |
| --- | --- | ---: | --- |
| Reasoning | GPQA Diamond, no tools | 91.9% | Google model card / evaluation table |
| Reasoning | Humanity’s Last Exam, no tools | 37.5% | Google model card; distinct from the tool-assisted result |
| Reasoning | Humanity’s Last Exam, search and code execution | 45.8% | Google model card; tools enabled |
| Reasoning | AIME 2025, no tools / with code execution | 95.0% / 100% | Google evaluation table; settings kept separate |
| Reasoning | ARC-AGI-2, ARC Prize Verified | 31.1% | Google model card |
| Multimodal | MMMU-Pro | 81.0% | Google evaluation table; Google-computed API result |
| Multimodal | Video-MMMU | 87.6% | Google evaluation table; Google-computed API result |
| Multimodal / agents | ScreenSpot-Pro | 72.7% | Google evaluation table; screenshot/function-calling setup, not native computer-use support |
| Coding | LiveCodeBench Pro | 2,439 Elo | Google evaluation table; public leaderboard result |
| Coding / agents | Terminal-Bench 2.0 | 54.2% | Google launch materials / evaluation table |
| Coding / agents | SWE-bench Verified | 76.2% | Google-reported result; its model-card methodology specifies its own single-attempt scaffold and 10-run average |
| Tool use | Vending-Bench 2, mean ending net worth | $5,478.16 | Google evaluation table; higher is better |
| Long context | MRCR v2, 8-needle, 128K average context | 77.0% | Google evaluation table |
| Long context | MRCR v2, 8-needle, 1M pointwise context | 26.3% | Google evaluation table; pointwise result, not directly comparable to the 128K average |
| Factuality | SimpleQA Verified | 72.1% | Google evaluation table; official Kaggle leaderboard |

Independent corroboration:

- **Artificial Analysis (November 18, 2025):** Pre-release evaluation found Gemini 3 Pro Preview leading five of its ten Intelligence Index evaluations, including GPQA Diamond, MMLU-Pro, Humanity’s Last Exam, LiveCodeBench, and SciCode. It reported strong token efficiency relative to Gemini 2.5 Pro, but a 12% higher cost to run its index; its launch-price comparison was $2/$12 at up to 200K context and $4/$18 above that.
- **Vals AI, “Gemini 3 Pro (11/25)”** (Google as default provider; release date November 18, 2025): GPQA Diamond 91.67% ±1.39; MMLU-Pro 90.10% ±0.29; MMMU-Pro 87.51% ±0.80; LiveCodeBench 86.41% ±0.98; SWE-bench 76.40% ±1.90; Terminal-Bench 2.0 55.06% ±5.30. These are Vals’ own runs and remain separate from Google’s headline claims and harnesses.

## Normalized Scores

- **Tool use: 92/100.** Strong function-calling and agent evidence, including 54.2% on Terminal-Bench 2.0 and a leading Vending-Bench 2 result; results remain harness-dependent.
- **Reasoning: 97/100.** Exceptional results across no-tool GPQA, HLE, AIME, and independent Artificial Analysis evaluations.
- **Context window: 94/100.** A genuine 1M-token input limit with strong 128K MRCR v2 performance, tempered by the much lower 1M pointwise retrieval score.
- **Multimodal: 96/100.** Broad text/image/audio/video/PDF inputs and strong image/video reasoning results, independently supported by Vals’ MMMU-Pro run.
- **Coding: 93/100.** High LiveCodeBench Pro, Terminal-Bench, and SWE-bench results; coding-agent scores depend on distinct harnesses and scaffolds.
- **Cost efficiency: 72/100.** Competitive with some premium models, but expensive for a Google flagship at launch, with a higher long-context tier; Artificial Analysis measured higher index-run cost than Gemini 2.5 Pro.
- **Overall Score: 94/100.** Half-up mean of the five quality dimensions: (92 + 97 + 94 + 96 + 93) / 5 = 94.4. Cost efficiency is excluded.

## Agreement Notes

- Benchmarks are dated and attributed to the named publisher. Google’s self-reported evaluations, Artificial Analysis’ pre-release suite, and Vals’ independently run benchmarks are not pooled as if they shared one harness.
- Tool-assisted HLE and AIME results are not presented as no-tool scores. MRCR v2’s 128K average and 1M pointwise figures are explicitly distinct.
- The model card notes general foundation-model limitations, including hallucinations, and occasional slowness or timeouts. The preview’s shutdown also makes this a historical capability report, not current availability guidance.

## Signature

Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-11-01 UTC

Method: Independent public-source research; benchmark scores are attributed to their publisher, settings and dates are kept distinct, and normalized ratings are evidence-weighted judgments rather than raw benchmark percentages.

- Reference URLs: [Google Gemini 3 launch and benchmark summary](https://blog.google/products-and-platforms/products/gemini/gemini-3/); [Google Gemini 3 Pro model card](https://deepmind.google/models/model-cards/gemini-3-pro/); [Google Gemini 3 Pro evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-3-pro/); [Gemini API model page and model code](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-preview); [Gemini API deprecations](https://ai.google.dev/gemini-api/docs/deprecations); [Artificial Analysis independent evaluation](https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know); [Vals AI independent evaluation](https://www.vals.ai/models/google_gemini-3-pro-preview); [Google developer launch and pricing](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-3-developers/).
