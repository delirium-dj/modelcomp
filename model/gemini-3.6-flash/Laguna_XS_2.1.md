# Gemini 3.6 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-tier agentic workhorse (2026-07-21) — better coding, knowledge work and computer use than 3.5 Flash with ~17% fewer output tokens; now previous generation Flash behind 3.7/3.8 Flash at promo rate.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.6-flash`, stable GA), Vertex AI, Gemini Enterprise Agent Platform, Google Antigravity, Gemini app, GitHub Copilot. Thinking levels MINIMAL/LOW/MEDIUM (default)/HIGH. Free tier in AI Studio.
- **Release / knowledge:** 2026-07-21 (GA); knowledge cutoff March 2026.
- **Context window:** 1,048,576 tokens in / 65,536 out.
- **Modalities:** text, image, video, audio, PDF in; text out; computer use built-in tool; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing:** promo $0.75 / $3.75 per 1M in/out through 2026-12-31.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0%** (Google model card)
- Terminal-Bench 2.1: **78.0%** (Terminus-2)
- GDPval-AA v2: **1421 Elo** (Google model card)
- BU Bench: **68%**
- CursorBench 3.2: **53.5%** (AI Release Tracker)

Reasoning / knowledge:

- AA Intelligence Index: **34** (AA via HokAI)
- CharXiv Reasoning: **85.2%** no tools / 89.4% with tools (Google)

Coding:

- SWE-bench Pro (Public): **58.7%** (Google model card)
- DeepSWE v1.1: **49%** (Google model card)
- MLE-Bench: **63.9%** (Google model card)

Long context:

- GDM-MRCR v2 (8-needle): **91.8%** at 128K average; **54.0%** at 1M pointwise

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 83.0% (built-in computer-use), TB 2.1 78.0% and GDPval v2 1421 are strong for Flash tier.
- **Reasoning: 72/100.** CharXiv 85.2% and Arena Text 1482 are decent; capped by AA Index 34 and no public GPQA/HLE rows.
- **Context window: 95/100.** 1M window with MRCR v2 91.8% at 128K — best 1M-pointwise of Gemini generation.
- **Multimodal: 95/100.** Text/image/video/audio/PDF in (audio-in tier 90–100).
- **Coding: 78/100.** SWE-bench Pro 58.7%, MLE-Bench 63.9% and TB 2.1 78.0%.
- **Cost efficiency: 90/100.** Promo $0.75/$3.75 between 92 and 88 anchors.
- **Overall Score: 83.6/100.** Mean of (78,72,95,95,78)/5 = 83.6 — capable, cheap agentic workhorse.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-11
- Method: public internet research (Google launch, model card, Gemini docs, AA); scores normalized 1-100 interpretations.