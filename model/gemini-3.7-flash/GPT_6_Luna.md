# Gemini 3.7 Flash — findings by GPT-6 Luna

- Source: Google DeepMind / Gemini 3.7 Flash
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 3.7 Flash, the stable/base model (not Gemini 3.8 Flash or any preview route).
- **Short description:** Proprietary multimodal reasoning model for agentic workflows, coding, and interactive video understanding. Google describes it as based on Gemini 3.6 Flash, with configurable thinking levels to trade off quality, latency, and cost. [1]
- **Provider / access:** Google Gemini API and Google Cloud Gemini Enterprise Agent Platform. Lifecycle differs by route: the Gemini Developer API now marks `gemini-3.7-flash` deprecated and automatically routes requests to Gemini 3.8 Flash; Google Cloud's Agent Platform model page separately lists 3.7 Flash as GA with retirement scheduled for 2027-01-28. Do not treat a redirected Developer API call as a fresh 3.7 evaluation. [2][3]
- **Release / knowledge:** Released 2026-08-13. The DeepMind card says its knowledge cutoff is March 2026, with some domains potentially limited to January 2025; these are distinct cutoff statements. [1]
- **IDs:** Stable Google model code `gemini-3.7-flash`; tracked catalog ID `google/gemini-3.7-flash`. [2][3]
- **Context window:** 1,048,576 input tokens; maximum output 65,536 tokens. [1][2]
- **Modalities:** Text, image, audio, video, and PDF input; text output. Supports low/medium/high thinking, function calling, code execution, search grounding, and computer use (preview). Audio generation and the Live API are not supported for this model. [2]
- **Pricing:** DeepMind's model card lists an introductory API price of **$0.75/MTok input and $3.75/MTok output through 2026-12-31**, then **$1.50/$7.50 from 2027-01-01**. Current Developer API requests using the deprecated ID may be routed to Gemini 3.8 Flash, so these are the model-card rates, not a guarantee that a current request still executes 3.7. [1][2][4]
- **Architecture / weights:** Proprietary; no public weights or parameter count. The model card identifies Gemini 3.6 Flash as its base, without publishing further architecture details. [1]

### Raw benchmarks found

Google DeepMind's model card gives results as of August 2026. Google Cloud's developer guide also publishes results for 3.7 Flash, but some same-named benchmark values differ; both are retained below rather than silently merged. [1][3]

Agent / tool use:

- **Terminal-Bench 2.1:** 85.8% in the DeepMind card; 85.1% in Google Cloud's developer guide. The sources do not establish that these scores use the same harness/settings. [1][3]
- **OSWorld 2.0:** 47.9%; **AutomationBench:** 30.4%; **Agent's Last Exam:** 26.3%; **GDPval-AA v2:** 1,525 Elo; **Harvey LAB-AA:** 90.7% on a private set. [1]
- **Terminal-Bench 2.1 (Vals run):** 77.5%, a separate leaderboard/harness result. [5]

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** 56; **HLE-Verified:** 53.6%; **MRCR v2 (8-needle), 128K average:** 97.0%; **BioMysteryBench:** 87.1% human-solvable / 43.5% human-difficult; **LABBench2:** 82.1%. [1]
- Google Cloud's developer guide lists **HLE 45.7%**. This is reported under the shorter HLE label and is not assumed to be the same evaluation as the DeepMind card's HLE-Verified. [3]
- Vals' independent results include **GPQA Diamond 93.94% ±1.49**, **MMLU-Pro 90.12% ±0.30**, and **MMMU-Pro 88.96% ±0.75**. These are Vals-harness scores, distinct from Google's figures and settings. [5]

Coding:

- **DeepSWE v1.1:** 65.3% in the DeepMind card; Google Cloud's guide reports 63.7%. **FrontierCode 1.1 Main:** 43.6%; **Code Arena web development:** 1,588 Elo. [1][3]
- **Vals:** SWE-bench 80.8% using Mini-SWE-agent and LiveCodeBench 88.65% ±0.92. These are independent, scaffold-/harness-specific results and should not be treated as bare-model scores or as directly comparable to Google's benchmarks. [5]

Multimodal / long context:

- **CharXiv:** 84.5% without tools / 88.7% with tools; **LVBench:** 85.4%; **GDP.pdf:** 34.0%. [1]
- The 97.0% MRCR v2 result is for 128K average context, not a demonstrated 1M retrieval score. No exact 1M retrieval result was verified. [1]

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 is 85.8% in Google's card (85.1% in its Cloud guide), with OSWorld 2.0 at 47.9%, AutomationBench at 30.4%, and Agent's Last Exam at 26.3%; strong overall, though the scores and harnesses are not uniformly frontier-level. [1][3]
- **Reasoning: 88/100.** Google's card reports an Intelligence Index of 56, HLE-Verified 53.6%, and 97.0% MRCR v2 at 128K; Vals reports very high GPQA Diamond and MMLU-Pro scores on its own harness. [1][5]
- **Context window: 95/100.** The 1M input limit meets the top context tier; 95 is used rather than 100 because the verified MRCR result is at 128K, not ≥512K. [1][2]
- **Multimodal: 94/100.** Native image, audio, video, and PDF input plus strong chart/video benchmark results fit the project's audio-input multimodal band; output remains text-only. [1][2]
- **Coding: 88/100.** Terminal-Bench 2.1 is 85.8% and DeepSWE v1.1 is 65.3% in the DeepMind card; the Cloud guide reports 85.1% and 63.7%, while FrontierCode 1.1 Main is 43.6%. Vals' stronger SWE-bench/LiveCodeBench results use separate harnesses. [1][3][5]
- **Cost efficiency: 90/100.** The model-card introductory rate of $0.75/$3.75 per MTok is low; the announced standard rate doubles on 2027-01-01. The Gemini Developer API now redirects the deprecated ID, so the introductory 3.7 rate should not be assumed to guarantee access to the 3.7 snapshot. [1][2][4]
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions: `(85 + 88 + 95 + 94 + 88) / 5 = 90`. Cost efficiency is excluded.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-31
- Method: At least three independent searches, followed by direct checks of Google DeepMind's model card and evaluation methodology, Google AI's model/deprecation documentation and pricing page, Google Cloud's model guide, and independent Vals/Artificial Analysis/BenchLM records. Benchmark versions, harnesses, source dates, and the Google Developer API redirect were kept distinct; no scores from Gemini 3.8 Flash or sibling variants were transferred. Normalized ratings are interpretations, not official Google scores.
- Reference URLs:
  - [1] [Google DeepMind: Gemini 3.7 Flash model card (published 2026-08-13)](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [2] [Google AI: Gemini 3.7 Flash model page and current deprecation notice](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
  - [3] [Google Cloud: Gemini 3.7 Flash developer guide and lifecycle](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-7-flash)
  - [4] [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [5] [Vals AI: Gemini 3.7 Flash evaluations](https://www.vals.ai/models/google_gemini-3.7-flash)
  - [6] [Artificial Analysis: Gemini 3.7 Flash profile](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [7] [BenchLM: Gemini 3.7 Flash benchmark index and linked source rows](https://benchlm.ai/models/gemini-3-7-flash)
