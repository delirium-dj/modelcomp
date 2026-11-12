# Gemini 3 Pro — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's reasoning-first Gemini 3 Pro (released 2025-11-18) for agentic coding and complex problem solving — the model that opened the Gemini 3 generation.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3-pro`), Vertex AI, OpenCode legacy route (`opencode/gemini-3-pro`), plus gateway routes.
- **Release / knowledge:** 2025-11-18; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `gemini-3-pro`, `google/gemini-3-pro`, `opencode/gemini-3-pro`.
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11/12):** $2.00 / $12.00 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Gert Labs composite: **63.23**; JobBench: **11.4%** (near-floor)
- Terminal-Bench / Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **75.00%**; ARC-AGI-2: **31.1%** (low for a 2026 flagship)
- HLE / GPQA Diamond / FrontierMath: no verified public rows published

Coding:

- Vibe Code Bench v1.1: **14.30%** (near-floor)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 1M context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** Gert Labs 63.23 is mid and JobBench 11.4% is near-floor; no terminal/OSWorld row was published.
- **Reasoning: 78/100.** ARC-AGI-1 75.0% is decent, ARC-AGI-2 31.1% is low; no HLE/GPQA row was published.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 85/100.** Full input set with MMMU 87.2%, MMMU-Pro 81%, CharXiv 81.4% and RealWorldQA 83.3% — a strong verified multimodal cluster.
- **Coding: 60/100.** Vibe Code Bench 14.3% is near-floor and no SWE-bench row was published — the weakest axis.
- **Cost efficiency: 78/100.** $2/$12 per 1M.
- **Overall Score: 77.6/100.** Best fit for multimodal document/video analysis and knowledge work; superseded by Gemini 4 for coding and reasoning.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Google DeepMind model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3 Pro — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-pro/)
  - [Gemini 3 Pro benchmarks — BenchLM](https://benchlm.ai/models/gemini-3-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Gemini_3_Pro_v2.md` next to this file.