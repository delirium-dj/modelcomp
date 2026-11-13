# Gemini 2.5 Pro — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 2.5 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's thinking flagship optimized for long-context reasoning.
- **Provider / access:** Google DeepMind. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-2.5-pro` (Paid-tier pricing)
- **Context window:** 1M tokens total; 64K tokens max output.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-11-13):** $1.25/$10 per 1M (prompts <=200K); $2.50/$15 per 1M (prompts >200K).
- **Architecture:** Proprietary (Pro-line architecture).

### Raw benchmarks found

- AIME: **92%** (Google meta.json)
- GPQA: **84.4%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid agentic performance.
- **Reasoning: 90/100.** Strong reasoning (92% AIME).
- **Context window: 95/100.** 1M tokens.
- **Multimodal: 90/100.** Text, image, audio, video, PDF support.
- **Coding: 88/100.** Reliable coding capability.
- **Cost efficiency: 50/100.** Superseded by 3.x models.
- **Overall Score: 89.6/100.** Reliable flagship, now primarily for migration compatibility.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)
