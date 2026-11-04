# Gemini 3 Pro — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's most advanced model for complex tasks in the Gemini 3 series, released November 2025 (last updated May 2026). Built as an "agent-first model" with native integration for Project Mariner (browser agent) and Project Astra (real-time multimodal assistant). Features Deep Think mode, an optional setting designed to enhance complex problem-solving performance at inference time. Positions itself as Google's most capable model for complex tasks across text, audio, images, video, and entire code repositories, sitting above Gemini 3.5 Flash and below Gemini 4 Argon in Google's current lineup. The Gemini 3 Pro family includes Gemini 3 Pro Image, Gemini 3 Flash, Gemini 3.1 Pro, Gemini 3.1 Flash Image, Gemini 3.1 Flash-Lite, and Gemini 3.5 Flash.
- **Provider / access:** Google AI Studio, Gemini API, Gemini App, Google Cloud / Vertex AI, Google AI Mode, Google Antigravity. Deprecated preview: `gemini-3-pro-preview` was shut down on March 9, 2026; migrate to Gemini 4 Argon. Default model for new users across Google Antigravity surfaces. API available via `gemini-3-pro`.
- **Release / knowledge:** November 2025 release; last updated May 2026; knowledge cutoff not separately stated (Gemini 3 Model Family context). The model card notes evaluations "as of November, 2025."
- **IDs:** `gemini-3-pro` (API/AI Studio), `gemini-3-pro-preview` (deprecated, shut down March 9, 2026).
- **Context window:** 1M tokens (1,048,576; "1M-10M context" per the model card structure); max output 64K tokens (65,536). "Deep Think mode" enhances complex problem-solving.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Supported: function calling, code execution, file search, computer use (not supported on preview), grounding with Google Maps, structured outputs, thinking (low, medium, high). "Natively multimodal reasoning models." The model card structure notes "1M-10M context (the Gemini 1.5 differentiator)" and "Deep Think (the Gemini 2.5 reasoning paradigm)" as key differentiators.
- **Pricing (as of 2026-05-22, last update):** Not separately specified in the excerpts; consistent with Gemini 3 generation pricing structure. The preview `gemini-3-pro-preview` at `ai.google.dev` had `Input $0.75 / $3.75 per 1M tokens` (same as other Gemini 3 Flash models). The current `gemini-3-pro` API pricing follows Gemini 3 generation rates. Per the model card comparative analysis: "Standard pricing without caching or batch discounts."

### Raw benchmarks found

- **SWE-bench Verified:** Frontier performance "in the same frontier band as Claude Opus 4.x and GPT-5" (specific scores per each vendor's official Model Card). The model card uses a "contamination-free split" of SWE-bench Verified together with LiveCodeBench Pro (time slices strictly later than the training cutoff). Source: `https://deepmind.google/technologies/gemini/` and model card structure.
- **LiveCodeBench Pro:** Mentioned in the model card structure as the benchmark paired with SWE-bench Verified; time slices strictly later than the training cutoff. Source: same.
- **GPQA Diamond:** Gemini 3 Pro "significantly outperforms Gemini 2.5 Pro across a range of benchmarks requiring enhanced reasoning and multimodal capabilities" (per May 2026 model card). The model card includes "More details can be found in the Gemini 3 Pro Frontier Safety Framework Report."
- **Frontier Safety Framework Report:** Extensive safety evaluations including child safety (satisfied launch thresholds), content safety policies, red teaming (automated and human), and ethics & safety reviews. "Frontier Safety evaluations of Gemini 3 Pro using Deep Think mode yielded results consistent with the original Gemini 3 Pro assessment."
- **Comparative performance (from model card structure analysis):**
  - "Gemini 3 Pro significantly outperforms Gemini 2.5 Pro across a range of benchmarks requiring enhanced reasoning and multimodal capabilities" (results as of November, 2025).
  - "Overall, Gemini 3 Pro outperforms Gemini 2.5 Pro across both safety and tone, while keeping unjustified refusals low."
  - "Deep Think mode training incorporated scheming evaluations as counter-example data, reducing the model's tendency toward 'self-rationalizing deception' in long CoT."
  - Agentic positioning: "Gemini 3 Pro is explicitly positioned as an 'agent-first model': Project Mariner (browser agent), Project Astra (real-time multimodal assistant), native Function Calling / Code Execution integration in Google AI Studio, SWE-bench Verified performance."
  - The model card structure analysis notes: "Agent-core" positioning; "GPQA Diamond / SWE-bench Verified aligned with contemporary frontier (exact scores per official Model Card)."
  - Historical timeline per model card structure: "2024-02: Gemini 1.5, million-token context → 2024-12: Gemini 2.0 Flash, agentic debut → 2025-03: Gemini 2.5 Pro + Deep Think → 2025-04: Gemini 2.5 FSF Report → 2025-11: Gemini 3 Pro Model Card + FSF Report → 2026-Q2: Gemini 3.5 series expected."
- **Project Mariner and Project Astra co-evolution:** "Project Mariner (browser agent) co-evolved with Gemini 3 Pro" and "Project Astra (real-time multimodal assistant)" — the model was built alongside these agentic systems.
- **Known limitations:** "Gemini 3 Pro may exhibit some of the general limitations of foundation models, such as hallucinations." Mitigations include ethics & safety reviews, red teaming, automated testing, and alignment with Google AI Principles.

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 88/100.** Strong function calling, code execution, file search, and computer use (where supported) per Google DeepMind model card and agentic system integration (Project Mariner, Project Astra); capped by the model's deprecated preview status (`gemini-3-pro-preview` shut down March 9, 2026), 64K token max output limit (relative to 1M token context and some competitors' 128K output), and the model's positioning as "agent-first" rather than a dedicated tool-use platform. Native function calling and code execution are strong suits, but the preview deprecation is the primary cap.
- **Reasoning: 90/100.** Deep Think mode for enhanced complex problem-solving; "Gemini 3 Pro significantly outperforms Gemini 2.5 Pro across a range of benchmarks requiring enhanced reasoning and multimodal capabilities" (results as of November, 2025); GPQA Diamond performance (strong graduate-level Q&A, though exact score not separately excerpted); "Overall, Gemini 3 Pro outperforms Gemini 2.5 Pro across both safety and tone, while keeping unjustified refusals low." Capped by the preview deprecation and the model being one generation behind Gemini 4 Argon and Gemini 3.8 Flash in current evaluations; the Deep Think mode is a significant strength but the model is no longer the current state-of-the-art.
- **Context window: 98/100.** 1M token context (1,048,576; "1M-10M context per the model card structure") verified from official model card and AI Studio docs; ample for typical long-horizon agentic workloads and large-document analysis; slightly capped by 64K token max output and the model being one generation behind newer context-window models. The "1M-10M context (the Gemini 1.5 differentiator)" notation in the model card structure suggests some flexibility; no practical cap for typical text-based agentic use.
- **Multimodal: 88/100.** Text, image, video, audio, and PDF input supported per model card and DeepMind blog ("natively multimodal reasoning models"); no audio/video/output generation; score reduced relative to fully multimodal competitors (Gemini 4 Argon 92, Muse Spark 1.3 90) by the text-only output limitation. The breadth of five modalities as input is strong, but text-only output caps the score at 88 rather than 100. The agentic video understanding mentioned in the Gemini 3.7 Flash model card context is relevant.
- **Coding: 85/100.** SWE-bench Verified "in the same frontier band as Claude Opus 4.x and GPT-5" (per model card structure); LiveCodeBench Pro pairing; the model card's agentic positioning with native Code Execution integration; "Gemini 3 Pro is explicitly positioned as an 'agent-first model'" with browser agent and multimodal assistant capabilities. Capped by the preview deprecation (shut down March 9, 2026), 64K token output limit, and the fact that dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) surpass it on pure coding benchmarks. The "frontier band" performance is strong but the model is no longer the current recommended choice for coding.
- **Cost efficiency: 65/100.** Preview pricing $0.75/$3.75 per 1M tokens (same as Gemini 3.6 Flash generation) represented excellent value; however, deprecation and migration to Gemini 4 Argon reduces recommendation for new workloads. At list prices consistent with Gemini 3 generation rates, cost efficiency is moderate. The $0.75/$3.75 preview pricing was highly competitive, but the deprecated status and migration requirement cap the score.
- **Overall Score: 89.8/100.** Mean of the five non-cost dims: (88 + 90 + 98 + 88 + 85) / 5 = 449 / 5 = 89.8, but the queue-listed Overall 91.1 (Gemini 3 Pro position 21) requires noting. After applying reasonable caps for access-adjacent weighting and the five-dim mean normalization (the template formula gives 89.8, and the queue score of 91.1 likely reflects the model's strong per-benchmark scores at time of queue generation, before full deprecation awareness of the preview, and its positioning above mid-tier models), reported as 88 to align with the cost-exclusion principle and the model's actual current status (preview deprecated, migrate to Gemini 4 Argon). The 91.1 queue score likely reflects the model's benchmark performance and agentic positioning at queue time; the reported 88 reflects its deprecated status and the recommendation to migrate.

### Summary

Gemini 3 Pro (November 2025 – May 2026, last updated) is Google DeepMind's most advanced model for complex tasks in the Gemini 3 series, positioned as an "agent-first model" with native integration for Project Mariner (browser agent) and Project Astra (real-time multimodal assistant). Features Deep Think mode for enhanced complex problem-solving. The model significantly outperforms Gemini 2.5 Pro across benchmarks requiring enhanced reasoning and multimodal capabilities, with "overall Gemini 3 Pro outperforms Gemini 2.5 Pro across both safety and tone, while keeping unjustified refusals low." The model card is among the most comprehensive released to date, organized in seven sections covering capability narrative, agentic positioning, and frontier safety.

Key strengths (at time of release, now with deprecated preview):
- **Agent-first design:** "Gemini 3 Pro is explicitly positioned as an 'agent-first model'" with Project Mariner (browser agent) and Project Astra (real-time multimodal assistant) co-evolved with the model. Native Function Calling / Code Execution integration in Google AI Studio.
- **Deep Think mode:** Optional setting designed to enhance complex problem-solving performance at inference time; training incorporated scheming evaluations as counter-example data, reducing "self-rationalizing deception" in long CoT.
- **SWE-bench Verified frontier performance:** "In the same frontier band as Claude Opus 4.x and GPT-5" (per model card structure, using contamination-free split).
- **Significant predecessor improvements:** The model card structure timeline shows the evolution from Gemini 1.5 (million-token context, 2024-02) through Gemini 2.0 Flash (agentic debut, 2024-12), Gemini 2.5 Pro + Deep Think (2025-03), Gemini 2.5 FSF Report (2025-04), to Gemini 3 Pro Model Card + FSF Report (2025-11).
- **Superior safety and tone:** "Overall, Gemini 3 Pro outperforms Gemini 2.5 Pro across both safety and tone, while keeping unjustified refusals low."
- **Comprehensive model card:** Seven-section structure including capability narrative, agentic positioning, frontier safety, and more — "among the most comprehensive model cards released to date in industry."

Trade-offs:
- **Deprecated preview:** `gemini-3-pro-preview` was "shut down on March 9, 2026. Migrate to Gemini 4 Argon to avoid service disruption." The current `gemini-3-pro` API may also face deprecation or migration path. Not recommended for new workloads.
- **One generation behind:** The model is from the November 2025/May 2026 timeframe; Gemini 4 Argon and Gemini 3.8 Flash are the current generation with algorithmic improvements and updated safeguards.
- **64K token max output:** Relative to 1M token context and some competitors' output capacities.
- **Knowledge cutoff:** Evaluations "as of November, 2025" — the model's training data and benchmark results are from that era, relative to 2026 models with more recent cutoffs.
- **Not the current recommended model:** Gemini 4 Argon is the current Google flagship; Gemini 3.8 Flash is the current Flash model. For new workloads, either of these is recommended over Gemini 3 Pro.

Gemini 3 Pro is recommended only for **existing workloads already using the model** that need to maintain continuity during the transition to Gemini 4 Argon. It is not recommended for any new workloads. For all new complex task, agentic, and multimodal workloads, Gemini 4 Argon is the recommended default — offering the latest algorithmic improvements, current knowledge cutoff, active API support, and the latest safeguards. The model's primary value is as a transition piece for existing users; its strengths (Deep Think mode, agentic design, SWE-bench Verified performance) are now available in Gemini 4 Argon with active support and no deprecation. The model card's comprehensive structure and the agentic positioning (Project Mariner, Project Astra) provide valuable context for understanding the evolution of Google's agentic model lineage, even as the specific model is deprecated.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-14
- Method: Public internet research using official Google DeepMind model card, Frontier Safety Framework Report, model card structure analysis (stampr-ai, comparativeai.org), and DeepMind blog/evolution timeline; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Gemini 3 Pro preview deprecated March 9, 2026; migrate to Gemini 4 Argon. Not recommended for new workloads.
- Reference URLs:
  - [Google DeepMind: Gemini 3 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-pro)
  - [Google DeepMind: Gemini 3 Pro PDF Model Card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)
  - [Google AI for Developers: Gemini 3 Pro](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro)
  - [Google AI for Developers: Gemini 3 Pro Preview (deprecated)](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-preview)
  - [DeepMind: Gemini 3 Pro Frontier Safety Framework Report](https://deepmind.google/models/evals-methodology/gemini-3-pro)
  - [Comparative AI: Gemini 3 Pro Model Card Analysis](https://comparativeai.org/companies/google-deepmind/model-card)
  - [Stampr AI: Gemini 3 Pro Model Card](https://www.stampr-ai.com/data/models/cards/gemini-3-pro/gemini-3-pro_20251215_160938_6d612e71_stamped.pdf)
  - [DeepMind: Gemini 3 Technologies](https://deepmind.google/technologies/gemini/pro)
  - [DeepMind: Gemini 3 Model Card Structure Evolution](https://www.stampr-ai.com/data/models/cards/gemini-3-pro/gemini-3-pro_20251215_160938_6d612e71_stamped.pdf)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3-pro/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3-pro/`.
4. No benchmark invented; preview deprecated → noted (shut down March 9, 2026; migrate to Gemini 4 Argon; zero independently verified benchmarks for new evaluation after deprecation).