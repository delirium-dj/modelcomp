# Gemini 2.5 Pro — findings by GPT-6 Luna

- Source: Google/Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's proprietary thinking model for complex reasoning, coding, multimodal understanding, and long-context analysis. This is the Pro model, not Gemini 2.5 Flash.
- **Provider / access:** Google Gemini Developer API, native `models.generateContent` API (not OpenAI Chat Completions). The current Google docs say access to Gemini 2.5 is limited to users who actively used it previously; Google says it is not deprecated and will remain available through the API. The live OpenCode model list checked on 2026-10-29 did not return a `gemini-2.5-pro` route, so findings below use Google's direct API identity, not a verified OpenCode-hosted serving route. [Google model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro) · [OpenCode live model list](https://opencode.ai/inference/v1/models)
- **Release / knowledge:** First announced as a research preview on 2025-03-25; Google's API page labels the stable `gemini-2.5-pro` model as last updated June 2025. Knowledge cutoff: January 2025. Vals AI labels its listed release date July 17, 2025; that later date is retained as a catalog discrepancy, not treated as a distinct model. [Google launch post](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) · [Google model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro) · [Vals AI](https://www.vals.ai/models/google_gemini-2.5-pro)
- **IDs:** Google API ID `gemini-2.5-pro`. Google's technical report explicitly maps the Gemini 2.5 Pro benchmark name to that API ID. The current models.dev catalog also maps the ID to `google/gemini-2.5-pro`; an OpenCode route was not confirmed in its live model list on the date checked. [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf) · [models.dev catalog](https://models.dev/api.json)
- **Context window:** 1,048,576 input tokens; 65,536 output tokens, per Google's model page. [Google model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
- **Modalities:** Text, image, audio, video, and PDF input; text output. Thinking, function calling, and code execution are supported; image/audio generation are not capabilities of this model ID. [Google model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
- **Pricing (as of 2026-10-29):** Google's standard paid tier is $1.25 input / $10 output per 1M tokens for prompts up to 200K, and $2.50 / $15 above 200K. Cached input is $0.125 / $0.25 per 1M tokens at those respective tiers, plus $4.50 per 1M cached tokens per hour of storage. Google's pricing page also lists a free tier, but API access is currently restricted to prior active users. The tracked OpenCode metadata has no separate free ID; the cost score below uses the paid standard tier. Google's free-tier inputs may be used to improve its products; paid-tier inputs are not. [Google pricing](https://ai.google.dev/gemini-api/docs/pricing) · [Google model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
- **Architecture:** Proprietary closed-weight model; Google has not published parameter counts or a detailed architecture card for this API model.

### Raw benchmarks found

> Google’s October 2025 technical report identifies the evaluated API model as `gemini-2.5-pro` (Table 2). Its results are therefore exact-ID evidence. Vendor and independent evaluations use differing harnesses and, for some tasks, different evaluation versions; those results are reported separately below rather than averaged.

Agent / tool use:

- SWE-bench Verified is also an agentic/tool-use proxy: Google reports **59.6% single attempt** and **67.2% multiple attempts** using its custom agent/scaffold. Google cautions that provider SWE-bench results use different scaffolding and infrastructure. [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)
- Vals AI reports Terminal-Bench **2.0: 30.34% ± 4.90** (rank 44/67); this is not Terminal-Bench 2.1. [Vals AI](https://www.vals.ai/models/google_gemini-2.5-pro)
- τ²-Bench, GDPval-AA, and Claw-Eval / ClawProBench: **no verified exact-model score found** in the sources checked.

Reasoning / knowledge:

- GPQA Diamond: Google's technical report reports **86.4%**. BenchLM's October 2026 model page lists **83%** as a reported upstream result; the evaluation details behind that secondary listing are not clear enough to reconcile it with Google's score. [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf) · [BenchLM](https://benchlm.ai/models/gemini-2-5-pro)
- AIME 2025: **88.0%** in Google's technical report; HiddenMath-Hard: **80.5%**. [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)
- Humanity's Last Exam without tools: Google's March 2025 launch post reports **18.8%**; the later October 2025 technical report reports **21.6%**. BenchLM's October 2026 listing gives **18.8%**. These are retained as dated/source-specific results; no common evaluation setup was verified to explain the difference. [Google launch post](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) · [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf) · [BenchLM](https://benchlm.ai/models/gemini-2-5-pro)
- BenchLM reports an aggregate **48.75/100, rank 105/1002**, and says its coverage is partial (**30 of 717** benchmarks); this is its own conservative composite, not Google's or Artificial Analysis' Intelligence Index. [BenchLM](https://benchlm.ai/models/gemini-2-5-pro)

Coding:

- SWE-bench Verified: Google's October 2025 report gives **59.6% single attempt / 67.2% multiple attempts** on its custom agent. Google's March 2025 launch post reported **63.8%** with a custom agent; BenchLM also lists 63.8% as a Google-reported result. Vals AI's separate evaluation reports **54.40% ± 2.23** (rank 82/88). These harness- and date-specific scores are not interchangeable. [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf) · [Google launch post](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) · [Vals AI](https://www.vals.ai/models/google_gemini-2.5-pro) · [BenchLM](https://benchlm.ai/models/gemini-2-5-pro)
- LiveCodeBench: **74.2%**; Aider Polyglot: **82.2%**, both in Google's technical report. [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)
- Vals AI reports Vibe Code Bench v1.1 **0.40% ± 0.40** (rank 117/121). Vals also reports Terminal-Bench 2.0 **30.34% ± 4.90** (rank 44/67); neither is the same harness/version as Google's agentic SWE-bench result. [Vals AI](https://www.vals.ai/models/google_gemini-2.5-pro)
- SciCode and DeepSWE: **no verified exact-model score found** in the sources checked.

Multimodal:

- Google's API specification confirms image, audio, video, and PDF inputs with text output. The technical report includes audio- and video-understanding evaluations, but those results do not measure generated audio/video output. [Google model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro) · [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)

Long context:

- Google's technical report gives LOFT hard retrieval **87.0%** at up to 128K and **69.8%** at exactly 1M tokens; MRCR-V2 (8-needle) is **58.0%** at up to 128K and **16.4%** at exactly 1M. The 1M input limit is real, but these retrieval results show that nominal window size is not equivalent to uniformly reliable retrieval. [Google technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)

### Normalized scores (1–100)

- **Tool use: 65/100.** Google's custom-agent SWE-bench result is substantial, but Vals' Terminal-Bench 2.0 result is 30.34%, no TB 2.1 result was verified, and Claw-Eval is missing.
- **Reasoning: 83/100.** GPQA Diamond 86.4% and AIME 2025 88.0% are strong; the lower HLE results (18.8–21.6%) and the unresolved secondary GPQA discrepancy cap it.
- **Context window: 95/100.** The documented 1,048,576-token window reaches the methodology's ≥1M tier, but 1M MRCR-V2 retrieval at 16.4% is far from the 98% evidence needed for a 100.
- **Multimodal: 94/100.** Officially supports image, audio, video, and PDF input, with reported audio/video evaluations; output remains text-only.
- **Coding: 76/100.** The official 67.2% SWE-bench multiple-attempt result, 74.2% LiveCodeBench, and 82.2% Aider Polyglot are strong, but Vals' 54.40% SWE-bench, 0.40% Vibe score, and low TB 2.0 result show meaningful harness/task variation.
- **Cost efficiency: 76/100.** The paid standard rate is $1.25/$10 per 1M through 200K and $2.50/$15 above 200K; the documented free tier is access-limited and is not a verified OpenCode Free ID.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions: (65 + 83 + 95 + 94 + 76) / 5 = 82.6 → 83; cost is excluded. Best suited to multimodal reasoning and long-document analysis when Google API access is available; verify retrieval quality and agent harness fit before relying on it for large-repository coding.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent web-search engines (Yahoo, DuckDuckGo, and Yandex), followed by direct checks of Google's API/model/pricing documentation, launch post, and technical report, plus Vals AI, BenchLM, models.dev, and the live OpenCode model list. Dated and harness-specific conflicts are preserved; scores are normalized interpretations under `model-comparison.md`, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
