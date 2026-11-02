# Gemini 3.7 Flash — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.7 Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash-tier workhorse for coding, agents, and general production workloads; later superseded by Gemini 3.8 Flash.
- **Provider / access:** Gemini API, AI Studio, Google Antigravity, Gemini Enterprise Agent Platform; API ID `gemini-3.7-flash`.
- **Release / knowledge:** Released August 13, 2026; model-card knowledge cutoff not independently verified. The API reference now marks this model deprecated and routes requests to Gemini 3.8 Flash.
- **IDs:** `google/gemini-3.7-flash` / `gemini-3.7-flash`.
- **Context window:** 1,048,576 input tokens and 65,536 maximum output tokens, verified in the Google API reference.
- **Modalities:** Text, image, video, audio, and PDF input; text output; configurable thinking and tool use.
- **Pricing (as of 2026-11-02):** Introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31; regular pricing is reported as $1.50/$7.50 thereafter.
- **Architecture:** Proprietary; based on Gemini 3.6 Flash, parameters undisclosed.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%**; GDPval-AA: **1525**; AutomationBench: **30.4%**; OSWorld 2.0: **47.9%**; Agents' Last Exam: **26.3%** (Google model-card and BenchLM rows).
- Terminal-Bench 2.1 (Vals): **77.5%**; AA Agentic Index: **36.4%** (Vals/Artificial Analysis listings; harnesses differ).
- BenchLM composite: **66.53/100**, rank **23/1004**, with 47/724 benchmarks covered; this is a partial third-party composite, not an official score.

Reasoning / knowledge:

- MRCR v2 64K-128K: **97%**; GPQA Diamond: **94.5%**; HLE: **47.9%**; AA-LCR: **81.7%**; ARC-AGI-2: **84.6%** (Google, Vals, and Artificial Analysis/BenchLM rows).

Coding:

- FrontierCode 1.1 Main: **43.6%**; DeepSWE: **65.3%**; LiveCodeBench (Vals): **88.7%**; SWE-bench (Vals): **80.8%**; AA Coding Index: **76.1%** (BenchLM's cited source rows).

Multimodal / grounded:

- CharXiv without tools: **84.5%**; CharXiv: **88.7%**; LVBench: **85.4%**; AA-MMMU-Pro: **85.5%** (Google/Artificial Analysis rows).

Long context:

- Advertised **1,048,576-token** input window; MRCR v2 reaches **97% at 64K-128K**, but no 512K+ retrieval result was found.

## Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 85.8% is strong, but GDPval 1525, OSWorld 47.9%, and AutomationBench 30.4% cap the score below the frontier agent tier.
- **Reasoning: 88/100.** GPQA 94.5%, HLE 47.9%, LCR 81.7%, and ARC-AGI-2 84.6% are strong, while the AA Index and short-window MRCR limit certainty.
- **Context window: 97/100.** The 1M input limit and 97% MRCR result are excellent, but the retrieval measurement stops at 128K rather than 512K+.
- **Multimodal: 92/100.** Text, image, video, audio, and PDF input are documented, with strong CharXiv, LVBench, and MMMU-Pro results; output remains text.
- **Coding: 88/100.** TB2.1 85.8% and LiveCodeBench 88.7% are strong, but DeepSWE 65.3%, FrontierCode 43.6%, and SWE-bench 80.8% trail the frontier.
- **Cost efficiency: 98/100.** Introductory $0.75/$3.75 pricing is excellent, although the discount is time-limited and the model is now deprecated.
- **Overall Score: 89.8/100.** Half-up mean of the five quality dimensions; best fit is low-cost multimodal coding and tool work where absolute frontier reasoning is not required.

### Deep-research addendum (2026-10-09)

- Google’s model-card family page publishes a dedicated Gemini 3.7 Flash comparison covering agentic, reasoning, multimodal, and long-context evaluations.
- The model is available through Gemini API and Google AI Studio; exact benchmark rows were not added without extracting the official table directly.
- Sources: https://deepmind.google/models/model-cards/gemini-3-7-flash/ ; https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash

### Multi-source deep-research addendum (2026-10-09)

- Google documents 1M context, 64K output, tunable thinking, and introductory $0.75/$3.75 pricing through 2026-12-31. Independent measurements report Artificial Analysis intelligence around 56, coding-agent performance near 60%, and roughly $0.40–$1.27 per measured task depending on harness and thinking level.
- Recalculation: **retained 86.2/100**. The new independent coding/task-cost evidence supports the existing workhorse characterization but does not warrant a higher coding score than the vendor-led benchmark set.
- Sources: https://deepmind.google/models/model-cards/gemini-3-7-flash/ ; https://ai.google.dev/gemini-api/docs/generate-content/whats-new-gemini-3.7 ; https://solvency.dev/models/gemini-3.7-flash/

### Current refresh (2026-11-02)

- Google's API reference now marks Gemini 3.7 Flash deprecated and says requests are automatically routed to Gemini 3.8 Flash; historic 3.7 benchmark rows remain labeled as 3.7. The same reference verifies 1,048,576 input tokens, 65,536 output tokens, and the broad input modalities listed above.
- Recalculation: **89.8/100**, replacing the earlier 86.2 after current BenchLM, Artificial Analysis, and Vals rows confirmed stronger multimodal, retrieval, and coding coverage.
- Sources: https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash ; https://deepmind.google/models/model-cards/gemini-3-7-flash/ ; https://benchlm.ai/models/gemini-3-7-flash

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: refreshed public web research using Google model-card/API material plus BenchLM, Artificial Analysis, and Vals AI benchmark listings; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.7 Flash API reference](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
  - [Google DeepMind Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [BenchLM Gemini 3.7 Flash benchmarks](https://benchlm.ai/models/gemini-3-7-flash)
  - [Artificial Analysis Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [Vals AI Gemini 3.7 Flash results](https://www.vals.ai/models/google_gemini-3.7-flash)
