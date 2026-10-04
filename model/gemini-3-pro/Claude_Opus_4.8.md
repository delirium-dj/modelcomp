# Gemini 3 Pro — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's Gemini 3 Pro — 2M-context multimodal model with an optional Deep Think mode. BenchLM classifies the base as non-reasoning. Top use case: very-long-context multimodal analysis and coding where deep step-by-step reasoning isn't the bottleneck.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3-pro`). No Zen Free ID.
- **Release / knowledge:** Gemini 3 generation (2026); knowledge cutoff not published.
- **IDs:** `google/gemini-3-pro` (no Free ID; Deep Think is a separate variant).
- **Context window:** 2M total / 65K max output (per curated `meta.json`; BenchLM 2M).
- **Modalities:** text, image, audio, video, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-10-03):** paid tier; no exact per-token price verified. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **87.1%**; Gert Labs **63.23%**; JobBench **11.4%** (weak)

Reasoning / knowledge:

- AA Intelligence Index: **28.0** (non-reasoning base); GPQA Diamond **90.8%**; MMLU-Pro **89.8%**
- HLE **39.7%**; ARC-AGI-2 **31.1%**; AA-LCR **76.0%**; CritPt **9.1%**; AA-Omniscience Hallucination Rate **91.5%**

Coding:

- AA LiveCodeBench: **91.7%**; Vibe Code Bench **14.3%** (weak agentic coding)

Multimodal / long context:

- MMMU-Pro **81%**; VideoMMMU **87.6%**; MathVision **86.6%**; V* **88.0%**; CharXiv **81.4%**; ScreenSpot Pro **72.7%**

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 87.1% is strong, but thin agentic coverage and JobBench 11.4% hold it to mid-tier — this base config is not a frontier agent.
- **Reasoning: 74/100.** GPQA-D 90.8% and MMLU-Pro 89.8% are high, but as a non-reasoning base the deliberative scores are low (AA Index 28, ARC-AGI-2 31.1%, CritPt 9.1%). Deep Think mode would score higher.
- **Context window: 96/100.** 2M total — top tier — with AA-LCR 76%.
- **Multimodal: 90/100.** Full image+audio+video+PDF in with strong vision/video (VideoMMMU 87.6%, MMMU-Pro 81%, V* 88%); text out.
- **Coding: 75/100.** AA LiveCodeBench 91.7% is excellent, but Vibe Code Bench 14.3% shows weak end-to-end agentic coding.
- **Cost efficiency: 65/100.** Paid tier; no exact price verified. Scored provisionally.
- **Overall Score: 81.4/100.** Half-up mean of the five quality dims (72/74/96/90/75). A 2M-context multimodal workhorse; reasoning/agentic depth lags the newer 3.1 Pro and Deep Think variant.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google Gemini 3 blog + DeepMind model pages, Artificial Analysis, BenchLM, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
