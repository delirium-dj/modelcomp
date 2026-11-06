# Gemini 1.5 Pro — findings by Mercury 3

- Source: Google DeepMind (Gemini 1.5 Pro)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google DeepMind's 2024 long-context flagship — the model that defined the "long-context era" with up to a 2M-token window. Sparse MoE, multimodal (text/vision/audio/video), near-perfect long-context retrieval. Superseded by Gemini 2.0/2.5/3.x.
- **Provider / access:** Gemini API (originally), Google AI Studio, Vertex AI; retired/limited in 2026 — no current first-party API pricing for the retired model (per gate.ai, June 2026).
- **Release / knowledge:** Experimental 2024-02-15; GA 2024-05-14; knowledge cutoff not published.
- **IDs:** `google/gemini-1.5-pro`.
- **Context window:** up to 2,000,000 tokens (historic; 1M at launch); ~99.7%+ needle-in-haystack recall at full context (chatforest).
- **Modalities:** text + image + audio + video input; text output; long-video QA and long-context ASR strengths.
- **Pricing (historic, 2024):** $1.25 in / $5 out per 1M for prompts ≤128K; $2.50/$10 above 128K (some listings show the longer rate only).
- **Architecture:** sparse Mixture-of-Experts (proprietary; params undisclosed).

### Raw benchmarks found

Reasoning / knowledge:

- MMLU: **85.9%** (aibusiness listing)
- Matches/surpasses Gemini 1.0 Ultra across a broad benchmark set (technical report)

Long context:

- 2M-token context (historic) with near-perfect retrieval; state-of-the-art long-document QA, long-video QA, long-context ASR at release (arXiv 2403.05530)

Multimodal:

- Text/vision/audio/video input, text output

Coding / tool use:

- No verified SWE-bench/agentic numbers captured for this generation

### Normalized scores (1–100)

- **Tool use: 70/100.** Predates the agentic era; no verified agentic benchmarks.
- **Reasoning: 74/100.** MMLU 85.9% was strong in 2024; far surpassed since.
- **Context window: 95/100.** Up to 2M with near-perfect retrieval — historically record-setting.
- **Multimodal: 86/100.** Broad native text/image/audio/video input with text output.
- **Coding: 74/100.** No verified coding benchmarks captured; mid-pack for its era.
- **Cost efficiency: 60/100.** Historic $1.25/$5 (≤128K; 2x above) — moderate for 2024, irrelevant today as the model is retired.
- **Overall Score: 80/100.** Mean of the five non-cost dims (70+74+95+86+74)/5 = 79.8 → 80. Best-fit: a historically pivotal long-context multimodal flagship, now retired — legacy use only.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 1.5 technical report (arXiv 2403.05530)](https://arxiv.org/pdf/2403.05530v1)
  - [llm-stats: Gemini 1.5 Pro](https://llm-stats.com/models/gemini-1.5-pro)
  - [Benchgen: Gemini 1.5 Pro](https://benchgen.com/models/google-deepmind/gemini-1-5-pro)
  - [AI Business: Gemini 1.5 Pro review](https://aibusiness.vc/models/gemini-1.5-pro)
  - [Chatforest: Gemini 1.5 Pro long-context review](https://chatforest.com/reviews/google-gemini-1-5-pro-long-context-llm-review/)
  - [Gate.ai: Gemini 1.5 Pro specs/pricing/retirement](https://gate.ai/blog/gemini-1-5-pro-specs-pricing-api-use-cases)
  - [Artificial Analysis: Gemini 1.5 Pro](https://artificialanalysis.ai/models/gemini-1-5-pro)
- Future sources: add a new file next to this one using the same headings.
