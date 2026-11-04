# Gemini 3 Pro — findings by Kimi K3.1 Pro

- Source: Google (`gemini-3-pro-preview`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview)
- **Short description:** Google's November 2025 flagship multimodal reasoning model, designed for agentic coding, long-context work, and complex text/image/audio/video understanding. This report covers the original Gemini 3 Pro Preview, not Gemini 3.1 Pro or the separate Gemini 3 Deep Think mode.
- **Provider / access:** Historically available through the Gemini API in AI Studio, Vertex AI, Gemini CLI, Google Antigravity, and third-party development tools. Google shut down `gemini-3-pro-preview` on 2026-03-09; this is therefore a historical evaluation, not a currently available API recommendation.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff January 2025. Google's deprecation table lists `gemini-3.1-pro-preview` as replacement, while the current archived model page recommends Gemini 4 Argon.
- **IDs:** Google API `gemini-3-pro-preview`; OpenRouter route `google/gemini-3-pro-preview` was listed historically. No free OpenCode Zen ID was verified.
- **Context window:** 1,048,576 input tokens and 65,536 output tokens, verified in Google's archived model documentation.
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, function calling, structured outputs, code execution, caching, Batch API, file/search/URL grounding supported. The API model does not support image/audio generation, Live API, or native computer use.
- **Pricing (historical launch pricing):** Up to 200K prompt tokens: $2 input / $12 output / $0.20 cached input per 1M tokens. Above 200K: $4 input / $18 output / $0.40 cached input per 1M. The API is now shut down, so these are not current purchasable rates.
- **Architecture:** Proprietary; parameter count and weights not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google launch evaluation).
- Terminal-Bench 2.1: **73.9% ± 2.5% at high reasoning with Terminus 2** (official Terminal-Bench leaderboard; a different version and harness from the launch result). BenchmarkList's preserved run reports 73.9% ± 1.3%, Pass@2 81.3%, and 445 scored trials; the confidence-interval discrepancy is retained.
- Berkeley Function-Calling Leaderboard: **72.5% overall**, including 60.8% multi-turn and 83.1% live accuracy (source-linked 2026-05-27 record).
- Tau2-Bench Telecom: **87.1% success** (source-linked 2026-06-10 record).
- MCP Atlas: **70.3%** (source-linked 2026-05-06 record).
- Vending-Bench 2: **$5,478.16 final account value across five epochs** (2026-10-03 record); Google's launch post separately states that Gemini 3 Pro led this long-horizon planning evaluation at launch.

Reasoning / knowledge:

- GPQA Diamond: **91.9% at launch**; later high-reasoning source-linked runs report **91.7%** and **90.8%**. Different runs are preserved rather than averaged.
- Humanity's Last Exam: **37.5% without tools at launch**; a later source-linked record reports **39.7%**, while Artificial Analysis' 2026-07-21 composite record used **37.2%**.
- Artificial Analysis Intelligence Index: **39.55** in the preserved 2026-07-21 evaluation, with SciCode 56.1%, AA-LCR 70.7%, AA-Omniscience 15.8, HLE 37.2%, GPQA 90.8%, and CritPt 9.1%. The current deprecated-model page no longer publishes an updated index.
- MathArena Apex: **23.4%** (Google launch evaluation).
- SimpleQA Verified: **72.1%** (Google launch evaluation).
- Gemini 3 Deep Think's HLE 41.0%, GPQA 93.8%, and ARC-AGI-2 45.1% are explicitly excluded from Gemini 3 Pro's normalized score because Deep Think is a separate enhanced reasoning mode.

Coding:

- SWE-bench Verified: **76.2% at launch**; Artificial Analysis' later high-reasoning run reports **76.4%**, and the public SWE-bench leaderboard lists **77.4% with live-SWE-agent**. Harnesses differ, so the results are not silently reconciled.
- LiveCodeBench: **86.4% at high reasoning** (source-linked 2026-07-28 run).
- Terminal-Bench 2.1: **73.9% at high reasoning with Terminus 2**, as detailed above.
- SciCode: **56.1%** in Artificial Analysis' preserved composite record.

Long context:

- AA-LCR: **76.0% at high reasoning** in the later source-linked record; Artificial Analysis' earlier composite run reports **70.7%**. Dates/runs differ.
- MMLongBench-Doc: **60.5% accuracy** (source-linked 2026-05-06 record).
- The 1,048,576-token input limit is verified, but no exact-ID public MRCR or Graphwalks series was found in the cited sources.

Multimodal:

- MMMU-Pro: **81.0% at launch**; a later high-reasoning run reports **87.5%**. These are separate dated evaluations.
- Video-MMMU: **87.6%** (Google launch evaluation).
- MMSI-Bench: **49.2% average accuracy** (source-linked 2026-05-28 record).
- MMLongBench-Doc: **60.5% accuracy**, also relevant to long-context document understanding.
- Google's archived documentation verifies text, image, video, audio, and PDF input with text-only output.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 73.9%, Tau2 Telecom 87.1%, and solid function-calling results demonstrate strong tool use; MCP Atlas 70.3% and weaker long-horizon consistency relative to newer frontier models cap the score.
- **Reasoning: 91/100.** GPQA 91.9%, HLE 37.5% without tools, and MathArena Apex 23.4% were frontier-class at launch; later HLE/CritPt results and the older knowledge cutoff cap it against current flagships.
- **Context window: 91/100.** The verified 1.05M input window and AA-LCR 70.7–76.0% provide strong long-context evidence, but the absence of an exact-ID MRCR/Graphwalks series limits confidence at the longest lengths.
- **Multimodal: 94/100.** Broad audio/video/PDF/image support, Video-MMMU 87.6%, and MMMU-Pro 81.0–87.5% are excellent; text-only output and mixed specialist spatial/document scores cap the rating.
- **Coding: 89/100.** SWE-bench 76.2–77.4% across distinct harnesses, LiveCodeBench 86.4%, and Terminal-Bench 2.1 73.9% remain strong, though newer models have substantially higher repository-engineering results.
- **Cost efficiency: 80/100.** Historical $2/$12 pricing with 90% cache discounts was competitive for a flagship, but costs doubled above 200K prompts and the API's shutdown eliminates current availability.
- **Overall Score: 90.8/100.** Half-up mean of 89, 91, 91, 94, and 89; best fit as a historical baseline for multimodal and long-context research, not for new API deployments because the model is shut down.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-04
- Method: Independent public internet research using Google's launch post, archived API documentation and deprecation table, Artificial Analysis, the official Terminal-Bench leaderboard, and source-linked BenchmarkList records; scores are normalized 1–100 interpretations, not official vendor scores. Only rows attributable to Gemini 3 Pro/Preview are scored; Deep Think and Gemini 3.1 Pro results are excluded.
- Reference URLs:
  - [Google — A new era of intelligence with Gemini 3](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Google AI — Archived Gemini 3 Pro Preview model documentation](https://aistudio.google.com/docs/models/gemini-3-pro-preview)
  - [Google AI — Gemini API deprecations](https://ai.google.dev/gemini-api/docs/deprecations)
  - [Artificial Analysis — Gemini 3 Pro Preview](https://artificialanalysis.ai/models/gemini-3-pro)
  - [Terminal-Bench — 2.1 leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/2.1?agents=Terminus+2)
  - [BenchmarkList — Gemini 3 source-linked evaluations](https://benchmarklist.com/models/google-gemini-3/)
- Future sources: add a new file next to this one using the same headings.
