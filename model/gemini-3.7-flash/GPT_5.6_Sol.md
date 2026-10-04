# Gemini 3.7 Flash — findings by GPT 5.6 Sol

- Source: Google DeepMind/Gemini 3.7 Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's proprietary Flash workhorse model for economical coding, agents, enterprise workflows, and agentic video understanding.
- **Provider / access:** Gemini API, Google AI Studio, Gemini App Spark, Gemini Enterprise, and Google Antigravity as `gemini-3.7-flash`.
- **Release / knowledge:** Released 2026-08-13; March 2026 knowledge cutoff, with some domains limited to January 2025.
- **IDs:** `google/gemini-3.7-flash`; no verified OpenCode Zen Free ID found.
- **Context window:** 1,048,576 input tokens and 65,536 maximum output tokens.
- **Modalities:** Text, image, audio, video, and PDF input; text output; adjustable reasoning and tool use.
- **Pricing (as of 2026-10-04):** Introductory $0.75/1M input and $3.75/1M output through 2026-12-31; $1.50/$7.50 from 2027-01-01.
- **Architecture:** Proprietary, based on Gemini 3.6 Flash; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 3.0: **85.8% / 14.9%** (Google model card).
- OSWorld 2.0: **47.9%** (Google model card).
- AutomationBench: **30.4%** on a private set (Google model card).
- GDPVal-AA v2: **1525 Elo** (Google model card).
- Agent's Last Exam: **26.3%** pass rate (Google model card).

Reasoning / knowledge:

- HLE-Verified: **53.6%** (Google model card).
- Artificial Analysis Intelligence Index: **56** (Google's August 2026 comparison).
- BioMysteryBench human-solvable / human-difficult: **87.1% / 43.5%**.
- LABBench2: **82.1%**.
- GPQA Diamond / CritPt / Omniscience: no verified public score found in the consulted sources.

Coding:

- DeepSWE v1.1: **65.3%** (Google model card).
- FrontierCode 1.1 Main: **43.6%** (Google model card).
- Code Arena: **1588 Elo** (Google model card).
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in the consulted sources.

Long context:

- GDM-MRCR v2 8-needle at 128K: **97.0%** average, with a supported 1M-token window.

Multimodal:

- CharXiv without / with tools: **84.5% / 88.7%**.
- LVBench long-video understanding: **85.4%**.
- Independent MISHAP-Bench audio hallucination rate: **36.5%** (lower is better).

Sources: [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/), [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/), and [AIEvals model index](https://aievals.app/models/gemini-3-7-flash).

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 and workflow automation are strong for a Flash model, capped by OSWorld, Agent's Last Exam, and the harder Terminal-Bench 3.0.
- **Reasoning: 92/100.** HLE-Verified 53.6% and strong science workflow results demonstrate frontier-adjacent reasoning, with limited independent coverage capping the score.
- **Context window: 96/100.** A 1M-token window and 97% MRCR at 128K are excellent, though full-window retrieval is not directly reported.
- **Multimodal: 94/100.** Native text, image, audio, video, and PDF input plus strong CharXiv and LVBench scores provide broad multimodal competence.
- **Coding: 89/100.** DeepSWE 65.3%, FrontierCode 43.6%, and Code Arena 1588 show strong engineering ability, below the leading flagship tier.
- **Cost efficiency: 95/100.** Introductory $0.75/$3.75 pricing is exceptional for these capabilities, although paid and temporary.
- **Overall Score: 92/100.** Half-up mean of the five quality dimensions; best for economical multimodal agents, coding, and long-context production workloads.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official Google documentation and an independent benchmark index; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
