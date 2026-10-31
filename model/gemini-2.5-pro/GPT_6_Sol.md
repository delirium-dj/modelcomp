# Gemini 2.5 Pro — findings by GPT 6 Sol

- Source: Google DeepMind (`gemini-2.5-pro`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's proprietary thinking model for complex reasoning, coding and multimodal analysis of long documents. This report scores the **stable** `gemini-2.5-pro` ID, not the March 2025 experimental preview or a newer Gemini generation ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro), [July technical report, model-ID table](https://arxiv.org/html/2507.06261v1)).
- **Provider / access:** First-party Gemini API `gemini-2.5-pro` through `generateContent` at `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent`, also on Vertex AI ([model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro), [GA announcement](https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-flash-lite-flash-pro-ga-vertex-ai)). Google currently **limits access to users who previously used the 2.5 models**, but says the API models remain served and are not deprecated; do not promise new-user access. Artificial Analysis's *benchmark profile* is deprecated, which is a different claim ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro), [Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-pro)).
- **Release / knowledge:** Experimental preview March 25, 2025; stable/GA June 2025 ([Google launch](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/), [Google GA announcement](https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-flash-lite-flash-pro-ga-vertex-ai)). Knowledge cutoff **January 2025** ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)).
- **IDs:** `gemini-2.5-pro` (stable Google Gemini API/Vertex AI); no separately verified OpenCode Zen Free ID. Earlier experimental-preview IDs are not interchangeable with this stable ID ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)).
- **Context window:** **1,048,576 input tokens / 65,536 output tokens** per [Google's current model card](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro); this is an input capacity, not a guarantee of accurate reasoning throughout a million tokens.
- **Modalities:** Text, image, audio, video and PDF input; **text output only**. Thinking, function calling, code execution, structured output, search/Maps grounding, URL context and caching are supported; native image/audio generation and Live API are **not** supported for this ID ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)).
- **Pricing (as of 2026-10-31):** Standard paid Gemini API, per million tokens: **$1.25 input / $10 output including thinking / $0.125 cached input** for prompts up to 200K; **$2.50 / $15 / $0.25** for prompts over 200K. Cache storage is additionally **$4.50 per million tokens per hour**; Batch/Flex token charges are half the standard paid input/output rates. Google's pricing table lists a **free tier for eligible users**, with content used to improve products; paid-tier content is not used for product improvement. Existing-user-only access and free-tier limits make the $0 tier unsuitable as an assumption for a new project ([official pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-pro), [access note](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)). Cost score below uses standard paid pricing.
- **Architecture:** Proprietary; parameter count/active parameters and weights not publicly specified in the [technical report](https://arxiv.org/html/2507.06261v1). No public weights or license to self-host.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.0:** **30.34% ±4.90**, #44/67 on [Vals AI's independent evaluation](https://www.vals.ai/models/google_gemini-2.5-pro); a weaker modern terminal-agent showing than the broad built-in tool feature list might suggest. Vals lists Google as the default provider, temperature 1 and 65,536 max output, while warning that individual benchmarks can use different configurations.
- **SWE-bench Verified:** Google's [July report on the stable API ID](https://arxiv.org/html/2507.06261v1) reports **59.6% single attempt**, **67.2% multiple attempts**; the latter should not be presented as a single-try result or directly compared across different agent scaffolds. The **63.8%** cited in Google's [March launch](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/) concerns the earlier experimental release with a custom agent setup, not a new stable-model result. On [Vals' independently configured SWE-bench](https://www.vals.ai/models/google_gemini-2.5-pro), it scores **54.40% ±2.23**, #82/88; differences in harness, attempts and evaluation timing explain why the numbers should not be equated.
- **Tau3-Banking, GDPval-AA and Claw-Eval for this exact stable ID:** no verified public score found in the checked primary/independent sources. Search grounding and function calling are API capabilities, not measured success rates ([Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)).

Reasoning / knowledge:

- Google's [July 2025 technical-report evaluation of `gemini-2.5-pro`](https://arxiv.org/html/2507.06261v1): **GPQA Diamond 86.4%**, **AIME 2025 88.0%**, **Humanity's Last Exam 21.6% without tools**, **SimpleQA 54.0%**, and **FACTS Grounding 87.8%**. These are period-specific vendor-run results, not evidence of current frontier leadership.
- [Vals AI](https://www.vals.ai/models/google_gemini-2.5-pro) also measures **MedCode 50.59% ±2.11** (#17/107), **MedScribe 73.55% ±1.91** and **MortgageTax 68.92% ±0.91**; task mix and harness differ from Google's science/math battery. [Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-pro) currently provides **no Intelligence Index score** because the profile is deprecated for ongoing intelligence evaluation; do not fill the gap with a score from an experimental snapshot.

Coding:

- Google's [stable-ID July technical report](https://arxiv.org/html/2507.06261v1) measures **LiveCodeBench 74.2%** (January–May 2025 slice) and **Aider Polyglot 82.2%** (mean of three trials), alongside the **59.6%/67.2%** single-/multi-attempt SWE-bench Verified results above. These 2025 tasks are not comparable to later benchmark versions without reruns.
- [Vals AI](https://www.vals.ai/models/google_gemini-2.5-pro) instead reports **54.40% ±2.23 SWE-bench**, **30.34% ±4.90 Terminal-Bench 2.0** and **0.40% ±0.40 Vibe Code Bench v1.1** (#119/123). The near-zero Vibe result on its distinct build-and-test workload contrasts with Google's older coding claims; this is a warning about evaluation transfer, not proof that the model cannot code. No verified public DeepSWE or current SciCode score found for the stable ID.

Long context / vision:

- Google's [stable-ID technical report](https://arxiv.org/html/2507.06261v1): **LOFT hard retrieval 87.0% up to 128K / 69.8% at exactly 1M**; **MRCR-V2 (eight needles) 58.0% up to 128K / 16.4% at exactly 1M**. The sharp MRCR drop limits long-context *reliability* despite the advertised 1M input limit. The report also records **MMMU 82.0%** and **BetterChartQA 72.4%**; image quality is measured, while native audio/video input support is documented rather than independently scored here.

### Normalized scores (1–100)

- **Tool use: 75/100.** Function calling and grounded tools are supported, but Vals' 30.34% terminal-agent result and missing exact-ID Tau3/GDPval evidence limit confidence in long-horizon autonomy.
- **Reasoning: 84/100.** Google's stable-model GPQA 86.4%, AIME 88.0% and HLE 21.6% demonstrate strong 2025 reasoning; no maintained AA Intelligence Index or current independent general-reasoning battery warrants a frontier-2026 score.
- **Context window: 95/100.** Full 1M input meets the ≥1M tier, but MRCR-V2 falls to 16.4% at 1M, far below the near-limit retrieval bar for 100.
- **Multimodal: 93/100.** Text, images, audio, video and PDF in, with strong MMMU; text-only output and no Live/native generation prevent a perfect score.
- **Coding: 79/100.** Stable-ID LiveCodeBench 74.2% and Aider 82.2% are strong for 2025; independent Vals SWE-bench/Terminal-Bench and especially Vibe results cap the cross-workload estimate.
- **Cost efficiency: 74/100.** Standard paid $1.25/$10 rises to $2.50/$15 above 200K input, and caching has storage charges; the advertised free tier is restricted to eligible existing users and entails product-improvement data use.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions: (75 + 84 + 95 + 93 + 79) / 5 = 85.2; best for existing-access users who value broad multimodal inputs and long documents over current agentic-coding leadership.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Independent web research against Google's stable-model documentation and July paper, contrasted with Vals' separate evaluations and Artificial Analysis's deprecated profile; scores are normalized interpretations, not official provider scores.
- Reference URLs:
  - [Google Gemini 2.5 Pro API model page and access note](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
  - [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-pro)
  - [Google DeepMind, Gemini 2.5 technical report (July 2025)](https://arxiv.org/html/2507.06261v1)
  - [Google Cloud stable/GA announcement (June 2025)](https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-flash-lite-flash-pro-ga-vertex-ai)
  - [Google March experimental-preview announcement](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/)
  - [Vals AI independent Gemini 2.5 Pro benchmark results](https://www.vals.ai/models/google_gemini-2.5-pro)
  - [Artificial Analysis Gemini 2.5 Pro profile and deprecation notice](https://artificialanalysis.ai/models/gemini-2-5-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
