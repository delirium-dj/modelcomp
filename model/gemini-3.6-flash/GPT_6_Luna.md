# Gemini 3.6 Flash

## Model Card

- **Name:** Gemini 3.6 Flash
- **Provider:** Google DeepMind
- **Tracked catalog ID:** `google/gemini-3.6-flash`
- **Google Gemini API model ID:** `gemini-3.6-flash` (stable GA model)
- **OpenCode Console model ID / route:** `gemini-3.6-flash`, listed in the official Zen endpoint table at `https://opencode.ai/inference/google/v1beta/models/gemini-3.6-flash`. This verifies the route exists; benchmark scores below are not claims of tests run through Zen.
- **Release:** July 21, 2026 (GA)
- **Knowledge cutoff:** March 2026; Google cautions that some domains may have information closer to January 2025.
- **Inputs / outputs:** Text, image, video, audio, and PDF in; text out. 1,048,576 input tokens and 65,536 output tokens.
- **Tools:** Function calling, code execution, search grounding, URL context, file search, structured outputs, and computer use are supported. Google describes computer use as a client-side tool.
- **Architecture / access:** Proprietary hosted model. Google says it is based on Gemini 3.5 Flash; weights and parameter count are not disclosed.
- **Google Gemini API pricing (checked 2026-11-01):** Free tier is listed as free of charge. Paid Standard is currently $0.75/$3.75 per million input/output tokens through December 31, 2026, then $1.50/$7.50 from January 1, 2027; cached input is $0.075/$0.15 over the same periods. OpenCode Console separately lists $1.50/$7.50. The free tier has different data-use terms; Google says paid-tier content is not used to improve its products.

Google's Gemini Enterprise Agent Platform documentation lists retirement of its `gemini-3.6-flash` deployment on November 19, 2026, while the separate Gemini API model page still describes the model as available for production use. This is a service-specific lifecycle notice, not evidence that the Gemini API or all downstream routes shut down on that date.

## Raw Benchmarks

Google's July 2026 model card gives pass@1 results unless noted, and directs readers to its evaluation methodology for settings. Google-computed results, public-leaderboard results, and third-party evaluations below are kept separate.

| Area | Benchmark / setting | Result | Source / notes |
| --- | --- | ---: | --- |
| Coding / agents | SWE-Bench Pro (Public) | 58.7% | Google model card; Gemini result self-computed using an internal Antigravity harness following the benchmark's methodology |
| Coding / agents | DeepSWE v1.1 | 49% | Google model card; highest-thinking result from the public Datacurve leaderboard |
| Coding / agents | Terminal-Bench 2.1 | 78.0% | Google model card; self-computed with Terminus-2 harness |
| Coding / research | MLE-Bench | 63.9% | Google model card; self-computed on the canonical Partial 30 subset |
| Agentic computer use | OSWorld-Verified | 83.0% | Google model card; self-computed, five single-attempt runs using the official methodology |
| Agentic knowledge work | GDPval-AA v2 | 1,421 Elo | Google model card; sourced from the Artificial Analysis public leaderboard |
| Vision / chart reasoning | CharXiv Reasoning, no tools / with tools | 85.2% / 89.4% | Google model card; model-computed results; tool-enabled setting uses search and code execution |
| Long context | GDM-MRCR v2, 8-needle, 128K average context | 91.8% | Google model card; cumulative average-context result |
| Long context | GDM-MRCR v2, 8-needle, 1M pointwise context | 54.0% | Google model card; pointwise 1M result, not directly comparable with the 128K average |
| Reasoning | GPQA Diamond, high reasoning | 93.43% ± 1.33 | Vals AI independent evaluation; temperature 1, high reasoning effort, up to 65K output tokens |
| Reasoning | Humanity's Last Exam | 38% | Artificial Analysis, July 21, 2026 pre-release evaluation; high reasoning, independent Intelligence Index suite |
| Reasoning | Artificial Analysis Intelligence Index | 50 | Artificial Analysis, July 21, 2026; high reasoning; matched Gemini 3.5 Flash at the time |
| Multimodal | MMMU-Pro | 88.38% ± 0.77 | Vals AI independent evaluation; temperature 1, high reasoning effort |
| Coding | LiveCodeBench | 88.08% ± 0.94 | Vals AI independent evaluation; benchmark score shown separately from Google's agentic harnesses |
| Coding | SWE-bench | 79.60% ± 1.80 | Vals AI model page; its general SWE-bench result, not Google's SWE-Bench Pro score or the Vals Index Verified subset |
| Coding / agents | Terminal-Bench 2.1 | 73.78% ± 1.63 | Vals AI; three full trials, distinct from Google's Terminus-2 harness result |
| Efficiency | Artificial Analysis Index task time / cost | 1.3 min / $0.50 | Artificial Analysis July 2026; suite average at its then-listed $1.50/$7.50 rates, not a universal per-request cost |

Independent evaluation notes:

- **Artificial Analysis (July 21, 2026):** Reports 304 output tokens/second in its pre-launch testing and 17% fewer output tokens than Gemini 3.5 Flash on its Intelligence Index. Its index score is 50, with HLE at 38%; its measured average time per index task was 1.3 minutes and cost $0.50 at the then-listed rates.
- **Vals AI (July 21, 2026):** Evaluated the Google model using high reasoning effort and up to 65K output tokens. It reports a 55.35% Vals Index score (#13/43 at the time), 77.45% on its Vals Index SWE-bench Verified subset, and 73.78% across three Terminal-Bench 2.1 trials. These are Vals-specific runs and subsets; they are not substituted for Google's results.

## Normalized Scores

- **Tool use: 90/100.** Strong verified computer-use and agentic-terminal results, with provider/harness variation between Google's 78.0% and Vals' 73.78% Terminal-Bench 2.1 results.
- **Reasoning: 90/100.** High GPQA Diamond and a 50-point Artificial Analysis Intelligence Index result; HLE at 38% and the index result are below the most advanced reasoning tier.
- **Context window: 91/100.** Supports 1M tokens and scores 91.8% on the 128K-average GDM-MRCR v2 setting, but 54.0% on the distinct 1M pointwise setting limits confidence at the maximum length.
- **Multimodal: 94/100.** Broad audio, image, video, and PDF inputs, plus strong independent MMMU-Pro and Google CharXiv results; text is the only output modality.
- **Coding: 92/100.** Strong public SWE-Bench Pro, DeepSWE, Terminal-Bench, MLE-Bench, and independent LiveCodeBench results; agent harnesses differ.
- **Cost efficiency: 92/100.** The temporary Google direct-API rate is low, but doubles in 2027; OpenCode Console currently lists the higher $1.50/$7.50 rate. Free-tier data-use terms and route-specific prices matter.
- **Overall Score: 91/100.** Mean of the five quality dimensions, excluding cost: (90 + 90 + 91 + 94 + 92) / 5 = 91.4, rounded to 91.

## Agreement Notes

- Google's July model card and launch announcement describe the Google model/API; Vals and Artificial Analysis independently evaluate it. OpenCode documentation verifies a Console route only. No benchmark is attributed to an OpenCode-hosted run.
- Google API paid pricing is promotional through December 31, 2026. The launch/model-card and OpenCode Console rates are $1.50/$7.50; the API page currently lists $0.75/$3.75 until year-end. These refer to different dates and/or channels.
- The 128K-average and 1M-pointwise MRCR v2 results are separate settings. Likewise, Google SWE-Bench Pro, Vals SWE-bench, and Vals' Verified subset are not interchangeable.
- Google identifies hallucinations as a general limitation and notes possible slowness or timeouts. Google's Cloud Enterprise Agent Platform retirement date is distinct from Gemini API availability.

## Signature

Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-11-01 UTC

Method: Independent public-source research; exact model IDs and service routes were checked, and scores are attributed to their publishers with benchmark settings kept distinct. Normalized ratings are evidence-weighted judgments, not raw benchmark percentages.

- Reference URLs: [Google Gemini 3.6 Flash launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/); [Google model card](https://deepmind.google/models/model-cards/gemini-3-6-flash); [Google evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-3-6-flash); [Google Gemini API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash); [Google API pricing](https://ai.google.dev/gemini-api/docs/pricing); [Google Cloud lifecycle page](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-6-flash); [OpenCode Zen model endpoints and pricing](https://opencode.ai/docs/zen); [Artificial Analysis evaluation](https://artificialanalysis.ai/articles/gemini-3-6-flash-3-5-flash-lite-halving-time); [Vals AI evaluation](https://www.vals.ai/models/google_gemini-3.6-flash).
