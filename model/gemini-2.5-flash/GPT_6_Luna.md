# Gemini 2.5 Flash — findings by GPT-6 Luna

- Source: Google/Gemini 2.5 Flash
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's stable, hybrid-reasoning model for high-volume, low-latency multimodal processing and agentic use. It remains served for existing users, but Google limits access to people who actively used the 2.5 models before and directs new projects to newer Flash models.
- **Provider / access:** Google Gemini Developer API, model code `gemini-2.5-flash`; Google AI Studio and Vertex AI are also documented surfaces. The API supports `generateContent` and the listed capabilities include function calling, code execution, file search, search/Maps grounding, structured output, and thinking. API access is restricted to prior active users; the stable model is explicitly **not deprecated** and has no shutdown date announced. It is not an OpenCode Zen route.
- **Release / knowledge:** Stable model release **2025-06-17** per Google's deprecations table; its model page lists latest update June 2025. Knowledge cutoff **2025-01**.
- **IDs:** Google API `gemini-2.5-flash`; Vertex AI `gemini-2.5-flash`; OpenRouter `google/gemini-2.5-flash` is a third-party route, not Google's API identifier. Google documentation shows `gemini-2.5-flash-preview-09-2025` as a separate preview ID; preview results are not assigned to this stable model.
- **Context window:** **1,048,576 input tokens; 65,536 output tokens**, verified in Google's exact-model API page. No verified retrieval accuracy result at 512K or 1M was found.
- **Modalities:** Text, image, video, and audio input; text output. The stable API page lists thinking, code execution, function calling, file search, grounding, and structured outputs. Audio generation, image generation, and Live API are listed as unsupported for this ID.
- **Pricing (as of 2026-10-30):** Google's Gemini API standard paid tier: **$0.30/MTok text, image, or video input; $1.00/MTok audio input; $2.50/MTok output including thinking tokens; $0.03/MTok cached text/image/video input**. Standard free-tier pricing is $0 for eligible users, but current access limits are restricted to users who actively used Gemini 2.5 before. Batch paid pricing is $0.15 input / $1.25 output for text/image/video (audio $0.50 input). Prices and eligibility from Google's live pricing page.
- **Architecture:** Proprietary; parameter count and detailed architecture are undisclosed. Google describes Gemini 2.5 as a hybrid reasoning model with configurable thinking budgets.
- **Evaluation caveat:** Google's exact-model API page documents capabilities and limits but publishes no raw GPQA, HLE, SWE-bench, or long-context retrieval score. Vals AI's page is for **“Gemini 2.5 Flash (7/17) (Nonthinking)”**, a dated non-thinking evaluation rather than a fresh test of every current stable serving configuration. Its MedCode/MedScribe results are narrow medical-task proxies, not general coding or reasoning scores. Artificial Analysis labels its own page deprecated and now benchmarks only its default 10K-input workload; this is an evaluator's archival status, not Google's API deprecation. BenchLM currently displays no source-verifiable benchmark rows for the exact stable ID.

### Raw benchmarks found

Agent / tool use:

- Google's exact-model API reference documents **function calling**, **code execution**, **file search**, **Google Search grounding**, **Google Maps grounding**, **structured outputs**, and thinking. These are product capabilities, not measured task scores.
- No verified Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, OSWorld, or Claw-Eval result found for the exact stable model ID.

Reasoning / knowledge:

- Vals AI's dated **Gemini 2.5 Flash (7/17) (Nonthinking)** evaluation reports **MedScribe 82.87% ± 1.91 (#50/109)** and **MedCode 38.42% ± 1.92 (#72/107)**. These are medical documentation/coding tasks and are not general reasoning benchmarks; the Vals page documents default provider Google and a 65,536-token max output setting.
- No verified exact-ID GPQA Diamond, HLE, AA Intelligence Index, MRCR/LCR, CritPt, or MMLU result found. Artificial Analysis reports Intelligence Index **not available / N/A** on its archived page, not a zero score.

Coding:

- The Vals **MedCode 38.42% ± 1.92 (#72/107)** result is a domain-specific medical coding benchmark. It is not SWE-bench, LiveCodeBench, or a general software engineering test.
- No verified SWE-bench Verified/Pro, LiveCodeBench, SciCode, Terminal-Bench, or DeepSWE result found for the exact stable ID.

Long context:

- The API supports up to **1,048,576 input tokens**, but no verified MRCR, RULER, GraphWalks, or other retrieval-accuracy result at 512K+ was found.

Multimodal:

- Google documents image, video, and audio inputs for the stable API ID, with text output. No exact-model benchmark score for multimodal perception was verified. Vals' medical evaluation does not establish broad image/video/audio performance.

### Normalized scores (1–100)

- **Tool use: 70/100.** Function calling, code execution, file search, and multiple grounding routes are documented, but no general tool-use benchmark was verified. This capability-based score is provisional. Source: Google's exact-model API reference.
- **Reasoning: 68/100.** The only exact dated benchmark found is MedScribe 82.87% (a narrow task proxy); Google describes configurable hybrid reasoning, but no GPQA, HLE, MMLU, or Intelligence Index result was found for the stable ID. The lack of general reasoning measurements caps confidence and score. Sources: Vals AI dated 7/17 non-thinking page; Google API model page.
- **Context window: 95/100.** The 1,048,576-token input limit reaches the ≥1M tier, but output is capped at 65,536 and no 512K+ retrieval-accuracy result supports 100. Source: Google's exact-model API reference.
- **Multimodal: 92/100.** Text/image/video/audio input meets the rubric's audio-input band; output is text-only, and no modality benchmark was verified. Source: Google's exact-model API reference.
- **Coding: 65/100.** MedCode 38.42% ± 1.92 is a weak-to-moderate medical coding proxy, while no general software benchmark was verified; do not treat it as SWE-bench. Source: Vals AI's dated 7/17 evaluation.
- **Cost efficiency: 91/100.** The verified paid standard price ($0.30/$2.50 per MTok) is close to the rubric's roughly $0.60/$2.20 reference; an eligible existing user may receive free-tier rates, but Google currently restricts API access to prior active users, so free access is not assumed for a new project. Source: Google Gemini API pricing and model-access notice.
- **Overall Score: 78/100.** Half-up mean of the five quality dimensions: `(70 + 68 + 95 + 92 + 65) / 5 = 78`. Best fit is high-volume, long-input multimodal work where the documented capabilities matter; confidence is limited by sparse general benchmark and long-context retrieval evidence.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Independent review of Google's exact stable-model API reference, deprecations table, live pricing page, Vertex AI/OpenRouter model listings, Artificial Analysis' archived exact-model page, BenchLM's source-coverage status, and Vals AI's dated July 17 non-thinking evaluation. Stable and preview IDs are separated; Vals medical-task results are treated only as narrow proxies. Scores are normalized interpretations, not official vendor ratings.
- Sources: [Google Gemini 2.5 Flash API model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash); [Google Gemini API deprecations](https://ai.google.dev/gemini-api/docs/deprecations); [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing); [Google Vertex AI Gemini 2.5 Flash](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flash); [OpenRouter Gemini 2.5 Flash route](https://openrouter.ai/google/gemini-2.5-flash); [Vals AI Gemini 2.5 Flash (7/17) Nonthinking results](https://www.vals.ai/models/google_gemini-2.5-flash); [Artificial Analysis archived Gemini 2.5 Flash page](https://artificialanalysis.ai/models/gemini-2-5-flash); [BenchLM exact-model evidence page](https://benchlm.ai/models/gemini-2-5-flash).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
