# Gemini 3.7 Flash — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse model yet" for coding and agents — an algorithmic refinement of 3.6 Flash (not a new base model), shipped three weeks after it at half the original 3.6 price; superseded by 3.8 Flash on 2026-09-02 (3.7 routes to 3.8 since 2026-10-08).
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.7-flash` stable), Vertex AI, Gemini App (Spark agent), Google Antigravity (default there), Gemini Enterprise Agent Platform, Android Studio. GenerateContent API.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff March 2026 (some domains January 2025, per model card).
- **IDs:** `gemini-3.7-flash` (stable); `google/gemini-3.7-flash` (OpenRouter).
- **Context window:** 1,048,576 tokens; 64K output ceiling.
- **Modalities:** Text, image, audio, video, PDF in; text out; customizable thinking configurations; tool calls, computer use; no Live API / image / audio generation.
- **Pricing (as of 2026-11-05):** $0.75 / $3.75 per 1M in/out introductory through 2026-12-31, then $1.50 / $7.50 from 2027-01-01; batch mode 50% off. No free API tier verified.
- **Architecture:** Proprietary, params not disclosed; based on Gemini 3.6 Flash.

### Raw benchmarks found

Official blog (2026-08-13) + model card cross-checked against DataCamp, TensorFeed, aireleasetracker, BenchLM, AA, apidog, codersera, emergent; conflicts listed side by side:

Agent / tool use:

- AutomationBench: **30.4%** (3.6 Flash 17.0%) (Google blog)
- WebDev Arena: **1588 Elo** vs 3.6's 1538 (Google blog)
- Terminal-Bench 2.1: **85.8%** (aireleasetracker); TB 3.0: 14.9% (aireleasetracker)
- Claw-Eval / OSWorld: no verified public score found for this ID

Reasoning / knowledge:

- HLE (Verified): **53.6%** (aireleasetracker)
- GDP.pdf: **34.0%** (3.6: 22.0%) (Google blog); Harvey LAB-AA: **90.7%** (DataCamp)
- Artificial Analysis Intelligence Index: **56 at high** (userightai/emergent/apidog; 3.8 Flash = 59) vs **39 on the AA (High) model page** vs **40.93 on v4.3.2** (codersera) — major version drift, all cited
- GPQA / LCR / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **65.3%** (3.6: 49.0/48.6 — +16 points) (Google blog / DataCamp / ai-model-timeline — minor 48.6 vs 49.0 predecessor conflict)
- FrontierCode 1.1 Main: **43.6%** (3.6: 34.4%) (Google blog)
- SWE-bench Verified: no AA/independent score exists for Flash line (TensorFeed caveat); no verified number cited

Long context:

- GDM-MRCR v2: **97.0% at 128K** (DataCamp/TensorFeed) inside the 1M window; no verified score at 512K+

Speed: ~313–340 output tok/s (AA/eesel/digitalapplied) — fastest measured at launch.

### Normalized scores (1–100)

- **Tool use: 84/100.** AutomationBench 30.4% nearly doubled over 3.6 and WebDev Elo 1588 lead the Flash tier; mid-tier absolute numbers keep it below Pro-class.
- **Reasoning: 83/100.** HLE-Verified 53.6% and GDP.pdf 34.0% are strong for the price tier; AA Index readings drift 39–56 across versions — scored on the corroborated 56-at-high reading with drift flagged.
- **Context window: 96/100.** 1M window / 64K out in the 95–100 tier; MRCR 97.0% is at 128K, below the 512K+ bar for 100.
- **Multimodal: 92/100.** Full text/image/audio/video/PDF input, text out — top 90–100 band.
- **Coding: 86/100.** DeepSWE 65.3% (+16 over 3.6) and FrontierCode 43.6% lead the Flash class; TB 2.1 85.8%; trails 3.8 Flash (73.7% DeepSWE) and Pro-tier models.
- **Cost efficiency: 92/100.** $0.75/$3.75 intro at the ~$0.60/$2.20 ≈ 92 band, fastest measured throughput; time-limited — doubles 2027-01-01, and 3.7 routes to 3.8 since 2026-10-08.
- **Overall Score: 88/100.** Half-up mean of (84 + 83 + 96 + 92 + 86) / 5 = 88.2 → 88. Best fit: high-volume coding/agent workhorse at promo pricing; use 3.8 Flash (same price, higher scores) for new work.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official Google blog fetched, 2026-11-05 UTC); official blog/model card prioritized, cross-checked against DataCamp, TensorFeed, aireleasetracker, BenchLM, AA, apidog, codersera, emergent.sh; conflicting figures (AA Index 56 vs 39 vs 40.93; DeepSWE predecessor 49.0 vs 48.6) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 3.7 Flash — Google blog (official, 2026-08-13)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
  - [Gemini 3.7 Flash — Model Card, Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [Gemini 3.7 Flash — Gemini API docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
  - [DataCamp — Gemini 3.7 Flash features, benchmarks, pricing](https://www.datacamp.com/blog/gemini-3-7-flash)
  - [TensorFeed — 3.7 Flash benchmarks (DeepSWE 65.3, MRCR 97.0 @128K, no AA SWE-V caveat)](https://tensorfeed.ai/models/gemini-3-7-flash)
  - [Artificial Analysis — 3.7 Flash (high) model page (Index 39 reading)](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [AA — 3.8 Flash article (3.7 at 56, 3.8 at 59)](https://artificialanalysis.ai/articles/gemini-3-8-flash)
  - [codersera — 3.8 vs 3.7 on AA v4.3.2 (40.93 vs 39.06)](https://codersera.com/blog/gemini-3-8-flash-vs-3-7-flash-2026/)
  - [aireleasetracker — 3.7 Flash (HLE 53.6%, TB 2.1 85.8%)](https://aireleasetracker.com/model/google/gemini-3-7-flash)
  - [BenchLM — gemini-3.7-flash](https://benchlm.ai/models/gemini-3-7-flash)
  - [Ars Technica — 3.7 Flash three weeks after previous release](https://arstechnica.com/ai/2026/08/google-announces-gemini-3-7-flash-just-three-weeks-after-previous-release/)
