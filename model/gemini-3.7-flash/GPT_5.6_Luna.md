# Gemini 3.7 Flash — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.7 Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash-tier workhorse for coding, agents, and general production workloads; later superseded by Gemini 3.8 Flash.
- **Provider / access:** Gemini API, AI Studio, Google Antigravity, Gemini Enterprise Agent Platform; API ID `gemini-3.7-flash`.
- **Release / knowledge:** 2026-08-13 release; model-card knowledge cutoff not independently verified.
- **IDs:** `google/gemini-3.7-flash` / `gemini-3.7-flash`.
- **Context window:** 1M tokens; exact maximum output was not verified in the reviewed sources.
- **Modalities:** Text, image, audio, and video input; text output; configurable thinking and tool use.
- **Pricing (as of 2026-10-04):** Introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31; regular pricing reported as $1.50/$7.50 thereafter.
- **Architecture:** Proprietary; based on Gemini 3.6 Flash, parameters undisclosed.

## Raw benchmarks found

Agent / tool use:

- AutomationBench: **30.4%** (Google-reported model-card comparison).
- GDP.pdf: **34.0%** (Google-reported model-card comparison).

Reasoning / knowledge:

- Humanity's Last Exam: **47.9%** (independent tracking).
- GPQA Diamond: **93.9%** (independent tracking).

Coding:

- FrontierCode 1.1 Main: **43.6%** (Google-reported comparison).
- DeepSWE v1.1: **65.3%** (Google-reported comparison).
- Terminal-Bench 2.1: **85.8%** (independent tracking).
- LiveCodeBench: **88.7%** (independent tracking).

Long context:

- No independently verified MRCR/RULER score found in the reviewed sources; 1M context is documented.

Multimodal:

- GDP.pdf document comprehension: **34.0%** (Google-reported comparison).

## Normalized scores (1–100)

- **Tool use: 82/100.** Coding-agent and automation results are useful, but public evidence is thinner than for the newer 3.8 release.
- **Reasoning: 86/100.** GPQA 93.9 and HLE 47.9 are strong for a Flash model, though below current frontier reasoning models.
- **Context window: 89/100.** The 1M nominal window is valuable, but no independent full-window retrieval score was verified.
- **Multimodal: 88/100.** Flash supports broad multimodal input and document understanding, though the verified score set is limited.
- **Coding: 86/100.** DeepSWE 65.3, Terminal-Bench 85.8, and LiveCodeBench 88.7 are strong, with the model positioned as a coding workhorse.
- **Cost efficiency: 98/100.** Introductory $0.75/$3.75 pricing is excellent for production-scale agent traffic.
- **Overall Score: 86.2/100.** Best fit: low-cost coding and tool workflows where high throughput matters more than absolute frontier reasoning.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research using Google model-card/API material and independent benchmark tracking; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
